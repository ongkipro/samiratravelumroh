"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import {
  Search,
  X,
  MapPin,
  Plane,
  Building2,
  HelpCircle,
  ChevronRight,
  Sparkles,
  MessageCircle,
  Compass,
  Award,
  ShieldCheck,
  Calculator,
} from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface SearchItem {
  id: string;
  category: "paket" | "kota" | "cabang" | "panduan";
  title: string;
  subtitle: string;
  href: string;
  badge?: string;
  keywords?: string;
}

const SEARCH_DATABASE: SearchItem[] = [
  // 11 Kota Embarkasi Langsung Pesawat Charter
  {
    id: "k-sub",
    category: "kota",
    title: "Surabaya (SUB) - Juanda",
    subtitle: "Penerbangan langsung Lion Air A330 • Program 12 Hari • Tanpa Transit",
    href: "/paket-umroh/surabaya",
    badge: "Pasti Terbang",
    keywords: "surabaya jatim juanda direct a330 charter 12 hari",
  },
  {
    id: "k-cgk",
    category: "kota",
    title: "Jakarta (CGK) - Soekarno-Hatta",
    subtitle: "Penerbangan langsung Lion Air • Program 9 & 12 Hari • Reguler & Plus",
    href: "/paket-umroh/jakarta",
    badge: "Pasti Terbang",
    keywords: "jakarta cengkareng soetta cgk dki reguler 9 hari 12 hari",
  },
  {
    id: "k-kno",
    category: "kota",
    title: "Medan (KNO) - Kualanamu",
    subtitle: "Penerbangan langsung Lion Air • Program 12 Hari • Sumatera Utara",
    href: "/paket-umroh/medan",
    badge: "Pasti Terbang",
    keywords: "medan kualanamu kno sumut sumatera 12 hari",
  },
  {
    id: "k-upg",
    category: "kota",
    title: "Makassar (UPG) - Sultan Hasanuddin",
    subtitle: "Penerbangan langsung Lion Air • Program 12 Hari • Indonesia Timur",
    href: "/paket-umroh/makassar",
    badge: "Pasti Terbang",
    keywords: "makassar hasanuddin upg sulsel sulawesi 12 hari",
  },
  {
    id: "k-plm",
    category: "kota",
    title: "Palembang (PLM) - Sultan Mahmud Badaruddin II",
    subtitle: "Penerbangan langsung Lion Air • Program 9 Hari • Sumatera Selatan",
    href: "/paket-umroh/palembang",
    badge: "Pasti Terbang",
    keywords: "palembang plm sumsel 9 hari",
  },
  {
    id: "k-pdg",
    category: "kota",
    title: "Padang (PDG) - Minangkabau",
    subtitle: "Penerbangan langsung Lion Air • Program 13 Hari • Sumatera Barat",
    href: "/paket-umroh/padang",
    badge: "Pasti Terbang",
    keywords: "padang minangkabau pdg sumbar 13 hari",
  },
  {
    id: "k-pnk",
    category: "kota",
    title: "Pontianak (PNK) - Supadio",
    subtitle: "Penerbangan langsung Lion Air • Program 13 Hari • Kalimantan Barat",
    href: "/paket-umroh/pontianak",
    badge: "Pasti Terbang",
    keywords: "pontianak supadio pnk kalbar kalimantan 13 hari",
  },
  {
    id: "k-btj",
    category: "kota",
    title: "Aceh (BTJ) - Sultan Iskandar Muda",
    subtitle: "Penerbangan langsung Lion Air • Program 13 Hari • Serambi Mekkah",
    href: "/paket-umroh/aceh",
    badge: "Pasti Terbang",
    keywords: "aceh banda aceh iskandar muda btj serambi mekkah 13 hari",
  },
  {
    id: "k-dps",
    category: "kota",
    title: "Denpasar Bali (DPS) - Ngurah Rai",
    subtitle: "Penerbangan langsung Lion Air • Program 12 Hari • Bali & Nusa Tenggara",
    href: "/paket-umroh/denpasar",
    badge: "Pasti Terbang",
    keywords: "bali denpasar ngurah rai dps 12 hari",
  },
  {
    id: "k-bth",
    category: "kota",
    title: "Batam (BTH) - Hang Nadim",
    subtitle: "Penerbangan langsung Lion Air • Program 13 Hari • Kepulauan Riau",
    href: "/paket-umroh/batam",
    badge: "Pasti Terbang",
    keywords: "batam hang nadim bth kepri riau 13 hari",
  },
  {
    id: "k-pku",
    category: "kota",
    title: "Pekanbaru (PKU) - Sultan Syarif Kasim II",
    subtitle: "Penerbangan langsung Lion Air • Program 13 Hari • Riau Daratan",
    href: "/paket-umroh/pekanbaru",
    badge: "Pasti Terbang",
    keywords: "pekanbaru pku riau syarif kasim 13 hari",
  },

  // Paket Umroh & Haji Khusus
  {
    id: "p-reg",
    category: "paket",
    title: "Paket Umroh Reguler 2026",
    subtitle: "Hotel Bintang 5 Dekat Pelataran Masjid • Lion Air Langsung • Mulai Rp 35 Jt",
    href: "/paket-umroh",
    badge: "Bintang 5",
    keywords: "reguler murah bintang 5 hotel dekat masjid jadwal biaya promo",
  },
  {
    id: "p-furoda",
    category: "paket",
    title: "Haji Khusus Furoda 2026 (Tanpa Antri)",
    subtitle: "Visa Resmi Mujamalah Kemenag • Maktab VIP AC • USD 17.000 (Garansi DP)",
    href: "/haji-khusus-furoda",
    badge: "Langsung Berangkat",
    keywords: "haji furoda mujamalah khusus langsung berangkat maktab vip mina arafah",
  },
  {
    id: "p-thaif",
    category: "paket",
    title: "Umroh Plus Ta'if (Pegunungan Mawar)",
    subtitle: "Napak tilas dakwah Rasulullah, Teleferik Cable Car & Nasi Mandhi • Rp 29 Jt-an",
    href: "/umroh-plus/thaif",
    badge: "Favorit Jemaah",
    keywords: "thaif taif kebun mawar cable car sejarah nabi",
  },
  {
    id: "p-alula",
    category: "paket",
    title: "Umroh Plus Al-Ula (Hegra UNESCO)",
    subtitle: "Situs warisan Nabataean kuno, Elephant Rock & Maraya Hall • Rp 34 Jt-an",
    href: "/umroh-plus/al-ula",
    badge: "Eksklusif",
    keywords: "al ula alula hegra madain saleh elephant rock maraya unesco",
  },
  {
    id: "p-turki",
    category: "paket",
    title: "Umroh Plus Turki (Bosphorus & Istanbul)",
    subtitle: "Hagia Sophia, Blue Mosque, Topkapi Palace & Selat Bosphorus • Rp 37 Jt-an",
    href: "/umroh-plus/turki",
    badge: "Populer",
    keywords: "turki turkey istanbul bosphorus hagia sophia blue mosque cappadocia",
  },
  {
    id: "p-riyadh",
    category: "paket",
    title: "Umroh Plus Riyadh (Benteng Masmak)",
    subtitle: "Metropolitan megah, Sky Bridge Kingdom Centre & Sejarah Saudi • Rp 30 Jt-an",
    href: "/umroh-plus/riyadh",
    badge: "Modern",
    keywords: "riyadh benteng masmak sky bridge ibukota saudi",
  },
  {
    id: "p-jeddah",
    category: "paket",
    title: "Umroh Plus City Tour Jeddah",
    subtitle: "Masjid Terapung Al-Rahmah, Corniche Laut Merah & Balad Kuno • Rp 28 Jt-an",
    href: "/umroh-plus/jeddah",
    badge: "City Tour",
    keywords: "jeddah laut merah masjid terapung balad corniche",
  },

  // 4 Pilihan Fasilitas & Jarak Hotel Resmi Samira Travel
  {
    id: "h-safara",
    category: "paket",
    title: "Paket Safara (Durrat Al Salah / Talat Ajyad)",
    subtitle: "Makkah Jalan Kaki 9 Menit (±700m) • Madinah 4 Menit • Video Bukti YouTube",
    href: "/paket-umroh#fasilitas-hotel",
    badge: "9 Menit Jalan Kaki",
    keywords: "safara durrat al salah talat ajyad plaza inn ohud maysan al taqwa hotel jarak jalan kaki 9 menit 4 menit 700m ekonomis",
  },
  {
    id: "h-safawi",
    category: "paket",
    title: "Paket Safawi (Grand Al Massa / Maysan Al Maqam)",
    subtitle: "Makkah Jalan Kaki 5 Menit (±450m) • Madinah 1 Menit (±200m) • Video Bukti YouTube",
    href: "/paket-umroh#fasilitas-hotel",
    badge: "5 Menit Jalan Kaki",
    keywords: "safawi grand al massa maysan al maqam arkan al manar durrat al eiman semi vip hotel 5 menit 1 menit 450m 200m",
  },
  {
    id: "h-sukari",
    category: "paket",
    title: "Paket Sukari (Anjum Hotel / Hilton Convention)",
    subtitle: "Makkah ±200m (2-3 Menit) • Madinah 1 Menit (Grand Plaza / Golden Tulip Ansar)",
    href: "/paket-umroh#fasilitas-hotel",
    badge: "Bintang 5 Ring 1",
    keywords: "sukari anjum hilton convention grand plaza golden tulip ansar bintang 5 200m 100m 1 menit",
  },
  {
    id: "h-majol",
    category: "paket",
    title: "Paket Majol VVIP (Movenpick / Pullman Zamzam Clock Tower)",
    subtitle: "Makkah 0 Meter Pelataran Haram • Madinah Depan Pagar Pas (Taiba Front / Al Aqeeq)",
    href: "/paket-umroh#fasilitas-hotel",
    badge: "0 Meter Pelataran",
    keywords: "majol movenpick pullman zamzam clock tower taiba front al aqeeq vvip 0 meter depan pagar pas pelataran langsung",
  },

  // Kantor Cabang Fisik Populer
  {
    id: "c-sby",
    category: "cabang",
    title: "Kantor Cabang Surabaya",
    subtitle: "Jawa Timur • Jl. Gayungsari Barat, Menanggal, Gayungan",
    href: "/kantor-cabang/surabaya",
    badge: "Kantor Fisik",
    keywords: "surabaya gayungsari jatim sidoarjo gresik kantor perwakilan",
  },
  {
    id: "c-jkt",
    category: "cabang",
    title: "Kantor Pusat Samira Travel Jakarta",
    subtitle: "DKI Jakarta • Jl. Malaka Merah No.7/6, Pondok Kopi, Duren Sawit",
    href: "/kantor-cabang/jakarta",
    badge: "Kantor Pusat",
    keywords: "jakarta pusat dki duren sawit pondok kopi malaka merah kantor",
  },
  {
    id: "c-bdg",
    category: "cabang",
    title: "Kantor Cabang Bandung",
    subtitle: "Jawa Barat • Layanan Konsultasi Tatap Muka & Pendaftaran",
    href: "/kantor-cabang/bandung",
    badge: "Kantor Fisik",
    keywords: "bandung jabar priangan cimahi kantor cabang",
  },
  {
    id: "c-mks",
    category: "cabang",
    title: "Kantor Cabang Makassar",
    subtitle: "Sulawesi Selatan • Layanan Jemaah Indonesia Timur",
    href: "/kantor-cabang/makassar",
    badge: "Kantor Fisik",
    keywords: "makassar sulsel sulawesi indonesia timur",
  },
  {
    id: "c-kno",
    category: "cabang",
    title: "Kantor Cabang Medan",
    subtitle: "Sumatera Utara • Layanan Pendaftaran & Manasik Daerah",
    href: "/kantor-cabang/medan",
    badge: "Kantor Fisik",
    keywords: "medan sumut sumatera utara kantor",
  },
  {
    id: "c-all",
    category: "cabang",
    title: "Direktori Lengkap 26 Kantor Cabang Fisik",
    subtitle: "Tersebar di Sumatera, Jawa, Kalimantan, Sulawesi, hingga Bali",
    href: "/kantor-cabang",
    badge: "26 Cabang Resmi",
    keywords: "semua cabang 26 cabang alamat telepon kantor fisik indonesia",
  },

  // Panduan, Legalitas, & Pembiayaan
  {
    id: "g-finance",
    category: "panduan",
    title: "Simulasi Cicilan Syariah (AMITRA / BSI)",
    subtitle: "Program Umroh Dulu Bayar Belakangan • Akad Syariah Murni Tanpa Agunan",
    href: "/pembiayaan-syariah",
    badge: "Syariah Murni",
    keywords: "cicilan kredit amitra bsi pembiayaan syariah tanpa agunan angsuran bayar belakangan",
  },
  {
    id: "g-legal",
    category: "panduan",
    title: "Legalitas Izin Kemenag & 3 Rekor MURI",
    subtitle: "Izin Resmi PPIU No. 137/2020 • Akreditasi A • Rekor Dunia Guinness",
    href: "/tentang-kami",
    badge: "Resmi Kemenag",
    keywords: "legalitas izin kemenag ppiu 137 akreditasi a muri guinness profil perusahaan",
  },
  {
    id: "g-partner",
    category: "panduan",
    title: "Peluang Kemitraan Syiar DGi (Non-MLM)",
    subtitle: "Program Syiar Baitullah Amanah dengan Pelatihan & Komisi Berkah Legal",
    href: "/kemitraan-dgi",
    badge: "Kemitraan",
    keywords: "kemitraan agen dgi peluang usaha bisnis umroh non mlm komisi syiar",
  },
  {
    id: "g-testi",
    category: "panduan",
    title: "Testimoni Jemaah & Pasien Cuci Darah",
    subtitle: "Kisah haru pelayanan amanah ribuan jemaah dan artis UMBAST",
    href: "/testimoni",
    badge: "Jemaah Asli",
    keywords: "testimoni review ulasan artis umbast cuci darah pengalaman jemaah",
  },
  {
    id: "g-articles",
    category: "panduan",
    title: "Pusat Panduan & 400+ Artikel Edukasi Umroh",
    subtitle: "Informasi syarat paspor, visa, tips manasik, dan kesehatan di Tanah Suci",
    href: "/artikel",
    badge: "400+ Info",
    keywords: "artikel tips panduan paspor visa biometrik doa manasik ibadah umroh",
  },
];

