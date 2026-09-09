import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { getAllTours, getRegularTours } from "@/lib/data-service";
import { buildBreadcrumbSchema } from "@/lib/seo";
import { PackageFilterSection } from "@/components/home/PackageFilterSection";
import { MapPin, Plane, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Katalog Paket Umroh 2026 — 11 Kota Embarkasi Langsung | Samira Travel",
  description:
    "Daftar lengkap paket umroh 2026 dari Surabaya, Jakarta, Medan, Makassar, Palembang, Padang, Pontianak, Aceh, Denpasar, Batam, dan Pekanbaru. Penerbangan langsung charter Lion Air, hotel bintang 4 & 5.",
  alternates: {
    canonical: "https://samiratravelumrohhaji.com/paket-umroh",
  },
};

export default async function PaketUmrohIndexPage() {
  const [allTours, regularTours] = await Promise.all([
    getAllTours(),
    getRegularTours(),
  ]);

  const breadcrumbs = buildBreadcrumbSchema([
    { name: "Beranda", item: "/" },
    { name: "Paket Umroh", item: "/paket-umroh" },
  ]);

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <div className="bg-[#FAF8F5] min-h-screen">
        {/* Header Hero */}
        <section className="bg-gradient-to-b from-[#04261E] to-[#084234] text-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-xs text-emerald-200/80 mb-6">
              <Link href="/" className="hover:text-white">Beranda</Link>
              <span>/</span>
              <span className="text-white font-medium">Paket Umroh</span>
            </nav>

            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-semibold tracking-[0.2em] text-[#C5A059] uppercase block">
                Penerbangan Langsung 11 Embarkasi
              </span>
              <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Katalog Paket Umrah 11 Kota Embarkasi Se-Indonesia
              </h1>
              <p className="text-sm md:text-base text-emerald-100/90 leading-relaxed">
                Pilih paket umrah sesuai kota domisili Anda. Kami melayani penerbangan charter langsung dari Jakarta, Surabaya, Medan, Makassar, Palembang, Padang, Pontianak, Aceh, Denpasar, Batam, dan Pekanbaru.
              </p>
            </div>
          </div>
        </section>

        {/* Quick City Navigation */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E8E3DA] shadow-sm">
            <span className="text-xs font-bold text-[#084234] uppercase tracking-wider block mb-3">
              Pilih Kota Keberangkatan Terdekat:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
              {regularTours.map((t) => (
                <Link
                  key={t.slug}
                  href={`/paket-umroh/${t.slug}`}
                  className="px-3 py-2 rounded-xl bg-slate-50 hover:bg-[#084234] text-slate-700 hover:text-white border border-slate-200/70 hover:border-[#084234] transition-all text-center flex items-center justify-center gap-1.5 group"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059] group-hover:text-amber-300 shrink-0" />
                  <span className="text-xs font-semibold">{t.city}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Package Grid with Filter tabs */}
        <PackageFilterSection tours={allTours} />
      </div>
    </>
  );
}
