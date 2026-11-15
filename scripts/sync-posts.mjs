// Sync every post from Medium and Substack into posts.json for the blog page.
// Run: node scripts/sync-posts.mjs   (Node 18+, no dependencies)
//
// Medium's feed only returns the latest 10 posts, so posts already in posts.json are kept
// even after they drop out of a feed. Remove an entry by hand if you unpublish it.
//
// New posts arrive with their original title only. To show an English title, add
//   "title_en": "...", "title_en_by": "ai"
// to that post in posts.json; the blog labels it "Title translated by AI".

import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const FEEDS = [
  { source: "medium", url: "https://medium.com/feed/@webber52543363" },
  { source: "substack", url: "https://xuexiweibo.substack.com/feed" }
];
// Posts that are not real writing (Substack's placeholder, for example).
const SKIP_TITLES = [/^coming soon$/i];

const OUT = join(dirname(fileURLToPath(import.meta.url)), "..", "posts.json");

function decode(s) {
  return s
    .replace(/^<!\[CDATA\[|\]\]>$/g, "")
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;|&#x27;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n))
    .replace(/&amp;/g, "&")
    .trim();
}
function tag(xml, name) {
  const m = xml.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`));
  return m ? decode(m[1]) : "";
}
function excerpt(html) {
  const text = html.replace(/<figure[\s\S]*?<\/figure>/g, " ").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  const chars = Array.from(text);
  return chars.length > 90 ? chars.slice(0, 90).join("") + "…" : text;
}

async function readFeed({ source, url }) {
  const res = await fetch(url, { headers: { "User-Agent": "personal-hub-sync" } });
  if (!res.ok) throw new Error(`${source}: HTTP ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map(([, item]) => {
    const link = tag(item, "link").split("?")[0];
    const body = tag(item, "content:encoded") || tag(item, "description");
    return {
      title: tag(item, "title"),
      url: link,
      date: new Date(tag(item, "pubDate")).toISOString().slice(0, 10),
      source,
      excerpt: excerpt(body)
    };
  }).filter((p) => p.title && p.url && !SKIP_TITLES.some((re) => re.test(p.title)));
}

let existing = [], lastUpdated = null;
try {
  const prev = JSON.parse(await readFile(OUT, "utf8"));
  existing = prev.posts || []; lastUpdated = prev.updated || null;
} catch { /* first run */ }

const byUrl = new Map(existing.map((p) => [p.url, p]));
const failures = [];
for (const feed of FEEDS) {
  try {
    for (const post of await readFeed(feed)) {
      const prev = byUrl.get(post.url) || {};
      const merged = { ...prev, ...post };
      // An English title (title_en, with title_en_by: "ai") is kept across syncs,
      // but dropped if the original title changed, so a stale translation never shows.
      if (prev.title && prev.title !== post.title) { delete merged.title_en; delete merged.title_en_by; }
      byUrl.set(post.url, merged);
    }
  } catch (err) {
    failures.push(err.message);
  }
}

const posts = [...byUrl.values()].sort((a, b) => b.date.localeCompare(a.date));
// The date only moves when the post list changes, so a day with no new posts commits nothing.
const changed = JSON.stringify(posts) !== JSON.stringify([...existing].sort((a, b) => b.date.localeCompare(a.date)));
const updated = changed || !lastUpdated ? new Date().toISOString().slice(0, 10) : lastUpdated;
await writeFile(OUT, JSON.stringify({ updated, posts }, null, 2) + "\n");
console.log(`posts.json: ${posts.length} posts (${posts.filter((p) => p.source === "medium").length} Medium, ${posts.filter((p) => p.source === "substack").length} Substack)`);
// One platform failing must not block saving what the other returned; posts already on file are kept.
// Only fail the run when every feed failed.
if (failures.length) console.warn("Feeds that failed (kept their existing posts):\n  " + failures.join("\n  "));
if (failures.length === FEEDS.length) process.exitCode = 1;
