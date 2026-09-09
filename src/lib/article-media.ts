/**
 * Editorial Article Media & Visual Resolver
 * Automatically resolves authentic, contextual sanctuary photography for every article
 * ensuring zero broken images across the 400 articles catalog.
 */

export interface ArticleMeta {
  slug?: string;
  title?: string;
  categories?: string[];
  excerpt?: string;
}

// Curated high-resolution fallback pool for deterministic cycling
const FALLBACK_HEROES = [
  "/images/bimbingan-manasik-dan-doa-umroh-resmi.webp",
  "/images/masjidil-haram-kabah-makkah-dawn.webp",
  "/images/ibadah-thawaf-kabah-masjidil-haram.webp",
  "/images/payung-madinah-masjid-nabawi-ziarah.webp",
  "/images/haji-khusus-furoda-mujamalah-resmi-kemenag.webp",
  "/images/masjid-nabawi-madinah-ziarah-raudhah.webp",
  "/images/biro-perjalanan-umroh-keluarga-samira-travel.webp",
  "/images/fasilitas-koper-dan-perlengkapan-umroh-eksekutif.webp",
];

/**
 * Resolves the most contextual, authentic photography asset for an article.
 */
export function getArticleCoverImage(article: ArticleMeta): string {
  const text = `${article.slug || ""} ${article.title || ""} ${(article.categories || []).join(" ")} ${article.excerpt || ""}`.toLowerCase();

  // 1. Guinness & Awards
  if (text.includes("guinness") || text.includes("rekor dunia")) {
    return "/images/rekor-dunia-guinness-world-records-samira-travel.webp";
  }
  if (text.includes("apsi") || text.includes("penghargaan") || text.includes("muri")) {
    return "/images/penghargaan-apsi-2026-jamaah-terbanyak-tvone.webp";
  }

  // 2. Destinations Plus
  if (text.includes("thaif") || text.includes("thoil")) {
    return "/images/paket-umroh-plus-thaif-wisata-kebun-mawar.webp";
  }
  if (text.includes("turki") || text.includes("turkiye") || text.includes("istanbul") || text.includes("bosphorus")) {
    return "/images/paket-umroh-plus-turki-istanbul-bosphorus.webp";
  }
  if (text.includes("al-ula") || text.includes("alula") || text.includes("hegra")) {
    return "/images/paket-umroh-plus-al-ula-hegra-unesco.webp";
  }
  if (text.includes("jeddah") || text.includes("corniche") || text.includes("laut merah")) {
    return "/images/paket-umroh-plus-jeddah-corniche-laut-merah.webp";
  }
  if (text.includes("riyadh") || text.includes("masmak")) {
    return "/images/paket-umroh-plus-riyadh-benteng-masmak.webp";
  }

  // 3. Haji & Furoda
  if (text.includes("furoda") || text.includes("haji khusus") || text.includes("mujamalah") || text.includes("arafah") || text.includes("mina") || text.includes("wukuf") || text.includes("armuzna")) {
    return "/images/haji-khusus-furoda-mujamalah-resmi-kemenag.webp";
  }

  // 4. Equipment, Packing & Luggage
  if (text.includes("koper") || text.includes("perlengkapan") || text.includes("bawaan") || text.includes("pakaian") || text.includes("packing") || text.includes("tas ")) {
    return "/images/fasilitas-koper-dan-perlengkapan-umroh-eksekutif.webp";
  }

  // 5. Family, Children, Elderly
  if (text.includes("keluarga") || text.includes("anak") || text.includes("lansia") || text.includes("orang tua") || text.includes("suami istri") || text.includes("rombongan")) {
    return "/images/biro-perjalanan-umroh-keluarga-samira-travel.webp";
  }

  // 6. Madinah, Nabawi & Raudhah
  if (text.includes("madinah") || text.includes("nabawi") || text.includes("raudhah") || text.includes("ziarah") || text.includes("makam rasul")) {
    return "/images/payung-madinah-masjid-nabawi-ziarah.webp";
  }

  // 7. Manasik & Doa Guidance
  if (text.includes("manasik") || text.includes("pelatihan") || text.includes("pelepasan") || text.includes("bimbingan")) {
    return "/images/dokumentasi-manasik-dan-pelepasan-jamaah-samira-travel-1.webp";
  }

  if (text.includes("doa") || text.includes("amalan") || text.includes("niat") || text.includes("zikir") || text.includes("dzikir") || text.includes("sunnah") || text.includes("fikih") || text.includes("hukum") || text.includes("ihram") || text.includes("miqat") || text.includes("talbiyah")) {
    return "/images/bimbingan-manasik-dan-doa-umroh-resmi.webp";
  }

  // 8. Flight, Airlines, Visa, Nusuk
  if (text.includes("pesawat") || text.includes("charter") || text.includes("lion air") || text.includes("saudia") || text.includes("garuda") || text.includes("bandara") || text.includes("tiket") || text.includes("visa") || text.includes("nusuk")) {
    return "/images/jadwal-paket-umroh-reguler-lion-air-charter.webp";
  }

  // 9. Hotel & Accommodation
  if (text.includes("hotel") || text.includes("bintang 5") || text.includes("kamar") || text.includes("akomodasi") || text.includes("penginapan") || text.includes("ring 1")) {
    return "/images/hotel-bintang-5-dekat-masjid-makkah-madinah.webp";
  }

  // 10. Makkah, Kaaba, Thawaf
  if (text.includes("makkah") || text.includes("mekkah") || text.includes("kaaba") || text.includes("ka'bah") || text.includes("thawaf") || text.includes("sa'i") || text.includes("sai") || text.includes("masjidil haram")) {
    return "/images/masjidil-haram-kabah-makkah-dawn.webp";
  }

  // Deterministic Hash Fallback
  const key = article.slug || article.title || "samira-artikel";
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash = (hash << 5) - hash + key.charCodeAt(i);
    hash |= 0;
  }
  const index = Math.abs(hash) % FALLBACK_HEROES.length;
  return FALLBACK_HEROES[index];
}

