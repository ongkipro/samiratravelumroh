import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { getAllBranches } from "@/lib/data-service";
import { buildBreadcrumbSchema } from "@/lib/seo";
import { BranchDirectoryClient } from "@/components/branches/BranchDirectoryClient";
import { Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Direktori 26 Kantor Cabang Fisik Se-Indonesia | Samira Travel",
  description:
    "Temukan kantor cabang resmi Samira Travel di Sumatera, Jawa, Bali, Nusa Tenggara, Kalimantan, dan Sulawesi. Layanan konsultasi tatap muka, pendaftaran, dan penyerahan koper.",
  alternates: {
    canonical: "https://samiratravelumrohhaji.com/kantor-cabang",
  },
};

export default async function KantorCabangIndexPage() {
  const allBranches = await getAllBranches();

  const breadcrumbs = buildBreadcrumbSchema([
    { name: "Beranda", item: "/" },
    { name: "Kantor Cabang", item: "/kantor-cabang" },
  ]);

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <div className="bg-[#FAF8F5] min-h-screen pb-16">
        {/* Header Hero */}
        <section className="bg-gradient-to-b from-[#04261E] to-[#084234] text-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-emerald-200/80 mb-6">
              <Link href="/" className="hover:text-white">Beranda</Link>
              <span>/</span>
              <span className="text-white font-medium">Kantor Cabang</span>
            </nav>

            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-semibold tracking-[0.2em] text-[#C5A059] uppercase block">
                Direktori Layanan Nasional • 26 Kantor Perwakilan Resmi
              </span>
              <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Jaringan Kantor Cabang Samira Travel
              </h1>
              <p className="text-sm md:text-base text-emerald-100/90 leading-relaxed">
                Kami hadir lebih dekat dengan keluarga Anda di 5 pulau besar Indonesia. Dapatkan pendampingan langsung dari pendaftaran, manasik, hingga keberangkatan.
              </p>
            </div>
          </div>
        </section>

        {/* Directory Content with Instant Search & Region Filter */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
          <BranchDirectoryClient branches={allBranches} />
        </div>
      </div>
    </>
  );
}
