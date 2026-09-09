import React from "react";
import type { Metadata } from "next";
import { getAllTours, getAllBranches, getRecentArticles } from "@/lib/data-service";
import { buildTravelAgencySchema, buildWebSiteSchema } from "@/lib/seo";
import { HeroSection } from "@/components/home/HeroSection";
import { CertaintyBar } from "@/components/home/CertaintyBar";
import { PackageFilterSection } from "@/components/home/PackageFilterSection";
import { FinancingCalculatorIsland } from "@/components/home/FinancingCalculatorIsland";
import { CompetitiveAdvantageSection } from "@/components/home/CompetitiveAdvantageSection";
import { SocialProofSection } from "@/components/home/SocialProofSection";
import { BranchQuickSelector } from "@/components/home/BranchQuickSelector";
import { RecentArticlesSection } from "@/components/home/RecentArticlesSection";

export const metadata: Metadata = {
  title: "Samira Travel | Biro Umroh & Haji Khusus Resmi Kemenag RI - Peringkat #1 Nasional",
  description:
    "Biro Perjalanan Umrah & Haji Khusus Resmi Kemenag RI (PPIU No. 137/2020 & PIHK 2022). Penerbangan langsung charter Lion Air & Saudia 11 kota, jaminan pasti berangkat, pemegang rekor dunia Guinness World Records.",
  alternates: {
    canonical: "https://samiratravelumrohhaji.com",
  },
  openGraph: {
    title: "Samira Travel | Biro Umroh & Haji Khusus Resmi Kemenag RI",
    description: "Biro Perjalanan Umrah Peringkat #1 Nasional Kemenag RI (28.673 Jemaah). Penerbangan langsung charter Lion Air & Saudia, jaminan pasti berangkat.",
    url: "https://samiratravelumrohhaji.com",
    siteName: "Samira Travel",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/samira-travel-umroh-dan-haji-resmi-kemenag.webp",
        width: 1200,
        height: 800,
        alt: "Samira Travel Umrah & Haji Khusus Resmi Kemenag RI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samira Travel | Biro Umroh & Haji Khusus Resmi Kemenag RI",
    description: "Peringkat #1 Nasional Jemaah Umroh Terbanyak Kemenag RI. Penerbangan charter pasti berangkat.",
    images: ["/images/samira-travel-umroh-dan-haji-resmi-kemenag.webp"],
  },
};

export default async function HomePage() {
  const [tours, branches, recentArticles] = await Promise.all([
    getAllTours(),
    getAllBranches(),
    getRecentArticles(4),
  ]);

  const travelAgencySchema = buildTravelAgencySchema();
  const webSiteSchema = buildWebSiteSchema();

  return (
    <>
      <script
        id="travel-agency-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(travelAgencySchema) }}
      />
      <script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />

      <div className="flex flex-col min-h-screen">
        {/* 1. Hero Section with FlightDeck Search */}
        <HeroSection />

        {/* 2. Certainty 4 Pillars Bar */}
        <CertaintyBar />

        {/* 3. Dynamic Package Filter Section (Tabs: Semua, Reguler 11 Kota, Plus, Haji Furoda) */}
        <PackageFilterSection tours={tours} />

        {/* 4. Sharia Financing Calculator Island (AMITRA & BSI) */}
        <FinancingCalculatorIsland />

        {/* 6. 4 Pillars Competitive Advantage (Charter, 26 Branches, APS Audio, Hemodialysis) */}
        <CompetitiveAdvantageSection />

        {/* 7. Social Proof, Guinness Record, MURI, & Celebrity Endorsement */}
        <SocialProofSection />

        {/* 8. 26 Physical Branch Quick Selector by 5 Regions */}
        <BranchQuickSelector branches={branches} />

        {/* 9. Recent Educational Articles from Inbound Content Silo */}
        <RecentArticlesSection articles={recentArticles} />
      </div>
    </>
  );
}
