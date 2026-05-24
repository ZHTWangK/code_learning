# 部署准备记录

## 当前边界

- 当前项目是纯静态 Web 应用，不需要安装 Node、数据库或后端运行时。
- 本轮只做部署准备和本机验证，不开放公网 Web 端口。
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
5. 如使用 GitHub Pages，优先选择 Pages 托管，不在本机暴露公网端口。

## 后续可选项

- 初始化 Git 仓库并提交当前静态站点。
- 创建 GitHub 仓库并推送。
- 开启 GitHub Pages。
- 如需要多端云同步，再单独评估 Supabase、GitHub Gist 或 Notion API。
