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

### 4.3. Mobile-First: Web App-Like View Experience (Travel App Navigation Standard)
Di perangkat smartphone (akses > 82% pengguna), portal beroperasi layaknya **aplikasi travel native premium (sekelas Traveloka / Saudia App)** yang taktil, cepat, dan ergonomis:

1. **Fixed Top App Bar (56px) dengan Search Capsule**:
   * Header ramping mengapung (`backdrop-blur-md bg-[#FAF8F5]/90 border-b border-[#E8E3DA]`).
   * Kiri: Logo resmi Samira Travel tajam (tinggi 30px, `priority`).
   * Tengah/Kanan: Kapsul pencarian cepat (*Search Capsule*) bertuliskan *"Cari paket, kota, atau artikel..."* yang memicu `GlobalSearchModal` dengan satu ketukan jari.
   * Kanan: Hotline telepon darurat dan tombol menu drawer.
2. **Category Quick Selector (Horizontal App Pills)**:
   * Tepat di bawah hero/header, terdapat deretan pil kategori yang dapat digeser secara horizontal (*smooth momentum scroll*) dengan ikon SVG:
     `[🕋 Umroh Reguler] [✈️ Umroh Plus] [🏛️ Haji Furoda] [📍 26 Cabang] [💳 Cicilan Syariah]`
   * Pil aktif memiliki highlight emas/hijau dengan pegas halus Framer Motion (`layoutId="activeFilter"`).
3. **Travel App Package Card (Kartu Perjalanan Standar Aplikasi)**:
   * Visual foto 16:9 atau 16:10 tanpa frame kaku.
   * Lencana mengambang di atas foto: Logo Maskapai (`✈️ Lion Air Direct Charter`) + Status Garansi (`● Pasti Berangkat`).
   * **The Walking-Distance Metric (Riset Jarak Fisik ke Masjid)**:
     * Label khusus yang wajib tercantum: `🚶 50m ke Pelataran Ka'bah` & `🚶 100m ke Pintu Utama Nabawi`.
   * Info segmen penerbangan bergaya boarding pass: `SUB ➔ JED (Surabaya - Jeddah Direct)`.
   * Indikator sisa kuota: `⚡ Tersisa 6 Kursi`.
   * **The Zero Hidden Cost Ledger**:
     * Menampilkan harga acuan All-in Quad (`Rp 38.000.000`) dengan penegasan *"Sudah termasuk koper, visa, handling, & asuransi"*, serta rincian opsi Triple & Double.
   * Tombol WhatsApp hijau lebar dengan feedback taktil `:active:scale-[0.98]`.
4. **Mobile Web App Bottom Dock (`MobileAppDock.tsx`)**:
   * Dock navigasi 4-tab yang menempel di bagian bawah layar smartphone dalam jangkauan satu ibu jari (*thumb zone*):
     1. **Beranda** (Ikon Home): Kembali ke hub utama.
     2. **Paket** (Ikon Compass): Akses cepat katalog umroh & haji.
     3. **26 Cabang** (Ikon MapPin): Temukan kantor fisik terdekat di kota jemaah.
     4. **Tanya CS** (Ikon MessageCircle hijau): WhatsApp langsung ke representasi resmi Samira Travel.
   * **Adaptive Contextual Morphing (Instant Booking Bar)**:
     * Pada halaman detail paket (`/paket-umroh/[city]` & `/umroh-plus/[slug]`), saat jemaah menggulir (*scroll*) melewati 380px, dock 4-tab otomatis bermutasi (*smooth spring transition*) menjadi **Sticky Conversion Anchor Bar**:
       - Kiri: Label harga acuan (*"Mulai Rp 35 Jt • Pasti Berangkat"*).
       - Kanan: Tombol WhatsApp lebar (*"Konsultasi Ketersediaan Seat"*).
   * Mendukung penuh `pb-safe` / `env(safe-area-inset-bottom)` agar tidak terpotong garis gesture home iPhone.
