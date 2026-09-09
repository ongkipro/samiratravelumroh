"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Hotel, 
  Star, 
  MapPin, 
  Clock, 
  ExternalLink, 
  Play, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2,
  Maximize2,
  X,
  Building2,
  Compass
} from "lucide-react";
import { HOTEL_TIERS, HOTEL_DISCLAIMER, HotelTier } from "@/data/hotel-tiers";
import { NaturalBrushBadge, NaturalBrushHighlight } from "@/components/decorations/NaturalBrush";

interface HotelTierShowcaseProps {
  initialTierId?: "safara" | "safawi" | "sukari" | "majol";
  className?: string;
}

export function HotelTierShowcase({
  initialTierId = "safara",
  className = "",
}: HotelTierShowcaseProps) {
  const [activeTierId, setActiveTierId] = useState<HotelTier["id"]>(initialTierId);
  const [isFlyerModalOpen, setIsFlyerModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsFlyerModalOpen(false);
    };
    if (isFlyerModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isFlyerModalOpen]);

  const activeTier = HOTEL_TIERS.find((t) => t.id === activeTierId) || HOTEL_TIERS[0];

  return (
    <section 
      id="fasilitas-hotel" 
      className={`rounded-3xl bg-gradient-to-b from-[#FAF8F5] via-white to-[#FAF8F5] border border-[#E8E3DA] p-5 sm:p-8 shadow-sm ${className}`}
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
        <div>
          <NaturalBrushBadge variant="gold">
            <Building2 className="w-3.5 h-3.5 text-[#9B7832]" />
            <span>Fasilitas &amp; Jarak Hotel Resmi Samira Travel</span>
          </NaturalBrushBadge>
        </div>
        <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
          Pilihan Paket Akomodasi &amp; <NaturalBrushHighlight variant="gold">Video Bukti Real</NaturalBrushHighlight> Jarak Hotel
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Samira Travel memberikan transparansi penuh untuk seluruh jemaah. Saksikan langsung video dokumentasi rute jalan kaki dari lobi hotel menuju pelataran Masjidil Haram dan Masjid Nabawi.
        </p>
      </div>

      {/* Tier Switcher Navigation Tabs */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar pb-2 mb-6">
        {HOTEL_TIERS.map((tier) => {
          const isActive = tier.id === activeTierId;
          return (
            <button
              key={tier.id}
              type="button"
              onClick={() => setActiveTierId(tier.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? "bg-[#084234] text-white shadow-md shadow-[#084234]/20 scale-102"
                  : "bg-white text-slate-700 border border-[#E8E3DA] hover:border-[#084234]/40 hover:bg-[#FAF8F5]"
              }`}
            >
              <span>{tier.name}</span>
              <span
                className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                  isActive
                    ? "bg-white/20 text-[#E6CA65]"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                {tier.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Tier Content Box */}
      <div className="bg-white rounded-2xl md:rounded-3xl border border-[#E8E3DA] p-5 sm:p-7 shadow-xs space-y-6">
        {/* Tier Header Summary */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-[#0F172A]">{activeTier.name}</h3>
              <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${activeTier.badgeColor}`}>
                {activeTier.badge}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              {activeTier.tagline} • {activeTier.description}
            </p>
          </div>

          {/* Brochure Flyer Trigger Button */}
          <button
            type="button"
            onClick={() => setIsFlyerModalOpen(true)}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 hover:text-[#084234] transition-colors self-start sm:self-auto cursor-pointer"
          >
            <Maximize2 className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Lihat Brosur Asli</span>
          </button>
        </div>

        {/* Side-by-Side Cards: Makkah & Madinah */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Hotel Makkah */}
          <div className="rounded-2xl bg-[#FAF8F5]/80 border border-[#E8E3DA] p-5 space-y-4 hover:border-[#084234]/30 transition-colors flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#9B7832] flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Makkah Al-Mukarramah</span>
                </span>
                <div className="flex items-center gap-1 text-amber-500">
                  {Array.from({ length: activeTier.makkah.stars }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-[11px] text-slate-500 font-bold ml-1">
                    Bintang {activeTier.makkah.stars}
                  </span>
                </div>
              </div>

              {/* Hotel Names */}
              <div>
                <h4 className="text-lg font-bold text-[#0F172A] leading-tight">
                  {activeTier.makkah.hotelNames.join(" / ")}
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  {activeTier.makkah.notes}
                </p>
              </div>

              {/* Distance & Walking Time Pills */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <div className="p-2.5 rounded-xl bg-white border border-[#E8E3DA] space-y-0.5">
                  <div className="flex items-center gap-1 text-[10px] text-slate-500 font-medium">
                    <MapPin className="w-3 h-3 text-[#084234]" />
                    <span>Jarak Fisik</span>
                  </div>
                  <div className="text-xs font-bold text-[#0F172A]">
                    {activeTier.makkah.distanceText}
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-white border border-[#E8E3DA] space-y-0.5">
                  <div className="flex items-center gap-1 text-[10px] text-slate-500 font-medium">
                    <Clock className="w-3 h-3 text-[#C5A059]" />
                    <span>Waktu Tempuh</span>
                  </div>
                  <div className="text-xs font-bold text-[#084234]">
                    {activeTier.makkah.walkingTimeText}
                  </div>
                </div>
              </div>
            </div>

            {/* Video Proof Action Button */}
            <div className="pt-2">
              <a
                href={activeTier.makkah.videoProofUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white hover:bg-red-50 text-red-600 hover:text-red-700 border border-red-200 text-xs font-bold shadow-2xs hover:shadow-xs transition-all group"
              >
                <div className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Play className="w-2.5 h-2.5 fill-white ml-0.5" />
                </div>
                <span>Tonton Video Bukti Rute Makkah (YouTube)</span>
                <ExternalLink className="w-3.5 h-3.5 ml-auto text-slate-400 group-hover:text-red-600" />
              </a>
            </div>
          </div>

          {/* Card 2: Hotel Madinah */}
          <div className="rounded-2xl bg-[#FAF8F5]/80 border border-[#E8E3DA] p-5 space-y-4 hover:border-[#084234]/30 transition-colors flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#9B7832] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Madinah Al-Munawwarah</span>
                </span>
                <div className="flex items-center gap-1 text-amber-500">
                  {Array.from({ length: activeTier.madinah.stars }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-[11px] text-slate-500 font-bold ml-1">
                    Bintang {activeTier.madinah.stars}
                  </span>
                </div>
              </div>

              {/* Hotel Names */}
              <div>
                <h4 className="text-lg font-bold text-[#0F172A] leading-tight">
                  {activeTier.madinah.hotelNames.join(" / ")}
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  {activeTier.madinah.notes}
                </p>
              </div>

              {/* Distance & Walking Time Pills */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <div className="p-2.5 rounded-xl bg-white border border-[#E8E3DA] space-y-0.5">
                  <div className="flex items-center gap-1 text-[10px] text-slate-500 font-medium">
                    <MapPin className="w-3 h-3 text-[#084234]" />
                    <span>Jarak Fisik</span>
                  </div>
                  <div className="text-xs font-bold text-[#0F172A]">
                    {activeTier.madinah.distanceText}
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-white border border-[#E8E3DA] space-y-0.5">
                  <div className="flex items-center gap-1 text-[10px] text-slate-500 font-medium">
                    <Clock className="w-3 h-3 text-[#C5A059]" />
                    <span>Waktu Tempuh</span>
                  </div>
                  <div className="text-xs font-bold text-[#084234]">
                    {activeTier.madinah.walkingTimeText}
                  </div>
                </div>
              </div>
            </div>

            {/* Video Proof Action Button */}
            <div className="pt-2">
              <a
                href={activeTier.madinah.videoProofUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white hover:bg-red-50 text-red-600 hover:text-red-700 border border-red-200 text-xs font-bold shadow-2xs hover:shadow-xs transition-all group"
              >
                <div className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Play className="w-2.5 h-2.5 fill-white ml-0.5" />
                </div>
                <span>Tonton Video Bukti Rute Madinah (YouTube)</span>
                <ExternalLink className="w-3.5 h-3.5 ml-auto text-slate-400 group-hover:text-red-600" />
              </a>
            </div>
          </div>
        </div>

        {/* Official Disclaimer & Reassurance */}
        <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/70 flex items-start gap-2.5 text-xs text-amber-900">
          <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <strong className="font-semibold">Catatan Ketersediaan Resmi:</strong>{" "}
            <span>{HOTEL_DISCLAIMER}</span>
          </div>
        </div>
      </div>

      {/* Brochure Lightbox Modal */}
      {isFlyerModalOpen && (
        <div 
          onClick={() => setIsFlyerModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
          >
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <h4 className="font-bold text-sm text-[#0F172A]">
                Brosur Resmi Fasilitas Hotel - {activeTier.name}
              </h4>
              <button
                type="button"
                onClick={() => setIsFlyerModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 cursor-pointer"
                aria-label="Tutup brosur"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="relative aspect-[3/4] w-full bg-slate-100">
              <Image
                src={activeTier.flyerImage}
                alt={`Brosur fasilitas hotel ${activeTier.name} Samira Travel`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 672px"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
