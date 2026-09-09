"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin, Calendar, Search, Plane, ArrowRight } from "lucide-react";

interface CityOption {
  name: string;
  slug: string;
  duration: number;
  price: string;
}

const CITIES: CityOption[] = [
  { name: "Surabaya", slug: "surabaya", duration: 12, price: "Rp 38 Jt" },
  { name: "Jakarta", slug: "jakarta", duration: 9, price: "Rp 36 Jt" },
  { name: "Medan", slug: "medan", duration: 12, price: "Rp 36 Jt" },
  { name: "Makassar", slug: "makassar", duration: 12, price: "Rp 35 Jt" },
  { name: "Palembang", slug: "palembang", duration: 9, price: "Rp 38 Jt" },
  { name: "Padang", slug: "padang", duration: 13, price: "Rp 36 Jt" },
  { name: "Pontianak", slug: "pontianak", duration: 13, price: "Rp 39 Jt" },
  { name: "Aceh (Banda Aceh)", slug: "aceh", duration: 13, price: "Rp 35 Jt" },
  { name: "Denpasar (Bali)", slug: "denpasar", duration: 12, price: "Rp 35 Jt" },
  { name: "Batam", slug: "batam", duration: 13, price: "Rp 39 Jt" },
  { name: "Pekanbaru", slug: "pekanbaru", duration: 13, price: "Rp 35 Jt" },
];

const MONTHS = [
  "Juli 2026 (Musim Baru)",
  "Agustus 2026",
  "September 2026",
  "Oktober 2026",
  "November 2026",
  "Desember 2026 (Akhir Tahun)",
  "Ramadhan 1448 H",
];

export function FlightDeckSearch() {
  const router = useRouter();
  const [selectedCity, setSelectedCity] = useState("surabaya");
  const [selectedMonth, setSelectedMonth] = useState(MONTHS[0]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/paket-umroh/${selectedCity}`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl md:rounded-3xl p-5 md:p-7 shadow-2xl border border-[#C5A059]/40">
      <div className="flex items-center justify-between gap-2 pb-3.5 mb-4 border-b border-[#E8E3DA] text-xs font-semibold text-[#084234]">
        <div className="flex items-center gap-2">
          <Plane className="w-4 h-4 text-[#C5A059]" />
          <span className="font-bold tracking-wide">Flight Deck: Pencarian Jadwal Tiket Charter Lion Air A330 & Saudia</span>
        </div>
        <span className="hidden sm:inline-block text-[11px] font-bold text-[#084234] tracking-wider uppercase">
          11 Embarkasi Langsung
        </span>
      </div>

      <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-12 gap-3.5 md:gap-4 items-end">
        {/* Kota Asal */}
        <div className="md:col-span-5 flex flex-col gap-1.5">
          <label htmlFor="origin-city-select" className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
            Kota Asal Keberangkatan
          </label>
          <div className="relative">
            <select
              id="origin-city-select"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full h-12 pl-3.5 pr-8 rounded-xl bg-[#FAF8F5] border border-[#E8E3DA] text-sm font-semibold text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:border-transparent transition-all cursor-pointer"
            >
              {CITIES.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name} ({c.duration} Hari — Mulai {c.price})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Periode Keberangkatan */}
        <div className="md:col-span-4 flex flex-col gap-1.5">
          <label htmlFor="departure-period-select" className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
            Periode Keberangkatan
          </label>
          <div className="relative">
            <select
              id="departure-period-select"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="w-full h-12 pl-3.5 pr-8 rounded-xl bg-[#FAF8F5] border border-[#E8E3DA] text-sm font-semibold text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:border-transparent transition-all cursor-pointer"
            >
              {MONTHS.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Action Button */}
        <div className="md:col-span-3">
          <button
            type="submit"
            className="w-full h-12 rounded-xl bg-[#084234] hover:bg-[#04261E] text-white text-sm font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-[0.99] transition-all cursor-pointer border border-[#C5A059]/40"
          >
            <Search className="w-4 h-4 text-[#C5A059]" />
            <span>Cari Jadwal</span>
            <ArrowRight className="w-4 h-4 hidden lg:inline-block text-[#C5A059]" />
          </button>
        </div>
      </form>

      {/* Quick City Pills */}
      <div className="mt-4 pt-3.5 border-t border-[#E8E3DA] flex items-center gap-2 overflow-x-auto no-scrollbar text-xs">
        <span className="text-slate-400 shrink-0 font-medium">Embarkasi Favorit:</span>
        {[
          { slug: "surabaya", code: "SUB" },
          { slug: "jakarta", code: "CGK" },
          { slug: "makassar", code: "UPG" },
          { slug: "medan", code: "KNO" }
        ].map(({ slug, code }) => {
          const cityObj = CITIES.find((c) => c.slug === slug);
          if (!cityObj) return null;
          return (
            <button
              key={slug}
              type="button"
              onClick={() => {
                setSelectedCity(slug);
                router.push(`/paket-umroh/${slug}`);
              }}
              className="shrink-0 px-3 py-1.5 rounded-lg bg-[#FAF8F5] hover:bg-[#084234] hover:text-white border border-[#E8E3DA] font-semibold text-slate-700 transition-all flex items-center gap-1.5"
            >
              <span>{cityObj.name}</span>
              <span className="text-[10px] opacity-60 font-mono">({code})</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
