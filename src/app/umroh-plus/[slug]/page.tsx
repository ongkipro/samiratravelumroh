import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { getTourBySlug, getPlusTours } from "@/lib/data-service";
import { buildTouristTripSchema, buildBreadcrumbSchema } from "@/lib/seo";
import { ItineraryStepper } from "@/components/packages/ItineraryStepper";
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

  return {
    title: `Paket ${tour.title} ${tour.durationDays} Hari 2026 — Biaya ${tour.priceFormatted} | Samira Travel`,
    description: tour.description,
    alternates: {
      canonical: `https://samiratravelumrohhaji.com/umroh-plus/${slug}`,
    },
    openGraph: {
      title: `Paket ${tour.title} 2026 | Samira Travel`,
      description: tour.description,
      url: `https://samiratravelumrohhaji.com/umroh-plus/${slug}`,
      images: [tour.flyerImage || "/images/banner-hero-1.jpg"],
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
            <nav className="flex items-center gap-2 text-xs text-emerald-200/80 mb-6">
              <Link href="/" className="hover:text-white">Beranda</Link>
              <span>/</span>
              <Link href="/umroh-plus" className="hover:text-white">Umroh Plus</Link>
              <span>/</span>
              <span className="text-white font-semibold truncate">{tour.title}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#C5A059] uppercase">
                  Wisata Halal Plus • {tour.airline} • {tour.durationDays} Hari
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
                    Jadwal Terbit Terverifikasi
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-[#C5A059]" />
                    Tour Leader Bersertifikat BNSP
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#C5A059]" />
                    Jadwal: {tour.departurePeriod}
                  </span>
                </div>
              </div>

              {/* Price Box */}
              <div className="lg:col-span-4 bg-white text-[#0F172A] rounded-2xl md:rounded-3xl p-6 shadow-xl border border-[#E8E3DA]">
                <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                  Biaya Paket All-in (Quad)
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#084234] tracking-tight mt-1">
                  {tour.priceFormatted}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  Termasuk Tiket PP, Hotel, Makan Fullboard, Visa Umrah & Wisata
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
                      <span>Penerbangan & Durasi</span>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-slate-900">{tour.airline}</span>
                      <span className="text-emerald-700 text-[11px] font-semibold block">{tour.durationDays} Hari Program</span>
                    </div>
                  </div>

                  <div className="py-2.5 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-slate-500">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Status Seat</span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 font-bold text-emerald-800 text-[11px]">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Tersedia (Seat Terbatas)
                    </span>
                  </div>
                </div>

                <a
                  href="#itinerary"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#084234] hover:bg-[#04261E] text-white font-bold text-sm shadow-md transition-all"
                >
                  <span>Lihat Rangkaian Rute & Destinasi</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
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
              <div className="bg-white rounded-2xl md:rounded-3xl p-6 border border-[#E8E3DA] shadow-sm space-y-6">
                <h2 className="font-playfair text-xl md:text-2xl font-bold text-[#0F172A]">
                  Fasilitas & Layanan Program
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xs font-bold text-[#084234] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span>Termasuk Biaya:</span>
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

                  <div>
                    <h3 className="text-xs font-bold text-red-700 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <XCircle className="w-4 h-4 text-red-600" />
                      <span>Belum Termasuk:</span>
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

              {/* Itinerary */}
              <div className="bg-white rounded-2xl md:rounded-3xl p-6 border border-[#E8E3DA] shadow-sm space-y-4">
                <h2 className="font-playfair text-xl md:text-2xl font-bold text-[#0F172A]">
                  Rencana Perjalanan (Itinerary)
                </h2>
                <ItineraryStepper itinerary={tour.itinerary} />
              </div>
            </div>

            {/* Right 4 Cols */}
            <div className="lg:col-span-4 space-y-6">
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
