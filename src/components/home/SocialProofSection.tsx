"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Award, Star, Quote, CheckCircle, ArrowRight, Play, Video } from "lucide-react";

export function SocialProofSection() {
  const [activeVideo, setActiveVideo] = useState<string>("3Tw7sb6mAVs");

  const otherCertificates = [
    {
      title: "Guinness World Records",
      subtitle: "Ref ID Database: 15-782573",
      location: "Asfan, Jeddah (2025)",
      image: "/images/rekor-dunia-guinness-world-records-samira-travel.webp",
      description:
        "Rekor dunia resmi: Jamuan makan malam halal jemaah umrah terbesar di dunia (10.449 jemaah) bertempat di Asfan, Jeddah, Kerajaan Arab Saudi.",
    },
    {
      title: "Piala APSI 2026 by tvOne",
      subtitle: "Kinerja Terbaik Jamaah Terbanyak",
      location: "Jakarta, Indonesia (2026)",
      image: "/images/penghargaan-apsi-2026-jamaah-terbanyak-tvone.webp",
      description:
        "Penghargaan Kinerja Operasional Terbaik dari Asosiasi Pengusaha Sahabat Indonesia (APSI) atas dedikasi melayani puluhan ribu jemaah nasional.",
    },
  ];

  const videos = [
    {
      id: "3Tw7sb6mAVs",
      title: "Milad Samira Ke-9: Pemecahan Guinness World Records di Jeddah",
      duration: "Dokumentasi Resmi",
    },
    {
      id: "JzBT0sK_lsQ",
      title: "Penganugerahan Rekor MURI ke-3 (29.171 Jemaah)",
      duration: "Liputan Nasional",
    },
    {
      id: "IiinsNvVXDo",
      title: "Testimoni Mengharukan: Pasien Cuci Darah Beribadah Umrah",
      duration: "Layanan Samira Care",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-16">
          <span className="text-xs font-bold text-[#C5A059] uppercase tracking-widest block">
            Kredibilitas & Bukti Rekor Nyata
          </span>
          <h2 className="font-playfair text-xl sm:text-2xl md:text-3xl font-bold text-[#0F172A]">
            Kredensial Resmi, Rekor Dunia, dan Rekor MURI
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Bukan sekadar klaim. Seluruh penghargaan terverifikasi oleh lembaga rekor dunia resmi dan disaksikan jutaan pasang mata masyarakat Indonesia.
          </p>
        </div>

        {/* 1. Featured Landscape Showcase: 3 Rekor MURI Nasional (Expansive & Frameless) */}
        <div className="mb-20 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-bold text-[#C5A059] uppercase tracking-wider block">
                Museum Rekor-Dunia Indonesia (MURI)
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0F172A] mt-1">
                3 Rekor MURI Nasional Berturut-turut (2022 – 2024)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
                Dianugerahi langsung oleh Jaya Suprana atas pencapaian bersejarah memberangkatkan jemaah terbanyak masa pandemi 2022, pelafalan talbiyah akbar 2023, dan rekor 29.171 jemaah sepanjang tahun 2024.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#084234] shrink-0 self-start md:self-auto">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Piagam Resmi MURI Terverifikasi</span>
            </div>
          </div>

          {/* Full-width Landscape Banner (100% Frameless & Natural) */}
          <div className="w-full">
            <Image
              src="/images/tiga-rekor-muri-jamaah-terbanyak-samira-travel.webp"
              alt="3 Rekor MURI Nasional Samira Travel: 2022, 2023, 2024"
              width={1600}
              height={428}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* 3 Milestones Pillars - Clean Editorial Grid with Hairline Dividers */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-6 sm:divide-x divide-[#E8E3DA]">
            <div className="space-y-1">
              <div className="text-[11px] font-bold text-[#C5A059] uppercase tracking-wider">Rekor MURI 2022</div>
              <div className="text-sm font-bold text-slate-900">Jemaah Terbanyak Masa Pandemi</div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Pemberangkatan perdana jemaah umrah pasca pembukaan kembali akses ibadah oleh Kerajaan Arab Saudi.
              </p>
            </div>
            <div className="sm:pl-8 space-y-1">
              <div className="text-[11px] font-bold text-[#C5A059] uppercase tracking-wider">Rekor MURI 2023</div>
              <div className="text-sm font-bold text-slate-900">Pelafalan Talbiyah Akbar</div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Pelafalan kalimat talbiyah massal serentak ribuan jemaah secara tertib, khidmat, dan terorganisir.
              </p>
            </div>
            <div className="sm:pl-8 space-y-1">
              <div className="text-[11px] font-bold text-[#C5A059] uppercase tracking-wider">Rekor MURI 2024</div>
              <div className="text-sm font-bold text-slate-900">29.171 Jemaah Terbanyak</div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Rekor nasional memberangkatkan total 29.171 jemaah umrah resmi terverifikasi dalam satu musim kalender.
              </p>
            </div>
          </div>
        </div>

        {/* 2. Secondary Credentials: Guinness World Records & Piala APSI (Unboxed Museum Diptych) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-24 pt-12 border-t border-[#E8E3DA] divide-y md:divide-y-0 md:divide-x divide-[#E8E3DA]">
          {otherCertificates.map((cert, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between space-y-6 ${idx !== 0 ? "pt-8 md:pt-0 md:pl-10" : ""}`}
            >
              <div className="space-y-4">
                {/* Clean Full-Bleed Certificate Exhibition (No Box In Box) */}
                <div className="w-full flex items-center justify-center p-2 rounded-xl bg-white/40 border border-[#E8E3DA]">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    width={800}
                    height={500}
                    className="max-h-80 w-auto object-contain"
                  />
                </div>

                <div className="space-y-1.5 pt-2">
                  <span className="text-[11px] font-bold text-[#C5A059] uppercase tracking-wider block">
                    {cert.subtitle}
                  </span>
                  <h3 className="font-playfair text-lg sm:text-xl font-bold text-[#0F172A] leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#E8E3DA] flex items-center justify-between text-xs font-semibold text-[#084234]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Sertifikasi Terverifikasi</span>
                </div>
                <span className="text-[11px] font-medium text-slate-400">
                  {cert.location}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 3. Video Documentation Section (Cinematic & Frameless) */}
        <div className="mb-24 space-y-6 pt-8 border-t border-[#E8E3DA]">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#084234] uppercase tracking-wider mb-1">
              <Video className="w-4 h-4 text-[#C5A059]" />
              <span>Dokumentasi Video Resmi Samira Travel</span>
            </div>
            <h3 className="font-playfair text-lg sm:text-xl md:text-2xl font-bold text-[#0F172A]">
              Saksikan Momen Bersejarah & Perjalanan Spiritual Jamaah
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Active Video Player */}
            <div className="lg:col-span-8 aspect-video w-full rounded-2xl overflow-hidden shadow-xl bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}`}
                title="Dokumentasi Samira Travel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>

            {/* Video Selector Playlist (Clean divide-y rows, no bulky buttons) */}
            <div className="lg:col-span-4 divide-y divide-[#E8E3DA]">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block pb-3">
                Pilih Tayangan Video:
              </span>
              {videos.map((vid) => {
                const isActive = activeVideo === vid.id;
                return (
                  <button
                    key={vid.id}
                    type="button"
                    onClick={() => setActiveVideo(vid.id)}
                    className={`w-full text-left py-3 px-3 rounded-xl transition-all cursor-pointer flex items-start gap-3 ${
                      isActive
                        ? "bg-[#084234] text-white shadow-sm"
                        : "text-slate-700 hover:bg-white/80"
                    }`}
                  >
                    <Play className={`w-4 h-4 mt-1 shrink-0 ${isActive ? "text-amber-300 fill-amber-300" : "text-[#084234]"}`} />
                    <div>
                      <h4 className="text-xs font-bold leading-snug mb-1">
                        {vid.title}
                      </h4>
                      <span className={`text-[10px] ${isActive ? "text-emerald-200" : "text-slate-400"}`}>
                        {vid.duration}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 4. Public Figure & Community Testimonials (Editorial Column Layout) */}
        <div className="pt-8 border-t border-[#E8E3DA] space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider block">
              Kesan & Amanah Jemaah
            </span>
            <h3 className="font-playfair text-xl sm:text-2xl font-bold text-[#0F172A]">
              Kisah Nyata Para Tamu Allah
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x divide-[#E8E3DA]">
            <div className="space-y-3">
              <div className="flex text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                &ldquo;Jadwal penerbangannya benar-benar tepat waktu tanpa drama delay. Hotelnya di Makkah sangat dekat dengan pelataran, memudahkan kami beribadah dengan tenang. Muthawwif membimbing rukun dengan sangat sabar.&rdquo;
              </p>
              <div className="pt-2 border-t border-slate-100">
                <div className="font-bold text-xs text-[#0F172A]">Citra Kirana & Rezky Adhitya</div>
                <div className="text-[11px] text-slate-400">Public Figure / Jemaah Program UMBAST</div>
              </div>
            </div>

            <div className="space-y-3 md:pl-8">
              <div className="flex text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                &ldquo;Fasilitas Audio Receiver System (APS) Samira luar biasa membantu. Kami bisa mendengarkan doa thawaf dari Muthawwif dengan jernih di tengah ribuan jemaah tanpa bising. Sangat profesional.&rdquo;
              </p>
              <div className="pt-2 border-t border-slate-100">
                <div className="font-bold text-xs text-[#0F172A]">Ungu Band (Pasha & Personel)</div>
                <div className="text-[11px] text-slate-400">Musisi & Jemaah Umroh Akbar</div>
              </div>
            </div>

            <div className="space-y-3 md:pl-8">
              <div className="flex text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                &ldquo;Saya seorang pencari rumput di desa. Alhamdulillah dengan menabung 19 tahun, Samira Travel melayani kami seperti keluarga sendiri. Pendampingan lansianya tulus sekali.&rdquo;
              </p>
              <div className="pt-2 border-t border-slate-100">
                <div className="font-bold text-xs text-[#0F172A]">H. Wagimin (72 Tahun)</div>
                <div className="text-[11px] text-slate-400">Jemaah Asal Boyolali, Jawa Tengah</div>
              </div>
            </div>
          </div>

          <div className="pt-6 text-center">
            <Link
              href="/testimoni"
              className="inline-flex items-center gap-1.5 text-xs md:text-sm font-bold text-[#084234] hover:underline"
            >
              <span>Buka Halaman Testimoni & Dokumentasi Video Lengkap</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
