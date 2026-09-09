"use client";

import React from "react";
import Image from "next/image";
import { FlightDeckSearch } from "./FlightDeckSearch";
import { CanopyPattern } from "@/components/decorations/CanopyPattern";
import { Star, Award } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] text-[#0F172A] min-h-[100dvh] flex flex-col justify-between pt-24 sm:pt-28 lg:pt-32 pb-4 sm:pb-6">
      {/* 0. Singular Minimalist Islamic Architectural Rosette (Top-Right Watermark) */}
      <div className="absolute -top-24 -right-24 sm:-top-16 sm:-right-12 lg:right-2 pointer-events-none select-none z-0" aria-hidden="true">
        <div className="animate-canopy-slow opacity-10 sm:opacity-12">
          <CanopyPattern size={520} stroke="#C5A059" strokeWidth={0.9} />
        </div>
      </div>

      {/* 1. Background Artwork: Anchored in lower section, fading smoothly into warm cream canvas */}
      <div className="absolute inset-x-0 bottom-0 top-[34%] sm:top-[32%] lg:top-[30%] z-0 pointer-events-none">
        <Image
          src="/images/kabah-baitullah-makkah-al-mukarramah.webp"
          alt="Keagungan Baitullah Ka'bah di Makkah Al-Mukarramah - Samira Travel"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />

        {/* Ambient Subtle Golden Aura behind Ka'bah with Meditative Dawn Pulse */}
        <div className="absolute inset-x-0 bottom-16 h-56 bg-radial from-[#C5A059]/16 via-[#C5A059]/4 to-transparent blur-2xl animate-noor-dawn pointer-events-none" />

        {/* Generous atmospheric gradient feather at the top of the island merging 100% into #FAF8F5 */}
        <div className="absolute inset-x-0 top-0 h-28 sm:h-40 bg-gradient-to-b from-[#FAF8F5] via-[#FAF8F5]/85 to-transparent" />

        {/* Soft feather at the bottom of the island artwork */}
        <div className="absolute inset-x-0 bottom-0 h-20 sm:h-28 bg-gradient-to-t from-[#FAF8F5] to-transparent" />
      </div>

      {/* Sacred Noor Floating Golden Particles (Rising Embers of Light) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-10" aria-hidden="true">
        {[
          { left: "14%", bottom: "34%", size: 3, delay: "0s", duration: "12s" },
          { left: "24%", bottom: "26%", size: 3.5, delay: "2.5s", duration: "14s" },
          { left: "38%", bottom: "38%", size: 2.5, delay: "1.2s", duration: "11s" },
          { left: "48%", bottom: "30%", size: 4, delay: "4s", duration: "13s" },
          { left: "60%", bottom: "36%", size: 3, delay: "1.8s", duration: "12s" },
          { left: "72%", bottom: "24%", size: 3.5, delay: "5.5s", duration: "15s" },
          { left: "84%", bottom: "32%", size: 3, delay: "3s", duration: "11s" },
        ].map((particle, idx) => (
          <span
            key={idx}
            className="absolute rounded-full bg-[#D1AC40] animate-float-noor shadow-[0_0_8px_2px_rgba(209,172,64,0.5)]"
            style={{
              left: particle.left,
              bottom: particle.bottom,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      {/* 2. Top Content: Elegant Breathing Room Below Fixed Navbar */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3.5 sm:space-y-4 relative z-10 pt-2 sm:pt-4">
        {/* Luxury Trust Pill: Verified Kemenag & Jemaah Rating Seal */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/85 backdrop-blur-md border border-[#E8E3DA] shadow-xs hover:bg-white transition-all text-xs text-slate-700 whitespace-nowrap max-w-full">
          {/* Verified Award Seal Badge */}
          <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#084234] text-[#E6CA65] shrink-0 ring-1.5 ring-[#C5A059]/40 shadow-xs">
            <Award className="w-3 h-3 text-[#E6CA65]" />
          </div>

          {/* Golden Stars (Compact ★ 5.0 on mobile, 5 stars on sm+) */}
          <div className="flex items-center gap-0.5 text-amber-400 shrink-0">
            <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400 shrink-0" />
            <span className="sm:hidden text-[11px] font-bold text-slate-800 ml-0.5">5.0</span>
            <div className="hidden sm:flex items-center gap-0.5">
              {Array.from({ length: 4 }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400 shrink-0" />
              ))}
            </div>
          </div>

          <span className="text-[11px] sm:text-xs text-slate-700 font-medium whitespace-nowrap">
            Dipercaya <strong className="text-[#0F172A] font-bold">50.000+ Jemaah</strong>
            <span className="mx-1 sm:mx-1.5 text-slate-300">•</span>
            <span className="text-[#084234] font-bold">Peringkat #1 Kemenag RI</span>
          </span>
        </div>

        {/* Headline with Islamic Baitullah Phrasing & Golden Brush Stroke */}
        <div className="max-w-4xl mx-auto">
          <h1 className="font-playfair text-3xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-[#0F172A] leading-[1.25] sm:leading-[1.18]">
            Awali Perjalanan Suci ke{" "}
            <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-10">Baitullah</span>
              {/* Golden brush stroke bar with subtle ambient sheen sweep */}
              <span
                aria-hidden="true"
                className="absolute bottom-1 sm:bottom-1.5 -left-1 -right-1 h-2.5 sm:h-3.5 bg-[#D1AC40] -z-0 rounded-xs opacity-90 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent -translate-x-full animate-gold-sheen" />
              </span>
            </span>
            <br className="hidden sm:inline" />
            {" "}dengan Penuh Kepastian
          </h1>
        </div>
      </div>

      {/* 3. Floating Search Dock: Anchored at bottom edge, floating cleanly over the island artwork */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full mt-auto pt-6 sm:pt-10 pb-4 sm:pb-6">
        <FlightDeckSearch />
      </div>

      {/* 4. Precision Micro-Cartographic Qibla Coordinates (Quiet Luxury Detail) */}
      <div className="hidden lg:flex absolute bottom-3.5 left-8 z-20 items-center gap-2 text-[9px] tracking-[0.25em] text-slate-400/70 uppercase font-mono select-none pointer-events-none" aria-hidden="true">
        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse" />
        <span>21.4225° N, 39.8262° E • MAKKAH AL-MUKARRAMAH</span>
      </div>
    </section>
  );
}
