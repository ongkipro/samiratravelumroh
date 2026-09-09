import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { getBranchBySlug, getAllBranches } from "@/lib/data-service";
import { buildBranchSchema, buildBreadcrumbSchema } from "@/lib/seo";
import { 
  MapPin, 
  Phone, 
  Clock, 
  ShieldCheck, 
  Navigation, 
  CheckCircle2, 
  Building2,
  Calendar
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const branches = await getAllBranches();
  return branches.map((b) => ({
    slug: b.slug.toLowerCase(),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const branch = await getBranchBySlug(slug);
  if (!branch) return { title: "Cabang Tidak Ditemukan" };

  return {
    title: `${branch.name} — Alamat & Kontak Resmi | Samira Travel`,
    description: `Alamat kantor resmi ${branch.name}, ${branch.address}. Layanan pendaftaran paket umrah, haji furoda, konsultasi pembiayaan, dan pengambilan koper perlengkapan.`,
    alternates: {
      canonical: `https://samiratravelumrohhaji.com/kantor-cabang/${slug}`,
    },
    openGraph: {
      title: `${branch.name} | Samira Travel`,
      description: `Alamat resmi: ${branch.address}. Telp: ${branch.phone}`,
      url: `https://samiratravelumrohhaji.com/kantor-cabang/${slug}`,
    },
  };
}

export default async function BranchDetailPage({ params }: Props) {
  const { slug } = await params;
  const branch = await getBranchBySlug(slug);
  if (!branch) notFound();

  const allBranches = await getAllBranches();
  const nearbyBranches = allBranches
    .filter((b) => b.region === branch.region && b.slug !== branch.slug)
    .slice(0, 4);

  const branchSchema = buildBranchSchema(branch);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Beranda", item: "/" },
    { name: "Kantor Cabang", item: "/kantor-cabang" },
    { name: `${branch.name}`, item: `/kantor-cabang/${branch.slug}` },
  ]);

  return (
    <>
      <Script
        id="branch-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(branchSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="bg-[#FAF8F5] min-h-screen pb-16">
        {/* Header Hero */}
        <section className="bg-gradient-to-b from-[#04261E] to-[#084234] text-white pt-8 pb-14 md:pt-12 md:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-emerald-200/80 mb-6">
              <Link href="/" className="hover:text-white">Beranda</Link>
              <span>/</span>
              <Link href="/kantor-cabang" className="hover:text-white">Kantor Cabang</Link>
              <span>/</span>
              <span className="text-white font-semibold truncate">{branch.name}</span>
            </nav>

            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-semibold tracking-[0.2em] text-[#C5A059] uppercase block">
                Wilayah {branch.region}{branch.isHeadOffice ? " • Kantor Pusat Samira Travel" : " • Kantor Perwakilan Resmi"}
              </span>

              <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                {branch.name}
              </h1>

              <p className="text-sm md:text-base text-emerald-100/90 leading-relaxed">
                Kantor perwakilan operasional resmi untuk wilayah {branch.city}, {branch.province} dan sekitarnya. Melayani konsultasi tatap muka langsung bersama staf konsultan profesional.
              </p>
            </div>
          </div>
        </section>

        {/* Content Details */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left 8 Cols: Branch Info, Services, Maps */}
            <div className="lg:col-span-8 space-y-8">
              {/* Info Card */}
              <div className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 border border-[#E8E3DA] shadow-sm space-y-6">
                <h2 className="font-playfair text-xl md:text-2xl font-bold text-[#0F172A] flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#084234]" />
                  <span>Detail Lokasi & Kontak Operasional</span>
                </h2>

                <div className="space-y-4 text-sm text-slate-700">
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Alamat Fisik Lengkap
                    </span>
                    <p className="text-base font-semibold text-[#0F172A] leading-relaxed">
                      {branch.address}
                    </p>
                    {branch.postalCode && (
                      <span className="text-xs text-slate-500 mt-0.5 block">
                        Kode Pos: {branch.postalCode}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                    <div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                        Nomor Telepon / Hotline
                      </span>
                      <div className="flex items-center gap-2 font-bold text-[#084234] text-base">
                        <Phone className="w-4 h-4 text-[#C5A059]" />
                        <span>{branch.phone}</span>
                      </div>
                    </div>

                    <div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                        Jam Operasional Kantor
                      </span>
                      <div className="space-y-1 text-xs text-slate-600 font-medium">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          <span>Senin – Jumat: 08:30 – 17:00 WIB</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          <span>Sabtu: 09:00 – 14:00 WIB (Minggu Libur)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Google Maps External Link */}
                <div className="pt-2">
                  <a
                    href={branch.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
                  >
                    <Navigation className="w-4 h-4 text-[#084234]" />
                    <span>Petunjuk Arah Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Services Available */}
              <div className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 border border-[#E8E3DA] shadow-sm space-y-4">
                <h2 className="font-playfair text-xl md:text-2xl font-bold text-[#0F172A]">
                  Layanan di Kantor Cabang
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm text-slate-700 pt-1">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Pendaftaran & Pemilihan Jadwal Kursi Umrah/Haji</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Penyerahan Berkas Paspor & Rekam Biometrik Visa</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Pengambilan Koper, Ihram, Mukena & Buku Panduan</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Pengajuan Cicilan Syariah AMITRA / BSI Tanpa Riba</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 4 Cols: Fast WhatsApp Action & Nearby Branches */}
            <div className="lg:col-span-4 space-y-6">
              {/* Direct Phone Action */}
              <div className="bg-white rounded-2xl p-6 border border-[#E8E3DA] shadow-md space-y-4">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Hubungi Kantor Cabang
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Ingin konfirmasi jadwal pertemuan atau konsultasi langsung dengan staf perwakilan kantor cabang ini?
                </p>
                <a
                  href={`tel:${branch.phone.replace(/[^0-9+]/g, "")}`}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#084234] hover:bg-[#04261E] text-white font-bold text-sm shadow-md transition-all active:scale-[0.98]"
                >
                  <Phone className="w-4 h-4" />
                  <span>Telepon Kantor ({branch.phone})</span>
                </a>
              </div>

              {/* Safety notice */}
              <div className="bg-[#04261E] border border-emerald-900/60 text-white rounded-2xl p-5 space-y-2">
                <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider block">
                  Peringatan Keamanan
                </span>
                <p className="text-xs text-emerald-100/90 leading-relaxed">
                  Demi keamanan transaksi, seluruh pembayaran pendaftaran umrah dan haji wajib ditransfer ke 4 rekening resmi atas nama <strong>PT Samira Ali Wisata</strong>. Cabang tidak diperkenankan menerima transfer ke rekening pribadi staf.
                </p>
              </div>

              {/* Other nearby branches in region */}
              {nearbyBranches.length > 0 && (
                <div className="bg-white rounded-2xl p-5 border border-[#E8E3DA] shadow-sm space-y-3">
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                    Cabang Lain di Wilayah {branch.region}
                  </span>
                  <div className="space-y-2">
                    {nearbyBranches.map((nb) => (
                      <Link
                        key={nb.id}
                        href={`/kantor-cabang/${nb.slug}`}
                        className="block p-2.5 rounded-xl bg-[#FAF8F5] hover:bg-slate-100 transition-colors"
                      >
                        <div className="font-bold text-xs text-[#0F172A]">{nb.name}</div>
                        <div className="text-[11px] text-slate-500 truncate">{nb.city}, {nb.province}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
