# 腾讯云部署说明

## 1. 结论

本项目可以托管到 GitHub，并部署到腾讯云 CVM、轻量应用服务器或支持 Docker 的云托管环境。

推荐 MVP 部署方式：

1. GitHub 托管代码。
2. 腾讯云轻量应用服务器或 CVM 拉取代码。
3. 使用 Docker Compose 启动 Node 服务。
4. SQLite 数据通过 Docker volume 持久化。
5. 外层使用腾讯云安全组和 HTTPS 反向代理保护访问。

## 2. 部署前必须确认

| 项目 | 要求 |
| --- | --- |
| Node 版本 | 需要 Node 22，因为当前使用内置 `node:sqlite` |
| 生产密码 | 必须设置 `LEARNING_ASSISTANT_PASSWORD`，不能使用默认密码 |
| 数据持久化 | 必须挂载 `/app/data`，否则容器重建会丢数据 |
| 端口 | 容器内默认 `8080`，云服务器安全组按需开放 |
| HTTPS | 公网访问建议放到 Nginx / 宝塔 / 腾讯云 EdgeOne / CLB 后面 |

## 3. GitHub 托管

可以提交的内容：

- 前端静态文件
- `server.js`
- `db/schema.sql`
- `Dockerfile`
- `docker-compose.yml`
- 文档

不要提交的内容：

- `data/learning-assistant.sqlite`
- `.env`
- 任何真实密码、token、证书

`.gitignore` 已忽略 `data/` 和 `node_modules/`。

## 4. 腾讯云服务器部署

### 4.1 拉取代码

```bash
git clone <你的 GitHub 仓库地址>
cd learning-assistant
```

### 4.2 设置生产密码

```bash
cp .env.example .env
```

编辑 `.env`：

```text
LEARNING_ASSISTANT_PASSWORD=换成你的强密码
```

### 4.3 启动

```bash
docker compose --env-file .env up -d --build
```

### 4.4 健康检查

```bash
curl http://127.0.0.1:8080/api/health
```

预期返回：

```json
{"ok":true,"mode":"sqlite"}
```

## 5. 反向代理建议

如果使用 Nginx，可以把域名代理到本机 `8080`：

```nginx
server {
  listen 80;
  server_name your-domain.com;

  location / {
    proxy_pass http://127.0.0.1:8080;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```

公网部署时建议再配置 HTTPS。

## 6. 备份

SQLite 数据在 Docker volume 中。建议定期备份：

```bash
docker run --rm \
  -v learning-assistant_learning-assistant-data:/data \
  -v "$PWD/backups:/backup" \
  busybox \
  cp /data/learning-assistant.sqlite /backup/learning-assistant.sqlite
```

备份文件包含个人学习数据，不能提交到 GitHub。

## 7. 当前限制

- 当前是单用户个人工具，不适合多人公开注册。
- 当前使用 SQLite，适合个人和低并发场景。
- 如果后续要做公开产品，建议迁移到 PostgreSQL / MySQL，并补充权限、审计、备份恢复和日志监控。
