# 部署准备记录

## 当前边界

- 当前项目是纯静态 Web 应用，不需要安装 Node、数据库或后端运行时。
- 公网发布已使用腾讯云轻量应用服务器承载，不在本机开放公网 Web 端口。
- 本地预览默认绑定 `127.0.0.1`，只允许本机访问。

## 已确认基础组件

- Python 3 可用，可直接使用 `python3 -m http.server` 预览静态页面。
- 项目入口为 `index.html`。
- PWA 相关文件包含 `manifest.webmanifest` 与 `service-worker.js`。

## 本地预览

运行：

```bash
./serve-local.sh
```

访问：

```text
http://127.0.0.1:8080
```

如端口被占用，可指定其他本机端口：

```bash
./serve-local.sh 8090
```

## 发布前检查清单

1. 用本地预览打开页面，确认导航、导出、导入、周报、重置等交互可用。
2. 在浏览器开发者工具中确认没有明显的控制台错误。
3. 确认 `manifest.webmanifest`、`service-worker.js`、`icon.svg` 可以正常访问。
4. 确认仓库初始化后再推送到 GitHub。
5. 如使用腾讯云服务器，确认 Nginx、站点目录和轻量云防火墙规则都正常。

## 腾讯云部署记录

- 实例 ID：`lhins-kyu5a27g`
- 实例公网 IP：`111.229.245.185`
- 系统：Ubuntu Server 24.04 LTS 64bit
- Web 服务：Nginx
- 站点目录：`/var/www/code_learning`
- 代码来源：`https://github.com/ZHTWangK/code_learning.git`
- Nginx 配置：`/etc/nginx/sites-available/code_learning`
- 已放行端口：`TCP:80`，来源 `0.0.0.0/0`
- 公网访问地址：`http://111.229.245.185/`
- 验证结果：公网 `HTTP 200 OK`，返回 `index.html` 长度 `11411` 字节。

## 后续可选项

- 初始化 Git 仓库并提交当前静态站点。
- 创建 GitHub 仓库并推送。
- 开启 GitHub Pages。
- 部署到腾讯云轻量应用服务器。
- 如需要多端云同步，再单独评估 Supabase、GitHub Gist 或 Notion API。

## 账号认证说明

- 当前登录门禁账号为 `admin`。
- 当前登录门禁密码为 `CodeLearning2026!`。
- 该认证在浏览器前端执行，不能替代服务端认证；公网发布后源码仍可被查看。
