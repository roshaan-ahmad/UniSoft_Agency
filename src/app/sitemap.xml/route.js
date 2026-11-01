
const BASE_URL = "https://www.unisoftpvt.com";

const pages = [
  // Main pages
  { path: "/", priority: "1.0" },
  { path: "/about", priority: "0.9" },
  { path: "/ceo", priority: "0.8" },
  { path: "/services", priority: "1.0" },
  { path: "/pricing", priority: "0.9" },
  { path: "/contact", priority: "0.9" },

  // Company pages
  { path: "/teams", priority: "0.7" },
  { path: "/portfolio", priority: "0.9" },
  { path: "/solutions", priority: "0.9" },

  // Individual service pages
  { path: "/services/software-development", priority: "0.9" },
  { path: "/services/web-development", priority: "0.9" },
  { path: "/services/seo-services", priority: "0.9" },
  { path: "/services/digital-marketing", priority: "0.9" },
  { path: "/services/ui-ux-design", priority: "0.8" },
  { path: "/services/automation-solutions", priority: "0.9" },

  // Resources
  { path: "/blogs", priority: "0.9" },
  { path: "/chatbot", priority: "0.8" },

  // Blog articles
  { path: "/blogs/welcome-to-unisoft", priority: "0.7" },
  { path: "/blogs/learn-nextjs-easily", priority: "0.7" },
  { path: "/blogs/why-seo-matters", priority: "0.8" },
  { path: "/blogs/web-development-trends-2026", priority: "0.8" },
  { path: "/blogs/fast-websites-seo-growth", priority: "0.8" },
  { path: "/blogs/importance-ui-ux-design", priority: "0.7" },
  { path: "/blogs/ai-automation-for-business", priority: "0.9" },
  { path: "/blogs/rise-of-ai-agents-2025", priority: "0.9" },
  { path: "/blogs/clean-code-principles-for-developers", priority: "0.7" },
  { path: "/blogs/how-businesses-can-use-ai", priority: "0.8" },

  // Legal
  { path: "/privacy-policy", priority: "0.3" },
];

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const urls = pages
    .map((page) => {
      return `
  <url>
    <loc>${escapeXml(`${BASE_URL}${page.path}`)}</loc>
    <priority>${page.priority}</priority>
  </url>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
