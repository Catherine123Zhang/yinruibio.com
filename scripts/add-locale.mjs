#!/usr/bin/env node
// add-locale.mjs — add a new locale to this Next.js site by translating every
// {en, zh, ja} Record and every `lang === "zh" ? … : lang === "ja" ? … : …` ternary
// with DeepSeek, then generating src/dictionaries/<locale>.ts from en.ts.
// Usage: node scripts/add-locale.mjs --locale vi --lang "Vietnamese" [--dry]
import fs from "node:fs/promises";
import path from "node:path";

const args = Object.fromEntries(process.argv.slice(2).map((a, i, arr) => a.startsWith("--") ? [a.slice(2), arr[i + 1]?.startsWith("--") || arr[i + 1] === undefined ? true : arr[i + 1]] : []).filter(Boolean));
const LOCALE = args.locale; const LANG = args.lang; const DRY = !!args.dry;
if (!LOCALE || !LANG) { console.error("need --locale and --lang"); process.exit(1); }
import { fileURLToPath } from "node:url";
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const API_KEY = "sk-57bb69545fef4dbf9a3ce9f94690e118";
const MODEL = "deepseek-flash";
const CACHE_FILE = path.join(ROOT, "scripts/i18n-cache", `${LOCALE}.json`);

const GLOSSARY = {
  vi: `Glossary (use exactly): African swine fever = dịch tả lợn châu Phi (ASF); PRRS / blue ear = bệnh tai xanh (PRRS); PCR analyzer / PCR machine = máy PCR; real-time fluorescence PCR = PCR huỳnh quang thời gian thực (real-time PCR); portable / handheld PCR analyzer = máy PCR cầm tay; test chip = chip xét nghiệm; swine farm = trại lợn (also acceptable: trại heo); veterinary clinic = phòng khám thú y; distributor = nhà phân phối; point-of-care = tại chỗ; sample-to-result = từ mẫu đến kết quả; nucleic acid extraction = tách chiết axit nucleic. Use "lợn" as the default word for pig.`,
  pt: `Glossary (pt-BR, use exactly): thermocycler / PCR analyzer = termociclador; portable PCR analyzer = termociclador portátil; real-time fluorescence PCR = PCR em tempo real por fluorescência; African swine fever = peste suína africana (PSA); PRRS = PRRS (síndrome reprodutiva e respiratória suína); test chip = chip de teste; veterinary clinic = clínica veterinária; distributor = distribuidor; point-of-care = no ponto de atendimento; sample-to-result = da amostra ao resultado.`,
  th: `Glossary (use exactly): PCR analyzer = เครื่อง PCR; real-time PCR = Real-Time PCR (keep English); portable PCR analyzer = เครื่อง PCR แบบพกพา; African swine fever = โรค ASF (อหิวาต์แอฟริกาในสุกร); PRRS = โรค PRRS (เพิร์ส); test chip = ชิปตรวจ; swine farm = ฟาร์มสุกร; veterinary clinic = คลินิกสัตวแพทย์; distributor = ตัวแทนจำหน่าย. Keep the English words "Real Time PCR" and "PCR" in Latin script.`,
}[LOCALE] || "";

const SYSTEM = `You are a professional B2B translator for veterinary molecular diagnostics (portable real-time PCR analyzers and test chips for livestock, pets, and food testing).
Translate from English to ${LANG}.
Rules:
- Keep brand names untranslated: CarryOn, Yinrui Bio, Inarray, Ningbo Yinrui Biomedical Instruments.
- Keep model numbers, abbreviations (PCR, qPCR, ASF, ASFV, PRRSV, CSF, PCV2, PEDV, CE, ISO 13485, FDA, MOQ, FOB, CIF, T/T, DHL), units, URLs and email addresses untranslated.
- Preserve Markdown exactly (headings ##/###, **bold**, lists, line breaks, links [text](url) — translate only the link text).
- Preserve HTML entities and escape sequences such as &amp; \\n \\u2014 exactly as they appear.
- Natural, formal, market-native wording for ${LANG} readers; do not translate word-by-word.
- ${GLOSSARY}
You receive a JSON array of strings and must return ONLY a JSON array of the same length with the translations in the same order. No commentary, no code fences.`;

