"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { BranchOffice } from "@/types";
import { 
  MapPin, 
  Phone, 
  ArrowRight, 
  Search, 
  Building2, 
  MessageCircle, 
  Navigation, 
  X,
  Clock,
  CheckCircle2,
  SlidersHorizontal
} from "lucide-react";

interface BranchDirectoryClientProps {
  branches: BranchOffice[];
}

const REGIONS = [
  "Semua Wilayah",
  "Sumatera",
  "Jawa & DIY",
  "Bali & Nusa Tenggara",
  "Kalimantan",
  "Sulawesi",
] as const;

const POPULAR_CITIES = [
  "Jakarta",
  "Medan",
  "Surabaya",
  "Bandung",
  "Yogyakarta",
  "Makassar",
  "Palembang",
  "Banjarmasin",
  "Pekanbaru",
];

export function BranchDirectoryClient({ branches }: BranchDirectoryClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<string>("Semua Wilayah");

  // Calculate branch counts per region dynamically
  const regionCounts = useMemo(() => {
    const counts: Record<string, number> = {
      "Semua Wilayah": branches.length,
    };
    branches.forEach((b) => {
      counts[b.region] = (counts[b.region] || 0) + 1;
    });
    return counts;
  }, [branches]);

  const filteredBranches = useMemo(() => {
    return branches.filter((b) => {
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === "" ||
        b.name.toLowerCase().includes(query) ||
        b.city.toLowerCase().includes(query) ||
        b.province.toLowerCase().includes(query) ||
        b.address.toLowerCase().includes(query) ||
        b.region.toLowerCase().includes(query);

      const matchesRegion =
        selectedRegion === "Semua Wilayah" ||
        b.region.toLowerCase() === selectedRegion.toLowerCase();

      return matchesSearch && matchesRegion;
    });
  }, [branches, searchQuery, selectedRegion]);

  return (
    <div className="space-y-8">
      {/* Search & Region Control Island */}
      <div className="bg-white rounded-3xl p-5 sm:p-7 border border-[#E8E3DA] shadow-lg shadow-black/5 space-y-5">
        {/* Search Bar with Clear Button */}
        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-slate-400 pointer-events-none">
            <Search className="w-4 h-4 text-[#084234]" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari kantor cabang berdasarkan nama kota, provinsi, atau jalan (contoh: Medan, Surabaya, Bandung, dll)..."
            className="w-full h-13 pl-11 pr-11 rounded-2xl bg-[#FAF8F5] border border-[#E8E3DA] text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#084234] focus:border-transparent transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-slate-200 text-slate-500 transition-colors"
              title="Hapus pencarian"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Region Filter Tabs with Dynamic Counts */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider px-1">
            <span className="flex items-center gap-1.5">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#C5A059]" />
              Filter Wilayah Pulau
            </span>
            <span className="text-slate-400 font-normal normal-case">
              {filteredBranches.length} cabang ditemukan
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 pt-1">
            {REGIONS.map((region) => {
              const count = regionCounts[region] || 0;
              const isSelected = selectedRegion === region;
              return (
                <button
                  key={region}
                  type="button"
                  onClick={() => setSelectedRegion(region)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#084234] text-white shadow-sm ring-2 ring-[#084234]/20"
                      : "bg-[#FAF8F5] hover:bg-slate-100 text-slate-700 border border-[#E8E3DA]"
                  }`}
                >
                  <span>{region}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-md font-semibold ${
                    isSelected
                      ? "bg-emerald-800 text-emerald-100"
                      : "bg-slate-200/70 text-slate-600"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Quick City Suggestion Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1 text-xs text-slate-500">
          <span className="text-[11px] font-semibold text-slate-400 mr-1">Kota Populer:</span>
          {POPULAR_CITIES.map((city) => (
            <button
              key={city}
              type="button"
              onClick={() => setSearchQuery(city)}
              className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-[#FAF8F5] hover:border-[#C5A059]/60 border border-transparent text-[11px] font-medium text-slate-600 hover:text-[#084234] transition-all"
            >
              {city}
            </button>
          ))}
        </div>
      </div>

      {/* Results Header Info */}
      <div className="flex items-center justify-between text-xs text-slate-600 font-medium px-2">
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4 text-[#084234]" />
          <span>
            Menampilkan <strong className="text-slate-900 font-bold">{filteredBranches.length}</strong> kantor cabang resmi Samira Travel
          </span>
        </div>
        {(searchQuery || selectedRegion !== "Semua Wilayah") && (
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedRegion("Semua Wilayah");
            }}
            className="text-[11px] font-bold text-[#084234] hover:underline"
          >
            Reset Semua Filter
          </button>
        )}
      </div>

      {/* Branch Cards Grid */}
      {filteredBranches.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBranches.map((branch) => {
            const waGreeting = encodeURIComponent(
              `Assalamu'alaikum Samira Travel ${branch.name}, saya ingin berkonsultasi mengenai pendaftaran dan jadwal paket umrah.`
            );
            const waLink = `https://wa.me/${branch.whatsapp}?text=${waGreeting}`;

            return (
              <div
                key={branch.id}
                className="group bg-white rounded-3xl p-6 border border-[#E8E3DA] hover:border-[#C5A059]/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Card Header: Region & Head Office Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#084234] uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                      <MapPin className="w-3 h-3 text-[#C5A059]" />
                      <span>{branch.province}</span>
                    </span>

                    {branch.isHeadOffice ? (
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300 uppercase tracking-wide">
                        Kantor Pusat
                      </span>
                    ) : (
                      <span className="text-[11px] text-slate-400 font-medium">
                        {branch.region}
                      </span>
                    )}
                  </div>

                  {/* Branch Name */}
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0F172A] leading-snug group-hover:text-[#084234] transition-colors">
                      {branch.name}
                    </h3>
                    <div className="text-xs font-semibold text-slate-500 mt-0.5">
                      Kota {branch.city}
                    </div>
                  </div>

                  {/* Physical Address */}
                  <p className="text-xs text-slate-600 leading-relaxed min-h-[3.2rem]">
                    {branch.address}
                  </p>

                  {/* Operating Hours & Contact meta */}
                  <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                      <span className="font-semibold text-slate-800">{branch.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 text-[11px]">
                      <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>Senin – Sabtu (08.30 – 17.00 WIB)</span>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-5 border-t border-slate-100 space-y-2 mt-4">
                  {/* Primary Link to Detail */}
                  <Link
                    href={`/kantor-cabang/${branch.slug}`}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#084234] hover:bg-[#04261E] text-white text-xs font-bold transition-all shadow-sm active:scale-98"
                  >
                    <span>Detail Alamat & Layanan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  {/* Secondary Two-Column Actions: WhatsApp & Google Maps */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-semibold transition-colors"
                      title="Hubungi WhatsApp Kantor Cabang"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Chat WA</span>
                    </a>

                    <a
                      href={branch.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
                      title="Petunjuk Arah Google Maps"
                    >
                      <Navigation className="w-3.5 h-3.5 text-[#084234]" />
                      <span>Peta Maps</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-3xl p-12 text-center border border-[#E8E3DA] space-y-4 max-w-md mx-auto shadow-sm">
          <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
            <Building2 className="w-7 h-7" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-bold text-slate-800">
              Tidak Ada Kantor Cabang yang Cocok
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Tidak ditemukan kantor cabang untuk kata kunci &ldquo;{searchQuery}&rdquo;. Silakan gunakan kata kunci kota lain atau hubungi Hotline Pusat.
            </p>
          </div>
          <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedRegion("Semua Wilayah");
              }}
              className="px-4 py-2 rounded-xl bg-[#084234] text-white text-xs font-bold transition-all shadow-xs"
            >
              Tampilkan Semua 26 Cabang
            </button>
            <a
              href="https://wa.me/6285607179735?text=Assalamu'alaikum%20Samira%20Travel,%20saya%20ingin%20tanya%20kantor%20cabang%20terdekat."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-all inline-flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>Hotline Pusat</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
