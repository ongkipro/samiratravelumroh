import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { getTourByCity, getRegularTours, getAllBranches } from "@/lib/data-service";
import { buildTouristTripSchema, buildBreadcrumbSchema } from "@/lib/seo";
import { ItineraryStepper } from "@/components/packages/ItineraryStepper";
import { 
  Plane, 
  Hotel, 
  Calendar, 
  MapPin, 
  CheckCircle, 
  XCircle, 
  ShieldCheck, 
  Star, 
  Award, 
  Phone,
  FileText,
  Clock,
  ChevronRight
} from "lucide-react";

interface Props {
  params: Promise<{ city: string }>;
}

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

  return {
    title: `Biaya & Paket Umroh ${tour.city} ${tour.durationDays} Hari 2026 — Mulai ${tour.priceFormatted} | Samira Travel`,
    description: `Daftar paket umroh resmi keberangkatan langsung dari ${tour.city} durasi ${tour.durationDays} hari bersama Samira Travel. Penerbangan charter ${tour.airline}, hotel ${tour.hotelMakkah.name}, bimbingan Muthawwif berpengalaman.`,
    alternates: {
      canonical: `https://samiratravelumrohhaji.com/paket-umroh/${city}`,
    },
    openGraph: {
      title: `Paket Umroh ${tour.city} ${tour.durationDays} Hari 2026 | Samira Travel`,
      description: `Penerbangan langsung charter ${tour.airline} dari ${tour.city}. Biaya ${tour.priceFormatted} all-in jaminan pasti berangkat.`,
      url: `https://samiratravelumrohhaji.com/paket-umroh/${city}`,
      images: [tour.flyerImage || "/images/banner-hero-1.jpg"],
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

  const touristTripSchema = buildTouristTripSchema(tour);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Beranda", item: "/" },
    { name: "Paket Umroh", item: "/paket-umroh" },
    { name: `${tour.city}`, item: `/paket-umroh/${tour.slug}` },
  ]);

  return (
    <>
      <Script
        id="tourist-trip-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristTripSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="bg-[#FAF8F5] min-h-screen pb-16">
        {/* Top Header Banner */}
        <section className="bg-gradient-to-b from-[#04261E] to-[#084234] text-white pt-8 pb-14 md:pt-12 md:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-emerald-200/80 mb-6">
              <Link href="/" className="hover:text-white">Beranda</Link>
              <span>/</span>
              <Link href="/paket-umroh" className="hover:text-white">Paket Umroh</Link>
              <span>/</span>
              <span className="text-white font-semibold">{tour.city}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Title & Key Specs */}
              <div className="lg:col-span-8 space-y-4">
                <div className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#C5A059] uppercase">
                  Embarkasi {tour.city} • Penerbangan Langsung {tour.airline} • {tour.durationDays} Hari
                </div>

                <h1 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  {tour.title}
                </h1>

                <p className="text-sm md:text-base text-emerald-100/90 leading-relaxed max-w-2xl">
                  {tour.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-emerald-100/80 pt-1">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                    Jadwal Charter Terkonfirmasi
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-[#C5A059]" />
                    Muthawwif Bersertifikasi BNSP
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#C5A059]" />
                    Jadwal: {tour.departurePeriod}
                  </span>
                </div>
              </div>

              {/* Right Column: Price & Instant WhatsApp Box */}
              <div className="lg:col-span-4 bg-white text-[#0F172A] rounded-2xl md:rounded-3xl p-6 shadow-xl border border-[#E8E3DA]">
                <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                  Biaya Paket All-in (Quad)
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#084234] tracking-tight mt-1">
                  {tour.priceFormatted}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  Termasuk Tiket PP, Hotel, Makan 3x, Visa, & Handling
                </div>

                {/* Key Flight & Accommodation Specs (Clean Divide-Y, No AI Slop Cards) */}
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
                      <span className="text-emerald-700 text-[11px] font-semibold block">Direct PP • Charter Seat</span>
                    </div>
                  </div>

                  <div className="py-2.5 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-slate-500">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Status Seat</span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 font-bold text-emerald-800 text-[11px]">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Tersedia (Sisa 12 Kursi)
                    </span>
                  </div>
                </div>

                <a
                  href="#itinerary"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#084234] hover:bg-[#04261E] text-white font-bold text-sm shadow-md transition-all"
                >
                  <span>Lihat Rangkaian Jadwal Perjalanan</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left 8 Cols: Hotels, Inclusions/Exclusions, Itinerary Stepper, Requirements */}
            <div className="lg:col-span-8 space-y-8">
              {/* 1. Hotel Accommodations */}
              <div className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 border border-[#E8E3DA] shadow-sm space-y-4">
                <h2 className="font-playfair text-xl md:text-2xl font-bold text-[#0F172A] flex items-center gap-2">
                  <Hotel className="w-5 h-5 text-[#084234]" />
                  <span>Akomodasi Hotel Bintang Pilihan</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 sm:divide-x divide-slate-100">
                  {/* Hotel Makkah */}
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

                  {/* Hotel Madinah */}
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

              {/* 2. Inclusions & Exclusions */}
              <div className="bg-white rounded-2xl md:rounded-3xl p-6 border border-[#E8E3DA] shadow-sm space-y-6">
                <h2 className="font-playfair text-xl md:text-2xl font-bold text-[#0F172A]">
                  Fasilitas & Layanan Paket
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Sudah Termasuk */}
                  <div>
                    <h3 className="text-xs font-bold text-[#084234] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span>Biaya Sudah Termasuk:</span>
                    </h3>
                    <ul className="space-y-2 text-xs text-slate-600">
                      {tour.inclusions.map((inc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Belum Termasuk */}
                  <div>
                    <h3 className="text-xs font-bold text-red-700 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <XCircle className="w-4 h-4 text-red-600" />
                      <span>Biaya Belum Termasuk:</span>
                    </h3>
                    <ul className="space-y-2 text-xs text-slate-600">
                      {tour.exclusions.map((exc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <XCircle className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                          <span>{exc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* 3. Interactive Itinerary Stepper */}
              <div className="bg-white rounded-2xl md:rounded-3xl p-6 border border-[#E8E3DA] shadow-sm space-y-4">
                <h2 className="font-playfair text-xl md:text-2xl font-bold text-[#0F172A]">
                  Rangkaian Jadwal Perjalanan (Itinerary)
                </h2>
                <p className="text-xs text-slate-500">
                  Klik setiap hari untuk melihat agenda detail ziarah, miqat, thawaf, dan manasik.
                </p>
                <ItineraryStepper itinerary={tour.itinerary} />
              </div>

              {/* 4. Terms & Requirements */}
              <div className="bg-white rounded-2xl md:rounded-3xl p-6 border border-[#E8E3DA] shadow-sm space-y-4">
                <h2 className="font-playfair text-xl md:text-2xl font-bold text-[#0F172A] flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#084234]" />
                  <span>Persyaratan Pendaftaran</span>
                </h2>
                <ul className="space-y-2 text-xs text-slate-600">
                  {tour.terms.map((term, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>{term}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right 4 Cols: Local Branch, Trust Checklist, Assistance */}
            <div className="lg:col-span-4 space-y-6">
              {/* Local Branch Contact Card */}
              {localBranch && (
                <div className="bg-white rounded-2xl p-5 border border-[#E8E3DA] shadow-sm space-y-3">
                  <span className="text-[11px] font-bold text-[#084234] uppercase tracking-wider block">
                    Kantor Cabang Terdekat
                  </span>
                  <h3 className="font-bold text-sm text-[#0F172A]">
                    {localBranch.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {localBranch.address}
                  </p>
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                    <span className="text-xs text-slate-500 font-medium">
                      {localBranch.phone}
                    </span>
                    <Link
                      href={`/kantor-cabang/${localBranch.slug}`}
                      className="px-3 py-1.5 rounded-lg bg-[#084234] hover:bg-[#04261E] text-white text-xs font-bold flex items-center gap-1 transition-colors"
                    >
                      <span>Info Cabang</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}

              {/* Official Departure Brochure Poster */}
              {tour.flyerImage && (
                <div className="bg-white rounded-2xl p-4 border border-[#E8E3DA] shadow-sm space-y-2">
                  <span className="text-[11px] font-bold text-[#084234] uppercase tracking-wider block">
                    Brosur Keberangkatan Resmi
                  </span>
                  <div className="relative aspect-[1/1.4] w-full rounded-xl overflow-hidden shadow-inner border border-slate-100">
                    <Image
                      src={tour.flyerImage}
                      alt={`Brosur Paket Umroh ${tour.city}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 30vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <a
                    href={tour.flyerImage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
                  >
                    <span>Buka Brosur Resolusi Penuh</span>
                  </a>
                </div>
              )}

              {/* Other Cities Links */}
              <div className="bg-white rounded-2xl p-5 border border-[#E8E3DA] shadow-sm space-y-3">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                  Pilihan Embarkasi Lainnya
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {["surabaya", "jakarta", "medan", "makassar", "palembang", "padang", "pontianak", "aceh", "denpasar", "batam", "pekanbaru"].map((slug) => (
                    <Link
                      key={slug}
                      href={`/paket-umroh/${slug}`}
                      className={`px-2.5 py-1 rounded-lg text-xs font-semibold capitalize transition-colors ${
                        slug === tour.slug
                          ? "bg-[#084234] text-white"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {slug}
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
