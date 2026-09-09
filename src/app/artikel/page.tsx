import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { getAllArticles } from "@/lib/data-service";
import { buildBreadcrumbSchema, buildArticleListSchema } from "@/lib/seo";
import { ArticleCatalogClient } from "@/components/articles/ArticleCatalogClient";
import { BookOpen, ShieldCheck, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Panduan Umroh & Haji 2026 - Artikel Manasik & Tips Ibadah",
  description:
    "Kumpulan panduan manasik umroh, syarat visa 2026, persiapan ibadah, tata cara ziarah Makkah & Madinah, serta regulasi resmi Kementerian Agama RI.",
  alternates: {
    canonical: "https://samiratravelumrohhaji.com/artikel",
  },
  openGraph: {
    title: "Panduan Umroh & Haji 2026 - Artikel Manasik & Tips Ibadah",
    description: "400 panduan manasik terpercaya, tips persiapan keberangkatan, dan sejarah tempat mustajab Baitullah.",
    url: "https://samiratravelumrohhaji.com/artikel",
    images: [
      {
        url: "/images/editorial_makkah_sanctuary_dawn.jpg",
        width: 1200,
        height: 630,
        alt: "Pusat Literasi & Artikel Edukasi Umrah Haji Samira Travel",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Panduan Umroh & Haji 2026 - Artikel Manasik & Tips Ibadah",
    description: "400 panduan manasik terpercaya, tips persiapan keberangkatan, dan sejarah tempat mustajab Baitullah.",
    images: ["/images/editorial_makkah_sanctuary_dawn.jpg"],
  },
};

export default async function ArtikelIndexPage() {
  const articles = await getAllArticles();

  const breadcrumbs = buildBreadcrumbSchema([
    { name: "Beranda", item: "/" },
    { name: "Artikel Edukasi", item: "/artikel" },
  ]);

  const articleListSchema = buildArticleListSchema(articles);

  return (
    <>
      <script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        id="article-list-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleListSchema) }}
      />

      <div className="bg-[#FAF8F5] min-h-screen pb-20">
        {/* Header Hero with Photographic Sanctuary Backdrop */}
        <section className="relative overflow-hidden bg-[#04261E] text-white pt-24 sm:pt-28 pb-16 md:pb-20">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/editorial_makkah_sanctuary_dawn.jpg"
              alt="Makkah Sanctuary Dawn - Samira Travel Edukasi"
              fill
              priority
              quality={90}
              className="object-cover object-center"
            />
            {/* Directional Luminous Overlays for High Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#04261E]/95 via-[#04261E]/85 to-[#04261E]/50" />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#04261E] to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <nav className="flex items-center gap-2 text-xs text-emerald-200/80 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
              <span>/</span>
              <span className="text-white font-medium">Artikel Edukasi</span>
            </nav>

            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-semibold tracking-[0.2em] text-[#C5A059] uppercase block">
                Pusat Literasi & Wawasan Baitullah
              </span>
              <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF8F5] leading-[1.2] drop-shadow-md">
                Panduan Lengkap Ibadah Menuju Baitullah
              </h1>
              <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed font-normal max-w-2xl drop-shadow">
                Pelajari rukun dan wajib umrah, persiapan fisik menjelang keberangkatan, tips membawa koper, hingga sejarah tempat-tempat mustajab di Makkah dan Madinah.
              </p>

              {/* Micro-Assurance Indicators */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-xs sm:text-sm text-emerald-100/90 font-medium">
                <span className="inline-flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>400+ Panduan Praktis</span>
                </span>
                <span className="inline-flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>Ditinjau Muthawwif BNSP</span>
                </span>
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>Sesuai Sunnah & Regulasi Saudi</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Catalog with search & filter */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
          <ArticleCatalogClient initialArticles={articles} />
        </div>
      </div>
    </>
  );
}
