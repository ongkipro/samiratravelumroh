import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getTourBySlug, getPlusTours } from "@/lib/data-service";
import { buildTouristTripSchema, buildBreadcrumbSchema } from "@/lib/seo";
import { ItineraryStepper } from "@/components/packages/ItineraryStepper";
import { PackageFacilitySection } from "@/components/packages/PackageFacilitySection";
import { PaymentSecurityCard } from "@/components/packages/PaymentSecurityCard";
import { PackageRequirementsSection } from "@/components/packages/PackageRequirementsSection";
import { 
  MapPin, 
  Calendar, 
  Hotel, 
  Plane, 
  CheckCircle, 
  XCircle, 
  ArrowRight,
  ShieldCheck, 
  Star, 
  Award, 
  FileText,
  Clock,
  ChevronRight
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const plusTours = await getPlusTours();
  return plusTours.map((t) => ({
    slug: t.slug.toLowerCase(),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tour = await getTourBySlug(slug);
  if (!tour) return { title: "Paket Tidak Ditemukan" };

  const cleanTitle = tour.title
    .replace(/^Paket\s+/i, "")
    .replace(new RegExp(`\\s+${tour.durationDays}\\s+Hari$`, "i"), "");
  const title = `Paket ${cleanTitle} ${tour.durationDays} Hari 2026 - Biaya ${tour.priceFormatted}`;
  const description = `${tour.description} Nikmati kenyamanan ibadah umrah plus wisata halal ${tour.city} bersama Samira Travel, akomodasi hotel bintang, dan muthawif bersertifikasi resmi.`;
  const pageUrl = `https://samiratravelumrohhaji.com/umroh-plus/${slug}`;
  const ogImage = tour.flyerImage || "/images/samira-travel-umroh-dan-haji-resmi-kemenag.webp";

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
          alt: `Paket ${tour.title} 2026 Samira Travel`,
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

export default async function UmrohPlusDetailPage({ params }: Props) {
  const { slug } = await params;
  const tour = await getTourBySlug(slug);
  if (!tour) notFound();

  const touristTripSchema = buildTouristTripSchema(tour);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Beranda", item: "/" },
    { name: "Umroh Plus", item: "/umroh-plus" },
    { name: `${tour.title}`, item: `/umroh-plus/${tour.slug}` },
  ]);

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

      <div className="bg-[#FAF8F5] min-h-screen pb-16">
        {/* Top Header Banner with High-Clarity Destination Photography */}
        <section className="relative overflow-hidden bg-[#04261E] text-white pt-24 sm:pt-28 pb-16 md:pb-24">
          {/* Destination Photographic Background with Full Clarity & Directional Scrim */}
          {tour.flyerImage && (
            <div className="absolute inset-0 z-0">
              <Image
                src={tour.flyerImage}
                alt={`Destinasi Wisata Halal ${tour.title} | Samira Travel`}
                fill
                priority
                quality={95}
                sizes="100vw"
                className="object-cover object-center"
              />
              {/* Directional Cinematic Scrim: deep contrast on text side, clear and vibrant on landscape side */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#021A14]/92 via-[#021A14]/75 to-[#021A14]/40 lg:from-[#021A14]/90 lg:via-[#021A14]/60 lg:via-45% lg:to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#04261E] to-transparent" />
              <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#021A14]/70 to-transparent" />
            </div>
          )}

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <nav className="flex items-center gap-2 text-xs text-emerald-100/80 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
              <span>/</span>
              <Link href="/umroh-plus" className="hover:text-white transition-colors">Umroh Plus</Link>
              <span>/</span>
              <span className="text-white font-semibold truncate">{tour.title}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A059]/25 backdrop-blur-md border border-[#C5A059]/50 text-[#F5DE88] text-xs font-bold uppercase tracking-wider">
                    Wisata Halal Plus
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-medium">
                    {tour.airline}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-medium">
                    {tour.durationDays} Hari Program
                  </span>
                </div>

                <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-[#FAF8F5] leading-[1.2] drop-shadow-md">
                  {tour.title}
                </h1>

                {tour.destinationHighlight && (
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F5DE88] bg-black/40 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 max-w-2xl shadow-sm">
                    <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <div className="leading-snug">
                      <span className="font-bold text-white uppercase tracking-wider text-[11px] block mb-0.5">Destinasi Spesial:</span>
                      <span className="text-emerald-50/95">{tour.destinationHighlight}</span>
                    </div>
                  </div>
                )}

                <p className="text-sm sm:text-base text-emerald-100/95 leading-relaxed max-w-2xl drop-shadow">
                  {tour.description}
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-white/90">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/35 backdrop-blur-md border border-white/15">
                    <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                    Jadwal Terbit Terverifikasi
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/35 backdrop-blur-md border border-white/15">
                    <Award className="w-4 h-4 text-[#C5A059]" />
                    Tour Leader Bersertifikat BNSP
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/35 backdrop-blur-md border border-white/15">
                    <Clock className="w-4 h-4 text-[#C5A059]" />
                    Musim: {tour.departurePeriod}
                  </span>
                </div>
              </div>

              {/* Price & Fast Reservation Card (Frosted Luxury Glass) */}
              <div className="lg:col-span-4 bg-white/95 backdrop-blur-xl text-[#0F172A] rounded-3xl p-6 md:p-8 border border-white/40 shadow-2xl ring-1 ring-black/5">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Biaya Paket Umroh Plus
                </span>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#084234] tracking-tight mt-1 tabular-nums">
                  {tour.priceFormatted}
                </div>
                <div className="text-[11px] text-slate-500 mt-1 font-medium">
                  All-in Quad, Tiket PP, Hotel Bintang, Visa & Wisata
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
                      <span className="text-slate-400 text-[10px] block font-medium">(Sekamar Berempat)</span>
                    </div>
                  </div>

                  <div className="py-2.5 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-slate-500">
                      <Plane className="w-3.5 h-3.5 text-[#084234] shrink-0" />
                      <span>Penerbangan</span>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-slate-900">{tour.airline}</span>
                      <span className="text-emerald-700 text-[10px] font-bold block">{tour.durationDays} Hari Program</span>
                    </div>
                  </div>

                  <div className="py-2.5 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-slate-500">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Ketersediaan Seat</span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 font-bold text-emerald-800 text-[11px] bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Sisa Kursi Terbatas
                    </span>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <a
                    href={`https://wa.me/6285607179735?text=${encodeURIComponent(`Assalamu'alaikum Samira Travel, saya ingin konsultasi pendaftaran ${tour.title} musim 2026.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#B8934A] hover:brightness-105 text-[#04261E] font-extrabold text-sm shadow-md transition-all active:scale-[0.98]"
                  >
                    <span>Konsultasi Paket Umroh Plus</span>
                  </a>

                  <a
                    href="#itinerary"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-[#084234] font-bold text-xs border border-[#E8E3DA] transition-all"
                  >
                    <span>Lihat Rangkaian Rute & Destinasi</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Details */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-8">
              {/* Hotel */}
              <div className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 border border-[#E8E3DA] shadow-sm space-y-4">
                <h2 className="font-playfair text-xl md:text-2xl font-bold text-[#0F172A] flex items-center gap-2">
                  <Hotel className="w-5 h-5 text-[#084234]" />
                  <span>Akomodasi Hotel & Fasilitas Istirahat</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 sm:divide-x divide-slate-100">
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold text-[#C5A059] uppercase tracking-wider block">
                      Hotel Makkah Al-Mukarramah
                    </span>
                    <h3 className="text-base font-bold text-[#0F172A]">
                      {tour.hotelMakkah.name}
                    </h3>
                    <div className="flex items-center gap-1 text-amber-500">
                      {Array.from({ length: tour.hotelMakkah.stars }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="text-xs text-slate-500 font-medium ml-1">
                        Bintang {tour.hotelMakkah.stars}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 pt-0.5">
                      Jarak: {tour.hotelMakkah.distanceText}
                    </p>
                  </div>

                  <div className="space-y-1.5 sm:pl-6">
                    <span className="text-[11px] font-bold text-[#C5A059] uppercase tracking-wider block">
                      Hotel Madinah Al-Munawwarah
                    </span>
                    <h3 className="text-base font-bold text-[#0F172A]">
                      {tour.hotelMadinah.name}
                    </h3>
                    <div className="flex items-center gap-1 text-amber-500">
                      {Array.from({ length: tour.hotelMadinah.stars }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="text-xs text-slate-500 font-medium ml-1">
                        Bintang {tour.hotelMadinah.stars}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 pt-0.5">
                      Jarak: {tour.hotelMadinah.distanceText}
                    </p>
                  </div>
                </div>
              </div>

              {/* Inclusions / Exclusions */}
              <PackageFacilitySection
                inclusions={tour.inclusions}
                exclusions={tour.exclusions}
                tourTitle={tour.title}
                airline={tour.airline}
                isDirectFlight={tour.isDirectFlight}
              />

              {/* Itinerary */}
              <div id="itinerary" className="bg-white rounded-2xl md:rounded-3xl p-6 border border-[#E8E3DA] shadow-sm space-y-4 scroll-mt-24">
                <h2 className="font-playfair text-xl md:text-2xl font-bold text-[#0F172A]">
                  Rencana Perjalanan (Itinerary)
                </h2>
                <ItineraryStepper itinerary={tour.itinerary} />
              </div>

              {/* Requirements */}
              <PackageRequirementsSection />
            </div>

            {/* Right 4 Cols */}
            <div className="lg:col-span-4 space-y-6">
              {/* Payment Security Card (Penting: Keamanan Pembayaran) */}
              <PaymentSecurityCard />

              {/* Destination Visual Poster matching thumbnail */}
              {tour.flyerImage && (
                <div className="bg-white rounded-2xl p-4 border border-[#E8E3DA] shadow-sm space-y-2">
                  <span className="text-[11px] font-bold text-[#084234] uppercase tracking-wider block">
                    Dokumentasi Destinasi Wisata
                  </span>
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden shadow-inner border border-slate-100">
                    <Image
                      src={tour.flyerImage}
                      alt={`Foto Destinasi ${tour.title}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 30vw"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              )}

              {/* Guaranteed Trust */}
              <div className="bg-[#04261E] text-white rounded-2xl p-5 space-y-3 border border-[#084234]/80 shadow-xl">
                <span className="text-[11px] font-bold text-[#C5A059] uppercase tracking-wider block">
                  Standar Mutu Samira Travel
                </span>
                <p className="text-xs text-emerald-100/90 leading-relaxed">
                  Semua program Umroh Plus dirancang dengan ritme perjalanan yang ramah bagi seluruh anggota keluarga. Waktu ibadah utama di Masjidil Haram & Nabawi tetap menjadi prioritas tanpa tergesa-gesa.
                </p>
              </div>

              {/* Other Plus Programs */}
              <div className="bg-white rounded-2xl p-5 border border-[#E8E3DA] shadow-sm space-y-3">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                  Pilihan Umroh Plus Lainnya
                </span>
                <div className="flex flex-col gap-2">
                  {[
                    { slug: "thaif", name: "Umroh Plus Ta'if (Thaif)" },
                    { slug: "al-ula", name: "Umroh Plus Al-Ula Hegra" },
                    { slug: "turki", name: "Umroh Plus Turki Bosphorus" },
                    { slug: "riyadh", name: "Umroh Plus Riyadh Diriyah" },
                    { slug: "jeddah", name: "Umroh Plus Jeddah Al-Balad" },
                  ].map((item) => (
                    <Link
                      key={item.slug}
                      href={`/umroh-plus/${item.slug}`}
                      className={`p-2.5 rounded-xl text-xs font-semibold transition-colors flex items-center justify-between ${
                        item.slug === tour.slug
                          ? "bg-[#084234] text-white font-bold"
                          : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
