"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Compass, Building2, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface MobileAppDockProps {
  packageName?: string;
  city?: string;
  priceFormatted?: string;
}

export function MobileAppDock({
  packageName,
  city,
  priceFormatted,
}: MobileAppDockProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect if current route is a specific tour/package detail or city booking route
  const isDetailPage =
    pathname.includes("/paket-umroh/") ||
    pathname.includes("/umroh-plus/") ||
    pathname === "/haji-khusus-furoda" ||
    !!packageName;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 380);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const waUrl = getWhatsAppUrl({
    intent: packageName ? "package" : "general",
    packageName,
    city,
  });

  const navTabs = [
    {
      label: "Beranda",
      href: "/",
      icon: Home,
      isActive: pathname === "/",
    },
    {
      label: "Paket",
      href: "/paket-umroh",
      icon: Compass,
      isActive:
        pathname.startsWith("/paket-umroh") ||
        pathname.startsWith("/umroh-plus") ||
        pathname.startsWith("/haji"),
    },
    {
      label: "26 Cabang",
      href: "/kantor-cabang",
      icon: Building2,
      isActive: pathname.startsWith("/kantor-cabang"),
    },
  ];

  // If on a detail page and scrolled down, morph into high-conversion price anchor
  const showConversionMorph = isDetailPage && isScrolled;

  return (
    <nav
      aria-label="Navigasi Mobile Web App"
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-xl border-t border-[#E8E3DA] shadow-[0_-8px_24px_rgba(0,0,0,0.08)] pb-safe transition-all duration-300"
    >
      {showConversionMorph ? (
        /* Morph Mode: Sticky Conversion Anchor for Detail Pages */
        <div className="flex items-center justify-between gap-3 px-4 py-2.5 animate-in slide-in-from-bottom-2 duration-200">
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1 text-[10px] font-bold text-[#084234] uppercase tracking-wider">
              <ShieldCheck className="w-3 h-3 text-[#C5A059]" />
              <span className="truncate">Garansi Pasti Terbang</span>
            </div>
            <div className="text-[11px] text-slate-500 font-medium">Harga Resmi Mulai</div>
            <div className="text-sm font-extrabold text-[#0F172A] tracking-tight leading-none">
              {priceFormatted || "Rp 35.000.000"}
            </div>
          </div>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 max-w-[210px] min-h-[46px] flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#15803D] active:bg-[#166534] text-white text-xs font-bold shadow-md shadow-emerald-900/25 active:scale-[0.98] transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white shrink-0" />
            <span className="truncate font-bold">Konsultasi Seat (WA)</span>
          </a>
        </div>
      ) : (
        /* Standard Mode: 4-Tab Native App Dock */
        <div className="grid grid-cols-4 items-center h-16 px-2">
          {navTabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`flex flex-col items-center justify-center gap-1 h-full py-1 text-center transition-all active:scale-95 ${
                  tab.isActive
                    ? "text-[#084234] font-bold"
                    : "text-slate-500 hover:text-slate-800 font-medium"
                }`}
              >
                <div className="relative">
                  <Icon
                    className={`w-5 h-5 transition-transform ${
                      tab.isActive ? "scale-110 text-[#084234]" : "text-slate-400"
                    }`}
                  />
                  {tab.isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                  )}
                </div>
                <span className="text-[10px] leading-tight tracking-tight">
                  {tab.label}
                </span>
              </Link>
            );
          })}

          {/* Tab 4: Direct WhatsApp Consultation Action */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 h-full py-1 text-center text-[#15803D] active:scale-95 transition-all"
          >
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-[#15803D]/10 flex items-center justify-center text-[#15803D]">
                <MessageCircle className="w-4 h-4 fill-[#15803D]" />
              </div>
              {/* Online pulse indicator */}
              <span className="absolute top-0 right-0 w-2.5 h-2.5 rounded-full bg-[#15803D] ring-2 ring-[#FAF8F5] animate-pulse" />
            </div>
            <span className="text-[10px] font-bold text-[#15803D] leading-tight tracking-tight">
              Tanya CS
            </span>
          </a>
        </div>
      )}
    </nav>
  );
}
