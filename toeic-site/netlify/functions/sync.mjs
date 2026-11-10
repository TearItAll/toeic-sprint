// 網站版跨裝置同步：用「同步碼」存取一份進度，資料放在 Netlify Blobs。
// GET  /api/sync?k=同步碼 → 回傳進度（沒有就回 null）
// PUT  /api/sync?k=同步碼 → 存入進度（JSON）
// 同步碼不會原樣存下來，只存它的 SHA-256 雜湊當作鍵。
const KEY_RE = /^[A-Za-z0-9_-]{20,64}$/;
const MAX_BYTES = 1_500_000;

const hash = async text => {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, "0")).join("");
};
const json = (body, status = 200) => new Response(JSON.stringify(body), {
  status, headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" }
});

// 與儲存方式分開，方便在本機用假的 store 測試
export async function handle(req, store) {
  const key = new URL(req.url).searchParams.get("k") || "";
  if (!KEY_RE.test(key)) return json({ error: "bad_key" }, 400);
  const id = await hash(key);
  if (req.method === "GET") return json(await store.get(id, { type: "json" }) ?? null);
  if (req.method === "PUT") {
    const text = await req.text();
    if (text.length > MAX_BYTES) return json({ error: "too_large" }, 413);
    let data;
    try { data = JSON.parse(text); } catch (e) { return json({ error: "bad_json" }, 400); }
    if (!data || typeof data.q !== "object" || typeof data.sk !== "object") return json({ error: "bad_shape" }, 400);
    await store.set(id, text);
    return json({ ok: true, updated: data.updated || 0 });
  }
  return json({ error: "method" }, 405);
}

export default async req => {
  const { getStore } = await import("@netlify/blobs");
  return handle(req, getStore({ name: "progress", consistency: "strong" }));
};

export const config = { path: "/api/sync" };
