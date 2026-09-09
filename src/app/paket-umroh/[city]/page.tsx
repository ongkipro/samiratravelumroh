import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getTourByCity, getRegularTours, getAllBranches } from "@/lib/data-service";
import { buildTouristTripSchema, buildBreadcrumbSchema } from "@/lib/seo";
import { siteConfig } from "@/data/site-config";
import { ItineraryStepper } from "@/components/packages/ItineraryStepper";
import { PackageFacilitySection } from "@/components/packages/PackageFacilitySection";
import { PaymentSecurityCard } from "@/components/packages/PaymentSecurityCard";
import { PackageRequirementsSection } from "@/components/packages/PackageRequirementsSection";
import { HotelTierShowcase } from "@/components/packages/HotelTierShowcase";
import { 
  Plane, 
  Hotel, 
  Calendar, 
  MapPin, 
  CheckCircle, 
  CheckCircle2,
  ShieldCheck, 
  Star, 
  Award, 
  Phone,
  FileText,
  Clock,
  ChevronRight,
  MessageCircle,
  Building2,
  ExternalLink,
  Users,
  Compass
} from "lucide-react";

interface Props {
  params: Promise<{ city: string }>;
}

const embarkationAirports: Record<string, { code: string; airport: string }> = {
  Jakarta: { code: "CGK", airport: "Bandara Internasional Soekarno-Hatta" },
  Surabaya: { code: "SUB", airport: "Bandara Internasional Juanda" },
  Medan: { code: "KNO", airport: "Bandara Internasional Kualanamu" },
  Makassar: { code: "UPG", airport: "Bandara Internasional Sultan Hasanuddin" },
  Palembang: { code: "PLM", airport: "Bandara Sultan Mahmud Badaruddin II" },
  Padang: { code: "PDG", airport: "Bandara Internasional Minangkabau" },
  Pontianak: { code: "PNK", airport: "Bandara Supadio" },
  Aceh: { code: "BTJ", airport: "Bandara Sultan Iskandar Muda" },
  Denpasar: { code: "DPS", airport: "Bandara Internasional I Gusti Ngurah Rai" },
  Batam: { code: "BTH", airport: "Bandara Internasional Hang Nadim" },
  Pekanbaru: { code: "PKU", airport: "Bandara Sultan Syarif Kasim II" },
};

