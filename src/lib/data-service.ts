import { toursData } from "@/data/tours";
import { branchesData } from "@/data/branches";
import { siteConfig } from "@/data/site-config";
import rawArticles from "@/data/articles.json";
import { TourPackage, Article, BranchOffice, SiteConfig } from "@/types";

const articlesData: Article[] = rawArticles as Article[];

/**
 * Tour Package DAL
 */
export async function getAllTours(): Promise<TourPackage[]> {
  return toursData;
}

export async function getRegularTours(): Promise<TourPackage[]> {
  return toursData.filter((t) => t.category === "reguler");
}

export async function getPlusTours(): Promise<TourPackage[]> {
  return toursData.filter((t) => t.category === "plus");
}

export async function getHajiFuroda(): Promise<TourPackage> {
  const furoda = toursData.find((t) => t.id === "haji-furoda");
  if (!furoda) throw new Error("Haji Furoda package not found");
  return furoda;
}

export async function getTourBySlug(slug: string): Promise<TourPackage | null> {
  const tour = toursData.find((t) => t.slug.toLowerCase() === slug.toLowerCase());
  return tour || null;
}

export async function getTourByCity(citySlug: string): Promise<TourPackage | null> {
  const tour = toursData.find(
    (t) => t.category === "reguler" && t.slug.toLowerCase() === citySlug.toLowerCase()
  );
  return tour || null;
}

export async function getFeaturedTours(): Promise<TourPackage[]> {
  // Top featured: Jakarta, Surabaya, Makassar, Plus Thaif, Haji Furoda
  const featuredSlugs = ["jakarta", "surabaya", "makassar", "thaif", "haji-furoda"];
  return toursData.filter((t) => featuredSlugs.includes(t.slug));
}

/**
 * Articles & Content Silo DAL
 */
export async function getAllArticles(): Promise<Article[]> {
  return articlesData;
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const article = articlesData.find((a) => a.slug === slug);
  return article || null;
}

export async function getRecentArticles(limit: number = 4): Promise<Article[]> {
  return articlesData.slice(0, limit);
}

export async function getArticlesByCategory(category: string): Promise<Article[]> {
  return articlesData.filter((a) =>
    a.categories.some((c) => c.toLowerCase() === category.toLowerCase())
  );
}

export async function getRelatedArticles(currentSlug: string, limit: number = 3): Promise<Article[]> {
  const current = await getArticleBySlug(currentSlug);
  if (!current) return articlesData.slice(0, limit);

  const matched = articlesData.filter(
    (a) =>
      a.slug !== currentSlug &&
      a.categories.some((cat) => current.categories.includes(cat))
  );

  return matched.slice(0, limit);
}

/**
 * Branch Offices DAL
 */
export async function getAllBranches(): Promise<BranchOffice[]> {
  return branchesData;
}

export async function getBranchBySlug(slug: string): Promise<BranchOffice | null> {
  const branch = branchesData.find((b) => b.slug.toLowerCase() === slug.toLowerCase());
  return branch || null;
}

export async function getBranchesByRegion(region: string): Promise<BranchOffice[]> {
  return branchesData.filter((b) => b.region.toLowerCase() === region.toLowerCase());
}

/**
 * Site Configuration DAL
 */
export async function getSiteConfig(): Promise<SiteConfig> {
  return siteConfig;
}
