import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { siteConfig } from "@/data/site-config";
import { buildBreadcrumbSchema } from "@/lib/seo";
import { 
  Award, 
  ShieldCheck, 
  Building, 
  Users, 
  CheckCircle2, 
  AlertTriangle, 
  Camera,
  HeartHandshake 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tentang Kami — Profil Legalitas & Rekor Dunia | Samira Travel",
  description:
    "Profil resmi PT Samira Ali Wisata (Samira Travel). Biro travel umrah peringkat #1 nasional Kemenag RI, pemegang Guinness World Records, 3 Rekor MURI, dan Piala APSI 2026.",
  alternates: {
    canonical: "https://samiratravelumrohhaji.com/tentang-kami",
  },
};

export default function TentangKamiPage() {
  const breadcrumbs = buildBreadcrumbSchema([
    { name: "Beranda", item: "/" },
    { name: "Tentang Kami", item: "/tentang-kami" },
  ]);

  const galleryImages = [
    "/images/galeri-sertifikat-dokumentasi-1.png",
    "/images/galeri-sertifikat-dokumentasi-2.png",
    "/images/galeri-sertifikat-dokumentasi-3.png",
    "/images/galeri-sertifikat-dokumentasi-4.png",
    "/images/galeri-sertifikat-dokumentasi-5.jpg",
    "/images/galeri-sertifikat-dokumentasi-6.png",
  ];

  const banks = [
    { name: "BSI", image: "/images/bank-bsi-syariah-indonesia-rekening-resmi.png", no: "713-333-7777" },
    { name: "Mandiri", image: "/images/bank-mandiri-rekening-resmi.png", no: "124-00-1117777-9" },
    { name: "Muamalat", image: "/images/bank-muamalat-rekening-resmi.png", no: "314-001-7777" },
    { name: "Permata Syariah", image: "/images/bank-permata-syariah-rekening-resmi.png", no: "097-111-7777" },
  ];

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <div className="bg-[#FAF8F5] min-h-screen pb-16">
        {/* Hero */}
        <section className="bg-gradient-to-b from-[#04261E] to-[#084234] text-white py-12 md:py-18">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-emerald-200/80 mb-6">
              <Link href="/" className="hover:text-white">Beranda</Link>
              <span>/</span>
              <span className="text-white font-medium">Tentang Kami</span>
            </nav>

            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-semibold tracking-[0.2em] text-[#C5A059] uppercase block">
                PPIU No. 137/2020 • PIHK 2022 • Akreditasi A Unggul
              </span>
              <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Menemani Perjalanan Ibadah Keluarga Indonesia Menuju Baitullah
              </h1>
              <p className="text-sm md:text-base text-emerald-100/90 leading-relaxed">
                Berawal dari gerakan dakwah syiar Baitullah tahun 2014 hingga dipercaya sebagai biro umrah dengan jemaah terbanyak nasional versi SISKOPATUH Kementerian Agama RI.
              </p>
            </div>
          </div>
        </section>

        {/* Milestone Numbers */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-2xl p-5 border border-[#E8E3DA] shadow-sm text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#084234] tabular-nums">29.171+</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Jemaah Terbanyak Nasional</div>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-[#E8E3DA] shadow-sm text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#084234] tabular-nums">1x Guinness</div>
              <div className="text-xs text-slate-500 font-medium mt-1">World Records Resmi</div>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-[#E8E3DA] shadow-sm text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#084234] tabular-nums">3x MURI</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Rekor Museum Indonesia</div>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-[#E8E3DA] shadow-sm text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#084234] tabular-nums">26 Cabang</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Kantor Fisik Resmi</div>
            </div>
          </div>
        </div>

        {/* Content Details */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 space-y-12">
          {/* History */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E3DA] shadow-sm space-y-6">
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#0F172A]">
              Kisah Perjalanan & Visi Kami
            </h2>
            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
              <p>
                <strong>PT Samira Ali Wisata (Samira Travel)</strong> lahir dari tekad tulus untuk menghadirkan perjalanan umrah dan haji yang aman, transparan, dan terbebas dari keraguan jadwal. Dimulai dari komunitas syiar DGi (Duta Generasi Impian) pada tahun 2014, Samira Travel resmi bertransformasi menjadi Penyelenggara Perjalanan Ibadah Umrah (PPIU) dengan izin Kemenag RI No. 137 Tahun 2020 dan izin Penyelenggara Ibadah Haji Khusus (PIHK) tahun 2022.
              </p>
              <p>
                Kami mengambil langkah nyata dengan menerapkan sistem <em>full charter flight</em> menggunakan maskapai terkemuka seperti Lion Air dan Saudia Airlines. Setiap tiket pesawat, kamar hotel di pelataran Ka&apos;bah, dan visa telah diamankan terlebih dahulu sebelum pendaftaran dibuka, memberikan garansi kepastian 100% berangkat bagi setiap jemaah.
              </p>
            </div>

            {/* Leadership Profile */}
            <div className="pt-6 border-t border-slate-100">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-4">
                Dewan Pendiri & Pimpinan
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-slate-200/80">
                  <h3 className="font-bold text-base text-[#0F172A]">H. Fauzi Wahyu Muntoro</h3>
                  <div className="text-xs text-[#084234] font-semibold mt-0.5">Founder & Direktur Utama</div>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Pelopor sistem syiar syariah non-MLM dan tokoh di balik pencapaian rekor pemberangkatan jemaah terbanyak nasional serta Guinness World Records.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-slate-200/80">
                  <h3 className="font-bold text-base text-[#0F172A]">Hj. drg. Dini Lukitasari</h3>
                  <div className="text-xs text-[#084234] font-semibold mt-0.5">Co-Founder & Komisaris</div>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Penggagas inisiatif Samira Care, memastikan setiap program umrah ramah lansia, disabilitas, dan memiliki pendampingan medis cuci darah yang komprehensif.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Photo Gallery of Certificate Presentations & Milad */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E3DA] shadow-sm space-y-6">
            <div className="flex items-center gap-2">
              <Camera className="w-5 h-5 text-[#084234]" />
              <h2 className="font-playfair text-2xl font-bold text-[#0F172A]">
                Galeri Dokumentasi & Penganugerahan Rekor
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {galleryImages.map((img, i) => (
                <div key={i} className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src={img}
                    alt={`Dokumentasi Penghargaan ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Motivation Quote Banner */}
          <div className="relative aspect-[16/7] md:aspect-[21/9] w-full rounded-2xl overflow-hidden shadow-sm">
            <Image
              src="/images/quote-motivasi-baitullah.webp"
              alt="Quote Motivasi Baitullah Samira Travel"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Official Bank Accounts Anti-Fraud Section */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E3DA] shadow-sm space-y-6">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-red-100 text-red-700 shrink-0">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-playfair text-xl sm:text-2xl font-bold text-[#0F172A]">
                  Pemberitahuan Rekening Resmi & Anti-Penipuan
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Demi keamanan dan transparansi, seluruh pembayaran paket umrah dan haji hanya sah apabila ditransfer ke 4 rekening resmi berbadan hukum atas nama <strong>PT Samira Ali Wisata</strong>.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-5 border-y border-slate-100 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
              {banks.map((acc, idx) => (
                <div key={idx} className={`space-y-2 ${idx !== 0 ? "pt-4 sm:pt-0 sm:pl-6" : ""}`}>
                  <div className="h-7 w-28 relative">
                    <Image
                      src={acc.image}
                      alt={acc.name}
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <div className="font-mono text-base font-bold text-[#084234] tracking-wide pt-0.5">
                    {acc.no}
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    a.n PT Samira Ali Wisata
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full overflow-hidden rounded-xl">
              <Image
                src="/images/warning-waspada-penipuan-rekening-pribadi.png"
                alt="Waspada Penipuan Rekening Pribadi"
                width={1200}
                height={340}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
