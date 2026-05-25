const crypto = require("node:crypto");
const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");
const { DatabaseSync } = require("node:sqlite");

const rootDir = __dirname;
const isProduction = process.env.NODE_ENV === "production";
const dbPath = process.env.LEARNING_ASSISTANT_DB || path.join(rootDir, "data", "learning-assistant.sqlite");
const dbDir = path.dirname(dbPath);
const host = process.env.HOST || "127.0.0.1";
const port = Number(process.env.PORT || 8080);
const defaultUsername = process.env.LEARNING_ASSISTANT_USER || "admin";
const defaultPassword = process.env.LEARNING_ASSISTANT_PASSWORD || "CodeLearning2026!";
const sessionDays = Number(process.env.LEARNING_ASSISTANT_SESSION_DAYS || 14);

validateRuntimeConfig();

fs.mkdirSync(dbDir, { recursive: true });

const db = new DatabaseSync(dbPath);
db.exec(fs.readFileSync(path.join(rootDir, "db", "schema.sql"), "utf8"));
seedOwnerUser();

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".webmanifest": "application/manifest+json; charset=utf-8",
};

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    if (url.pathname.startsWith("/api/")) {
      await handleApi(req, res, url);
      return;
    }
    serveStatic(res, url.pathname);
  } catch (error) {
    console.error(error);
    sendJson(res, 500, { error: "INTERNAL_ERROR", message: "服务端处理失败。" });
  }
});

server.listen(port, host, () => {
  console.log(`Learning assistant running at http://${host}:${port}`);
  console.log(`SQLite database: ${dbPath}`);
  console.log(`Runtime mode: ${isProduction ? "production" : "development"}`);
});

function validateRuntimeConfig() {
  if (!Number.isInteger(port) || port <= 0 || port > 65535) {
    throw new Error("PORT 必须是 1-65535 之间的整数。");
  }
  if (isProduction && defaultPassword === "CodeLearning2026!") {
    throw new Error("生产环境必须通过 LEARNING_ASSISTANT_PASSWORD 设置强密码，禁止使用默认密码。");
  }
  if (isProduction && defaultPassword.length < 12) {
    throw new Error("生产环境密码长度至少 12 位。");
  }
}

function seedOwnerUser() {
  const existing = db.prepare("SELECT id FROM users WHERE username = ?").get(defaultUsername);
  if (existing) return;

  const now = new Date().toISOString();
  db.prepare(
    "INSERT INTO users (id, username, display_name, password_hash, role, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?)",
  ).run(createId("usr"), defaultUsername, "王坤", hashPassword(defaultPassword), "owner", now, now);
}

