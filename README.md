# 全链路学习助手

这是一个给在职产品经理与研发管理者使用的静态 Web 学习操作台，围绕 Git/GitHub、AI 辅助编程、研发协作、CI/CD 和小产品闭环交付设计。

## 打开方式

直接用浏览器打开 `index.html` 即可使用。

如果希望启用真实登录和 SQLite 本地服务端同步，建议运行：

```bash
npm run dev
```

然后访问 `http://127.0.0.1:8080`。

默认账号仍是：

- 账号：`admin`
- 密码：`CodeLearning2026!`

可以用环境变量覆盖：

```bash
LEARNING_ASSISTANT_USER=admin LEARNING_ASSISTANT_PASSWORD=你的强密码 npm run dev
```

如果希望用本机 HTTP 服务预览，可以在本目录运行：

```bash
./serve-local.sh
```

然后用浏览器访问 `http://127.0.0.1:8080`。这个脚本只绑定本机地址，不开放公网 Web 端口。

如果后续明确需要局域网或手机访问，再单独运行：

```bash
python3 -m http.server 8080
```

然后用浏览器访问 `http://localhost:8080`。同一局域网内的手机可以访问电脑的局域网 IP 地址加端口。

## 数据保存

- 任务进度和复盘笔记保存在当前浏览器的 localStorage。
- 通过 `npm run dev` 启动后，进度会同步到本地 SQLite 数据库。
- 左侧“导出”会生成 `learning-progress.json`，可在另一台设备导入。
- 左侧“周报”会生成 Markdown 周报，适合放进 GitHub 仓库。
- 当前版本不上传任何个人数据；SQLite 默认保存在 `data/learning-assistant.sqlite`。

## 账号门禁

当前静态版本带有一个轻量前端登录门禁：

- 账号：`admin`
- 密码：`CodeLearning2026!`

通过 `npm run dev` 启动时，会使用服务端认证和会话 token。直接打开 `index.html` 时仍是静态页面里的浏览器端门禁，适合防止随手误入；如果要部署到公网，必须先改强密码，并考虑 HTTPS、反向代理或 Cloudflare Access 等保护。

## 数据库设计

数据库设计见 `docs/DATABASE_DESIGN.md`，建表脚本见 `db/schema.sql`。

## 腾讯云部署

如果只需要静态本地模式，可以继续用 GitHub Pages。

如果需要真实登录、SQLite 数据保存和多端同步入口，需要部署 Node 服务。推荐把代码托管到 GitHub，再部署到腾讯云轻量应用服务器、CVM 或支持 Docker 的云托管环境。

部署说明见：

- `docs/TENCENT_CLOUD_DEPLOYMENT.md`

生产环境必须设置强密码：

```bash
LEARNING_ASSISTANT_PASSWORD=你的强密码
```

如果 `NODE_ENV=production` 但仍使用默认密码，服务会拒绝启动。
