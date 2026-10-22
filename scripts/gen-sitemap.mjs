#!/usr/bin/env node
// gen-sitemap.mjs — regenerate public/sitemap.xml from the static export in out/.
// Keeps existing <lastmod> for URLs already in the sitemap; new URLs get today's date.
// Run AFTER `npm run build`, then copy to out/ (or rebuild) before deploying.
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SITE = "https://yinruibio.com";
const OUT = path.join(ROOT, "out");
const SM = path.join(ROOT, "public/sitemap.xml");
const today = new Date().toISOString().slice(0, 10);
const localesSrc = await fs.readFile(path.join(ROOT, "src/lib/i18n.ts"), "utf8");
const locales = [...localesSrc.match(/export const locales = \[([^\]]*)\]/)[1].matchAll(/"([a-z]+)"/g)].map((m) => m[1]);

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
  .filter((rel) => rel && locales.includes(rel.split("/")[0]) && !/\/(404|thanks)$/.test(rel) && !rel.includes("landing"));
// group by path-without-locale
const groups = new Map();
for (const rel of pages) { const [loc, ...rest] = rel.split("/"); const key = rest.join("/"); if (!groups.has(key)) groups.set(key, new Set()); groups.get(key).add(loc); }

let old = ""; try { old = await fs.readFile(SM, "utf8"); } catch {}
const oldMod = new Map([...old.matchAll(/<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g)].map((m) => [m[1], m[2]]));
const prio = (key) => key === "" ? "1.0" : /^products\/[^/]+$/.test(key) || /^markets\/[^/]+$/.test(key) ? "0.8" : key.startsWith("blog/") ? "0.7" : key.startsWith("products/") ? "0.7" : "0.6";
const freq = (key) => key === "" ? "weekly" : key.startsWith("blog") ? "monthly" : "monthly";
let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;
let count = 0;
for (const [key, locs] of [...groups.entries()].sort()) {
  const url = (l) => `${SITE}/${l}/${key ? key + "/" : ""}`;
  for (const l of locales.filter((x) => locs.has(x))) {
    const loc = url(l);
    xml += `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${oldMod.get(loc) || today}</lastmod>\n    <changefreq>${freq(key)}</changefreq>\n    <priority>${prio(key)}</priority>\n`;
    for (const l2 of locales.filter((x) => locs.has(x))) xml += `    <xhtml:link rel="alternate" hreflang="${l2}" href="${url(l2)}" />\n`;
    if (locs.has("en")) xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${url("en")}" />\n`;
    xml += `  </url>\n`; count++;
  }
}
xml += `</urlset>\n`;
await fs.writeFile(SM, xml);
try { await fs.writeFile(path.join(OUT, "sitemap.xml"), xml); } catch {}
console.log(`sitemap: ${count} urls, ${groups.size} paths, locales ${locales.join(",")}; new=${[...groups.values()].length}`);
