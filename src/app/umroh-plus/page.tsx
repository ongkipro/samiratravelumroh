import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getPlusTours } from "@/lib/data-service";
import { buildBreadcrumbSchema } from "@/lib/seo";
import { UmrohPlusCatalogClient } from "@/components/packages/UmrohPlusCatalogClient";
import { 
  NaturalBrushBadge, 
  NaturalBrushHighlight, 
  FlightLedgerSeal 
} from "@/components/decorations/NaturalBrush";
import { 
  Compass, 
  ShieldCheck, 
  Hotel, 
  Users, 
  HelpCircle,
  Clock,
  Plane,
  MapPin,
  ChevronRight,
  Headphones,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Building2,
  Globe2
} from "lucide-react";

export const metadata: Metadata = {
  title: "Paket Umroh Plus 2026 - Wisata Halal Turki, Ta'if & Al-Ula",
  description:
    "Paket umroh plus 2026 resmi Kemenag RI. Wisata napak tilas sejarah Islam ke Ta'if, Al-Ula Hegra UNESCO, dan Turki. Fasilitas hotel bintang 5 & muthawwif BNSP.",
  alternates: {
    canonical: "https://samiratravelumrohhaji.com/umroh-plus",
  },
  openGraph: {
    title: "Paket Umroh Plus 2026 - Wisata Halal Turki, Ta'if & Al-Ula",
    description: "Ibadah umrah khusyuk dipadu wisata sejarah peradaban Islam di Ta'if, Al-Ula Hegra UNESCO, Turki Bosphorus, Riyadh, dan Jeddah.",
    url: "https://samiratravelumrohhaji.com/umroh-plus",
    images: [
      {
        url: "/images/paket-umroh-plus-wisata-halal-sejarah-islam.webp",
        width: 1200,
        height: 630,
        alt: "Katalog Paket Umroh Plus 2026 Samira Travel",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paket Umroh Plus 2026 - Wisata Halal Turki, Ta'if & Al-Ula",
    description: "Ibadah umrah khusyuk dipadu wisata sejarah peradaban Islam di Ta'if, Al-Ula, Turki, Riyadh, dan Jeddah.",
    images: ["/images/paket-umroh-plus-wisata-halal-sejarah-islam.webp"],
  },
};

export default async function UmrohPlusIndexPage() {
  const plusTours = await getPlusTours();

  const breadcrumbs = buildBreadcrumbSchema([
    { name: "Beranda", item: "/" },
    { name: "Umroh Plus", item: "/umroh-plus" },
  ]);

  const faqs = [
    {
      q: "Apakah biaya paket Umroh Plus sudah termasuk visa wisata negara tujuan?",
      a: "Ya, seluruh paket Umroh Plus Samira Travel sudah mencakup pengurusan Visa Umrah resmi terdaftar SISKOPATUH Kemenag RI dan Visa Wisata/E-Visa resmi untuk negara destinasi (seperti Visa Turki atau E-Visa Kerajaan Arab Saudi).",
    },
    {
      q: "Bagaimana kualifikasi pembimbing ibadah dan muthawwif selama agenda ziarah?",
      a: "Setiap rombongan Umroh Plus didampingi oleh Muthawwif mukim berpengalaman di Tanah Suci serta Tour Leader berlisensi resmi BNSP yang menguasai sejarah sirah nabawiyah dan tata rute destinasi wisata peradaban Islam.",
    },
    {
      q: "Apakah fasilitas Audio Receiver System (APS) disediakan selama ziarah?",
      a: "Benar. Samira Travel memfasilitasi setiap jemaah dengan perangkat transmitter-receiver audio nirkabel (APS) agar bimbingan doa thawaf, sa'i, dan penjelasan sejarah di lokasi wisata terdengar jernih tanpa terganggu kebisingan keramaian.",
    },
    {
      q: "Bagaimana dengan sajian makanan dan katering selama di kota wisata?",
      a: "Selama berada di Makkah dan Madinah, hidangan disajikan fullboard prasmanan khas nusantara di hotel bintang 5. Sedangkan di kota destinasi wisata (seperti Istanbul, Ta'if, atau Al-Ula), jemaah menikmati sajian menu halal lokal terstandar di restoran terkemuka.",
    },
    {
      q: "Apakah lansia atau anak-anak dapat mengikuti program Umroh Plus?",
      a: "Sangat bisa. Melalui inisiatif 'Samira Care', tim muthawwif dan tour leader kami memberikan perhatian khusus, fasilitas pendampingan kursi roda jika diperlukan, dan penyesuaian tempo ziarah yang aman dan ramah keluarga.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  const destinationsSpotlight = [
    {
      name: "Ta'if (Kota Pegunungan Sejuk)",
      tag: "Pegunungan & Mawar",
      image: "/images/paket-umroh-plus-thaif-wisata-kebun-mawar.webp",
      desc: "Ziarah napak tilas keteguhan dakwah Rasulullah SAW, Masjid Ibnu Abbas, perkebunan mawar harum, dan panorama alam kereta gantung Telefrik.",
      highlights: ["Kebun Mawar Ta'if", "Masjid Ibnu Abbas", "Kereta Gantung Telefrik"],
    },
    {
      name: "Al-Ula (Warisan Dunia UNESCO)",
      tag: "Situs Hegra UNESCO",
      image: "/images/paket-umroh-plus-al-ula-hegra-unesco.webp",
      desc: "Menyaksikan mahakarya pahatan batu peradaban Nabatean di Hegra Madain Saleh, keajaiban geologis Elephant Rock, dan kemegahan cermin Maraya Hall.",
      highlights: ["Hegra Madain Saleh", "Elephant Rock", "Maraya Concert Hall"],
    },
    {
      name: "Turki (Istanbul & Selat Bosphorus)",
      tag: "Peradaban 2 Benua",
      image: "/images/paket-umroh-plus-turki-istanbul-bosphorus.webp",
      desc: "Menjelajahi kemegahan Khilafah Utsmaniyah di Hagia Sophia, Blue Mosque, Istana Topkapi, dan pelayaran pesiar menyusuri Selat Bosphorus antara Asia dan Eropa.",
      highlights: ["Hagia Sophia", "Bosphorus Cruise", "Topkapi Palace"],
    },
    {
      name: "Riyadh & Diriyah (Ibu Kota Arab Saudi)",
      tag: "Metropolis & Sejarah",
      image: "/images/paket-umroh-plus-riyadh-benteng-masmak.webp",
      desc: "Perpaduan modernitas Kingdom Centre dengan akar sejarah pendirian kerajaan di Kota Kuno Diriyah At-Turaif (UNESCO) dan Benteng Al-Masmak.",
      highlights: ["Diriyah At-Turaif UNESCO", "Benteng Al-Masmak", "Kingdom Centre Tower"],
    },
    {
      name: "Jeddah (Corniche Laut Merah & Al-Balad)",
      tag: "Pesisir & Kota Koral",
      image: "/images/paket-umroh-plus-jeddah-corniche-laut-merah.webp",
      desc: "Menikmati semilir angin Laut Merah di Corniche Jeddah, keanggunan Masjid Terapung Ar-Rahmah, dan arsitektur rumah batu koral di Al-Balad UNESCO.",
      highlights: ["Al-Balad Heritage UNESCO", "Masjid Terapung Laut Merah", "Jeddah Corniche"],
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
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-[#FAF8F5] min-h-screen pb-24">
        {/* Cinematic Sanctuary Hero */}
        <section className="relative overflow-hidden bg-[#04261E] text-white pt-24 sm:pt-28 pb-20 md:pb-28">
          {/* High-Resolution Photographic Architectural Background (1376x768, 16:9) */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/paket-umroh-plus-wisata-halal-sejarah-islam.webp"
              alt="Paket Umroh Plus Wisata Halal Sejarah Peradaban Islam 2026 - Samira Travel"
              fill
              priority
              quality={90}
              sizes="100vw"
              className="object-cover object-[center_30%]"
            />
            {/* Luminous Multilayer Directional Vignette */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#04261E]/95 via-[#04261E]/82 to-[#04261E]/55" />
            <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#04261E] to-transparent" />
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#04261E]/60 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb Nav */}
            <nav className="flex items-center gap-2 text-xs text-emerald-200/80 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
              <ChevronRight className="w-3.5 h-3.5 text-emerald-300/60" />
              <span className="text-white font-medium">Umroh Plus</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#C5A059] uppercase">
                  <Compass className="w-4 h-4" />
                  <span>Rangkaian Wisata Sejarah & Peradaban Islam Dunia • Musim 2026</span>
                </span>

                <h1 className="font-playfair text-3xl sm:text-5xl lg:text-6xl font-bold text-[#FAF8F5] leading-[1.15] drop-shadow-md">
                  Perjalanan Suci Baitullah & Jejak Peradaban Islam
                </h1>

                <p className="text-sm sm:text-base md:text-lg text-emerald-100/90 max-w-2xl leading-relaxed font-normal drop-shadow">
                  Sempurnakan rukun umrah di Tanah Suci Makkah dan Madinah dengan menyelami jejak kenabian serta kejayaan peradaban Islam di 5 destinasi ikonik: Thaif, situs warisan dunia UNESCO Al-Ula Hegra, Turki Istanbul & Bosphorus, Riyadh, serta Jeddah.
                </p>

                {/* Micro Assurance Indicators */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-xs sm:text-sm text-emerald-100/90 font-medium">
                  <span className="inline-flex items-center gap-2">
                    <Hotel className="w-4 h-4 text-[#C5A059] shrink-0" />
                    Hotel Ring 1 Pelataran Masjid
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#C5A059] shrink-0" />
                    Muthawwif & Tour Leader BNSP
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
                    Visa Umrah & Visa Wisata Resmi
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Plane className="w-4 h-4 text-[#C5A059] shrink-0" />
                    Penerbangan Direct Flight Terjadwal
                  </span>
                </div>

                {/* Quick Anchor Navigation */}
                <div className="flex flex-wrap items-center gap-2 pt-4">
                  <a
                    href="#katalog"
                    className="px-3.5 py-1.5 rounded-lg bg-[#C5A059] hover:bg-[#b59049] text-white text-xs font-bold shadow-sm transition-all"
                  >
                    Pilihan Paket Umroh Plus
                  </a>
                  <a
                    href="#destinasi"
                    className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-emerald-100 transition-colors"
                  >
                    Eksplorasi 5 Destinasi
                  </a>
                  <a
                    href="#keunggulan"
                    className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-emerald-100 transition-colors"
                  >
                    Keunggulan Fasilitas
                  </a>
                  <a
                    href="#faq"
                    className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-emerald-100 transition-colors"
                  >
                    Tanya Jawab (FAQ)
                  </a>
                  <Link
                    href="/kantor-cabang"
                    className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-emerald-100 transition-colors"
                  >
                    Konsultasi Cabang Terdekat
                  </Link>
                </div>
              </div>

              {/* Credential Card in Hero (Desktop) */}
              <div className="lg:col-span-4 hidden lg:block">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 text-white space-y-3.5 shadow-xl">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase font-bold tracking-wider text-[#C5A059]">Standar Layanan VIP</span>
                    <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500/25 text-emerald-200 border border-emerald-400/40 font-semibold">
                      Terverifikasi Kemenag
                    </span>
                  </div>
                  <div className="space-y-2.5 text-xs text-slate-200">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                      <span>Tiket PP Charter Saudia / Lion Air</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                      <span>Audio Receiver System (APS) Wireless</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                      <span>Katering Fullboard Masakan Nusantara</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                      <span>Koper Fiber Luxury & Perlengkapan Komplit</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                      <span>Inisiatif Ramah Lansia & Samira Care</span>
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
                  5 Kota
                </span>
                <span className="p-2 rounded-xl bg-emerald-50 text-emerald-700">
                  <Globe2 className="w-5 h-5" />
                </span>
              </div>
              <div className="mt-2">
                <div className="text-xs sm:text-sm font-bold text-slate-900">Destinasi Plus Ikonik</div>
                <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Thaif, Al-Ula, Turki, Riyadh, Jeddah</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-[#E8E3DA] shadow-lg shadow-black/5 flex flex-col justify-between group hover:border-[#C5A059]/60 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#084234] tabular-nums font-playfair">
                  Ring 1
                </span>
                <span className="p-2 rounded-xl bg-amber-50 text-amber-700">
                  <Hotel className="w-5 h-5" />
                </span>
              </div>
              <div className="mt-2">
                <div className="text-xs sm:text-sm font-bold text-slate-900">Hotel Pelataran Masjid</div>
                <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Bintang 5 Dekat Ka&apos;bah & Nabawi</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-[#E8E3DA] shadow-lg shadow-black/5 flex flex-col justify-between group hover:border-[#C5A059]/60 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#084234] tabular-nums font-playfair">
                  BNSP
                </span>
                <span className="p-2 rounded-xl bg-emerald-50 text-emerald-700">
                  <Users className="w-5 h-5" />
                </span>
              </div>
              <div className="mt-2">
                <div className="text-xs sm:text-sm font-bold text-slate-900">Muthawwif Bersertifikasi</div>
                <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Bimbingan Sesuai Sunnah & Sirah</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-[#E8E3DA] shadow-lg shadow-black/5 flex flex-col justify-between group hover:border-[#C5A059]/60 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#084234] tabular-nums font-playfair">
                  100%
                </span>
                <span className="p-2 rounded-xl bg-slate-100 text-slate-700">
                  <ShieldCheck className="w-5 h-5" />
                </span>
              </div>
              <div className="mt-2">
                <div className="text-xs sm:text-sm font-bold text-slate-900">Garansi Kepastian Terbang</div>
                <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Full Charter Lion Air / Saudia</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Flow */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 sm:mt-18 space-y-16">
          
          {/* Section: Interactive Catalog Section with Destination Filter */}
          <section id="katalog" className="scroll-mt-24 space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <div>
                <NaturalBrushBadge variant="gold">
                  Pilihan Paket Terjadwal Musim 2026
                </NaturalBrushBadge>
              </div>
              <h2 className="font-playfair text-2xl sm:text-4xl font-bold text-[#0F172A]">
                Katalog Lengkap Paket <NaturalBrushHighlight variant="gold">Umroh Plus</NaturalBrushHighlight> Samira Travel
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Pilih destinasi ziarah favorit Anda untuk melihat rincian fasilitas hotel, maskapai penerbangan, dan jadwal keberangkatan.
              </p>
            </div>

            <UmrohPlusCatalogClient tours={plusTours} />
          </section>

          {/* Section: Curated 5 Destinations Spotlight */}
          <section id="destinasi" className="scroll-mt-24 bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E3DA] shadow-sm space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2">
                <div>
                  <NaturalBrushBadge variant="gold">
                    Eksplorasi Warisan Peradaban
                  </NaturalBrushBadge>
                </div>
                <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#0F172A]">
                  5 Destinasi Ziarah Pilihan Umroh Plus
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
                  Setiap kota destinasi menyimpan khazanah sejarah, mukjizat kenabian, dan saksi kejayaan peradaban Islam yang mempertebal keimanan.
                </p>
              </div>

              <FlightLedgerSeal
                airlinesText="Full Charter Lion Air & Saudia"
                charterRouteText="Rute Ziarah Langsung"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinationsSpotlight.map((dest, idx) => (
                <div
                  key={idx}
                  className="group rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#E8E3DA] hover:border-[#C5A059]/70 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Native 16:9 Image container (1376x768) */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                      <Image
                        src={dest.image}
                        alt={`Destinasi Wisata Halal ${dest.name} - Paket Umroh Plus Samira Travel`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#04261E]/80 backdrop-blur-sm text-white text-[11px] font-bold border border-white/20">
                        {dest.tag}
                      </span>
                    </div>

                    <div className="p-5 space-y-2.5">
                      <h3 className="font-playfair text-lg font-bold text-[#0F172A] group-hover:text-[#084234] transition-colors">
                        {dest.name}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {dest.desc}
                      </p>

                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {dest.highlights.map((h, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 text-[10px] font-semibold bg-white text-slate-700 px-2 py-0.5 rounded-md border border-slate-200"
                          >
                            <MapPin className="w-2.5 h-2.5 text-[#C5A059]" />
                            <span>{h}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-slate-200/60">
                      <a
                        href="#katalog"
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#084234] hover:text-[#04261E] group-hover:underline"
                      >
                        <span>Lihat Paket Terkait</span>
                        <ChevronRight className="w-3.5 h-3.5 text-[#C5A059]" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Keunggulan Layanan Umroh Plus Samira Travel */}
          <section id="keunggulan" className="scroll-mt-24 bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E3DA] shadow-sm space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <div>
                <NaturalBrushBadge variant="emerald">
                  Kenyamanan &amp; Kepastian Layanan
                </NaturalBrushBadge>
              </div>
              <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#0F172A]">
                Mengapa Memilih Umroh Plus Samira Travel?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Dirancang secara cermat menghadirkan harmoni sempurna antara kekhusyukan rukun umrah dan wawasan peradaban dunia.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
              <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8E3DA] space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#084234] flex items-center justify-center">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-[#0F172A]">
                  Eksplorasi Sejarah Mendalam
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Bukan sekadar wisata umum; setiap lokasi dipandu pemaparan sirah nabawiyah dan hikmah kebesaran Islam oleh muthawwif mukim.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8E3DA] space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#C5A059] flex items-center justify-center">
                  <Headphones className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-[#0F172A]">
                  Audio Receiver System (APS)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Perangkat audio nirkabel berteknologi jernih, memastikan setiap doa dan penjelasan muthawwif terdengar jelas tanpa terganggu keramaian.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8E3DA] space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#084234] flex items-center justify-center">
                  <Hotel className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-[#0F172A]">
                  Hotel Ring 1 Pelataran Masjid
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Akomodasi hotel bintang 4 dan 5 tepat di depan pelataran Ka&apos;bah dan Masjid Nabawi, menghemat tenaga jemaah untuk beribadah.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8E3DA] space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-[#0F172A]">
                  Legalitas & E-Visa Terpadu
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Seluruh proses perizinan visa umrah SISKOPATUH dan E-Visa wisata negara tujuan diurus oleh tim perizinan resmi Samira Travel.
                </p>
              </div>
            </div>
          </section>

          {/* Section: FAQ Section */}
          <section id="faq" className="scroll-mt-24 bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E3DA] shadow-sm space-y-6">
            <div className="flex items-center gap-2.5 text-[#0F172A]">
              <HelpCircle className="w-5 h-5 text-[#084234]" />
              <h2 className="font-playfair text-xl sm:text-2xl font-bold">
                Pertanyaan Populer Seputar Paket Umroh Plus
              </h2>
            </div>

            <div className="divide-y divide-slate-100">
              {faqs.map((faq, idx) => (
                <div key={idx} className="py-4 space-y-1.5">
                  <h3 className="text-sm font-bold text-[#0F172A] flex items-start gap-2">
                    <span className="text-[#C5A059] font-mono">Q{idx + 1}.</span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Consultation & Branch Network CTA Card */}
          <section className="bg-gradient-to-br from-[#04261E] via-[#084234] to-[#04261E] rounded-3xl p-6 sm:p-12 text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                  <Building2 className="w-4 h-4" />
                  <span>Konsultasi Tatap Muka & Pendaftaran Resmi</span>
                </span>
                <h2 className="font-playfair text-2xl sm:text-4xl font-bold leading-tight">
                  Rencanakan Perjalanan Umroh Plus Bersama Keluarga Anda
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-emerald-100/90 leading-relaxed max-w-2xl">
                  Konsultasikan pilihan tanggal keberangkatan, tipe kamar quad/triple/double, serta rute ziarah impian Anda. Tim konsultan kami di 26 kantor cabang resmi se-Indonesia siap melayani dengan ramah dan amanah.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                  <a
                    href="https://wa.me/6285607179735?text=Assalamu'alaikum%20Samira%20Travel,%20saya%20ingin%20konsultasi%20paket%20Umroh%20Plus%202026."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#C5A059] hover:bg-[#b59049] text-white font-semibold text-xs sm:text-sm shadow-md transition-all active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Konsultasi WhatsApp Hotline</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <Link
                    href="/kantor-cabang"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs sm:text-sm transition-all"
                  >
                    <MapPin className="w-4 h-4 text-emerald-300" />
                    <span>Kunjungi 26 Kantor Cabang</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 space-y-3 text-xs text-emerald-100">
                <div className="font-bold text-sm text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                  <span>Garansi Kepastian Samira Travel</span>
                </div>
                <div className="space-y-2 text-slate-200 text-xs">
                  <p className="leading-relaxed">
                    Setiap paket telah mengunci tiket pesawat charter dan akomodasi hotel sebelum pendaftaran dibuka.
                  </p>
                  <div className="pt-2 border-t border-white/10 flex items-center gap-2 text-white font-semibold">
                    <Building2 className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>PPIU No. 137/2020 • Akreditasi A</span>
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
