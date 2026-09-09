"use client";

import React, { useState } from "react";
import Link from "next/link";
import { formatIDR } from "@/lib/formatters";
import { Calculator, CheckCircle2, ArrowRight } from "lucide-react";

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
    <section className="py-14 md:py-20 border-y border-[#E8E3DA] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Sharia Value Proposition */}
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#9B7832] uppercase block">
              Kemitraan Pembiayaan Syariah Resmi
            </span>

            <h2 className="font-playfair text-xl sm:text-2xl md:text-3xl font-bold text-[#0F172A] leading-tight">
              Umroh Dulu, Bayar Belakangan. <br className="hidden sm:inline" />
              <span className="font-serif italic text-[#084234]">Ibadah Lebih Awal Tanpa Menunggu.</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Wujudkan impian menginjakkan kaki di Baitullah bersama keluarga sekarang. Fasilitas pembiayaan syariah murni dengan akad Murabahah terdaftar OJK & diawasi DSN MUI, tanpa sita jaminan aset.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs md:text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#084234] shrink-0" />
                <span>Tanpa Agunan BPKB / Sertifikat</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#084234] shrink-0" />
                <span>Akad Murabahah Diawasi DSN MUI</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#084234] shrink-0" />
                <span>Verifikasi Cepat 3–5 Hari Kerja</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#084234] shrink-0" />
                <span>Jadwal Keberangkatan Terjamin</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/pembiayaan-syariah"
                className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-[#084234] hover:underline"
              >
                <span>Pelajari Syarat Dokumen & Ketentuan Akad Lengkap</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Simulator (Clean Slate, No Nested Boxes) */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E3DA] shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#E8E3DA]">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-[#084234]" />
                <span className="font-bold text-sm sm:text-base text-[#0F172A]">Simulasi Angsuran Syariah</span>
              </div>
              <span className="text-xs text-slate-400 font-mono">Acuan Paket 12 Hari</span>
            </div>

            {/* Slider Pilihan DP */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-700">Pilihan Uang Muka (DP)</span>
                <span className="text-sm font-bold text-[#084234] tabular-nums" suppressHydrationWarning>
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
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#084234]"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                <span>Rp 5.000.000</span>
                <span>Rp 10.000.000</span>
                <span>Rp 15.000.000</span>
              </div>
            </div>

            {/* Pilihan Tenor */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-700 block">Jangka Waktu Pembiayaan (Tenor)</span>
              <div className="grid grid-cols-3 gap-2">
                {[12, 24, 36].map((months) => (
                  <button
                    key={months}
                    type="button"
                    onClick={() => setTenorMonths(months)}
                    className={`py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                      tenorMonths === months
                        ? "bg-[#084234] text-white border-[#084234] shadow-sm"
                        : "bg-[#FAF8F5] text-slate-700 border-[#E8E3DA] hover:bg-white"
                    }`}
                  >
                    {months} Bulan ({months / 12} Thn)
                  </button>
                ))}
              </div>
            </div>

            {/* Live Calculation Output Strip */}
            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E3DA] flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Estimasi Angsuran Bulanan
                </span>
                <div className="text-lg sm:text-xl font-bold text-[#084234] tabular-nums tracking-tight" suppressHydrationWarning>
                  {formatIDR(monthlyInstallment)}
                  <span className="text-xs text-slate-500 font-normal"> /bln</span>
                </div>
              </div>

              <a
                href={`https://wa.me/6285607179735?text=Assalamu%27alaikum%20CS%20Samira,%20saya%20ingin%20konsultasi%20pembiayaan%20syariah%20DP%20${encodeURIComponent(formatIDR(dpAmount))}%20tenor%20${tenorMonths}%20bulan`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-all shadow-sm active:scale-[0.98]"
              >
                Ajukan Via CS
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
