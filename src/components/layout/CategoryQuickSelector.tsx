"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Plane, Award, MapPin, Calculator, BookOpen } from "lucide-react";

export function CategoryQuickSelector() {
  const pathname = usePathname();

  const categories = [
    {
      label: "Umroh Reguler",
      href: "/paket-umroh",
      icon: Compass,
      isActive: pathname === "/paket-umroh" || pathname.startsWith("/paket-umroh/"),
      badge: "11 Kota",
    },
    {
      label: "Umroh Plus",
      href: "/umroh-plus",
      icon: Plane,
      isActive: pathname.startsWith("/umroh-plus"),
      badge: "5 Rute",
    },
    {
      label: "Haji Furoda",
      href: "/haji-khusus-furoda",
      icon: Award,
      isActive: pathname === "/haji-khusus-furoda",
      badge: "Langsung Berangkat",
    },
    {
      label: "26 Cabang",
      href: "/kantor-cabang",
      icon: MapPin,
      isActive: pathname.startsWith("/kantor-cabang"),
      badge: "Fisik",
    },
    {
      label: "Cicilan Syariah",
      href: "/pembiayaan-syariah",
      icon: Calculator,
      isActive: pathname === "/pembiayaan-syariah",
      badge: "AMITRA/BSI",
    },
    {
      label: "Panduan Fikih",
      href: "/artikel",
      icon: BookOpen,
      isActive: pathname.startsWith("/artikel"),
      badge: "400 Info",
    },
  ];

  return (
    <div className="w-full bg-[#FAF8F5] border-b border-[#E8E3DA]/80 py-2.5 px-3 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.href}
                href={cat.href}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap shrink-0 transition-all active:scale-95 border ${
                  cat.isActive
                    ? "bg-[#084234] text-white border-[#084234] shadow-sm shadow-emerald-950/20"
                    : "bg-white text-slate-700 hover:text-[#084234] hover:bg-[#F3EFEA] border-[#E8E3DA]"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 shrink-0 ${cat.isActive ? "text-[#C5A059]" : "text-slate-500"}`} />
                <span>{cat.label}</span>
                {cat.badge && (
                  <span
                    className={`text-[9px] px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                      cat.isActive
                        ? "bg-[#C5A059] text-[#04261E]"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {cat.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
