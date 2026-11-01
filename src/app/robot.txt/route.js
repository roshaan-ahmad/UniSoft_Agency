
export async function GET() {
  const robots = `User-agent: *
Allow: /

Sitemap: https://www.unisoftpvt.com/sitemap.xml
`;

  return new Response(robots, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400",
    },
  });
}
