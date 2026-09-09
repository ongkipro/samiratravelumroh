export interface HotelInfo {
  hotelNames: string[];
  stars: number;
  distanceMeters: number;
  distanceText: string;
  walkingTimeText: string;
  videoProofUrl: string;
  notes?: string;
}

export interface HotelTier {
  id: "safara" | "safawi" | "sukari" | "majol";
  name: string;
  tagline: string;
  badge: string;
  badgeColor: string;
  description: string;
  flyerImage: string;
  makkah: HotelInfo;
  madinah: HotelInfo;
}

export const HOTEL_TIERS: HotelTier[] = [
  {
    id: "safara",
    name: "Paket Safara",
    tagline: "Akomodasi Ekonomis Nyaman & Terjangkau",
    badge: "Pilihan Hemat Favorit",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
    description: "Pilihan tepat bagi jemaah yang menginginkan perjalanan ibadah yang berkah, nyaman, dan ramah anggaran keluarga dengan jarak jalan kaki yang terjangkau.",
    flyerImage: "/images/hotels/paket-safara-hotel.webp",
    makkah: {
      hotelNames: ["Durrat Al Salah", "Talat Ajyad"],
      stars: 3,
      distanceMeters: 700,
      distanceText: "±700 meter ke Masjidil Haram",
      walkingTimeText: "Jalan kaki ±9 menit",
      videoProofUrl: "https://youtu.be/1zrloLp-H4Y?si=cZWjKaWa1dNGOkGo",
      notes: "Akses jalan kaki teratur melalui kawasan Ajyad / Ibrahim Khalil."
    },
    madinah: {
      hotelNames: ["Plaza Inn Ohud", "Maysan Al Taqwa"],
      stars: 3,
      distanceMeters: 700,
      distanceText: "±700 meter ke Masjid Nabawi",
      walkingTimeText: "Jalan kaki ±4 menit",
      videoProofUrl: "https://youtu.be/gQ9G2RIDges?si=CHJIuhF6ruj6D5eb",
      notes: "Dekat dengan pelataran ziarah dan gate utama jemaah Indonesia."
    }
  },
  {
    id: "safawi",
    name: "Paket Safawi",
    tagline: "Akomodasi Semi-VIP Lebih Dekat Pelataran",
    badge: "Semi-VIP Best Seller",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
    description: "Kombinasi ideal antara kenyamanan hotel bintang 4/3 plus dan efisiensi waktu, dengan jarak ke Masjid Nabawi yang hanya 1 menit jalan kaki.",
    flyerImage: "/images/hotels/paket-safawi-hotel.webp",
    makkah: {
      hotelNames: ["Grand Al Massa", "Maysan Al Maqam"],
      stars: 4,
      distanceMeters: 450,
      distanceText: "±450 meter ke Masjidil Haram",
      walkingTimeText: "Jalan kaki ±5 menit",
      videoProofUrl: "https://youtu.be/ro2u1fWXedI?si=_UW7CsxRto4VF-OV",
      notes: "Lokasi strategis di koridor utama Ajyad dengan fasilitas restoran luas."
    },
    madinah: {
      hotelNames: ["Arkan Al Manar", "Durrat Al Eiman"],
      stars: 3,
      distanceMeters: 200,
      distanceText: "±200 meter ke Masjid Nabawi",
      walkingTimeText: "Jalan kaki ±1 menit",
      videoProofUrl: "https://youtu.be/hGq2E4XWt7g?si=kfv_vKXBUQrT0Xf2",
      notes: "Sangat dekat dengan pelataran Masjid Nabawi, memudahkan shalat 5 waktu berjemaah."
    }
  },
  {
    id: "sukari",
    name: "Paket Sukari",
    tagline: "Akomodasi Eksekutif Bintang 5 Ring 1",
    badge: "Bintang 5 Eksekutif",
    badgeColor: "bg-[#084234]/10 text-[#084234] border-[#084234]/25",
    description: "Dirancang untuk jemaah yang mengutamakan fasilitas mewah hotel bintang 5 di Makkah dan kemudahan akses super dekat di Madinah.",
    flyerImage: "/images/hotels/paket-sukari-hotel.webp",
    makkah: {
      hotelNames: ["Anjum Hotel", "Hilton Convention"],
      stars: 5,
      distanceMeters: 200,
      distanceText: "±200 meter ke Masjidil Haram",
      walkingTimeText: "Jalan kaki ±2-3 menit",
      videoProofUrl: "https://youtu.be/HoetFlXy7Us?si=sPglMPixtHqpX4lz",
      notes: "Hotel bintang 5 internasional dengan terowongan ber-AC langsung ke pelataran Haram."
    },
    madinah: {
      hotelNames: ["Grand Plaza", "Golden Tulip Ansar"],
      stars: 4,
      distanceMeters: 100,
      distanceText: "±100 meter ke Masjid Nabawi",
      walkingTimeText: "Jalan kaki ±1 menit",
      videoProofUrl: "https://youtu.be/hGq2E4XWt7g?si=kfv_vKXBUQrT0Xf2",
      notes: "Hanya selangkah dari pintu masuk Masjid Nabawi dan Raudhah."
    }
  },
  {
    id: "majol",
    name: "Paket Majol",
    tagline: "Akomodasi VVIP Nol Meter Pelataran Masjid",
    badge: "VVIP Nol Meter Pelataran",
    badgeColor: "bg-gradient-to-r from-amber-200 to-amber-100 text-amber-950 border-amber-400",
    description: "Tingkat kenyamanan tertinggi Samira Travel: hotel bintang 5 langsung di pelataran Masjidil Haram (Clock Tower) dan tepat di depan pagar Masjid Nabawi.",
    flyerImage: "/images/hotels/paket-majol-hotel.webp",
    makkah: {
      hotelNames: ["Movenpick Hotel", "Pullman Zamzam"],
      stars: 5,
      distanceMeters: 0,
      distanceText: "Langsung di Pelataran Masjidil Haram (Clock Tower)",
      walkingTimeText: "0 Menit (Langsung di Pelataran)",
      videoProofUrl: "https://youtu.be/KuKYvdg9QdI?si=t-SgtgXhcn19bM2E",
      notes: "Berada di kompleks Abraj Al-Bait (Clock Tower) dengan lift langsung ke pelataran Ka'bah."
    },
    madinah: {
      hotelNames: ["Taiba Front Hotel", "Al Aqeeq Hotel"],
      stars: 5,
      distanceMeters: 0,
      distanceText: "Depan Pagar Pas Pelataran Masjid Nabawi",
      walkingTimeText: "0 Menit (Depan Pagar Pas)",
      videoProofUrl: "https://youtu.be/5HuUwQ-nv8w?si=Hax7-Rv2Aj30Ri5d",
      notes: "Keluar lobi hotel langsung menginjak pelataran utama Masjid Nabawi."
    }
  }
];

export const HOTEL_DISCLAIMER = "Pilihan hotel menyesuaikan ketersediaan kamar saat kedatangan jamaah di Tanah Suci.";
