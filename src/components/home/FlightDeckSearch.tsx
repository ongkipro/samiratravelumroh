"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin, Clock, Compass, Calendar, Search, ChevronDown } from "lucide-react";

interface CityOption {
  name: string;
  slug: string;
  duration: number;
  price: string;
}

const CITIES: CityOption[] = [
  { name: "Surabaya (SUB)", slug: "surabaya", duration: 12, price: "Rp 38 Jt" },
  { name: "Jakarta (CGK)", slug: "jakarta", duration: 9, price: "Rp 36 Jt" },
  { name: "Medan (KNO)", slug: "medan", duration: 12, price: "Rp 36 Jt" },
  { name: "Makassar (UPG)", slug: "makassar", duration: 12, price: "Rp 35 Jt" },
  { name: "Palembang (PLM)", slug: "palembang", duration: 9, price: "Rp 38 Jt" },
  { name: "Padang (PDG)", slug: "padang", duration: 13, price: "Rp 36 Jt" },
  { name: "Pontianak (PNK)", slug: "pontianak", duration: 13, price: "Rp 39 Jt" },
  { name: "Banda Aceh (BTJ)", slug: "aceh", duration: 13, price: "Rp 35 Jt" },
  { name: "Denpasar (DPS)", slug: "denpasar", duration: 12, price: "Rp 35 Jt" },
  { name: "Batam (BTH)", slug: "batam", duration: 13, price: "Rp 39 Jt" },
  { name: "Pekanbaru (PKU)", slug: "pekanbaru", duration: 13, price: "Rp 35 Jt" },
];

const DURATIONS = [
  { label: "12 Hari (Hemat)", val: "12" },
  { label: "9 Hari (Reguler)", val: "9" },
  { label: "13 Hari (Eksekutif)", val: "13" },
  { label: "Semua Durasi", val: "all" },
];

const PACKAGE_TYPES = [
  { id: "reguler", label: "Umroh Reguler", path: "/paket-umroh" },
  { id: "plus", label: "Umroh Plus (Thaif/Turki/Al-Ula)", path: "/umroh-plus" },
  { id: "furoda", label: "Haji Khusus Furoda", path: "/haji-khusus-furoda" },
];

const PERIODS = [
  "Musim Baru 1448 H (Juli - Ags)",
  "September - Oktober 2026",
  "Akhir Tahun (Desember 2026)",
  "Ramadhan 1448 H",
];

