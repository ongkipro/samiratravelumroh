import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllTours, getRegularTours } from "@/lib/data-service";
import { buildBreadcrumbSchema } from "@/lib/seo";
import { PackageCatalogClient } from "@/components/packages/PackageCatalogClient";
import { 
  MapPin, 
  Plane, 
  ShieldCheck, 
  CheckCircle2, 
  Hotel, 
  Users, 
  Clock, 
  ChevronRight,
  Sparkles,
  Building2,
  Briefcase,
  Headphones,
  Award,
  Lock,
  MessageCircle,
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Paket Umroh 2026 Resmi Kemenag - Jadwal & Biaya 11 Kota",
  description:
    "Pilihan paket umroh 2026 resmi Kemenag RI penerbangan langsung dari 11 kota embarkasi. Hotel bintang 5 dekat masjid, fasilitas komplit, dan garansi pasti terbang.",
  alternates: {
    canonical: "https://samiratravelumrohhaji.com/paket-umroh",
  },
  openGraph: {
    title: "Paket Umroh 2026 Resmi Kemenag - Jadwal & Biaya 11 Kota",
    description: "Pilihan paket umroh resmi dari 11 kota embarkasi se-Indonesia. Jaminan 100% kepastian terbang charter, hotel ring 1 pelataran Ka'bah & Nabawi.",
    url: "https://samiratravelumrohhaji.com/paket-umroh",
    images: [
      {
        url: "/images/paket_umroh_sanctuary_hero.jpg",
        width: 1200,
        height: 630,
        alt: "Katalog Paket Umroh 2026 Samira Travel",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paket Umroh 2026 Resmi Kemenag - Jadwal & Biaya 11 Kota",
    description: "Pilihan paket umroh resmi dari 11 kota embarkasi se-Indonesia. Jaminan 100% kepastian terbang charter.",
    images: ["/images/paket_umroh_sanctuary_hero.jpg"],
  },
};

export default async function PaketUmrohIndexPage() {
  const [allTours, regularTours] = await Promise.all([
    getAllTours(),
    getRegularTours(),
  ]);

  const breadcrumbs = buildBreadcrumbSchema([
    { name: "Beranda", item: "/" },
    { name: "Paket Umroh", item: "/paket-umroh" },
  ]);

  const packageSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Katalog Paket Umroh & Haji Khusus Samira Travel 2026",
    description: "Pilihan paket ibadah umrah reguler 11 kota embarkasi, umroh plus peradaban Islam, dan haji khusus furoda.",
    numberOfItems: allTours.length,
    itemListElement: allTours.map((t, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "TouristTrip",
        name: t.title,
        description: t.description,
        touristType: ["Pilgrims", "Moslem Travelers"],
        offers: {
          "@type": "Offer",
          price: t.priceIDR,
          priceCurrency: "IDR",
          availability: "https://schema.org/InStock",
          url: `https://samiratravelumrohhaji.com/paket-umroh/${t.slug || t.city.toLowerCase()}`,
        },
      },
    })),
  };

  const embarkationAirports: Record<string, { code: string; airport: string }> = {
    Jakarta: { code: "CGK", airport: "Bandara Soekarno-Hatta" },
    Surabaya: { code: "SUB", airport: "Bandara Internasional Juanda" },
    Medan: { code: "KNO", airport: "Bandara Kualanamu" },
    Makassar: { code: "UPG", airport: "Bandara Sultan Hasanuddin" },
    Palembang: { code: "PLM", airport: "Bandara Sultan Mahmud Badaruddin II" },
    Padang: { code: "PDG", airport: "Bandara Internasional Minangkabau" },
    Pontianak: { code: "PNK", airport: "Bandara Supadio" },
    Aceh: { code: "BTJ", airport: "Bandara Sultan Iskandar Muda" },
    Denpasar: { code: "DPS", airport: "Bandara I Gusti Ngurah Rai" },
    Batam: { code: "BTH", airport: "Bandara Hang Nadim" },
    Pekanbaru: { code: "PKU", airport: "Bandara Sultan Syarif Kasim II" },
  };

  const inclusivePillars = [
    {
      icon: Plane,
      title: "Sistem Full Charter Flight",
      desc: "Menyewa armada pesawat secara penuh (Saudia Airlines / Lion Air) sehingga tanggal dan jam terbang terjamin 100% tanpa risiko cancel.",
    },
    {
      icon: Hotel,
      title: "Hotel Bintang Ring 1 Depan Masjid",
      desc: "Akomodasi hotel bintang 4 & 5 di pelataran Ka'bah dan Masjid Nabawi, memudahkan jemaah dan lansia shalat berjamaah 5 waktu.",
    },
    {
      icon: Users,
      title: "Muthawwif & Tour Leader BNSP",
      desc: "Didampingi ustadz muthawwif mukim berpengalaman dan tour leader tersertifikasi BNSP yang membimbing ibadah sesuai sunnah.",
    },
    {
      icon: Briefcase,
      title: "Perlengkapan Eksekutif Komplit",
      desc: "Fasilitas koper fiber luxury 24 inch, tas paspor, kain ihram / mukena, seragam batik resmi, dan buku panduan doa manasik.",
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
        id="package-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(packageSchema) }}
      />

      <div className="bg-[#FAF8F5] min-h-screen pb-24">
        {/* Cinematic Sanctuary Hero */}
        <section className="relative overflow-hidden bg-[#04261E] text-white pt-24 sm:pt-28 pb-20 md:pb-28">
          {/* High-Resolution Photographic Architectural Background (1376x768, 16:9) */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/paket_umroh_sanctuary_hero.jpg"
              alt="Katalog Paket Umroh Samira Travel Sanctuary"
              fill
              priority
              quality={90}
              sizes="100vw"
              className="object-cover object-[center_32%]"
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
              <span className="text-white font-medium">Paket Umroh</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#C5A059] uppercase">
                  <Plane className="w-4 h-4" />
                  <span>Penerbangan Charter Langsung 11 Embarkasi • Musim 1448 H</span>
                </span>

                <h1 className="font-playfair text-3xl sm:text-5xl lg:text-6xl font-bold text-[#FAF8F5] leading-[1.15] drop-shadow-md">
                  Katalog Paket Umroh & Haji Khusus 2026
                </h1>

                <p className="text-sm sm:text-base md:text-lg text-emerald-100/90 max-w-2xl leading-relaxed font-normal drop-shadow">
                  Pilih paket ibadah umrah sesuai kota domisili Anda. Kami melayani penerbangan charter langsung dari 11 kota embarkasi se-Indonesia dengan kepastian jadwal terbang, hotel bintang 4 & 5 ring 1, dan bimbingan muthawwif berpengalaman.
                </p>

                {/* Micro Assurance Indicators */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-xs sm:text-sm text-emerald-100/90 font-medium">
                  <span className="inline-flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
                    100% Kepastian Full Charter
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Hotel className="w-4 h-4 text-[#C5A059] shrink-0" />
                    Hotel Ring 1 Pelataran Ka&apos;bah & Nabawi
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                    Terverifikasi SISKOPATUH Kemenag RI
                  </span>
                </div>

                {/* Quick Anchor Navigation */}
                <div className="flex flex-wrap items-center gap-2 pt-4">
                  <a
                    href="#katalog"
                    className="px-3.5 py-1.5 rounded-lg bg-[#C5A059] hover:bg-[#b59049] text-white text-xs font-bold shadow-sm transition-all"
                  >
                    Lihat Semua Paket ({allTours.length})
                  </a>
                  <a
                    href="#embarkasi"
                    className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-emerald-100 transition-colors"
                  >
                    11 Kota Embarkasi
                  </a>
                  <a
                    href="#fasilitas"
                    className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-emerald-100 transition-colors"
                  >
                    Fasilitas All-Inclusive
                  </a>
                  <Link
                    href="/kantor-cabang"
                    className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-emerald-100 transition-colors"
                  >
                    26 Kantor Cabang
                  </Link>
                </div>
              </div>

              {/* Credential Card in Hero (Desktop) */}
              <div className="lg:col-span-4 hidden lg:block">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 text-white space-y-3.5 shadow-xl">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase font-bold tracking-wider text-[#C5A059]">Jaminan Pelayanan</span>
                    <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500/25 text-emerald-200 border border-emerald-400/40 font-semibold">
                      Akreditasi A Unggul
                    </span>
                  </div>
                  <div className="space-y-2.5 text-xs text-slate-200">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                      <span>Full Charter Flight Lion Air / Saudia Airlines</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                      <span>Hotel Bintang 4 & 5 Ring 1 Depan Masjid</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                      <span>Bimbingan Muthawwif & Tour Leader BNSP</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                      <span>Audio Receiver System (APS) Wireless</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                      <span>Perlengkapan Koper Fiber Luxury Komplit</span>
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
                  11 Kota
                </span>
                <span className="p-2 rounded-xl bg-emerald-50 text-emerald-700">
                  <Plane className="w-5 h-5" />
                </span>
              </div>
              <div className="mt-2">
                <div className="text-xs sm:text-sm font-bold text-slate-900">Embarkasi Langsung</div>
                <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Penerbangan Dari Kota Terdekat</div>
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
                <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">&lt; 250 Meter ke Ka&apos;bah & Nabawi</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-[#E8E3DA] shadow-lg shadow-black/5 flex flex-col justify-between group hover:border-[#C5A059]/60 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#084234] tabular-nums font-playfair">
                  #1
                </span>
                <span className="p-2 rounded-xl bg-emerald-50 text-emerald-700">
                  <Award className="w-5 h-5" />
                </span>
              </div>
              <div className="mt-2">
                <div className="text-xs sm:text-sm font-bold text-slate-900">SISKOPATUH Kemenag RI</div>
                <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">29.171+ Jemaah Terbanyak 2024</div>
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
                <div className="text-xs sm:text-sm font-bold text-slate-900">Pasti Terbang & Seat Aman</div>
                <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Tiket PP Terbit Lebih Awal</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Flow */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 sm:mt-18 space-y-16">
          
          {/* Section: 11 Embarkation Cities Navigator */}
          <section id="embarkasi" className="scroll-mt-24 bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E3DA] shadow-sm space-y-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#084234]">
                  Penerbangan Langsung
                </span>
                <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#0F172A]">
                  11 Kota Embarkasi Keberangkatan Langsung
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Pilih kota keberangkatan terdekat dari tempat tinggal Anda untuk melihat jadwal dan rincian penerbangan charter.
                </p>
              </div>

              <span className="text-xs font-semibold text-[#084234] bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 shrink-0 flex items-center gap-1.5">
                <Plane className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Lion Air Charter & Saudia Airlines</span>
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {regularTours.map((t) => {
                const airportMeta = embarkationAirports[t.city] || { code: "ID", airport: "Bandara Internasional" };
                return (
                  <Link
                    key={t.slug}
                    href={`/paket-umroh/${t.slug}`}
                    className="p-3.5 rounded-2xl bg-[#FAF8F5] hover:bg-[#084234] text-slate-800 hover:text-white border border-[#E8E3DA] hover:border-[#084234] transition-all group flex flex-col justify-between shadow-xs"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-mono text-[10px] font-bold text-[#C5A059] group-hover:text-amber-300">
                        {airportMeta.code}
                      </span>
                      <MapPin className="w-3.5 h-3.5 text-slate-400 group-hover:text-white/80" />
                    </div>
                    <div>
                      <div className="font-bold text-sm leading-snug">
                        {t.city}
                      </div>
                      <div className="text-[10px] text-slate-500 group-hover:text-emerald-200/80 truncate mt-0.5">
                        {t.durationDays} Hari • {t.airline}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Section: Comprehensive Catalog Client with Search, City Filter & Sorting */}
          <section id="katalog" className="scroll-mt-24 space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#084234] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                Eksplorasi Katalog Interaktif
              </span>
              <h2 className="font-playfair text-2xl sm:text-4xl font-bold text-[#0F172A]">
                Pilihan Paket Ibadah Umrah Musim 2026
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Gunakan filter kategori, kota keberangkatan, atau pencarian cepat untuk menemukan paket terbaik keluarga Anda.
              </p>
            </div>

            <PackageCatalogClient tours={allTours} />
          </section>

          {/* Section: 4 Keunggulan Fasilitas All-Inclusive */}
          <section id="fasilitas" className="scroll-mt-24 bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E3DA] shadow-sm space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold text-[#084234] uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                Fasilitas Tanpa Biaya Tersembunyi
              </span>
              <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#0F172A]">
                Standar Pelayanan VIP Setiap Paket Umroh
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Seluruh biaya yang Anda bayarkan mencakup kebutuhan perjalanan ibadah komplit dari Tanah Air hingga kembali ke Tanah Suci.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
              {inclusivePillars.map((p, idx) => {
                const IconComponent = p.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8E3DA] space-y-2.5 flex flex-col justify-between hover:border-[#084234] transition-colors"
                  >
                    <div className="space-y-2.5">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#084234] flex items-center justify-center">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-sm text-[#0F172A]">
                        {p.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Section: Anti-Fraud Warning Box */}
          <section className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E3DA] shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center shrink-0">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-playfair text-lg sm:text-xl font-bold text-[#0F172A]">
                    Keamanan Transaksi & Rekening Resmi Perusahaan
                  </h3>
                  <p className="text-xs text-slate-500">
                    Perlindungan hak finansial calon jemaah umrah & haji Samira Travel.
                  </p>
                </div>
              </div>

              <Link
                href="/tentang-kami#rekening-resmi"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#084234] hover:underline shrink-0"
              >
                <span>Lihat 4 Rekening Resmi</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Seluruh pembayaran uang muka pendaftaran (DP) maupun pelunasan hanya sah apabila ditransfer langsung ke rekening giro resmi atas nama <strong className="text-slate-900 font-semibold">PT SAMIRA ALI WISATA</strong> (Permata Syariah, BSI, Mandiri, dan Muamalat). Kami tidak pernah menginstruksikan transfer ke rekening pribadi staf, tour leader, atau agen manapun.
            </p>
          </section>

          {/* Section: Consultation & Branch Network CTA Card */}
          <section className="bg-gradient-to-br from-[#04261E] via-[#084234] to-[#04261E] rounded-3xl p-6 sm:p-12 text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                  <Building2 className="w-4 h-4" />
                  <span>Jaringan Resmi 26 Kantor Cabang Se-Indonesia</span>
                </span>
                <h2 className="font-playfair text-2xl sm:text-4xl font-bold leading-tight">
                  Konsultasikan Jadwal & Kebutuhan Umrah Anda
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-emerald-100/90 leading-relaxed max-w-2xl">
                  Bingung memilih tanggal keberangkatan atau butuh pendampingan pembuatan paspor? Konsultan ramah kami di 26 kantor cabang fisik siap melayani pendaftaran langsung secara tatap muka.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                  <a
                    href="https://wa.me/6285607179735?text=Assalamu'alaikum%20Samira%20Travel,%20saya%20ingin%20konsultasi%20paket%20umroh%202026."
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
                    <span>Temukan Kantor Cabang Terdekat</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 space-y-3 text-xs text-emerald-100">
                <div className="font-bold text-sm text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                  <span>Legalitas & Rekor Samira Travel</span>
                </div>
                <div className="space-y-2 text-slate-200 text-xs">
                  <p className="leading-relaxed">
                    Biro perjalanan umrah peringkat #1 Kemenag RI, peraih Guinness World Records, dan 3 Rekor MURI.
                  </p>
                  <div className="pt-2 border-t border-white/10 flex items-center gap-2 text-white font-semibold">
                    <Building2 className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>PPIU No. 137/2020 • PIHK 2022</span>
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
