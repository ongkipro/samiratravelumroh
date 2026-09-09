import { SITEMAP_BASE_URL, buildUrlSetXml, SitemapItem } from "@/lib/sitemap-helper";
import { getPlusTours } from "@/lib/data-service";

export const dynamic = "force-static";

export async function GET() {
  const plusTours = await getPlusTours();
  const now = new Date().toISOString();

  const items: SitemapItem[] = plusTours.map((tour) => ({
    loc: `${SITEMAP_BASE_URL}/umroh-plus/${tour.slug}`,
    lastmod: now,
    changefreq: "weekly",
    priority: 0.85,
    image: {
      loc: tour.flyerImage || "/images/paket-umroh-plus-turki-istanbul-bosphorus.webp",
      title: `${tour.title} - Wisata Halal Samira Travel`,
      caption: `Program Umroh Plus ${tour.city} Fasilitas Bintang 5 dan Ziarah Bersejarah`,
    },
  }));

  const xml = buildUrlSetXml(items);

  return new Response(xml, {
    headers: {
      "Content-Type": "text/xml; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