5. **Bottom Sheet City Picker dengan Kode Bandara IATA**:
   * Mengetuk *"Pilih Kota Keberangkatan"* memunculkan lembar geser dari bawah (*native bottom sheet*) dengan pegangan (*grab handle*), menampilkan 11 kota embarkasi lengkap dengan kode bandara:
     * `Jakarta (CGK)` • `Surabaya (SUB)` • `Medan (KNO)` • `Makassar (UPG)` • `Palembang (PLM)` • `Padang (PDG)` • `Pontianak (PNK)` • `Banda Aceh (BTJ)` • `Denpasar (DPS)` • `Batam (BTH)` • `Pekanbaru (PKU)`.
6. **In-Article Contextual Lead Engine (400 Artikel)**:
   * Pada setiap artikel edukasi disematkan callout konversi kontekstual di tengah artikel (setelah paragraf 3) untuk mengubah pembaca SEO menjadi prospek WhatsApp.
7. **Anti-Zoom Trap Invariant**:
   * Seluruh elemen input pencarian, dropdown, dan form wajib disetel minimal font **`16px` (`text-base`)** pada breakpoint mobile untuk mencegah browser Safari/Chrome melakukan auto-zoom paksa yang merusak layout.

### 4.4. Anti-Pattern & Legacy UI/UX Rejection Contract (7 Aturan Anti-Trigger UI Lama)
Untuk memastikan tidak ada AI agent atau developer yang terpicu mengulang desain UI/UX lama yang generik atau kaku, aturan penolakan mutlak (*Haram*) berikut wajib dipatuhi:
1. **Haram Box-in-Box / Card-in-Card Syndrome**:
   * Dilarang membungkus komponen dalam kartu abu-abu (`bg-slate-50 border`) di dalam kartu putih (`bg-white border`).
   * Gunakan arsitektur terbuka (*The Open Sanctuary*): pemisah garis rambut 1px (`#E8E3DA`), whitespace lega, dan hierarki tipografi.
2. **Haram Equal Bento Grid AI Slop**:
   * Dilarang menyusun 6 atau 9 kartu persegi identik berjejer yang monoton.
   * Gunakan ritme editorial: kartu hero/unggulan lebih besar dengan visual 16:9 sinematik, didampingi list/split metadata yang ringkas.
3. **Haram Pill & Badge Inflation**:
   * Dilarang menaruh pil badge `rounded-full uppercase tracking-wider` di atas setiap judul secara berulang. Cukup 1 kicker kategori minimalis atau lencana akreditasi resmi.
4. **Haram Gradasi Hijau Neon Murahan**:
   * Dilarang menggunakan warna hijau terang/neon template AI.
   * Wajib menggunakan **The Sacred Palette**: *Madinah Alabaster* (`#FAF8F5`), *Rawdah Deep Forest* (`#084234`), *Madinah Brass* (`#C5A059`), dan *Midnight Rawdah* (`#04261E`).
5. **Haram Frame Artifisial & Polaroid Palsu pada Foto**:
   * Foto tidak boleh diberi border ganda, rotasi miring, atau efek polaroid palsu.
   * Seluruh gambar tampil *clean*, *full-bleed*, atau dalam rasio presisi 16:9 / 1:1.41 (A4) / 1:1 sesuai Matriks Aset Gambar.
6. **Haram Multi-Tombol WhatsApp Bertumpuk (Spam CTA)**:
   * Dilarang menaruh 3–4 tombol WhatsApp dalam satu viewport.
   * Cukup 1 tombol aksi utama kontekstual per section + 1 dock/bar di mobile.
7. **Haram Tabel Horizontal di Layar Mobile**:
   * Dilarang menyajikan tabel yang mengharuskan scroll ke samping di layar HP. Wajib otomatis bermutasi menjadi kartu vertikal *Boarding Pass*.

