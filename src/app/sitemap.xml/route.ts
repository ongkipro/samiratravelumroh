import { SITEMAP_BASE_URL, buildSitemapIndexXml, SitemapIndexItem } from "@/lib/sitemap-helper";

export const dynamic = "force-static";

export async function GET() {
  const now = new Date().toISOString();

  const sitemaps: SitemapIndexItem[] = [
    {
      loc: `${SITEMAP_BASE_URL}/page-sitemap.xml`,
      lastmod: now,
    },
    {
      loc: `${SITEMAP_BASE_URL}/paket-sitemap.xml`,
      lastmod: now,
    },
    {
      loc: `${SITEMAP_BASE_URL}/umroh-plus-sitemap.xml`,
      lastmod: now,
    },
    {
      loc: `${SITEMAP_BASE_URL}/cabang-sitemap.xml`,
      lastmod: now,
    },
    {
      loc: `${SITEMAP_BASE_URL}/post-sitemap.xml`,
      lastmod: now,
    },
  ];

  const xml = buildSitemapIndexXml(sitemaps);

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=43200",
    },
  });
}
