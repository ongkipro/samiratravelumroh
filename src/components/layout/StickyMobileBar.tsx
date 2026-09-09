"use client";

import React from "react";
import { MessageCircle, ShieldCheck } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface StickyMobileBarProps {
  packageName?: string;
  city?: string;
  priceFormatted?: string;
}

export function StickyMobileBar({
  packageName,
  city,
  priceFormatted = "Rp 35.000.000",
}: StickyMobileBarProps) {
  const waUrl = getWhatsAppUrl({
    intent: packageName ? "package" : "general",
    packageName,
    city,
  });

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-t border-[#E8E3DA] px-4 py-2.5 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] pb-safe">
      <div className="flex items-center justify-between gap-3">
        {/* Left: Price anchor & assurance */}
        <div className="flex flex-col min-w-0">
          <div className="flex items-center gap-1 text-[10px] font-bold text-[#084234] uppercase tracking-wider">
            <ShieldCheck className="w-3 h-3 text-[#C5A059]" />
            <span className="truncate">Biro Berizin Resmi</span>
          </div>
          <div className="text-xs text-slate-500 font-medium truncate">Mulai</div>
          <div className="text-sm font-bold text-[#0F172A] tracking-tight leading-none">
            {priceFormatted}
          </div>
        </div>

        {/* Right: Big Touch-Friendly Green Button */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 max-w-[210px] min-h-[44px] flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#15803D] active:bg-[#166534] text-white text-xs font-bold shadow-md shadow-emerald-900/20 active:scale-[0.98] transition-all"
        >
          <MessageCircle className="w-4 h-4 fill-white shrink-0" />
          <span className="truncate">Konsultasi Seat (WA)</span>
        </a>
      </div>
    </div>
  );
}
