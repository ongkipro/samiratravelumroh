# TASKS.md — Master Development Roadmap (A-to-Z Execution Queue)
**Project**: Samira Travel Umroh & Haji Public Portal  
**Target Domain**: `https://samiratravelumrohhaji.com`  
**Tech Stack**: Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion, Radix UI / shadcn/ui  
**Total Target Static Routes**: **456 Indexed URLs** (100% SSG)  
**Dokumen Acuan**:
- [PRD.md](file:///Users/ongki/Projects/samiratravelumroh/PRD.md) — *Product Requirements Document*
- [DESIGN.md](file:///Users/ongki/Projects/samiratravelumroh/DESIGN.md) — *The Madinah Serenity Design System & Motion Specs*
- [ARCHITECTURE.md](file:///Users/ongki/Projects/samiratravelumroh/ARCHITECTURE.md) — *Page-by-Page Map & Technical Architecture*
**Status**: Canonical Development Checklist (Phase 1: Public Frontend & SEO Engine)

---

## Ringkasan Progres & Milestone Utama

- [x] **Milestone 1**: Scaffolding, Design Tokens, Asset Migration & Base Infrastructure (Phase 1 - 3)
- [x] **Milestone 2**: Decoupled Data Access Layer (DAL) & TypeScript Models (Phase 4)
- [x] **Milestone 3**: Global Layout, App-Like Mobile Navigation & Conversion Engine (Phase 5)
- [x] **Milestone 4**: Master Homepage & Interactive Client Islands (Phase 6)
- [x] **Milestone 5**: Programmatic City Landing Pages (11 Embarkasi) & Dual-Mode Tables (Phase 7)
- [x] **Milestone 6**: Umroh Plus Suite (5 Destinasi) & Haji Furoda Landing Page (Phase 8)
- [x] **Milestone 7**: Direktori 26 Cabang Fisik & Peluang Kemitraan DGi (Phase 9)
- [x] **Milestone 8**: Kredensial Legalitas, Rekor Dunia & Halaman Testimoni Medis (Phase 10)
- [x] **Milestone 9**: Inbound Content Silo (400 Artikel Terindeks + In-Article WA Banner) (Phase 11)
- [x] **Milestone 10**: SEO Engine Otomatis, Dynamic Sitemap (456 URLs) & JSON-LD (Phase 12)
- [x] **Milestone 11**: Audit Aksesibilitas, Mobile Anti-Zoom, Core Web Vitals & Production Build (Phase 13)
- [x] **Milestone 12**: Total UI/UX Overhaul & Modern Minimalist Madinah Theme (Phase 14)

---

## Rincian Tugas Eksekusi Lengkap (A-to-Z Checklist)

### Phase 1: Environment, Tooling & Project Scaffolding
- [x] **Task 1.1**: Inisialisasi proyek Next.js 15 App Router dengan TypeScript, Tailwind CSS, dan ESLint pada direktori kerja `src/`.
- [x] **Task 1.2**: Instalasi paket pustaka UI & animasi esensial:
  - `lucide-react` (ikon konsisten)
  - `clsx` & `tailwind-merge` (utility styling dinamis)
  - `framer-motion` (motion engine 60fps untuk spring tab, number counter, & staggered entry)
  - `@radix-ui/react-dialog`, `@radix-ui/react-slot`, `@radix-ui/react-accordion` (primitif aksesibilitas shadcn/ui).
- [x] **Task 1.3**: Konfigurasi `tailwind.config.ts` dengan token warna resmi *"The Madinah Serenity"*:
  - Canvas: `#F9F8F5` (Thassos Marble hangat)
  - Surface: `#FFFFFF` / Muted: `#F2EFE9`
  - Brand Primary: `#0A523F` (Nabawi Emerald) / Deep: `#063A2D`
  - Gold Accent: `#C5A059` (Raudhah Brass) / Deep Gold: `#9B7832`
  - Ink Primary: `#0F172A` (Midnight Slate) / Muted: `#475569`
  - Conversion: `#16A34A` (Lush WhatsApp Green).
- [x] **Task 1.4**: Konfigurasi `next/font` di `src/app/layout.tsx`:
  - Font primer: `Plus Jakarta Sans` (open aperture, keterbacaan tinggi lansia & tabular numbers).
  - Font display aksen: `Playfair Display` (sparingly untuk headline pusaka & kutipan suci).
- [x] **Task 1.5**: Konfigurasi Viewport & Meta Anti-Zoom di `src/app/layout.tsx`:
  - `<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />`
  - Penguncian CSS global agar seluruh elemen form input memiliki `font-size >= 16px` di mobile (menghilangkan bug auto-zoom iOS Safari & Chrome).
  - Penanganan safe area notch & home bar iPhone (`pb-safe`, `pt-safe`).

### Phase 2: Migrasi & Optimasi Aset Visual Lokal
- [x] **Task 2.1**: Buat direktori publik `public/images/` dan migrasikan seluruh aset dari `assets/images/`:
  - Logo resmi Samira Travel (`logo-samira-travel.png`).
  - Sertifikat Guinness World Records (`guinness-world-records-halal-dinner-jeddah.png`).
  - 3 Piagam Rekor MURI (`rekor-muri-*.png`).
  - Piala penghargaan APSI 2026 (`penghargaan-apsi-2026-jamaah-terbanyak.png`).
  - 4 Badge pilar layanan & legalitas Kemenag PPIU/PIHK.
  - Logo 4 Bank resmi (BSI, Mandiri, Muamalat, Permata Syariah).
  - 11 Brosur Keberangkatan Ultra HD (`brosur-keberangkatan-*.webp`).
  - Banner hero & foto perlengkapan umrah/haji.
- [x] **Task 2.2**: Buat komponen ornamen SVG `src/components/decorations/CanopyPattern.tsx` (vektor geometris bintang 8 lipatan payung Nabawi 1px dengan opacity halus 3%–5%).
- [x] **Task 2.3**: Buat komponen `src/components/decorations/RaudhahSheen.tsx` (efek kilatan cahaya emas berkecepatan 1.2s setiap 7s).

### Phase 3: Utility & Arsitektur Konversi WhatsApp
- [x] **Task 3.1**: Bangun `src/lib/whatsapp.ts`:
  - Fungsi generator link WhatsApp kontekstual dengan parameter dinamis: nama paket, kota asal, durasi hari, tipe kamar, nilai simulasi DP/tenor, nomor cabang lokal, dan tagging UTM referensi.
  - Skema fallback nomor hotline pusat jika nomor cabang daerah tidak aktif.
- [x] **Task 3.2**: Bangun `src/lib/formatters.ts`:
  - `formatIDR(value)`: Format mata uang rupiah rapi (`Rp 38.000.000`).
  - `formatUSD(value)`: Format dolar Amerika (`USD 17.000`).
  - `formatDateIndonesian(dateString)`: Konversi tanggal baku Indonesia.
- [x] **Task 3.3**: Bangun `src/lib/seo.ts`:
  - Helper pembangun JSON-LD Schema.org (`buildTravelAgencySchema`, `buildTouristTripSchema`, `buildArticleSchema`, `buildFAQSchema`, `buildBreadcrumbSchema`).

### Phase 4: Decoupled Data Access Layer (DAL) & TypeScript Models
- [x] **Task 4.1**: Definisikan tipe data di `src/types/`:
  - `TourPackage` (id, slug, title, city, durationDays, priceIDR, priceUSD, airline, hotelMakkah, hotelMadinah, roomType, isCharterFlight, itinerary, inclusions, exclusions).
  - `Article` (id, slug, title, category, publishedDate, readingTimeMinutes, excerpt, contentMarkdown).
  - `BranchOffice` (id, slug, city, province, region, address, phone, whatsapp, googleMapsUrl).
  - `FinancingSimulation` (dpAmount, tenorMonths, monthlyInstallment, partner).
  - `SiteConfig` (companyLegalName, brandName, nib, ppiuLicense, pihkLicense, bankAccounts, hotlines).
- [x] **Task 4.2**: Bangun data store lokal di `src/data/tours.ts`:
  - Porting 11 paket kota reguler dari `tour_data.json` dengan tipografi bersih.
  - Porting 5 paket Umroh Plus (Thaif, Al-Ula, Turki, Riyadh, Jeddah) dari `03_PAKET_UMROH_PLUS.md`.
  - Porting program Haji Furoda USD 17.000 dari `04_HAJI_KHUSUS_DAN_FURODA.md`.
- [x] **Task 4.3**: Bangun data store lokal di `src/data/articles.json`:
  - Porting 400 artikel edukasi dari `articles_data.json` dengan slug SEO-friendly, tanggal terstandar, dan teks bersih dari sisa HTML entity.
- [x] **Task 4.4**: Bangun data store lokal di `src/data/branches.ts`:
  - Porting 26 kantor cabang resmi dari `05_JARINGAN_KANTOR_CABANG_DAN_KONTAK.md` lengkap dengan pembagian 5 zona kepulauan.
- [x] **Task 4.5**: Bangun data store lokal di `src/data/site-config.ts`:
  - Profil legalitas PT Samira Ali Wisata, nomor rekening resmi anti-penipuan, dan kontak hotline darurat.
- [x] **Task 4.6**: Bangun abstraction service di `src/lib/data-service.ts`:
  - `getAllTours()`, `getTourBySlug(slug)`, `getToursByCity(city)`, `getFeaturedTours()`
  - `getAllArticles()`, `getArticleBySlug(slug)`, `getArticlesByCategory(cat)`, `getRecentArticles(limit)`
  - `getAllBranches()`, `getBranchBySlug(slug)`, `getBranchesByRegion(region)`
  - *(Memastikan saat Fase 2 CMS Admin dibangun, cukup mengubah file ini tanpa merombak UI).*

### Phase 5: Global Layout & Ergonomi Mobile Web App
- [x] **Task 5.1**: Bangun komponen `src/components/layout/Navbar.tsx`:
  - Logo resmi Samira Travel, navigasi desktop elegan, hotline telepon cepat, dan tombol WhatsApp hijau.
  - Mode mobile: tombol hamburger halus yang memicu navigasi fullscreen/drawer tanpa pergeseran layout.
- [x] **Task 5.2**: Bangun komponen `src/components/layout/Footer.tsx`:
  - Kredensial badan hukum PT Samira Ali Wisata, NIB, izin PPIU & PIHK Kemenag RI.
  - Kotak Peringatan Keamanan Transaksi: Penegasan 4 rekening resmi perusahaan anti-penipuan rekening pribadi.
  - Link navigasi cepat ke 11 kota embarkasi dan direktori cabang.
- [x] **Task 5.3**: Bangun komponen `src/components/layout/StickyMobileBar.tsx`:
  - Bar melayang di bagian bawah layar smartphone (`backdrop-blur-md bg-[#F9F8F5]/90` dengan border atas 1px).
  - Sisi kiri: label *"Paket mulai Rp 35 Jt (Pasti Berangkat)"*.
  - Sisi kanan: Tombol WhatsApp empuk ramah jempol `[Konsultasi via WA]` dengan feedback taktil `:active:scale-[0.98]`.
- [x] **Task 5.4**: Bangun komponen `src/components/layout/FloatingWhatsApp.tsx`:
  - Tombol melayang di sudut kanan bawah dengan animasi *"Pulse of Serenity"* (cincin riak hijau memancar setiap 5 detik).
- [x] **Task 5.5**: Bangun komponen `src/components/ui/MobileDrawerSheet.tsx`:
  - Drawer geser dari bawah (bottom sheet) untuk pemilihan kota dan filter paket di layar mobile.

### Phase 6: Master Homepage (`/`) & Interactive Islands
- [x] **Task 6.1**: Bangun `src/components/home/HeroSection.tsx`:
  - Animasi ambient *"Canopy Breath"* berputar lambat di latar belakang.
  - Eyebrow pill: `Peringkat #1 Nasional SISKOPATUH Kemenag RI • Akreditasi A`.
  - Headline H1 emosional dalam `Playfair Display`: *"Ibadah Tenang Menuju Baitullah, Jadwal Pasti Bersama Sahabat Keluarga."*
  - Subteks jaminan tiket charter pesawat Lion Air / Saudia.
- [x] **Task 6.2**: Bangun `src/components/home/FlightDeckSearch.tsx` (Client Island):
  - Modul pencarian cepat: Selector Kota Keberangkatan (11 Kota) + Bulan Keberangkatan + Tombol Cari.
- [x] **Task 6.3**: Bangun `src/components/home/CertaintyBar.tsx`:
  - 4 pilar kepastian dengan garis rambut 1px:
    1. Izin Resmi PPIU No. 137/2020 & PIHK 2022
    2. Tiket Charter Flight (Pasti Berangkat)
    3. Rekor Dunia Guinness & 3 Rekor MURI
    4. Cicilan Syariah AMITRA / BSI Tanpa Jaminan.
- [x] **Task 6.4**: Bangun `src/components/home/PackageFilterSection.tsx` (Client Island):
  - Kapsul filter dengan animasi pegas Framer Motion (`layoutId="activeFilter"`): *Semua*, *Umroh Reguler (11 Kota)*, *Umroh Plus*, *Haji Furoda*.
  - Kartu paket boarding pass dengan foto hotel, maskapai, durasi, harga tebal, dan tombol WhatsApp terintegrasi.
- [x] **Task 6.5**: Bangun `src/components/home/DualModeTable.tsx`:
  - Desktop: Tabel komparasi eksekutif garis rambut dengan angka tabular dan badge status.
  - Mobile: Otomatis bermutasi menjadi kartu vertikal ramah sentuh jempol.
- [x] **Task 6.6**: Bangun `src/components/home/FinancingCalculatorIsland.tsx` (Client Island):
  - Slider interaktif DP (Rp 6 Jt – Rp 10 Jt) dan toggle tenor (12, 24, 36 Bulan).
  - Animasi angka berputar (*rolling number counter*) pada estimasi angsuran bulanan.
  - Tombol CTA: *"Ajukan Simulasi Pembiayaan via WhatsApp"*.
- [x] **Task 6.7**: Bangun `src/components/home/CompetitiveAdvantageSection.tsx`:
  - 4 pilar diferensiasi: Skala Charter Flight, 26 Cabang Fisik, Teknologi Audio Receiver (APS), Kesiapan Layanan Medis Cuci Darah di Saudi.
- [x] **Task 6.8**: Bangun `src/components/home/SocialProofSection.tsx`:
  - Liputan Citra Kirana & Rezky Adhitya (program UMBAST), Ungu Band, rating Google Reviews 4.9, dan modal semat video YouTube resmi.
- [x] **Task 6.9**: Bangun `src/components/home/BranchQuickSelector.tsx` & `src/components/home/RecentArticlesSection.tsx`.

### Phase 7: Programmatic City Landing Pages (11 Embarkasi)
- [x] **Task 7.1**: Bangun halaman indeks `/paket-umroh` (`src/app/paket-umroh/page.tsx`) dengan filter multi-kota.
- [x] **Task 7.2**: Implementasi dynamic route `src/app/paket-umroh/[city]/page.tsx` dengan `generateStaticParams()` untuk 11 kota:
  - `/paket-umroh/jakarta` (Lion Air 9 Hari, Rp 36.000.000)
  - `/paket-umroh/surabaya` (Lion Air 12 Hari, Rp 38.000.000)
  - `/paket-umroh/medan` (Lion Air 12 Hari, Rp 36.000.000)
  - `/paket-umroh/makassar` (Lion Air 12 Hari, Rp 35.000.000)
  - `/paket-umroh/palembang` (Lion Air 9 Hari, Rp 38.000.000)
  - `/paket-umroh/padang` (Lion Air 13 Hari, Rp 36.000.000)
  - `/paket-umroh/pontianak` (Lion Air 13 Hari, Rp 39.000.000)
  - `/paket-umroh/aceh` (Lion Air 13 Hari, Rp 35.000.000)
  - `/paket-umroh/denpasar` (Lion Air 12 Hari, Rp 35.000.000)
  - `/paket-umroh/batam` (Lion Air 13 Hari, Rp 39.000.000)
  - `/paket-umroh/pekanbaru` (Lion Air 13 Hari, Rp 35.000.000).
- [x] **Task 7.3**: Bangun komponen `src/components/packages/ItineraryStepper.tsx`:
  - Stepper vertikal interaktif dengan aksen emas yang dapat di-tap per hari (Accordion halus).
- [x] **Task 7.4**: Integrasikan kartu perwakilan kantor cabang lokal dan tombol WhatsApp khusus kota terkait.
- [x] **Task 7.5**: Sematkan Schema.org `TouristTrip`, `Product`, dan `LocalBusiness` di setiap halaman kota.

### Phase 8: Umroh Plus Suite & Haji Khusus Furoda
- [x] **Task 8.1**: Bangun halaman katalog `/umroh-plus` (`src/app/umroh-plus/page.tsx`).
- [x] **Task 8.2**: Implementasi dynamic route `src/app/umroh-plus/[slug]/page.tsx` dengan `generateStaticParams()` untuk 5 rute:
  - `/umroh-plus/thaif` (Ziarah Thaif, Kereta Gantung Telefrik, Pabrik Mawar)
  - `/umroh-plus/al-ula` (Situs Warisan Dunia UNESCO Hegra Madain Saleh & Elephant Rock)
  - `/umroh-plus/turki` (Hagia Sophia, Blue Mosque, Bosphorus Cruise, Grand Bazaar)
  - `/umroh-plus/riyadh` (Benteng Masmak, Diriyah UNESCO, Kingdom Centre)
  - `/umroh-plus/jeddah` (Kota Tua Al-Balad, Laut Merah Corniche, Masjid Terapung).
- [x] **Task 8.3**: Bangun landing page berkelas tinggi `/haji-khusus-furoda` (`src/app/haji-khusus-furoda/page.tsx`):
  - Biaya USD 17.000, 20 Hari, tanpa antre kuota langsung berangkat tahun berjalan.
  - Jaminan keamanan: DP USD 5.000 garansi **100% Full Refund utuh tanpa potongan** jika visa haji tidak disetujui Kerajaan Arab Saudi.
  - Fasilitas tenda maktab ber-AC di Arafah & Mina, bus eksekutif AC + toilet, hotel fullboard bintang 5, bimbingan manasik intensif, dan layanan badal haji.

### Phase 9: Direktori 26 Cabang Fisik & Peluang Kemitraan DGi
- [x] **Task 9.1**: Bangun halaman direktori cabang `/kantor-cabang` (`src/app/kantor-cabang/page.tsx`) dengan tab 5 pulau besar (Sumatera, Jawa, Bali-Nusa Tenggara, Kalimantan, Sulawesi).
- [x] **Task 9.2**: Implementasi dynamic route `src/app/kantor-cabang/[slug]/page.tsx` dengan `generateStaticParams()` untuk 26 kantor cabang resmi:
  - Menampilkan alamat fisik detail, sematan peta Google Maps, jam operasional, dan tombol WhatsApp langsung ke Kepala Cabang terkait.
- [x] **Task 9.3**: Bangun landing page rekrutmen mitra `/kemitraan-dgi` (`src/app/kemitraan-dgi/page.tsx`):
  - Penjelasan konsep *"Pejuang Baitullah"* murni syariah non-MLM.
  - Rincian komisi penjualan kursi (Rp 1.500.000 – Rp 4.000.000 / jemaah).
  - Skema reward 1 Tiket Umroh Gratis setiap 10–12 jemaah.
  - Showcase paket Starter Kit promosi DGi (spanduk, roll-banner, brosur, blazer/gamis seragam resmi, ID Card).
  - Pelatihan sertifikasi Tour Leader & Muthawwif resmi berstandar BNSP.

### Phase 10: Profil Kredensial, Rekor Dunia & Testimoni Medis
- [x] **Task 10.1**: Bangun halaman `/tentang-kami` (`src/app/tentang-kami/page.tsx`):
  - Sejarah evolusi 2014–2026 dari komunitas DGi hingga biro umroh peringkat #1 nasional.
  - Profil Owner (H. Fauzi Wahyu Muntoro) & Co-Founder (Hj. drg. Dini Lukitasari).
  - Tampilan plakat resmi: **Guinness World Records** (Ref ID `15-782573`), **3 Rekor MURI**, dan **Piala APSI 2026** oleh tvOne.
  - Daftar lengkap 4 rekening bank resmi PT Samira Ali Wisata dan peringatan anti-fraud.
- [x] **Task 10.2**: Bangun halaman `/testimoni` (`src/app/testimoni/page.tsx`):
  - Rangkuman ulasan kepuasan bintang 5 terverifikasi.
  - Dokumentasi program UMBAST Citra Kirana, Rezky Adhitya, dan Ungu Band.
  - **Studi Kasus Pelayanan Medis Pasien Cuci Darah (Hemodialisa)** di Rumah Sakit Saudi.
  - Kisah jemaah lansia/disabilitas kursi roda dan kakek pencari rumput menabung 19 tahun.

### Phase 11: Inbound Content Hub (Silo 400 Artikel)
- [x] **Task 11.1**: Bangun halaman direktori artikel `/artikel` (`src/app/artikel/page.tsx`):
  - Kolom pencarian instan berbasis judul dan kata kunci.
  - Filter kategori tematis: *Tips Umroh, Info Haji, Kabar Mekkah, Fikih & Doa, Info Saudi*.
  - Komponen paginasi bersih (12 artikel per halaman).
- [x] **Task 11.2**: Implementasi dynamic route `src/app/artikel/[slug]/page.tsx` dengan `generateStaticParams()` yang meng-generate **400 artikel secara statis**:
  - Tata letak baca yang nyaman (*editorial reading experience*), bersih tanpa iklan mengganggu.
  - Indikator estimasi waktu baca dan tanggal publikasi.
  - **Sticky / In-Article WhatsApp Callout Box**: Kotak konversi kontekstual di tengah artikel yang mengajak jemaah bertanya paket terkait topik artikel.
  - Rekomendasi 3 artikel terkait dan navigasi breadcrumb.
  - Sematan Schema.org `Article` dan `BreadcrumbList`.

### Phase 12: Mesin SEO Otomatis & Dynamic Sitemap (456 URLs)
- [x] **Task 12.1**: Implementasi fungsi `generateMetadata()` pada setiap file rute statis dan dinamis:
  - Canonical URL terpadu ke `https://samiratravelumrohhaji.com`.
  - Judul halaman dinamis ramah klik SERP (cth: *"Biaya & Paket Umroh Surabaya 12 Hari 2026 | Samira Travel"*).
  - OpenGraph & Twitter Card gambar pratinjau saat link dibagikan ke grup WhatsApp/Facebook.
- [x] **Task 12.2**: Bangun `src/app/sitemap.ts` dinamis:
  - Otomatis menghimpun dan menerbitkan file XML yang mencakup seluruh **456 URL**:
    - 14 Halaman Utama
    - 11 Halaman Kota Keberangkatan
    - 5 Halaman Umroh Plus
    - 26 Halaman Kantor Cabang
    - 400 Halaman Artikel Edukasi.
- [x] **Task 12.3**: Bangun `src/app/robots.ts`:
  - Mengatur akses Googlebot, Bingbot, dan crawler AI untuk mengindeks seluruh halaman publik.
- [x] **Task 12.4**: Validasi struktur data JSON-LD menggunakan validator Google Rich Results.

### Phase 13: Audit Kualitas, Aksesibilitas & Validasi Produksi
- [x] **Task 13.1**: Audit bebas auto-zoom pada layar sentuh mobile (memastikan tidak ada input yang memicu pergeseran atau pembesaran tak sengaja).
- [x] **Task 13.2**: Audit ukuran target sentuh (*touch target size*) minimal 44px x 44px pada seluruh link dan tombol aksi.
- [x] **Task 13.3**: Uji coba end-to-end seluruh tombol WhatsApp: memastikan setiap tombol menghasilkan pesan pembuka yang relevan dan nomor tujuan yang tepat.
- [x] **Task 13.4**: Uji coba kompilasi TypeScript (`tsc --noEmit`) dengan 0 error.
- [x] **Task 13.5**: Uji coba kompilasi produksi (`npm run build`):
  - Memverifikasi 100% halaman (456 rute) sukses di-generate secara statis (SSG) tanpa kegagalan fetch.
- [x] **Task 13.6**: Audit performa *Google Lighthouse / Core Web Vitals*:
  - Target Performance Mobile > 92
  - Target Performance Desktop > 98
  - Target Accessibility 100
  - Target SEO 100.

---

### Phase 14: Total UI/UX Overhaul from Scratch (Modern Minimalist Madinah Theme & Professional System)
*Arahan Khusus Paduka Ongki: Rombak total dari 0 khusus UI/UX agar bebas dari tampilan AI/AI-slop, mengadopsi tema Modern Minimalist Madinah, profesional, setara portal umrah luxury kekinian, dengan konten terkalibrasi dan regenerasi aset visual resolusi tinggi.*

- [x] **Task 14.1 (Planning & Design Architecture)**:
  - Perbarui dokumen acuan arsitektur desain: `DESIGN.md`, `PRD.md`, dan `TASKS.md` mencerminkan filosofi visual *"The Modern Madinah Sanctuary"*, aturan anti-slop, dan palet arsitektural Nabawi.
- [x] **Task 14.2 (Visual Asset Regeneration via Skill `generate_image`)**:
  - [x] Generate `hero_kaaba_sanctuary`: Fotografi sinematik fajar Ka'bah & pelataran Masjidil Haram (16:9).
  - [x] Generate `nabawi_dawn_pillars`: Fotografi arsitektur marmer dan payung kanopi Masjid Nabawi (16:9).
  - [x] Generate `dest_umroh_plus_thaif`: Fotografi lanskap pegunungan sejuk Ta'if & kebun mawar (16:9).
  - [x] Generate `dest_umroh_plus_alula`: Fotografi warisan peradaban Hegra Al-Ula matahari terbenam (16:9).
  - [x] Generate `dest_umroh_plus_turki`: Fotografi panorama senja Bosphorus & siluet Hagia Sophia (16:9).
  - [x] Generate `perlengkapan_umrah_luxury`: Fotografi studio kit koper fiber emerald dan perlengkapan ibadah premium (16:9).
- [x] **Task 14.3 (Global Shell Overhaul: Navbar, Mobile Drawer, Footer & Tokens)**:
  - [x] Update `tailwind.config.ts` dan CSS variables dengan palet Modern Madinah (Alabaster `#FAF8F5`, Rawdah Forest `#084234`, Madinah Brass `#C5A059`).
  - [x] Redesign `src/components/layout/Navbar.tsx`: Minimalis arsitektural, ramping, tipografi bersih, drop-down kota elegan, nomor hotline tunggal `085607179735`.
  - [x] Redesign `src/components/layout/Footer.tsx`: Editorial magazine footer berlatar Midnight Rawdah `#04261E` dengan struktur kredensial yang kokoh dan bebas boxy clutter.
  - [x] Redesign `src/components/layout/StickyMobileBar.tsx` & `src/components/layout/FloatingWhatsApp.tsx`: Kontrol konversi elegan ramah jempol.
- [x] **Task 14.4 (Homepage Master Overhaul — "The Open Sanctuary")**:
  - [x] Redesign `src/components/home/HeroSection.tsx`: Layout asimetris split sinematik dengan visual fajar Ka'bah resolusi tinggi, headline editorial berwibawa, dan strip pencarian cepat terintegrasi.
  - [x] Redesign `src/components/home/CertaintyBar.tsx`: Strip 4 pilar arsitektural dengan hairline dividers 1px tanpa box-in-card.
  - [x] Redesign `src/components/home/PackageFilterSection.tsx`: Showcase kurasi 6 paket bergaransi dengan visual tajam, tipografi hotel ring-1 jernih, dan harga all-in tabular.
  - [x] Redesign `src/components/home/SocialProofSection.tsx`: Display kredensial rekor dunia & MURI 100% frameless dengan rasio presisi 16:9, video player sinematik, dan testimoni 3-kolom gaya majalah.
  - [x] Redesign `src/components/home/CompetitiveAdvantageSection.tsx`: Showcase fasilitas dan kit perlengkapan premium dengan visual hasil generate studio.
  - [x] Redesign `src/components/home/FinancingCalculatorIsland.tsx`: Simulator pembiayaan syariah minimalis dan responsif.
  - [x] Redesign `src/components/home/BranchQuickSelector.tsx` & `src/components/home/RecentArticlesSection.tsx`.
- [x] **Task 14.5 (Subpages & Programmatic Landing Pages Overhaul)**:
  - [x] Redesign `/paket-umroh` & 11 Dynamic City Routes (`/paket-umroh/[city]`): Layout dual-mode eksekutif tanpa kotak bersarang.
  - [x] Redesign `/umroh-plus` & 5 Detail Destinasi (`/umroh-plus/[slug]`): Editorial travel guide dengan foto destinasi baru.
  - [x] Redesign `/haji-khusus-furoda`: Landing page haji luxury dengan akomodasi bintang 5 dan jaminan garansi 100% refund DP.
  - [x] Redesign `/kantor-cabang`, `/tentang-kami`, `/kemitraan-dgi`, `/testimoni`, `/pembiayaan-syariah`, dan `/artikel/[slug]`.
- [x] **Task 14.6 (Final Verification, Build & Visual Quality Audit)**:
  - [x] TypeScript check (`npx tsc --noEmit`) = 0 error.
  - [x] Build produksi (`npm run build`) = 456 rute SSG sukses.
  - [x] Audit responsivitas mobile viewport & touch targets.
