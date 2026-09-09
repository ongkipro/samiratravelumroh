import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { getPlusTours } from "@/lib/data-service";
import { buildBreadcrumbSchema } from "@/lib/seo";
import { UmrohPlusCatalogClient } from "@/components/packages/UmrohPlusCatalogClient";
import { 
  Compass, 
  ShieldCheck, 
  Hotel, 
  Users, 
  HelpCircle,
  Clock,
  Plane
} from "lucide-react";

export const metadata: Metadata = {
  title: "Katalog Paket Umroh Plus 2026 — Thaif, Al-Ula, Turki, Riyadh & Jeddah | Samira Travel",
  description:
    "Jelajahi peradaban Islam dan keajaiban dunia dalam program Umroh Plus Samira Travel 2026. Pilihan destinasi Thaif, Al-Ula (Hegra UNESCO), Turki Bosphorus, Riyadh, dan Jeddah.",
  alternates: {
    canonical: "https://samiratravelumrohhaji.com/umroh-plus",
  },
};

export default async function UmrohPlusIndexPage() {
  const plusTours = await getPlusTours();

  const breadcrumbs = buildBreadcrumbSchema([
    { name: "Beranda", item: "/" },
    { name: "Umroh Plus", item: "/umroh-plus" },
  ]);

  const faqs = [
    {
      q: "Apakah biaya paket Umroh Plus sudah termasuk visa wisata?",
      a: "Ya, seluruh paket Umroh Plus Samira Travel sudah mencakup pengurusan Visa Umroh resmi Kemenag RI dan Visa Wisata/E-Visa untuk negara destinasi terkait (seperti Visa Turki atau E-Visa Arab Saudi).",
    },
    {
      q: "Bagaimana dengan pembimbing ibadah dan muthawwif selama ziarah?",
      a: "Setiap rombongan Umroh Plus didampingi oleh Muthawwif mukim berpengalaman di Tanah Suci serta Tour Leader berlisensi BNSP yang menguasai sejarah dan tata rute destinasi wisata halal.",
    },
    {
      q: "Apakah fasilitas audio receiver (APS) disediakan selama ziarah?",
      a: "Benar. Samira Travel memfasilitasi setiap jemaah dengan perangkat Audio Receiver System (APS) agar bimbingan doa thawaf, sa'i, dan penjelasan sejarah di lokasi wisata terdengar jernih tanpa terganggu keramaian.",
    },
  ];

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
              <span className="text-white font-medium">Umroh Plus</span>
            </nav>

            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-semibold tracking-[0.2em] text-[#C5A059] uppercase block">
                Rangkaian Wisata Sejarah & Peradaban Islam
              </span>
              <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Paket Umroh Plus Pilihan Musim 2026
              </h1>
              <p className="text-sm md:text-base text-emerald-100/90 leading-relaxed">
                Sempurnakan ibadah di Baitullah dengan menjelajahi jejak kenabian dan kemegahan peradaban Islam di Thaif, situs warisan dunia UNESCO Al-Ula Hegra, Turki Istanbul & Bosphorus, Riyadh, serta Jeddah.
              </p>

              {/* 4 Trust Feature Badges */}
              <div className="pt-2 flex flex-wrap gap-2.5 text-xs text-emerald-100">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 border border-white/10 font-semibold">
                  <Hotel className="w-3.5 h-3.5 text-[#C5A059]" />
                  Hotel Ring 1 Dekat Masjid
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 border border-white/10 font-semibold">
                  <Users className="w-3.5 h-3.5 text-[#C5A059]" />
                  Muthawwif & Tour Leader BNSP
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 border border-white/10 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                  Visa Resmi Kemenag & Wisata
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 border border-white/10 font-semibold">
                  <Plane className="w-3.5 h-3.5 text-[#C5A059]" />
                  Penerbangan Terjadwal Pasti
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Catalog Section with Destination Filter */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <UmrohPlusCatalogClient tours={plusTours} />
        </section>

        {/* Why Choose Umroh Plus Samira Travel */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E3DA] shadow-sm space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold text-[#084234] uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                Kenyamanan & Kepastian
              </span>
              <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#0F172A]">
                Keunggulan Layanan Umroh Plus Samira Travel
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Dirancang khusus untuk menghadirkan keseimbangan antara kekhusyukan rukun umrah dan wawasan peradaban Islam dunia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4 md:divide-x divide-[#E8E3DA]">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#084234] flex items-center justify-center mb-3">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-[#0F172A]">
                  Eksplorasi Sejarah Mendalam
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Bukan sekadar berwisata biasa, setiap kunjungan dipandu pemaparan sirah nabawiyah dan hikmah sejarah kebesaran Islam oleh muthawwif mukim.
                </p>
              </div>

              <div className="space-y-2 md:pl-8">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#C5A059] flex items-center justify-center mb-3">
                  <Hotel className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-[#0F172A]">
                  Hotel Bintang Strategis
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Akomodasi hotel bintang 4 dan 5 di pelataran Masjidil Haram dan Nabawi, serta hotel terstandar nyaman di kota wisata tujuan.
                </p>
              </div>

              <div className="space-y-2 md:pl-8">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#084234] flex items-center justify-center mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-[#0F172A]">
                  Legalitas & Visa Terintegrasi
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Pengurusan dokumen visa umrah dan visa masuk negara tujuan ditangani tim profesional resmi tanpa kendala di imigrasi bandara.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E3DA] shadow-sm space-y-6">
            <div className="flex items-center gap-2 text-[#0F172A]">
              <HelpCircle className="w-5 h-5 text-[#084234]" />
              <h2 className="font-playfair text-xl sm:text-2xl font-bold">
                Pertanyaan Populer Seputar Umroh Plus
              </h2>
            </div>

            <div className="divide-y divide-slate-100">
              {faqs.map((faq, idx) => (
                <div key={idx} className="py-4 space-y-1.5">
                  <h3 className="text-sm font-bold text-[#0F172A]">{faq.q}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
