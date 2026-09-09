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

      {/* Mobile Drawer (Executive Native App Sheet) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex justify-end">
          {/* Backdrop Blur Overlay */}
          <div
            className="fixed inset-0 bg-[#04261E]/75 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-over Drawer Panel */}
          <aside
            role="dialog"
            aria-modal="true"
            aria-label="Menu Navigasi Mobile Samira Travel"
            className="relative w-full max-w-[340px] sm:max-w-[390px] bg-[#FAF8F5] h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300 border-l border-[#E8E3DA] overflow-hidden"
          >
            {/* Drawer Header */}
            <div className="p-4 sm:p-5 border-b border-[#E8E3DA] bg-white flex items-center justify-between">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2"
                aria-label="Beranda Samira Travel"
              >
                <Image
                  src="/images/logo-samira-travel-light.webp"
                  alt="Samira Travel"
                  width={140}
                  height={46}
                  className="h-8 w-auto object-contain"
                />
              </Link>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Tutup Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Navigation Body */}
            <div className="flex-1 overflow-y-auto no-scrollbar p-4 sm:p-5 space-y-5 pb-10">
              {/* Group 1: Program Ibadah Utama */}
              <div className="space-y-1.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#9B7832] px-2 mb-1.5 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Program Ibadah Utama</span>
                </div>

                {/* Paket Umroh with 11 Kota Sub-Accordion */}
                <div className="rounded-xl bg-white border border-[#E8E3DA] overflow-hidden shadow-2xs">
                  <div className="flex items-center justify-between p-3">
                    <Link
                      href="/paket-umroh"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="font-bold text-sm text-[#0F172A] hover:text-[#084234] flex items-center gap-2"
                    >
                      <span>Paket Umroh Reguler</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full font-bold bg-amber-100 text-amber-900 border border-amber-200">
                        11 Kota
                      </span>
                    </Link>
                    <button
                      type="button"
                      onClick={() => setIsMobileCitiesOpen(!isMobileCitiesOpen)}
                      className="p-1 rounded-lg hover:bg-slate-100 text-slate-500 transition-colors cursor-pointer"
                      aria-label="Buka daftar kota keberangkatan"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isMobileCitiesOpen ? "rotate-180 text-[#084234]" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* 11 Kota Sub-List Accordion */}
                  {isMobileCitiesOpen && (
                    <div className="px-3 pb-3 pt-1 border-t border-slate-100 bg-[#FAF8F5]/80 animate-in slide-in-from-top-1 duration-150">
                      <div className="text-[10px] text-slate-500 font-semibold mb-2">
                        Penerbangan Langsung Pesawat Charter:
                      </div>
                      <div className="grid grid-cols-2 gap-1.5">
                        {cityDropdown.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-white border border-slate-200/70 hover:border-[#084234] text-xs font-medium text-slate-700 hover:text-[#084234] transition-colors"
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
                        className="mt-2.5 block text-center text-xs font-bold text-[#084234] hover:underline pt-1"
                      >
                        Lihat Semua 11 Kota Embarkasi →
                      </Link>
                    </div>
                  )}
                </div>

                {/* Umroh Plus */}
                <Link
                  href="/umroh-plus"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#E8E3DA] hover:border-[#084234] transition-colors shadow-2xs"
                >
                  <div className="flex items-center gap-2.5">
                    <Globe className="w-4 h-4 text-[#C5A059]" />
                    <span className="font-bold text-sm text-[#0F172A]">Umroh Plus Wisata Halal</span>
                  </div>
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full font-bold bg-emerald-100 text-emerald-900 border border-emerald-200">
                    5 Rute
                  </span>
                </Link>

                {/* Haji Khusus Furoda */}
                <Link
                  href="/haji-khusus-furoda"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-white to-[#084234]/5 border border-[#C5A059]/40 hover:border-[#C5A059] transition-colors shadow-2xs"
                >
                  <div className="flex items-center gap-2.5">
                    <Award className="w-4 h-4 text-[#C5A059]" />
                    <span className="font-bold text-sm text-[#0F172A]">Haji Khusus &amp; Furoda</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-[#084234]/10 text-[#084234] border border-[#084234]/20">
                    Langsung Berangkat
                  </span>
                </Link>
              </div>

              {/* Group 2: Layanan & Fasilitas */}
              <div className="space-y-1.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#9B7832] px-2 mb-1.5 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Layanan &amp; Jaringan</span>
                </div>

                <Link
                  href="/kantor-cabang"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#E8E3DA] hover:border-[#084234] transition-colors text-sm shadow-2xs"
                >
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-[#084234]" />
                    <span className="font-semibold text-slate-800">Direktori 26 Cabang Resmi</span>
                  </div>
                  <span className="text-xs font-bold text-[#084234] font-mono">Fisik</span>
                </Link>

                <Link
                  href="/pembiayaan-syariah"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#E8E3DA] hover:border-[#084234] transition-colors text-sm shadow-2xs"
                >
                  <span className="font-semibold text-slate-800">Simulasi Cicilan Syariah</span>
                  <span className="text-[10px] text-amber-800 font-bold bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                    AMITRA / BSI
                  </span>
                </Link>

                <Link
                  href="/kemitraan-dgi"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#E8E3DA] hover:border-[#084234] transition-colors text-sm shadow-2xs"
                >
                  <span className="font-semibold text-slate-800">Peluang Kemitraan DGi</span>
                  <span className="text-[10px] text-emerald-800 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                    Non-MLM
                  </span>
                </Link>
              </div>

              {/* Group 3: Kredensial & Edukasi */}
              <div className="space-y-1.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#9B7832] px-2 mb-1.5 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Kredensial &amp; Edukasi</span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <Link
                    href="/tentang-kami"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2.5 rounded-xl bg-white border border-[#E8E3DA] text-center hover:border-[#084234] transition-colors shadow-2xs"
                  >
                    <div className="text-xs font-bold text-slate-800">Tentang</div>
                    <div className="text-[10px] text-[#C5A059] font-medium">Legalitas</div>
                  </Link>
                  <Link
                    href="/testimoni"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2.5 rounded-xl bg-white border border-[#E8E3DA] text-center hover:border-[#084234] transition-colors shadow-2xs"
                  >
                    <div className="text-xs font-bold text-slate-800">Testimoni</div>
                    <div className="text-[10px] text-[#C5A059] font-medium">Jemaah</div>
                  </Link>
                  <Link
                    href="/artikel"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2.5 rounded-xl bg-white border border-[#E8E3DA] text-center hover:border-[#084234] transition-colors shadow-2xs"
                  >
                    <div className="text-xs font-bold text-slate-800">Artikel</div>
                    <div className="text-[10px] text-[#C5A059] font-medium">400+ Info</div>
                  </Link>
                </div>
              </div>

              {/* Quick Contact & Verification Card */}
              <div className="p-4 rounded-2xl bg-[#04261E] text-white space-y-3 shadow-lg">
                <div className="flex items-center gap-2 text-xs font-bold text-[#E6CA65]">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>PPIU 137/2020 • Akreditasi A</span>
                </div>
                <div className="text-[11px] text-slate-300 leading-relaxed">
                  Kantor Pusat: Jl. Malaka Merah No.7/6, Pondok Kopi, Duren Sawit, Jakarta Timur
                </div>
                <div className="pt-1 flex flex-col gap-2">
                  <a
                    href="https://wa.me/6285607179735?text=Assalamu%27alaikum%20Samira%20Travel,%20saya%20ingin%20konsultasi%20paket%20umrah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#15803D] hover:bg-[#166534] text-white font-bold text-xs shadow-md active:scale-98 transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-white shrink-0" />
                    <span>Chat CS WhatsApp Resmi</span>
                  </a>
                  <a
                    href="tel:085607179735"
                    className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/15 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#E6CA65] shrink-0" />
                    <span>Hotline: 0856-0717-9735</span>
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
