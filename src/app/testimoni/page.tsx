import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { buildBreadcrumbSchema } from "@/lib/seo";
import { 
  Star, 
  Quote, 
  Video, 
  HeartPulse, 
  HeartHandshake, 
  CheckCircle2, 
  Play 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Testimoni Jemaah & Dokumentasi Video Resmi | Samira Travel",
  description:
    "Kisah nyata para jemaah Samira Travel: Artis Citra Kirana, Rezky Adhitya, Ungu Band, video testimoni pasien cuci darah (hemodialisa), hingga kisah kakek pencari rumput menabung 19 tahun.",
  alternates: {
    canonical: "https://samiratravelumrohhaji.com/testimoni",
  },
};

export default function TestimoniPage() {
  const breadcrumbs = buildBreadcrumbSchema([
    { name: "Beranda", item: "/" },
    { name: "Testimoni", item: "/testimoni" },
  ]);

  const videos = [
    {
      id: "IiinsNvVXDo",
      title: "Testimoni Pasien Cuci Darah: Beribadah Khusyuk di Tanah Suci",
      desc: "Liputan eksklusif pendampingan medis pasien hemodialisa selama menunaikan umrah di Makkah & Madinah.",
    },
    {
      id: "3Tw7sb6mAVs",
      title: "Milad Ke-9 di Jeddah: Pemecahan Guinness World Records",
      desc: "Momen bersejarah jamuan makan malam halal 10.449 jemaah di Asfan, Jeddah.",
    },
    {
      id: "ZLcqJKDffGA",
      title: "1.576 Jemaah Samira Travel Ziarah Akbar di Jabal Uhud",
      desc: "Dokumentasi khidmat ribuan jemaah Samira mendoakan para syuhada di bukit Uhud, Madinah.",
    },
    {
      id: "JzBT0sK_lsQ",
      title: "Penganugerahan Rekor MURI ke-3 (29.171 Jemaah)",
      desc: "Penghargaan resmi dari Museum Rekor Dunia Indonesia atas konsistensi pelayanan.",
    },
  ];

  const stories = [
    {
      name: "Citra Kirana & Rezky Adhitya",
      role: "Public Figure / Jemaah Program UMBAST",
      quote:
        "Jadwal penerbangannya benar-benar tepat waktu tanpa drama delay. Hotelnya di Makkah sangat dekat dengan pelataran, memudahkan kami membawa anak dan beribadah dengan tenang. Muthawwif membimbing rukun dengan sangat sabar dan santun.",
      tag: "Program UMBAST",
    },
    {
      name: "Ungu Band (Pasha, Makki, Enda, Oncy, Rowman)",
      role: "Musisi & Jemaah Umroh Akbar Sahabat",
      quote:
        "Fasilitas Audio Receiver System (APS) Samira luar biasa membantu. Kami bisa mendengarkan doa thawaf dari Muthawwif dengan sangat jernih di tengah ribuan jemaah tanpa kebisingan sekitar. Sangat tertib dan profesional.",
      tag: "Umroh Akbar",
    },
    {
      name: "H. Wagimin (72 Tahun)",
      role: "Jemaah Asal Boyolali, Jawa Tengah",
      quote:
        "Saya hanya seorang pencari rumput di desa. Alhamdulillah dengan menabung recehan selama 19 tahun, Samira Travel melayani kami dengan penuh hormat. Layanan kursi roda dan pendampingan lansianya sangat tulus.",
      tag: "Kisah Menabung 19 Tahun",
    },
    {
      name: "Keluarga Hj. Nurhasanah",
      role: "Jemaah Pasien Hemodialisa (Cuci Darah)",
      quote:
        "Awalnya kami ragu ibu bisa umrah karena jadwal cuci darah rutin tiap 3 hari. Bersama tim Samira Care, jadwal di rumah sakit Makkah sudah dipesan rapi sebelum terbang. Ibu dapat menyelesaikan seluruh rukun umrah dengan selamat.",
      tag: "Layanan Medis Khusus",
    },
  ];

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <div className="bg-[#FAF8F5] min-h-screen pb-16">
        {/* Header Hero */}
        <section className="bg-gradient-to-b from-[#04261E] to-[#084234] text-white py-12 md:py-18">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-emerald-200/80 mb-6">
              <Link href="/" className="hover:text-white">Beranda</Link>
              <span>/</span>
              <span className="text-white font-medium">Testimoni</span>
            </nav>

            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-semibold tracking-[0.2em] text-[#C5A059] uppercase block">
                Ulasan Jamaah Terverifikasi • Kepuasan 4.9/5.0
              </span>
              <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Kisah Nyata Para Tamu Allah
              </h1>
              <p className="text-sm md:text-base text-emerald-100/90 leading-relaxed">
                Setiap jemaah memiliki momen spiritual tersendiri. Dari tokoh nasional hingga pejuang rezeki sederhana, kami melayani segenap hati sebagai amanah keluarga Anda.
              </p>
            </div>
          </div>
        </section>

        {/* Video Documentation Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E3DA] shadow-md space-y-8">
            <div className="flex items-center gap-2 text-xs font-bold text-[#084234] uppercase tracking-wider">
              <Video className="w-4 h-4 text-[#C5A059]" />
              <span>Dokumentasi Video Resmi Lapangan</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videos.map((vid) => (
                <div key={vid.id} className="space-y-3">
                  <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-sm bg-black">
                    <iframe
                      src={`https://www.youtube.com/embed/${vid.id}`}
                      title={vid.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  </div>
                  <h3 className="font-bold text-base text-[#0F172A] leading-snug">
                    {vid.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {vid.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Written Testimonial Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 space-y-8">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#0F172A]">
            Kesan & Pengalaman Jemaah
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stories.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#E8E3DA] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold text-[#084234] bg-emerald-50 px-2.5 py-0.5 rounded-full">
                      {item.tag}
                    </span>
                    <div className="flex text-amber-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  <Quote className="w-6 h-6 text-[#C5A059]/30 mb-2" />

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-4">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-[#0F172A]">{item.name}</div>
                    <div className="text-slate-400 text-[11px]">{item.role}</div>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    Terverifikasi
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Medical Hemodialysis Banner */}
          <div className="bg-[#04261E] border border-emerald-900/60 text-white rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 space-y-3">
                <span className="text-xs font-semibold tracking-[0.2em] text-[#C5A059] uppercase block">
                  Pelayanan Medis Khusus • Samira Care
                </span>
                <h3 className="font-playfair text-2xl sm:text-3xl font-bold">
                  Bimbingan Umrah Khusus Pasien Hemodialisa (Cuci Darah)
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                  Kami memahami kebutuhan jemaah dengan kondisi ginjal yang memerlukan terapi cuci darah berkala. Samira Travel mengoordinasikan jadwal hemodialisa dengan rumah sakit berlisensi di Makkah dan Madinah, lengkap dengan pendampingan dokter selama di Tanah Suci.
                </p>
              </div>
              <div className="lg:col-span-4 text-center lg:text-right">
                <Link
                  href="/paket-umroh"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#15803D] hover:bg-[#166534] text-white font-bold text-xs shadow-md transition-colors"
                >
                  <span>Konsultasi Umroh Ramah Medis</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
