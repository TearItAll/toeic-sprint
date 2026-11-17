// 產生獨立網站版：node build-site.js → ../toeic-site
// 網站檔案放在 public/，根目錄是 Netlify 部署設定與同步用的 function。
// 只重建 public/ 和設定檔，保留 node_modules 和 .netlify（裡面記著已連結的網站）。
// 內容和 claude.ai 版共用同一份 index.html，只是補上完整的 <head>、PWA 設定與離線快取。
const fs = require("fs"), path = require("path");
const SRC = __dirname, ROOT = path.join(SRC, "..", "toeic-site"), OUT = path.join(ROOT, "public");
fs.mkdirSync(ROOT, { recursive: true });
for (const f of fs.readdirSync(ROOT)) if (!["node_modules", ".netlify", "package-lock.json", ".gitignore"].includes(f)) fs.rmSync(path.join(ROOT, f), { recursive: true, force: true });
fs.mkdirSync(path.join(OUT, "audio"), { recursive: true });

const JS = ["bank.js", "zh.js", "bank2.js", "bank3.js", "bank4.js", "vocab2.js", "listen.js", "listen2.js", "listen3.js"];
JS.forEach(f => fs.copyFileSync(path.join(SRC, f), path.join(OUT, f)));
const audio = fs.readdirSync(path.join(SRC, "audio"));
audio.forEach(f => fs.copyFileSync(path.join(SRC, "audio", f), path.join(OUT, "audio", f)));
["icon-192.png", "icon-512.png", "icon-maskable-512.png", "apple-touch-icon.png"].forEach(f => {
  if (fs.existsSync(path.join(SRC, "icons", f))) fs.copyFileSync(path.join(SRC, "icons", f), path.join(OUT, f));
});

// 頁面：把開頭的 title/字型/樣式移進 <head>，其餘放進 <body>
const page = fs.readFileSync(path.join(SRC, "index.html"), "utf8");
const cut = page.indexOf("</style>") + "</style>".length;
const head = page.slice(0, cut).replace('<meta name="claude:viewport-fit-sides" content="cover">\n', "");
const body = page.slice(cut);
const html = `<!DOCTYPE html>
<html lang="zh-Hant">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="description" content="多益衝分站：前測、每日題組練習、考試模式模考、錯題本、拼字練習，附中文翻譯與詳解。">
<meta name="theme-color" content="#B3306A">
<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" href="icon-192.png" type="image/png">
<link rel="apple-touch-icon" href="apple-touch-icon.png">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="多益衝分站">
<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style>
${head}
</head>
<body>${body}
<script>
// 離線快取：網站版才註冊（claude.ai 版不支援 service worker）
if (!window.claude && "serviceWorker" in navigator) addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
</script>
</body>
</html>
`;
fs.writeFileSync(path.join(OUT, "index.html"), html);

fs.writeFileSync(path.join(OUT, "manifest.webmanifest"), JSON.stringify({
  name: "多益衝分站", short_name: "多益衝分", lang: "zh-Hant", start_url: "./", scope: "./", display: "standalone",
  background_color: "#F2F3EF", theme_color: "#B3306A",
  icons: [
    { src: "icon-192.png", sizes: "192x192", type: "image/png" },
    { src: "icon-512.png", sizes: "512x512", type: "image/png" },
    { src: "icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" }
  ]
}, null, 2));

// 版本號跟著內容變，更新網站後舊快取會自動換掉
const ver = require("crypto").createHash("sha1").update(html + JS.map(f => fs.readFileSync(path.join(SRC, f), "utf8")).join("")).digest("hex").slice(0, 10);
fs.writeFileSync(path.join(OUT, "sw.js"), `// 離線快取：頁面和題庫先存好，音檔第一次播放後存起來
const CACHE = "toeic-${ver}";
const CORE = ["./", "index.html", "manifest.webmanifest", ${JS.map(f => JSON.stringify(f)).join(", ")}, "audio/index.js"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
// 同步 API 一律走網路、不快取；頁面和題庫先試網路（才拿得到新版），離線時用快取；音檔直接用快取
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  if (url.origin === location.origin && url.pathname.startsWith("/api/")) return;
  const put = res => { if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); } return res; };
  if (url.pathname.endsWith(".mp3") || url.origin !== location.origin) {
    e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request).then(put)));
    return;
  }
  e.respondWith(fetch(e.request).then(put).catch(() => caches.match(e.request)));
});
`);

fs.copyFileSync(path.join(SRC, "README-site.md"), path.join(ROOT, "README.md"));
// Netlify 部署設定：靜態檔在 public/，同步 function 在 netlify/functions/
fs.mkdirSync(path.join(ROOT, "netlify", "functions"), { recursive: true });
fs.copyFileSync(path.join(SRC, "netlify", "functions", "sync.mjs"), path.join(ROOT, "netlify", "functions", "sync.mjs"));
fs.writeFileSync(path.join(ROOT, "netlify.toml"), '[build]\n  publish = "public"\n  functions = "netlify/functions"\n');
fs.writeFileSync(path.join(ROOT, "package.json"), JSON.stringify({ name: "toeic-sprint-site", private: true, type: "module", dependencies: { "@netlify/blobs": "^11.1.9" } }, null, 2) + "\n");
fs.writeFileSync(path.join(ROOT, "deploy.cmd"), [
  "@echo off",
  "chcp 65001 >nul",
  "cd /d \"%~dp0\"",
  "echo [1/2] 安裝同步功能需要的套件...",
  "call npm install --no-audit --no-fund || goto :fail",
  "echo [2/2] 部署到 Netlify（第一次會開瀏覽器請你登入並選擇網站）...",
  "call npx --yes netlify-cli deploy --prod || goto :fail",
  "echo.",
  "echo 部署完成。",
  "pause",
  "exit /b 0",
  ":fail",
  "echo.",
  "echo 部署失敗，請把上面的訊息截圖給 Claude 看。",
  "pause",
  "exit /b 1"
].join("\r\n") + "\r\n");
console.log("built", ROOT, fs.readdirSync(OUT).length + audio.length, "site files");
