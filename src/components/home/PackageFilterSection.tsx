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
        <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-10">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#9B7832] uppercase block">
            Pilihan Jadwal Keberangkatan 1448 H
          </span>
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F172A]">
            Paket Umrah & Haji Khusus
          </h2>
          <p className="text-sm md:text-base text-slate-600">
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

        {/* Package Grid - Clean Luxury Cards (No AI Slop Clutter) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredTours.map((tour) => {
            const detailUrl = getPackageUrl(tour);
            const flyer = tour.flyerImage || "/images/brosur-keberangkatan-01.webp";

            return (
              <div
                key={tour.id}
                className="group flex flex-col bg-white rounded-3xl border border-[#E8E3DA] hover:border-[#C5A059] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Clean Photographic Header (No Floating Badge Clutter) */}
                <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden arch-top">
                  <Image
                    src={flyer}
                    alt={tour.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Single Minimal Duration Tag in Corner */}
                  <span className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold shadow-sm">
                    {tour.durationDays} Hari
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    {/* Origin & Airline Metadata */}
                    <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                      <span className="text-[#9B7832] font-bold uppercase tracking-wider">
                        Embarkasi {tour.city}
                      </span>
                      <span>{tour.airline} • Direct</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-playfair text-xl font-bold text-[#0F172A] group-hover:text-[#084234] transition-colors leading-snug line-clamp-1">
                      {tour.title}
                    </h3>

                    {/* Hotel Proximity (Clean, Dignified Text - No Repeated SVG Explosion) */}
                    <div className="text-xs text-slate-600 space-y-1.5 pt-1">
                      <div className="flex items-center justify-between">
                        <span className="truncate">Makkah: <strong className="font-semibold text-slate-800">{tour.hotelMakkah.name.split("/")[0].trim()}</strong></span>
                        <span className="text-amber-600 font-bold shrink-0 ml-2 text-[11px]">★ {tour.hotelMakkah.stars}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="truncate">Madinah: <strong className="font-semibold text-slate-800">{tour.hotelMadinah.name.split("/")[0].trim()}</strong></span>
                        <span className="text-amber-600 font-bold shrink-0 ml-2 text-[11px]">★ {tour.hotelMadinah.stars}</span>
                      </div>
                    </div>

                    {/* Description Excerpt */}
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed pt-1">
                      {tour.description}
                    </p>
                  </div>

                  {/* Clean Footer: Price & Direct CTA */}
                  <div className="pt-4 border-t border-[#E8E3DA] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                        Biaya All-in (Quad)
                      </span>
                      <div className="text-2xl font-extrabold text-[#084234] tracking-tight">
                        {tour.priceFormatted}
                      </div>
                    </div>

                    <Link
                      href={detailUrl}
                      className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl bg-[#084234] hover:bg-[#04261E] text-white text-xs font-bold transition-all shadow-sm active:scale-[0.98]"
                    >
                      <span>Lihat Detail</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

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
