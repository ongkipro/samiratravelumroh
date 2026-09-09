import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { buildBreadcrumbSchema } from "@/lib/seo";
import { OfficialBankAccountsCard } from "@/components/about/OfficialBankAccountsCard";
import { 
  Award, 
  ShieldCheck, 
  Building2, 
  Users, 
  CheckCircle2, 
  Camera,
  HeartHandshake,
  MapPin,
  ArrowRight,
  Phone,
  MessageCircle,
  Calendar,
  Plane,
  Hotel,
  FileCheck2,
  Quote,
  Clock,
  ExternalLink,
  ChevronRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Profil & Legalitas PT Samira Ali Wisata - Peringkat #1 Kemenag",
  description:
    "Profil resmi PT Samira Ali Wisata (Samira Travel). Izin PPIU No. 137/2020 resmi Kemenag RI, pemegang Guinness World Records, dan peraih 3 Rekor MURI.",
  alternates: {
    canonical: "https://samiratravelumrohhaji.com/tentang-kami",
  },
  openGraph: {
    title: "Profil & Legalitas PT Samira Ali Wisata - Peringkat #1 Kemenag",
    description: "Biro perjalanan umrah peringkat #1 nasional Kemenag RI dengan 29.171+ jemaah, pemegang Guinness World Records dan 3 Rekor MURI.",
    url: "https://samiratravelumrohhaji.com/tentang-kami",
    images: [
      {
        url: "/images/samira-travel-umroh-dan-haji-resmi-kemenag.webp",
        width: 1200,
        height: 630,
        alt: "Profil & Legalitas Resmi PT Samira Ali Wisata (Samira Travel)",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Profil & Legalitas PT Samira Ali Wisata - Peringkat #1 Kemenag",
    description: "Biro perjalanan umrah peringkat #1 nasional Kemenag RI dengan 29.171+ jemaah, pemegang Guinness World Records dan 3 Rekor MURI.",
    images: ["/images/samira-travel-umroh-dan-haji-resmi-kemenag.webp"],
  },
};

export default function TentangKamiPage() {
  const breadcrumbs = buildBreadcrumbSchema([
    { name: "Beranda", item: "/" },
    { name: "Tentang Kami", item: "/tentang-kami" },
  ]);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: siteConfig.companyName,
    alternateName: siteConfig.brandName,
    url: siteConfig.domain,
    logo: `${siteConfig.domain}/images/logo-samira-travel-dark.webp`,
    image: `${siteConfig.domain}/images/samira-travel-umroh-dan-haji-resmi-kemenag.webp`,
    description: "Penyelenggara Perjalanan Ibadah Umrah (PPIU) dan Haji Khusus (PIHK) resmi Kementerian Agama Republik Indonesia.",
    telephone: siteConfig.headOffice.phoneHotline[0],
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.headOffice.address,
      addressLocality: siteConfig.headOffice.city,
      addressRegion: siteConfig.headOffice.province,
      postalCode: siteConfig.headOffice.postalCode,
      addressCountry: "ID",
    },
    award: [
      `Guinness World Records - ${siteConfig.guinnessRecord.title} (${siteConfig.guinnessRecord.attendees.toLocaleString("id-ID")} jemaah)`,
      ...siteConfig.muriRecords.map((r) => `${r.title} - ${r.detail}`),
      "Piala APSI 2026 TVOne - Jemaah Terbanyak Nasional",
    ],
  };

  // Field documentation photos (native 2:1 aspect ratio: 1000x500 & 1600x800)
  const documentationMoments = [
    {
      src: "/images/dokumentasi-manasik-dan-pelepasan-jamaah-samira-travel-1.webp",
      caption: "Pelepasan Akbar Full Charter Flight",
      desc: "Ribuan jemaah Samira Travel berkumpul di Terminal 3 Bandara Soekarno-Hatta menuju Tanah Suci.",
    },
    {
      src: "/images/dokumentasi-manasik-dan-pelepasan-jamaah-samira-travel-2.webp",
      caption: "Bimbingan Manasik Teori & Praktik",
      desc: "Pembekalan komprehensif tata cara tawaf, sa'i, dan adab ziarah sesuai tuntunan sunnah Rasulullah SAW.",
    },
    {
      src: "/images/dokumentasi-manasik-dan-pelepasan-jamaah-samira-travel-3.webp",
      caption: "Pemberangkatan Jamaah Antar-Provinsi",
      desc: "Koordinasi terpadu 26 kantor cabang untuk memfasilitasi jemaah dari pelosok nusantara.",
    },
    {
      src: "/images/dokumentasi-manasik-dan-pelepasan-jamaah-samira-travel-4.webp",
      caption: "Kebersamaan Hangat di Pelataran Masjid",
      desc: "Pendampingan intensif muthawwif dan tour leader BNSP selama agenda ibadah dan ziarah suci.",
    },
    {
      src: "/images/dokumentasi-manasik-dan-pelepasan-jamaah-samira-travel-5.webp",
      caption: "Milad 1 Dekade & Syiar Akbar",
      desc: "Momen puncak penyerahan rekor dan silaturahmi akbar puluhan ribu alumni jemaah keluarga Samira.",
    },
    {
      src: "/images/dokumentasi-manasik-dan-pelepasan-jamaah-samira-travel-6.webp",
      caption: "Penyambutan Kembali di Tanah Air",
      desc: "Senyum syukur keluarga menyambut kedatangan jemaah yang kembali dengan predikat umrah maqbullah.",
    },
  ];

  const kemenagPrinciples = [
    {
      icon: ShieldCheck,
      number: "1",
      title: "Pasti Travel Berizin",
      desc: "Legalitas sah PPIU No. 137/2020 & PIHK 2022 dari Kementerian Agama RI dengan predikat Akreditasi A (Unggul).",
      guarantee: "Izin PPIU & PIHK Resmi",
    },
    {
      icon: Calendar,
      number: "2",
      title: "Pasti Jadwal Keberangkatan",
      desc: "Sistem Full Charter Flight memastikan kepastian tanggal terbang dan slot bandara sejak hari pertama pendaftaran.",
      guarantee: "Full Charter Flight PP",
    },
    {
      icon: Plane,
      number: "3",
      title: "Pasti Terbangnya",
      desc: "Penerbangan langsung (direct flight) ke Jeddah atau Madinah tanpa transit liar, tiket PP sudah diterbitkan di awal.",
      guarantee: "Direct Flight Lion Air & Saudia",
    },
    {
      icon: Hotel,
      number: "4",
      title: "Pasti Hotelnya",
      desc: "Akomodasi hotel bintang 5 ring 1 depan pelataran Ka'bah dan Masjid Nabawi telah terkonfirmasi sebelum jemaah berangkat.",
      guarantee: "Hotel Pelataran Terkonfirmasi",
    },
    {
      icon: FileCheck2,
      number: "5",
      title: "Pasti Visanya",
      desc: "E-Visa Umrah resmi diproses melalui sistem e-Hajj Kementerian Haji Saudi Arabia dan tersinkronisasi di SISKOPATUH.",
      guarantee: "Tersinkron di SISKOPATUH",
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
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <div className="bg-[#FAF8F5] min-h-screen pb-24">
        {/* Cinematic Sanctuary Hero */}
        <section className="relative overflow-hidden bg-[#04261E] text-white pt-24 sm:pt-28 pb-20 md:pb-28">
          {/* Photographic Background (1376x768, 16:9) */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/editorial_makkah_sanctuary_dawn.jpg"
              alt="Makkah Sanctuary Dawn Samira Travel"
              fill
              priority
              quality={90}
              sizes="100vw"
              className="object-cover object-[center_28%]"
            />
            {/* Luminous Multilayer Directional Vignette */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#04261E]/95 via-[#04261E]/80 to-[#04261E]/50" />
            <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#04261E] to-transparent" />
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#04261E]/60 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb nav */}
            <nav className="flex items-center gap-2 text-xs text-emerald-200/80 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
              <ChevronRight className="w-3.5 h-3.5 text-emerald-300/60" />
              <span className="text-white font-medium">Tentang Kami</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-xs border border-[#C5A059]/40 text-xs font-semibold tracking-wider text-[#C5A059] uppercase">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>Izin Resmi Kemenag RI (PPIU No. 137/2020 &amp; PIHK 2022)</span>
                </div>

                <h1 className="font-playfair text-3xl sm:text-5xl lg:text-6xl font-bold text-[#FAF8F5] leading-[1.15] drop-shadow-md">
                  Profil Resmi Samira Travel - Menemani Langkah Suci ke Baitullah
                </h1>

                <p className="text-sm sm:text-base md:text-lg text-emerald-100/90 max-w-2xl leading-relaxed font-normal">
                  Lahir dari ketulusan syiar dakwah, PT Samira Ali Wisata berkomitmen menghadirkan kepastian jadwal terbang, kenyamanan fasilitas hotel pelataran, dan bimbingan manasik berstandar BNSP.
                </p>

                {/* Key Assurances */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1 text-xs sm:text-sm text-emerald-100/90 font-medium">
                  <span className="inline-flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                    Full Charter Flight PP
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                    Akreditasi A Unggul Kemenag RI
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                    26 Kantor Cabang Nusantara
                  </span>
                </div>

                {/* Action CTAs */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="#kisah"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#C5A059] hover:bg-[#b08d47] text-xs sm:text-sm font-semibold text-[#04261E] transition-all shadow-md shadow-black/20"
                  >
                    <span>Profil &amp; Legalitas Resmi</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <Link
                    href="/kantor-cabang"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs sm:text-sm font-medium text-emerald-100 border border-white/20 transition-all backdrop-blur-xs"
                  >
                    <MapPin className="w-4 h-4 text-[#C5A059]" />
                    <span>26 Kantor Cabang</span>
                  </Link>
                </div>
              </div>

              {/* Official Credentials Stamp Card */}
              <div className="lg:col-span-4 hidden lg:block">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 text-white space-y-4 shadow-xl">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase font-bold tracking-wider text-[#C5A059]">Legalitas Perusahaan</span>
                    <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-500/25 text-emerald-200 border border-emerald-400/40 font-semibold">
                      Terverifikasi Kemenag
                    </span>
                  </div>
                  <div className="space-y-2.5 text-xs text-slate-200">
                    <div>
                      <div className="text-slate-400 text-[11px]">Nama Badan Hukum:</div>
                      <div className="font-semibold text-white">{siteConfig.companyName}</div>
                    </div>
                    <div>
                      <div className="text-slate-400 text-[11px]">Nomor Induk Berusaha (NIB):</div>
                      <div className="font-mono text-emerald-200">{siteConfig.nib}</div>
                    </div>
                    <div>
                      <div className="text-slate-400 text-[11px]">Izin PPIU Kemenag RI:</div>
                      <div className="font-medium text-white">{siteConfig.ppiuLicense}</div>
                    </div>
                    <div>
                      <div className="text-slate-400 text-[11px]">Izin PIHK (Haji Khusus):</div>
                      <div className="font-medium text-white">{siteConfig.pihkLicense}</div>
                    </div>
                    <div>
                      <div className="text-slate-400 text-[11px]">Sertifikasi Mutu Akreditasi:</div>
                      <div className="font-semibold text-[#C5A059]">{siteConfig.accreditation}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Milestone Statistics Cards (Floating Elevation) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-10 relative z-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-[#E8E3DA] shadow-lg shadow-black/5 flex flex-col justify-between group hover:border-[#C5A059]/60 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#084234] tabular-nums font-playfair">
                  29.171+
                </span>
                <span className="p-2 rounded-xl bg-emerald-50 text-emerald-700">
                  <Users className="w-5 h-5" />
                </span>
              </div>
              <div className="mt-2">
                <div className="text-xs sm:text-sm font-bold text-slate-900">Jemaah Terbanyak Nasional</div>
                <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Peringkat 1 SISKOPATUH Kemenag RI</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-[#E8E3DA] shadow-lg shadow-black/5 flex flex-col justify-between group hover:border-[#C5A059]/60 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#084234] tabular-nums font-playfair">
                  10.449
                </span>
                <span className="p-2 rounded-xl bg-amber-50 text-amber-700">
                  <GlobeIcon className="w-5 h-5" />
                </span>
              </div>
              <div className="mt-2">
                <div className="text-xs sm:text-sm font-bold text-slate-900">Guinness World Records</div>
                <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Outdoor Halal Dinner di Jeddah</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-[#E8E3DA] shadow-lg shadow-black/5 flex flex-col justify-between group hover:border-[#C5A059]/60 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#084234] tabular-nums font-playfair">
                  3x
                </span>
                <span className="p-2 rounded-xl bg-emerald-50 text-emerald-700">
                  <Award className="w-5 h-5" />
                </span>
              </div>
              <div className="mt-2">
                <div className="text-xs sm:text-sm font-bold text-slate-900">Rekor MURI Resmi</div>
                <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Pandemi, Talbiyah, & Tahunan</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-[#E8E3DA] shadow-lg shadow-black/5 flex flex-col justify-between group hover:border-[#C5A059]/60 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#084234] tabular-nums font-playfair">
                  26
                </span>
                <span className="p-2 rounded-xl bg-slate-100 text-slate-700">
                  <Building2 className="w-5 h-5" />
                </span>
              </div>
              <div className="mt-2">
                <div className="text-xs sm:text-sm font-bold text-slate-900">Kantor Cabang Fisik</div>
                <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Pelayanan Resmi se-Indonesia</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Body Flow */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 sm:mt-18 space-y-16">
          
          {/* Section 1: Kisah Perjalanan & Nilai Luhur Samira */}
          <section id="kisah" className="scroll-mt-24 bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E3DA] shadow-sm space-y-8">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                Sejarah & Komitmen Pelayanan
              </span>
              <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F172A] leading-tight">
                Lahir dari Ketulusan Dakwah, Tumbuh Menjadi Sahabat Ibadah Terpercaya
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-sm text-slate-700 leading-relaxed items-start">
              <div className="lg:col-span-7 space-y-4">
                <p>
                  <strong>PT Samira Ali Wisata (Samira Travel)</strong> lahir dari tekad tulus untuk menghadirkan perjalanan umrah dan haji yang aman, transparan, dan terbebas dari keraguan jadwal keberangkatan. Berawal dari komunitas syiar dakwah Baitullah DGi (Duta Generasi Impian) pada tahun 2014, Samira Travel bertransformasi menjadi Penyelenggara Perjalanan Ibadah Umrah (PPIU) berizin resmi Kementerian Agama RI No. 137 Tahun 2020 dan Penyelenggara Ibadah Haji Khusus (PIHK) tahun 2022.
                </p>
                <p>
                  Kami mengambil langkah terobosan dengan memelopori sistem <em>Full Charter Flight</em> bersama maskapai kelas dunia seperti Saudia Airlines dan Lion Air. Dengan sistem ini, seluruh kuota kursi pesawat dan hotel bintang lima di ring 1 pelataran Ka&apos;bah serta Masjid Nabawi telah kami amankan terlebih dahulu sebelum pendaftaran dibuka. Hal ini memberikan garansi kepastian 100% berangkat bagi setiap jemaah.
                </p>
                <p>
                  Lebih dari sekadar biro perjalanan komersial, Samira Travel mengusung visi syiar kekeluargaan yang menempatkan ketenteraman batin jemaah sebagai prioritas tertinggi. Melalui dedikasi tanpa henti, pada tahun 2024 Samira Travel dinobatkan oleh Kementerian Agama RI sebagai biro umrah dengan jemaah terbanyak nasional versi portal SISKOPATUH dengan memberangkatkan 29.171 jemaah.
                </p>
              </div>

              {/* 3 Core Values Cards */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8E3DA] space-y-2">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-emerald-100/70 text-[#084234]">
                      <Plane className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">Full Charter Flight</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Menghilangkan risiko penundaan dan pembatalan sepihak dengan menyewa armada pesawat secara penuh (direct flight) untuk kepastian jadwal berangkat.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8E3DA] space-y-2">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-amber-100/70 text-amber-900">
                      <HeartHandshake className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">Inisiatif &quot;Samira Care&quot;</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Pelayanan inklusif dan humanis yang ramah lansia, fasilitas kursi roda, serta pendampingan medis cuci darah (hemodialisis) selama di Tanah Suci.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8E3DA] space-y-2">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-emerald-100/70 text-[#084234]">
                      <Users className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">Muthawwif Bersertifikat BNSP</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Pembimbing ibadah alumni universitas Islam terkemuka Timur Tengah dan tour leader berlisensi resmi BNSP yang mendampingi jemaah dengan sabar.
                  </p>
                </div>
              </div>
            </div>

            {/* Leadership Profile */}
            <div className="pt-8 border-t border-slate-100">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-5">
                Dewan Pendiri & Pimpinan
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8E3DA] flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-[#084234] text-[#C5A059] flex items-center justify-center font-playfair font-bold text-base border border-[#C5A059]/40 shadow-xs shrink-0">
                          FW
                        </div>
                        <div>
                          <h3 className="font-bold text-base text-[#0F172A]">H. Fauzi Wahyu Muntoro</h3>
                          <div className="text-xs text-[#084234] font-semibold">Founder & Direktur Utama</div>
                        </div>
                      </div>
                      <Quote className="w-7 h-7 text-[#C5A059]/30 shrink-0" />
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed italic pt-1">
                      &quot;Ibadah ke Baitullah adalah panggilan jiwa. Tugas dan amanah kami adalah memastikan setiap jemaah dapat melangkah dengan tenang, terjamin kepastiannya, dan pulang membawa umrah yang maqbullah.&quot;
                    </p>
                  </div>
                  <div className="text-[11px] text-slate-400 pt-3 border-t border-slate-200/60">
                    Pelopor sistem syiar syariah non-MLM & tokoh peraih Guinness World Records.
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8E3DA] flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-[#084234] text-[#C5A059] flex items-center justify-center font-playfair font-bold text-base border border-[#C5A059]/40 shadow-xs shrink-0">
                          DL
                        </div>
                        <div>
                          <h3 className="font-bold text-base text-[#0F172A]">Hj. drg. Dini Lukitasari</h3>
                          <div className="text-xs text-[#084234] font-semibold">Co-Founder & Komisaris</div>
                        </div>
                      </div>
                      <Quote className="w-7 h-7 text-[#C5A059]/30 shrink-0" />
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed italic pt-1">
                      &quot;Kenyamanan fisik dan ketenteraman batin adalah hak setiap tamu Allah. Melalui Samira Care, kami memastikan orang tua, lansia, dan jemaah berkebutuhan khusus tetap dapat beribadah secara optimal.&quot;
                    </p>
                  </div>
                  <div className="text-[11px] text-slate-400 pt-3 border-t border-slate-200/60">
                    Penggagas inisiatif Samira Care & program ibadah inklusif ramah lansia.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Edukasi "5 Pasti Umrah" Kemenag RI */}
          <section id="pasti-umrah" className="scroll-mt-24 bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E3DA] shadow-sm space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#084234]">
                Standar Kepatuhan Regulasi
              </span>
              <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#0F172A]">
                Penerapan Prinsip 5 Pasti Umrah Kemenag RI
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Kementerian Agama RI mengimbau seluruh calon jemaah untuk memastikan 5 parameter perlindungan sebelum mendaftar. Di Samira Travel, seluruh parameter ini terjamin 100% dan transparan.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {kemenagPrinciples.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.number}
                    className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8E3DA] flex flex-col justify-between hover:border-[#084234]/50 hover:bg-white transition-all duration-200 group"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="w-7 h-7 rounded-lg bg-emerald-900/5 text-[#084234] flex items-center justify-center text-xs font-bold group-hover:bg-[#084234] group-hover:text-white transition-colors">
                          {item.number}
                        </span>
                        <div className="p-2 rounded-xl bg-emerald-50 text-[#084234] group-hover:bg-emerald-100 transition-colors">
                          <IconComponent className="w-4 h-4" />
                        </div>
                      </div>
                      <h3 className="font-bold text-sm text-[#0F172A] leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-200/60">
                      <span className="text-[11px] font-semibold text-[#084234] flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                        <span>{item.guarantee}</span>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Section 3: Rekor Dunia Guinness, Rekor MURI, & Prestasi Nasional */}
          <section id="prestasi" className="scroll-mt-24 bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E3DA] shadow-sm space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                Rekor & Penghargaan Resmi
              </span>
              <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#0F172A]">
                Pengakuan Resmi Nasional & Dunia
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
                Dokumentasi piagam dan penganugerahan resmi atas komitmen operasional, inovasi layanan, dan amanah melayani puluhan ribu jemaah ke Tanah Suci.
              </p>
            </div>

            {/* Top Row: Guinness World Records (16:9) & Piala APSI 2026 (16:9) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Guinness World Records */}
              <div className="rounded-2xl border border-[#E8E3DA] overflow-hidden bg-[#FAF8F5] flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="relative aspect-[16/9] w-full bg-slate-100 overflow-hidden border-b border-[#E8E3DA]">
                    <Image
                      src="/images/rekor-dunia-guinness-world-records-samira-travel.webp"
                      alt="Piagam Rekor Dunia Guinness World Records Samira Travel"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-top hover:scale-102 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 space-y-2.5">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059]">
                      Guinness World Records
                    </div>
                    <h3 className="font-bold text-lg text-[#0F172A] leading-snug">
                      Rekor Dunia Jamuan Makan Malam Halal Terbesar
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Dianugerahkan di Asfan, Jeddah, Kerajaan Arab Saudi atas jamuan makan malam halal luar ruangan terbesar dengan kehadiran <strong className="text-slate-900 font-semibold">{siteConfig.guinnessRecord.attendees.toLocaleString("id-ID")} jemaah</strong>. Piagam diserahkan saat Milad 1 Dekade di ICE BSD City (Ref ID: {siteConfig.guinnessRecord.refId}).
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <div className="text-[11px] text-slate-500 pt-3 border-t border-slate-200/60 flex items-center justify-between">
                    <span>{siteConfig.guinnessRecord.location}</span>
                    <span className="font-semibold text-slate-800">{siteConfig.guinnessRecord.attendees.toLocaleString("id-ID")} Jemaah</span>
                  </div>
                </div>
              </div>

              {/* Piala APSI 2026 TVOne */}
              <div className="rounded-2xl border border-[#E8E3DA] overflow-hidden bg-[#FAF8F5] flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="relative aspect-[16/9] w-full bg-slate-100 overflow-hidden border-b border-[#E8E3DA]">
                    <Image
                      src="/images/penghargaan-apsi-2026-jamaah-terbanyak-tvone.webp"
                      alt="Penghargaan APSI 2026 Biro Umrah Jamaah Terbanyak Disiarkan TVOne"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-top hover:scale-102 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 space-y-2.5">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#084234]">
                      Asosiasi Penyelenggara Safari Indonesia (APSI)
                    </div>
                    <h3 className="font-bold text-lg text-[#0F172A] leading-snug">
                      Piala APSI: Biro Umrah Jemaah Terbanyak Nasional
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Dianugerahi piala kehormatan oleh asosiasi resmi APSI yang disiarkan langsung melalui stasiun televisi nasional TVOne atas pencapaian volume jemaah umrah terbanyak dan tata kelola operasional terbaik se-Indonesia.
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <div className="text-[11px] text-slate-500 pt-3 border-t border-slate-200/60 flex items-center justify-between">
                    <span>Disiarkan Langsung TVOne</span>
                    <span className="font-semibold text-slate-800">Musim 2026</span>
                  </div>
                </div>
              </div>
            </div>

            {/* MURI Showcase */}
            <div className="rounded-2xl sm:rounded-3xl border border-[#E8E3DA] overflow-hidden bg-[#FAF8F5] hover:shadow-md transition-shadow">
              {/* Museum Gallery Matting: warm archival linen surface letting polaroid shadows sit naturally */}
              <div className="relative w-full bg-gradient-to-b from-[#F5EFE6] via-[#F8F5EE] to-[#EFE7DC] border-b border-[#E8E3DA] p-4 sm:p-8 lg:p-10 flex items-center justify-center">
                <div className="relative w-full max-w-5xl aspect-[1600/428]">
                  <Image
                    src="/images/tiga-rekor-muri-jamaah-terbanyak-samira-travel.webp"
                    alt="Tiga Piagam Rekor MURI Samira Travel: Masa Pandemi 2022, Talbiyah 2023, dan Jamaah Terbanyak 2024"
                    fill
                    sizes="(max-width: 1280px) 100vw, 1152px"
                    className="object-contain object-center drop-shadow-sm"
                  />
                </div>
              </div>

              {/* MURI Historical Milestones: Chronological Narrative */}
              <div className="p-6 sm:p-8 lg:p-10 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/80 pb-4">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059] mb-1">
                      Museum Rekor-Dunia Indonesia (MURI)
                    </div>
                    <h3 className="font-bold text-lg sm:text-xl text-[#0F172A]">
                      Catatan Tiga Rekor MURI Samira Travel (2022 - 2025)
                    </h3>
                  </div>
                  <div className="text-xs text-slate-500">
                    Sertifikasi Resmi MURI
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs leading-relaxed">
                  {/* Item 1: 2022 */}
                  <div className="p-5 rounded-2xl bg-white border border-[#E8E3DA] space-y-3 flex flex-col justify-between hover:border-[#084234]/40 transition-colors">
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#084234]/10 text-[#084234] font-bold text-[11px]">
                        Rekor MURI 2022
                      </div>
                      <h4 className="font-bold text-sm text-[#0F172A] leading-snug">
                        Jemaah Terbanyak di Masa Pandemi
                      </h4>
                      <p className="text-slate-600">
                        Memberangkatkan 8.176 jemaah pertama Indonesia secara aman dan tertib saat pembukaan kembali ibadah umrah pascapandemi dengan kepatuhan protokol kesehatan ketat.
                      </p>
                    </div>
                    <div className="pt-3 text-[11px] text-slate-400 border-t border-slate-100 flex items-center justify-between">
                      <span>Sanur, Bali</span>
                      <span>29 Maret 2022</span>
                    </div>
                  </div>

                  {/* Item 2: 2023 */}
                  <div className="p-5 rounded-2xl bg-white border border-[#E8E3DA] space-y-3 flex flex-col justify-between hover:border-[#084234]/40 transition-colors">
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#084234]/10 text-[#084234] font-bold text-[11px]">
                        Rekor MURI 2023
                      </div>
                      <h4 className="font-bold text-sm text-[#0F172A] leading-snug">
                        Pelafalan Talbiyah Peserta Terbanyak
                      </h4>
                      <p className="text-slate-600">
                        Menggemakan lafal talbiyah serentak bersama 5.600 jemaah dalam syiar manasik akbar nasional di Sentul International Convention Center (SICC).
                      </p>
                    </div>
                    <div className="pt-3 text-[11px] text-slate-400 border-t border-slate-100 flex items-center justify-between">
                      <span>SICC Bogor</span>
                      <span>23 Juli 2023</span>
                    </div>
                  </div>

                  {/* Item 3: 2024 / 2025 */}
                  <div className="p-5 rounded-2xl bg-white border border-[#E8E3DA] space-y-3 flex flex-col justify-between hover:border-[#084234]/40 transition-colors">
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#084234]/10 text-[#084234] font-bold text-[11px]">
                        Rekor MURI 2024-2025
                      </div>
                      <h4 className="font-bold text-sm text-[#0F172A] leading-snug">
                        Jemaah Umrah Terbanyak Sepanjang Tahun
                      </h4>
                      <p className="text-slate-600">
                        Peringkat 1 nasional resmi SISKOPATUH Kementerian Agama RI dengan total 29.171 jemaah terlayani sepanjang tahun operasional 2024.
                      </p>
                    </div>
                    <div className="pt-3 text-[11px] text-slate-400 border-t border-slate-100 flex items-center justify-between">
                      <span>Hotel Mercure Batavia</span>
                      <span>19 Juli 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Galeri Dokumentasi Lapangan (Native 2:1 ratio: 1000x500 & 1600x800) */}
          <section id="galeri" className="scroll-mt-24 bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E3DA] shadow-sm space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#084234]">
                  Dokumentasi Lapangan
                </span>
                <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#0F172A]">
                  Kebersamaan Khidmat Jemaah Samira Travel
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
                  Potret otentik pelaksanaan manasik, pelepasan penerbangan charter akbar di bandara, hingga kebersamaan penuh senyum di Tanah Suci.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Camera className="w-4 h-4 text-[#084234]" />
                <span>Dokumentasi Resmi Samira Travel</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {documentationMoments.map((item, index) => (
                <div
                  key={index}
                  className="group rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#E8E3DA] hover:border-[#C5A059]/60 transition-all duration-300"
                >
                  {/* Container uses natural 2:1 aspect ratio preserving the 1000x500 photos */}
                  <div className="relative aspect-[2/1] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={item.src}
                      alt={item.caption}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 space-y-1">
                    <h3 className="font-bold text-sm text-[#0F172A]">
                      {item.caption}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: Official Bank Accounts & Anti Fraud Warning */}
          <section>
            <OfficialBankAccountsCard />
          </section>

          {/* Section 6: 26 Kantor Cabang & Hotline Silaturahmi */}
          <section id="kantor-cabang" className="scroll-mt-24 bg-gradient-to-br from-[#04261E] via-[#084234] to-[#04261E] rounded-3xl p-6 sm:p-12 text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                  <Building2 className="w-4 h-4" />
                  <span>Jaringan Resmi se-Indonesia</span>
                </span>
                <h2 className="font-playfair text-2xl sm:text-4xl font-bold leading-tight">
                  Silaturahmi ke Kantor Cabang Resmi Samira Travel di Kota Anda
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-emerald-100/90 leading-relaxed max-w-2xl">
                  Kami hadir di 26 kantor cabang fisik yang tersebar di pulau Sumatera, Jawa, Kalimantan, Sulawesi, hingga kepulauan Indonesia. Dapatkan konsultasi tatap muka langsung, bimbingan dokumen paspor, dan pemilihan paket keberangkatan bersama konsultan amanah kami.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                  <Link
                    href="/kantor-cabang"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#C5A059] hover:bg-[#b59049] text-white font-semibold text-xs sm:text-sm shadow-md transition-all active:scale-95"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>Lihat Daftar 26 Kantor Cabang</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={`https://wa.me/${siteConfig.headOffice.whatsappHotline}?text=${encodeURIComponent("Assalamu'alaikum Samira Travel, saya ingin berkonsultasi mengenai paket umrah dan legalitas keberangkatan.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs sm:text-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-300" />
                    <span>Konsultasi WhatsApp Hotline</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 space-y-3 text-xs text-emerald-100">
                <div className="font-bold text-sm text-white flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#C5A059]" />
                  <span>Kantor Pusat Jakarta</span>
                </div>
                <div className="leading-relaxed text-slate-200">
                  <div>Jl. Malaka Merah No.7/6, Pondok Kopi</div>
                  <div className="text-slate-300">Kec. Duren Sawit, Jakarta Timur</div>
                </div>
                <div className="pt-2 border-t border-white/10 space-y-1.5">
                  <div className="flex items-center gap-2 text-white">
                    <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Hotline: {siteConfig.headOffice.phoneHotline[0]}</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-200">
                    <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Senin - Sabtu (08.30 - 17.00 WIB)</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}

// Icon fallbacks for cleanliness
function GlobeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}
