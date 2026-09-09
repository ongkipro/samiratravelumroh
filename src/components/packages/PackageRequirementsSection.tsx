"use client";

import React from "react";
import { BookOpen, Users, Camera, CreditCard, Calendar } from "lucide-react";

interface PackageRequirementsSectionProps {
  dpAmount?: string;
  paymentDeadline?: string;
}

export function PackageRequirementsSection({
  dpAmount = "Rp 1.500.000,-",
  paymentDeadline = "H-25 sebelum tanggal terbang",
}: PackageRequirementsSectionProps) {
  const items = [
    {
      title: "Paspor Asli",
      desc: "Nama minimal 2 suku kata, masa berlaku aktif minimal 8 bulan sebelum tanggal keberangkatan.",
      icon: BookOpen,
    },
    {
      title: "Identitas Diri (KTP & KK)",
      desc: "Fotokopi KTP dan Kartu Keluarga (KK) yang masih berlaku untuk verifikasi pendaftaran.",
      icon: Users,
    },
    {
      title: "Pas Foto Berwarna",
      desc: "Pas foto berwarna terbaru dengan latar belakang putih ukuran 3x4 (2 lembar).",
      icon: Camera,
    },
    {
      title: "Uang Muka Pendaftaran (DP)",
      desc: `Pembayaran uang muka sebesar ${dpAmount} disetorkan saat pendaftaran untuk konfirmasi pemesanan seat.`,
      icon: CreditCard,
    },
    {
      title: "Pelunasan Biaya Paket",
      desc: `Pelunasan sisa biaya paket disetorkan paling lambat ${paymentDeadline}.`,
      icon: Calendar,
    },
  ];

  return (
    <section
      id="persyaratan-pendaftaran"
      aria-label="Persyaratan Pendaftaran dan Ketentuan Pembayaran"
      className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 border border-[#E8E3DA] shadow-xs space-y-6"
    >
      <div className="pb-4 border-b border-[#E8E3DA]">
        <h2 className="font-playfair text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
          Persyaratan Pendaftaran & Ketentuan Pembayaran
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
          Kelengkapan berkas dan jadwal pembayaran resmi untuk memastikan kelancaran administrasi dan penerbitan visa.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E3DA] flex items-start gap-3.5"
            >
              <div className="w-9 h-9 rounded-lg bg-white border border-[#E8E3DA] text-[#084234] flex items-center justify-center shrink-0 shadow-xs">
                <Icon className="w-4 h-4" />
              </div>
              <div className="space-y-1 min-w-0">
                <h3 className="font-bold text-sm text-[#0F172A]">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
