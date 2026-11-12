export const dynamic   = "force-static";
export const revalidate = 86400; // rebuild at most once per day

const BASE_URL = "https://unisoftpvt.com";

// Update when site content meaningfully changes.
// Google ignores <lastmod> if it is always "now" — keep it accurate.
const SITE_UPDATED = "2026-11-01";

const staticPages = [
  // Homepage — highest priority
  { path: "/",         changefreq: "weekly",  priority: 1.0 },

  // ── Service pages (main revenue pages) ──────────────────────
  { path: "/services",                       changefreq: "monthly", priority: 0.9 },
  { path: "/services/software-development",  changefreq: "monthly", priority: 0.9 },
  { path: "/services/web-development",       changefreq: "monthly", priority: 0.9 },
  { path: "/services/seo",          changefreq: "monthly", priority: 0.9 },
  { path: "/services/digital-marketing",     changefreq: "monthly", priority: 0.9 },
  { path: "/services/ui-ux-design",          changefreq: "monthly", priority: 0.9 },
  { path: "/services/automation",  changefreq: "monthly", priority: 0.9 },

  // ── Trust / company pages ───────────────────────────────────
  { path: "/about",     changefreq: "monthly", priority: 0.8 },
  { path: "/portfolio", changefreq: "monthly", priority: 0.8 },
  { path: "/pricing",   changefreq: "monthly", priority: 0.8 },
  { path: "/solutions", changefreq: "monthly", priority: 0.7 },
  { path: "/teams",     changefreq: "yearly",  priority: 0.6 },
  { path: "/ceo",       changefreq: "yearly",  priority: 0.6 },

  // ── Conversion pages (keep priority high) ───────────────────
  { path: "/contact",  changefreq: "yearly",  priority: 0.8 },
  { path: "/quote",    changefreq: "yearly",  priority: 0.8 },
  { path: "/chatbot",  changefreq: "monthly", priority: 0.6 },

  // ── Blog index ──────────────────────────────────────────────
  { path: "/blogs", changefreq: "weekly", priority: 0.8 },

  // ── Legal (low priority, still indexed for trust) ───────────
  { path: "/privacy-policy", changefreq: "yearly", priority: 0.3 },
];

// IMPROVED: each post now has a real lastmod date.
// Set `lastmod` to the ISO 8601 publish or last-update date for each post.
// Google uses this to decide how often to re-crawl — accuracy matters.
const blogPosts = [
  { slug: "welcome-to-unisoft",                   lastmod: "2026-01-10" },
  { slug: "learn-nextjs-easily",                  lastmod: "2026-02-14" },
  { slug: "why-seo-matters",                      lastmod: "2026-03-05" },
  { slug: "web-development-trends-2026",          lastmod: "2026-04-01" },
  { slug: "fast-websites-seo-growth",             lastmod: "2026-05-18" },
  { slug: "importance-ui-ux-design",              lastmod: "2026-06-22" },
  { slug: "ai-automation-for-business",           lastmod: "2026-07-30" },
  { slug: "rise-of-ai-agents-2025",               lastmod: "2026-08-11" },
  { slug: "clean-code-principles-for-developers", lastmod: "2026-09-03" },
  { slug: "how-businesses-can-use-ai",            lastmod: "2026-10-15" },
];

const escapeXml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

export async function GET() {
  const entries = [
    ...staticPages.map((page) => ({
      loc:        `${BASE_URL}${page.path}`,
      lastmod:    SITE_UPDATED,
      changefreq: page.changefreq,
      priority:   page.priority,
    })),
    ...blogPosts.map((post) => ({
      loc:        `${BASE_URL}/blogs/${post.slug}`,
      lastmod:    post.lastmod,          // ← each post now has its own date
      changefreq: "monthly",
      priority:   0.6,
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (e) => `  <url>
    <loc>${escapeXml(e.loc)}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority.toFixed(1)}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=3600",
    },
  });
}