type CategoryFilter = "all" | "paket" | "kota" | "cabang" | "panduan";

const CATEGORY_TABS: { id: CategoryFilter; label: string }[] = [
  { id: "all", label: "Semua" },
  { id: "paket", label: "Paket & Haji" },
  { id: "kota", label: "11 Kota" },
  { id: "cabang", label: "Cabang Fisik" },
  { id: "panduan", label: "Panduan & Cicilan" },
];

const POPULAR_SEARCH_TAGS = [
  "Surabaya (SUB)",
  "Jakarta (CGK)",
  "Haji Furoda",
  "Paket Safara",
  "Paket Majol",
  "Jarak Hotel",
  "Cicilan Syariah",
];

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GlobalSearchModal({ isOpen, onClose }: GlobalSearchModalProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setQuery("");
      setActiveCategory("all");
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
    let baseList = SEARCH_DATABASE;

    if (activeCategory !== "all") {
      baseList = baseList.filter((item) => item.category === activeCategory);
    }

    if (!q) {
      return baseList.slice(0, 8);
    }

    return baseList.filter((item) => {
      const titleMatch = item.title.toLowerCase().includes(q);
      const subtitleMatch = item.subtitle.toLowerCase().includes(q);
      const categoryMatch = item.category.toLowerCase().includes(q);
      const badgeMatch = item.badge?.toLowerCase().includes(q) ?? false;
      const keywordMatch = item.keywords?.toLowerCase().includes(q) ?? false;

      return titleMatch || subtitleMatch || categoryMatch || badgeMatch || keywordMatch;
    });
  }, [query, activeCategory]);

  const waConsultUrl = getWhatsAppUrl({
    intent: "general",
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-start justify-center p-0 sm:pt-16 sm:px-6">
      {/* Backdrop Blur Overlay */}
      <div
        className="fixed inset-0 bg-[#04261E]/75 backdrop-blur-md transition-opacity animate-fade-in-overlay"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container: Mobile Bottom Sheet / Desktop Centered Card */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Pencarian Cepat Samira Travel"
        className="relative w-full max-w-2xl bg-[#FAF8F5] rounded-t-[32px] sm:rounded-3xl shadow-2xl border-t sm:border border-[#E8E3DA] overflow-hidden z-10 animate-slide-up-sheet sm:animate-in sm:zoom-in-95 duration-200 flex flex-col max-h-[88dvh] sm:max-h-[82vh] transition-all"
      >
        {/* Mobile Drag Indicator Handle */}
        <div className="sm:hidden pt-3 pb-1 flex justify-center w-full bg-white shrink-0">
          <div className="w-12 h-1.5 rounded-full bg-slate-300" />
        </div>

        {/* Minimalist Search Input Bar */}
        <div className="flex items-center gap-3 px-4 sm:px-5 py-3.5 sm:py-4 border-b border-[#E8E3DA] bg-white shrink-0">
          <Search className="w-5 h-5 text-[#084234] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari rute kota, paket, cabang, atau cicilan..."
            className="w-full bg-transparent text-sm sm:text-base text-[#0F172A] placeholder:text-slate-400 focus:outline-none font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-100 cursor-pointer transition-colors"
              aria-label="Bersihkan pencarian"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="sm:hidden text-xs font-bold text-[#084234] px-2.5 py-1 rounded-lg hover:bg-slate-100 cursor-pointer shrink-0"
          >
            Tutup
          </button>
          <button
            onClick={onClose}
            className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-slate-100 text-slate-500 border border-slate-200 cursor-pointer"
          >
            ESC
          </button>
        </div>

        {/* Filter Category Segment Tabs */}
        <div className="px-4 py-2.5 bg-white border-b border-[#E8E3DA] flex items-center gap-2 overflow-x-auto no-scrollbar shrink-0">
          {CATEGORY_TABS.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#084234] text-white shadow-xs"
                    : "bg-[#FAF8F5] border border-[#E8E3DA] text-slate-600 hover:text-[#084234] hover:border-[#084234]/50"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Quick Suggestion Pills (Shown when no search query) */}
        {!query && (
          <div className="px-4 py-2 bg-[#F3EFEA]/80 border-b border-[#E8E3DA]/70 flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0">
            <span className="text-[10px] font-bold text-[#C5A059] uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#C5A059]" />
              Populer:
            </span>
            {POPULAR_SEARCH_TAGS.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => {
                  setQuery(tag.replace(/\s*\(.*?\)\s*/g, ""));
                }}
                className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white border border-[#E8E3DA] hover:border-[#084234] text-slate-700 hover:text-[#084234] whitespace-nowrap active:scale-95 transition-all cursor-pointer shadow-2xs"
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        {/* Results Stream (Minimalist List with hairline dividers) */}
        <div className="flex-1 overflow-y-auto overscroll-contain p-2 sm:p-3 divide-y divide-[#E8E3DA]/60">
          {filteredResults.length === 0 ? (
            <div className="py-12 px-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#084234]/8 text-[#084234] flex items-center justify-center mx-auto">
                <Search className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-bold text-[#0F172A]">
                  Tidak ada hasil untuk &ldquo;{query}&rdquo;
                </p>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Silakan cari dengan kata kunci kota keberangkatan, rute umroh plus, atau cabang resmi.
                </p>
              </div>
              <div className="pt-2">
                <a
                  href={waConsultUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#084234] text-white text-xs font-bold shadow-sm hover:bg-[#063529] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Tanyakan Rute Ini ke CS WhatsApp</span>
                </a>
              </div>
            </div>
          ) : (
            <div>
              {filteredResults.map((item) => {
                const icon =
                  item.category === "kota" ? (
                    <Plane className="w-4 h-4 text-[#084234]" />
                  ) : item.category === "paket" ? (
                    <Compass className="w-4 h-4 text-[#C5A059]" />
                  ) : item.category === "cabang" ? (
                    <Building2 className="w-4 h-4 text-[#084234]" />
                  ) : (
                    <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  );

                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center justify-between gap-3 p-3 rounded-xl hover:bg-white hover:shadow-2xs transition-all group cursor-pointer"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-xl bg-white border border-[#E8E3DA] flex items-center justify-center shrink-0 group-hover:border-[#084234]/40 group-hover:bg-[#084234]/5 transition-colors">
                        {icon}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-xs sm:text-sm text-[#0F172A] group-hover:text-[#084234] transition-colors truncate">
                            {item.title}
                          </span>
                          {item.badge && (
                            <span className="shrink-0 text-[10px] font-semibold px-1.5 py-0.2 rounded-full bg-amber-50 text-amber-900 border border-amber-200">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-500 truncate mt-0.5">{item.subtitle}</p>
                      </div>
                    </div>

                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#084234] group-hover:translate-x-0.5 transition-all shrink-0" />
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {/* Minimalist Reassurance Footer */}
        <div className="px-4 sm:px-5 py-3 bg-[#FAF8F5] border-t border-[#E8E3DA] flex items-center justify-between text-xs text-slate-600 shrink-0 pb-safe sm:pb-3">
          <div className="flex items-center gap-1.5 text-[11px] text-slate-500 truncate">
            <span className="w-1.5 h-1.5 rounded-full bg-[#15803D]" />
            <span className="truncate">Resmi Kemenag RI PPIU 137/2020 • Akreditasi A</span>
          </div>
          <Link
            href="/paket-umroh"
            onClick={onClose}
            className="font-bold text-[#084234] hover:underline shrink-0 text-xs ml-3"
          >
            Semua Jadwal ➜
          </Link>
        </div>
      </div>
    </div>
  );
}
