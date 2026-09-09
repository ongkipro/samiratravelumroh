import { SITEMAP_BASE_URL, buildUrlSetXml, SitemapItem } from "@/lib/sitemap-helper";
import { getAllArticles } from "@/lib/data-service";
import { getArticleCoverImage } from "@/lib/article-media";

export const dynamic = "force-static";

export async function GET() {
  const articles = await getAllArticles();

  const items: SitemapItem[] = articles.map((article) => {
    const coverImage = getArticleCoverImage(article);
    return {
      loc: `${SITEMAP_BASE_URL}/artikel/${article.slug}`,
      lastmod: article.date,
      changefreq: "monthly",
      priority: 0.7,
      image: {
        loc: coverImage,
        title: article.title,
        caption: article.excerpt || article.title,
      },
    };
  });

  const xml = buildUrlSetXml(items);

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=43200",
    },
  });
}