### 4.5. Matriks Penerapan Sistem UI/UX & Mobile App Dock Lintas Halaman (456 URLs)
Untuk menjamin konsistensi visual dan pengalaman pengguna di seluruh 456 rute, aturan berikut berlaku mutlak:

| Kelompok Halaman (Total Rute) | Top Header (56px) | Hero Section (16:9 Widescreen) | Body Content Architecture | Mobile App Dock Behavior | Footer Otoritas |
|:---|:---:|:---|:---|:---|:---:|
| **Homepage**<br>(1 Halaman — `/`) | Fixed Glassmorphic | Ka'bah Dawn Panorama + Command Strip 11 Kota | Asymmetric Split, Certainty Bar 4 Pilar, Kurasi Paket, Rekor MURI Frameless | 4-Tab Normal Dock (Beranda, Paket, Cabang, CS) | Full Authority + 4 Rekening Bank Resmi |
| **Katalog Paket Umroh**<br>(1 Halaman — `/paket-umroh`) | Fixed Glassmorphic | Banner Payung Nabawi Fajar | Filter Kategori Tab + Kartu Paket 16:9 Grid 1 Kolom Mobile | 4-Tab Normal Dock | Full Authority |
| **11 Programmatic Kota**<br>(11 Rute — `/paket-umroh/[city]`) | Fixed Glassmorphic | Brosur/Pesawat Embarkasi Kota | **Dual-Mode Boarding Pass Cards** + Brosur A4 Unduh + Info Kantor Cabang Lokal | **Contextual Morphing**: Otomatis berubah jadi Sticky Price & WA CTA saat scroll > 380px | Full Authority + Hotline Cabang Terkait |
| **Katalog Umroh Plus**<br>(1 Halaman — `/umroh-plus`) | Fixed Glassmorphic | Panorama Peradaban Islam | Galeri Destinasi Terkurasi dengan Tag Harga Jernih | 4-Tab Normal Dock | Full Authority |
| **5 Detail Umroh Plus**<br>(5 Rute — `/umroh-plus/[slug]`) | Fixed Glassmorphic | Foto Lanskap Destinasi 16:9 (Taif, Al-Ula, Turki, dll) | Itinerary Hari per Hari, Fasilitas Hotel, Keistimewaan Sejarah | **Contextual Morphing**: Sticky Price & WA Booking saat scroll > 380px | Full Authority |
| **Haji Khusus Furoda**<br>(1 Halaman — `/haji-khusus-furoda`) | Fixed Glassmorphic | Midnight Rawdah + Brass Gold Banner | Fasilitas Bintang 5, Tenda AC Maktab, Garansi DP Full Refund, Syarat Visa | **Contextual Morphing**: Sticky "Konsultasi Haji Furoda USD 17k" | Full Authority |
| **Pembiayaan Syariah**<br>(1 Halaman — `/pembiayaan-syariah`) | Fixed Glassmorphic | Ilustrasi Kerjasama AMITRA/BSI | Slider DP & Tenor Interaktif + Rolling Number Counter Angsuran | 4-Tab Normal Dock | Full Authority + Syarat Bank |
| **Direktori 26 Cabang**<br>(1 Halaman — `/kantor-cabang`) | Fixed Glassmorphic | Peta Jaringan Cabang Nasional | Tab 5 Kepulauan + Kartu Cabang Kontak Fisik & Google Maps | Tab '26 Cabang' Aktif di Dock | Full Authority |
| **26 Detail Cabang Lokal**<br>(26 Rute — `/kantor-cabang/[slug]`) | Fixed Glassmorphic | Foto Kantor Cabang / Gedung | Alamat Lengkap, Jam Buka, Peta Rute, Tim Muthawwif Lokal | **Contextual Morphing**: Sticky "WhatsApp Kepala Cabang [Kota]" | Full Authority |
| **Kemitraan DGi**<br>(1 Halaman — `/kemitraan-dgi`) | Fixed Glassmorphic | Dokumentasi Gathering Mitra | Skema Komisi Syiar Non-MLM, Reward Umroh Gratis, Starter Kit | 4-Tab Normal Dock | Full Authority |
| **Tentang Kami & Testimoni**<br>(2 Halaman) | Fixed Glassmorphic | Foto Manasik Akbar / Video Dokumenter | Piagam Guinness & MURI 16:9, Kisah Medis Cuci Darah, Testimoni Artis | 4-Tab Normal Dock | Full Authority |
| **Inbound 400 Artikel**<br>(401 Rute — `/artikel` & `[slug]`) | Fixed Glassmorphic | Minimalist Reading Header (No Big Image) | **Editorial Clean Reading**, In-Article WhatsApp Callout Box, Artikel Terkait | 4-Tab Normal Dock | Full Authority |

