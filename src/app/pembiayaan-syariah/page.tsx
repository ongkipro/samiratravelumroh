import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { buildBreadcrumbSchema, buildFAQSchema } from "@/lib/seo";
import { FinancingCalculatorIsland } from "@/components/home/FinancingCalculatorIsland";
import { 
  ShieldCheck, 
  WalletCards, 
  CheckCircle2, 
  FileText, 
  Clock, 
  Building2,
  HelpCircle 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cicilan Umroh Syariah - Program Umroh Dulu Bayar Belakangan Resmi OJK",
  description:
    "Simulasi cicilan pembiayaan umrah syariah tanpa jaminan bersama AMITRA Astra dan Bank Syariah Indonesia (BSI). DP mulai Rp 5 Juta, tenor 12-36 bulan, akad Murabahah terdaftar OJK.",
  alternates: {
    canonical: "https://samiratravelumrohhaji.com/pembiayaan-syariah",
  },
  openGraph: {
    title: "Cicilan Umroh Syariah - Umroh Dulu Bayar Belakangan Resmi OJK",
    description:
      "Simulasi cicilan pembiayaan umrah syariah tanpa jaminan bersama AMITRA Astra dan BSI. DP mulai Rp 5 Juta, tenor 12-36 bulan, akad Murabahah resmi OJK.",
    url: "https://samiratravelumrohhaji.com/pembiayaan-syariah",
    images: [
      {
        url: "/images/samira-travel-umroh-dan-haji-resmi-kemenag.webp",
        width: 1200,
        height: 630,
        alt: "Program Cicilan Pembiayaan Umroh Syariah Samira Travel",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cicilan Umroh Syariah - Umroh Dulu Bayar Belakangan Resmi OJK",
    description:
      "Simulasi cicilan pembiayaan umrah syariah tanpa jaminan bersama AMITRA Astra dan BSI. DP mulai Rp 5 Juta, tenor 12-36 bulan.",
    images: ["/images/samira-travel-umroh-dan-haji-resmi-kemenag.webp"],
  },
};

export default function PembiayaanSyariahPage() {
  const faqs = [
    {
      question: "Apakah program pembiayaan ini mengandung riba atau denda berbunga?",
      answer:
        "Tidak. Program ini menggunakan akad syariah murni (Murabahah / Ijarah Multijasa) yang diawasi oleh Dewan Pengawas Syariah (DPS) MUI dan OJK. Margin keuntungan disepakati di awal secara transparan dan tidak berubah.",
    },
    {
      question: "Apakah wajib menyerahkan agunan seperti sertifikat rumah atau BPKB?",
      answer:
        "Tidak perlu agunan fisik. Pembiayaan berbasis penilaian kapasitas keuangan dan riwayat kredit (SLIK OJK) calon jemaah.",
    },
    {
      question: "Kapan jemaah bisa berangkat jika mengambil program cicilan?",
      answer:
        "Jemaah dapat langsung memilih jadwal keberangkatan setelah proses persetujuan dan verifikasi pembiayaan disetujui (biasanya 3–5 hari kerja) serta pembayaran DP dilakukan.",
    },
    {
      question: "Siapa saja lembaga keuangan mitra resmi Samira Travel?",
      answer:
        "Kami bermitra resmi dengan AMITRA (PT Sharia Multifinance Astra) dan Bank Syariah Indonesia (BSI).",
    },
  ];

  const breadcrumbs = buildBreadcrumbSchema([
    { name: "Beranda", item: "/" },
    { name: "Cicilan Syariah", item: "/pembiayaan-syariah" },
  ]);

  const faqSchema = buildFAQSchema(faqs);

  return (
    <>
      <script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-[#FAF8F5] min-h-screen pb-16">
        {/* Header Hero */}
        <section className="bg-gradient-to-b from-[#04261E] to-[#084234] text-white pt-24 sm:pt-28 pb-12 md:pb-18">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-emerald-200/80 mb-6">
              <Link href="/" className="hover:text-white">Beranda</Link>
              <span>/</span>
              <span className="text-white font-medium">Cicilan Syariah</span>
            </nav>

            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-semibold tracking-[0.2em] text-[#C5A059] uppercase block">
                Akad Syariah Murabahah • Terdaftar & Diawasi OJK
              </span>
              <h1 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                Cicilan Umroh Syariah : Umroh Dulu, Bayar Belakangan
              </h1>
              <p className="text-sm md:text-base text-emerald-100/90 leading-relaxed">
                Jangan tunda niat suci Anda. Berangkat ibadah ke Baitullah lebih awal bersama keluarga tercinta dengan skema pembiayaan syariah tanpa sita aset jaminan.
              </p>
            </div>
          </div>
        </section>

        {/* Embedded Interactive Calculator Island */}
        <div className="-mt-8">
          <FinancingCalculatorIsland />
        </div>

        {/* Requirements & Process Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Requirements */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E3DA] shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-[#084234]">
                <FileText className="w-5 h-5" />
                <h2 className="font-playfair text-xl font-bold text-[#0F172A]">
                  Persyaratan Dokumen Pengajuan
                </h2>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Fotokopi KTP Calon Jemaah & Pasangan (bagi yang menikah)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Fotokopi Kartu Keluarga (KK) & Buku Nikah</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Slip Gaji 3 Bulan Terakhir (Karyawan) atau Mutasi Rekening 3 Bulan (Wirausaha)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>NPWP Pribadi (khusus pembiayaan di atas Rp 50 Jt)</span>
                </li>
              </ul>
            </div>

            {/* Steps */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E3DA] shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-[#084234]">
                <Clock className="w-5 h-5" />
                <h2 className="font-playfair text-xl font-bold text-[#0F172A]">
                  Alur Mudah 4 Langkah
                </h2>
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#084234] text-white text-xs font-bold flex items-center justify-center shrink-0">1</span>
                  <div>
                    <h3 className="font-bold text-[#0F172A]">Pilih Paket & Simulasi</h3>
                    <p className="text-xs text-slate-500">Tentukan paket kota dan pilihan tenor cicilan yang nyaman.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#084234] text-white text-xs font-bold flex items-center justify-center shrink-0">2</span>
                  <div>
                    <h3 className="font-bold text-[#0F172A]">Pengajuan & Verifikasi Berkas</h3>
                    <p className="text-xs text-slate-500">Staf cabang membantu verifikasi data dan pengecekan SLIK OJK (3-5 hari).</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#084234] text-white text-xs font-bold flex items-center justify-center shrink-0">3</span>
                  <div>
                    <h3 className="font-bold text-[#0F172A]">Akad Syariah & Pembayaran DP</h3>
                    <p className="text-xs text-slate-500">Tanda tangan akad Murabahah dan penyetoran uang muka resmi.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#084234] text-white text-xs font-bold flex items-center justify-center shrink-0">4</span>
                  <div>
                    <h3 className="font-bold text-[#0F172A]">Manasik & Berangkat Ibadah</h3>
                    <p className="text-xs text-slate-500">Terima koper perlengkapan dan terbang sesuai jadwal keberangkatan pasti.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E3DA] shadow-sm space-y-6">
            <h2 className="font-playfair text-2xl font-bold text-[#0F172A] flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#084234]" />
              <span>Pertanyaan Seputar Cicilan Syariah</span>
            </h2>
            <div className="divide-y divide-slate-100">
              {faqs.map((faq, idx) => (
                <div key={idx} className="py-4 space-y-1.5">
                  <h3 className="text-sm font-bold text-[#0F172A]">{faq.question}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