export async function generateStaticParams() {
  const tours = await getRegularTours();
  return tours.map((tour) => ({
    city: tour.slug.toLowerCase(),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const tour = await getTourByCity(city);
  if (!tour) return { title: "Paket Tidak Ditemukan" };

  const title = `Paket Umroh ${tour.city} 2026 (${tour.durationDays} Hari) - Mulai ${tour.priceFormatted}`;
  const description = `Paket umroh resmi 2026 keberangkatan langsung dari ${tour.city} durasi ${tour.durationDays} hari. Penerbangan charter ${tour.airline}, hotel bintang 5, garansi pasti terbang.`;
  const pageUrl = `https://samiratravelumrohhaji.com/paket-umroh/${city}`;
  const ogImage = tour.flyerImage || "/images/jadwal-paket-umroh-resmi-kemenag.webp";

  return {
    title,
    description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title,
      description,
      url: pageUrl,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `Paket Umroh ${tour.city} 2026 Samira Travel`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function CityPackageDetailPage({ params }: Props) {
  const { city } = await params;
  const tour = await getTourByCity(city);
  if (!tour) notFound();

  const allBranches = await getAllBranches();
  const localBranch = allBranches.find(
    (b) => b.city.toLowerCase().includes(tour.city.toLowerCase()) || 
           tour.city.toLowerCase().includes(b.city.toLowerCase())
  );

  const airportInfo = embarkationAirports[tour.city];

  const waMessage = encodeURIComponent(
    `Assalamu'alaikum Samira Travel, saya ingin konsultasi pendaftaran Paket Umroh Embarkasi ${tour.city} (${tour.durationDays} Hari, ${tour.priceFormatted}). Mohon info jadwal keberangkatan & ketersediaan seat.`
  );

  const waHotline = localBranch?.whatsapp || siteConfig.headOffice.whatsappHotline;
  const waLink = `https://wa.me/${waHotline}?text=${waMessage}`;

  const touristTripSchema = buildTouristTripSchema(tour);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Beranda", item: "/" },
    { name: "Paket Umroh", item: "/paket-umroh" },
    { name: `Embarkasi ${tour.city}`, item: `/paket-umroh/${tour.slug}` },
  ]);

  const allEmbarkationSlugs = [
    { slug: "surabaya", name: "Surabaya", code: "SUB" },
    { slug: "jakarta", name: "Jakarta", code: "CGK" },
    { slug: "medan", name: "Medan", code: "KNO" },
    { slug: "makassar", name: "Makassar", code: "UPG" },
    { slug: "palembang", name: "Palembang", code: "PLM" },
    { slug: "padang", name: "Padang", code: "PDG" },
    { slug: "pontianak", name: "Pontianak", code: "PNK" },
    { slug: "aceh", name: "Aceh", code: "BTJ" },
    { slug: "denpasar", name: "Denpasar", code: "DPS" },
    { slug: "batam", name: "Batam", code: "BTH" },
    { slug: "pekanbaru", name: "Pekanbaru", code: "PKU" },
  ];

  return (
    <>
      <script
        id="tourist-trip-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristTripSchema) }}
      />
      <script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="bg-[#FAF8F5] min-h-screen pb-20">
        {/* Cinematic Sanctuary Hero Header */}
        <section className="relative overflow-hidden bg-[#04261E] text-white pt-24 sm:pt-28 pb-16 md:pb-24">
          {/* Photographic Architectural Background (1376x768, 16:9) */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/jadwal-paket-umroh-resmi-kemenag.webp"
              alt={`Paket Umroh 2026 Keberangkatan ${tour.city} Penerbangan Charter - Samira Travel`}
              fill
              priority
              quality={90}
              sizes="100vw"
              className="object-cover object-[center_32%]"
            />
            {/* Luminous Multilayer Directional Vignette */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#04261E]/95 via-[#04261E]/88 to-[#04261E]/60" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#04261E] to-transparent" />
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#04261E]/60 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb Nav */}
            <nav className="flex items-center gap-2 text-xs text-emerald-200/80 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
              <ChevronRight className="w-3.5 h-3.5 text-emerald-300/60" />
              <Link href="/paket-umroh" className="hover:text-white transition-colors">Paket Umroh</Link>
              <ChevronRight className="w-3.5 h-3.5 text-emerald-300/60" />
              <span className="text-white font-medium">Embarkasi {tour.city}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Title, Embarkation Badges & Specs */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 text-[#E6CA65] text-xs font-bold uppercase tracking-wider">
                    <Plane className="w-3.5 h-3.5" />
                    Embarkasi {tour.city} {airportInfo ? `(${airportInfo.code})` : ""}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium">
                    {tour.airline} Charter PP
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium">
                    {tour.durationDays} Hari Program
                  </span>
                </div>

                <h1 className="font-playfair text-2xl sm:text-4xl md:text-5xl font-bold text-white leading-tight drop-shadow-md">
                  {tour.title}
                </h1>

                {airportInfo && (
                  <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-emerald-200/90 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                    <MapPin className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>Terbang Langsung dari: <strong>{airportInfo.airport} ({airportInfo.code})</strong></span>
                  </div>
                )}

                <p className="text-sm md:text-base text-emerald-100/90 leading-relaxed max-w-2xl font-normal drop-shadow">
                  {tour.description}
                </p>

                {/* Assurance Badges */}
                <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-emerald-100/90 pt-1">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                    Jaminan Kepastian Jadwal Charter
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-[#C5A059]" />
                    Muthawwif & Tour Leader BNSP
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#C5A059]" />
                    Durasi: {tour.durationDays} Hari Perjalanan
                  </span>
                </div>

                {/* Quick Anchor Links */}
                <div className="flex flex-wrap items-center gap-2 pt-3">
                  <a
                    href="#fasilitas"
                    className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors"
                  >
                    Fasilitas All-In
                  </a>
                  <a
                    href="#itinerary"
                    className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors"
                  >
                    Jadwal Itinerary
                  </a>
                  <a
                    href="#persyaratan"
                    className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors"
                  >
                    Syarat & Ketentuan
                  </a>
                  <a
                    href="#keamanan-pembayaran"
                    className="px-3 py-1 rounded-lg bg-[#C5A059]/20 hover:bg-[#C5A059]/30 text-[#E6CA65] border border-[#C5A059]/30 text-xs font-medium transition-colors"
                  >
                    Rekening Resmi PT
                  </a>
                </div>
              </div>

              {/* Right Column: Price & Instant WhatsApp Reservation Card */}
              <div className="lg:col-span-4 bg-white text-[#0F172A] rounded-2xl md:rounded-3xl p-6 sm:p-7 border border-[#E8E3DA] shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                    Biaya Paket All-in (Quad)
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-bold border border-emerald-200">
                    Musim 1448 H
                  </span>
                </div>
                
                <div className="text-2xl sm:text-3xl font-bold text-[#084234] tracking-tight mt-1.5">
                  {tour.priceFormatted}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  Termasuk Tiket Charter PP, Hotel, Makan 3x, Visa Umroh, & Handling
                </div>

                {/* Key Flight & Accommodation Specs */}
                <div className="my-5 divide-y divide-slate-100 text-xs">
                  <div className="py-2.5 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-slate-500">
                      <Hotel className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                      <span>Tipe Kamar</span>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-slate-900">{tour.roomType}</span>
                      <span className="text-slate-400 text-[11px] block">(Sekamar Berempat)</span>
                    </div>
                  </div>

                  <div className="py-2.5 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-slate-500">
                      <Plane className="w-3.5 h-3.5 text-[#084234] shrink-0" />
                      <span>Penerbangan</span>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-slate-900">{tour.airline}</span>
                      <span className="text-emerald-700 text-[11px] font-semibold block">Direct Charter PP</span>
                    </div>
                  </div>

                  <div className="py-2.5 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-slate-500">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Status Seat</span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 font-bold text-emerald-800 text-[11px] bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Tersedia (Seat Terbatas)
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2.5">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-white" />
                    <span>Kunci Seat & Konsultasi (WA)</span>
                  </a>

                  <a
                    href="#itinerary"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
                  >
                    <span>Lihat Rangkaian Jadwal Perjalanan</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-center gap-1.5 text-[11px] text-slate-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Jaminan Pembayaran Resmi ke PT SAMIRA ALI WISATA</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Pillars Trust Assurance Bar */}
        <section className="bg-white border-b border-[#E8E3DA] py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 text-[#084234] flex items-center justify-center shrink-0">
                  <Plane className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Sistem Full Charter</h4>
                  <p className="text-[11px] text-slate-500">Jadwal & jam terbang pasti</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 text-[#084234] flex items-center justify-center shrink-0">
                  <Hotel className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Hotel Ring 1 Masjid</h4>
                  <p className="text-[11px] text-slate-500">Dekat pelataran shalat</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 text-[#084234] flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Muthawwif BNSP</h4>
                  <p className="text-[11px] text-slate-500">Bimbingan sunnah intensif</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 text-[#084234] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Resmi Kemenag RI</h4>
                  <p className="text-[11px] text-slate-500">No. 434/2021 & SISKOPATUH</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left 8 Cols: Hotels, Inclusions/Exclusions, Itinerary Stepper, Requirements */}
            <div className="lg:col-span-8 space-y-8">
              {/* 1. Hotel Accommodations & Video Proof Showcase */}
              <HotelTierShowcase initialTierId="safara" />

              {/* 2. Inclusions & Exclusions */}
              <div id="fasilitas" className="scroll-mt-24">
                <PackageFacilitySection
                  inclusions={tour.inclusions}
                  exclusions={tour.exclusions}
                  tourTitle={tour.title}
                  airline={tour.airline}
                  isDirectFlight={tour.isDirectFlight}
                />
              </div>

              {/* 3. Interactive Itinerary Stepper */}
              <div id="itinerary" className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 border border-[#E8E3DA] shadow-sm space-y-4 scroll-mt-24">
                <div className="border-b border-slate-100 pb-4">
                  <span className="text-[11px] font-bold text-[#084234] uppercase tracking-wider block">
                    Agenda Harian
                  </span>
                  <h2 className="font-playfair text-xl md:text-2xl font-bold text-[#0F172A]">
                    Rangkaian Jadwal Perjalanan (Itinerary)
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Bimbingan manasik, ziarah sejarah kenabian, miqat, tawaf, dan sa&apos;i didampingi muthawwif mukim.
                  </p>
                </div>
                <ItineraryStepper itinerary={tour.itinerary} />
              </div>

              {/* 4. Terms & Requirements (Revamped High-End UI UX) */}
              <div id="persyaratan" className="scroll-mt-24">
                <PackageRequirementsSection />
              </div>
            </div>

            {/* Right 4 Cols: Payment Security, Local Branch, Brochure, Other Cities */}
            <div className="lg:col-span-4 space-y-6">
              {/* Payment Security Card (Penting: Keamanan Pembayaran) */}
              <div id="keamanan-pembayaran" className="scroll-mt-24">
                <PaymentSecurityCard />
              </div>

              {/* Local Branch Contact Card */}
              {localBranch ? (
                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E8E3DA] shadow-sm space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#084234] uppercase tracking-wider">
                      Kantor Cabang Resmi
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-bold">
                      {localBranch.city}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-[#0F172A]">
                    {localBranch.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {localBranch.address}
                  </p>

                  <div className="pt-2 border-t border-slate-100 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500">Telepon:</span>
                      <span className="font-medium text-slate-800">{localBranch.phone}</span>
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <a
                        href={`https://wa.me/${localBranch.whatsapp}?text=${waMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Chat WhatsApp</span>
                      </a>
                      <Link
                        href={`/kantor-cabang/${localBranch.slug}`}
                        className="px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
                        title="Detail Cabang & Peta"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E8E3DA] shadow-sm space-y-3.5">
                  <span className="text-[11px] font-bold text-[#084234] uppercase tracking-wider block">
                    Layanan Calon Jamaah
                  </span>
                  <h3 className="font-bold text-base text-[#0F172A]">
                    Konsultasi Keberangkatan {tour.city}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Pendaftaran jamaah wilayah {tour.city} dan sekitarnya dapat dikonsultasikan langsung melalui Hotline Resmi Samira Travel Pusat atau jaringan 26 kantor cabang kami.
                  </p>
                  <div className="pt-2 border-t border-slate-100">
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Hubungi Hotline Resmi (WA)</span>
                    </a>
                  </div>
                </div>
              )}

              {/* Official Departure Brochure Poster (Scanned: 1376x768 16:9 Landscape) */}
              {tour.flyerImage && (
                <div className="bg-white rounded-2xl p-5 border border-[#E8E3DA] shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#084234] uppercase tracking-wider">
                      Brosur Resmi Keberangkatan
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">16:9 Native</span>
                  </div>

                  <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden shadow-inner border border-slate-100 group">
                    <Image
                      src={tour.flyerImage}
                      alt={`Brosur Jadwal dan Biaya Paket Umroh Embarkasi ${tour.city} - Samira Travel`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 30vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3 py-1 rounded-full bg-white/90 text-slate-800 text-xs font-bold shadow">
                        Klik untuk Perbesar
                      </span>
                    </div>
                  </div>

                  <a
                    href={tour.flyerImage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Buka Brosur Resolusi Penuh</span>
                  </a>
                </div>
              )}

              {/* Other Embarkation Cities Links */}
              <div className="bg-white rounded-2xl p-5 border border-[#E8E3DA] shadow-sm space-y-3">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                  11 Kota Embarkasi Langsung
                </span>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Pilih kota keberangkatan terdekat dari domisili Anda untuk menghemat waktu dan biaya transit:
                </p>
                <div className="grid grid-cols-2 gap-1.5 pt-1">
                  {allEmbarkationSlugs.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/paket-umroh/${item.slug}`}
                      className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-between transition-colors ${
                        item.slug === tour.slug
                          ? "bg-[#084234] text-white"
                          : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-100"
                      }`}
                    >
                      <span>{item.name}</span>
                      <span className={`text-[10px] ${item.slug === tour.slug ? "text-[#C5A059]" : "text-slate-400"}`}>
                        {item.code}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Consultation Banner */}
          <div className="mt-16 bg-gradient-to-r from-[#04261E] to-[#084234] rounded-3xl p-8 sm:p-12 text-white text-center sm:text-left relative overflow-hidden shadow-xl">
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              <div className="sm:col-span-8 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                  Konsultasi Gratis Calon Jamaah
                </span>
                <h3 className="font-playfair text-2xl sm:text-3xl font-bold">
                  Siap Beribadah ke Baitullah dari {tour.city}?
                </h3>
                <p className="text-sm text-emerald-100/85 max-w-xl leading-relaxed">
                  Dapatkan kemudahan proses registrasi SISKOPATUH Kemenag RI, kepastian seat pesawat charter PP, dan bimbingan dokumen paspor bersama konsultan umroh resmi Samira Travel.
                </p>
              </div>
              <div className="sm:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Chat WhatsApp Sekarang</span>
                </a>
                <Link
                  href="/kantor-cabang"
                  className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors border border-white/15"
                >
                  <Building2 className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Lihat 26 Jaringan Cabang</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
