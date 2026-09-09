"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { TourPackage } from "@/types";
import { 
  Plane, 
  Hotel, 
  Calendar, 
  MapPin, 
  ArrowRight, 
  Star
} from "lucide-react";

interface PackageFilterSectionProps {
  tours: TourPackage[];
}

type TabCategory = "all" | "reguler" | "plus" | "haji";

export function PackageFilterSection({ tours }: PackageFilterSectionProps) {
  const [activeTab, setActiveTab] = useState<TabCategory>("all");

  const filteredTours = tours
    .filter((tour) => {
      if (activeTab === "all") return true;
      return tour.category === activeTab;
    })
    .slice(0, 6);

  const getPackageUrl = (tour: TourPackage) => {
    if (tour.category === "haji") return "/haji-khusus-furoda";
    if (tour.category === "plus") return `/umroh-plus/${tour.slug}`;
    return `/paket-umroh/${tour.city.toLowerCase()}`;
  };

  return (
    <section className="py-14 md:py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-8">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#9B7832] uppercase block">
            Pilihan Jadwal Keberangkatan 1448 H
          </span>
          <h2 className="font-playfair text-xl sm:text-2xl md:text-3xl font-bold text-[#0F172A]">
            Paket Umrah & Haji Khusus
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Penerbangan langsung pesawat charter berjadwal pasti, akomodasi bintang 4 & 5 di pelataran masjid suci, dan bimbingan manasik intensif bersanad.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center mb-10 overflow-x-auto no-scrollbar pb-2">
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-[#E8E3DA] shadow-sm gap-1">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "all"
                  ? "bg-[#084234] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-[#FAF8F5]"
              }`}
            >
              Semua Paket
            </button>
            <button
              onClick={() => setActiveTab("reguler")}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "reguler"
                  ? "bg-[#084234] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-[#FAF8F5]"
              }`}
            >
              Umroh Reguler 11 Kota
            </button>
            <button
              onClick={() => setActiveTab("plus")}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "plus"
                  ? "bg-[#084234] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-[#FAF8F5]"
              }`}
            >
              Umroh Plus
            </button>
            <button
              onClick={() => setActiveTab("haji")}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "haji"
                  ? "bg-[#084234] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-[#FAF8F5]"
              }`}
            >
              Haji Furoda
            </button>
          </div>
        </div>

        {/* Unboxed Sanctuary: Editorial Magazine Showcase + Linear Travel Strips */}
        {filteredTours.length > 0 && (
          <div className="space-y-10">
            {/* 1. Featured Departure (Grand Split Showcase) */}
            {(() => {
              const featured = filteredTours[0];
              const detailUrl = getPackageUrl(featured);
              const flyer = featured.flyerImage || "/images/brosur-keberangkatan-01.webp";

              return (
                <div className="border border-[#E8E3DA] rounded-2xl overflow-hidden bg-white/60 backdrop-blur-sm">
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Left: Cinematic Photographic Showcase */}
                    <div className="relative aspect-[16/10] lg:aspect-auto lg:col-span-6 min-h-[280px] sm:min-h-[340px] bg-slate-100">
                      <Image
                        src={flyer}
                        alt={featured.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-center"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent lg:hidden" />
                      
                      {/* Floating Minimal Badges */}
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-md bg-[#084234] text-white text-[11px] font-bold tracking-wide shadow-md">
                          ✈️ {featured.airline} Direct
                        </span>
                        <span className="px-3 py-1 rounded-md bg-emerald-600 text-white text-[11px] font-bold shadow-md flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                          Pasti Berangkat
                        </span>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 lg:hidden text-white">
                        <span className="text-xs text-[#C5A059] font-bold uppercase tracking-wider block">
                          Embarkasi {featured.city} • {featured.durationDays} Hari
                        </span>
                        <h3 className="font-playfair text-xl font-bold mt-1">
                          {featured.title}
                        </h3>
                      </div>
                    </div>

                    {/* Right: Open Editorial Spec Sheet */}
                    <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                      <div className="space-y-4">
                        <div className="hidden lg:flex items-center justify-between text-xs text-slate-500 font-semibold border-b border-[#E8E3DA] pb-3">
                          <span className="text-[#9B7832] font-bold uppercase tracking-wider">
                            Paket Rekomendasi Utama • Embarkasi {featured.city}
                          </span>
                          <span className="font-mono text-[#084234]">
                            Durasi {featured.durationDays} Hari
                          </span>
                        </div>

                        <h3 className="hidden lg:block font-playfair text-xl xl:text-2xl font-bold text-[#0F172A] leading-snug">
                          {featured.title}
                        </h3>

                        {/* Walking-Distance & Hotel Proximity Ledger */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                          <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E8E3DA]">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                              Makkah Al-Mukarramah
                            </span>
                            <div className="font-bold text-xs text-slate-800 truncate mt-0.5">
                              {featured.hotelMakkah.name.split("/")[0].trim()}
                            </div>
                            <span className="inline-block mt-1.5 text-[10px] font-bold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded">
                              🚶 50m ke Pelataran Ka&apos;bah
                            </span>
                          </div>

                          <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E8E3DA]">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                              Madinah Al-Munawwarah
                            </span>
                            <div className="font-bold text-xs text-slate-800 truncate mt-0.5">
                              {featured.hotelMadinah.name.split("/")[0].trim()}
                            </div>
                            <span className="inline-block mt-1.5 text-[10px] font-bold text-amber-800 bg-amber-100/70 px-2 py-0.5 rounded">
                              🚶 100m ke Pintu Nabawi
                            </span>
                          </div>
                        </div>

                        {/* Flight Route & Inclusions */}
                        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600 pt-1">
                          <span className="font-mono font-semibold text-[#084234]">
                            🛫 Rute Langsung: {featured.city} ➔ JED / MED
                          </span>
                          <span className="text-slate-500">
                            Fasilitas: Handling, Visa, Asuransi, Manasik
                          </span>
                        </div>

                        <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                          {featured.description}
                        </p>
                      </div>

                      {/* Pricing Ledger & Actions */}
                      <div className="pt-5 border-t border-[#E8E3DA] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                            Biaya Resmi All-in (Quad)
                          </span>
                          <div className="text-xl sm:text-2xl font-bold text-[#084234] tracking-tight font-sans">
                            {featured.priceFormatted}
                          </div>
                          <span className="text-[10px] text-slate-500 block">
                            Tersedia opsi kamar Triple & Double
                          </span>
                        </div>

                        <div className="flex items-center gap-2.5">
                          <Link
                            href={detailUrl}
                            className="flex-1 sm:flex-initial px-5 py-3 rounded-xl bg-[#084234] hover:bg-[#04261E] text-white text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 active:scale-[0.98]"
                          >
                            <span>Rincian Paket</span>
                            <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
                          </Link>
                          <a
                            href={`https://wa.me/6285607179735?text=Assalamu%27alaikum%20Samira%20Travel,%20saya%20tertarik%20dengan%20Paket%20Umroh%20${encodeURIComponent(featured.title)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 active:scale-[0.98]"
                          >
                            <span>Tanya CS</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* 2. Linear Departure Schedule (Anti-Card Travel Rows) */}
            <div className="border-t border-[#E8E3DA] pt-8">
              <div className="flex items-center justify-between pb-4">
                <h4 className="font-bold text-sm text-[#0F172A] tracking-tight uppercase">
                  Daftar Jadwal Keberangkatan Lainnya
                </h4>
                <span className="text-xs text-slate-500 font-medium">
                  {filteredTours.length - 1} Pilihan Tersedia
                </span>
              </div>

              <div className="divide-y divide-[#E8E3DA]">
                {filteredTours.slice(1).map((tour) => {
                  const detailUrl = getPackageUrl(tour);

                  return (
                    <div
                      key={tour.id}
                      className="py-4 sm:py-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/40 transition-colors px-2 rounded-lg"
                    >
                      {/* Left: Origin & Package Metadata */}
                      <div className="min-w-0 flex-1 space-y-1">
                        <div className="flex flex-wrap items-center gap-2 text-xs">
                          <span className="px-2 py-0.5 rounded bg-[#FAF8F5] border border-[#E8E3DA] font-bold text-[#9B7832] uppercase text-[10px]">
                            {tour.city}
                          </span>
                          <span className="font-semibold text-slate-700 text-xs">
                            {tour.durationDays} Hari
                          </span>
                          <span className="text-slate-300">•</span>
                          <span className="font-mono text-slate-500 text-xs">
                            ✈️ {tour.airline} Direct
                          </span>
                          <span className="text-slate-300">•</span>
                          <span className="text-emerald-700 font-bold text-[10px] flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            Pasti Berangkat
                          </span>
                        </div>

                        <Link
                          href={detailUrl}
                          className="font-playfair text-base sm:text-lg font-bold text-[#0F172A] hover:text-[#084234] transition-colors block truncate"
                        >
                          {tour.title}
                        </Link>

                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
                          <span>Makkah: <strong className="font-semibold text-slate-700">{tour.hotelMakkah.name.split("/")[0].trim()}</strong> (50m)</span>
                          <span>Madinah: <strong className="font-semibold text-slate-700">{tour.hotelMadinah.name.split("/")[0].trim()}</strong> (100m)</span>
                        </div>
                      </div>

                      {/* Right: Price & Quick Action */}
                      <div className="flex items-center justify-between md:justify-end gap-5 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
                        <div className="text-left md:text-right">
                          <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
                            Mulai All-in (Quad)
                          </span>
                          <div className="text-sm sm:text-base font-bold text-[#084234]">
                            {tour.priceFormatted}
                          </div>
                        </div>

                        <Link
                          href={detailUrl}
                          className="px-4 py-2 rounded-xl bg-[#084234]/10 hover:bg-[#084234] hover:text-white text-[#084234] text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
                        >
                          <span>Pilih Kursi</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Bottom Navigation */}
        <div className="mt-12 text-center">
          <Link
            href="/paket-umroh"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-[#E8E3DA] hover:border-[#084234] text-[#084234] font-bold text-sm shadow-sm transition-all"
          >
            <span>Buka Katalog Lengkap Seluruh Kota & Jadwal</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