export function FlightDeckSearch() {
  const router = useRouter();
  const [selectedCity, setSelectedCity] = useState("surabaya");
  const [selectedDuration, setSelectedDuration] = useState("12");
  const [selectedType, setSelectedType] = useState("/paket-umroh");
  const [selectedPeriod, setSelectedPeriod] = useState(PERIODS[0]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedType === "/paket-umroh") {
      router.push(`/paket-umroh/${selectedCity}`);
    } else {
      router.push(selectedType);
    }
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 bg-white/75 sm:bg-white/80 backdrop-blur-2xl border border-white/90 shadow-[0_12px_36px_-6px_rgba(15,23,42,0.08)] ring-1 ring-black/[0.04] transition-all duration-300 hover:shadow-[0_20px_50px_-12px_rgba(197,160,89,0.18)] hover:border-[#C5A059]/40">
      {/* Subtle top edge golden light catch */}
      <div className="absolute inset-x-8 -top-px h-px bg-gradient-to-r from-transparent via-[#C5A059]/45 to-transparent pointer-events-none" />

      {/* Header Info matching reference */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 sm:pb-4 text-left">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
          <h3 className="font-playfair text-base sm:text-lg font-bold text-[#0F172A] tracking-tight">
            Rencanakan Ibadah Anda
          </h3>
        </div>
        <span className="text-xs text-slate-500 font-medium">
          Jadwal pasti terbang / Proses cepat &amp; aman
        </span>
      </div>

      <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-2.5 sm:gap-3 items-stretch">
        {/* 1. Kota Asal */}
        <div className="lg:col-span-3 relative group bg-white/60 hover:bg-white/90 focus-within:bg-white border border-slate-200/80 hover:border-[#084234]/40 focus-within:border-[#084234] focus-within:ring-2 focus-within:ring-[#084234]/15 rounded-xl p-2 sm:p-2.5 transition-all shadow-2xs backdrop-blur-sm text-left">
          <label htmlFor="search-city" className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">
            Kota Asal
          </label>
          <div className="flex items-center gap-2 relative">
            <MapPin className="w-3.5 h-3.5 text-[#084234] shrink-0" />
            <select
              id="search-city"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full bg-transparent text-xs sm:text-sm font-semibold text-[#0F172A] focus:outline-none cursor-pointer pr-5 appearance-none truncate"
            >
              {CITIES.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name} - Mulai {c.price}
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0 pointer-events-none absolute right-0" />
          </div>
        </div>

        {/* 2. Durasi */}
        <div className="lg:col-span-2 relative group bg-white/60 hover:bg-white/90 focus-within:bg-white border border-slate-200/80 hover:border-[#084234]/40 focus-within:border-[#084234] focus-within:ring-2 focus-within:ring-[#084234]/15 rounded-xl p-2 sm:p-2.5 transition-all shadow-2xs backdrop-blur-sm text-left">
          <label htmlFor="search-duration" className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">
            Durasi
          </label>
          <div className="flex items-center gap-2 relative">
            <Clock className="w-3.5 h-3.5 text-[#084234] shrink-0" />
            <select
              id="search-duration"
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(e.target.value)}
              className="w-full bg-transparent text-xs sm:text-sm font-semibold text-[#0F172A] focus:outline-none cursor-pointer pr-5 appearance-none truncate"
            >
              {DURATIONS.map((d) => (
                <option key={d.val} value={d.val}>
                  {d.label}
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0 pointer-events-none absolute right-0" />
          </div>
        </div>

        {/* 3. Kategori Paket */}
        <div className="lg:col-span-3 relative group bg-white/60 hover:bg-white/90 focus-within:bg-white border border-slate-200/80 hover:border-[#084234]/40 focus-within:border-[#084234] focus-within:ring-2 focus-within:ring-[#084234]/15 rounded-xl p-2 sm:p-2.5 transition-all shadow-2xs backdrop-blur-sm text-left">
          <label htmlFor="search-type" className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">
            Kategori Paket
          </label>
          <div className="flex items-center gap-2 relative">
            <Compass className="w-3.5 h-3.5 text-[#084234] shrink-0" />
            <select
              id="search-type"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full bg-transparent text-xs sm:text-sm font-semibold text-[#0F172A] focus:outline-none cursor-pointer pr-5 appearance-none truncate"
            >
              {PACKAGE_TYPES.map((t) => (
                <option key={t.id} value={t.path}>
                  {t.label}
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0 pointer-events-none absolute right-0" />
          </div>
        </div>

        {/* 4. Periode */}
        <div className="lg:col-span-2 relative group bg-white/60 hover:bg-white/90 focus-within:bg-white border border-slate-200/80 hover:border-[#084234]/40 focus-within:border-[#084234] focus-within:ring-2 focus-within:ring-[#084234]/15 rounded-xl p-2 sm:p-2.5 transition-all shadow-2xs backdrop-blur-sm text-left">
          <label htmlFor="search-period" className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">
            Periode
          </label>
          <div className="flex items-center gap-2 relative">
            <Calendar className="w-3.5 h-3.5 text-[#084234] shrink-0" />
            <select
              id="search-period"
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="w-full bg-transparent text-xs sm:text-sm font-semibold text-[#0F172A] focus:outline-none cursor-pointer pr-5 appearance-none truncate"
            >
              {PERIODS.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0 pointer-events-none absolute right-0" />
          </div>
        </div>

        {/* 5. Cari Paket CTA Button */}
        <div className="lg:col-span-2 flex items-stretch">
          <button
            type="submit"
            className="w-full min-h-[48px] sm:min-h-[50px] rounded-xl bg-gradient-to-r from-[#084234] via-[#0B5241] to-[#084234] hover:from-[#063328] hover:via-[#084234] hover:to-[#063328] text-white font-bold text-xs sm:text-sm shadow-md shadow-[#084234]/25 hover:shadow-lg hover:shadow-[#084234]/35 transition-all active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer border border-[#C5A059]/30 group"
          >
            <Search className="w-4 h-4 text-[#C5A059] group-hover:scale-110 transition-transform" />
            <span>Cari Paket</span>
          </button>
        </div>
      </form>
    </div>
  );
}
