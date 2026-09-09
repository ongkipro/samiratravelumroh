"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { 
  ShieldAlert, 
  Copy, 
  Check, 
  Building2, 
  Lock, 
  CheckCircle2,
  Info
} from "lucide-react";

interface BankLogoMapping {
  [key: string]: string;
}

const BANK_LOGOS: BankLogoMapping = {
  "Bank Syariah Indonesia (BSI)": "/images/bank-bsi-syariah-indonesia-rekening-resmi.png",
  "Bank Mandiri": "/images/bank-mandiri-rekening-resmi.png",
  "Bank Permata Syariah": "/images/bank-permata-syariah-rekening-resmi.png",
  "Bank Muamalat": "/images/bank-muamalat-rekening-resmi.png",
};

export function OfficialBankAccountsCard() {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  const handleCopy = (accountNumber: string) => {
    navigator.clipboard.writeText(accountNumber);
    setCopiedAccount(accountNumber);
    setTimeout(() => {
      setCopiedAccount(null);
    }, 2200);
  };

  return (
    <div id="rekening-resmi" className="scroll-mt-24 bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E3DA] shadow-sm space-y-8">
      {/* Header & Anti-Fraud Notice */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-semibold tracking-wide border border-red-200">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Pemberitahuan Rekening Resmi & Anti-Penipuan</span>
          </div>
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#0F172A]">
            Rekening Giro Korporat PT Samira Ali Wisata
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
            Demi keamanan jemaah, seluruh transaksi biaya umrah & haji hanya sah apabila ditransfer ke rekening resmi atas nama <strong className="text-slate-900 font-semibold">PT SAMIRA ALI WISATA</strong>. Kami tidak pernah menggunakan rekening atas nama pribadi siapapun.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-amber-900 text-xs shrink-0 max-w-xs space-y-1.5">
          <div className="flex items-center gap-1.5 font-bold text-amber-800">
            <Lock className="w-4 h-4 text-amber-600" />
            Verifikasi Pembayaran Resmi
          </div>
          <p className="text-amber-800/90 leading-relaxed">
            Setiap pembayaran otomatis diverifikasi oleh sistem Kemenag RI (SISKOPATUH) dan diterbitkan kwitansi resmi.
          </p>
        </div>
      </div>

      {/* Grid of Bank Accounts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {siteConfig.bankAccounts.map((account, index) => {
          const logoSrc = BANK_LOGOS[account.bank];
          const isCopied = copiedAccount === account.accountNumber;

          return (
            <div
              key={`${account.bank}-${account.accountNumber}-${index}`}
              className="group relative bg-[#FAF8F5] hover:bg-white rounded-2xl p-5 border border-[#E8E3DA] hover:border-[#C5A059]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Bank & Currency Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="h-8 w-28 relative">
                    {logoSrc ? (
                      <Image
                        src={logoSrc}
                        alt={account.bank}
                        fill
                        className="object-contain object-left"
                      />
                    ) : (
                      <div className="flex items-center gap-1 text-xs font-bold text-[#084234]">
                        <Building2 className="w-4 h-4" />
                        <span>{account.bank}</span>
                      </div>
                    )}
                  </div>
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${
                    account.currency === "USD" 
                      ? "bg-amber-100/70 text-amber-900 border-amber-300"
                      : "bg-emerald-100/70 text-emerald-900 border-emerald-300"
                  }`}>
                    {account.currency}
                  </span>
                </div>

                {/* Bank Name text */}
                <div className="text-xs text-slate-500 font-medium mb-1">
                  {account.bank}
                </div>

                {/* Account Number with Copy Action */}
                <div className="flex items-center justify-between gap-2 bg-white group-hover:bg-[#F3EFEA]/60 px-3 py-2.5 rounded-xl border border-slate-200 group-hover:border-[#C5A059]/40 transition-colors">
                  <span className="font-mono text-base sm:text-lg font-bold text-[#084234] tracking-wider select-all">
                    {account.accountNumber}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(account.accountNumber)}
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-lg transition-all ${
                      isCopied
                        ? "bg-emerald-600 text-white shadow-sm"
                        : "bg-[#084234] hover:bg-[#063328] text-white active:scale-95"
                    }`}
                    title="Salin Nomor Rekening"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-white" />
                        <span>Tersalin</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-emerald-100" />
                        <span>Salin</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Account Holder Name */}
                <div className="mt-2.5 text-xs text-slate-500 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>a.n <strong className="text-slate-800 font-semibold">{account.accountName}</strong></span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] text-slate-400">
                Giro Korporat Terdaftar Perbankan Nasional
              </div>
            </div>
          );
        })}
      </div>

      {/* Native Anti-Fraud Security Notice */}
      <div className="p-5 sm:p-6 rounded-2xl bg-red-50/80 border border-red-200 flex flex-col sm:flex-row items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-sm">
          <ShieldAlert className="w-5 h-5" />
        </div>
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-bold text-sm text-red-900">PERINGATAN KEAMANAN TRANSAKSI</span>
            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-red-200/80 text-red-900">Anti-Penipuan</span>
          </div>
          <p className="text-xs sm:text-sm text-red-950/90 leading-relaxed">
            Dilarang keras mentransfer biaya pendaftaran, uang muka (DP), maupun pelunasan selain ke rekening resmi atas nama <strong>PT SAMIRA ALI WISATA</strong>. Calon jemaah <strong>dilarang menitipkan pembayaran tunai atau transfer ke rekening pribadi agen, mitra, tour leader, muthawwif, maupun karyawan</strong>.
          </p>
          <div className="text-[11px] text-red-800/80 pt-1 font-medium flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 shrink-0 text-red-700" />
            <span>Simpan selalu slip bukti transfer bank Anda untuk pencocokan otomatis di portal SISKOPATUH Kemenag RI.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
