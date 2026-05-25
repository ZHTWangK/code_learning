#!/usr/bin/env bash
set -euo pipefail

APP_DIR="${APP_DIR:-/var/www/code_learning}"
APP_USER="${APP_USER:-www-data}"
APP_PORT="${APP_PORT:-8080}"
APP_HOST="${APP_HOST:-127.0.0.1}"
APP_PASSWORD="${LEARNING_ASSISTANT_PASSWORD:-}"
REPO_URL="${REPO_URL:-https://github.com/ZHTWangK/code_learning.git}"

if [ -z "$APP_PASSWORD" ] || [ "$APP_PASSWORD" = "CodeLearning2026!" ]; then
  echo "LEARNING_ASSISTANT_PASSWORD must be set to a strong production password." >&2
  exit 1
fi

if [ "$(id -u)" -ne 0 ]; then
  echo "This script must run as root." >&2
  exit 1
fi

install_node() {
  if command -v node >/dev/null 2>&1; then
    major="$(node -p "process.versions.node.split('.')[0]" 2>/dev/null || echo 0)"
    if [ "$major" -ge 22 ]; then
      return
    fi
  fi

  apt-get update
  apt-get install -y ca-certificates curl gnupg git nginx
  install -d -m 0755 /etc/apt/keyrings
  curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key \
    | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
  echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_22.x nodistro main" \
    > /etc/apt/sources.list.d/nodesource.list
  apt-get update
  apt-get install -y nodejs
}

sync_code() {
  if [ -d "$APP_DIR/.git" ]; then
    git -C "$APP_DIR" fetch origin main
    git -C "$APP_DIR" reset --hard origin/main
  else
    mkdir -p "$(dirname "$APP_DIR")"
    git clone "$REPO_URL" "$APP_DIR"
  fi
}

write_env() {
  mkdir -p "$APP_DIR/data"
  cat > "$APP_DIR/.env" <<ENV
NODE_ENV=production
HOST=$APP_HOST
PORT=$APP_PORT
LEARNING_ASSISTANT_USER=admin
LEARNING_ASSISTANT_PASSWORD=$APP_PASSWORD
LEARNING_ASSISTANT_DB=$APP_DIR/data/learning-assistant.sqlite
LEARNING_ASSISTANT_SESSION_DAYS=14
ENV
  chown -R "$APP_USER:$APP_USER" "$APP_DIR/data"
  chmod 600 "$APP_DIR/.env"
}

write_service() {
  cat > /etc/systemd/system/learning-assistant.service <<SERVICE
[Unit]
Description=Learning Assistant
After=network.target

[Service]
Type=simple
WorkingDirectory=$APP_DIR
EnvironmentFile=$APP_DIR/.env
ExecStart=/usr/bin/node $APP_DIR/server.js
Restart=always
RestartSec=5
User=$APP_USER
Group=$APP_USER

[Install]
WantedBy=multi-user.target
SERVICE
}

write_nginx() {
  cat > /etc/nginx/sites-available/code_learning <<NGINX
server {
  listen 80;
  listen [::]:80;
  server_name _;

  location / {
    proxy_pass http://127.0.0.1:$APP_PORT;
    proxy_http_version 1.1;
    proxy_set_header Host \$host;
    proxy_set_header X-Real-IP \$remote_addr;
    proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto \$scheme;
  }
}
NGINX
  ln -sfn /etc/nginx/sites-available/code_learning /etc/nginx/sites-enabled/code_learning
  rm -f /etc/nginx/sites-enabled/default
}

install_node
sync_code
cd "$APP_DIR"
npm ci
write_env
write_service
write_nginx

systemctl daemon-reload
systemctl enable learning-assistant
systemctl restart learning-assistant
nginx -t
systemctl reload nginx

sleep 2
curl --fail "http://127.0.0.1:$APP_PORT/api/health"
echo
systemctl --no-pager --full status learning-assistant | sed -n '1,12p'
