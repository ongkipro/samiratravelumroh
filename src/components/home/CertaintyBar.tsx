import React from "react";
import { ShieldCheck, Plane, Award, Globe } from "lucide-react";

export function CertaintyBar() {
  const pillars = [
    {
      num: "01",
      icon: ShieldCheck,
      title: "Izin Resmi Kemenag RI",
      highlight: "Akreditasi A Unggul",
      desc: "PPIU 137/2020 & PIHK 2022",
    },
    {
      num: "02",
      icon: Plane,
      title: "100% Charter Flight",
      highlight: "Pasti Berangkat",
      desc: "Direct Lion Air & Saudia A330",
    },
    {
      num: "03",
      icon: Award,
      title: "Peringkat #1 Nasional",
      highlight: "3x Rekor MURI",
      desc: "29.171 jemaah terbanyak nasional",
    },
    {
      num: "04",
      icon: Globe,
      title: "Guinness World Records",
      highlight: "Rekor Dunia di Jeddah",
      desc: "Jamuan halal 10.449 jemaah",
    },
  ];

  return (
    <section className="relative z-10 w-full border-y border-[#E8E3DA] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 divide-[#E8E3DA]/80 gap-3.5 sm:gap-6 lg:gap-0 lg:divide-x lg:divide-[#E8E3DA]">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="pt-3 sm:pt-0 first:pt-0 flex items-center gap-3.5 lg:px-6 first:lg:pl-0 last:lg:pr-0 group"
              >
                {/* Refined 40px Icon Frame */}
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E3DA] shadow-xs flex items-center justify-center text-[#084234] shrink-0 group-hover:border-[#C5A059] group-hover:text-[#04261E] transition-all duration-200">
                  <Icon className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                </div>

                {/* Structured 2-Tier Typography */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-serif italic text-xs font-bold text-[#C5A059] shrink-0">
                      {p.num}
                    </span>
                    <h3 className="font-bold text-[#0F172A] text-sm tracking-tight truncate group-hover:text-[#084234] transition-colors">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5 leading-snug truncate">
                    <strong className="font-semibold text-[#084234]">{p.highlight}</strong>
                    <span className="text-slate-300 mx-1.5">•</span>
                    <span>{p.desc}</span>
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