### 4.6. Sistem Konversi WhatsApp Kontekstual & Geo-Routing 26 Cabang
Setiap klik menuju WhatsApp menghasilkan pesan pembuka yang ramah, sopan, dan terisi data otomatis (*pre-filled*):
1. **Format Pesan Paket Umroh**:
   `"Assalamu'alaikum CS Samira Travel, saya ingin konsultasi Paket Umroh [Nama Paket] keberangkatan dari [Kota] untuk [Jumlah Pax] orang. Mohon info ketersediaan seat & rincian hotelnya."`
2. **Format Pesan Haji Furoda**:
   `"Assalamu'alaikum, saya ingin konsultasi pendaftaran Haji Furoda 2026 (Tanpa Antre) USD 17.000 garansi DP Full Refund."`
3. **Format Pesan Cabang Daerah**:
   Pesan langsung terarah ke nomor WhatsApp Kepala Cabang Kota terkait (`branches.ts`), dengan fallback ke hotline pusat `085607179735` jika nomor daerah tidak terpasang.

---

## 5. Matriks Katalog Aset Gambar & Pedoman Implementasi AI (Image Asset Matrix)

Tabel ini adalah **sumber kebenaran tunggal (Single Source of Truth)** untuk seluruh aset gambar dalam portal. AI agent dan developer wajib mematuhi rasio, resolusi, dan peran visual berikut saat melakukan implementasi, rendering komponen, maupun regenerasi aset:

### 5.1. Hero Banners & Suasana Spiritual (Rasio 16:9 Widescreen — Format WebP SEO)

| Nama Berkas WebP | Rasio & Resolusi | Kata Kunci Target SEO (Indonesia) | Alt Text Deskriptif Bahasa Indonesia | Peran & Penempatan |
| :--- | :---: | :--- | :--- | :--- |
| `samira-travel-umroh-dan-haji-resmi-kemenag.webp` | **16:9**<br>1376 × 768 px | `samira travel umroh dan haji`, `travel umroh terbaik resmi kemenag` | **Samira Travel Umroh dan Haji Resmi Kemenag RI — Pelataran Ka'bah dan Jemaah Thawaf Fajar** | **Hero Banner Utama Homepage (`HeroSection.tsx`)**. Wajib `priority` & `loading="eager"`. |
| `biro-perjalanan-umroh-keluarga-samira-travel.webp` | **16:9**<br>1376 × 768 px | `travel umroh keluarga terpercaya`, `sahabat umrah keluarga anda` | **Biro Perjalanan Umroh Keluarga Samira Travel — Pasangan Jemaah Indonesia Berdoa Khusyuk di Depan Baitullah** | Alternatif Hero & Halaman Tentang Kami (Emosional Keluarga). |
| `paket-umroh-madinah-ziarah-masjid-nabawi.webp` | **16:9**<br>1376 × 768 px | `paket umroh madinah masjid nabawi`, `ziarah raudhah mekkah madinah` | **Paket Umroh Madinah Ziarah Masjid Nabawi — Pelataran Marmer Alabaster dan Payung Kanopi Indah** | Hero Halaman Paket Umroh & Halaman Kota Embarkasi. |

