export const SITEMAP_BASE_URL = "https://samiratravelumrohhaji.com";

export interface SitemapItem {
  loc: string;
  lastmod?: string | Date;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: number;
  image?: {
    loc: string;
    title?: string;
    caption?: string;
  };
}

export interface SitemapIndexItem {
  loc: string;
  lastmod?: string | Date;
}

export function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function formatW3CDate(date?: string | Date): string {
  if (!date) {
    return new Date().toISOString();
  }
  if (typeof date === "string") {
    const d = new Date(date);
    if (!isNaN(d.getTime())) {
      return d.toISOString();
    }
    // Parse Indonesian months if present (e.g. "12 Januari 2026")
    const months: Record<string, string> = {
      januari: "01", februari: "02", maret: "03", april: "04", mei: "05", juni: "06",
      juli: "07", agustus: "08", september: "09", oktober: "10", november: "11", desember: "12",
    };
    const parts = date.trim().split(/\s+/);
    if (parts.length === 3) {
      const day = parts[0].padStart(2, "0");
      const month = months[parts[1].toLowerCase()];
      const year = parts[2];
      if (month && /^\d{4}$/.test(year)) {
        const parsed = new Date(`${year}-${month}-${day}T00:00:00Z`);
        if (!isNaN(parsed.getTime())) return parsed.toISOString();
      }
    }
    return new Date().toISOString();
  }
  return date.toISOString();
}

/**
 * Builds standard XML Sitemap Index (e.g. /sitemap.xml or /sitemap_index.xml)
 */
export function buildSitemapIndexXml(sitemaps: SitemapIndexItem[]): string {
  const itemsXml = sitemaps
    .map((s) => {
      const lastmod = s.lastmod ? `\n    <lastmod>${formatW3CDate(s.lastmod)}</lastmod>` : "";
      return `  <sitemap>\n    <loc>${escapeXml(s.loc)}</loc>${lastmod}\n  </sitemap>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${itemsXml}
</sitemapindex>`;
}

/**
 * Builds standard category-specific urlset XML with Google Image extension
 */
export function buildUrlSetXml(urls: SitemapItem[]): string {
  const itemsXml = urls
    .map((u) => {
      const lastmodTag = u.lastmod ? `\n    <lastmod>${formatW3CDate(u.lastmod)}</lastmod>` : "";
      const changefreqTag = u.changefreq ? `\n    <changefreq>${u.changefreq}</changefreq>` : "";
      const priorityTag = u.priority !== undefined ? `\n    <priority>${u.priority.toFixed(1)}</priority>` : "";
      
      let imageTag = "";
      if (u.image && u.image.loc) {
        const titleTag = u.image.title ? `\n      <image:title>${escapeXml(u.image.title)}</image:title>` : "";
        const captionTag = u.image.caption ? `\n      <image:caption>${escapeXml(u.image.caption)}</image:caption>` : "";
        const imageFullUrl = u.image.loc.startsWith("http") ? u.image.loc : `${SITEMAP_BASE_URL}${u.image.loc}`;
        imageTag = `\n    <image:image>\n      <image:loc>${escapeXml(imageFullUrl)}</image:loc>${titleTag}${captionTag}\n    </image:image>`;
      }

      return `  <url>\n    <loc>${escapeXml(u.loc)}</loc>${lastmodTag}${changefreqTag}${priorityTag}${imageTag}\n  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${itemsXml}
</urlset>`;
}
