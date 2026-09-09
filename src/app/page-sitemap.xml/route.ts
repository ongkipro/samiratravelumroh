import { SITEMAP_BASE_URL, buildUrlSetXml, SitemapItem } from "@/lib/sitemap-helper";

export const dynamic = "force-static";

export async function GET() {
  const now = new Date().toISOString();

  const pages: SitemapItem[] = [
    {
      loc: `${SITEMAP_BASE_URL}/`,
      lastmod: now,
      changefreq: "daily",
      priority: 1.0,
      image: {
        loc: "/images/hero-umroh-surabaya-embarkasi-juanda-charter.webp",
        title: "Samira Travel - Biro Perjalanan Umroh & Haji Khusus Resmi Kemenag RI",
        caption: "Biro Umroh Peringkat #1 Nasional Jemaah Terbanyak Kemenag RI",
      },
    },
    {
      loc: `${SITEMAP_BASE_URL}/paket-umroh`,
      lastmod: now,
      changefreq: "daily",
      priority: 0.9,
      image: {
        loc: "/images/fasilitas-koper-dan-perlengkapan-umroh-eksekutif.webp",
        title: "Paket Umroh Reguler 2026 - Samira Travel",
        caption: "Paket Umroh Bintang 5 Langsung 11 Kota Keberangkatan",
      },
    },
    {
      loc: `${SITEMAP_BASE_URL}/umroh-plus`,
      lastmod: now,
      changefreq: "weekly",
      priority: 0.9,
      image: {
        loc: "/images/paket-umroh-plus-turki-istanbul-bosphorus.webp",
        title: "Paket Umroh Plus Wisata Halal 2026",
        caption: "Umroh Plus Turki, Al-Ula, Thaif, Dubai, dan Mesir",
      },
    },
    {
      loc: `${SITEMAP_BASE_URL}/haji-khusus-furoda`,
      lastmod: now,
      changefreq: "weekly",
      priority: 0.9,
      image: {
        loc: "/images/haji-khusus-furoda-mujamalah-resmi-kemenag.webp",
        title: "Haji Khusus Furoda 2026 - Kuota Resmi Kerajaan Arab Saudi",
        caption: "Pendaftaran Haji Furoda Langsung Berangkat Tanpa Antri Resmi",
      },
    },
    {
      loc: `${SITEMAP_BASE_URL}/kantor-cabang`,
      lastmod: now,
      changefreq: "weekly",
      priority: 0.8,
      image: {
        loc: "/images/kantor-pusat-samira-travel-gedung-haji-umroh.webp",
        title: "Jaringan 26 Kantor Cabang Samira Travel di Indonesia",
        caption: "Layanan Tatap Muka Konsultasi dan Bimbingan Manasik Seluruh Indonesia",
      },
    },
    {
      loc: `${SITEMAP_BASE_URL}/pembiayaan-syariah`,
      lastmod: now,
      changefreq: "weekly",
      priority: 0.8,
      image: {
        loc: "/images/biro-perjalanan-umroh-keluarga-samira-travel.webp",
        title: "Pembiayaan Umroh Syariah - Umroh Dulu Bayar Belakangan",
        caption: "Solusi Finansial Ibadah Umroh Tanpa Riba Bersama Lembaga Keuangan Resmi",
      },
    },
    {
      loc: `${SITEMAP_BASE_URL}/kemitraan-dgi`,
      lastmod: now,
      changefreq: "weekly",
      priority: 0.8,
      image: {
        loc: "/images/penghargaan-apsi-2026-jamaah-terbanyak-tvone.webp",
        title: "Peluang Usaha Travel Umroh - Kemitraan DGi Samira",
        caption: "Bergabung Menjadi Mitra Syiar Baitullah Bersama Travel Umroh No. 1",
      },
    },
    {
      loc: `${SITEMAP_BASE_URL}/tentang-kami`,
      lastmod: now,
      changefreq: "monthly",
      priority: 0.7,
      image: {
        loc: "/images/rekor-dunia-guinness-world-records-samira-travel.webp",
        title: "Profil PT Samira Ali Wisata - Legalitas & Rekor Dunia",
        caption: "Pemegang Guinness World Records dan Travel Umroh Terakreditasi A",
      },
    },
    {
      loc: `${SITEMAP_BASE_URL}/testimoni`,
      lastmod: now,
      changefreq: "weekly",
      priority: 0.8,
      image: {
        loc: "/images/ibadah-thawaf-kabah-masjidil-haram.webp",
        title: "Testimoni & Pengalaman Jamaah Umroh Samira Travel",
        caption: "Kisah Ibadah Khusyuk Bersama Puluhan Ribu Jamaah Samira",
      },
    },
    {
      loc: `${SITEMAP_BASE_URL}/artikel`,
      lastmod: now,
      changefreq: "daily",
      priority: 0.8,
      image: {
        loc: "/images/bimbingan-manasik-dan-doa-umroh-resmi.webp",
        title: "Panduan & Artikel Edukasi Umroh Haji Terlengkap",
        caption: "Kumpulan Tips, Tata Cara Manasik, Doa, dan Informasi Regulasi Terkini",
      },
    },
  ];

  const xml = buildUrlSetXml(pages);

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=43200",
    },
  });
}