### 5.2. Katalog Paket Umroh & Destinasi Umroh Plus (Rasio 16:9 & 1:1.41 Flyer — WebP)

| Nama Berkas WebP | Rasio & Resolusi | Kata Kunci Target SEO | Alt Text Deskriptif | Komponen & Halaman |
| :--- | :---: | :--- | :--- | :--- |
| `jadwal-paket-umroh-reguler-lion-air-charter.webp` | **16:9**<br>1376 × 768 px | `jadwal paket umroh reguler lion air charter` | **Jadwal Paket Umroh Reguler Direct Charter Flight Lion Air Samira Travel** | `PackageFilterSection.tsx`, `tours.ts` |
| `hotel-bintang-5-dekat-masjid-makkah-madinah.webp` | **16:9**<br>1376 × 768 px | `hotel bintang 5 dekat masjid makkah madinah` | **Fasilitas Hotel Bintang Lima Dekat Pelataran Masjidil Haram dan Masjid Nabawi** | `PackageFilterSection.tsx`, `tours.ts` |
| `paket-umroh-plus-thaif-wisata-kebun-mawar.webp` | **16:9**<br>1376 × 768 px | `paket umroh plus thaif wisata kebun mawar` | **Paket Umroh Plus Thaif Wisata Kebun Mawar dan Kereta Gantung Telefrik Pegunungan** | `/umroh-plus/thaif` |
| `paket-umroh-plus-al-ula-hegra-unesco.webp` | **16:9**<br>1376 × 768 px | `paket umroh plus al ula hegra unesco` | **Paket Umroh Plus Al-Ula Ziarah Situs Warisan Dunia UNESCO Hegra Madain Saleh** | `/umroh-plus/al-ula` |
| `paket-umroh-plus-turki-istanbul-bosphorus.webp` | **16:9**<br>1376 × 768 px | `paket umroh plus turki istanbul bosphorus` | **Paket Umroh Plus Turki Bosphorus Cruise dan Jejak Peradaban Islam Hagia Sophia** | `/umroh-plus/turki` |
| `paket-umroh-plus-riyadh-benteng-masmak.webp` | **16:9**<br>1376 × 768 px | `paket umroh plus riyadh benteng masmak` | **Paket Umroh Plus Riyadh Sejarah Kerajaan Arab Saudi dan Benteng Bersejarah Masmak** | `/umroh-plus/riyadh` |
| `paket-umroh-plus-jeddah-corniche-laut-merah.webp` | **16:9**<br>1376 × 768 px | `paket umroh plus jeddah corniche laut merah` | **Paket Umroh Plus City Tour Jeddah Corniche dan Masjid Terapung Laut Merah** | `/umroh-plus/jeddah` |
| `brosur-keberangkatan-01.webp` s/d `11.webp` | **1:1.41 (A4)**<br>1241 × 1755 px | `brosur umroh resmi [kota] 2026` | **Brosur Resmi Keberangkatan Umroh Samira Travel dari Kota [Nama Kota]** | Dynamic City Pages (`/paket-umroh/[city]`) |

### 5.3. Bukti Rekor Dunia, Rekor MURI, & Penghargaan (Format WebP SEO)

