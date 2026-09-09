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
  ChevronRight,
  MessageCircle,
  Clock,
  Sparkles
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
    flyer: "/images/paket-umroh-plus-thaif-wisata-kebun-mawar.webp",
  },
  "al-ula": {
    shortName: "Plus Al-Ula UNESCO",
    tagline: "Keajaiban Peradaban Batu Hegra",
    chips: ["Hegra Madain Saleh", "Elephant Rock", "Maraya Hall"],
    flyer: "/images/paket-umroh-plus-al-ula-hegra-unesco.webp",
  },
  turki: {
    shortName: "Plus Turki Bosphorus",
    tagline: "Jejak Khilafah Utsmaniyah & Dua Benua",
    chips: ["Hagia Sophia", "Bosphorus Cruise", "Topkapi Palace"],
    flyer: "/images/paket-umroh-plus-turki-istanbul-bosphorus.webp",
  },
  riyadh: {
    shortName: "Plus Riyadh Diriyah",
    tagline: "Ibu Kota Modern & Kota Tua Diriyah",
    chips: ["Benteng Al-Masmak", "UNESCO Diriyah", "Kingdom Centre"],
    flyer: "/images/paket-umroh-plus-riyadh-benteng-masmak.webp",
  },
  jeddah: {
    shortName: "Plus Jeddah Al-Balad",
    tagline: "Pesisir Laut Merah & Kota Koral Kuno",
    chips: ["Al-Balad UNESCO", "Corniche Laut Merah", "Masjid Terapung"],
    flyer: "/images/paket-umroh-plus-jeddah-corniche-laut-merah.webp",
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
    <div className="space-y-8">
      {/* Interactive Destination Filter Tabs */}
      <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {filterTabs.map((tab) => {
          const isActive = selectedSlug === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedSlug(tab.id)}
              className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer shrink-0 flex items-center gap-2 ${
                isActive
                  ? "bg-[#084234] text-white shadow-md scale-[1.02] ring-2 ring-[#084234]/20"
                  : "bg-white text-slate-700 border border-[#E8E3DA] hover:bg-[#FAF8F5] hover:text-[#084234]"
              }`}
            >
              <span>{tab.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                isActive ? "bg-[#C5A059] text-slate-950" : "bg-slate-100 text-slate-600"
              }`}>
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Destination Catalog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredTours.map((tour) => {
          const meta = destinationMap[tour.slug] || {
            shortName: "Umroh Plus",
            tagline: "Wisata Sejarah & Religi",
            chips: ["City Tour", "Hotel Bintang 4", "Visa Resmi"],
            flyer: tour.flyerImage || "/images/brosur-keberangkatan-07.webp",
          };

          const waGreeting = encodeURIComponent(
            `Assalamu'alaikum Samira Travel, saya tertarik berkonsultasi mengenai Paket ${tour.title} (${tour.durationDays} Hari). Mohon info ketersediaan seat dan jadwal keberangkatan.`
          );
          const waLink = `https://wa.me/6285607179735?text=${waGreeting}`;

          return (
            <article
              key={tour.id}
              className="group bg-white rounded-3xl border border-[#E8E3DA] hover:border-[#C5A059]/70 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Thumbnail Header with Native 16:9 Aspect Ratio (1376x768) */}
                <div className="relative aspect-[16/9] w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={meta.flyer}
                    alt={tour.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Single Minimal Duration Tag */}
                  <span className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-[#04261E]/80 backdrop-blur-md text-white text-xs font-semibold shadow-sm border border-white/20 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#C5A059]" />
                    <span>{tour.durationDays} Hari</span>
                  </span>

                  {/* Airline Tag */}
                  <span className="absolute bottom-3 left-3.5 px-2.5 py-0.5 rounded-md bg-black/60 backdrop-blur-sm text-white text-[11px] font-medium border border-white/10 flex items-center gap-1">
                    <Plane className="w-3 h-3 text-[#C5A059]" />
                    <span>{tour.airline}</span>
                  </span>
                </div>

                {/* Card Content Body */}
                <div className="p-6 space-y-3.5">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                      <span className="text-[#9B7832] font-bold uppercase tracking-wider">
                        {meta.shortName}
                      </span>
                      <span className="text-emerald-700 font-semibold text-[11px]">Direct Flight</span>
                    </div>
                    <h3 className="font-playfair text-xl font-bold text-[#0F172A] group-hover:text-[#084234] transition-colors leading-snug line-clamp-1">
                      {tour.title}
                    </h3>
                  </div>

                  {/* Highlight Attraction Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
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
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {tour.description}
                  </p>

                  {/* Hotel Accommodation Specs */}
                  <div className="text-xs text-slate-600 space-y-1 pt-1 bg-[#FAF8F5] p-3 rounded-xl border border-[#E8E3DA]/80">
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

              {/* Card Footer: Clean Price & Two-Column Actions */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-[#E8E3DA] space-y-3">
                  <div className="flex items-baseline justify-between">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                      Biaya All-in (Quad)
                    </span>
                    <div className="text-lg sm:text-xl font-bold text-[#084234] tracking-tight">
                      {tour.priceFormatted}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold transition-colors"
                      title="Konsultasi WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Chat WA</span>
                    </a>

                    <Link
                      href={`/umroh-plus/${tour.slug}`}
                      className="inline-flex items-center justify-center gap-1 px-3 py-2.5 rounded-xl bg-[#084234] hover:bg-[#04261E] text-white text-xs font-bold transition-all shadow-sm active:scale-98"
                    >
                      <span>Detail Paket</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#C5A059]" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Empty State Guard */}
      {filteredTours.length === 0 && (
        <div className="text-center py-16 bg-white rounded-3xl border border-[#E8E3DA] p-8 space-y-3 max-w-md mx-auto">
          <p className="text-sm font-semibold text-slate-600">
            Tidak ada paket yang cocok untuk destinasi yang dipilih.
          </p>
          <button
            type="button"
            onClick={() => setSelectedSlug("all")}
            className="px-5 py-2.5 rounded-xl bg-[#084234] text-white text-xs font-bold hover:bg-[#04261E] transition-colors"
          >
            Tampilkan Semua Paket
          </button>
        </div>
      )}
    </div>
  );
}
