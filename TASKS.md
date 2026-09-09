# TASKS.md — Master Development Roadmap (Clean-Slate Rebuild Queue)
**Project**: Samira Travel Umroh & Haji Public Portal  
**Target Domain**: `https://samiratravelumrohhaji.com`  
**Tech Stack**: Next.js 15 (App Router, React Server Components), TypeScript, Tailwind CSS 4, Lucide React, Framer Motion  
**Total Target Static Routes**: **456 Indexed URLs** (100% SSG via `generateStaticParams`)  
**Dokumen Acuan Tunggal**:
- [PRD.md](file:///Users/ongki/Projects/samiratravelumroh/PRD.md) — *Product Requirements Document & 7 Aturan Anti-Trigger UI Lama*
- [DESIGN.md](file:///Users/ongki/Projects/samiratravelumroh/DESIGN.md) — *The Modern Madinah Sanctuary Design System & Sacred Palette*
- [ARCHITECTURE.md](file:///Users/ongki/Projects/samiratravelumroh/ARCHITECTURE.md) — *System Architecture, Page-by-Page Map & DAL Contract*
**Status**: Ready for Phased Rebuild (Clean-Slate Initialized)

---

## Development Kit Control Plane (Routing & Anti-Legacy Gate)

Sesuai spesifikasi `development-kit`, seluruh proses pembangunan wajib melalui jalur dan gerbang verifikasi berikut:
1. **Routing Lane**: `prd-taskbreaker` menggunakan sumber kebenaran tunggal di root repository (`PRD.md`, `DESIGN.md`, `ARCHITECTURE.md`, `TASKS.md`). Dilarang membuat dokumen tandingan.
2. **Experience Before Code Gate**:
   - **The Sacred Palette (Madina Tone)**: Madinah Alabaster (`#FAF8F5`), Rawdah Deep Forest (`#084234`), Madinah Brass (`#C5A059`), Midnight Rawdah (`#04261E`), Hairline Border (`#E8E3DA`).
   - **The Open Sanctuary Layout**: Whitespace lega, asimetris split, zero card-in-card, zero equal bento boxes.
   - **Elderly-Friendly Ergonomics**: Tipografi `Plus Jakarta Sans` dengan kontras tinggi (> 7:1), bahasa Indonesia lugas tanpa jargon teknis, dan 1-klik WhatsApp langsung berpesan terformat rapi.
   - **Mobile Web App Dock**: 56px top header + bottom navigation dock 4-tab (Beranda, Paket, 26 Cabang, Tanya CS) yang bermutasi otomatis menjadi sticky price CTA saat scrolling di halaman paket.
   - **Anti-Zoom Trap Invariant**: Seluruh elemen form/input wajib disetel font-size `>= 16px` di mobile.
3. **Execution Gate**: Eksekusi dilakukan per fase berurutan. Setiap fase wajib lulus validasi TypeScript (`tsc --noEmit`) sebelum melangkah ke fase berikutnya.

---

## Ringkasan Progres & Milestone Utama

- [x] **Milestone 1**: Project Scaffolding, Modern Tooling & Sacred Design Tokens (Phase 1)
- [x] **Milestone 2**: Decoupled Data Access Layer (DAL) & TypeScript Models (Phase 2)
- [x] **Milestone 3**: Global Shell — Modern Header, Mega-Menu, Cmd+K Global Search & Mobile App Dock (Phase 3)
- [x] **Milestone 4**: Master Homepage ("The Open Sanctuary") & Interactive Client Islands (Phase 4)
- [x] **Milestone 5**: Programmatic City Landing Pages (11 Embarkasi) & Dual-Mode Flight Tables (Phase 5)
- [x] **Milestone 6**: Umroh Plus Suite (5 Destinasi) & Haji Khusus Furoda USD 17.000 (Phase 6)
- [x] **Milestone 7**: Direktori 26 Kantor Cabang Fisik & Peluang Kemitraan DGi (Phase 7)
- [x] **Milestone 8**: Kredensial Otoritas, Rekor MURI, Guinness World Records & Testimoni Medis (Phase 8)
- [x] **Milestone 9**: Inbound Content Silo (400 Artikel Terindeks + In-Article WhatsApp Callout) (Phase 9)
- [x] **Milestone 10**: SEO Engine Otomatis, Dynamic Sitemap (456 URLs) & JSON-LD (Phase 10)
- [x] **Milestone 11**: Audit Aksesibilitas, Mobile Anti-Zoom, Core Web Vitals & Production Build (Phase 11)

---

## Rincian Tugas Eksekusi Lengkap (A-to-Z Checklist)

### Phase 1: Environment, Tooling & Project Scaffolding
- [x] **Task 1.1**: Inisialisasi konfigurasi proyek: `package.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, dan `.gitignore`.
- [x] **Task 1.2**: Instalasi dependensi esensial via `pnpm`:
  - `next@15.x`, `react@19.x`, `react-dom@19.x`
  - `tailwindcss@^4.0.0`, `@tailwindcss/postcss`
  - `lucide-react` (ikon SVG konsisten)
  - `clsx` & `tailwind-merge` (utility styling)
  - `framer-motion` (spring tab animation & rolling counter)
- [x] **Task 1.3**: Konfigurasi Tailwind CSS 4 & CSS Variables resmi *The Sacred Palette (Madina Tone)* di `src/app/globals.css`:
  - Canvas: `#FAF8F5` (Madinah Alabaster hangat, anti-silau)
  - Surface: `#FFFFFF` / Subtle: `#F3EFEA` (Desert Sand)
  - Brand Primary: `#084234` (Rawdah Deep Forest) / Deep: `#04261E` (Midnight Rawdah)
  - Gold Accent: `#C5A059` (Madinah Brass) / Light: `#F7EEDD` (Champagne Sheen)
  - Border Hairline: `#E8E3DA` (Garis pemisah 1px pengganti shadow tebal)
  - Ink Primary: `#0F172A` (Slate Obsidian) / Muted: `#475569` (Muted Stone)
  - Conversion: `#15803D` (Deep Emerald WhatsApp Action)
- [x] **Task 1.4**: Konfigurasi font modern di `src/app/layout.tsx`:
  - Primary UI & Body: `Plus Jakarta Sans` (open aperture, ramah lansia, tabular numbers).
  - Editorial Accents: `Playfair Display` (sparingly untuk headline pusaka H1 & babak cerita).
- [x] **Task 1.5**: Konfigurasi Mobile Viewport & Aturan Anti-Zoom di `src/app/layout.tsx`:
  - `<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />`
  - Penguncian CSS global agar seluruh elemen input, select, textarea memiliki `font-size >= 16px` di layar mobile.
  - Safe-area support untuk notch & home gesture bar iPhone (`pb-safe`, `pt-safe`).

### Phase 2: Decoupled Data Access Layer (DAL) & TypeScript Models
- [x] **Task 2.1**: Definisikan tipe data type-safe di `src/types/`:
  - `TourPackage`: model paket umroh reguler, plus, dan haji furoda.
  - `Article`: model 400 artikel edukasi inbound SEO.
  - `BranchOffice`: model 26 kantor cabang fisik lengkap dengan alamat dan nomor hotline lokal.
  - `SiteConfig`: profil hukum PT Samira Ali Wisata, nomor rekening resmi anti-penipuan, dan kontak pusat.
- [x] **Task 2.2**: Bangun data store lokal di `src/data/tours.ts`:
  - 11 paket reguler kota embarkasi (Jakarta, Surabaya, Medan, Makassar, Palembang, Padang, Pontianak, Aceh, Denpasar, Batam, Pekanbaru).
  - 5 paket Umroh Plus (Thaif, Al-Ula, Turki, Riyadh, Jeddah).
  - 1 paket Haji Khusus Furoda USD 17.000.
- [x] **Task 2.3**: Bangun data store lokal di `src/data/branches.ts`:
  - 26 kantor cabang resmi se-Indonesia dikelompokkan ke dalam 5 zona kepulauan.
- [x] **Task 2.4**: Bangun data store lokal di `src/data/site-config.ts`:
  - Izin Kemenag PPIU No. 137/2020 & PIHK 2022, 4 rekening bank resmi (BSI, Mandiri, Muamalat, Permata Syariah), hotline `085607179735`.
- [x] **Task 2.5**: Bangun data store lokal di `src/data/articles.json`:
  - Katalog 400 artikel edukasi terstruktur dengan slug SEO-friendly.
- [x] **Task 2.6**: Bangun Data Access Layer (DAL) abstraction di `src/lib/data-service.ts`:
  - `getAllTours()`, `getTourBySlug()`, `getTourByCity()`, `getFeaturedTours()`
  - `getAllArticles()`, `getArticleBySlug()`, `getArticlesByCategory()`, `getRecentArticles()`
  - `getAllBranches()`, `getBranchBySlug()`, `getBranchesByRegion()`
- [x] **Task 2.7**: Bangun utility helper di `src/lib/`:
  - `src/lib/whatsapp.ts`: Generator link WhatsApp berpesan kontekstual otomatis.
  - `src/lib/formatters.ts`: Formatter Rupiah, USD, dan tanggal baku Indonesia.
  - `src/lib/seo.ts`: Helper generator Schema.org JSON-LD.

### Phase 3: Global Shell — Modern Header, Mega-Menu, Cmd+K Search & Mobile App Dock
- [x] **Task 3.1**: Bangun komponen `src/components/layout/Navbar.tsx`:
  - Desktop: Header 64px glassmorphic (`backdrop-blur-md bg-[#FAF8F5]/90 border-b border-[#E8E3DA]`), logo tajam `priority`, mega-dropdown 11 kota, `Cmd+K` trigger, dan WhatsApp CTA.
  - Mobile: Fixed Top App Bar 56px dengan `SearchCapsule` pemicu search overlay dan tombol drawer menu.
- [x] **Task 3.2**: Bangun komponen `src/components/layout/GlobalSearchModal.tsx`:
  - Modal dialog interaktif dibuka via `Cmd+K` (desktop) atau tap search capsule (mobile).
  - Pencarian instan untuk paket umroh, 11 kota, haji furoda, 26 cabang, dan topik artikel.
- [x] **Task 3.3**: Bangun komponen `src/components/layout/CategoryQuickSelector.tsx`:
  - Deretan pil kategori horizontal momentum scroll standar travel app (`Umroh Reguler`, `Umroh Plus`, `Haji Furoda`, `26 Cabang`, `Cicilan`) dengan animasi pegas `layoutId="activeFilter"`.
- [x] **Task 3.4**: Bangun komponen `src/components/layout/BottomSheetCityPicker.tsx`:
  - Lembar dialog geser dari bawah (*bottom sheet*) dengan grab-handle memuat 11 kota embarkasi + kode bandara IATA (CGK, SUB, KNO, UPG, dll).
- [x] **Task 3.5**: Bangun komponen `src/components/layout/MobileAppDock.tsx`:
  - Dock navigasi bawah 4-tab (Beranda, Paket, 26 Cabang, Tanya CS) yang ramah satu jempol (*thumb zone*).
  - Indikator tab aktif yang halus.
  - **Adaptive Contextual Morphing**: Otomatis bertransformasi menjadi Sticky Price & WhatsApp Bar saat pengguna menggulir melewati 380px pada halaman paket.
  - Dukungan penuh `pb-safe` iPhone.
- [x] **Task 3.6**: Bangun komponen `src/components/layout/Footer.tsx`:
  - Layout editorial bernuansa Midnight Rawdah (`#04261E`).
  - Kredensial izin PPIU & PIHK Kemenag RI, pemegang Rekor Guinness & MURI.
  - Peringatan anti-penipuan rekening pribadi dan daftar 4 rekening resmi perusahaan.
  - Peta link navigasi lengkap ke 11 kota embarkasi dan kantor cabang.

### Phase 4: Master Homepage ("The Open Sanctuary") & Interactive Client Islands
- [x] **Task 4.1**: Bangun `src/components/home/HeroSection.tsx`:
  - Layout asimetris split editorial dengan negative space lega.
  - Latar belakang foto fajar Ka'bah resolusi tinggi 16:9 (`samira-travel-umroh-dan-haji-resmi-kemenag.webp`) dengan gradient overlay halus.
  - Headline H1 emosional dalam `Playfair Display` berpadu subteks tiket charter Lion Air / Saudia.
  - 2 tombol aksi tegas: *"Konsultasi Ketersediaan Seat"* & *"Unduh Brosur Resmi"*.
  - Strip pencarian cepat terintegrasi (*Command Strip*) untuk filter kota dan jadwal.
- [x] **Task 4.2**: Bangun `src/components/home/CertaintyBar.tsx`:
  - 4 pilar kepastian arsitektural bergaris pemisah rambut 1px (`#E8E3DA`) tanpa box-in-card:
    1. Izin Resmi Kemenag PPIU & PIHK (Akreditasi A)
    2. Tiket Charter Flight (Pasti Berangkat)
    3. Rekor Guinness World Records & 3 Rekor MURI
    4. Cicilan Syariah AMITRA / BSI Tanpa Jaminan.
- [x] **Task 4.3**: Bangun `src/components/home/PackageFilterSection.tsx` (Client Island):
  - Kapsul filter kategori paket dengan animasi pegas halus `layoutId="activeFilter"`.
  - Showcase kartu paket standar travel app:
    - Foto 16:9 tajam frameless dengan badge maskapai charter (`✈️ Lion Air Direct`) & status (`● Pasti Berangkat`).
    - **Walking-Distance Metric**: `🚶 50m ke Pelataran Ka'bah` & `🚶 100m ke Pintu Utama Nabawi`.
    - Segmen penerbangan boarding pass (`SUB ➔ JED`), durasi hari, dan sisa seat (`⚡ Sisa 6 Kursi`).
    - **Zero Hidden Cost Ledger**: Harga All-in Quad tertera jelas tanpa biaya tambahan tersembunyi + rincian varian Triple/Double.
    - Tombol WhatsApp kontekstual dengan feedback sentuh taktil `:active:scale-[0.98]`.
- [x] **Task 4.4**: Bangun `src/components/home/SocialProofSection.tsx`:
  - Piagam 3 Rekor MURI frameless membentang luas dalam format foto lanskap asli.
  - Piagam Guinness World Records dan Piala APSI 2026 berdampingan dalam rasio presisi 16:9 yang identik.
  - Testimoni jemaah gaya majalah editorial (Citra Kirana, Rezky Adhitya, Ungu Band, jemaah cuci darah).
- [x] **Task 4.5**: Bangun `src/components/home/CompetitiveAdvantageSection.tsx`:
  - 4 pilar keunggulan: Skala Charter Flight, 26 Cabang Fisik, Teknologi Audio Receiver (APS), Kesiapan Layanan Medis Cuci Darah.
- [x] **Task 4.6**: Bangun `src/components/home/FinancingCalculatorIsland.tsx` (Client Island):
  - Slider interaktif DP dan pilihan tenor cicilan syariah dengan kalkulasi instan.
- [x] **Task 4.7**: Bangun `src/components/home/BranchQuickSelector.tsx` & `src/components/home/RecentArticlesSection.tsx`.

### Phase 5: Programmatic City Landing Pages (11 Embarkasi) & Dual-Mode Tables
- [x] **Task 5.1**: Bangun halaman induk katalog `/paket-umroh` (`src/app/paket-umroh/page.tsx`).
- [x] **Task 5.2**: Bangun dynamic route `src/app/paket-umroh/[city]/page.tsx` dengan `generateStaticParams()` untuk 11 kota:
  - Jakarta, Surabaya, Medan, Makassar, Palembang, Padang, Pontianak, Aceh, Denpasar, Batam, Pekanbaru.
- [x] **Task 5.3**: Bangun komponen `DualModeTable.tsx`:
  - Desktop: Tabel jadwal penerbangan eksekutif dengan hairline borders dan angka monospaced tabular.
  - Mobile: Otomatis bermutasi menjadi *Boarding Pass Ticket Cards* vertikal bebas jebakan scroll horizontal.
- [x] **Task 5.4**: Integrasikan brosur fisik A4 (`brosur-keberangkatan-[xx].webp`) dengan tombol unduh.
- [x] **Task 5.5**: Sematkan Schema.org `TouristTrip`, `Product`, dan `LocalBusiness`.

### Phase 6: Umroh Plus Suite (5 Destinasi) & Haji Khusus Furoda
- [x] **Task 6.1**: Bangun halaman katalog `/umroh-plus` (`src/app/umroh-plus/page.tsx`).
- [x] **Task 6.2**: Bangun dynamic route `src/app/umroh-plus/[slug]/page.tsx` untuk 5 rute:
  - `/umroh-plus/thaif`, `/umroh-plus/al-ula`, `/umroh-plus/turki`, `/umroh-plus/riyadh`, `/umroh-plus/jeddah`.
  - Dilengkapi foto pemandangan 16:9, rincian objek wisata sejarah, dan tombol booking seat.
- [x] **Task 6.3**: Bangun landing page high-ticket `/haji-khusus-furoda` (`src/app/haji-khusus-furoda/page.tsx`):
  - Paket USD 17.000, 20 Hari, kuota langsung berangkat tanpa antre.
  - Klausul garansi keamanan: DP USD 5.000 jaminan **100% Full Refund utuh tanpa potongan** jika visa tidak terbit.
  - Fasilitas tenda maktab ber-AC, hotel bintang 5 pelataran masjid, dan bus VIP.

### Phase 7: Direktori 26 Kantor Cabang Fisik & Peluang Kemitraan DGi
- [x] **Task 7.1**: Bangun halaman direktori `/kantor-cabang` (`src/app/kantor-cabang/page.tsx`) dengan filter 5 kepulauan.
- [x] **Task 7.2**: Bangun dynamic route `src/app/kantor-cabang/[slug]/page.tsx` untuk 26 kantor cabang resmi:
  - Alamat fisik lengkap, sematan Google Maps, jam operasional, dan tombol WhatsApp langsung ke nomor cabang.
- [x] **Task 7.3**: Bangun landing page `/kemitraan-dgi` (`src/app/kemitraan-dgi/page.tsx`):
  - Program Syiar Baitullah non-MLM, komisi Rp 1.5–4 Jt/pax, reward umroh gratis, dan sertifikasi Tour Leader BNSP.

### Phase 8: Kredensial Otoritas, Rekor Dunia & Testimoni Medis
- [x] **Task 8.1**: Bangun halaman `/tentang-kami` (`src/app/tentang-kami/page.tsx`):
  - Sejarah perusahaan, profil founder, legalitas SK Kemenag, rekor dunia Guinness, 3 rekor MURI, dan 4 rekening resmi.
- [x] **Task 8.2**: Bangun halaman `/testimoni` (`src/app/testimoni/page.tsx`):
  - Ulasan jemaah, dokumentasi artis, dan studi kasus pendampingan jemaah cuci darah & lansia.

### Phase 9: Inbound Content Silo (400 Artikel Terindeks)
- [x] **Task 9.1**: Bangun direktori artikel `/artikel` (`src/app/artikel/page.tsx`) dengan pencarian instan dan filter kategori.
- [x] **Task 9.2**: Bangun dynamic route `src/app/artikel/[slug]/page.tsx` dengan `generateStaticParams()` yang meng-generate **400 artikel secara statis**:
  - Layout baca editorial yang bersih, nyaman, dan bebas iklan.
  - In-Article WhatsApp Callout Box kontekstual di tengah artikel.
  - Rekomendasi artikel terkait dan Schema.org `Article`.

### Phase 10: SEO Engine Otomatis, Dynamic Sitemap (456 URLs) & JSON-LD
- [x] **Task 10.1**: Implementasi `generateMetadata()` pada setiap rute statis dan dinamis dengan OpenGraph cards.
- [x] **Task 10.2**: Bangun `src/app/sitemap.ts` dinamis yang mengindeks **456 URL** secara otomatis.
- [x] **Task 10.3**: Bangun `src/app/robots.ts` ramah crawler mesin pencari.
- [x] **Task 10.4**: Validasi seluruh struktur Schema.org JSON-LD.

### Phase 11: Audit Aksesibilitas, Mobile Anti-Zoom & Production Build
- [x] **Task 11.1**: Audit bebas auto-zoom (seluruh input mobile `>= 16px`).
- [x] **Task 11.2**: Audit touch targets minimal 44px × 44px pada layar sentuh.
- [x] **Task 11.3**: Uji coba end-to-end pesan pembuka WhatsApp pada seluruh link konversi.
- [x] **Task 11.4**: Uji coba kompilasi TypeScript (`npx tsc --noEmit`) = 0 error.
- [x] **Task 11.5**: Uji coba kompilasi produksi (`npm run build`) = 456 rute SSG sukses tanpa error.
- [x] **Task 11.6**: Audit Google Lighthouse & Core Web Vitals (Target: Mobile > 92, Desktop > 98).
