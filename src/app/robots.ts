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
          "/llms.txt",
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
        // Dedicated directives for AI search engines, answer engines & LLM crawlers
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-SearchBot",
          "Claude-User",
          "PerplexityBot",
          "Perplexity-User",
          "Applebot",
          "Applebot-Extended",
          "Google-Extended",
          "cohere-ai",
          "Meta-ExternalAgent",
          "FacebookBot",
          "Bytespider",
        ],
        allow: [
          "/",
          "/_next/static/",
          "/_next/image",
          "/images/",
          "/llms.txt",
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
          "/llms.txt",
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
          "/llms.txt",
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
