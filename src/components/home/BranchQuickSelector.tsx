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
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F172A]">
              Kunjungi 26 Kantor Cabang Fisik Resmi
            </h2>
            <p className="text-sm text-slate-600">
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

        {/* Branch Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredBranches.slice(0, 6).map((branch) => {
            return (
              <div
                key={branch.id}
                className="bg-[#FAF8F5] rounded-2xl p-5 border border-[#E8E3DA] hover:border-[#084234]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-[#084234] uppercase tracking-wider">
                      {branch.province}
                    </span>
                    {branch.isHeadOffice && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-amber-100 text-amber-900 border border-amber-200">
                        Kantor Pusat
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-bold text-[#0F172A] mb-1.5 leading-snug">
                    {branch.name}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
                    {branch.address}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    <span>{branch.phone}</span>
                  </div>

                  <Link
                    href={`/kantor-cabang/${branch.slug}`}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#084234] hover:bg-[#04261E] text-white text-xs font-bold transition-colors"
                  >
                    <span>Info Cabang</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
