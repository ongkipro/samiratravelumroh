import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { getHajiFuroda } from "@/lib/data-service";
import { buildTouristTripSchema, buildBreadcrumbSchema } from "@/lib/seo";
import { ItineraryStepper } from "@/components/packages/ItineraryStepper";
import { 
  ShieldCheck, 
  Award, 
  CheckCircle, 
  Hotel, 
  Calendar, 
  Plane, 
  HeartHandshake, 
  Clock, 
  FileText, 
  AlertCircle,
  Star,
  Users
} from "lucide-react";

export const metadata: Metadata = {
  title: "Haji Khusus Furoda 2026 (Tanpa Antri Kuota) — Biaya USD 17.000 | Samira Travel",
  description:
    "Program Haji Khusus Furoda Mujamalah 2026 langsung berangkat tanpa antri. Biaya USD 17.000 dengan jaminan garansi 100% Full Refund DP USD 5.000 jika visa tidak terbit. Hotel bintang 5 & Maktab VIP Arafah-Mina.",
  alternates: {
    canonical: "https://samiratravelumrohhaji.com/haji-khusus-furoda",
  },
  openGraph: {
    title: "Haji Khusus Furoda 2026 Tanpa Antri | Samira Travel",
    description: "Langsung berangkat tahun 2026. Garansi 100% Full Refund DP jika visa tidak disetujui. Kuota terbatas.",
    url: "https://samiratravelumrohhaji.com/haji-khusus-furoda",
    images: ["/images/banner-hero-1.jpg"],
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
      <Script
        id="furoda-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristTripSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="bg-[#FAF8F5] min-h-screen pb-16">
        {/* Luxury Gold/Emerald Hero Banner */}
        <section className="bg-gradient-to-b from-[#04261E] via-[#063228] to-[#084234] text-white pt-10 pb-16 md:pt-14 md:pb-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <nav className="flex items-center gap-2 text-xs text-emerald-200/80 mb-6">
              <Link href="/" className="hover:text-white">Beranda</Link>
              <span>/</span>
              <span className="text-white font-medium">Haji Khusus Furoda</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#C5A059] uppercase">
                  Visa Haji Mujamalah Resmi Kerajaan Saudi • Kuota Tahun 1448 H
                </div>

                <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Haji Khusus Furoda 2026 <br />
                  <span className="text-gold-gradient font-serif italic">Tanpa Antre Bertahun-tahun.</span>
                </h1>

                <p className="text-sm md:text-base text-emerald-100/90 leading-relaxed max-w-2xl">
                  Tunaikan rukun Islam kelima saat fisik Anda masih prima. Menggunakan kuota undangan Kerajaan Arab Saudi (Visa Mujamalah), didampingi pembimbing ibadah berilmu dan fasilitas maktab VIP ber-AC di Arafah & Mina.
                </p>

                {/* Guarantee Banner */}
                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-[#C5A059]/40 max-w-2xl space-y-2">
                  <div className="flex items-center gap-2 text-[#FAF8F5] text-sm font-bold">
                    <ShieldCheck className="w-5 h-5 text-[#C5A059] shrink-0" />
                    <span>Jaminan Garansi 100% Full Refund DP</span>
                  </div>
                  <p className="text-xs text-emerald-100/80 leading-relaxed">
                    Uang muka pendaftaran (DP USD 5.000) kami garansikan kembali 100% utuh tanpa potongan apapun apabila visa haji tidak disetujui otoritas Kerajaan Arab Saudi.
                  </p>
                </div>
              </div>

              {/* Price & Fast Reservation Card */}
              <div className="lg:col-span-4 bg-white text-[#0F172A] rounded-3xl p-6 md:p-8 shadow-2xl border border-[#C5A059]/40">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Biaya Paket Haji Furoda
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#084234] tracking-tight mt-1">
                  USD 17.000
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Durasi Perjalanan: 20 Hari • Hotel Bintang 5
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
                    <span className="text-slate-500">Sisa Kuota:</span>
                    <span className="font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                      Sisa 8 Kursi
                    </span>
                  </div>
                </div>

                <a
                  href="#itinerary"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#B8934A] hover:brightness-105 text-[#04261E] font-extrabold text-sm shadow-md transition-all"
                >
                  <span>Lihat Rangkaian 20 Hari Ibadah Haji</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-2xl p-5 border border-[#E8E3DA] shadow-sm">
              <Clock className="w-6 h-6 text-[#C5A059] mb-2" />
              <h2 className="text-sm font-bold text-[#0F172A] mb-1">Tanpa Antrian Kuota</h2>
              <p className="text-xs text-slate-600">Berangkat di musim haji tahun berjalan tanpa menunggu 20-40 tahun.</p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-[#E8E3DA] shadow-sm">
              <Hotel className="w-6 h-6 text-[#C5A059] mb-2" />
              <h2 className="text-sm font-bold text-[#0F172A] mb-1">Maktab VIP Arafah-Mina</h2>
              <p className="text-xs text-slate-600">Tenda ber-AC nyaman, karpet bersih, serta hidangan makanan prasmanan Indonesia.</p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-[#E8E3DA] shadow-sm">
              <Users className="w-6 h-6 text-[#C5A059] mb-2" />
              <h2 className="text-sm font-bold text-[#0F172A] mb-1">Bimbingan Manasik 3x</h2>
              <p className="text-xs text-slate-600">Manasik teori dan simulasi lapangan intensif di hotel bintang 5 sebelum keberangkatan.</p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-[#E8E3DA] shadow-sm">
              <ShieldCheck className="w-6 h-6 text-[#C5A059] mb-2" />
              <h2 className="text-sm font-bold text-[#0F172A] mb-1">Tim Medis Standby</h2>
              <p className="text-xs text-slate-600">Dokter dan tenaga kesehatan mendampingi fisik jemaah selama masa Armuzna.</p>
            </div>
          </div>
        </div>

        {/* Content Body: Hotels, Facilities, Itinerary */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-8">
              {/* Hotel */}
              <div className="bg-white rounded-2xl md:rounded-3xl p-6 border border-[#E8E3DA] shadow-sm space-y-5">
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

              {/* Inclusions */}
              <div className="bg-white rounded-2xl md:rounded-3xl p-6 border border-[#E8E3DA] shadow-sm space-y-6">
                <h2 className="font-playfair text-xl md:text-2xl font-bold text-[#0F172A]">
                  Fasilitas & Layanan Haji Khusus
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                  <div>
                    <h3 className="text-xs font-bold text-[#084234] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span>Termasuk Dalam Biaya:</span>
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
                  <div className="md:pl-6 pt-4 md:pt-0">
                    <h3 className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <AlertCircle className="w-4 h-4 text-slate-400" />
                      <span>Ketentuan Pembayaran:</span>
                    </h3>
                    <ul className="space-y-2 text-xs text-slate-600">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-1.5 shrink-0" />
                        <span>DP Pendaftaran: USD 5.000 saat registrasi data paspor</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-1.5 shrink-0" />
                        <span>Pelunasan sisa biaya setelah visa haji resmi terbit</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-1.5 shrink-0" />
                        <span>Transfer wajib ke rekening USD PT Samira Ali Wisata (Mandiri / BSI)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Equipment Kit */}
              <div className="bg-white rounded-2xl md:rounded-3xl p-6 border border-[#E8E3DA] shadow-sm space-y-4">
                <h2 className="font-playfair text-xl md:text-2xl font-bold text-[#0F172A]">
                  Kit Perlengkapan Eksklusif Haji Khusus
                </h2>
                <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-lg border border-slate-100">
                  <Image
                    src="/images/perlengkapan_umrah_luxury.jpg"
                    alt="Kit Perlengkapan Haji Khusus Samira Travel"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-center"
                  />
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Termasuk koper bagasi besar 28 inci fiber, koper kabin 20 inci, tas paspor gantung, tas ransel lipat, kain ihram katun premium/mukena haji, syal seragam batik resmi, sabuk pengaman ihram, buku bimbingan manasik bersanad, dan kartu identitas maktab haji khusus.
                </p>
              </div>

              {/* Itinerary */}
              <div className="bg-white rounded-2xl md:rounded-3xl p-6 border border-[#E8E3DA] shadow-sm space-y-4">
                <h2 className="font-playfair text-xl md:text-2xl font-bold text-[#0F172A]">
                  Rangkaian 20 Hari Ibadah Haji
                </h2>
                <ItineraryStepper itinerary={tour.itinerary} />
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[#04261E] text-white rounded-2xl p-6 space-y-4 border border-[#084234]/80 shadow-xl">
                <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider block">
                  Legalitas Penyelenggara Haji Khusus
                </span>
                <p className="text-xs text-emerald-100/90 leading-relaxed">
                  PT Samira Ali Wisata memegang izin Penyelenggara Ibadah Haji Khusus (PIHK) resmi dari Kementerian Agama Republik Indonesia tahun 2022. Seluruh alur pelaporan terintegrasi SISKOPATUH.
                </p>
                <div className="pt-2 border-t border-white/10 text-xs font-medium">
                  Hotline Khusus Haji: <br />
                  <a href="tel:085607179735" className="text-[#FAF8F5] hover:underline font-bold text-sm">0856-0717-9735</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
