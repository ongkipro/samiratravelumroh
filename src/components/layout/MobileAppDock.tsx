"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, 
  Compass, 
  Search, 
  Building2, 
  MessageCircle, 
  ShieldCheck, 
  Sparkles,
  Menu,
  ChevronRight
} from "lucide-react";
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
  const [showNavInMorph, setShowNavInMorph] = useState(false);

  // Detect if current route is a specific tour/package detail or city booking route
  const isDetailPage =
    pathname.includes("/paket-umroh/") ||
    pathname.includes("/umroh-plus/") ||
    pathname === "/haji-khusus-furoda" ||
    !!packageName;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 360);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reset morph toggle on route change
  useEffect(() => {
    setShowNavInMorph(false);
  }, [pathname]);

  const waUrl = getWhatsAppUrl({
    intent: packageName ? "package" : "general",
    packageName,
    city,
  });

  const handleOpenSearch = () => {
    window.dispatchEvent(new CustomEvent("open-global-search"));
  };

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
      label: "Cari",
      href: "#search",
      icon: Search,
      onClick: handleOpenSearch,
      isActive: false,
    },
    {
      label: "26 Cabang",
      href: "/kantor-cabang",
      icon: Building2,
      isActive: pathname.startsWith("/kantor-cabang"),
    },
  ];

  // If on a detail page and scrolled down, show morph unless user toggles back to navigation tabs
  const isMorphActive = isDetailPage && isScrolled && !showNavInMorph;

  return (
    <nav
      aria-label="Navigasi Mobile Web App"
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF8F5]/85 backdrop-blur-2xl border-t border-[#C5A059]/25 shadow-[0_-10px_32px_rgba(4,38,30,0.09)] pb-safe transition-all duration-300"
    >
      {/* Subtle Madinah Noor Golden Ambient Rim at top of dock */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent pointer-events-none" />

      {isMorphActive ? (
        /* Morph Mode: Luxury Sticky Booking Glass Bar */
        <div className="flex items-center justify-between gap-2.5 px-4 py-2.5 animate-in slide-in-from-bottom-2 duration-200">
          {/* Menu switcher toggle */}
          <button
            type="button"
            onClick={() => setShowNavInMorph(true)}
            className="w-10 h-10 rounded-2xl bg-white/80 hover:bg-white border border-[#E8E3DA] text-slate-700 hover:text-[#084234] flex items-center justify-center shrink-0 shadow-xs backdrop-blur-md active:scale-95 transition-all cursor-pointer"
            title="Tampilkan Tab Navigasi"
            aria-label="Buka navigasi tab"
          >
            <Menu className="w-4 h-4 text-[#084234]" />
          </button>

          {/* Left Price / Official Assurance */}
          <div className="flex flex-col min-w-0 flex-1 pl-1">
            <div className="flex items-center gap-1 text-[10px] font-bold text-[#084234] uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
              <span className="truncate">Garansi Pasti Terbang</span>
            </div>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-[10px] text-slate-500 font-medium">Mulai</span>
              <span className="text-base font-extrabold text-[#04261E] tracking-tight leading-none">
                {priceFormatted || "Rp 35.000.000"}
              </span>
            </div>
          </div>

          {/* Right Direct WhatsApp Action with Madinah Emerald Gradient & Gold Rim */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-[#084234] via-[#0B5241] to-[#04261E] text-white text-xs font-bold shadow-md shadow-[#084234]/30 border border-[#C5A059]/50 active:scale-[0.98] transition-all shrink-0"
          >
            <div className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse shrink-0" />
            <span className="font-bold tracking-tight">Konsultasi Seat</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#E6CA65] group-hover:translate-x-0.5 transition-transform shrink-0" />
          </a>
        </div>
      ) : (
        /* Standard 5-Tab Mobile Web App Glass Dock */
        <div className="relative">
          {/* Floating Pill Switcher to Return to Morph Bar */}
          {isDetailPage && isScrolled && showNavInMorph && (
            <div className="absolute -top-8 right-4 z-10 animate-in fade-in slide-in-from-bottom-1 duration-150">
              <button
                type="button"
                onClick={() => setShowNavInMorph(false)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#084234]/95 backdrop-blur-md border border-[#C5A059]/40 text-white text-[11px] font-bold shadow-md active:scale-95 transition-all cursor-pointer"
              >
                <Sparkles className="w-3 h-3 text-[#E6CA65]" />
                <span>Lihat Harga &amp; Seat</span>
              </button>
            </div>
          )}

          <div className="grid grid-cols-5 items-center h-15 px-1.5">
            {navTabs.map((tab) => {
              const Icon = tab.icon;
              if (tab.onClick) {
                return (
                  <button
                    key={tab.label}
                    type="button"
                    onClick={tab.onClick}
                    className="flex flex-col items-center justify-center gap-0.5 h-full py-1 text-center text-slate-500 hover:text-slate-900 active:scale-90 transition-all cursor-pointer group"
                  >
                    <div className="p-1 rounded-xl group-hover:bg-[#084234]/5 transition-colors">
                      <Icon className="w-4.5 h-4.5 text-slate-500 group-hover:text-[#084234] transition-colors" />
                    </div>
                    <span className="text-[10px] font-medium leading-tight tracking-tight">
                      {tab.label}
                    </span>
                  </button>
                );
              }

              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={`flex flex-col items-center justify-center gap-0.5 h-full py-1 text-center transition-all active:scale-90 ${
                    tab.isActive
                      ? "text-[#084234] font-bold"
                      : "text-slate-500 hover:text-slate-900 font-medium"
                  }`}
                >
                  <div className="relative">
                    <div className={`p-1 rounded-xl transition-all ${tab.isActive ? "bg-[#084234]/8" : ""}`}>
                      <Icon
                        className={`w-4.5 h-4.5 transition-transform ${
                          tab.isActive ? "scale-110 text-[#084234]" : "text-slate-500"
                        }`}
                      />
                    </div>
                    {tab.isActive && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#C5A059] to-[#E6CA65] shadow-[0_0_6px_rgba(197,160,89,0.7)]" />
                    )}
                  </div>
                  <span className="text-[10px] leading-tight tracking-tight">
                    {tab.label}
                  </span>
                </Link>
              );
            })}

            {/* Tab 5: Direct WhatsApp Consultation (Minimalist with Subtle Online Dot) */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Konsultasi via WhatsApp Resmi"
              className="flex flex-col items-center justify-center gap-0.5 h-full py-1 text-center text-slate-500 hover:text-[#084234] active:scale-90 transition-all group cursor-pointer"
            >
              <div className="relative">
                <div className="p-1 rounded-xl group-hover:bg-[#084234]/5 transition-colors">
                  <MessageCircle className="w-4.5 h-4.5 text-slate-600 group-hover:text-[#084234] transition-colors" />
                </div>
                {/* Subtle online beacon: soft emerald dot */}
                <span className="absolute top-0.5 right-0.5 flex h-1.5 w-1.5 pointer-events-none">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500/40 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-600" />
                </span>
              </div>
              <span className="text-[10px] font-medium text-slate-600 group-hover:text-[#084234] leading-tight tracking-tight">
                Tanya CS
              </span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