async function handleApi(req, res, url) {
  if (req.method === "GET" && url.pathname === "/api/health") {
    sendJson(res, 200, { ok: true, mode: "sqlite", now: new Date().toISOString() });
    return;
  }

  if (req.method === "POST" && url.pathname === "/api/auth/login") {
    const body = await readJson(req);
    const user = db.prepare("SELECT * FROM users WHERE username = ?").get(String(body.username || "").trim());
    if (!user || !verifyPassword(String(body.password || ""), user.password_hash)) {
      sendJson(res, 401, { error: "INVALID_CREDENTIALS", message: "账号或密码不正确。" });
      return;
    }
    const token = crypto.randomBytes(32).toString("hex");
    const expiresAt = new Date(Date.now() + sessionDays * 24 * 60 * 60 * 1000).toISOString();
    db.prepare("INSERT INTO sessions (id, user_id, token_hash, expires_at) VALUES (?, ?, ?, ?)").run(
      createId("ses"),
      user.id,
      sha256(token),
      expiresAt,
    );
    sendJson(res, 200, {
      token,
      expiresAt,
      user: { id: user.id, username: user.username, displayName: user.display_name, role: user.role },
    });
    return;
  }

  const user = authenticate(req);
  if (!user) {
    sendJson(res, 401, { error: "UNAUTHENTICATED", message: "请先登录。" });
    return;
  }

  if (req.method === "GET" && url.pathname === "/api/me") {
    sendJson(res, 200, { user });
    return;
  }

  if (req.method === "GET" && url.pathname === "/api/progress") {
    const row = db.prepare("SELECT state_json, version, updated_at FROM learning_progress WHERE user_id = ?").get(user.id);
    sendJson(res, 200, row ? { state: JSON.parse(row.state_json), version: row.version, updatedAt: row.updated_at } : { state: null });
    return;
  }

  if (req.method === "PUT" && url.pathname === "/api/progress") {
    const body = await readJson(req);
    const now = new Date().toISOString();
    db.prepare(
      `INSERT INTO learning_progress (user_id, state_json, version, updated_at)
       VALUES (?, ?, 1, ?)
       ON CONFLICT(user_id) DO UPDATE SET
         state_json = excluded.state_json,
         version = learning_progress.version + 1,
         updated_at = excluded.updated_at`,
    ).run(user.id, JSON.stringify(body.state || {}), now);
    sendJson(res, 200, { ok: true, updatedAt: now });
    return;
  }

  if (url.pathname === "/api/resources") {
    handleCollection(req, res, user, "learning_resources", mapResourceInput, mapJsonColumns(["tags_json"]));
    return;
  }

  if (url.pathname === "/api/domain-cards") {
    handleCollection(req, res, user, "domain_cards", mapDomainCardInput, mapJsonColumns(["related_links_json"]));
    return;
  }

  if (url.pathname === "/api/document-templates") {
    handleCollection(req, res, user, "document_templates", mapTemplateInput, (row) => row);
    return;
  }

  sendJson(res, 404, { error: "NOT_FOUND", message: "接口不存在。" });
}

async function handleCollection(req, res, user, table, inputMapper, outputMapper) {
  if (req.method === "GET") {
    const rows = db.prepare(`SELECT * FROM ${table} WHERE user_id = ? OR user_id IS NULL ORDER BY updated_at DESC`).all(user.id);
    sendJson(res, 200, { items: rows.map(outputMapper) });
    return;
  }

  if (req.method === "POST") {
    const body = await readJson(req);
    const now = new Date().toISOString();
    const record = { id: createId("rec"), user_id: user.id, ...inputMapper(body), created_at: now, updated_at: now };
    insertRecord(table, record);
    sendJson(res, 201, { item: outputMapper(record) });
    return;
  }

  sendJson(res, 405, { error: "METHOD_NOT_ALLOWED", message: "当前资源不支持该请求方法。" });
}

function insertRecord(table, record) {
  const columns = Object.keys(record);
  const placeholders = columns.map(() => "?").join(", ");
  db.prepare(`INSERT INTO ${table} (${columns.join(", ")}) VALUES (${placeholders})`).run(...columns.map((key) => record[key]));
}

function mapResourceInput(body) {
  return {
    title: requireText(body.title, "资源标题不能为空。"),
    url: optionalText(body.url),
    resource_type: optionalText(body.resourceType) || "文章",
    source: optionalText(body.source),
    week_id: optionalText(body.weekId),
    difficulty: optionalText(body.difficulty) || "入门",
    status: optionalText(body.status) || "待读",
    value_score: clampInt(body.valueScore, 1, 5, 3),
    domain: optionalText(body.domain),
    tags_json: JSON.stringify(Array.isArray(body.tags) ? body.tags : []),
    takeaway: optionalText(body.takeaway),
    output_link: optionalText(body.outputLink),
  };
}

function mapDomainCardInput(body) {
  return {
    title: requireText(body.title, "知识卡片标题不能为空。"),
    domain: requireText(body.domain, "业务域不能为空。"),
    problem_type: optionalText(body.problemType),
    background: optionalText(body.background),
    current_problem: optionalText(body.currentProblem),
    business_rules: optionalText(body.businessRules),
    key_objects: optionalText(body.keyObjects),
    data_fields: optionalText(body.dataFields),
    state_flow: optionalText(body.stateFlow),
    business_flow: optionalText(body.businessFlow),
    exception_cases: optionalText(body.exceptionCases),
    productization_judgment: optionalText(body.productizationJudgment),
    dev_questions: optionalText(body.devQuestions),
    acceptance_criteria: optionalText(body.acceptanceCriteria),
    risks: optionalText(body.risks),
    related_links_json: JSON.stringify(Array.isArray(body.relatedLinks) ? body.relatedLinks : []),
  };
}

