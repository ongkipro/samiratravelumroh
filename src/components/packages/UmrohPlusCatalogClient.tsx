"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { TourPackage } from "@/types";
import { 
  MapPin, 
  Calendar, 
  Hotel, 
  Plane, 
  Star, 
  ChevronRight
} from "lucide-react";

interface UmrohPlusCatalogClientProps {
  tours: TourPackage[];
}

interface DestinationMeta {
  shortName: string;
  tagline: string;
  chips: string[];
  flyer: string;
}

const destinationMap: Record<string, DestinationMeta> = {
  thaif: {
    shortName: "Plus Ta'if",
    tagline: "Kota Sejuk Pegunungan & Kebun Mawar",
    chips: ["Kereta Gantung Telefrik", "Masjid Ibnu Abbas", "Kebun Mawar"],
    flyer: "/images/dest_umroh_plus_thaif.jpg",
  },
  "al-ula": {
    shortName: "Plus Al-Ula UNESCO",
    tagline: "Keajaiban Peradaban Batu Hegra",
    chips: ["Hegra Madain Saleh", "Elephant Rock", "Maraya Hall"],
    flyer: "/images/dest_umroh_plus_alula.jpg",
  },
  turki: {
    shortName: "Plus Turki Bosphorus",
    tagline: "Jejak Khilafah Utsmaniyah & Dua Benua",
    chips: ["Hagia Sophia", "Bosphorus Cruise", "Topkapi Palace"],
    flyer: "/images/dest_umroh_plus_turki.jpg",
  },
  riyadh: {
    shortName: "Plus Riyadh Diriyah",
    tagline: "Ibu Kota Modern & Kota Tua Diriyah",
    chips: ["Benteng Al-Masmak", "UNESCO Diriyah", "Kingdom Centre"],
    flyer: "/images/dest_umroh_plus_riyadh.jpg",
  },
  jeddah: {
    shortName: "Plus Jeddah Al-Balad",
    tagline: "Pesisir Laut Merah & Kota Koral Kuno",
    chips: ["Al-Balad UNESCO", "Corniche Laut Merah", "Masjid Terapung"],
    flyer: "/images/dest_umroh_plus_jeddah.jpg",
  },
};

export function UmrohPlusCatalogClient({ tours }: UmrohPlusCatalogClientProps) {
  const [selectedSlug, setSelectedSlug] = useState<string>("all");

  const filterTabs = [
    { id: "all", label: "Semua Destinasi", count: tours.length },
    { id: "thaif", label: "Ta'if (9 Hari)", count: 1 },
    { id: "al-ula", label: "Al-Ula (12 Hari)", count: 1 },
    { id: "turki", label: "Turki (14 Hari)", count: 1 },
    { id: "riyadh", label: "Riyadh (9 Hari)", count: 1 },
    { id: "jeddah", label: "Jeddah (9 Hari)", count: 1 },
  ];

  const filteredTours = selectedSlug === "all"
    ? tours
    : tours.filter((t) => t.slug.toLowerCase() === selectedSlug.toLowerCase());

  return (
    <div className="space-y-10">
      {/* 1. Interactive Destination Filter Tabs */}
      <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {filterTabs.map((tab) => {
          const isActive = selectedSlug === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedSlug(tab.id)}
              className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer shrink-0 flex items-center gap-1.5 ${
                isActive
                  ? "bg-[#084234] text-white shadow-md scale-[1.02]"
                  : "bg-white text-slate-700 border border-[#E8E3DA] hover:bg-[#FAF8F5] hover:text-[#084234]"
              }`}
            >
              <span>{tab.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                isActive ? "bg-amber-400 text-slate-950" : "bg-slate-100 text-slate-600"
              }`}>
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* 2. Destination Catalog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredTours.map((tour) => {
          const meta = destinationMap[tour.slug] || {
            shortName: "Umroh Plus",
            tagline: "Wisata Sejarah & Religi",
            chips: ["City Tour", "Hotel Bintang 4", "Visa Resmi"],
            flyer: tour.flyerImage || "/images/brosur-keberangkatan-07.webp",
          };

          return (
            <article
              key={tour.id}
              className="group bg-white rounded-3xl border border-[#E8E3DA] hover:border-[#C5A059] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Thumbnail Header (Clean, No Floating Badge Clutter) */}
                <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden arch-top">
                  <Image
                    src={meta.flyer}
                    alt={tour.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Single Minimal Duration Tag */}
                  <span className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold shadow-sm">
                    {tour.durationDays} Hari
                  </span>
                </div>

                {/* Card Content Body */}
                <div className="p-6 space-y-3.5">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                      <span className="text-[#9B7832] font-bold uppercase tracking-wider">
                        {meta.shortName}
                      </span>
                      <span>{tour.airline}</span>
                    </div>
                    <h3 className="font-playfair text-xl font-bold text-[#0F172A] group-hover:text-[#084234] transition-colors leading-snug line-clamp-1">
                      {tour.title}
                    </h3>
                  </div>

                  {/* Highlight Attraction Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {meta.chips.map((chip, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 text-[11px] font-medium bg-[#FAF8F5] text-slate-700 border border-[#E8E3DA] px-2.5 py-0.5 rounded-full"
                      >
                        <MapPin className="w-3 h-3 text-[#9B7832] shrink-0" />
                        <span>{chip}</span>
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {tour.description}
                  </p>

                  {/* Hotel Accommodation Specs (Clean Text, No SVG loops) */}
                  <div className="text-xs text-slate-600 space-y-1 pt-1">
                    <div className="flex items-center justify-between">
                      <span className="truncate">Makkah: <strong className="font-semibold text-slate-800">{tour.hotelMakkah.name.split("/")[0].trim()}</strong></span>
                      <span className="text-amber-600 font-bold shrink-0 ml-2 text-[11px]">★ {tour.hotelMakkah.stars}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="truncate">Madinah: <strong className="font-semibold text-slate-800">{tour.hotelMadinah.name.split("/")[0].trim()}</strong></span>
                      <span className="text-amber-600 font-bold shrink-0 ml-2 text-[11px]">★ {tour.hotelMadinah.stars}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer: Clean Price & Action */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-[#E8E3DA] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                      Biaya All-in (Quad)
                    </span>
                    <div className="text-2xl font-extrabold text-[#084234] tracking-tight">
                      {tour.priceFormatted}
                    </div>
                  </div>

                  <Link
                    href={`/umroh-plus/${tour.slug}`}
                    className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl bg-[#084234] hover:bg-[#04261E] text-white text-xs font-bold transition-all shadow-sm active:scale-[0.98]"
                  >
                    <span>Lihat Detail</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#C5A059]" />
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Empty State Guard */}
      {filteredTours.length === 0 && (
        <div className="text-center py-16 bg-white rounded-3xl border border-[#E8E3DA] p-8 space-y-3">
          <p className="text-sm font-semibold text-slate-600">
            Tidak ada paket yang cocok untuk destinasi yang dipilih.
          </p>
          <button
            type="button"
            onClick={() => setSelectedSlug("all")}
            className="px-4 py-2 rounded-xl bg-[#084234] text-white text-xs font-bold hover:bg-[#04261E] transition-colors"
          >
            Tampilkan Semua Paket
          </button>
        </div>
      )}
    </div>
  );
}
