import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileAppDock } from "@/components/layout/MobileAppDock";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#084234",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://samiratravelumrohhaji.com"),
  title: {
    default: "Samira Travel - Biro Umroh & Haji Khusus Resmi Kemenag RI",
    template: "%s - Samira Travel",
  },
  description:
    "Biro perjalanan umroh & haji khusus resmi Kemenag RI (PPIU No. 137/2020). Penerbangan langsung charter Lion Air, hotel bintang 5, dan garansi pasti berangkat.",
  keywords: [
    "samira travel",
    "travel umroh terbaik",
    "paket umroh 2026",
    "biaya umroh 2026",
    "paket umroh surabaya",
    "paket umroh jakarta",
    "haji furoda 2026",
    "umroh dulu bayar belakangan",
    "pt samira ali wisata",
  ],
  authors: [{ name: "PT Samira Ali Wisata" }],
  creator: "Samira Travel",
  publisher: "Samira Travel",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: "https://samiratravelumrohhaji.com",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Samira Travel - Biro Umroh & Haji Khusus Resmi Kemenag RI",
    description:
      "Biro perjalanan umroh peringkat #1 nasional Kemenag RI. Penerbangan langsung charter Lion Air & Saudia, hotel bintang 5 pelataran, garansi pasti berangkat.",
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
    title: "Samira Travel - Biro Umroh & Haji Khusus Resmi Kemenag RI",
    description:
      "Peringkat #1 nasional jemaah umroh terbanyak Kemenag RI. Penerbangan charter pasti berangkat.",
    images: ["/images/samira-travel-umroh-dan-haji-resmi-kemenag.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      data-scroll-behavior="smooth"
      className={`${plusJakarta.variable} ${playfair.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#0F172A] antialiased">
        <Navbar />
        <main className="flex-1 pb-16 sm:pb-0">
          {children}
        </main>
        <Footer />
        <MobileAppDock />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
