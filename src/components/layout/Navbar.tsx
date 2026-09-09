"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Search,
  Compass,
  Globe,
  Award,
  Building2,
  ShieldCheck,
  Phone,
  MessageCircle,
  MapPin,
  Sparkles,
} from "lucide-react";
import { GlobalSearchModal } from "./GlobalSearchModal";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPaketDropdownOpen, setIsPaketDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileCitiesOpen, setIsMobileCitiesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsPaketDropdownOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Global custom events listener
  useEffect(() => {
    const handleOpenSearch = () => setIsSearchOpen(true);
    const handleOpenMobileMenu = () => setIsMobileMenuOpen(true);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("open-global-search", handleOpenSearch);
    window.addEventListener("open-mobile-menu", handleOpenMobileMenu);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("open-global-search", handleOpenSearch);
      window.removeEventListener("open-mobile-menu", handleOpenMobileMenu);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const mainNavLinks = [
    { label: "Paket Umroh", href: "/paket-umroh", hasDropdown: true },
    { label: "Umroh Plus", href: "/umroh-plus" },
    { label: "Haji Furoda", href: "/haji-khusus-furoda", badge: "Langsung Berangkat" },
    { label: "26 Cabang", href: "/kantor-cabang" },
    { label: "Tentang Kami", href: "/tentang-kami" },
  ];

  const cityDropdown = [
    { name: "Surabaya", href: "/paket-umroh/surabaya", code: "SUB" },
    { name: "Jakarta", href: "/paket-umroh/jakarta", code: "CGK" },
    { name: "Medan", href: "/paket-umroh/medan", code: "KNO" },
    { name: "Makassar", href: "/paket-umroh/makassar", code: "UPG" },
    { name: "Palembang", href: "/paket-umroh/palembang", code: "PLM" },
    { name: "Padang", href: "/paket-umroh/padang", code: "PDG" },
    { name: "Pontianak", href: "/paket-umroh/pontianak", code: "PNK" },
    { name: "Aceh", href: "/paket-umroh/aceh", code: "BTJ" },
    { name: "Denpasar", href: "/paket-umroh/denpasar", code: "DPS" },
    { name: "Batam", href: "/paket-umroh/batam", code: "BTH" },
    { name: "Pekanbaru", href: "/paket-umroh/pekanbaru", code: "PKU" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-[#E8E3DA]/60 shadow-xs py-1 sm:py-1.5"
            : "bg-[#FAF8F5] py-2 sm:py-2.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-15 sm:h-16">
            {/* Brand Logo - Crisp Light WebP */}
            <Link href="/" className="flex items-center gap-3 shrink-0 py-1 group/logo" aria-label="Samira Travel Beranda">
              <Image
                src="/images/logo-samira-travel-light.webp"
                alt="Samira Travel - Biro Perjalanan Umrah & Haji Khusus Resmi Kemenag RI"
                width={162}
                height={54}
                className="h-9 sm:h-10 w-auto object-contain transition-transform duration-200 group-hover/logo:scale-[1.02]"
                priority
              />
            </Link>

            {/* Desktop Navigation Links with Modern Hover & Gold Hairline Animation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5">
              {mainNavLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <div
                    key={link.href}
                    className="relative group py-2"
                  >
                    <Link
                      href={link.href}
                      className={`relative inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                        isActive
                          ? "text-[#084234] font-bold"
                          : "text-slate-700 hover:text-[#084234]"
                      }`}
                    >
                      {/* Subtle Floating Pill Backdrop on Hover */}
                      <span
                        className={`absolute inset-0 rounded-xl transition-all duration-250 ease-out ${
                          isActive
                            ? "bg-[#084234]/8 shadow-2xs"
                            : "bg-[#084234]/0 group-hover:bg-[#084234]/5"
                        }`}
                      />

                      <span className="relative z-10">{link.label}</span>

                      {link.badge && (
                        <span className="relative z-10 inline-flex items-center text-[9px] font-extrabold uppercase tracking-wide px-2 py-0.5 rounded-full bg-gradient-to-r from-[#084234]/10 to-[#C5A059]/20 text-[#084234] border border-[#C5A059]/40 group-hover:border-[#C5A059]/70 group-hover:bg-[#C5A059]/20 transition-all duration-200">
                          {link.badge}
                        </span>
                      )}

                      {link.hasDropdown && (
                        <ChevronDown className="relative z-10 w-3.5 h-3.5 text-slate-400 group-hover:text-[#084234] transition-transform duration-300 ease-out group-hover:rotate-180" />
                      )}

                      {/* Golden Hairline Underline Indicator Animation */}
                      <span
                        className={`absolute bottom-0.5 left-3.5 right-3.5 h-[2px] rounded-full bg-gradient-to-r from-[#C5A059] via-[#E6CA65] to-[#C5A059] transition-all duration-300 ease-out origin-center ${
                          isActive
                            ? "opacity-100 scale-x-100 shadow-[0_1px_4px_rgba(197,160,89,0.5)]"
                            : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                        }`}
                      />
                    </Link>

                    {/* Dropdown with Safety Bridge & Smooth Float-Down Animation */}
                    {link.hasDropdown && (
                      <div className="absolute top-full left-0 pt-1.5 w-84 invisible opacity-0 -translate-y-2 pointer-events-none group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-250 ease-out z-50">
                        <div className="p-3.5 bg-white/98 backdrop-blur-2xl rounded-2xl shadow-[0_16px_48px_rgba(4,38,30,0.14)] border border-[#E8E3DA] relative overflow-hidden ring-1 ring-[#C5A059]/20">
                          {/* Top Golden Rim Ambient Glow */}
                          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#C5A059]/50 to-transparent" />

                          <div className="text-[11px] font-bold text-[#084234] uppercase tracking-wider px-2.5 pb-2 mb-1.5 border-b border-slate-100 flex items-center justify-between">
                            <span>11 Kota Embarkasi Langsung</span>
                            <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                              Direct Flight
                            </span>
                          </div>

                          <div className="grid grid-cols-2 gap-1">
                            {cityDropdown.map((c) => (
                              <Link
                                key={c.href}
                                href={c.href}
                                className="group/city flex items-center justify-between px-2.5 py-1.5 rounded-xl text-xs text-slate-600 hover:text-[#084234] hover:bg-[#084234]/6 transition-all duration-150"
                              >
                                <span className="group-hover/city:translate-x-1 transition-transform duration-150 font-medium">
                                  {c.name}
                                </span>
                                <span className="text-[10px] text-[#C5A059] group-hover/city:text-[#084234] font-mono font-bold transition-colors">
                                  {c.code}
                                </span>
                              </Link>
                            ))}
                          </div>

                          <div className="pt-2.5 mt-2 border-t border-slate-100 px-1">
                            <Link
                              href="/paket-umroh"
                              className="group/all flex items-center justify-between px-2.5 py-1.5 rounded-xl text-xs font-bold text-[#084234] hover:bg-[#084234]/5 transition-all"
                            >
                              <span>Lihat Seluruh Paket &amp; Jadwal</span>
                              <ChevronRight className="w-3.5 h-3.5 text-[#C5A059] group-hover/all:translate-x-1 transition-transform duration-150" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Right Tools: Minimalist Search Icon & Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              {/* Minimalist Circular Search Icon Button */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Cari paket umroh, kota keberangkatan, atau artikel panduan"
                title="Pencarian Cepat (⌘K)"
                className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-white/90 hover:bg-white border border-[#E8E3DA] hover:border-[#C5A059]/70 text-slate-600 hover:text-[#084234] shadow-2xs hover:shadow-sm hover:shadow-[#084234]/10 active:scale-90 transition-all duration-200 cursor-pointer"
              >
                <Search className="w-4.5 h-4.5 transition-transform duration-200 group-hover:scale-110" />
                {/* Subtle Ambient Hover Ring */}
                <span className="absolute inset-0 rounded-full bg-[#084234]/0 group-hover:bg-[#084234]/5 transition-colors duration-200 pointer-events-none" />
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl text-slate-800 hover:text-[#084234] hover:bg-slate-100 active:scale-90 transition-all cursor-pointer border border-[#E8E3DA]/80 bg-white shadow-2xs"
                aria-label={isMobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-slate-800" />
                ) : (
                  <Menu className="w-5 h-5 text-slate-800" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Sheet Modal (Minimalist Modern Madinah Theme) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex items-end justify-center p-0 sm:p-4">
          {/* Backdrop Blur Overlay */}
          <div
            className="fixed inset-0 bg-[#04261E]/75 backdrop-blur-md transition-opacity animate-fade-in-overlay"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Bottom Sheet Modal Panel */}
          <aside
            role="dialog"
            aria-modal="true"
            aria-label="Menu Navigasi Mobile Samira Travel"
            className="relative w-full max-w-lg sm:max-w-xl bg-[#FAF8F5] max-h-[88dvh] sm:max-h-[85vh] rounded-t-[32px] sm:rounded-3xl shadow-2xl flex flex-col z-10 animate-slide-up-sheet border-t sm:border border-[#E8E3DA] overflow-hidden transition-all"
          >
            {/* Top Drag Indicator Handle */}
            <div className="pt-3 pb-1 flex justify-center w-full bg-white sm:hidden shrink-0">
              <div className="w-12 h-1.5 rounded-full bg-slate-300" />
            </div>

            {/* Modal Header */}
            <div className="px-4 sm:px-5 py-3 sm:py-3.5 border-b border-[#E8E3DA] bg-white flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5">
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center"
                  aria-label="Beranda Samira Travel"
                >
                  <Image
                    src="/images/logo-samira-travel-light.webp"
                    alt="Logo Samira Travel - Biro Umroh & Haji Khusus Resmi Kemenag RI"
                    width={125}
                    height={40}
                    className="h-7 w-auto object-contain"
                  />
                </Link>
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#084234]/8 text-[#084234] border border-[#084234]/15">
                  <ShieldCheck className="w-3 h-3 text-[#C5A059]" />
                  PPIU 137/2020
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Tutup Menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Navigation Body */}
            <div className="flex-1 overflow-y-auto overscroll-contain no-scrollbar p-4 sm:p-5 space-y-4 pb-safe pb-8">
              {/* Group 1: Program Ibadah Utama (Unified Container) */}
              <div className="space-y-1.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#9B7832] px-1 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Program Ibadah Utama</span>
                </div>

                <div className="rounded-2xl bg-white border border-[#E8E3DA]/90 divide-y divide-[#E8E3DA]/60 overflow-hidden shadow-2xs">
                  {/* Paket Umroh Reguler with 11 Kota Sub-Accordion */}
                  <div>
                    <div className="flex items-center justify-between p-3 sm:p-3.5 hover:bg-[#FAF8F5]/60 transition-colors">
                      <Link
                        href="/paket-umroh"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-3 min-w-0 flex-1 group"
                      >
                        <div className="w-9 h-9 rounded-xl bg-[#084234]/6 flex items-center justify-center shrink-0 group-hover:bg-[#084234]/12 transition-colors">
                          <Compass className="w-4 h-4 text-[#084234]" />
                        </div>
                        <div className="min-w-0">
                          <div className="font-bold text-sm text-[#0F172A] group-hover:text-[#084234] transition-colors truncate">
                            Paket Umroh Reguler
                          </div>
                          <div className="text-xs text-slate-500 truncate">
                            Penerbangan langsung Lion Air 11 kota
                          </div>
                        </div>
                      </Link>

                      <button
                        type="button"
                        onClick={() => setIsMobileCitiesOpen(!isMobileCitiesOpen)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200/80 hover:bg-amber-100 transition-colors ml-2 shrink-0 cursor-pointer"
                        aria-label="Tampilkan 11 kota embarkasi"
                      >
                        <span className="text-[11px]">11 Kota</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 text-amber-800 ${
                            isMobileCitiesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {/* 11 Kota Accordion List */}
                    {isMobileCitiesOpen && (
                      <div className="px-3 pb-3 pt-2 bg-[#FAF8F5]/90 border-t border-[#E8E3DA]/60 animate-in slide-in-from-top-1 duration-150">
                        <div className="text-[10px] text-slate-500 font-semibold mb-2">
                          Pilih Kota Embarkasi Langsung:
                        </div>
                        <div className="grid grid-cols-2 gap-1.5">
                          {cityDropdown.map((c) => (
                            <Link
                              key={c.href}
                              href={c.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-white border border-[#E8E3DA] hover:border-[#084234] text-xs font-medium text-slate-700 hover:text-[#084234] transition-colors"
                            >
                              <span>{c.name}</span>
                              <span className="text-[9px] font-mono font-bold text-[#C5A059]">
                                {c.code}
                              </span>
                            </Link>
                          ))}
                        </div>
                        <Link
                          href="/paket-umroh"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="mt-2 block text-center text-xs font-bold text-[#084234] hover:underline pt-1"
                        >
                          Lihat Detail Semua 11 Kota Embarkasi →
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Umroh Plus Wisata Halal */}
                  <Link
                    href="/umroh-plus"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between p-3 sm:p-3.5 hover:bg-[#FAF8F5]/60 transition-colors group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0 group-hover:bg-amber-500/20 transition-colors">
                        <Globe className="w-4 h-4 text-[#C5A059]" />
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-sm text-[#0F172A] group-hover:text-[#084234] transition-colors truncate">
                          Umroh Plus Wisata Halal
                        </div>
                        <div className="text-xs text-slate-500 truncate">
                          Ta&apos;if, Al-Ula, Turki, Riyadh &amp; Jeddah
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0 ml-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                        5 Rute
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#084234] transition-colors" />
                    </div>
                  </Link>

                  {/* Haji Khusus Furoda */}
                  <Link
                    href="/haji-khusus-furoda"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between p-3 sm:p-3.5 hover:bg-[#FAF8F5]/60 transition-colors group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-xl bg-[#084234]/8 flex items-center justify-center shrink-0 group-hover:bg-[#084234]/15 transition-colors">
                        <Award className="w-4 h-4 text-[#084234]" />
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-sm text-[#0F172A] group-hover:text-[#084234] transition-colors truncate">
                          Haji Khusus Furoda 2026
                        </div>
                        <div className="text-xs text-slate-500 truncate">
                          Visa Resmi Mujamalah • Tanpa Antri
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0 ml-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#084234]/10 text-[#084234] border border-[#084234]/20">
                        Langsung Berangkat
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#084234] transition-colors" />
                    </div>
                  </Link>
                </div>
              </div>

              {/* Group 2: Layanan & Jaringan Resmi (Unified Container) */}
              <div className="space-y-1.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#9B7832] px-1 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Layanan &amp; Jaringan</span>
                </div>

                <div className="rounded-2xl bg-white border border-[#E8E3DA]/90 divide-y divide-[#E8E3DA]/60 overflow-hidden shadow-2xs">
                  <Link
                    href="/kantor-cabang"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between p-3 sm:p-3.5 hover:bg-[#FAF8F5]/60 transition-colors group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-xl bg-[#FAF8F5] border border-[#E8E3DA] flex items-center justify-center shrink-0 group-hover:border-[#084234]/40 transition-colors">
                        <MapPin className="w-4 h-4 text-[#084234]" />
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold text-sm text-slate-800 group-hover:text-[#084234] transition-colors truncate">
                          Direktori 26 Cabang Resmi
                        </div>
                        <div className="text-xs text-slate-500 truncate">
                          Jawa, Sumatera, Kalimantan, Sulawesi, Bali
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0 ml-2">
                      <span className="text-[10px] font-bold text-[#084234] bg-[#084234]/8 px-2 py-0.5 rounded-full border border-[#084234]/15">
                        Fisik
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#084234] transition-colors" />
                    </div>
                  </Link>

                  <Link
                    href="/pembiayaan-syariah"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between p-3 sm:p-3.5 hover:bg-[#FAF8F5]/60 transition-colors group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-xl bg-[#FAF8F5] border border-[#E8E3DA] flex items-center justify-center shrink-0 group-hover:border-[#084234]/40 transition-colors">
                        <ShieldCheck className="w-4 h-4 text-amber-700" />
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold text-sm text-slate-800 group-hover:text-[#084234] transition-colors truncate">
                          Simulasi Cicilan Syariah
                        </div>
                        <div className="text-xs text-slate-500 truncate">
                          AMITRA / BSI • Umroh Dulu Bayar Belakangan
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0 ml-2">
                      <span className="text-[10px] font-bold text-amber-900 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                        Syariah
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#084234] transition-colors" />
                    </div>
                  </Link>

                  <Link
                    href="/kemitraan-dgi"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between p-3 sm:p-3.5 hover:bg-[#FAF8F5]/60 transition-colors group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-xl bg-[#FAF8F5] border border-[#E8E3DA] flex items-center justify-center shrink-0 group-hover:border-[#084234]/40 transition-colors">
                        <Sparkles className="w-4 h-4 text-[#C5A059]" />
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold text-sm text-slate-800 group-hover:text-[#084234] transition-colors truncate">
                          Peluang Kemitraan DGi
                        </div>
                        <div className="text-xs text-slate-500 truncate">
                          Syiar Baitullah Terpercaya &amp; Non-MLM
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0 ml-2">
                      <span className="text-[10px] font-bold text-emerald-900 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        Legal
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#084234] transition-colors" />
                    </div>
                  </Link>
                </div>
              </div>

              {/* Group 3: Informasi & Kredensial (Minimalist Inline Strip) */}
              <div className="pt-1">
                <div className="flex items-center justify-between px-1 text-xs text-slate-600 font-medium">
                  <Link
                    href="/tentang-kami"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="hover:text-[#084234] transition-colors py-1 hover:underline"
                  >
                    Tentang Kami &amp; Legalitas
                  </Link>
                  <span className="text-slate-300">•</span>
                  <Link
                    href="/testimoni"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="hover:text-[#084234] transition-colors py-1 hover:underline"
                  >
                    Testimoni Jemaah
                  </Link>
                  <span className="text-slate-300">•</span>
                  <Link
                    href="/artikel"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="hover:text-[#084234] transition-colors py-1 hover:underline"
                  >
                    400+ Artikel
                  </Link>
                </div>
              </div>

              {/* Group 4: Integrated Direct Action & Trust Bar */}
              <div className="pt-2 space-y-2.5">
                {/* Official PPIU Reassurance Badge */}
                <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white border border-[#E8E3DA] text-[11px] text-slate-600">
                  <ShieldCheck className="w-4 h-4 text-[#15803D] shrink-0" />
                  <span className="font-semibold text-slate-800">PPIU No. 137/2020</span>
                  <span className="text-slate-300">•</span>
                  <span>Akreditasi A</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-[#9B7832] font-medium">3 Rekor MURI</span>
                </div>

                {/* Primary WhatsApp Action */}
                <a
                  href="https://wa.me/6285607179735?text=Assalamu%27alaikum%20Samira%20Travel,%20saya%20ingin%20konsultasi%20paket%20umrah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#084234] hover:bg-[#063529] text-white font-bold text-sm shadow-md active:scale-98 transition-all cursor-pointer"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]" />
                  </span>
                  <MessageCircle className="w-4 h-4 fill-white shrink-0" />
                  <span>Konsultasi CS WhatsApp Resmi</span>
                </a>

                {/* Secondary Hotline Text */}
                <div className="text-center pt-0.5">
                  <a
                    href="tel:085607179735"
                    className="text-[11px] text-slate-500 hover:text-[#084234] transition-colors inline-flex items-center gap-1"
                  >
                    <Phone className="w-3 h-3 text-[#C5A059]" />
                    <span>Hotline Resmi: <strong className="text-slate-700">0856-0717-9735</strong></span>
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      )}

      {/* Global Spotlight Search Modal */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
