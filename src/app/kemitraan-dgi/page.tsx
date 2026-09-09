import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { buildBreadcrumbSchema } from "@/lib/seo";
import { 
  Users, 
  Award, 
  CheckCircle, 
  Gift, 
  Briefcase, 
  GraduationCap, 
  ShieldCheck, 
  DollarSign,
  HeartHandshake
} from "lucide-react";

export const metadata: Metadata = {
  title: "Peluang Kemitraan DGi - Agen Syiar Pejuang Baitullah Non-MLM",
  description:
    "Bergabunglah bersama komunitas Pejuang Baitullah DGi Samira Travel. Komisi ujrah Rp 1,5 Jt - Rp 4 Jt/jemaah, reward 1 tiket umrah gratis setiap 10-12 jemaah, starter kit promosi lengkap, dan pelatihan sertifikasi BNSP.",
  alternates: {
    canonical: "https://samiratravelumrohhaji.com/kemitraan-dgi",
  },
  openGraph: {
    title: "Peluang Kemitraan DGi - Agen Syiar Pejuang Baitullah Non-MLM",
    description:
      "Program kemitraan syiar umrah amanah DGi Samira Travel tanpa sistem MLM. Komisi menarik, reward tiket gratis, starter kit promosi, dan bimbingan sertifikasi BNSP.",
    url: "https://samiratravelumrohhaji.com/kemitraan-dgi",
    images: [
      {
        url: "/images/samira-travel-umroh-dan-haji-resmi-kemenag.webp",
        width: 1200,
        height: 630,
        alt: "Peluang Kemitraan DGi Samira Travel Pejuang Baitullah",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peluang Kemitraan DGi - Agen Syiar Pejuang Baitullah Non-MLM",
    description:
      "Program kemitraan syiar umrah amanah DGi Samira Travel tanpa sistem MLM. Komisi menarik, reward tiket gratis, dan bimbingan BNSP.",
    images: ["/images/samira-travel-umroh-dan-haji-resmi-kemenag.webp"],
  },
};

export default function KemitraanDGIPage() {
  const breadcrumbs = buildBreadcrumbSchema([
    { name: "Beranda", item: "/" },
    { name: "Kemitraan DGi", item: "/kemitraan-dgi" },
  ]);

  return (
    <>
      <script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <div className="bg-[#FAF8F5] min-h-screen pb-16">
        {/* Hero */}
        <section className="bg-gradient-to-b from-[#04261E] to-[#084234] text-white pt-24 sm:pt-28 pb-12 md:pb-18">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-emerald-200/80 mb-6">
              <Link href="/" className="hover:text-white">Beranda</Link>
              <span>/</span>
              <span className="text-white font-medium">Kemitraan DGi</span>
            </nav>

            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-semibold tracking-[0.2em] text-[#C5A059] uppercase block">
                Program Syiar Baitullah • Kemitraan Amanah DGi
              </span>
              <h1 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                Jadilah Pejuang Baitullah Bersama DGi Samira Travel
              </h1>
              <p className="text-sm md:text-base text-emerald-100/90 leading-relaxed">
                Raih keberkahan dakwah sekaligus kemandirian finansial. Bantu keluarga, tetangga, dan kerabat Anda melangkah ke tanah suci dengan sistem kemitraan yang transparan, amanah, dan didukung penuh legalitas biro travel peringkat #1 nasional.
              </p>
            </div>
          </div>
        </section>

        {/* Core Value Pillars */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-[#E8E3DA] shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold mb-3">
                <ShieldCheck className="w-5 h-5 text-[#084234]" />
              </div>
              <h2 className="text-base font-bold text-[#0F172A] mb-1">Murni Syariah & Tanpa Skema Piramida</h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Bukan Multi Level Marketing (MLM). Tidak ada biaya pendaftaran tersembunyi atau kewajiban tutup poin bulanan. Ujrah dibayarkan murni atas jasa syiar.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E8E3DA] shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold mb-3">
                <Gift className="w-5 h-5 text-[#C5A059]" />
              </div>
              <h2 className="text-base font-bold text-[#0F172A] mb-1">Reward 1 Tiket Gratis per 10–12 Pax</h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Setiap kali Anda memberangkatkan 10 hingga 12 jemaah, Anda berhak memperoleh 1 tiket kursi umrah gratis untuk berangkat mendampingi rombongan.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E8E3DA] shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center font-bold mb-3">
                <GraduationCap className="w-5 h-5 text-blue-800" />
              </div>
              <h2 className="text-base font-bold text-[#0F172A] mb-1">Sertifikasi BNSP & Akademi Samira</h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dapatkan bimbingan intensif public speaking, strategi digital syiar, hingga sertifikasi resmi Tour Leader & Muthawwif berstandar BNSP.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Breakdown */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 space-y-12">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E3DA] shadow-sm">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#0F172A] mb-6 text-center">
              Fasilitas Starter Kit & Dukungan Lengkap untuk Mitra
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 lg:divide-x divide-slate-100">
              <div className="space-y-1.5">
                <Briefcase className="w-6 h-6 text-[#084234] mb-2.5" />
                <h3 className="text-sm font-bold text-[#0F172A]">Starter Kit Fisik</h3>
                <p className="text-xs text-slate-600 leading-relaxed">Spanduk kantor mitra, roll banner promosi, katalog brosur cetak tebal, dan formulir pendaftaran resmi.</p>
              </div>

              <div className="space-y-1.5 lg:pl-6">
                <Award className="w-6 h-6 text-[#084234] mb-2.5" />
                <h3 className="text-sm font-bold text-[#0F172A]">Seragam Resmi & ID Card</h3>
                <p className="text-xs text-slate-600 leading-relaxed">Blazer/gamis batik resmi Samira Travel dan ID card Pejuang Baitullah ber-barcode legalitas.</p>
              </div>

              <div className="space-y-1.5 lg:pl-6">
                <DollarSign className="w-6 h-6 text-[#084234] mb-2.5" />
                <h3 className="text-sm font-bold text-[#0F172A]">Komisi Ujrah Cair Cepat</h3>
                <p className="text-xs text-slate-600 leading-relaxed">Ujrah Rp 1.500.000 s/d Rp 4.000.000 per jemaah langsung ditransfer setelah pelunasan paket.</p>
              </div>

              <div className="space-y-1.5 lg:pl-6">
                <Users className="w-6 h-6 text-[#084234] mb-2.5" />
                <h3 className="text-sm font-bold text-[#0F172A]">Pendampingan Cabang</h3>
                <p className="text-xs text-slate-600 leading-relaxed">Didukung penuh oleh 26 kantor cabang fisik resmi untuk penyerahan koper dan administrasi berkas.</p>
              </div>
            </div>
          </div>

          {/* Registration CTA Section */}
          <div className="bg-[#04261E] border border-emerald-900/60 text-white rounded-3xl p-8 md:p-12 text-center space-y-5">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold">
              Siap Menjadi Bagian dari Keluarga Besar Pejuang Baitullah?
            </h2>
            <p className="text-sm text-emerald-100/90 max-w-2xl mx-auto leading-relaxed">
              Hubungi manajemen kemitraan Samira Travel untuk mendapatkan jadwal sosialisasi, kurikulum pembinaan, dan paket Starter Kit DGi di kota Anda.
            </p>
            <div className="pt-2">
              <Link
                href="/kantor-cabang"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#C5A059] hover:bg-[#B38F48] text-[#04261E] font-bold text-sm shadow-lg transition-all"
              >
                <span>Temukan Kantor Cabang Terdekat</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
