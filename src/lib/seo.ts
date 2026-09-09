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
    logo: `${siteConfig.domain}/images/logo-samira-travel.webp`,
    image: `${siteConfig.domain}/images/samira-travel-umroh-dan-haji-resmi-kemenag.webp`,
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
    image: tour.flyerImage ? `${siteConfig.domain}${tour.flyerImage}` : `${siteConfig.domain}/images/samira-travel-umroh-dan-haji-resmi-kemenag.webp`,
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
    image: [`${siteConfig.domain}/images/samira-travel-umroh-dan-haji-resmi-kemenag.webp`],
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
        url: `${siteConfig.domain}/images/logo-samira-travel.webp`,
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

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.domain}/#website`,
    name: siteConfig.brandName,
    alternateName: siteConfig.companyName,
    url: siteConfig.domain,
    inLanguage: "id-ID",
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.domain}/paket-umroh?city={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildVideoObjectSchema(videos: { id: string; title: string; desc: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: videos.map((v, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "VideoObject",
        name: v.title,
        description: v.desc,
        thumbnailUrl: [`https://i.ytimg.com/vi/${v.id}/maxresdefault.jpg`],
        uploadDate: "2026-01-01T08:00:00+07:00",
        embedUrl: `https://www.youtube.com/embed/${v.id}`,
      },
    })),
  };
}

export function buildArticleListSchema(articles: Article[]) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Pusat Artikel & Panduan Umrah Haji Samira Travel",
    url: `${siteConfig.domain}/artikel`,
    hasPart: articles.slice(0, 30).map((a, idx) => ({
      "@type": "Article",
      position: idx + 1,
      headline: a.title,
      url: `${siteConfig.domain}/artikel/${a.slug}`,
      datePublished: a.date,
    })),
  };
}
