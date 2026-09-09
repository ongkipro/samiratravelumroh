import { SITEMAP_BASE_URL, buildUrlSetXml, SitemapItem } from "@/lib/sitemap-helper";
import { getAllBranches } from "@/lib/data-service";

export const dynamic = "force-static";

export async function GET() {
  const branches = await getAllBranches();
  const now = new Date().toISOString();

  const items: SitemapItem[] = branches.map((branch) => ({
    loc: `${SITEMAP_BASE_URL}/kantor-cabang/${branch.slug}`,
    lastmod: now,
    changefreq: "weekly",
    priority: 0.75,
    image: {
      loc: "/images/kantor-pusat-samira-travel-gedung-haji-umroh.webp",
      title: `Kantor Cabang Samira Travel ${branch.name} - ${branch.city}`,
      caption: `Alamat Kantor Resmi dan Layanan Pendaftaran Umroh Haji di ${branch.city}, ${branch.province}`,
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
