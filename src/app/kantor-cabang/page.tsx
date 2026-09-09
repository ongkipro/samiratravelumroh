import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllBranches } from "@/lib/data-service";
import { siteConfig } from "@/data/site-config";
import { buildBreadcrumbSchema } from "@/lib/seo";
import { BranchDirectoryClient } from "@/components/branches/BranchDirectoryClient";
import { 
  Building2, 
  ShieldCheck, 
  MapPin, 
  CheckCircle2, 
  Phone, 
  MessageCircle,
  FileCheck,
  Briefcase,
  PlaneTakeoff,
  Users2,
  Lock,
  ChevronRight,
  ExternalLink
} from "lucide-react";

export const metadata: Metadata = {
  title: "Direktori 26 Kantor Cabang Resmi - Alamat & Kontak Se-Indonesia",
  description:
    "Alamat dan kontak 26 kantor cabang resmi Samira Travel di Sumatera, Jawa, Kalimantan, Sulawesi, dan Bali. Layanan tatap muka, bimbingan berkas, & manasik.",
  alternates: {
    canonical: "https://samiratravelumrohhaji.com/kantor-cabang",
  },
  openGraph: {
    title: "Direktori 26 Kantor Cabang Resmi - Alamat & Kontak Se-Indonesia",
    description: "Jaringan 26 kantor cabang fisik resmi Samira Travel di seluruh nusantara. Konsultasi langsung, bimbingan paspor, dan pengambilan koper perlengkapan.",
    url: "https://samiratravelumrohhaji.com/kantor-cabang",
    images: [
      {
        url: "/images/branch_sanctuary_network.jpg",
        width: 1200,
        height: 630,
        alt: "Jaringan Kantor Cabang Resmi Samira Travel Se-Indonesia",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Direktori 26 Kantor Cabang Resmi - Alamat & Kontak Se-Indonesia",
    description: "Jaringan 26 kantor cabang fisik resmi Samira Travel di seluruh nusantara. Konsultasi langsung, bimbingan paspor, dan pengambilan koper perlengkapan.",
    images: ["/images/branch_sanctuary_network.jpg"],
  },
};

export default async function KantorCabangIndexPage() {
  const allBranches = await getAllBranches();

  const breadcrumbs = buildBreadcrumbSchema([
    { name: "Beranda", item: "/" },
    { name: "Kantor Cabang", item: "/kantor-cabang" },
  ]);

  const branchesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Daftar Kantor Cabang Resmi PT Samira Ali Wisata",
    description: "Direktori 26 kantor cabang perwakilan resmi Samira Travel di seluruh Indonesia.",
    numberOfItems: allBranches.length,
    itemListElement: allBranches.map((b, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "TravelAgency",
        name: b.name,
        address: {
          "@type": "PostalAddress",
          streetAddress: b.address,
          addressLocality: b.city,
          addressRegion: b.province,
          addressCountry: "ID",
        },
        telephone: b.phone,
        url: `https://samiratravelumrohhaji.com/kantor-cabang/${b.slug}`,
      },
    })),
  };

  const branchServices = [
    {
      icon: Users2,
      title: "Konsultasi & Pendaftaran Tatap Muka",
      desc: "Diskusikan pilihan paket umrah reguler, umrah plus, atau haji furoda bersama staf konsultan berpengalaman di kantor cabang kota Anda.",
    },
    {
      icon: FileCheck,
      title: "Bimbingan Paspor & Verifikasi Dokumen",
      desc: "Bantuan pengecekan berkas KTP, KK, dan surat rekomendasi paspor Kemenag agar proses terdaftar di SISKOPATUH berjalan lancar.",
    },
    {
      icon: Briefcase,
      title: "Penyerahan Koper & Perlengkapan Resmi",
      desc: "Ambil langsung koper fiber luxury, kain ihram, mukena, seragam batik, dan tas paspor resmi Samira Travel sebelum jadwal manasik.",
    },
    {
      icon: PlaneTakeoff,
      title: "Koordinasi Keberangkatan Bandara",
      desc: "Koordinasi keberangkatan rombongan jemaah dari bandara daerah menuju embarkasi utama (Soekarno-Hatta, Juanda, Kualanamu, dll).",
    },
  ];

  return (
    <>
      <script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        id="branches-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(branchesSchema) }}
      />

      <div className="bg-[#FAF8F5] min-h-screen pb-24">
        {/* Cinematic Sanctuary Hero */}
        <section className="relative overflow-hidden bg-[#04261E] text-white pt-24 sm:pt-28 pb-20 md:pb-28">
          {/* High-Resolution Photographic Architectural Background (1376x768, 16:9) */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/branch_sanctuary_network.jpg"
              alt="Jaringan Kantor Cabang Samira Travel Nusantara"
              fill
              priority
              quality={90}
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Luminous Multilayer Directional Vignette */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#04261E]/95 via-[#04261E]/80 to-[#04261E]/55" />
            <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#04261E] to-transparent" />
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#04261E]/60 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb Nav */}
            <nav className="flex items-center gap-2 text-xs text-emerald-200/80 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
              <ChevronRight className="w-3.5 h-3.5 text-emerald-300/60" />
              <span className="text-white font-medium">Kantor Cabang</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#C5A059] uppercase">
                  <Building2 className="w-4 h-4" />
                  <span>Jaringan Layanan Nasional • 26 Kantor Cabang Fisik Se-Indonesia</span>
                </span>

                <h1 className="font-playfair text-3xl sm:text-5xl lg:text-6xl font-bold text-[#FAF8F5] leading-[1.15] drop-shadow-md">
                  Jaringan Kantor Cabang Resmi Samira Travel
                </h1>

                <p className="text-sm sm:text-base md:text-lg text-emerald-100/90 max-w-2xl leading-relaxed font-normal drop-shadow">
                  Hadir lebih dekat dengan keluarga Anda di 5 pulau besar Indonesia. Dapatkan pendampingan pendaftaran langsung secara tatap muka, konsultasi jadwal keberangkatan charter flight, dan pengambilan koper resmi bersama konsultan profesional kami.
                </p>

                {/* Micro Assurance Indicators */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-xs sm:text-sm text-emerald-100/90 font-medium">
                  <span className="inline-flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
                    26 Kantor Fisik Berizin Resmi
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                    Terverifikasi SISKOPATUH Kemenag RI
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-[#C5A059] shrink-0" />
                    Pengambilan Koper & Perlengkapan
                  </span>
                </div>
              </div>

              {/* Head Office Spotlight Card in Hero (Desktop) */}
              <div className="lg:col-span-4 hidden lg:block">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 text-white space-y-3.5 shadow-xl">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase font-bold tracking-wider text-[#C5A059]">Kantor Pusat Samira Travel</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/25 text-amber-200 border border-amber-400/30 font-semibold">
                      Graha Samira
                    </span>
                  </div>
                  <div className="space-y-2 text-xs text-slate-200">
                    <div className="font-semibold text-white text-sm">
                      {siteConfig.companyName}
                    </div>
                    <div className="text-slate-200 leading-relaxed text-xs">
                      <div>Jl. Malaka Merah No.7/6, Pondok Kopi</div>
                      <div className="text-slate-300">Kec. Duren Sawit, Jakarta Timur</div>
                    </div>
                    <div className="pt-2 border-t border-white/10 space-y-1 text-slate-200">
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                        <span>Hotline: {siteConfig.headOffice.phoneHotline[0]}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-300" />
                        <span>WhatsApp: +{siteConfig.headOffice.whatsappHotline}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Milestone Floating Summary Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-10 relative z-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-[#E8E3DA] shadow-lg shadow-black/5 flex flex-col justify-between group hover:border-[#C5A059]/60 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#084234] tabular-nums font-playfair">
                  26
                </span>
                <span className="p-2 rounded-xl bg-emerald-50 text-emerald-700">
                  <Building2 className="w-5 h-5" />
                </span>
              </div>
              <div className="mt-2">
                <div className="text-xs sm:text-sm font-bold text-slate-900">Kantor Cabang Fisik</div>
                <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Alamat Resmi Terverifikasi</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-[#E8E3DA] shadow-lg shadow-black/5 flex flex-col justify-between group hover:border-[#C5A059]/60 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#084234] tabular-nums font-playfair">
                  5
                </span>
                <span className="p-2 rounded-xl bg-amber-50 text-amber-700">
                  <MapPin className="w-5 h-5" />
                </span>
              </div>
              <div className="mt-2">
                <div className="text-xs sm:text-sm font-bold text-slate-900">Pulau Besar Indonesia</div>
                <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Sumatera s/d Sulawesi</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-[#E8E3DA] shadow-lg shadow-black/5 flex flex-col justify-between group hover:border-[#C5A059]/60 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#084234] tabular-nums font-playfair">
                  100%
                </span>
                <span className="p-2 rounded-xl bg-emerald-50 text-emerald-700">
                  <ShieldCheck className="w-5 h-5" />
                </span>
              </div>
              <div className="mt-2">
                <div className="text-xs sm:text-sm font-bold text-slate-900">Legalitas PPIU & PIHK</div>
                <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Izin Resmi Kemenag RI</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-[#E8E3DA] shadow-lg shadow-black/5 flex flex-col justify-between group hover:border-[#C5A059]/60 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#084234] tabular-nums font-playfair">
                  Tatap Muka
                </span>
                <span className="p-2 rounded-xl bg-slate-100 text-slate-700">
                  <Users2 className="w-5 h-5" />
                </span>
              </div>
              <div className="mt-2">
                <div className="text-xs sm:text-sm font-bold text-slate-900">Layanan Konsultasi Langsung</div>
                <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Kenyamanan & Kepercayaan</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 sm:mt-18 space-y-16">
          
          {/* Section: 4 Layanan Utama di Kantor Cabang */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E3DA] shadow-sm space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#084234]">
                Fasilitas & Pendampingan
              </span>
              <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#0F172A]">
                Layanan Terpadu di Kantor Cabang Samira Travel
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Setiap kantor cabang resmi Samira Travel siap melayani seluruh kebutuhan ibadah Anda dan keluarga dari awal pendaftaran hingga kepulangan.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {branchServices.map((srv, idx) => {
                const Icon = srv.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8E3DA] space-y-3 flex flex-col justify-between hover:border-[#084234] transition-colors group"
                  >
                    <div className="space-y-3">
                      <div className="p-2.5 rounded-xl bg-emerald-50 text-[#084234] w-fit group-hover:bg-[#084234] group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-sm text-[#0F172A] leading-snug">
                        {srv.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {srv.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Section: Interactive Directory Client with Instant Search & Region Filter */}
          <section id="direktori-cabang">
            <div className="mb-6 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                Pencarian Cepat Cabang Terdekat
              </span>
              <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#0F172A]">
                Pilih Kantor Cabang Berdasarkan Kota atau Pulau
              </h2>
            </div>

            <BranchDirectoryClient branches={allBranches} />
          </section>

          {/* Section: Head Office & Safety Notice */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E3DA] shadow-sm space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
                  <Building2 className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Kantor Pusat Jakarta Timur</span>
                </div>
                <h3 className="font-playfair text-2xl font-bold text-[#0F172A]">
                  Graha Samira Travel (Head Office)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                  Pusat koordinasi operasional seluruh cabang, perizinan visa Kementerian Agama RI, manajemen carter pesawat Saudia/Lion Air, dan bimbingan manasik nasional.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href={`https://wa.me/${siteConfig.headOffice.whatsappHotline}?text=${encodeURIComponent("Assalamu'alaikum Kantor Pusat Samira Travel, saya ingin menanyakan kantor cabang terdekat di wilayah saya.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#084234] hover:bg-[#04261E] text-white text-xs font-bold shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-300" />
                  <span>Chat Hotline Pusat</span>
                </a>
                <a
                  href="https://maps.google.com/?q=Samira+Travel+Pondok+Kopi+Jakarta+Timur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all"
                >
                  <ExternalLink className="w-4 h-4 text-[#084234]" />
                  <span>Google Maps Pusat</span>
                </a>
              </div>
            </div>

            {/* Anti Fraud Warning Callout */}
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 border border-amber-200 flex items-start gap-3.5 text-xs text-amber-950 leading-relaxed">
              <Lock className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold text-amber-900 block mb-0.5">
                  Prosedur Pembayaran Resmi di Seluruh Cabang:
                </strong>
                Demi keamanan jemaah, staf kantor cabang tidak diperkenankan menerima pembayaran melalui transfer ke rekening pribadi perorangan. Seluruh pembayaran uang muka (DP) maupun pelunasan wajib ditransfer langsung ke rekening giro resmi perusahaan atas nama <strong className="text-slate-900">PT SAMIRA ALI WISATA</strong>.
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
