"use client";

import React from "react";
import Link from "next/link";
import { 
  Compass, 
  Home, 
  MessageCircle, 
  MapPin, 
  ChevronRight, 
  Sparkles,
  Award
} from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function NotFound() {
  const waUrl = getWhatsAppUrl({ intent: "general" });

  const quickLinks = [
    {
      title: "Paket Umroh 2026",
      desc: "Keberangkatan langsung 11 kota, hotel bintang 5 pelataran.",
      href: "/paket-umroh",
      badge: "Terpopuler",
    },
    {
      title: "Haji Khusus Furoda",
      desc: "Kuota resmi Kerajaan Arab Saudi, langsung berangkat musim ini.",
      href: "/haji-khusus-furoda",
      badge: "Langsung Berangkat",
    },
    {
      title: "26 Kantor Cabang",
      desc: "Layanan tatap muka & manasik di seluruh Indonesia.",
      href: "/kantor-cabang",
      badge: "Fisik",
    },
  ];

  return (
    <div className="relative min-h-[90vh] bg-gradient-to-b from-[#FAF8F5] via-[#F4EFE6] to-[#E9DFCF] overflow-hidden flex flex-col justify-between pt-16 sm:pt-20">
      {/* 1. SKY AMBIENCE & CELESTIAL ORNAMENTS */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Soft Desert Sun / Mirage Glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-[#C5A059]/15 via-[#E6CA65]/10 to-transparent rounded-full blur-3xl" />

        {/* Crescent Moon (Bulan Sabit Madinah) with Floating Animation */}
        <div className="absolute top-12 right-[12%] sm:right-[18%] opacity-80 animate-pulse duration-1000">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="drop-shadow-[0_0_12px_rgba(197,160,89,0.5)]">
            <path
              d="M34 8C23 10 16 18 16 28C16 38 24 44 32 44C20 43 11 34 11 25C11 15 20 9 34 8Z"
              fill="url(#moon-gradient)"
            />
            <defs>
              <linearGradient id="moon-gradient" x1="11" y1="8" x2="34" y2="44" gradientUnits="userSpaceOnUse">
                <stop stopColor="#E6CA65" />
                <stop offset="1" stopColor="#C5A059" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Shimmering Golden Stars / Desert Sand Particles */}
        <div className="absolute top-20 left-[15%] w-1.5 h-1.5 rounded-full bg-[#C5A059] opacity-70 animate-ping duration-1000" />
        <div className="absolute top-36 left-[28%] w-1 h-1 rounded-full bg-[#E6CA65] opacity-60 animate-pulse" />
        <div className="absolute top-16 right-[28%] w-2 h-2 rounded-full bg-[#C5A059]/40 blur-xs" />
        <div className="absolute top-28 right-[38%] w-1 h-1 rounded-full bg-[#C5A059] opacity-80 animate-ping duration-700" />
        <div className="absolute top-44 left-[40%] w-1 h-1 rounded-full bg-[#FAF8F5] opacity-90 animate-pulse" />

        {/* Geometric Islamic Octagram (Rub el Hizb) Floating Watermark */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04] animate-spin duration-3000">
          <svg width="480" height="480" viewBox="0 0 100 100" fill="none" stroke="#084234" strokeWidth="0.8">
            <rect x="25" y="25" width="50" height="50" transform="rotate(0 50 50)" />
            <rect x="25" y="25" width="50" height="50" transform="rotate(45 50 50)" />
            <circle cx="50" cy="50" r="32" />
            <circle cx="50" cy="50" r="16" strokeDasharray="1 2" />
          </svg>
        </div>
      </div>

      {/* 2. MAIN CONTENT STAGE */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-7 my-auto py-8">
        {/* Animated 404 Monogram with Golden Mirage */}
        <div className="relative inline-flex items-center justify-center">
          <h1 className="font-playfair text-8xl sm:text-9xl md:text-[11rem] font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#084234]/30 via-[#C5A059]/40 to-[#04261E]/10 select-none leading-none">
            404
          </h1>

          {/* Centered Astrolabe / Compass Badge */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-18 h-18 sm:w-22 sm:h-22 rounded-3xl bg-gradient-to-br from-white/95 via-[#FAF8F5] to-[#F4EFE6] border-2 border-[#C5A059]/60 flex items-center justify-center shadow-xl shadow-[#C5A059]/20 backdrop-blur-md group hover:scale-105 transition-transform">
              <div className="relative">
                <Compass className="w-9 h-9 sm:w-11 sm:h-11 text-[#084234] transition-transform duration-700 group-hover:rotate-45" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#C5A059] ring-2 ring-white animate-ping" />
              </div>
            </div>
          </div>
        </div>

        {/* Atmospheric Status Badge */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-[#C5A059]/40 text-[#084234] text-xs sm:text-sm font-semibold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
            <span>Hamparan Pasir yang Tenang • Arah Belum Ditemukan</span>
          </div>
        </div>

        {/* Poetic Copywriting */}
        <div className="space-y-3 max-w-xl mx-auto">
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight leading-snug">
            Langkah Anda Terhenti di Sahara Sejenak
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
            Halaman yang Anda tuju mungkin berpindah atau tautan telah kedaluwarsa. Namun dalam perjalanan menuju Baitullah, niat tulus senantiasa menemukan jalan kembali.
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#084234] via-[#0B5241] to-[#04261E] hover:from-[#04261E] hover:to-[#084234] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#084234]/25 hover:shadow-lg transition-all active:scale-[0.98] border border-[#C5A059]/50 group"
          >
            <Home className="w-4 h-4 text-[#E6CA65] group-hover:-translate-y-0.5 transition-transform" />
            <span>Kembali ke Beranda</span>
          </Link>

          <Link
            href="/paket-umroh"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/95 hover:bg-white text-[#084234] text-xs sm:text-sm font-bold border border-[#C5A059]/60 hover:border-[#C5A059] shadow-xs hover:shadow-md transition-all active:scale-[0.98]"
          >
            <Compass className="w-4 h-4 text-[#C5A059]" />
            <span>Pilih Paket Umroh</span>
          </Link>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#FAF8F5]/80 hover:bg-white text-slate-700 hover:text-[#084234] text-xs sm:text-sm font-medium border border-[#E8E3DA] hover:border-[#C5A059]/40 transition-all active:scale-[0.98]"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Tanya CS (WA)</span>
          </a>
        </div>

        {/* 3 Quick Direct Waypoints */}
        <div className="pt-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            {quickLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group p-3.5 rounded-2xl bg-white/80 hover:bg-white backdrop-blur-md border border-[#E8E3DA] hover:border-[#C5A059]/70 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-bold text-[#084234] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                    {item.badge}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#084234] group-hover:translate-x-1 transition-all" />
                </div>
                <div className="font-bold text-xs sm:text-sm text-[#0F172A] group-hover:text-[#084234] transition-colors">
                  {item.title}
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-2 leading-relaxed">
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 3. ANIMATED DESERT DUNES & CARAVAN SILHOUETTE */}
      <div className="relative w-full h-32 sm:h-44 md:h-52 select-none pointer-events-none mt-auto">
        {/* Distant Caravan Silhouette Walking Across the Dune */}
        <div className="absolute -top-4 right-10 sm:right-24 z-20 opacity-75">
          <svg width="120" height="28" viewBox="0 0 120 28" fill="none" className="text-[#084234]/70">
            {/* Camel 1 */}
            <path d="M15 18C16 14 18 10 21 11C23 12 23 15 25 15C27 15 28 12 30 14C31 16 30 18 31 22L30 26H28L28 22H24L24 26H22L23 20H18L18 26H16L15 18Z" fill="currentColor" />
            <circle cx="14" cy="11" r="2.5" fill="currentColor" />
            {/* Rope */}
            <line x1="31" y1="18" x2="45" y2="19" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />
            {/* Camel 2 */}
            <path d="M45 19C46 15 48 11 51 12C53 13 53 16 55 16C57 16 58 13 60 15C61 17 60 19 61 23L60 27H58L58 23H54L54 27H52L53 21H48L48 27H46L45 19Z" fill="currentColor" />
            <circle cx="44" cy="12" r="2.5" fill="currentColor" />
            {/* Rope */}
            <line x1="61" y1="19" x2="75" y2="20" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />
            {/* Camel 3 */}
            <path d="M75 20C76 16 78 12 81 13C83 14 83 17 85 17C87 17 88 14 90 16C91 18 90 20 91 24L90 28H88L88 24H84L84 28H82L83 22H78L78 28H76L75 20Z" fill="currentColor" />
            <circle cx="74" cy="13" r="2.5" fill="currentColor" />
          </svg>
        </div>

        {/* Dunes Layer 1: Back Gentle Dune (Distant Golden Mist) */}
        <svg
          viewBox="0 0 1440 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full h-full preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C320,10 640,110 960,40 C1200,-10 1360,70 1440,50 L1440,160 L0,160 Z"
            fill="url(#back-dune-gradient)"
          />
          <defs>
            <linearGradient id="back-dune-gradient" x1="0" y1="0" x2="0" y2="160" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E2D2B8" stopOpacity="0.6" />
              <stop offset="1" stopColor="#D5C1A3" stopOpacity="0.9" />
            </linearGradient>
          </defs>
        </svg>

        {/* Dunes Layer 2: Mid Sweeping Sand Crest with Golden Light */}
        <svg
          viewBox="0 0 1440 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 C240,30 520,120 840,50 C1120,-10 1320,80 1440,70 L1440,140 L0,140 Z"
            fill="url(#mid-dune-gradient)"
          />
          <defs>
            <linearGradient id="mid-dune-gradient" x1="720" y1="0" x2="720" y2="140" gradientUnits="userSpaceOnUse">
              <stop stopColor="#CDB795" />
              <stop offset="1" stopColor="#BCA27C" />
            </linearGradient>
          </defs>
        </svg>

        {/* Dunes Layer 3: Foreground Sharp Dune Crest with Warm Deep Amber Edge */}
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,45 C380,95 720,10 1100,60 C1280,85 1380,40 1440,35 L1440,100 L0,100 Z"
            fill="url(#fore-dune-gradient)"
          />
          {/* Golden Rim Highlight on the Edge */}
          <path
            d="M0,45 C380,95 720,10 1100,60 C1280,85 1380,40 1440,35"
            stroke="#E6CA65"
            strokeWidth="1.5"
            strokeOpacity="0.6"
          />
          <defs>
            <linearGradient id="fore-dune-gradient" x1="720" y1="0" x2="720" y2="100" gradientUnits="userSpaceOnUse">
              <stop stopColor="#B39973" />
              <stop offset="1" stopColor="#084234" stopOpacity="0.95" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
