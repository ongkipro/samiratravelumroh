"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BranchOffice } from "@/types";
import { MapPin, Phone, ArrowRight } from "lucide-react";

interface BranchQuickSelectorProps {
  branches: BranchOffice[];
}

const REGIONS = [
  "Sumatera",
  "Jawa & DIY",
  "Bali & Nusa Tenggara",
  "Kalimantan",
  "Sulawesi",
] as const;

export function BranchQuickSelector({ branches }: BranchQuickSelectorProps) {
  const [selectedRegion, setSelectedRegion] = useState<string>("Jawa & DIY");

  const filteredBranches = branches.filter(
    (b) => b.region.toLowerCase() === selectedRegion.toLowerCase()
  );

  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider block">
              Jaringan Layanan Tatap Muka
            </span>
            <h2 className="font-playfair text-xl sm:text-2xl md:text-3xl font-bold text-[#0F172A]">
              Kunjungi 26 Kantor Cabang Fisik Resmi
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Konsultasi langsung, penyerahan paspor, serta pengambilan koper perlengkapan umrah di kantor cabang terdekat di kota Anda.
            </p>
          </div>

          <Link
            href="/kantor-cabang"
            className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-[#084234] hover:underline shrink-0"
          >
            <span>Buka Direktori 26 Cabang</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Region Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-6">
          {REGIONS.map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedRegion === region
                  ? "bg-[#084234] text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Unboxed Linear Branch Directory (No Box Clutter) */}
        <div className="border-y border-[#E8E3DA] divide-y divide-[#E8E3DA]">
          {filteredBranches.slice(0, 6).map((branch) => {
            return (
              <div
                key={branch.id}
                className="py-4 sm:py-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[#FAF8F5]/60 transition-colors px-2"
              >
                <div className="min-w-0 flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-[#9B7832] uppercase tracking-wider">
                      {branch.province}
                    </span>
                    {branch.isHeadOffice && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-200">
                        Kantor Pusat
                      </span>
                    )}
                  </div>
                  <Link
                    href={`/kantor-cabang/${branch.slug}`}
                    className="font-bold text-base text-[#0F172A] hover:text-[#084234] transition-colors block"
                  >
                    {branch.name}
                  </Link>
                  <p className="text-xs text-slate-500 line-clamp-1">
                    {branch.address}
                  </p>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-4 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
                  <span className="text-xs text-slate-500 font-mono">
                    📞 {branch.phone}
                  </span>
                  <Link
                    href={`/kantor-cabang/${branch.slug}`}
                    className="px-3.5 py-1.5 rounded-lg bg-[#084234]/10 hover:bg-[#084234] hover:text-white text-[#084234] text-xs font-bold transition-all flex items-center gap-1"
                  >
                    <span>Kunjungi</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
