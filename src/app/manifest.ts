import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Samira Travel - Biro Umroh & Haji Khusus Resmi Kemenag RI",
    short_name: "Samira Travel",
    description:
      "Biro perjalanan umroh peringkat #1 nasional Kemenag RI. Penerbangan langsung charter Lion Air & Saudia, hotel bintang 5 pelataran, garansi pasti berangkat.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF8F5",
    theme_color: "#084234",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    categories: ["travel", "lifestyle", "business"],
    lang: "id",
    dir: "ltr",
  };
}
