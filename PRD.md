# PRD — Samira Travel Umroh & Haji Public Portal
**Target Domain**: `https://samiratravelumrohhaji.com`  
**Brand**: Samira Travel (PT Samira Ali Wisata)  
**Dokumentasi Terkait**:
- [DESIGN.md](file:///Users/ongki/Projects/samiratravelumroh/DESIGN.md) — *The Madinah Serenity Design System, Sacred Palette, Motion & Dual-Mode Table Specs*
- [ARCHITECTURE.md](file:///Users/ongki/Projects/samiratravelumroh/ARCHITECTURE.md) — *Peta Development Halaman per Halaman (Page-by-Page Map) & Data Access Layer*
- [TASKS.md](file:///Users/ongki/Projects/samiratravelumroh/TASKS.md) — *Antrean Tugas Eksekusi Terukur*
**Status**: Approved for Development (Phase 1: Public Frontend & SEO Engine)

---

## 1. Executive Summary & Problem Statement

### 1.1. Latar Belakang & Peluang Bisnis
PT Samira Ali Wisata (Samira Travel) merupakan pemegang rekor **Peringkat #1 Nasional Jemaah Umroh Terbanyak di Indonesia (Siskopatuh Kemenag RI)** dengan capaian 28.673 jemaah, pemegang **Guinness World Records**, serta 3 Rekor MURI. Perusahaan memiliki keunggulan kompetitif berupa sistem *charter flight* pesawat (Lion Air / Saudia) yang menjamin kepastian jadwal terbang (**Pasti Berangkat**), 26 kantor cabang resmi di seluruh pulau besar, kemitraan pembiayaan syariah (*AMITRA Astra Financial, BSI, Permata Syariah*), serta ekosistem keagenan DGi (*Dini Group Indonesia*).

Website `samiratravelumrohhaji.com` dibangun sebagai **High-Performance Inbound Engine & Lead Conversion Portal** yang mengoptimasi potensi aset digital (400 artikel edukasi, 11 kota keberangkatan, 5 paket umroh plus, haji furoda, dan 26 cabang) agar mendominasi mesin pencari Google dan mengonversi pengunjung menjadi calon jemaah via **WhatsApp**.

### 1.2. Strategi Dua Fase (Phased Roadmap)
* **Fase 1 (Scope Saat Ini)**:
  * Membangun **Frontend Publik Berkinerja Tinggi** (*Extreme Core Web Vitals*).
  * **SEO-First**: Programmatic City Pages (11 Embarkasi), Silo 400 Artikel, Schema.org JSON-LD lengkap (total 456 URL terindeks).
  * **WhatsApp-Centric Conversion Funnel**: Tombol, kartu paket, kalkulator, dan halaman artikel terhubung dengan *pre-filled contextual WhatsApp links* dan *branch geo-routing*.
  * **Mobile Web App-Like Experience**: Menghilangkan auto-zoom trap dengan aturan input 16px, safe-area support, dan bottom sheet drawer.
  * **Dual-Mode Table Architecture**: Tabel eksekutif di desktop bermutasi menjadi *Boarding Pass Cards* ramah jempol di mobile.
  * **Decoupled Data Architecture**: Data produk, artikel, dan cabang dikelola melalui *Data Access Layer* (DAL) terstruktur berbasis TypeScript/JSON lokal, sehingga saat Fase 2 dimulai, frontend tidak perlu dirombak sama sekali.
* **Fase 2 (Future Roadmap)**:
  * Pembangunan **CMS Admin Dashboard** (manajemen paket, update kuota seat, manajemen artikel, dan audit leads).
  * Integrasi Database (PostgreSQL / Supabase / Drizzle ORM) dan Webhook WhatsApp Business API.

---

## 2. Arsitektur Teknis & Tech Stack

| Komponen | Spesifikasi & Teknologi | Alasan Pemilihan |
|:---|:---|:---|
| **Framework** | **Next.js 15 (App Router)** | Standar industri modern, mendukung React Server Components (RSC) dan SSG untuk skor SEO maksimal. |
| **Bahasa** | **TypeScript** | Type-safety penuh untuk model data paket, artikel, cabang, dan kalkulator pembiayaan. |
| **Styling & Design System** | **Tailwind CSS + shadcn/ui** | Desain clean "The Madinah Serenity" (Emerald, Thassos Marble, Rawdah Gold), mobile-first, dan aksesibel. |
| **Icons** | **Lucide React** | Ikon visual yang ringan, konsisten, dan komprehensif. |
| **Animation Engine** | **Framer Motion + CSS Keyframes** | Motion 60fps GPU-accelerated: Canopy breath ambient, Raudhah sheen, dan spring tab indicator. |
| **Rendering Mode** | **Static Site Generation (SSG)** via `generateStaticParams` | Pre-rendering 100% halaman (456 URL) saat build time. 0ms server lag, TTFB < 50ms di Edge CDN. |
| **Content & Data Layer** | **Local Structured Data Access Layer (DAL)** (`src/data/*` & `src/lib/data-service.ts`) | Memisahkan konsumsi data dari komponen UI. Mempermudah migrasi ke Database/CMS di Fase 2. |
| **SEO & Metadata** | Next.js Dynamic Metadata API + Schema.org JSON-LD | Otomasi Canonical URL, OpenGraph, Twitter Cards, `TouristTrip`, `Article`, `TravelAgency`, & `FAQPage`. |

---

## 3. Peta Struktur Halaman & Arsitektur URL (456 URL Terindeks)

Rincian pemetaan halaman per halaman selengkapnya tercatat di [ARCHITECTURE.md](file:///Users/ongki/Projects/samiratravelumroh/ARCHITECTURE.md).

```text
https://samiratravelumrohhaji.com
├── /                                   # Homepage (Master Brand Authority & Conversion Hub)
├── /paket-umroh/                       # Direktori Lengkap Paket Umroh Reguler
│   ├── /paket-umroh/jakarta            # Programmatic SEO: Keberangkatan Jakarta (Lion Air 9 Hari)
│   ├── /paket-umroh/surabaya           # Programmatic SEO: Keberangkatan Surabaya (Lion Air 12 Hari)
│   ├── /paket-umroh/medan              # Programmatic SEO: Keberangkatan Medan (Lion Air 12 Hari)
│   ├── /paket-umroh/makassar           # Programmatic SEO: Keberangkatan Makassar (Lion Air 12 Hari)
│   ├── /paket-umroh/palembang          # Programmatic SEO: Keberangkatan Palembang (Lion Air 9 Hari)
│   ├── /paket-umroh/padang             # Programmatic SEO: Keberangkatan Padang (Lion Air 13 Hari)
│   ├── /paket-umroh/pontianak          # Programmatic SEO: Keberangkatan Pontianak (Lion Air 13 Hari)
│   ├── /paket-umroh/aceh               # Programmatic SEO: Keberangkatan Aceh (Lion Air 13 Hari)
│   ├── /paket-umroh/denpasar           # Programmatic SEO: Keberangkatan Denpasar (Lion Air 12 Hari)
│   ├── /paket-umroh/batam              # Programmatic SEO: Keberangkatan Batam (Lion Air 13 Hari)
│   └── /paket-umroh/pekanbaru          # Programmatic SEO: Keberangkatan Pekanbaru (Lion Air 13 Hari)
├── /umroh-plus/                        # Katalog Varian Umroh Plus (Wisata Peradaban Islam)
│   ├── /umroh-plus/thaif               # Landing Page Umroh Plus Ta'if (Rp 29 Jt-an)
│   ├── /umroh-plus/al-ula              # Landing Page Umroh Plus Al-Ula Hegra UNESCO (Rp 34 Jt-an)
│   ├── /umroh-plus/turki               # Landing Page Umroh Plus Turkey Bosphorus (Rp 37 Jt-an)
│   ├── /umroh-plus/riyadh              # Landing Page Umroh Plus Riyadh Masmak (Rp 30 Jt-an)
│   └── /umroh-plus/jeddah              # Landing Page Umroh Plus Jeddah Corniche (Rp 28 Jt-an)
├── /haji-khusus-furoda/                # Landing Page Haji Furoda USD 17.000 (Tanpa Antre, Maktab AC, DP Full Refund)
├── /pembiayaan-syariah/                # Simulasi Kalkulator "Umroh Dulu Bayar Belakangan" (AMITRA / BSI / Permata)
├── /kantor-cabang/                     # Direktori 26 Kantor Cabang Resmi Samira Travel se-Indonesia
│   └── /kantor-cabang/[slug-cabang]    # 26 Detail Cabang: Alamat Fisik, Google Maps, Hotline WhatsApp Lokal
├── /kemitraan-dgi/                     # Peluang Kemitraan Syiar Baitullah DGi (Non-MLM, Komisi 1.5 - 4 Jt/pax)
├── /tentang-kami/                      # Profil Legalitas SK Kemenag, Guinness World Records, & 3 Rekor MURI
├── /testimoni/                         # Testimoni Artis UMBAST, Pasien Cuci Darah di Saudi, & Google Reviews
└── /artikel/                           # Inbound Content Hub (Direktori 400 Artikel Edukasi & Fikih)
    ├── /artikel/kategori/[kategori]    # Filter Artikel per Kategori (Tips Umroh, Info Haji, Kabar Mekkah, dll)
    └── /artikel/[slug-artikel]         # 400 Halaman Baca Artikel + In-Article WhatsApp Callout Widget
```

---

## 4. Spesifikasi UI/UX, Tema Islami "Madina Tone", & Navigasi Ramah Awam

### 4.1. Filosofi Visual: The Modern Madinah Sanctuary (Tema Islami & Madina Tone)
Portal publik Samira Travel diposisikan sebagai **portal haji dan umrah modern berkelas internasional** dengan atmosfer visual yang terinspirasi langsung dari kemuliaan arsitektur Masjid Nabawi di Madinah:
1. **The Sacred Palette (Madina Tone)**:
   * **Madinah Alabaster (`#FAF8F5`)**: Kanvas marmer putih bersih hangat yang sejuk di mata, anti-silau (*sanctuary calm*), menggantikan warna putih silau default `#ffffff`.
   * **Rawdah Deep Forest (`#084234` / `#063A2D`)**: Warna hijau kubah Masjid Nabawi yang matang, berwibawa, sakral, dan meneduhkan hati jemaah (bukan hijau neon/terang murah).
   * **Madinah Brass / Rawdah Gold (`#C5A059` / `#D4AF37`)**: Aksen kuningan arsitektural ornamen mimbar & payung Nabawi. Digunakan presisi pada garis aksen 1px, bintang akreditasi, dan sorotan harga.
   * **Desert Sand Subtle (`#F3EFEA`)**: Warna pasir sahara lembut sebagai latar kontras netral antar-seksi.
   * **Midnight Rawdah (`#04261E`)**: Warna malam Madinah untuk header kredensial, footer otoritas, dan bayangan teks sinematik.
2. **Ornamen Sakral Modern (Anti-AI Slop)**:
   * Menolak pola arabesque/vektor kaligrafi klise yang ramai dan mengganggu konsentrasi.
   * Menggunakan mikrotekstur elegan: geometri kanopi payung hidrolik Nabawi halus (`CanopyPattern`), kilau lembut sutra karpet Raudhah (`RaudhahSheen`), dan garis pemisah rambut (*hairline borders* 1px `#E8E3DA`).
3. **Zero Card-in-Card Syndrome**:
   * Menghilangkan tumpukan kotak abu-abu di dalam kotak putih. Informasi distrukturkan menggunakan skala tipografi (*scale hierarchy*), garis pemisah halus (*hairlines* 1px), dan kolom terbuka (*open columns*).

### 4.2. Standar Navigasi Ramah Orang Awam (Elderly & Family-Friendly Ergonomics)
Mayoritas calon jemaah haji dan umrah adalah kalangan lanjut usia (lansia), pensiunan, serta keluarga di daerah yang membutuhkan kemudahan navigasi maksimal:
1. **Tipografi Berukuran Besar & Kontras Tinggi**:
   * Menggunakan font **Plus Jakarta Sans** dengan *open aperture* lebar dan keterbacaan tinggi.
   * Teks narasi berukuran minimum 15px–16px dengan rasio kontras WCAG AA (> 7:1) terhadap latar belakang, menjamin kenyamanan mata lansia.
2. **Bahasa Indonesia Lugas & Bebas Jargon Asing**:
   * Menghindari istilah teknis rumit (e.g. *payload, onboarded, checkout funnel*).
   * Menggunakan istilah yang akrab di hati jemaah: *"Jadwal & Biaya Keberangkatan"*, *"Garansi Pasti Berangkat"*, *"Hotel Bintang 5 Dekat Pelataran Masjid"*, *"Konsultasi Gratis via WhatsApp"*, *"26 Kantor Cabang Terdekat"*.
3. **1-Click WhatsApp Direct Action (Zero Friction)**:
   * Orang awam enggan mengisi form formulir pendaftaran yang panjang.
   * Seluruh kartu paket, rincian biaya, dan simulasi cicilan terhubung ke 1 klik WhatsApp resmi (`085607179735`) dengan pesan salam dan detail paket yang sudah **terisi otomatis secara rapi**.
4. **Petunjuk Visual Kredibilitas Transparan**:
   * Di setiap tahapan navigasi selalu disajikan 3 pilar ketenangan batin jemaah:
     * ✓ **Izin Resmi Kemenag RI** (PPIU No. 137/2020 & PIHK 2022, Akreditasi A)
     * ✓ **Pasti Berangkat** (Tiket Pesawat Langsung / Direct Charter Flight Lion Air & Saudia)
     * ✓ **Peringkat #1 Nasional** (Data Resmi SISKOPATUH Kemenag RI, 28.673 jemaah)
5. **Direktori 26 Kantor Cabang Fisik**:
   * Menyediakan pencarian cabang per pulau/kota dengan alamat lengkap, Google Maps, dan hotline lokal agar jemaah daerah merasa aman karena dapat berkunjung langsung ke kantor fisik.

### 4.3. Mobile-First: Web App-Like View Experience
Di perangkat smartphone (akses > 82% pengguna), portal beroperasi layaknya aplikasi native yang taktil, cepat, dan ergonomis:
1. **Fixed Top App Header**:
   * Header ramping mengapung dengan logo Samira Travel tajam, lencana *Peringkat #1 Nasional*, hotline telepon darurat, dan tombol drawer menu hamburger yang mudah dijangkau.
2. **Sticky Bottom Conversion & Anchor Bar (`StickyMobileBar`)**:
   * Bar mengapung di bagian bawah layar yang terkunci pada zona jangkauan satu ibu jari (*thumb zone*).
   * Menampilkan anchor harga acuan paket terendah (*"Mulai Rp 35.000.000"*) dan tombol hijau WhatsApp berukuran lebar minimum `44px` tinggi dengan efek taktil responsif (`:active:scale-[0.98]`).
   * Mendukung penuh `pb-safe` / `env(safe-area-inset-bottom)` agar tidak terpotong garis gesture home iPhone.
3. **Boarding Pass Card Transformation (Dual-Mode Table)**:
   * Menghilangkan jebakan tabel horizontal yang sulit digeser di layar HP (*no horizontal scroll traps*).
   * Tabel jadwal penerbangan di desktop otomatis bermutasi di mobile menjadi **Kartu Boarding Pass Tiket Pesawat Vertikal** yang memuat jam terbang, nomor maskapai, tanggal masehi/hijriyah, dan sisa seat.
4. **Bottom Sheet Drawer & Quick Filter Chips**:
   * Pemilihan 11 kota embarkasi dan kategori paket di mobile disajikan dalam bentuk deretan *horizontal scrolling chips* yang halus atau modal lembar geser bawah (*bottom sheet*) bergaya iOS/Android native.
5. **Anti-Zoom Trap Invariant**:
   * Seluruh elemen input pencarian, dropdown, dan form wajib disetel minimal font **`16px` (`text-base`)** pada breakpoint mobile untuk mencegah browser Safari/Chrome melakukan auto-zoom paksa yang merusak layout.

---

## 5. Matriks Katalog Aset Gambar & Pedoman Implementasi AI (Image Asset Matrix)

Tabel ini adalah **sumber kebenaran tunggal (Single Source of Truth)** untuk seluruh aset gambar dalam portal. AI agent dan developer wajib mematuhi rasio, resolusi, dan peran visual berikut saat melakukan implementasi, rendering komponen, maupun regenerasi aset:

### 5.1. Hero Banners & Suasana Spiritual (Rasio 16:9 Widescreen)

| Nama Berkas | Rasio & Resolusi | Deskripsi Visual & Subjek | Komponen & Halaman | Pedoman Implementasi & AI Prompt Directive |
| :--- | :---: | :--- | :--- | :--- |
| `banner-hero-kaaba-panorama.jpg`<br>*(Alias: `banner-hero-1.jpg`)* | **16:9**<br>1376 × 768 px | **Panorama megah Ka'bah & Masjidil Haram fajar**: Cahaya fajar keemasan menyinari Ka'bah Al-Mukarramah, marmer putih mataf, dan jemaah Indonesia sedang thawaf khusyuk. | `HeroSection.tsx`<br>(Homepage) | **Default Hero Image**. Latar belakang hero dengan dual gradient overlay (emerald + radial). Negative space di area atas untuk teks H1. Hindari CGI look. |
| `banner-hero-keluarga-natural.jpg` | **16:9**<br>1376 × 768 px | **Pasangan/Keluarga Jemaah Indonesia berdoa**: Pria berbusana ihram putih rapi dan wanita berhijab syar'i berdoa dengan tangan terangkat penuh haru berlatar Ka'bah. | Alternatif Hero & Halaman Tentang Kami | Representasi slogan *"Sahabat Umrah Keluarga Anda"*. Cocok untuk landing page berorientasi emosional keluarga dan testimoni. |
| `hero_kaaba_sanctuary.jpg` | **16:9**<br>1376 × 768 px | **Baitullah Sanctuary Atmosphere**: Pelataran Ka'bah dalam suasana damai senja dengan pilar-pilar kubah dan pantulan marmer. | Cadangan Hero / Halaman Haji Furoda | Digunakan jika membutuhkan visual Ka'bah sudut lebih luas tanpa subjek close-up. |
| `nabawi_dawn_pillars.jpg` | **16:9**<br>1376 × 768 px | **Pelataran Masjid Nabawi Madinah saat Fajar**: Payung-payung hidrolik raksasa putih terbuka dengan ornamen emas berpadu marmer Alabaster bersih. | Background Halaman Paket Umroh & Landing Page Kota | Menghadirkan *Madina tone* otentik. Menguatkan visual ziarah Madinah Al-Munawwarah. |
| `banner-hero-2.jpg`<br>*(Legacy)* | **3:1**<br>1600 × 533 px | Banner promosi horizontal fasilitas bintang lima dan charter flight. | Arsip Banner Promosi | Format banner ultra-lebar untuk display iklan eksternal. |

### 5.2. Katalog Paket Umroh & Destinasi Umroh Plus (Rasio 16:9 & 1:1.41 Flyer)

| Nama Berkas | Rasio & Resolusi | Deskripsi Visual & Subjek | Komponen & Halaman | Pedoman Implementasi & AI Prompt Directive |
| :--- | :---: | :--- | :--- | :--- |
| `package_kaaba_thawaf.jpg` | **16:9**<br>1376 × 768 px | **Jemaah Thawaf Mengelilingi Ka'bah**: Dokumentasi jemaah berihram putih berjalan tertib mengitari Ka'bah dalam sudut tinggi sinematik. | `PackageFilterSection.tsx`, `tours.ts` | Kartu flyer paket Umroh Reguler 9 & 12 Hari. Menunjukkan kepadatan ibadah yang tertib dan khusyuk. |
| `package_nabawi_canopy.jpg` | **16:9**<br>1376 × 768 px | **Kanopi Payung & Menara Masjid Nabawi**: Kemegahan payung arsitektural Nabawi dinaungi langit biru cerah Madinah. | `PackageFilterSection.tsx`, `tours.ts` | Kartu flyer paket Umroh Reguler 13 Hari & paket keberangkatan kota luar Jawa. |
| `dest_umroh_plus_thaif.jpg` | **16:9**<br>1376 × 768 px | **Lanskap Pegunungan Ta'if & Kebun Mawar**: Lembah hijau pegunungan Ta'if Saudi dengan cable car teleferik di atas perbukitan sejuk. | `UmrohPlusCatalogClient.tsx`, `/umroh-plus/thaif` | Kartu destinasi Umroh Plus Ta'if. Visual pegunungan sejuk dan sejarah dakwah Rasulullah SAW. |
| `dest_umroh_plus_alula.jpg` | **16:9**<br>1376 × 768 px | **Situs Warisan Dunia UNESCO Hegra di Al-Ula**: Makam batu raksasa berukir monumental di padang pasir keemasan bercahaya sunset. | `UmrohPlusCatalogClient.tsx`, `/umroh-plus/al-ula` | Kartu destinasi Umroh Plus Al-Ula. Nuansa eksklusif wisata sejarah peradaban Nabatean. |
| `dest_umroh_plus_turki.jpg` | **16:9**<br>1376 × 768 px | **Selat Bosphorus & Siluet Hagia Sophia Istanbul**: Panorama senja Istanbul dengan kubah megah masjid bersejarah dan kapal menyeberangi Bosphorus. | `UmrohPlusCatalogClient.tsx`, `/umroh-plus/turki` | Kartu destinasi Umroh Plus Turki. Nuansa kemegahan jejak kekhalifahan Utsmaniyah. |
| `dest_umroh_plus_riyadh.jpg` | **16:9**<br>1376 × 768 px | **Benteng Bersejarah Masmak & Skyline Modern Riyadh**: Perpaduan arsitektur benteng tanah liat historis dan gedung modern ibu kota Arab Saudi. | `UmrohPlusCatalogClient.tsx`, `/umroh-plus/riyadh` | Kartu destinasi Umroh Plus Riyadh. |
| `dest_umroh_plus_jeddah.jpg` | **16:9**<br>1376 × 768 px | **Masjid Terapung & Pantai Corniche Laut Merah Jeddah**: Pesona pesisir kota pelabuhan gerbang masuk Tanah Suci di waktu sore hari. | `UmrohPlusCatalogClient.tsx`, `/umroh-plus/jeddah` | Kartu destinasi Umroh Plus City Tour Jeddah. |
| `brosur-keberangkatan-01.webp` s/d `11.webp` | **1:1.41 (A4)**<br>1241 × 1755 px | **Brosur Resmi Keberangkatan 11 Kota Embarkasi**: Desain poster vertikal berformat brosur cetak resmi Samira Travel memuat maskapai, jadwal, hotel, dan harga paket per kota. | Halaman Programmatic Kota (`/paket-umroh/[city]`) | Menampilkan brosur fisik asli untuk diunduh calon jemaah via tombol "Unduh Brosur PDF/Gambar". |

### 5.3. Bukti Rekor Dunia, Rekor MURI, & Penghargaan (High Social Proof)

| Nama Berkas | Rasio & Resolusi | Deskripsi Visual & Subjek | Komponen & Halaman | Pedoman Implementasi & AI Prompt Directive |
| :--- | :---: | :--- | :--- | :--- |
| `tiga-rekor-muri-landscape.png` | **~3.7:1**<br>1600 × 428 px | **3 Piagam Rekor MURI Berjajar Lanskap**: Foto kompilasi 3 piagam asli MURI (2022: Pandemi, 2023: Talbiyah, 2024: 29.171 Jemaah) berlatar emas gelap elegan. | `SocialProofSection.tsx` (Homepage & Tentang Kami) | **Wajib Full-Width Frameless**. Tidak boleh dipotong kotak kecil. Menampilkan 3 pencapaian bersejarah sekaligus dalam 1 pandangan. |
| `guinness-world-records-halal-dinner-jeddah.png` | **16:9**<br>1600 × 900 px | **Piagam Resmi Guinness World Records**: Sertifikat rekor dunia asli *"Largest Attendance of an Outdoor Halal Dinner Event"* (10.449 jemaah di Asfan, Jeddah). | `SocialProofSection.tsx`, `/tentang-kami` | Ditampilkan dalam rasio 16:9 berdampingan dengan Piala APSI. Objek sertifikat tajam dan teks ref ID `15-782573` dapat dibaca jelas. |
| `penghargaan-apsi-2026-jamaah-terbanyak.png` | **16:9**<br>1600 × 900 px | **Piala & Piagam Anugerah Perjalanan Suci Indonesia (APSI) 2026**: Penghargaan resmi tvOne/VIVA Group untuk Kinerja Operasional Jemaah Terbanyak Nasional. | `SocialProofSection.tsx`, `/tentang-kami` | Ditampilkan serasi dalam rasio 16:9 mendampingi Guinness World Records. |
| `galeri-sertifikat-dokumentasi-1.png` s/d `6.png` | **2:1**<br>1000 × 500 px | **Dokumentasi Lapangan Otentik**: Foto asli manasik akbar di ballroom, pelepasan jemaah di terminal bandara internasional, dan syiar daerah. | Galeri Dokumentasi di Homepage & Testimoni | Menegaskan keaslian operasional biro perjalanan fisik yang nyata dan berkapasitas ribuan jemaah. |

### 5.4. Lencana Nilai Layanan (Core Service Badges — Rasio 1:1 Square)

| Nama Berkas | Rasio & Resolusi | Deskripsi Visual & Subjek | Komponen & Halaman | Pedoman Implementasi & AI Prompt Directive |
| :--- | :---: | :--- | :--- | :--- |
| `badge-berizin-resmi-ppiu-pihk-kemenag.png` | **1:1**<br>140 × 140 px | Lencana stempel emas resmi Kemenag RI bertuliskan izin PPIU & PIHK. | `CertaintyBar.tsx` (Homepage) | Pilar 1: Legalitas Kemenag RI & Akreditasi A. |
| `badge-pasti-jadwalnya-booking-seat-hotel.png` | **1:1**<br>140 × 140 px | Lencana ikon pesawat & kalender jadwal pasti terbang. | `CertaintyBar.tsx` (Homepage) | Pilar 2: Tiket Charter Flight Terkonfirmasi. |
| `badge-pelayanan-terbaik-bintang-lima.png` | **1:1**<br>140 × 140 px | Lencana bintang lima emas kepuasan jemaah dan rekor MURI. | `CertaintyBar.tsx` (Homepage) | Pilar 3: Fasilitas Hotel Bintang 5 Dekat Masjid. |
| `badge-pelayanan-handling-bandara-hotel.png` | **1:1**<br>140 × 140 px | Lencana layanan pendampingan koper, bandara, & tim medis. | `CertaintyBar.tsx` (Homepage) | Pilar 4: Layanan Handling Paripurna. |

### 5.5. Bukti Rekening Bank Resmi & Peringatan Transaksi (Anti-Fraud)

| Nama Berkas | Rasio & Resolusi | Deskripsi Visual & Subjek | Komponen & Halaman | Pedoman Implementasi & AI Prompt Directive |
| :--- | :---: | :--- | :--- | :--- |
| `bank-bsi-syariah-indonesia-rekening-resmi.png` | **~2.17:1**<br>130 × 60 px | Logo resmi Bank Syariah Indonesia (BSI) dengan ornamen hijau-emas. | `FinancingCalculatorIsland.tsx`, Footer | Rekening resmi IDR Samira Travel (`1976076766`). |
| `bank-permata-syariah-rekening-resmi.png` | **~2.17:1**<br>130 × 60 px | Logo resmi Permata Bank Syariah dengan ornamen kristal. | `FinancingCalculatorIsland.tsx`, Footer | Rekening resmi IDR & USD Samira Travel. |
| `bank-mandiri-rekening-resmi.png` | **~2.17:1**<br>130 × 60 px | Logo resmi Bank Mandiri berwarna biru tua & pita emas. | Modal Rekening Resmi, Footer | Rekening resmi operasional perusahaan. |
| `bank-muamalat-rekening-resmi.png` | **~2.17:1**<br>130 × 60 px | Logo resmi Bank Muamalat berwarna ungu khas pionir bank syariah. | Modal Rekening Resmi, Footer | Rekening resmi operasional perusahaan. |
| `warning-waspada-penipuan-rekening-pribadi.png` | **3:4**<br>300 × 400 px | Poster peringatan resmi anti-penipuan: Larangan transfer ke rekening atas nama pribadi perorangan. | Halaman Tentang Kami, Modal Pembayaran | Memberikan edukasi keamanan finansial jemaah dari oknum penipu. |

### 5.6. Identitas Brand & Perlengkapan Jemaah

| Nama Berkas | Rasio & Resolusi | Deskripsi Visual & Subjek | Komponen & Halaman | Pedoman Implementasi & AI Prompt Directive |
| :--- | :---: | :--- | :--- | :--- |
| `logo-samira-travel.png` | **~4.3:1**<br>300 × 70 px | Logo resmi Samira Travel tulisan hijau tua berpadu kaligrafi emas dengan slogan *"Sahabat Umrah Keluarga Anda"*. | `Navbar.tsx`, `Footer.tsx` | Header utama web publik. Wajib menggunakan atribut `priority` dan `loading="eager"`. |
| `perlengkapan_umrah_luxury.jpg`<br>*(Alias: `perlengkapan-umrah-samira-travel.webp`)* | **16:9**<br>1376 × 768 px | **Koper & Perlengkapan Umrah Eksklusif**: Koper fiber hijau zamrud beraksen kuningan emas, kain ihram putih halus, syal batik, dan tas paspor. | Halaman Fasilitas & Rincian Paket | Menunjukkan wujud nyata fasilitas koper kabin/bagasi premium yang diterima jemaah. |

---

## 6. Non-Functional Requirements & Performance Targets

1. **Google PageSpeed & Core Web Vitals**:
   * Performance Score: **> 92 di Mobile**, **> 98 di Desktop**.
   * LCP (Largest Contentful Paint) < 1.4s (terbantu oleh pre-rendering SSG & `next/image` modern webp/avif).
   * CLS (Cumulative Layout Shift) = **0.00** (seluruh gambar wajib memiliki aspek rasio tetap atau `fill` container dengan rasio induk yang terkunci).
   * INP (Interaction to Next Paint) < 100ms.
2. **SEO & Indexing**:
   * 100% halaman memiliki `title`, `description`, `canonical`, dan OpenGraph tags unik (`banner-hero-1.jpg` sebagai default fallback OG card).
   * Dynamic `sitemap.xml` yang mengindeks seluruh 456 rute secara otomatis.
   * Dynamic `robots.txt` yang mengizinkan crawling Googlebot.
3. **Accessibility (WCAG 2.1 AA)**:
   * Kontras teks tinggi (> 7:1 untuk teks utama, > 4.5:1 untuk teks sekunder).
   * Seluruh tombol dan link sentuh memiliki ukuran fisik minimum 44px × 44px pada layar smartphone.
   * Seluruh gambar menyertakan teks alternatif (`alt`) berbahasa Indonesia yang deskriptif dan mencantumkan legalitas/prestasi resmi.

