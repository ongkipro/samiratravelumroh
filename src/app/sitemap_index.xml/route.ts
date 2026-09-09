import { GET as getMasterSitemap } from "../sitemap.xml/route";

export const dynamic = "force-static";

export async function GET() {
  return getMasterSitemap();
}
