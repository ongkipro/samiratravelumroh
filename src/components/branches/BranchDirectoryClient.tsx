"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { BranchOffice } from "@/types";
import { MapPin, Phone, ArrowRight, Search, Building2 } from "lucide-react";

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

export function BranchDirectoryClient({ branches }: BranchDirectoryClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<string>("Semua Wilayah");

  const filteredBranches = useMemo(() => {
    return branches.filter((b) => {
      const matchesSearch =
        searchQuery.trim() === "" ||
        b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.province.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.address.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesRegion =
        selectedRegion === "Semua Wilayah" ||
        b.region.toLowerCase() === selectedRegion.toLowerCase();

      return matchesSearch && matchesRegion;
    });
  }, [branches, searchQuery, selectedRegion]);

  return (
    <div className="space-y-8">
      {/* Search & Region Filters */}
      <div className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-6 border border-[#E8E3DA] shadow-sm space-y-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari cabang berdasarkan kota, provinsi, atau nama jalan (contoh: Medan, Surabaya, Riau, dll)..."
            className="w-full h-12 pl-11 pr-4 rounded-xl bg-[#FAF8F5] border border-[#E8E3DA] text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#084234] focus:border-transparent transition-all"
          />
        </div>

        {/* Region Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          {REGIONS.map((region) => (
            <button
              key={region}
              type="button"
              onClick={() => setSelectedRegion(region)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedRegion === region
                  ? "bg-[#084234] text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {region}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-slate-500 font-medium px-1">
        <span>Menampilkan {filteredBranches.length} kantor cabang terverifikasi</span>
      </div>

      {/* Branch Cards Grid */}
      {filteredBranches.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBranches.map((branch) => {
            return (
              <div
                key={branch.id}
                className="bg-white rounded-2xl md:rounded-3xl p-6 border border-[#E8E3DA] hover:border-[#084234]/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-[#084234] uppercase tracking-wider">
                      {branch.province}
                    </span>
                    {branch.isHeadOffice ? (
                      <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-amber-100 text-amber-900 border border-amber-200">
                        Kantor Pusat
                      </span>
                    ) : (
                      <span className="text-[10px] text-slate-400 font-medium">
                        {branch.region}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-[#0F172A] mb-2 leading-snug">
                    {branch.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {branch.address}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>{branch.phone}</span>
                  </div>

                  <div className="pt-1">
                    <Link
                      href={`/kantor-cabang/${branch.slug}`}
                      className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-[#084234] hover:bg-[#04261E] text-white text-xs font-bold transition-colors shadow-sm"
                    >
                      <span>Detail Alamat & Peta Lokasi</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white rounded-2xl p-12 text-center border border-[#E8E3DA] space-y-3">
          <Building2 className="w-8 h-8 text-slate-300 mx-auto" />
          <h3 className="text-base font-bold text-slate-700">Tidak ada kantor cabang yang cocok</h3>
          <p className="text-xs text-slate-500">Silakan coba kata kunci kota lain atau hubungi Hotline Pusat kami di 0856-0717-9735.</p>
        </div>
      )}
    </div>
  );
}
