export interface TourPackage {
  id: string;
  slug: string;
  title: string;
  city: string; // e.g. "Surabaya", "Jakarta", "Medan"
  durationDays: number; // e.g. 12, 9, 13
  departurePeriod: string; // e.g. "Juli – Agustus 2026"
  priceIDR: number; // e.g. 38000000
  priceUSD?: number; // for Haji Furoda e.g. 17000
  priceFormatted: string; // e.g. "Rp 38.000.000"
  roomType: string; // "Safara Room Quad"
  airline: string; // "Lion Air"
  isDirectFlight: boolean;
  category: "reguler" | "plus" | "haji";
  destinationHighlight?: string;
  flyerImage?: string;
  description: string;
  hotelMakkah: {
    name: string;
    stars: number;
    distanceText: string;
  };
  hotelMadinah: {
    name: string;
    stars: number;
    distanceText: string;
  };
  inclusions: string[];
  exclusions: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    activities: string[];
  }[];
  terms: string[];
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  date: string;
  categories: string[];
  originalUrl: string;
  excerpt: string;
  content: string;
  readingTime: number;
  tags?: string[];
}

export interface BranchOffice {
  id: string;
  slug: string;
  name: string;
  city: string;
  province: string;
  region: "Sumatera" | "Jawa & DIY" | "Bali & Nusa Tenggara" | "Kalimantan" | "Sulawesi";
  address: string;
  postalCode?: string;
  phone: string;
  whatsapp: string;
  googleMapsUrl: string;
  isHeadOffice?: boolean;
}

export interface SiteConfig {
  companyName: string;
  brandName: string;
  tagline: string;
  domain: string;
  nib: string;
  ppiuLicense: string;
  pihkLicense: string;
  accreditation: string;
  headOffice: {
    address: string;
    city: string;
    province: string;
    postalCode: string;
    phoneHotline: string[];
    whatsappHotline: string;
    hajiHotline: string[];
    email: string[];
  };
  bankAccounts: {
    bank: string;
    accountNumber: string;
    accountName: string;
    currency: "IDR" | "USD";
  }[];
  guinnessRecord: {
    title: string;
    refId: string;
    attendees: number;
    location: string;
    date: string;
  };
  muriRecords: {
    title: string;
    detail: string;
    date: string;
  }[];
}
