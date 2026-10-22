// translate-nested.mjs — add a <locale> block to a nested `const X = { en: {...}, zh: {...}, ja: {...} }` object in a page file.
// Usage: node scripts/translate-nested.mjs --file "src/app/[locale]/about/page.tsx" --const content --locale vi --lang Vietnamese
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
const a = Object.fromEntries(process.argv.slice(2).map((x, i, arr) => x.startsWith("--") ? [x.slice(2), arr[i + 1]] : []).filter(Boolean));
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const file = path.join(ROOT, a.file); const LOCALE = a.locale; const LANG = a.lang;
const CACHE_FILE = path.join(ROOT, "scripts/i18n-cache", `${LOCALE}.json`);
let cache = {}; try { cache = JSON.parse(await fs.readFile(CACHE_FILE, "utf8")); } catch {}
const SYSTEM = `You are a professional B2B translator for veterinary molecular diagnostics. Translate from English to ${LANG}. Keep brand names (CarryOn, Yinrui Bio, Inarray, Ningbo Yinrui Biomedical Instruments), abbreviations (PCR, ASF, PRRSV, CE, ISO 13485), numbers, units and names of people untranslated. Formal, natural, market-native wording. You receive a JSON array of strings; return ONLY a JSON array of the same length with translations in order.`;
async function deepseek(items) {
  for (let t = 1; t <= 4; t++) {
    try {
      const r = await fetch("https://api.deepseek.com/chat/completions", { method: "POST", headers: { "Content-Type": "application/json", Authorization: "Bearer sk-57bb69545fef4dbf9a3ce9f94690e118" }, body: JSON.stringify({ model: "deepseek-flash", temperature: 0.2, max_tokens: 16000, messages: [{ role: "system", content: SYSTEM }, { role: "user", content: JSON.stringify(items) }] }) });
      const j = await r.json(); let txt = (j.choices?.[0]?.message?.content ?? "").trim().replace(/^```(?:json)?/i, "").replace(/```$/, "").trim();
      const arr = JSON.parse(txt); if (!Array.isArray(arr) || arr.length !== items.length) throw new Error("bad length"); return arr.map(String);
    } catch (e) { console.error("attempt", t, String(e).slice(0, 100)); if (t === 4) throw e; await new Promise((r) => setTimeout(r, 3000 * t)); }
  }
}
let src = await fs.readFile(file, "utf8");
const start = src.indexOf(`const ${a.const} = {`);
if (start < 0) throw new Error("const not found");
const enStart = src.indexOf("\n  en: {", start);
const zhStart = src.indexOf("\n  zh: {", enStart);
const objEnd = src.indexOf("\n};", zhStart);
if (src.slice(start, objEnd).includes(`\n  ${LOCALE}: {`)) { console.log("already has locale"); process.exit(0); }
const enBody = src.slice(enStart + "\n  en: ".length, zhStart).replace(/,\s*$/, "");
const en = new Function("return " + enBody)();
const strings = []; const walk = (v) => { if (typeof v === "string") { if (v.trim() && !(v in cache)) strings.push(v); } else if (Array.isArray(v)) v.forEach(walk); else if (v && typeof v === "object") Object.values(v).forEach(walk); };
walk(en);
const uniq = [...new Set(strings)]; console.log("strings to translate:", uniq.length);
for (let i = 0; i < uniq.length; i += 20) { const b = uniq.slice(i, i + 20); const tr = await deepseek(b); b.forEach((s, k) => { cache[s] = tr[k]; }); }
await fs.writeFile(CACHE_FILE, JSON.stringify(cache, null, 1));
const map = (v) => typeof v === "string" ? (cache[v] ?? v) : Array.isArray(v) ? v.map(map) : v && typeof v === "object" ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, map(x)])) : v;
const viJson = JSON.stringify(map(en), null, 2).split("\n").map((l, i) => (i ? "  " + l : l)).join("\n");
src = src.slice(0, objEnd) + `\n  ${LOCALE}: ${viJson},` + src.slice(objEnd);
await fs.writeFile(file, src); console.log("inserted", LOCALE, "block into", a.const);
