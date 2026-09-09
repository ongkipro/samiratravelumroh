import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getHajiFuroda } from "@/lib/data-service";
import { buildTouristTripSchema, buildBreadcrumbSchema } from "@/lib/seo";
import { ItineraryStepper } from "@/components/packages/ItineraryStepper";
import { HajiFacilitySection } from "@/components/packages/HajiFacilitySection";
import { 
  ShieldCheck, 
  Award, 
  CheckCircle, 
  Hotel, 
  Star,
  FileCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Haji Khusus Furoda 2026 Resmi - Kuota Langsung Berangkat",
  description:
    "Program Haji Furoda Mujamalah 2026 resmi kuota Kerajaan Arab Saudi. Biaya USD 17.000, hotel bintang 5 pelataran, maktab VIP, dan garansi 100% full refund DP.",
  alternates: {
    canonical: "https://samiratravelumrohhaji.com/haji-khusus-furoda",
  },
  openGraph: {
    title: "Haji Khusus Furoda 2026 Resmi - Kuota Langsung Berangkat",
    description:
      "Program Haji Khusus Furoda Mujamalah 2026 langsung berangkat kuota resmi Kerajaan Arab Saudi. Garansi 100% Full Refund DP.",
    url: "https://samiratravelumrohhaji.com/haji-khusus-furoda",
    siteName: "Samira Travel",
    images: [
      {
        url: "/images/samira-travel-umroh-dan-haji-resmi-kemenag.webp",
        width: 1200,
        height: 630,
        alt: "Haji Khusus Furoda 2026 Samira Travel",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haji Khusus Furoda 2026 Resmi - Kuota Langsung Berangkat",
    description: "Langsung berangkat musim haji 2026 dengan kuota resmi Mujamalah Kerajaan Arab Saudi. Garansi 100% Full Refund DP.",
    images: ["/images/samira-travel-umroh-dan-haji-resmi-kemenag.webp"],
  },
};

export default async function HajiFurodaPage() {
  const tour = await getHajiFuroda();

  const touristTripSchema = buildTouristTripSchema(tour);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Beranda", item: "/" },
    { name: "Haji Khusus Furoda", item: "/haji-khusus-furoda" },
  ]);

  return (
    <>
      <script
        id="furoda-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristTripSchema) }}
      />
      <script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="bg-[#FAF8F5] min-h-screen pb-16">
        {/* Luxury Gold/Emerald Hero Banner with Kaaba Hajj Photography */}
        <section className="relative overflow-hidden bg-[#04261E] text-white pt-24 sm:pt-28 pb-20 md:pb-28">
          {/* High-Clarity Photographic Kaaba Hajj Sanctuary Background */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/haji-khusus-furoda-mujamalah-resmi-kemenag.webp"
              alt="Ibadah Haji Khusus Furoda Resmi Langsung Berangkat ke Baitullah - Samira Travel"
              fill
              priority
              quality={95}
              sizes="100vw"
              className="object-cover object-[center_35%]"
            />
            {/* Luminous Atmosphere: Soft translucent shade on left for text legibility, fully transparent on right so Kaaba & Minarets shine */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#04261E]/85 via-[#04261E]/45 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#04261E] to-transparent" />
            <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#04261E]/60 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <nav className="flex items-center gap-2 text-xs text-emerald-200/80 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
              <span>/</span>
              <span className="text-white font-medium">Haji Khusus Furoda</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#C5A059] uppercase block">
                  Visa Mujamalah Resmi Musim 1448 H
                </span>

                <h1 className="font-playfair text-3xl sm:text-5xl lg:text-6xl font-bold text-[#FAF8F5] leading-[1.15] drop-shadow-md">
                  Haji Khusus Furoda 2026 - Kuota Resmi Langsung Berangkat
                </h1>

                <p className="text-sm sm:text-base md:text-lg text-emerald-100/90 max-w-xl leading-relaxed font-normal drop-shadow">
                  Berangkat di musim haji tahun berjalan dengan kuota resmi Kerajaan Arab Saudi. Dilengkapi akomodasi bintang lima pelataran masjid dan tenda maktab VIP ber-AC di Arafah & Mina.
                </p>

                {/* Micro-Assurance Indicators */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-xs sm:text-sm text-emerald-100/90 font-medium">
                  <span className="inline-flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
                    Garansi 100% Full Refund DP
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#C5A059] shrink-0" />
                    Muthawwif Bersertifikat BNSP
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#C5A059] shrink-0" />
                    Maktab VIP AC Fullboard
                  </span>
                </div>
              </div>

              {/* Price & Fast Reservation Card */}
              <div className="lg:col-span-4 bg-white/95 backdrop-blur-md text-[#0F172A] rounded-3xl p-6 md:p-8 border border-[#C5A059]/40 shadow-2xl">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Biaya Paket Haji Furoda
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#084234] tracking-tight mt-1 tabular-nums">
                  USD 17.000
                </div>
                <div className="text-xs text-slate-500 mt-1 font-medium">
                  Durasi Perjalanan 20 Hari, Hotel Bintang 5 Pelataran
                </div>

                <div className="my-5 pt-4 border-t border-slate-100 space-y-2.5 text-xs text-slate-600">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Uang Muka (DP):</span>
                    <span className="font-bold text-slate-900">USD 5.000 (Refundable)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Tenda Arafah & Mina:</span>
                    <span className="font-bold text-slate-900">Maktab VIP AC Fullboard</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Penerbangan:</span>
                    <span className="font-bold text-slate-900">Saudia Airlines Direct</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Status Kuota:</span>
                    <span className="font-bold text-[#084234] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
                      Pendaftaran Dibuka
                    </span>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <a
                    href="https://wa.me/6285607179735?text=Assalamu%27alaikum%20Samira%20Travel,%20saya%20ingin%20konsultasi%20pendaftaran%20Haji%20Khusus%20Furoda%202026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#B8934A] hover:brightness-105 text-[#04261E] font-extrabold text-sm shadow-md transition-all active:scale-[0.98]"
                  >
                    <span>Konsultasi Pendaftaran Haji</span>
                  </a>

                  <a
                    href="#itinerary"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-[#084234] font-bold text-xs border border-[#E8E3DA] transition-all"
                  >
                    <span>Lihat Rangkaian 20 Hari Ibadah Haji</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Body: Hotels, Facilities, Itinerary */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-8">
              {/* Hotel */}
              <div className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 border border-[#E8E3DA] shadow-xs space-y-5">
                <div className="border-b border-slate-100 pb-3">
                  <h2 className="font-playfair text-xl md:text-2xl font-bold text-[#0F172A] flex items-center gap-2">
                    <Hotel className="w-5 h-5 text-[#084234]" />
                    <span>Akomodasi Hotel Bintang 5 Pilihan</span>
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 gap-6 sm:gap-8 pt-1">
                  <div>
                    <span className="text-[11px] font-bold text-[#C5A059] uppercase tracking-wider block mb-1">
                      Hotel Makkah (Depan Pelataran Haram)
                    </span>
                    <h3 className="text-base font-bold text-[#0F172A] mb-1">
                      {tour.hotelMakkah.name}
                    </h3>
                    <div className="flex items-center gap-1 text-amber-500 mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="text-xs text-slate-500 font-medium ml-1">Bintang 5 Luxury</span>
                    </div>
                    <p className="text-xs text-slate-600">{tour.hotelMakkah.distanceText}</p>
                  </div>

                  <div className="sm:pl-8 pt-4 sm:pt-0">
                    <span className="text-[11px] font-bold text-[#C5A059] uppercase tracking-wider block mb-1">
                      Hotel Madinah (Dekat Gerbang Raudhah)
                    </span>
                    <h3 className="text-base font-bold text-[#0F172A] mb-1">
                      {tour.hotelMadinah.name}
                    </h3>
                    <div className="flex items-center gap-1 text-amber-500 mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="text-xs text-slate-500 font-medium ml-1">Bintang 5 Luxury</span>
                    </div>
                    <p className="text-xs text-slate-600">{tour.hotelMadinah.distanceText}</p>
                  </div>
                </div>
              </div>

              {/* Inclusions & Payment Terms (Revamped VIP Islamic UI UX) */}
              <HajiFacilitySection />

              {/* Equipment Kit */}
              <div className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 border border-[#E8E3DA] shadow-xs space-y-4">
                <h2 className="font-playfair text-xl md:text-2xl font-bold text-[#0F172A]">
                  Kit Perlengkapan Eksklusif Haji Khusus
                </h2>
                <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-md border border-slate-100">
                  <Image
                    src="/images/fasilitas-koper-dan-perlengkapan-umroh-eksekutif.webp"
                    alt="Fasilitas Koper dan Perlengkapan Eksklusif Haji Khusus - Samira Travel"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-center"
                  />
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Termasuk koper bagasi 28 inci fiber, koper kabin 20 inci, tas paspor gantung, tas ransel lipat, kain ihram katun premium/mukena haji, seragam batik resmi, sabuk pengaman ihram, buku manasik bersanad, dan kartu identitas maktab haji khusus.
                </p>
              </div>

              {/* Itinerary */}
              <div id="itinerary" className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 border border-[#E8E3DA] shadow-xs space-y-4 scroll-mt-24">
                <h2 className="font-playfair text-xl md:text-2xl font-bold text-[#0F172A]">
                  Rangkaian 20 Hari Ibadah Haji
                </h2>
                <ItineraryStepper itinerary={tour.itinerary} />
              </div>
            </div>

            {/* Right Column: Requirements & Official PIHK Credential */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              {/* Dokumen Persyaratan Pendaftaran */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E8E3DA] shadow-xs space-y-5">
                <div className="border-b border-slate-100 pb-3.5 space-y-1">
                  <span className="text-[11px] font-semibold text-[#C5A059] uppercase tracking-wider block">
                    Dokumen Pendaftaran
                  </span>
                  <h3 className="font-playfair text-lg font-bold text-[#0F172A]">
                    Persyaratan Haji Furoda
                  </h3>
                  <p className="text-xs text-slate-500">
                    Diserahkan saat registrasi awal untuk penguncian kuota visa e-Hajj.
                  </p>
                </div>

                <ul className="space-y-3 text-xs text-slate-600">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900">Paspor Asli:</strong> Masa berlaku minimal 7 bulan dengan nama minimal 2 suku kata.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900">Pas Foto Berwarna:</strong> 4x6 latar belakang putih, fokus wajah 80% (4 lembar).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900">Identitas Diri:</strong> Fotokopi KTP, Kartu Keluarga, dan Buku Nikah / Akta Lahir.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900">Vaksinasi:</strong> Buku kuning sertifikat vaksin meningitis dari Dinkes / KKP.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900">DP Pendaftaran:</strong> USD 5.000 dengan garansi 100% full refund jika visa tidak disetujui.</span>
                  </li>
                </ul>

                <div className="pt-2 border-t border-slate-100">
                  <a
                    href="https://wa.me/6285607179735?text=Assalamu%27alaikum%20Samira%20Travel,%20saya%20ingin%20konsultasi%20kelengkapan%20dokumen%20Haji%20Furoda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-[#084234] font-bold text-xs border border-[#E8E3DA] transition-all"
                  >
                    <span>Konsultasi Dokumen via WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Legalitas Penyelenggara Haji Khusus */}
              <div className="bg-[#04261E] text-white rounded-3xl p-6 sm:p-7 space-y-4 border border-[#084234]/80 shadow-xl">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-[#C5A059] uppercase tracking-wider block">
                    Legalitas Resmi Kemenag RI
                  </span>
                  <h3 className="font-playfair text-base sm:text-lg font-bold text-white">
                    Izin PIHK No. 12062100346740003
                  </h3>
                </div>
                <p className="text-xs text-emerald-100/90 leading-relaxed">
                  PT Samira Ali Wisata memegang izin resmi Penyelenggara Ibadah Haji Khusus (PIHK) Kementerian Agama RI tahun 2022. Seluruh alur pelaporan dan visa terintegrasi SISKOPATUH.
                </p>
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-emerald-200/80">Hotline Khusus Haji:</span>
                  <a href="tel:085607179735" className="text-[#FAF8F5] hover:underline font-bold text-sm">
                    0856-0717-9735
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