| Nama Berkas WebP | Rasio & Resolusi | Kata Kunci Target SEO | Alt Text Deskriptif | Komponen & Halaman |
| :--- | :---: | :--- | :--- | :--- |
| `tiga-rekor-muri-jamaah-terbanyak-samira-travel.webp` | **~3.7:1**<br>1600 × 428 px | `tiga rekor muri jamaah terbanyak samira travel` | **Tiga Piagam Rekor MURI Jemaah Terbanyak Nasional PT Samira Ali Wisata** | `SocialProofSection.tsx` (Frameless Lanskap) |
| `rekor-dunia-guinness-world-records-samira-travel.webp` | **16:9**<br>1600 × 900 px | `rekor dunia guinness world records samira travel` | **Sertifikat Resmi Rekor Dunia Guinness World Records Jamuan Makan Halal Terbesar Samira Travel** | `SocialProofSection.tsx`, `/tentang-kami` |
| `penghargaan-apsi-2026-jamaah-terbanyak-tvone.webp` | **16:9**<br>1600 × 900 px | `penghargaan apsi 2026 jamaah terbanyak tvone` | **Piala Penghargaan Anugerah Perjalanan Suci Indonesia APSI 2026 Kategori Jemaah Terbanyak** | `SocialProofSection.tsx`, `/tentang-kami` |
| `dokumentasi-manasik-dan-pelepasan-jamaah-samira-travel-1.webp` s/d `6.webp` | **2:1**<br>1000 × 500 px | `dokumentasi manasik umroh samira travel` | **Dokumentasi Asli Manasik Akbar dan Pelepasan Jemaah Samira Travel** | Galeri Dokumentasi di Homepage & Testimoni |

### 5.4. Lencana Nilai Layanan, Bank & Perlengkapan Jemaah

| Nama Berkas | Rasio | Kata Kunci / Peran | Alt Text Deskriptif | Penempatan |
| :--- | :---: | :--- | :--- | :--- |
| `fasilitas-koper-dan-perlengkapan-umroh-eksekutif.webp` | **16:9** | `perlengkapan umroh eksekutif koper fiber` | **Fasilitas Koper Fiber Zamrud dan Perlengkapan Umroh Eksekutif Samira Travel** | Rincian Paket & Fasilitas |
| `peringatan-keamanan-transaksi-rekening-resmi-samira-travel.webp` | **3:4** | `rekening resmi pt samira ali wisata` | **Peringatan Resmi Anti-Penipuan Rekening Perorangan PT Samira Ali Wisata** | Footer & Modal Rekening |
| `badge-berizin-resmi-ppiu-pihk-kemenag.png` | **1:1** | Izin PPIU & PIHK | Izin Resmi Kemenag PPIU No. 137/2020 & PIHK 2022 | `CertaintyBar.tsx` |
| `badge-pasti-jadwalnya-booking-seat-hotel.png` | **1:1** | Pasti Berangkat | Jaminan Tiket Charter Flight Pasti Berangkat | `CertaintyBar.tsx` |
| `badge-pelayanan-terbaik-bintang-lima.png` | **1:1** | Layanan Bintang 5 | Hotel Bintang 5 Dekat Pelataran Masjid | `CertaintyBar.tsx` |
| `badge-pelayanan-handling-bandara-hotel.png` | **1:1** | Handling Bandara | Layanan Handling Bandara dan Bimbingan Ibadah Paripurna | `CertaintyBar.tsx` |
| `bank-bsi-syariah-indonesia-rekening-resmi.png` | **~2:1** | Rekening Resmi BSI | Rekening Resmi BSI PT Samira Ali Wisata | Footer & Island Cicilan |
| `bank-permata-syariah-rekening-resmi.png` | **~2:1** | Rekening Permata Syariah | Rekening Resmi Permata Bank Syariah | Footer & Island Cicilan |
| `bank-mandiri-rekening-resmi.png` | **~2:1** | Rekening Mandiri | Rekening Resmi Bank Mandiri | Footer & Modal Bank |
| `bank-muamalat-rekening-resmi.png` | **~2:1** | Rekening Muamalat | Rekening Resmi Bank Muamalat | Footer & Modal Bank |
| `logo-samira-travel.png` | **~4.3:1** | Brand Authority | Logo Resmi Samira Travel Sahabat Umrah Keluarga Anda | Header (`Navbar.tsx`) & Footer |

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

