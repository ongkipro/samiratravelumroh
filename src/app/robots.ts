import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://samiratravelumrohhaji.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/_next/static/",
          "/_next/image",
          "/images/",
          "/sitemap.xsl",
        ],
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
          "/private/",
          "/*.json$",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: [
          "/",
          "/_next/static/",
          "/_next/image",
          "/images/",
        ],
        disallow: [
          "/api/",
          "/_next/",
        ],
      },
      {
        userAgent: "Googlebot-Image",
        allow: [
          "/images/",
          "/_next/image",
          "/favicon.ico",
          "/favicon.png",
          "/icon.png",
        ],
        disallow: ["/api/"],
      },
      {
        userAgent: "Bingbot",
        allow: [
          "/",
          "/_next/static/",
          "/_next/image",
          "/images/",
        ],
        disallow: [
          "/api/",
          "/_next/",
        ],
      },
    ],
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/sitemap_index.xml`,
      `${baseUrl}/page-sitemap.xml`,
      `${baseUrl}/paket-sitemap.xml`,
      `${baseUrl}/umroh-plus-sitemap.xml`,
      `${baseUrl}/cabang-sitemap.xml`,
      `${baseUrl}/post-sitemap.xml`,
    ],
    host: baseUrl,
  };
}