/**
 * Curated high-level topic categories for tab filtering.
 */
export const EDITORIAL_CATEGORIES = [
  { id: "all", label: "Semua Panduan", slug: "semua" },
  { id: "manasik", label: "Manasik & Fikih", slug: "manasik" },
  { id: "tips", label: "Tips & Persiapan", slug: "tips" },
  { id: "ziarah", label: "Makkah & Madinah", slug: "ziarah" },
  { id: "haji", label: "Haji Khusus", slug: "haji" },
  { id: "visa", label: "Regulasi & Visa", slug: "visa" },
];

/**
 * Filter an article against a chosen editorial category slug.
 */
export function matchesEditorialCategory(article: ArticleMeta, categorySlug: string): boolean {
  if (!categorySlug || categorySlug === "semua" || categorySlug === "all") return true;

  const text = `${article.slug || ""} ${article.title || ""} ${(article.categories || []).join(" ")} ${article.excerpt || ""}`.toLowerCase();

  switch (categorySlug) {
    case "manasik":
      return (
        text.includes("manasik") ||
        text.includes("doa") ||
        text.includes("amalan") ||
        text.includes("niat") ||
        text.includes("fikih") ||
        text.includes("rukun") ||
        text.includes("wajib") ||
        text.includes("ihram") ||
        text.includes("miqat") ||
        text.includes("thawaf") ||
        text.includes("sa'i") ||
        text.includes("sai") ||
        text.includes("tahallul")
      );
    case "tips":
      return (
        text.includes("tips") ||
        text.includes("koper") ||
        text.includes("perlengkapan") ||
        text.includes("bawaan") ||
        text.includes("persiapan") ||
        text.includes("fisik") ||
        text.includes("kesehatan") ||
        text.includes("keluarga") ||
        text.includes("anak") ||
        text.includes("lansia")
      );
    case "ziarah":
      return (
        text.includes("makkah") ||
        text.includes("mekkah") ||
        text.includes("madinah") ||
        text.includes("nabawi") ||
        text.includes("raudhah") ||
        text.includes("kaaba") ||
        text.includes("ka'bah") ||
        text.includes("masjidil haram") ||
        text.includes("ziarah") ||
        text.includes("tempat mustajab") ||
        text.includes("jabal") ||
        text.includes("sejarah")
      );
    case "haji":
      return (
        text.includes("haji") ||
        text.includes("furoda") ||
        text.includes("mujamalah") ||
        text.includes("arafah") ||
        text.includes("mina") ||
        text.includes("wukuf") ||
        text.includes("armuzna") ||
        text.includes("maktab")
      );
    case "visa":
      return (
        text.includes("visa") ||
        text.includes("paspor") ||
        text.includes("nusuk") ||
        text.includes("regulasi") ||
        text.includes("saudi") ||
        text.includes("kemenag") ||
        text.includes("syarat") ||
        text.includes("biaya") ||
        text.includes("aturan")
      );
    default:
      return true;
  }
}
