"use client";

import React from "react";
import { Check } from "lucide-react";

interface PackageFacilitySectionProps {
  inclusions: string[];
  exclusions: string[];
  tourTitle?: string;
  airline?: string;
  isDirectFlight?: boolean;
}

export function PackageFacilitySection({
  inclusions,
  exclusions,
}: PackageFacilitySectionProps) {
  return (
    <section
      id="fasilitas-layanan"
      aria-label="Fasilitas & Layanan Paket"
      className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 border border-[#E8E3DA] shadow-xs space-y-6"
    >
      {/* Header */}
      <div className="border-b border-[#E8E3DA] pb-4">
        <h2 className="font-playfair text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
          Fasilitas & Layanan Paket
        </h2>
      </div>

      {/* 2 Balanced Columns: Sudah Termasuk & Belum Termasuk */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        {/* Left (7 Cols): Biaya Sudah Termasuk */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center gap-2 pb-1">
            <span className="w-2 h-2 rounded-full bg-[#084234]" />
            <h3 className="text-xs sm:text-sm font-bold text-[#084234] uppercase tracking-wider">
              Biaya Sudah Termasuk
            </h3>
          </div>

          <ul className="divide-y divide-slate-100 border-t border-slate-100">
            {inclusions.map((item, idx) => (
              <li key={idx} className="py-2.5 sm:py-3 flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span className="text-xs sm:text-sm text-[#0F172A] leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right (5 Cols): Biaya Belum Termasuk */}
        <div className="lg:col-span-5 space-y-4 lg:border-l lg:border-[#E8E3DA] lg:pl-8">
          <div className="flex items-center gap-2 pb-1">
            <span className="w-2 h-2 rounded-full bg-slate-400" />
            <h3 className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wider">
              Biaya Belum Termasuk
            </h3>
          </div>

          <ul className="divide-y divide-slate-100 border-t border-slate-100">
            {exclusions.map((item, idx) => (
              <li key={idx} className="py-2.5 sm:py-3 flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                  –
                </span>
                <span className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