function mapTemplateInput(body) {
  return {
    name: requireText(body.name, "模板名称不能为空。"),
    doc_type: requireText(body.docType, "文档类型不能为空。"),
    audience: optionalText(body.audience) || "自己",
    purpose: optionalText(body.purpose),
    content_md: requireText(body.contentMd, "模板内容不能为空。"),
    is_system: 0,
  };
}

function mapJsonColumns(columns) {
  return (row) => {
    const item = { ...row };
    columns.forEach((column) => {
      const key = column.replace(/_json$/, "");
      item[key] = JSON.parse(item[column] || "[]");
      delete item[column];
    });
    return item;
  };
}

function authenticate(req) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : "";
  if (!token) return null;
  const row = db
    .prepare(
      `SELECT users.id, users.username, users.display_name, users.role
       FROM sessions
       JOIN users ON users.id = sessions.user_id
       WHERE sessions.token_hash = ? AND sessions.expires_at > ?`,
    )
    .get(sha256(token), new Date().toISOString());
  return row ? { id: row.id, username: row.username, displayName: row.display_name, role: row.role } : null;
}

function serveStatic(res, pathname) {
  const safePath = pathname === "/" ? "/index.html" : decodeURIComponent(pathname);
  const filePath = path.normalize(path.join(rootDir, safePath));
  if (!filePath.startsWith(rootDir)) {
    sendText(res, 403, "Forbidden");
    return;
  }
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    sendText(res, 404, "Not found");
    return;
  }
  const ext = path.extname(filePath);
  res.writeHead(200, {
    ...securityHeaders(),
    "Content-Type": mimeTypes[ext] || "application/octet-stream",
    "Cache-Control": ext === ".html" ? "no-cache" : "public, max-age=3600",
  });
  fs.createReadStream(filePath).pipe(res);
}

function readJson(req) {
  return new Promise((resolve, reject) => {
    let raw = "";
    req.on("data", (chunk) => {
      raw += chunk;
      if (raw.length > 1024 * 1024) {
        reject(new Error("Request body too large"));
        req.destroy();
      }
    });
    req.on("end", () => {
      try {
        resolve(raw ? JSON.parse(raw) : {});
      } catch (error) {
        reject(error);
      }
    });
  });
}

function sendJson(res, status, payload) {
  res.writeHead(status, { ...securityHeaders(), "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(payload));
}

function sendText(res, status, text) {
  res.writeHead(status, { ...securityHeaders(), "Content-Type": "text/plain; charset=utf-8" });
  res.end(text);
}

function securityHeaders() {
  return {
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "Referrer-Policy": "no-referrer",
    "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  };
}

function createId(prefix) {
  return `${prefix}_${crypto.randomUUID().replaceAll("-", "")}`;
}

function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.pbkdf2Sync(password, salt, 210000, 32, "sha256").toString("hex");
  return `pbkdf2_sha256$210000$${salt}$${hash}`;
}

function verifyPassword(password, stored) {
  const [algorithm, iterations, salt, hash] = String(stored).split("$");
  if (algorithm !== "pbkdf2_sha256") return false;
  const actual = crypto.pbkdf2Sync(password, salt, Number(iterations), 32, "sha256").toString("hex");
  return crypto.timingSafeEqual(Buffer.from(actual, "hex"), Buffer.from(hash, "hex"));
}

function sha256(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function requireText(value, message) {
  const text = optionalText(value);
  if (!text) throw new Error(message);
  return text;
}

function optionalText(value) {
  const text = typeof value === "string" ? value.trim() : "";
  return text || null;
}

function clampInt(value, min, max, fallback) {
  const number = Number.parseInt(value, 10);
  if (Number.isNaN(number)) return fallback;
  return Math.min(max, Math.max(min, number));
}
