"use client";

import React, { useState } from "react";
import { Copy, Check, MessageCircle, Share2 } from "lucide-react";

interface ArticleShareBarProps {
  title: string;
  url: string;
}

export function ArticleShareBar({ title, url }: ArticleShareBarProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyLink = () => {
    const fullUrl = typeof window !== "undefined" ? window.location.href : url;
    navigator.clipboard.writeText(fullUrl);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleWhatsAppShare = () => {
    const fullUrl = typeof window !== "undefined" ? window.location.href : url;
    const text = `Assalamu'alaikum, baca panduan bermanfaat ini: "${title}"\n\n${fullUrl}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 py-3 px-4 rounded-2xl bg-[#FAF8F5] border border-[#E8E3DA]">
      <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
        <Share2 className="w-3.5 h-3.5 text-[#C5A059]" />
        <span>Bagikan Artikel Ini:</span>
      </span>

      <div className="flex items-center gap-2">
        {/* WhatsApp Share Button */}
        <button
          type="button"
          onClick={handleWhatsAppShare}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs transition-colors cursor-pointer"
          title="Bagikan ke WhatsApp"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </button>

        {/* Copy Link Button */}
        <button
          type="button"
          onClick={handleCopyLink}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200 shadow-2xs transition-colors cursor-pointer"
          title="Salin Tautan Artikel"
        >
          {isCopied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-emerald-700 font-bold">Disalin!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-slate-400" />
              <span>Salin Link</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
