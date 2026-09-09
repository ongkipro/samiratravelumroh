"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const waUrl = getWhatsAppUrl({ intent: "general" });

  return (
    <aside aria-label="Layanan Konsultasi WhatsApp" className="hidden sm:block fixed bottom-6 right-6 z-40">
      {/* Popover Bubble */}
      {isOpen && (
        <div className="mb-3 w-80 bg-white rounded-2xl shadow-2xl border border-[#E8E3DA] p-4 text-xs animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-start justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="relative w-9 h-9 rounded-full bg-[#084234] flex items-center justify-center text-white font-bold text-sm">
                ST
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#15803D] ring-2 ring-white" />
              </div>
              <div>
                <p className="font-bold text-[#0F172A] text-sm leading-tight">CS Samira Travel</p>
                <p className="text-[11px] text-[#15803D] font-medium">Online • Respon Cepat</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 p-1"
              aria-label="Tutup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3 text-slate-600 space-y-1.5 leading-relaxed">
            <p>Assalamu&apos;alaikum! Ada yang bisa kami bantu seputar jadwal keberangkatan, rincian biaya, atau pembiayaan syariah?</p>
          </div>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#15803D] hover:bg-[#166534] text-white font-bold transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Mulai Chat WhatsApp</span>
          </a>
        </div>
      )}

      {/* Trigger Button with Radar Wave Pulse */}
      <div className="relative inline-flex">
        {/* Radar Pulse Wave Rings */}
        <span className="absolute inset-0 rounded-full bg-[#15803D] animate-radar-wave pointer-events-none" />

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative inline-flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-[#15803D] hover:bg-[#166534] text-white font-bold shadow-lg shadow-emerald-950/25 hover:shadow-xl hover:scale-105 active:scale-95 transition-all text-sm"
          aria-label="Konsultasi WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-white shrink-0" />
          <span className="font-bold pr-1">Tanya Jadwal (WA)</span>
        </button>
      </div>
    </aside>
  );
}
