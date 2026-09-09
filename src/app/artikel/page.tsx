import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { getAllArticles } from "@/lib/data-service";
import { buildBreadcrumbSchema } from "@/lib/seo";
import { ArticleCatalogClient } from "@/components/articles/ArticleCatalogClient";
import { BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Pusat Artikel & Edukasi Umrah Haji Terlengkap (400 Panduan) | Samira Travel",
  description:
    "Kumpulan 400 artikel panduan manasik, tips persiapan fisik, fikih umrah, tata cara ziarah Makkah & Madinah, hingga kabar regulasi visa Arab Saudi terbaru 2026.",
  alternates: {
    canonical: "https://samiratravelumrohhaji.com/artikel",
  },
};

export default async function ArtikelIndexPage() {
  const articles = await getAllArticles();

  const breadcrumbs = buildBreadcrumbSchema([
    { name: "Beranda", item: "/" },
    { name: "Artikel Edukasi", item: "/artikel" },
  ]);

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <div className="bg-[#FAF8F5] min-h-screen pb-16">
        {/* Header Hero */}
        <section className="bg-gradient-to-b from-[#04261E] to-[#084234] text-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-emerald-200/80 mb-6">
              <Link href="/" className="hover:text-white">Beranda</Link>
              <span>/</span>
              <span className="text-white font-medium">Artikel Edukasi</span>
            </nav>

            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-semibold tracking-[0.2em] text-[#C5A059] uppercase block">
                Pusat Wawasan & Literasi Ibadah
              </span>
              <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Panduan Lengkap Ibadah Menuju Baitullah
              </h1>
              <p className="text-sm md:text-base text-emerald-100/90 leading-relaxed">
                Pelajari rukun dan wajib umrah, persiapan fisik menjelang keberangkatan, tips membawa koper, hingga sejarah tempat-tempat mustajab di Makkah dan Madinah.
              </p>
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
