#!/usr/bin/env node
// gen-sitemap.mjs — regenerate public/sitemap.xml from the static export in out/.
// <lastmod> = date of the last git commit that touched the page's own source:
//   blog/<slug>, products/test-chips/<slug>, markets/<slug> → that entry's lines in src/data/*.ts (git log -L);
//   other pages → src/app/[locale]/<path>/page.tsx + src/dictionaries/<locale>.ts.
// Shared layout/components are ignored (sitewide chrome is not a content change).
// If git gives nothing, keep the existing <lastmod>; brand-new URLs with no history get today.
// Run AFTER `npm run build`, then copy to out/ (or rebuild) before deploying.
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SITE = "https://yinruibio.com";
const OUT = path.join(ROOT, "out");
const SM = path.join(ROOT, "public/sitemap.xml");
const today = new Date().toISOString().slice(0, 10);
const localesSrc = await fs.readFile(path.join(ROOT, "src/lib/i18n.ts"), "utf8");
const locales = [...localesSrc.match(/export const activeLocales[^=]*= \[([^\]]*)\]/)[1].matchAll(/"([a-z]+)"/g)].map((m) => m[1]);

async function walk(dir) {
  const res = [];
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { if (e.name === "_next") continue; res.push(...await walk(p)); }
    else if (e.name === "index.html") res.push(p);
  }
  return res;
}
const pages = (await walk(OUT)).map((p) => path.relative(OUT, path.dirname(p)).split(path.sep).join("/"))
  .filter((rel) => rel && locales.includes(rel.split("/")[0]) && !/\/(404|thanks|privacy)$/.test(rel) && !rel.includes("landing"));
// group by path-without-locale
const groups = new Map();
for (const rel of pages) { const [loc, ...rest] = rel.split("/"); const key = rest.join("/"); if (!groups.has(key)) groups.set(key, new Set()); groups.get(key).add(loc); }

let old = ""; try { old = await fs.readFile(SM, "utf8"); } catch {}
const oldMod = new Map([...old.matchAll(/<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g)].map((m) => [m[1], m[2]]));
const git = (args) => { try { return execFileSync("git", args, { cwd: ROOT, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim(); } catch { return ""; } };
const fileDate = (rel) => git(["log", "-1", "--format=%cs", "--", rel]);
const dataSrc = {};
async function entryDate(rel, slug) {
  dataSrc[rel] ??= (await fs.readFile(path.join(ROOT, rel), "utf8")).split("\n");
  const lines = dataSrc[rel];
  let start = -1;
  lines.forEach((l, i) => { if (l === `    slug: "${slug}",`) start = i; }); // last top-level match (products.ts lists categories first)
  if (start < 0) return "";
  let end = lines.length - 1;
  for (let i = start + 1; i < lines.length; i++) if (/^    slug: "/.test(lines[i]) || /^export /.test(lines[i])) { end = i - 1; break; }
  return git(["log", "-1", "-s", "--format=%cs", `-L${start + 1},${end + 1}:${rel}`]);
}
const dataFor = [[/^blog\/([^/]+)$/, "src/data/blog.ts"], [/^products\/test-chips\/([^/]+)$/, "src/data/products.ts"], [/^markets\/([^/]+)$/, "src/data/markets.ts"]];
const lastmodCache = new Map();
async function gitLastmod(key, loc) {
  const ck = `${loc}|${key}`;
  if (lastmodCache.has(ck)) return lastmodCache.get(ck);
  let d = "";
  for (const [re, rel] of dataFor) { const m = key.match(re); if (m) { d = await entryDate(rel, m[1]); break; } }
  if (!d) {
    const page = `src/app/[locale]/${key ? key + "/" : ""}page.tsx`;
    try { await fs.access(path.join(ROOT, page)); d = [fileDate(page), fileDate(`src/dictionaries/${loc}.ts`)].filter(Boolean).sort().pop() || ""; } catch {}
  }
  lastmodCache.set(ck, d);
  return d;
}
const prio = (key) => key === "" ? "1.0" : /^products\/[^/]+$/.test(key) || /^markets\/[^/]+$/.test(key) ? "0.8" : key.startsWith("blog/") ? "0.7" : key.startsWith("products/") ? "0.7" : "0.6";
const freq = (key) => key === "" ? "weekly" : key.startsWith("blog") ? "monthly" : "monthly";
let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;
let count = 0;
for (const [key, locs] of [...groups.entries()].sort()) {
  const url = (l) => `${SITE}/${l}/${key ? key + "/" : ""}`;
  for (const l of locales.filter((x) => locs.has(x))) {
    const loc = url(l);
    xml += `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${(await gitLastmod(key, l)) || oldMod.get(loc) || today}</lastmod>\n    <changefreq>${freq(key)}</changefreq>\n    <priority>${prio(key)}</priority>\n`;
    for (const l2 of locales.filter((x) => locs.has(x))) xml += `    <xhtml:link rel="alternate" hreflang="${l2}" href="${url(l2)}" />\n`;
    if (locs.has("en")) xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${url("en")}" />\n`;
    xml += `  </url>\n`; count++;
  }
}
xml += `</urlset>\n`;
await fs.writeFile(SM, xml);
try { await fs.writeFile(path.join(OUT, "sitemap.xml"), xml); } catch {}
console.log(`sitemap: ${count} urls, ${groups.size} paths, locales ${locales.join(",")}; new=${[...groups.values()].length}`);
