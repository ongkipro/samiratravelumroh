import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getBranchBySlug, getAllBranches } from "@/lib/data-service";
import { buildBranchSchema, buildBreadcrumbSchema } from "@/lib/seo";
import { siteConfig } from "@/data/site-config";
import { 
  MapPin, 
  Phone, 
  Clock, 
  ShieldCheck, 
  Navigation, 
  CheckCircle2, 
  Building2,
  Calendar,
  MessageCircle,
  ExternalLink,
  ChevronRight,
  Lock,
  ArrowLeft,
  FileCheck,
  Briefcase,
  Users2,
  PlaneTakeoff
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

  const title = `${branch.name} - Alamat, No Telepon & Jadwal Layanan`;
  const description = `Alamat kantor resmi ${branch.name}, ${branch.address}. Layanan pendaftaran paket umrah 2026, haji furoda, konsultasi pembiayaan syariah, dan penyerahan koper resmi Samira Travel.`;
  const pageUrl = `https://samiratravelumrohhaji.com/kantor-cabang/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title,
      description,
      url: pageUrl,
      images: [
        {
          url: "/images/branch_sanctuary_network.jpg",
          width: 1200,
          height: 630,
          alt: `Kantor Cabang ${branch.name} Samira Travel`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/branch_sanctuary_network.jpg"],
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

  const waGreeting = encodeURIComponent(
    `Assalamu'alaikum ${branch.name}, saya ingin berkonsultasi mengenai jadwal keberangkatan dan pendaftaran paket umrah.`
  );
  const waLink = `https://wa.me/${branch.whatsapp}?text=${waGreeting}`;

  return (
    <>
      <script
        id="branch-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(branchSchema) }}
      />
      <script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="bg-[#FAF8F5] min-h-screen pb-24">
        {/* Cinematic Sanctuary Hero */}
        <section className="relative overflow-hidden bg-[#04261E] text-white pt-24 sm:pt-28 pb-16 md:pb-24">
          {/* Photographic Background (1376x768, 16:9) */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/branch_sanctuary_network.jpg"
              alt={`Kantor Cabang ${branch.name}`}
              fill
              priority
              quality={90}
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Luminous Multilayer Directional Vignette */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#04261E]/95 via-[#04261E]/85 to-[#04261E]/60" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#04261E] to-transparent" />
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#04261E]/60 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb nav */}
            <nav className="flex items-center gap-2 text-xs text-emerald-200/80 mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
              <ChevronRight className="w-3.5 h-3.5 text-emerald-300/60" />
              <Link href="/kantor-cabang" className="hover:text-white transition-colors">Kantor Cabang</Link>
              <ChevronRight className="w-3.5 h-3.5 text-emerald-300/60" />
              <span className="text-white font-semibold truncate">{branch.name}</span>
            </nav>

            <div className="max-w-3xl space-y-4">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#C5A059] uppercase">
                <MapPin className="w-4 h-4" />
                <span>Wilayah {branch.region} • {branch.isHeadOffice ? "Kantor Pusat Samira Travel" : "Kantor Perwakilan Resmi"}</span>
              </span>

              <h1 className="font-playfair text-2xl sm:text-4xl md:text-5xl font-bold text-[#FAF8F5] leading-tight drop-shadow-md">
                {branch.name}
              </h1>

              <p className="text-sm md:text-base text-emerald-100/90 leading-relaxed max-w-2xl font-normal drop-shadow">
                Kantor perwakilan operasional resmi untuk wilayah {branch.city}, {branch.province} dan sekitarnya. Melayani konsultasi tatap muka langsung, bimbingan berkas paspor, pendaftaran paket umrah, dan pengambilan koper resmi.
              </p>

              {/* Quick actions row */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat WhatsApp Cabang</span>
                </a>

                <a
                  href={branch.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs sm:text-sm transition-all"
                >
                  <Navigation className="w-4 h-4 text-[#C5A059]" />
                  <span>Buka Petunjuk Arah Maps</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Content Details */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left 8 Cols: Branch Info, Services, Maps */}
            <div className="lg:col-span-8 space-y-8">
              {/* Info Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E3DA] shadow-sm space-y-6">
                <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-emerald-50 text-[#084234]">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <h2 className="font-playfair text-xl md:text-2xl font-bold text-[#0F172A]">
                      Informasi Lokasi & Kontak Operasional
                    </h2>
                  </div>
                  {branch.isHeadOffice && (
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
                      Kantor Pusat
                    </span>
                  )}
                </div>

                <div className="space-y-5 text-sm text-slate-700">
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4 border-t border-slate-100">
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                        Nomor Telepon & WhatsApp
                      </span>
                      <div className="flex items-center gap-2 font-bold text-[#084234] text-base">
                        <Phone className="w-4 h-4 text-[#C5A059]" />
                        <a href={`tel:${branch.phone.replace(/[^0-9+]/g, "")}`} className="hover:underline">
                          {branch.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-emerald-700 font-semibold pt-1">
                        <MessageCircle className="w-3.5 h-3.5" />
                        <a href={waLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          +{branch.whatsapp} (WhatsApp Aktif)
                        </a>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
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

                {/* Google Maps External Action */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-3">
                  <a
                    href={branch.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
                  >
                    <Navigation className="w-4 h-4 text-[#084234]" />
                    <span>Buka Rute di Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>

                  <Link
                    href="/kantor-cabang"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#084234] hover:underline px-3 py-2"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Kembali ke Direktori 26 Cabang</span>
                  </Link>
                </div>
              </div>

              {/* Services Available */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E3DA] shadow-sm space-y-5">
                <h2 className="font-playfair text-xl md:text-2xl font-bold text-[#0F172A]">
                  Layanan yang Disediakan di Kantor Cabang Ini
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
                  <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8E3DA] space-y-1.5">
                    <div className="flex items-center gap-2 font-bold text-slate-900">
                      <Users2 className="w-4 h-4 text-emerald-600" />
                      <span>Pendaftaran Kursi Umrah & Haji</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Pemilihan tanggal keberangkatan, maskapai carter Saudia/Lion Air, dan tipe kamar hotel bintang 5.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8E3DA] space-y-1.5">
                    <div className="flex items-center gap-2 font-bold text-slate-900">
                      <FileCheck className="w-4 h-4 text-emerald-600" />
                      <span>Verifikasi Berkas & Paspor</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Pengecekan keabsahan dokumen, surat rekomendasi Kemenag, dan sinkronisasi data SISKOPATUH.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8E3DA] space-y-1.5">
                    <div className="flex items-center gap-2 font-bold text-slate-900">
                      <Briefcase className="w-4 h-4 text-emerald-600" />
                      <span>Penyerahan Koper & Perlengkapan</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Pengambilan koper fiber luxury, kain ihram, mukena, seragam batik, dan buku manasik resmi.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8E3DA] space-y-1.5">
                    <div className="flex items-center gap-2 font-bold text-slate-900">
                      <PlaneTakeoff className="w-4 h-4 text-emerald-600" />
                      <span>Koordinasi Keberangkatan Bandara</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Pendampingan rombongan daerah menuju bandara keberangkatan terdekat hingga tiba di embarkasi utama.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 4 Cols: Fast WhatsApp Action & Nearby Branches */}
            <div className="lg:col-span-4 space-y-6">
              {/* Direct WhatsApp Card */}
              <div className="bg-white rounded-3xl p-6 border border-[#E8E3DA] shadow-md space-y-4">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Konsultasi Langsung
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Ingin konfirmasi jadwal pertemuan langsung atau konsultasi paket umrah bersama staf perwakilan cabang ini?
                </p>

                <div className="space-y-2 pt-1">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all active:scale-[0.98]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat WhatsApp Cabang</span>
                  </a>

                  <a
                    href={`tel:${branch.phone.replace(/[^0-9+]/g, "")}`}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#084234] hover:bg-[#04261E] text-white font-semibold text-xs transition-all"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Telepon ({branch.phone})</span>
                  </a>
                </div>
              </div>

              {/* Safety notice */}
              <div className="bg-[#04261E] border border-emerald-900/60 text-white rounded-3xl p-6 space-y-2.5 shadow-sm">
                <div className="flex items-center gap-2 text-[#C5A059]">
                  <Lock className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Pemberitahuan Rekening Resmi
                  </span>
                </div>
                <p className="text-xs text-emerald-100/90 leading-relaxed">
                  Demi keamanan transaksi, seluruh pembayaran pendaftaran atau pelunasan umrah & haji hanya sah jika ditransfer ke rekening giro resmi atas nama <strong className="text-white font-semibold">PT SAMIRA ALI WISATA</strong>. Staf cabang tidak diperkenankan menerima transfer ke rekening pribadi perorangan.
                </p>
              </div>

              {/* Other nearby branches in region */}
              {nearbyBranches.length > 0 && (
                <div className="bg-white rounded-3xl p-6 border border-[#E8E3DA] shadow-sm space-y-3.5">
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                    Cabang Lain di Wilayah {branch.region}
                  </span>
                  <div className="space-y-2">
                    {nearbyBranches.map((nb) => (
                      <Link
                        key={nb.id}
                        href={`/kantor-cabang/${nb.slug}`}
                        className="block p-3 rounded-2xl bg-[#FAF8F5] hover:bg-emerald-50/60 border border-[#E8E3DA] hover:border-emerald-200 transition-all group"
                      >
                        <div className="font-bold text-xs text-[#0F172A] group-hover:text-[#084234] transition-colors">
                          {nb.name}
                        </div>
                        <div className="text-[11px] text-slate-500 truncate mt-0.5">
                          {nb.city}, {nb.province}
                        </div>
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
