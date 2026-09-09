import React from "react";
import { ShieldCheck, Plane, Award, Globe } from "lucide-react";

export function CertaintyBar() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Izin Resmi Kemenag RI",
      highlight: "Akreditasi A Unggul",
      desc: "PPIU No. 137/2020 & PIHK 2022 terdaftar SISKOPATUH.",
    },
    {
      icon: Plane,
      title: "100% Charter Flight",
      highlight: "Jadwal Pasti Terbang",
      desc: "Penerbangan langsung Lion Air & Saudia tanpa resiko delay.",
    },
    {
      icon: Award,
      title: "Peringkat #1 Nasional",
      highlight: "29.171 Jemaah (MURI)",
      desc: "Biro penyelenggara umrah terbanyak rekor MURI 3x berturut-turut.",
    },
    {
      icon: Globe,
      title: "Guinness World Records",
      highlight: "Rekor Dunia Resmi",
      desc: "Jamuan halal jemaah umrah terbesar di Jeddah (Ref: 15-782573).",
    },
  ];

  return (
    <section className="relative z-20 -mt-6 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl md:rounded-3xl border border-[#E8E3DA] border-t-4 border-t-[#C5A059] shadow-xl p-5 sm:p-7 shadow-madinah">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#E8E3DA]">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className={`flex items-start gap-4 ${idx !== 0 ? "pt-4 sm:pt-0 sm:pl-6" : ""}`}
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-[#C5A059]/40 text-[#084234] flex items-center justify-center shrink-0 shadow-sm">
                  <Icon className="w-5 h-5 text-[#C5A059]" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-[#0F172A] text-sm leading-snug">
                      {p.title}
                    </h3>
                  </div>
                  <span className="text-[11px] font-bold text-[#084234] block mt-0.5">
                    {p.highlight}
                  </span>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
