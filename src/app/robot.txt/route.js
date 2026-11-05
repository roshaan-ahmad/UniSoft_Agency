// app/robots.txt/route.js  (or app/robots/route.js)
// ─────────────────────────────────────────────────────────────────────────────
// SEO FIX: Changed sitemap URL from https://www.unisoftpvt.com (www) to
// https://unisoftpvt.com (no-www) — must match every canonical URL in the
// codebase. A mismatch causes Google to treat them as separate domains.
//
// Added Disallow rules for admin/api/cancel paths to prevent indexing of
// internal routes and accidental crawl waste.
// ─────────────────────────────────────────────────────────────────────────────

export const dynamic = "force-static";
export const revalidate = 86400;

export async function GET() {
  const robots = `User-agent: *
Allow: /

# Block internal / non-public routes from indexing
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /cancel
Disallow: /success

# FIX: was https://www.unisoftpvt.com — must match canonical domain (no-www)
Sitemap: https://unisoftpvt.com/sitemap.xml
`;

  return new Response(robots, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=3600",
    },
  });
}