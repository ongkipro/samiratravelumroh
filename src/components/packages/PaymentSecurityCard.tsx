"use client";

import React, { useState } from "react";
import { ShieldCheck, AlertTriangle, Building2, Check, Copy } from "lucide-react";

export function PaymentSecurityCard() {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  const handleCopy = (accNumber: string) => {
    navigator.clipboard.writeText(accNumber);
    setCopiedAccount(accNumber);
    setTimeout(() => setCopiedAccount(null), 2000);
  };

  const officialAccounts = [
    { bank: "Permata Syariah", number: "1810717676", currency: "IDR" },
    { bank: "Bank Syariah Indonesia (BSI)", number: "7176767678", currency: "IDR" },
    { bank: "Bank Mandiri", number: "1200018107176", currency: "IDR" },
  ];

  return (
    <div className="bg-white rounded-2xl p-5 border border-[#E8E3DA] shadow-sm space-y-4">
      {/* Header with Shield */}
      <div className="flex items-start gap-3 border-b border-slate-100 pb-3.5">
        <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#084234] flex items-center justify-center shrink-0 border border-emerald-100/80">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#084234] block">
            Jaminan Keamanan 100%
          </span>
          <h3 className="font-playfair text-sm sm:text-base font-bold text-[#0F172A]">
            Keamanan Transaksi & Pembayaran
          </h3>
        </div>
      </div>

      {/* Corporate Entity Legal Guarantee */}
      <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E8E3DA] text-xs text-slate-700 leading-relaxed space-y-1.5">
        <p className="font-medium text-[#0F172A]">
          Seluruh transaksi pembayaran dan pelunasan hanya sah ditransfer ke rekening resmi berbadan hukum atas nama:
        </p>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-800 text-white font-bold text-xs shadow-xs">
          <Building2 className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>PT SAMIRA ALI WISATA</span>
        </div>
      </div>

      {/* Official Corporate Accounts */}
      <div className="space-y-2">
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
          Daftar Rekening Resmi Perusahaan:
        </span>
        <div className="space-y-1.5">
          {officialAccounts.map((acc, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs hover:bg-slate-100/70 transition-colors"
            >
              <div>
                <span className="font-bold text-[#0F172A] block">{acc.bank}</span>
                <span className="font-mono text-slate-600 font-semibold text-[11px]">
                  {acc.number} <span className="text-[10px] text-slate-400 font-normal">({acc.currency})</span>
                </span>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(acc.number)}
                className="p-1.5 rounded-md hover:bg-white text-slate-500 hover:text-[#084234] border border-transparent hover:border-slate-200 transition-all cursor-pointer"
                title="Salin Nomor Rekening"
                aria-label={`Salin rekening ${acc.bank}`}
              >
                {copiedAccount === acc.number ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[2.5]" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Fraud Warning */}
      <div className="flex items-start gap-2 p-2.5 rounded-xl bg-amber-50/80 border border-amber-200/60 text-[11px] text-amber-900 leading-normal">
        <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <p>
          <strong className="font-bold">Waspada Penipuan:</strong> Samira Travel <span className="underline decoration-amber-500">TIDAK PERNAH</span> menggunakan rekening atas nama pribadi/perorangan.
        </p>
      </div>
    </div>
  );
}
