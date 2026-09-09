"use client";

import React, { useState } from "react";
import {
  FileCheck2,
  Plane,
  Hotel,
  Tent,
  Bus,
  Users2,
  BookOpenCheck,
  ShieldCheck,
  Luggage,
  Check,
  Building2,
  Copy,
  AlertTriangle,
} from "lucide-react";

export function HajiFacilitySection() {
  const [copiedBank, setCopiedBank] = useState<string | null>(null);

  const handleCopy = (num: string, bank: string) => {
    navigator.clipboard.writeText(num);
    setCopiedBank(bank);
    setTimeout(() => setCopiedBank(null), 2000);
  };

  const inclusions = [
    {
      title: "Visa Haji Mujamalah e-Hajj",
      desc: "Visa haji resmi terdaftar langsung di portal e-Hajj Kementerian Haji Kerajaan Arab Saudi.",
      icon: FileCheck2,
    },
    {
      title: "Penerbangan Langsung PP",
      desc: "Penerbangan direct pulang-pergi kelas ekonomi Saudia Airlines atau Garuda Indonesia.",
      icon: Plane,
    },
    {
      title: "Hotel Bintang 5 Pelataran",
      desc: "Akomodasi ring 1 depan pelataran Masjidil Haram dan Nabawi dengan fullboard buffet nusantara.",
      icon: Hotel,
    },
    {
      title: "Maktab VIP AC Arafah dan Mina",
      desc: "Tenda maktab ber-AC dingin, kasur sofa lipat, dan katering prasmanan selama fase Armuzna.",
      icon: Tent,
    },
    {
      title: "Bus Eksekutif dengan Toilet",
      desc: "Armada pariwisata modern full AC dengan toilet kabin khusus jemaah selama ziarah dan antarkota.",
      icon: Bus,
    },
    {
      title: "Muthawwif dan Tour Leader BNSP",
      desc: "Pembimbing ibadah alumni universitas Timur Tengah dan Tour Leader tersertifikasi resmi BNSP.",
      icon: Users2,
    },
    {
      title: "Manasik Teori dan Praktik",
      desc: "Bimbingan fiqih haji intensif dan simulasi tawaf serta sa'i di hotel berbintang sebelum keberangkatan.",
      icon: BookOpenCheck,
    },
    {
      title: "Asuransi dan Tim Medis",
      desc: "Proteksi perjalanan syariah internasional serta pendampingan dokter dan perawat di Tanah Suci.",
      icon: ShieldCheck,
    },
    {
      title: "Bagasi 46 Kg dan Zamzam 5 Liter",
      desc: "Alokasi bagasi penerbangan 2 koli (total 46 kg) dan air zamzam 5 liter resmi maskapai.",
      icon: Luggage,
    },
  ];

  const exclusions = [
    "Pembuatan atau perpanjangan paspor",
    "Suntik vaksin meningitis dan influenza",
    "Dam atau kurban Haji Tamattu",
    "Pengeluaran pribadi (laundry, telepon, kelebihan bagasi)",
  ];

  const usdAccounts = [
    {
      bank: "Bank Mandiri (USD)",
      number: "1200018107176",
      name: "PT SAMIRA ALI WISATA",
    },
    {
      bank: "Bank Syariah Indonesia / BSI (USD)",
      number: "7176767678",
      name: "PT SAMIRA ALI WISATA",
    },
  ];

  return (
    <div className="space-y-8" id="fasilitas-haji">
      {/* 1. SEKSI FASILITAS LAYANAN */}
      <section
        aria-label="Fasilitas dan Layanan Haji Khusus"
        className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 border border-[#E8E3DA] shadow-xs space-y-6"
      >
        <div className="pb-4 border-b border-[#E8E3DA]">
          <h2 className="font-playfair text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
            Fasilitas dan Layanan Haji Khusus
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
            Seluruh akomodasi ring 1, tiket penerbangan langsung, visa e-Hajj, dan tenda maktab VIP tercover penuh tanpa biaya tersembunyi.
          </p>
        </div>

        {/* 9 Inclusions in Clean 3-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {inclusions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E3DA] space-y-2.5"
              >
                <div className="w-9 h-9 rounded-lg bg-white border border-[#E8E3DA] text-[#084234] flex items-center justify-center shadow-xs">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-xs sm:text-sm text-[#0F172A] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Exclusions */}
        <div className="pt-5 border-t border-[#E8E3DA] space-y-2.5">
          <span className="font-bold text-slate-700 uppercase tracking-wider text-[11px] block">
            Biaya Belum Termasuk:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {exclusions.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 p-2.5 rounded-lg bg-[#FAF8F5] border border-[#E8E3DA] text-xs text-slate-600"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. SEKSI TAHAPAN PEMBAYARAN DAN REKENING RESMI */}
      <section
        aria-label="Ketentuan Pembayaran dan Rekening Resmi"
        className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 border border-[#E8E3DA] shadow-xs space-y-6"
      >
        <div className="pb-4 border-b border-[#E8E3DA]">
          <h2 className="font-playfair text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
            Ketentuan Pembayaran dan Rekening Resmi
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
            Pembayaran dilaksanakan dalam 2 tahap terencana. Pelunasan sisa biaya disetorkan hanya setelah visa haji resmi terbit dan terverifikasi di portal e-Hajj Kementerian Haji Saudi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Kolom Kiri (7 Kolom): 2 Tahapan Pembayaran */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
              Tahapan Pembayaran:
            </span>

            {/* Tahap 1 */}
            <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#E8E3DA] space-y-2.5">
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="font-bold text-sm sm:text-base text-[#0F172A]">
                  1. Pendaftaran dan Penguncian Kuota
                </h3>
                <span className="font-mono font-bold text-sm sm:text-base text-[#084234]">
                  DP USD 5.000
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Disetorkan saat pendaftaran dan penyerahan data paspor untuk mengunci kuota seat haji khusus serta alokasi hotel bintang 5 pelataran.
              </p>
              <div className="flex items-center gap-2 pt-1 text-xs text-emerald-800 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Garansi 100% Full Refund jika kuota visa tidak disetujui Kerajaan Arab Saudi.</span>
              </div>
            </div>

            {/* Tahap 2 */}
            <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#E8E3DA] space-y-2.5">
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="font-bold text-sm sm:text-base text-[#0F172A]">
                  2. Pelunasan Setelah Visa Terbit
                </h3>
                <span className="font-mono font-bold text-sm sm:text-base text-slate-800">
                  USD 12.000
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ditransfer setelah E-Visa Haji Khusus resmi terbit dan nomor visa dapat diverifikasi mandiri di sistem portal e-Hajj Kementerian Haji Saudi.
              </p>
              <div className="flex items-center gap-2 pt-1 text-xs text-slate-600 font-medium">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Kepastian legalitas sebelum dana pelunasan disetorkan.</span>
              </div>
            </div>
          </div>

          {/* Kolom Kanan (5 Kolom): Rekening Resmi Giro USD Perusahaan */}
          <div className="lg:col-span-5 bg-[#04261E] text-white rounded-2xl p-5 sm:p-6 space-y-4 border border-[#084234]/80 shadow-md">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059] flex items-center gap-1.5">
                <Building2 className="w-4 h-4" />
                <span>Rekening Resmi Giro USD Perusahaan</span>
              </span>
              <p className="text-xs text-emerald-100/80 leading-relaxed mt-1">
                Pembayaran haji furoda wajib disetorkan langsung ke rekening giro USD berbadan hukum <strong>PT Samira Ali Wisata</strong>.
              </p>
            </div>

            {/* Accounts List */}
            <div className="space-y-2.5">
              {usdAccounts.map((acc, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between gap-3"
                >
                  <div className="min-w-0">
                    <span className="text-xs text-emerald-200/90 font-medium block truncate">
                      {acc.bank}
                    </span>
                    <span className="text-sm sm:text-base font-mono font-bold text-white tracking-wider block mt-0.5">
                      {acc.number}
                    </span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">
                      a.n {acc.name}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(acc.number, acc.bank)}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer shrink-0"
                    title={`Salin ${acc.bank}`}
                    aria-label={`Salin nomor rekening ${acc.bank}`}
                  >
                    {copiedBank === acc.bank ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-[#C5A059]" />
                    )}
                  </button>
                </div>
              ))}
            </div>

            {/* Anti-Fraud Warning */}
            <div className="pt-2.5 border-t border-white/10 flex items-start gap-2 text-xs text-amber-200/90 leading-relaxed">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <p>
                <strong>Waspada Penipuan:</strong> Samira Travel tidak pernah menerima pembayaran ke rekening pribadi perorangan. Seluruh transaksi wajib ke rekening resmi perusahaan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
