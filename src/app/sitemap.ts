import { MetadataRoute } from "next";
import { getAllTours, getAllBranches, getAllArticles } from "@/lib/data-service";

function parseSafeDate(dateStr?: string): Date {
  if (!dateStr) return new Date("2026-01-01");
  const d = new Date(dateStr);
  if (!isNaN(d.getTime())) return d;

  const months: Record<string, string> = {
    januari: "01", februari: "02", maret: "03", april: "04", mei: "05", juni: "06",
    juli: "07", agustus: "08", september: "09", oktober: "10", november: "11", desember: "12"
  };
  const parts = dateStr.trim().split(/\s+/);
  if (parts.length === 3) {
    const day = parts[0].padStart(2, "0");
    const month = months[parts[1].toLowerCase()];
    const year = parts[2];
    if (month && /^\d{4}$/.test(year)) {
      const parsedIndo = new Date(`${year}-${month}-${day}`);
      if (!isNaN(parsedIndo.getTime())) return parsedIndo;
    }
  }
  return new Date("2026-01-01");
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://samiratravelumrohhaji.com";

  // 1. Static Core Pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/paket-umroh`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/umroh-plus`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/haji-khusus-furoda`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pembiayaan-syariah`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kantor-cabang`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kemitraan-dgi`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tentang-kami`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/testimoni`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/artikel`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];

  // 2. 11 City Departure Pages
  const regularTours = (await getAllTours()).filter((t) => t.category === "reguler");
  const cityPages: MetadataRoute.Sitemap = regularTours.map((tour) => ({
    url: `${baseUrl}/paket-umroh/${tour.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // 3. 5 Umroh Plus Pages
  const plusTours = (await getAllTours()).filter((t) => t.category === "plus");
  const plusPages: MetadataRoute.Sitemap = plusTours.map((tour) => ({
    url: `${baseUrl}/umroh-plus/${tour.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // 4. 26 Physical Branch Pages
  const branches = await getAllBranches();
  const branchPages: MetadataRoute.Sitemap = branches.map((branch) => ({
    url: `${baseUrl}/kantor-cabang/${branch.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // 5. 400 Educational Article Pages
  const articles = await getAllArticles();
  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/artikel/${article.slug}`,
    lastModified: parseSafeDate(article.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...cityPages,
    ...plusPages,
    ...branchPages,
    ...articlePages,
  ];
}
