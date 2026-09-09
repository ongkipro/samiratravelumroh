"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, X, MapPin, Plane, Building2, HelpCircle, ArrowRight, Sparkles } from "lucide-react";

interface SearchItem {
  id: string;
  category: "kota" | "paket" | "cabang" | "panduan";
  title: string;
  subtitle: string;
  href: string;
  badge?: string;
}

const SEARCH_DATABASE: SearchItem[] = [
  // 11 Kota Embarkasi Langsung
  { id: "k-sub", category: "kota", title: "Surabaya (SUB)", subtitle: "Penerbangan langsung Lion Air A330 • 12 Hari", href: "/paket-umroh/surabaya", badge: "Pasti Terbang" },
  { id: "k-cgk", category: "kota", title: "Jakarta (CGK)", subtitle: "Penerbangan langsung Lion Air • 9 Hari & 12 Hari", href: "/paket-umroh/jakarta", badge: "Pasti Terbang" },
  { id: "k-kno", category: "kota", title: "Medan (KNO)", subtitle: "Penerbangan langsung Lion Air • 12 Hari", href: "/paket-umroh/medan", badge: "Pasti Terbang" },
  { id: "k-upg", category: "kota", title: "Makassar (UPG)", subtitle: "Penerbangan langsung Lion Air • 12 Hari", href: "/paket-umroh/makassar", badge: "Pasti Terbang" },
  { id: "k-plm", category: "kota", title: "Palembang (PLM)", subtitle: "Penerbangan langsung Lion Air • 9 Hari", href: "/paket-umroh/palembang", badge: "Pasti Terbang" },
  { id: "k-pdg", category: "kota", title: "Padang (PDG)", subtitle: "Penerbangan langsung Lion Air • 13 Hari", href: "/paket-umroh/padang", badge: "Pasti Terbang" },
  { id: "k-pnk", category: "kota", title: "Pontianak (PNK)", subtitle: "Penerbangan langsung Lion Air • 13 Hari", href: "/paket-umroh/pontianak", badge: "Pasti Terbang" },
  { id: "k-btj", category: "kota", title: "Aceh (BTJ)", subtitle: "Penerbangan langsung Lion Air • 13 Hari", href: "/paket-umroh/aceh", badge: "Pasti Terbang" },
  { id: "k-dps", category: "kota", title: "Denpasar Bali (DPS)", subtitle: "Penerbangan langsung Lion Air • 12 Hari", href: "/paket-umroh/denpasar", badge: "Pasti Terbang" },
  { id: "k-bth", category: "kota", title: "Batam (BTH)", subtitle: "Penerbangan langsung Lion Air • 13 Hari", href: "/paket-umroh/batam", badge: "Pasti Terbang" },
  { id: "k-pku", category: "kota", title: "Pekanbaru (PKU)", subtitle: "Penerbangan langsung Lion Air • 13 Hari", href: "/paket-umroh/pekanbaru", badge: "Pasti Terbang" },

  // Paket Umroh & Haji
  { id: "p-reg", category: "paket", title: "Paket Umroh Reguler 2026", subtitle: "Hotel Bintang 5 Dekat Masjid • Mulai Rp 35.000.000", href: "/paket-umroh", badge: "Bintang 5" },
  { id: "p-thaif", category: "paket", title: "Umroh Plus Ta'if (Pegunungan Sejuk)", subtitle: "Ziarah napak tilas Rasulullah & Kebun Mawar • Rp 29 Jt-an", href: "/umroh-plus/thaif", badge: "Favorit" },
  { id: "p-alula", category: "paket", title: "Umroh Plus Al-Ula (Hegra UNESCO)", subtitle: "Warisan peradaban kuno padang pasir Saudi • Rp 34 Jt-an", href: "/umroh-plus/al-ula", badge: "Eksklusif" },
  { id: "p-turki", category: "paket", title: "Umroh Plus Turki (Bosphorus & Istanbul)", subtitle: "Wisata sejarah Khilafah Utsmaniyah • Rp 37 Jt-an", href: "/umroh-plus/turki", badge: "Populer" },
  { id: "p-riyadh", category: "paket", title: "Umroh Plus Riyadh (Benteng Masmak)", subtitle: "Metropolitan modern & sejarah berdirinya Saudi • Rp 30 Jt-an", href: "/umroh-plus/riyadh" },
  { id: "p-jeddah", category: "paket", title: "Umroh Plus City Tour Jeddah", subtitle: "Masjid Terapung & Laut Merah Corniche • Rp 28 Jt-an", href: "/umroh-plus/jeddah" },
  { id: "p-furoda", category: "paket", title: "Haji Khusus Furoda 2026 (Tanpa Antre)", subtitle: "Visa Resmi Mujamalah • Maktab AC VIP • USD 17.000 (Garansi DP)", href: "/haji-khusus-furoda", badge: "Tanpa Antri" },

  // Kantor Cabang Populer
  { id: "c-sby", category: "cabang", title: "Kantor Cabang Surabaya", subtitle: "Jawa Timur • Jl. Gayungsari Barat", href: "/kantor-cabang/surabaya" },
  { id: "c-jkt", category: "cabang", title: "Kantor Pusat Jakarta", subtitle: "DKI Jakarta • Jl. Malaka Merah No.7/6, Pondok Kopi", href: "/kantor-cabang/jakarta" },
  { id: "c-bdg", category: "cabang", title: "Kantor Cabang Bandung", subtitle: "Jawa Barat • Layanan Konsultasi Tatap Muka", href: "/kantor-cabang/bandung" },
  { id: "c-mks", category: "cabang", title: "Kantor Cabang Makassar", subtitle: "Sulawesi Selatan • Layanan Jemaah Indonesia Timur", href: "/kantor-cabang/makassar" },
  { id: "c-all", category: "cabang", title: "Lihat Semua 26 Kantor Cabang Fisik", subtitle: "Sumatera, Jawa, Kalimantan, Sulawesi, Bali", href: "/kantor-cabang", badge: "26 Kota" },

  // Panduan, Pembiayaan, & Legalitas
  { id: "g-finance", category: "panduan", title: "Simulasi Pembiayaan Syariah (AMITRA / BSI)", subtitle: "Program Umroh Dulu Bayar Belakangan tanpa agunan", href: "/pembiayaan-syariah", badge: "Syariah" },
  { id: "g-legal", category: "panduan", title: "Legalitas Resmi & Rekor Dunia Guinness", subtitle: "Izin Kemenag PPIU No. 137/2020 & 3 Rekor MURI", href: "/tentang-kami" },
  { id: "g-testi", category: "panduan", title: "Testimoni Jemaah & Pasien Cuci Darah", subtitle: "Bukti pelayanan amanah ribuan jemaah dan artis UMBAST", href: "/testimoni" },
];

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GlobalSearchModal({ isOpen, onClose }: GlobalSearchModalProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setQuery("");
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Keyboard shortcut listener (Cmd+K or / or Esc)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onClose();
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const filteredResults = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return SEARCH_DATABASE.slice(0, 8); // Top quick recommendations

    return SEARCH_DATABASE.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 sm:px-6">
      {/* Backdrop with High-End Blur */}
      <div
        className="fixed inset-0 bg-[#04261E]/70 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Spotlight Command Container */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Pencarian Cepat Samira Travel"
        className="relative w-full max-w-2xl bg-[#FAF8F5] rounded-2xl md:rounded-3xl shadow-2xl border border-[#E8E3DA] overflow-hidden z-10 animate-in zoom-in-95 duration-200 flex flex-col max-h-[80vh]"
      >
        {/* Search Header Input */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-[#E8E3DA] bg-white">
          <Search className="w-5 h-5 text-[#084234] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ketik kota keberangkatan, paket, atau cabang..."
            className="w-full bg-transparent text-sm md:text-base text-[#0F172A] placeholder:text-slate-400 focus:outline-none font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-slate-400 hover:text-slate-600 p-1"
              aria-label="Bersihkan pencarian"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-slate-100 text-slate-500 border border-slate-200"
          >
            ESC
          </button>
        </div>

        {/* Categories / Results */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-1 divide-y divide-[#E8E3DA]/60">
          {filteredResults.length === 0 ? (
            <div className="py-12 text-center text-slate-500 space-y-2">
              <p className="text-sm font-medium">Tidak ada hasil yang cocok dengan &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-slate-400">Coba kata kunci lain seperti &quot;Surabaya&quot;, &quot;Taif&quot;, &quot;Furoda&quot;, atau &quot;Cabang&quot;.</p>
            </div>
          ) : (
            <div className="space-y-1">
              {!query && (
                <div className="px-3 py-1.5 text-[11px] font-bold text-[#C5A059] uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Rekomendasi Cepat Untuk Anda</span>
                </div>
              )}
              {filteredResults.map((item) => {
                const icon =
                  item.category === "kota" ? (
                    <Plane className="w-4 h-4 text-[#084234]" />
                  ) : item.category === "paket" ? (
                    <Sparkles className="w-4 h-4 text-[#C5A059]" />
                  ) : item.category === "cabang" ? (
                    <Building2 className="w-4 h-4 text-[#084234]" />
                  ) : (
                    <HelpCircle className="w-4 h-4 text-emerald-600" />
                  );

                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center justify-between gap-3 p-3 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-[#E8E3DA] transition-all group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-xl bg-[#084234]/5 flex items-center justify-center shrink-0 group-hover:bg-[#084234]/10 transition-colors">
                        {icon}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-xs sm:text-sm text-[#0F172A] group-hover:text-[#084234] transition-colors truncate">
                            {item.title}
                          </span>
                          {item.badge && (
                            <span className="shrink-0 text-[10px] font-bold px-1.5 py-0.2 rounded bg-amber-100 text-amber-900 border border-amber-300">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-500 truncate">{item.subtitle}</p>
                      </div>
                    </div>

                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#084234] group-hover:translate-x-0.5 transition-all shrink-0" />
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer Quick Shortcuts */}
        <div className="px-5 py-3 bg-[#F3EFEA] border-t border-[#E8E3DA] flex items-center justify-between text-xs text-slate-600">
          <span>Pilih rute untuk langsung melihat tanggal & harga resmi.</span>
          <Link
            href="/paket-umroh"
            onClick={onClose}
            className="font-bold text-[#084234] hover:underline"
          >
            Lihat Semua Jadwal ➜
          </Link>
        </div>
      </div>
    </div>
  );
}
