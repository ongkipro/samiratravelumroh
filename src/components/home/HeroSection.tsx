"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FlightDeckSearch } from "./FlightDeckSearch";
import { CanopyPattern } from "@/components/decorations/CanopyPattern";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#04261E] text-white pt-14 pb-20 md:pt-20 md:pb-28">
      {/* High-Clarity Photographic Kaaba Sanctuary with Gentle Radial Vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_kaaba_sanctuary.jpg"
          alt="Baitullah Ka'bah Makkah Al-Mukarramah - Samira Travel"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center sm:object-[center_30%] opacity-75 sm:opacity-85 filter brightness-95"
        />
        {/* Atmospheric Islamic Gradient for Deep Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#04261E] via-[#04261E]/60 to-[#04261E]/75" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#04261E]/40 to-[#04261E]/90" />
      </div>

      {/* Subtle Islamic Nabawi Canopy Watermark Tessellation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[1]">
        <CanopyPattern size={750} opacity={0.06} className="animate-canopy-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Clean Noble Authority Kicker (No AI Pill Capsule) */}
          <div className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#C5A059] uppercase">
            Biro Resmi Kemenag RI • PPIU No. 137/2020 • Akreditasi A Unggul
          </div>

          {/* Majestic Editorial H1 */}
          <h1 className="font-playfair text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF8F5] leading-[1.18] drop-shadow-md">
            Ibadah Khusyuk Menuju Baitullah,{" "}
            <span className="text-gold-gradient block sm:inline font-serif italic">Pelayanan Sepenuh Hati</span> Bersama Sahabat Keluarga.
          </h1>

          {/* Subtitle with Clear Guarantees */}
          <p className="text-sm sm:text-base md:text-lg text-emerald-100/95 max-w-2xl mx-auto leading-relaxed font-normal drop-shadow">
            Biro Perjalanan Umrah & Haji Khusus Resmi Kemenag RI (PPIU No. 137/2020 & PIHK 2022). 
            Penerbangan langsung charter <strong className="text-white font-semibold">Lion Air & Saudia</strong> dari 11 kota, 
            akomodasi bintang 5 pelataran masjid, dan jaminan rasa aman biro pemegang <strong className="text-[#FAF8F5]">Guinness World Records</strong>.
          </p>

          {/* Fast Conversion Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <Link
              href="/paket-umroh"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#B8934A] hover:brightness-105 text-[#04261E] font-extrabold text-sm shadow-xl transition-all active:scale-[0.98]"
            >
              <span>Pilih Jadwal 11 Kota Embarkasi</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://wa.me/6285607179735?text=Assalamu%27alaikum%20Samira%20Travel,%20saya%20ingin%20konsultasi%20paket%20umrah"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-[#C5A059]/30 text-white font-semibold text-sm backdrop-blur-md transition-all active:scale-[0.98]"
            >
              <span>Konsultasi Hotline: 0856-0717-9735</span>
            </a>
          </div>

          {/* Trust Guarantee Micro-Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 pt-2 text-xs sm:text-sm text-emerald-100/90 font-medium">
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
              Pasti Terbang (Chartered Aircraft)
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
              Hotel Ring 1 Pelataran Masjid
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
              Bimbingan Manasik Sesuai Sunnah
            </span>
          </div>
        </div>

        {/* Flight Deck Search Widget */}
        <div className="mt-10 md:mt-14">
          <FlightDeckSearch />
        </div>
      </div>
    </section>
  );
}
