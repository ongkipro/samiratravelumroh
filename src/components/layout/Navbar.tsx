"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Phone,
  Menu,
  X,
  Sparkles,
  ChevronDown,
  ChevronRight,
  Search,
  MapPin,
  Plane,
  Compass,
  Building2,
} from "lucide-react";
import { GlobalSearchModal } from "./GlobalSearchModal";

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPaketDropdownOpen, setIsPaketDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const mainNavLinks = [
    { label: "Paket Umroh", href: "/paket-umroh", hasDropdown: true },
    { label: "Umroh Plus", href: "/umroh-plus" },
    { label: "Haji Furoda", href: "/haji-khusus-furoda", badge: "Tanpa Antre" },
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
      <header className="sticky top-0 z-40 w-full bg-[#FAF8F5]/90 backdrop-blur-xl border-b border-[#E8E3DA]/80 transition-all">
        {/* Top Banner Bar - Authority Credentials */}
        <div className="bg-[#04261E] text-white py-1.5 px-4 text-xs font-medium">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-2 text-[11px] sm:text-xs truncate">
              <span className="inline-flex items-center gap-1 text-[#C5A059] font-bold">
                <Sparkles className="w-3 h-3" /> Peringkat #1 Nasional SISKOPATUH
              </span>
              <span className="text-white/30 hidden sm:inline">•</span>
              <span className="hidden sm:inline text-emerald-100/80">
                Izin Kemenag RI (PPIU No. 137/2020 & PIHK 2022) • Akreditasi A
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs text-slate-300">
              <a
                href="tel:085607179735"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Phone className="w-3 h-3 text-[#C5A059]" />
                <span className="font-semibold text-white">0856-0717-9735</span>
              </a>
              <span className="hidden md:inline text-white/20">|</span>
              <Link
                href="/tentang-kami"
                className="hidden md:inline hover:text-white text-[11px] text-emerald-100/90 transition-colors"
              >
                Legalitas & Rekor
              </Link>
            </div>
          </div>
        </div>

        {/* Main Command Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0 py-1">
              <Image
                src="/images/logo-samira-travel.png"
                alt="Samira Travel — Sahabat Umrah Keluarga Anda"
                width={160}
                height={40}
                style={{ width: "auto", height: "auto" }}
                className="h-9 sm:h-10 object-contain"
                priority
                loading="eager"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1">
              {mainNavLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => link.hasDropdown && setIsPaketDropdownOpen(true)}
                    onMouseLeave={() => link.hasDropdown && setIsPaketDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`inline-flex items-center gap-1 px-3 py-2 text-xs xl:text-sm font-semibold rounded-xl transition-all ${
                        isActive
                          ? "bg-[#084234]/10 text-[#084234] font-bold"
                          : "text-[#0F172A] hover:text-[#084234] hover:bg-[#084234]/5"
                      }`}
                    >
                      <span>{link.label}</span>
                      {link.badge && (
                        <span className="text-[10px] px-1.5 py-0.2 rounded-full font-bold bg-amber-100 text-amber-900 border border-amber-300">
                          {link.badge}
                        </span>
                      )}
                      {link.hasDropdown && (
                        <ChevronDown className={`w-3.5 h-3.5 ml-0.5 opacity-60 transition-transform ${isPaketDropdownOpen ? "rotate-180" : ""}`} />
                      )}
                    </Link>

                    {/* Visual Mega Dropdown Popover */}
                    {link.hasDropdown && isPaketDropdownOpen && (
                      <div className="absolute top-full left-0 w-[540px] p-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-[#E8E3DA] z-50 animate-in fade-in slide-in-from-top-2 duration-150 grid grid-cols-12 gap-4">
                        {/* Column 1: 11 Direct Embarkation Cities */}
                        <div className="col-span-7 pr-3 border-r border-[#E8E3DA]">
                          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
                            <span className="text-[11px] font-bold text-[#084234] uppercase tracking-wider flex items-center gap-1">
                              <Plane className="w-3 h-3 text-[#C5A059]" /> 11 Embarkasi Langsung
                            </span>
                            <span className="text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-semibold">
                              Charter A330
                            </span>
                          </div>

                          <div className="grid grid-cols-2 gap-1.5">
                            {cityDropdown.map((c) => (
                              <Link
                                key={c.href}
                                href={c.href}
                                className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-700 hover:text-[#084234] hover:bg-[#FAF8F5] transition-colors group"
                              >
                                <span className="group-hover:translate-x-0.5 transition-transform">{c.name}</span>
                                <span className="text-[10px] text-slate-400 font-mono">{c.code}</span>
                              </Link>
                            ))}
                          </div>

                          <div className="pt-2.5 mt-2 border-t border-slate-100">
                            <Link
                              href="/paket-umroh"
                              className="text-xs font-bold text-[#084234] hover:underline flex items-center justify-between"
                            >
                              <span>Lihat Seluruh Kalender Jadwal</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>

                        {/* Column 2: Featured Visual Cards */}
                        <div className="col-span-5 space-y-2.5">
                          <span className="text-[11px] font-bold text-[#C5A059] uppercase tracking-wider block">
                            Program Spesial
                          </span>

                          <Link
                            href="/umroh-plus/thaif"
                            className="block p-2 rounded-xl bg-[#FAF8F5] hover:bg-emerald-50/60 border border-[#E8E3DA] transition-all group"
                          >
                            <div className="relative w-full h-16 rounded-lg overflow-hidden mb-1.5">
                              <Image
                                src="/images/dest_umroh_plus_thaif.jpg"
                                alt="Umroh Plus Ta'if"
                                fill
                                sizes="200px"
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div className="text-xs font-bold text-[#0F172A] group-hover:text-[#084234]">
                              Umroh Plus Ta&apos;if
                            </div>
                            <div className="text-[11px] text-slate-500">Mulai Rp 29 Jt • 12 Hari</div>
                          </Link>

                          <Link
                            href="/haji-khusus-furoda"
                            className="block p-2 rounded-xl bg-[#FAF8F5] hover:bg-emerald-50/60 border border-[#E8E3DA] transition-all group"
                          >
                            <div className="text-xs font-bold text-[#0F172A] group-hover:text-[#084234] flex items-center justify-between">
                              <span>Haji Khusus Furoda</span>
                              <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-100 text-amber-900 font-bold">2026</span>
                            </div>
                            <div className="text-[11px] text-slate-500">USD 17.000 • Tanpa Antre</div>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Right Tools: Spotlight Quick Search & Primary CTA */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Quick Search Button (Desktop) */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-[#E8E3DA] text-xs text-slate-500 hover:text-slate-800 hover:border-slate-300 shadow-sm transition-all"
                aria-label="Cari jadwal dan paket"
              >
                <Search className="w-3.5 h-3.5 text-[#084234]" />
                <span className="font-normal">Cari jadwal, kota...</span>
                <kbd className="hidden xl:inline-block text-[10px] px-1.5 py-0.2 bg-slate-100 border border-slate-200 rounded font-mono text-slate-400">
                  ⌘K
                </kbd>
              </button>

              {/* Quick Search Icon (Mobile) */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Buka pencarian cepat"
              >
                <Search className="w-5 h-5 text-[#084234]" />
              </button>

              {/* Primary Header Action */}
              <Link
                href="/paket-umroh"
                className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-xl bg-[#084234] hover:bg-[#04261E] text-white text-xs font-bold shadow-sm transition-all active:scale-[0.98]"
              >
                <span>Pilih Jadwal</span>
              </Link>

              {/* Mobile Hamburger Drawer Trigger */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label={isMobileMenuOpen ? "Tutup menu" : "Buka menu navigasi"}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-[#084234]" />
                ) : (
                  <Menu className="w-6 h-6 text-[#084234]" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E8E3DA] bg-white px-4 pt-3 pb-8 space-y-2.5 max-h-[82vh] overflow-y-auto animate-in slide-in-from-top-2 duration-200">
            {mainNavLinks.map((link) => (
              <div key={link.href} className="border-b border-slate-100 pb-2">
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 text-sm font-bold text-[#0F172A] hover:text-[#084234]"
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-amber-100 text-amber-900 border border-amber-300">
                      {link.badge}
                    </span>
                  )}
                </Link>

                {link.hasDropdown && (
                  <div className="grid grid-cols-2 gap-1.5 pt-1 pb-1 pl-2">
                    {cityDropdown.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-xs text-slate-600 hover:text-[#084234] py-1.5 px-2.5 rounded-lg bg-[#FAF8F5] font-medium"
                      >
                        {c.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-3 space-y-2">
              <Link
                href="/pembiayaan-syariah"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-xs font-semibold text-slate-600 hover:text-[#084234] py-1"
              >
                Simulasi Cicilan Syariah (AMITRA / BSI)
              </Link>
              <Link
                href="/kemitraan-dgi"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-xs font-semibold text-slate-600 hover:text-[#084234] py-1"
              >
                Peluang Kemitraan Syiar DGi
              </Link>
            </div>

            <div className="pt-4">
              <Link
                href="/paket-umroh"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#084234] text-white font-bold text-sm shadow-md"
              >
                <span>Lihat Semua Jadwal 11 Kota</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Global Spotlight Search Modal */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
