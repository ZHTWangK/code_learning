#!/usr/bin/env bash
set -euo pipefail

PORT="${1:-8080}"
HOST="127.0.0.1"

echo "Serving learning-assistant at http://${HOST}:${PORT}"
echo "This binds to ${HOST} only and does not expose a public web port."

python3 -m http.server "${PORT}" --bind "${HOST}"