async function deepseek(items) {
  for (let attempt = 1; attempt <= 4; attempt++) {
    try {
      const res = await fetch("https://api.deepseek.com/chat/completions", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${API_KEY}` },
        body: JSON.stringify({ model: MODEL, temperature: 0.2, max_tokens: 16000, messages: [{ role: "system", content: SYSTEM }, { role: "user", content: JSON.stringify(items) }] }),
      });
      const j = await res.json();
      let txt = j.choices?.[0]?.message?.content ?? "";
      txt = txt.trim().replace(/^```(?:json)?/i, "").replace(/```$/, "").trim();
      const arr = JSON.parse(txt);
      if (!Array.isArray(arr) || arr.length !== items.length) throw new Error(`bad length ${arr?.length} vs ${items.length}`);
      return arr.map(String);
    } catch (e) {
      console.error(`  deepseek attempt ${attempt} failed: ${String(e).slice(0, 140)}`);
      if (attempt === 4) throw e;
      await new Promise((r) => setTimeout(r, 3000 * attempt));
    }
  }
}

// ---------- string literal helpers ----------
const S = String.raw`(?:"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'|` + "`(?:[^`\\\\]|\\\\.)*`)";
function decode(lit) {
  if (lit[0] === "`") return lit.slice(1, -1).replace(/\\`/g, "`").replace(/\\\\/g, "\\");
  if (lit[0] === "'") return JSON.parse('"' + lit.slice(1, -1).replace(/\\'/g, "'").replace(/"/g, '\\"') + '"');
  return JSON.parse(lit);
}
function encode(text, likeLit) {
  if (likeLit[0] === "`") return "`" + text.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${") + "`";
  return JSON.stringify(text);
}

const RECORD = new RegExp(String.raw`en:\s*(${S})\s*,\s*zh:\s*(${S})(\s*,\s*)ja:\s*(${S})(?!\s*,\s*${LOCALE}:)`, "g");
const TERNARY = new RegExp(String.raw`\b(lang|locale) === "zh"\s*\?\s*(${S})\s*:\s*\1 === "ja"\s*\?\s*(${S})(\s*:\s*)(${S})`, "g");

async function listFiles(dir, exts) {
  const out = [];
  for (const ent of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...await listFiles(p, exts));
    else if (exts.some((e) => p.endsWith(e))) out.push(p);
  }
  return out;
}

const files = [
  path.join(ROOT, "src/data/products.ts"),
  path.join(ROOT, "src/data/markets.ts"),
  ...(await listFiles(path.join(ROOT, "src/app"), [".tsx", ".ts"])),
  ...(await listFiles(path.join(ROOT, "src/components"), [".tsx"])),
];

// pass 1: collect english strings
const needed = new Set();
const perFile = new Map();
for (const f of files) {
  const src = await fs.readFile(f, "utf8");
  let n = 0;
  for (const m of src.matchAll(RECORD)) { needed.add(decode(m[1])); n++; }
  for (const m of src.matchAll(TERNARY)) { needed.add(decode(m[5])); n++; }
  if (n) perFile.set(f, n);
}
console.log(`files with work: ${perFile.size}, unique English strings: ${needed.size}`);
for (const [f, n] of perFile) console.log(`  ${path.relative(ROOT, f)}: ${n}`);

// cache + translate
let cache = {};
try { cache = JSON.parse(await fs.readFile(CACHE_FILE, "utf8")); } catch {}
const todo = [...needed].filter((s) => !(s in cache) && s.trim());
console.log(`to translate: ${todo.length} (cached ${needed.size - todo.length})`);
if (!DRY) {
  const batches = [];
  let cur = [], size = 0;
  for (const s of todo) {
    if (cur.length && (cur.length >= 20 || size + s.length > 14000)) { batches.push(cur); cur = []; size = 0; }
    cur.push(s); size += s.length;
  }
  if (cur.length) batches.push(cur);
  let done = 0;
  for (const b of batches) {
    const tr = await deepseek(b);
    b.forEach((s, i) => { cache[s] = tr[i]; });
    done += b.length;
    await fs.writeFile(CACHE_FILE, JSON.stringify(cache, null, 1));
    console.log(`  translated ${done}/${todo.length}`);
  }
}

// pass 2: rewrite files
if (!DRY) {
  for (const f of perFile.keys()) {
    let src = await fs.readFile(f, "utf8");
    src = src.replace(RECORD, (m, en, zh, sep, ja) => {
      const t = cache[decode(en)]; if (t === undefined) return m;
      return `${m}${sep}${LOCALE}: ${encode(t, ja)}`;
    });
    src = src.replace(TERNARY, (m, v, zh, ja, sep, en) => {
      const t = cache[decode(en)]; if (t === undefined) return m;
      return `${v} === "zh" ? ${zh} : ${v} === "ja" ? ${ja}${sep}${v} === "${LOCALE}" ? ${encode(t, en)}${sep}${en}`;
    });
    await fs.writeFile(f, src);
  }
  // i18n.ts
  const i18n = path.join(ROOT, "src/lib/i18n.ts");
  let s = await fs.readFile(i18n, "utf8");
  if (!s.includes(`"${LOCALE}"`)) {
    s = s.replace(/export const locales = \[([^\]]*)\] as const;/, (m, inner) => `export const locales = [${inner.trim().replace(/,\s*$/, "")}, "${LOCALE}"] as const;`);
    s = s.replace(/(export const localeNames: Record<Locale, string> = \{[\s\S]*?)(\n\};)/, `$1\n  ${LOCALE}: "${args.name || LANG}",$2`);
    await fs.writeFile(i18n, s);
  }
  // dictionary
  const dictDir = path.join(ROOT, "src/dictionaries");
  const target = path.join(dictDir, `${LOCALE}.ts`);
  try { await fs.access(target); console.log("dictionary exists, skip"); } catch {
    const en = await fs.readFile(path.join(dictDir, "en.ts"), "utf8");
    // collect all string literal values in en.ts (keys are bare identifiers)
    const lits = [...en.matchAll(new RegExp(S, "g"))].map((m) => m[0]);
    const uniq = [...new Set(lits.map(decode))].filter((x) => x.trim());
    const need = uniq.filter((x) => !(x in cache));
    console.log(`dictionary strings: ${uniq.length}, to translate ${need.length}`);
    for (let i = 0; i < need.length; i += 25) {
      const b = need.slice(i, i + 25); const tr = await deepseek(b);
      b.forEach((s2, k) => { cache[s2] = tr[k]; });
    }
    await fs.writeFile(CACHE_FILE, JSON.stringify(cache, null, 1));
    let out = en.replace(new RegExp(S, "g"), (lit) => { const d = decode(lit); return d in cache ? encode(cache[d], lit) : lit; });
    out = out.replace(/^const en = \{/m, `const ${LOCALE} = {`).replace(/export type Dictionary = typeof en;\n?/, "").replace(/export default en;/, `export default ${LOCALE};`);
    out = `import type { Dictionary } from "./en";\n` + out.replace(`const ${LOCALE} = {`, `const ${LOCALE}: Dictionary = {`);
    await fs.writeFile(target, out);
    let idx = await fs.readFile(path.join(dictDir, "index.ts"), "utf8");
    idx = idx.replace(/(\n\};)/, `\n  ${LOCALE}: () => import("./${LOCALE}").then((m) => m.default),$1`);
    await fs.writeFile(path.join(dictDir, "index.ts"), idx);
    console.log("dictionary written");
  }
}
console.log("done");
