import { SITEMAP_BASE_URL, buildUrlSetXml, SitemapItem } from "@/lib/sitemap-helper";
import { getRegularTours } from "@/lib/data-service";

export const dynamic = "force-static";

export async function GET() {
  const regularTours = await getRegularTours();
  const now = new Date().toISOString();

  const items: SitemapItem[] = regularTours.map((tour) => ({
    loc: `${SITEMAP_BASE_URL}/paket-umroh/${tour.slug}`,
    lastmod: now,
    changefreq: "daily",
    priority: 0.9,
    image: {
      loc: tour.flyerImage || "/images/hero-umroh-surabaya-embarkasi-juanda-charter.webp",
      title: `Paket Umroh ${tour.city} 2026 - Penerbangan Langsung Samira Travel`,
      caption: `Program ${tour.title} Keberangkatan ${tour.city} Hotel Bintang 5 Pelataran`,
    },
  }));

  const xml = buildUrlSetXml(items);

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=43200",
    },
  });
}
