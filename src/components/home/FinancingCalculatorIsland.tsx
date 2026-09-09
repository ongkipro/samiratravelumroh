"use client";

import React, { useState } from "react";
import Link from "next/link";
import { formatIDR } from "@/lib/formatters";
import { Calculator, ShieldCheck, CheckCircle2, ArrowRight, Info } from "lucide-react";

export function FinancingCalculatorIsland() {
  const [dpAmount, setDpAmount] = useState<number>(6000000);
  const [tenorMonths, setTenorMonths] = useState<number>(24);
  const packagePrice = 38000000; // Standar Paket Reguler 12 Hari

  // Sharia flat margin calculation (~8.5% per annum)
  const principal = packagePrice - dpAmount;
  const annualRate = 0.085;
  const totalMargin = principal * (annualRate * (tenorMonths / 12));
  const totalPayable = principal + totalMargin;
  const monthlyInstallment = Math.round(totalPayable / tenorMonths);

  return (
    <section className="py-14 md:py-20 bg-gradient-to-b from-[#FAF8F5] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#04261E] text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden border border-[#084234]/80">
          {/* Subtle gold decoration circle */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#C5A059]/10 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Column: Sharia Value Proposition */}
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-semibold tracking-[0.2em] text-[#C5A059] uppercase block">
                Kemitraan Pembiayaan Syariah
              </span>

              <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-[#FAF8F5] leading-tight">
                Umroh Dulu, Bayar Belakangan. <br className="hidden sm:inline" />
                <span className="text-gold-gradient font-serif italic">Ibadah Lebih Awal Tanpa Menunggu.</span>
              </h2>

              <p className="text-sm md:text-base text-emerald-100/90 leading-relaxed">
                Wujudkan impian menginjakkan kaki di Baitullah bersama keluarga sekarang. Fasilitas pembiayaan syariah murni dengan akad Murabahah terdaftar OJK & diawasi DSN MUI, tanpa sita jaminan aset.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs md:text-sm text-emerald-100/90">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>Tanpa Agunan Sertifikat/BPKB</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>Akad Syariah Diawasi DSN MUI</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>Verifikasi Cepat 3–5 Hari Kerja</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>Jadwal Keberangkatan Terjamin</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Simulator Island */}
            <div className="lg:col-span-6 bg-white text-[#0F172A] rounded-3xl p-6 md:p-8 shadow-2xl border border-[#C5A059]/40">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-[#084234]" />
                  <span className="font-bold text-sm md:text-base text-[#0F172A]">Simulasi Angsuran Syariah</span>
                </div>
                <span className="text-xs text-slate-400 font-medium">Est. Paket 12 Hari</span>
              </div>

              {/* Slider Pilihan DP */}
              <div className="mt-5 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-700">Pilihan Uang Muka (DP)</span>
                  <span className="text-sm font-extrabold text-[#084234] tabular-nums">
                    {formatIDR(dpAmount)}
                  </span>
                </div>
                <input
                  type="range"
                  min={5000000}
                  max={15000000}
                  step={500000}
                  value={dpAmount}
                  onChange={(e) => setDpAmount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#084234]"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                  <span>Rp 5.000.000</span>
                  <span>Rp 10.000.000</span>
                  <span>Rp 15.000.000</span>
                </div>
              </div>

              {/* Pilihan Tenor */}
              <div className="mt-6 space-y-2">
                <span className="text-xs font-bold text-slate-700 block">Jangka Waktu Pembiayaan (Tenor)</span>
                <div className="grid grid-cols-3 gap-2">
                  {[12, 24, 36].map((tenor) => (
                    <button
                      key={tenor}
                      type="button"
                      onClick={() => setTenorMonths(tenor)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        tenorMonths === tenor
                          ? "bg-[#084234] text-white shadow-sm ring-2 ring-[#084234]/30"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {tenor} Bulan
                    </button>
                  ))}
                </div>
              </div>

              {/* Result Box */}
              <div className="mt-6 p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8E3DA]/80 text-center space-y-1">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  Estimasi Angsuran Bulanan
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#084234] tabular-nums tracking-tight">
                  {formatIDR(monthlyInstallment)}
                  <span className="text-xs font-semibold text-slate-500 font-sans"> /bulan</span>
                </div>
                <div className="flex items-center justify-center gap-1 text-[11px] text-slate-400">
                  <Info className="w-3 h-3 text-slate-400" />
                  <span>Akad Murabahah • Disesuaikan hasil verifikasi SLIK OJK</span>
                </div>
              </div>

              <Link
                href="/pembiayaan-syariah"
                className="mt-5 w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#B8934A] hover:brightness-105 text-[#04261E] font-extrabold text-xs md:text-sm shadow-md hover:shadow-lg transition-all"
              >
                <span>Pelajari Syarat & Alur Pengajuan Pembiayaan</span>
                <ArrowRight className="w-4 h-4 text-[#04261E]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
