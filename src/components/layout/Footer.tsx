import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { CanopyPattern } from "@/components/decorations/CanopyPattern";
import { 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  Award, 
  Compass, 
  Globe, 
  Wallet, 
  Building2, 
  Users, 
  BookOpen, 
  HeartHandshake, 
  ChevronRight
} from "lucide-react";

export function Footer() {
  const cities = [
    { name: "Jakarta", slug: "jakarta" },
    { name: "Surabaya", slug: "surabaya" },
    { name: "Medan", slug: "medan" },
    { name: "Makassar", slug: "makassar" },
    { name: "Palembang", slug: "palembang" },
    { name: "Padang", slug: "padang" },
    { name: "Pontianak", slug: "pontianak" },
    { name: "Aceh", slug: "aceh" },
    { name: "Denpasar", slug: "denpasar" },
    { name: "Batam", slug: "batam" },
    { name: "Pekanbaru", slug: "pekanbaru" },
  ];

  return (
    <footer id="main-footer" className="relative overflow-hidden bg-[#031F19] text-white border-t border-[#084234]/80 pb-20 sm:pb-0">
      {/* Background Ambient Islamic Ornamentation & Watermark Text */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0" aria-hidden="true">
        {/* Radial Sanctuary Glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-radial from-[#C5A059]/12 via-[#084234]/35 to-transparent blur-3xl" />

        {/* Large Islamic Calligraphy Watermark Text ("Labbaikallahumma Labbaik") */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-[6rem] sm:text-[9rem] lg:text-[13rem] font-arabic text-[#C5A059]/[0.04] leading-none tracking-widest pointer-events-none select-none" dir="rtl">
          لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ
        </div>

        {/* Large Background Typography Watermark: SAMIRA TRAVEL & Arabic Script */}
        <div className="absolute -bottom-6 sm:-bottom-10 right-0 sm:right-6 flex flex-col items-end pointer-events-none select-none overflow-hidden z-0">
          <div 
            className="whitespace-nowrap font-arabic font-bold text-[#C5A059]/[0.06] text-[4rem] sm:text-[7.5rem] lg:text-[10.5rem] leading-none tracking-normal"
            dir="rtl"
            lang="ar"
          >
            سَمِيرَا لِلسِّيَاحَةِ وَالسَّفَر
          </div>
          <div 
            className="whitespace-nowrap font-playfair font-black text-white/[0.045] text-[3.2rem] sm:text-[6rem] lg:text-[8.5rem] leading-none tracking-[0.2em] -mt-3 sm:-mt-6"
          >
            SAMIRA TRAVEL
          </div>
        </div>

        {/* Islamic Geometric Rosette Patterns (CanopyPattern) */}
        <div className="absolute -top-24 -right-24 rotate-12">
          <CanopyPattern size={520} opacity={0.045} />
        </div>
        <div className="absolute -bottom-36 -left-24 -rotate-12">
          <CanopyPattern size={480} opacity={0.035} />
        </div>

        {/* Subtle Islamic Arch Crest Line at Top */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent" />
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.05fr_1.15fr] gap-8 lg:gap-6 xl:gap-8">
          {/* Col 1: Brand Profile & Legal Entity */}
          <div className="space-y-4">
            <Link href="/" className="inline-block" aria-label="Samira Travel Beranda">
              <Image
                src="/images/logo-samira-travel-dark.webp"
                alt="Samira Travel - Biro Perjalanan Umrah & Haji Khusus Resmi Kemenag RI"
                width={180}
                height={60}
                className="h-11 sm:h-12 w-auto object-contain"
              />
            </Link>

            <p className="text-[13px] sm:text-sm text-slate-200 leading-relaxed max-w-sm font-normal">
              PT Samira Ali Wisata (Samira Travel) adalah Penyelenggara Perjalanan Ibadah Umrah (PPIU No. 137/2020) &amp; Penyelenggara Ibadah Haji Khusus (PIHK 2022) resmi Kementerian Agama RI dengan predikat Akreditasi A (Unggul).
            </p>

            <div className="space-y-3 text-[13px] sm:text-sm text-slate-100 pt-1">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-1" />
                <div className="leading-relaxed">
                  <span className="font-semibold text-white text-xs uppercase tracking-wider text-[#E6CA65] block">
                    Kantor Pusat:
                  </span>
                  <div className="text-slate-200">
                    Jl. Malaka Merah No.7/6, Pondok Kopi
                  </div>
                  <div className="text-slate-300">
                    Kec. Duren Sawit, Jakarta Timur
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span className="text-slate-200">
                  Hotline:{" "}
                  <a href="tel:085607179735" className="hover:underline font-bold text-[#E6CA65]">
                    0856-0717-9735
                  </a>{" "}
                  /{" "}
                  <a href="tel:02186909999" className="hover:underline font-medium text-slate-300">
                    (021) 8690-9999
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href="mailto:info@samiratravelumrohhaji.com" className="text-slate-200 hover:text-white transition-colors text-xs sm:text-[13px] break-all">
                  info@samiratravelumrohhaji.com
                </a>
              </div>
            </div>

            {/* Media Sosial & Layanan Resmi (Data Terverifikasi dari Markdown) */}
            <div className="pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#E6CA65] mb-2.5">
                Layanan &amp; Kanal Resmi
              </div>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://wa.me/6285607179735"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Hotline Samira Travel"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C5A059]/30 border border-white/15 hover:border-[#C5A059]/60 flex items-center justify-center text-slate-100 hover:text-white transition-all shadow-sm"
                  title="WhatsApp Hotline: 0856-0717-9735"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.youtube.com/@samiratravelofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube Channel Resmi Samira Travel Official"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C5A059]/30 border border-white/15 hover:border-[#C5A059]/60 flex items-center justify-center text-slate-100 hover:text-white transition-all shadow-sm"
                  title="YouTube: Samira Travel Official"
                >
                  <YouTubeIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://samiratravelumrohhaji.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Portal Website Resmi Samira Travel"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C5A059]/30 border border-white/15 hover:border-[#C5A059]/60 flex items-center justify-center text-slate-100 hover:text-white transition-all shadow-sm"
                  title="Website Resmi: samiratravelumrohhaji.com"
                >
                  <Globe className="w-4 h-4" />
                </a>
                <a
                  href="tel:085607179735"
                  aria-label="Telepon Hotline Samira Travel"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C5A059]/30 border border-white/15 hover:border-[#C5A059]/60 flex items-center justify-center text-slate-100 hover:text-white transition-all shadow-sm"
                  title="Telepon Hotline: 0856-0717-9735"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: 11 Embarkasi Links */}
          <div className="space-y-3.5">
            <h4 className="text-xs xl:text-sm font-bold text-[#E6CA65] uppercase tracking-wide flex items-center gap-2 border-b border-white/10 pb-1.5 whitespace-nowrap">
              <IslamicStarIcon className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
              <span className="whitespace-nowrap">11 Kota Keberangkatan</span>
            </h4>
            <ul className="space-y-2.5 text-[13px] sm:text-sm text-slate-200">
              {cities.slice(0, 6).map((c) => (
                <li key={c.slug}>
                  <Link href={`/paket-umroh/${c.slug}`} className="hover:text-white transition-colors flex items-center gap-2 group font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A059] group-hover:scale-110 shrink-0 transition-transform" />
                    <span>Paket Umroh {c.name}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-1.5">
                <Link href="/paket-umroh" className="text-[#E6CA65] font-bold hover:underline inline-flex items-center gap-1.5 text-[13px] sm:text-sm">
                  <span>Lihat Semua 11 Kota</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Programs & Secondary Navigation */}
          <div className="space-y-3.5">
            <h4 className="text-xs xl:text-sm font-bold text-[#E6CA65] uppercase tracking-wide flex items-center gap-2 border-b border-white/10 pb-1.5 whitespace-nowrap">
              <IslamicStarIcon className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
              <span className="whitespace-nowrap">Program &amp; Layanan</span>
            </h4>
            <ul className="space-y-2.5 text-[13px] sm:text-sm text-slate-200 font-medium">
              <li>
                <Link href="/haji-khusus-furoda" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <Compass className="w-4 h-4 text-[#C5A059] group-hover:text-white shrink-0 transition-colors" />
                  <span>Haji Khusus &amp; Furoda</span>
                </Link>
              </li>
              <li>
                <Link href="/umroh-plus" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <Globe className="w-4 h-4 text-[#C5A059] group-hover:text-white shrink-0 transition-colors" />
                  <span>Umroh Plus Wisata Halal</span>
                </Link>
              </li>
              <li>
                <Link href="/pembiayaan-syariah" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <Wallet className="w-4 h-4 text-[#C5A059] group-hover:text-white shrink-0 transition-colors" />
                  <span>Cicilan Syariah AMITRA / BSI</span>
                </Link>
              </li>
              <li>
                <Link href="/kantor-cabang" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <Building2 className="w-4 h-4 text-[#C5A059] group-hover:text-white shrink-0 transition-colors" />
                  <span>Direktori 26 Cabang Resmi</span>
                </Link>
              </li>
              <li>
                <Link href="/kemitraan-dgi" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <Users className="w-4 h-4 text-[#C5A059] group-hover:text-white shrink-0 transition-colors" />
                  <span>Kemitraan DGi (Non-MLM)</span>
                </Link>
              </li>
              <li>
                <Link href="/artikel" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <BookOpen className="w-4 h-4 text-[#C5A059] group-hover:text-white shrink-0 transition-colors" />
                  <span>400+ Panduan Edukasi</span>
                </Link>
              </li>
              <li>
                <Link href="/testimoni" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <HeartHandshake className="w-4 h-4 text-[#C5A059] group-hover:text-white shrink-0 transition-colors" />
                  <span>Testimoni Jemaah</span>
                </Link>
              </li>
              <li>
                <Link href="/tentang-kami" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059] group-hover:text-white shrink-0 transition-colors" />
                  <span>Profil &amp; Legalitas Resmi</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal Credentials & Prestasi */}
          <div className="space-y-3.5">
            <h4 className="text-xs xl:text-sm font-bold text-[#E6CA65] uppercase tracking-wide flex items-center gap-2 border-b border-white/10 pb-1.5 whitespace-nowrap">
              <IslamicStarIcon className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
              <span className="whitespace-nowrap">Rekor &amp; Kredensial</span>
            </h4>
            <ul className="space-y-3 text-[13px] sm:text-sm text-slate-200">
              <li className="flex items-start gap-2.5 p-3 rounded-xl bg-[#04261E]/90 border border-[#C5A059]/30 hover:border-[#C5A059]/60 transition-colors shadow-sm">
                <Award className="w-4 h-4 text-[#E6CA65] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white leading-snug">Guinness World Records</div>
                  <div className="text-xs text-[#E6CA65] mt-0.5">Jamuan Umrah Terbesar (Jeddah)</div>
                </div>
              </li>
              <li className="flex items-start gap-2.5 p-3 rounded-xl bg-[#04261E]/90 border border-[#C5A059]/30 hover:border-[#C5A059]/60 transition-colors shadow-sm">
                <Award className="w-4 h-4 text-[#E6CA65] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white leading-snug">3x Rekor MURI Nasional</div>
                  <div className="text-xs text-[#E6CA65] mt-0.5">29.171 Jemaah Terbanyak 2024</div>
                </div>
              </li>
              <li className="flex items-start gap-2.5 p-3 rounded-xl bg-[#04261E]/90 border border-[#C5A059]/30 hover:border-[#C5A059]/60 transition-colors shadow-sm">
                <Award className="w-4 h-4 text-[#E6CA65] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white leading-snug">Piala APSI 2026 by tvOne</div>
                  <div className="text-xs text-[#E6CA65] mt-0.5">Biro Umrah Berkinerja Terbaik</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Trust Endorsement */}
        <div className="pt-8 mt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] sm:text-sm text-slate-200">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} PT Samira Ali Wisata (Samira Travel). Seluruh Hak Cipta Dilindungi.</span>
            <span className="hidden sm:inline text-white/30">|</span>
            <span className="text-[#E6CA65] font-bold">Terdaftar di SISKOPATUH Kemenag RI</span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/tentang-kami" className="hover:text-white text-slate-200 transition-colors font-medium">Tentang Kami</Link>
            <span className="text-white/30">/</span>
            <Link href="/testimoni" className="hover:text-white text-slate-200 transition-colors font-medium">Testimoni</Link>
            <span className="text-white/30">/</span>
            <Link href="/kantor-cabang" className="hover:text-white text-slate-200 transition-colors font-medium">Cabang Resmi</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

{/* Micro SVG Icons */}
function IslamicStarIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2l2.4 3.6L18 4l.4 4.3 4 1.7-2 3.8 2 3.8-4 1.7-.4 4.3-3.6-1.6L12 22l-2.4-3.6L6 20l-.4-4.3-4-1.7 2-3.8-2-3.8 4-1.7.4-4.3 3.6 1.6L12 2z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </svg>
  );
}

function YouTubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}
