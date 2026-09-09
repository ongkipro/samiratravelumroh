import { siteConfig } from "@/data/site-config";
import { TourPackage, Article, BranchOffice } from "@/types";

export function buildTravelAgencySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": `${siteConfig.domain}/#organization`,
    name: siteConfig.brandName,
    legalName: siteConfig.companyName,
    url: siteConfig.domain,
    logo: `${siteConfig.domain}/images/logo-samira-travel.png`,
    image: `${siteConfig.domain}/images/banner-hero-1.jpg`,
    description:
      "Penyelenggara Perjalanan Ibadah Umrah (PPIU) Peringkat 1 Nasional Kementerian Agama RI dan Penyelenggara Ibadah Haji Khusus (PIHK) resmi.",
    telephone: siteConfig.headOffice.phoneHotline[0],
    email: siteConfig.headOffice.email[0],
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.headOffice.address,
      addressLocality: siteConfig.headOffice.city,
      addressRegion: siteConfig.headOffice.province,
      postalCode: siteConfig.headOffice.postalCode,
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.2297,
      longitude: 106.9458,
    },
    priceRange: "Rp 28.000.000 - Rp 45.000.000",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "3850",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [
      "https://www.youtube.com/@samiratravelofficial",
      "https://www.instagram.com/samiratravel",
    ],
  };
}

export function buildTouristTripSchema(tour: TourPackage) {
  return {
    "@context": "https://schema.org",
    "@type": ["TouristTrip", "Product"],
    name: tour.title,
    description: tour.description,
    image: tour.flyerImage ? `${siteConfig.domain}${tour.flyerImage}` : `${siteConfig.domain}/images/banner-hero-1.jpg`,
    touristType: "Jamaah Umroh & Haji Indonesia",
    itinerary: {
      "@type": "ItemList",
      numberOfItems: tour.itinerary.length,
      itemListElement: tour.itinerary.map((day, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: `Hari ${day.day}: ${day.title}`,
        description: day.description,
      })),
    },
    offers: {
      "@type": "Offer",
      price: tour.priceIDR,
      priceCurrency: "IDR",
      availability: "https://schema.org/InStock",
      validFrom: "2026-01-01",
      url: `${siteConfig.domain}/paket-umroh/${tour.city.toLowerCase()}`,
      seller: {
        "@type": "TravelAgency",
        name: siteConfig.companyName,
      },
    },
  };
}

export function buildArticleSchema(article: Article) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    url: `${siteConfig.domain}/artikel/${article.slug}`,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Organization",
      name: siteConfig.brandName,
      url: siteConfig.domain,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.companyName,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.domain}/images/logo-samira-travel.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.domain}/artikel/${article.slug}`,
    },
  };
}

export function buildBranchSchema(branch: BranchOffice) {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: branch.name,
    parentOrganization: {
      "@type": "Organization",
      name: siteConfig.companyName,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: branch.address,
      addressLocality: branch.city,
      addressRegion: branch.province,
      addressCountry: "ID",
    },
    telephone: branch.phone,
    url: `${siteConfig.domain}/kantor-cabang/${branch.slug}`,
  };
}

export function buildFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: `${siteConfig.domain}${item.item}`,
    })),
  };
}
