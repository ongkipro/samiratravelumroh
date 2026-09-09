import React from "react";
import Image from "next/image";
import { Plane, Building2, Radio, HeartPulse, CheckCircle2 } from "lucide-react";

export function CompetitiveAdvantageSection() {
  const pillars = [
    {
      icon: Plane,
      title: "Skala Charter Flight Penuh",
      desc: "Kontrak block satu pesawat utuh Lion Air & Saudia. Tiket fisik terbit sebelum pendaftaran dibuka, zero risiko gagal terbang.",
    },
    {
      icon: Building2,
      title: "26 Kantor Cabang Fisik",
      desc: "Bukan sekadar agen online. Kami memiliki kantor perwakilan resmi di 26 kota strategis dari Aceh hingga Papua.",
    },
    {
      icon: Radio,
      title: "Audio Receiver System (APS)",
      desc: "Teknologi earphone nirkabel khusus saat Thawaf & Sa'i. Doa dan bimbingan Muthawwif terdengar jernih tanpa berdesakan.",
    },
    {
      icon: HeartPulse,
      title: "Layanan Medis Cuci Darah",
      desc: "Bekerja sama resmi dengan rumah sakit di Makkah & Madinah untuk memfasilitasi jemaah dengan kebutuhan hemodialisa rutin.",
    },
  ];

  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-12">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#9B7832] uppercase block">
            Standar Fasilitas & Pelayanan
          </span>
          <h2 className="font-playfair text-xl sm:text-2xl md:text-3xl font-bold text-[#0F172A]">
            Kenyamanan Ibadah dengan Standar Paripurna
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Dari perlengkapan koper premium hingga teknologi bimbingan ibadah modern, setiap detail dirancang untuk kekhusyukan ibadah Anda.
          </p>
        </div>

        {/* 4 Open Architectural Columns (Unboxed Sanctuary, No Bento Box AI Slop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-[#E8E3DA] py-8 border-y border-[#E8E3DA] mb-16">
          {pillars.map((item, idx) => {
            const num = `0${idx + 1}`;
            return (
              <div
                key={idx}
                className={`flex flex-col justify-between space-y-3 ${
                  idx === 0 ? "sm:pr-6 lg:pr-8" : idx === 3 ? "pt-6 sm:pt-0 sm:pl-6 lg:pl-8" : "pt-6 sm:pt-0 sm:px-6 lg:px-8"
                }`}
              >
                <div>
                  <span className="font-serif italic text-xl sm:text-2xl font-bold text-[#C5A059]/80 block mb-2">
                    {num}
                  </span>
                  <h3 className="text-base font-bold text-[#0F172A] leading-snug tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Real Equipment Kit Showcase Banner */}
        <div className="bg-[#04261E] text-white rounded-3xl p-6 sm:p-10 lg:p-12 overflow-hidden relative border border-[#C5A059]/40 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column Text */}
            <div className="lg:col-span-6 space-y-3.5">
              <span className="text-xs font-semibold tracking-[0.2em] text-[#C5A059] uppercase block">
                Fasilitas Jamaah
              </span>
              <h3 className="font-playfair text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-snug">
                Perlengkapan Umrah & Haji <br />
                <span className="text-gold-gradient font-serif italic">Berkualitas Premium</span>
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                Setiap jemaah menerima koper bagasi fiber hardcase dengan roda ganda 360°, tas selempang paspor, kain ihram katun premium / mukena syar&apos;i bergo panjang, seragam batik khas Samira Travel, dan buku saku doa manasik.
              </p>
              <div className="grid grid-cols-2 gap-2.5 pt-2 text-xs text-emerald-100/90">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Koper Fiber Anti-Pecah</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Batik Sutra Halus Khas</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Ihram Katun Menyerap Keringat</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Buku Saku Manasik Praktis</span>
                </div>
              </div>
            </div>

            {/* Right Column Real Image */}
            <div className="lg:col-span-6 relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-[#C5A059]/40">
              <Image
                src="/images/fasilitas-koper-dan-perlengkapan-umroh-eksekutif.webp"
                alt="Kit Perlengkapan Umrah Samira Travel"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
