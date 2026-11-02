// app/sitemap.xml/route.js
// Serves https://unisoftpvt.com/sitemap.xml

export const dynamic = "force-static";
export const revalidate = 86400; // rebuild at most once per day

const BASE_URL = "https://unisoftpvt.com";

// Update this when site content meaningfully changes.
// Google ignores <lastmod> if it is always "now", so keep it accurate.
const LAST_UPDATED = "2026-11-01";

const staticPages = [
  { path: "/", changefreq: "weekly", priority: 1.0 },

  // Services (main revenue pages)
  { path: "/services", changefreq: "monthly", priority: 0.9 },
  { path: "/services/software-development", changefreq: "monthly", priority: 0.9 },
  { path: "/services/web-development", changefreq: "monthly", priority: 0.9 },
  { path: "/services/seo-services", changefreq: "monthly", priority: 0.9 },
  { path: "/services/digital-marketing", changefreq: "monthly", priority: 0.9 },
  { path: "/services/ui-ux-design", changefreq: "monthly", priority: 0.9 },
  { path: "/services/automation-solutions", changefreq: "monthly", priority: 0.9 },

  // Company / trust pages
  { path: "/about", changefreq: "monthly", priority: 0.8 },
  { path: "/portfolio", changefreq: "monthly", priority: 0.8 },
  { path: "/pricing", changefreq: "monthly", priority: 0.8 },
  { path: "/solutions", changefreq: "monthly", priority: 0.7 },
  { path: "/ceo", changefreq: "yearly", priority: 0.6 },
  { path: "/teams", changefreq: "yearly", priority: 0.6 },

  // Conversion pages
  { path: "/contact", changefreq: "yearly", priority: 0.7 },
  { path: "/quote", changefreq: "yearly", priority: 0.7 },
  { path: "/chatbot", changefreq: "monthly", priority: 0.6 },

  // Blog index
  { path: "/blogs", changefreq: "weekly", priority: 0.8 },

  // Legal
  { path: "/privacy-policy", changefreq: "yearly", priority: 0.3 },
];

// Add new posts here (or replace with a DB/CMS fetch, see note below).
// Set `lastmod` to each post's real publish/update date when you know it.
const blogPosts = [
  { slug: "welcome-to-unisoft" },
  { slug: "learn-nextjs-easily" },
  { slug: "why-seo-matters" },
  { slug: "web-development-trends-2026" },
  { slug: "fast-websites-seo-growth" },
  { slug: "importance-ui-ux-design" },
  { slug: "ai-automation-for-business" },
  { slug: "rise-of-ai-agents-2025" },
  { slug: "clean-code-principles-for-developers" },
  { slug: "how-businesses-can-use-ai" },
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
      loc: `${BASE_URL}${page.path}`,
      lastmod: LAST_UPDATED,
      changefreq: page.changefreq,
      priority: page.priority,
    })),
    ...blogPosts.map((post) => ({
      loc: `${BASE_URL}/blogs/${post.slug}`,
      lastmod: post.lastmod || LAST_UPDATED,
      changefreq: "monthly",
      priority: 0.6,
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