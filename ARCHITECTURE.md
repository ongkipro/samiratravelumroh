# ARCHITECTURE.md — System & Page-by-Page Development Map
**Project**: Samira Travel Umroh & Haji Public Portal  
**Target Domain**: `https://samiratravelumrohhaji.com`  
**Framework**: Next.js 15 (App Router, React Server Components, TypeScript, Tailwind CSS)  
**Status**: Canonical Technical Architecture & Future-Proofing Blueprint  

---

## 1. High-Level System Architecture

```text
                                  [ INTERNET / USER ]
                                           │
                                           ▼
                    [ CLOUDFLARE / VERCEL EDGE CDN ]
                       • Full Static Edge Cache (TTFB < 50ms)
                       • Automated SSL, Brotli Compression, HTTP/3
                                           │
                                           ▼
                    [ NEXT.JS 15 APP ROUTER (SSG) ]
     ┌─────────────────────────────────────┼─────────────────────────────────────┐
     ▼                                     ▼                                     ▼
[ React Server Components ]      [ Client Islands ("use client") ]     [ Route Handlers / SEO ]
• 100% Pre-rendered HTML         • Interactive Flight Deck             • dynamic sitemap.xml
• 400 Articles Reader            • Financing Calculator Slider         • dynamic robots.txt
• City Landing Pages             • Mobile App Dock & Global Search Modal        • JSON-LD Injections
• Zero Client JS Overhead        • Floating WhatsApp Radar Pulse       • Metadata API
     └─────────────────────────────────────┬─────────────────────────────────────┘
                                           │
                                           ▼
                       [ DATA ACCESS LAYER (DAL) ]
                            src/lib/data-service.ts
     ┌─────────────────────────────────────┴─────────────────────────────────────┐
     ▼                                                                           ▼
[ FASE 1: LOCAL STRUCTURED DATA ]                           [ FASE 2: FUTURE CMS ADMIN ]
• src/data/tours.ts (11 City + Plus + Haji)                 • Database (Postgres / Supabase / Drizzle)
• src/data/articles.json (400 Articles)                     • Headless CMS (Payload / Strapi / Custom Admin)
• src/data/branches.ts (26 Physical Branches)               • Webhook WhatsApp Business API
• src/data/site-config.ts (Kemenag, Banks)                  (Frontend components remain 100% unchanged!)
```

---

## 2. Peta Development Halaman per Halaman (Page-by-Page Map)

Matriks berikut merekam seluruh rute, fungsi data, strategi rendering, target SEO, dan pesan konversi WhatsApp untuk memandu pembangunan saat ini serta memudahkan pengembangan CMS di masa depan:

| No | Rute URL & File Path | Jenis Halaman & Render | Target Kata Kunci SEO | Data Access Layer (DAL) | Schema.org JSON-LD | Template Pesan WhatsApp Otomatis |
|:---:|:---|:---|:---|:---|:---|:---|
| **01** | `/`<br>`src/app/page.tsx` | **Homepage / Master Hub**<br>SSG (RSC + Islands) | *travel umroh terbaik resmi kemenag, samira travel umroh haji, biaya umroh 2026* | `getFeaturedTours()`, `getAccreditations()`, `getRecentArticles(4)` | `TravelAgency`, `WebSite`, `Organization` | *"Halo Samira Travel, saya ingin konsultasi paket umroh & haji resmi Kemenag untuk keluarga."* |
| **02** | `/paket-umroh`<br>`src/app/paket-umroh/page.tsx` | **Katalog Master Umroh**<br>SSG (RSC + Filter Island) | *paket umroh 2026, harga umroh lion air, jadwal umroh pasti berangkat* | `getAllRegularTours()`, `getCitiesList()` | `CollectionPage`, `ItemList`, `TouristTrip` | *"Halo Samira Travel, saya ingin info katalog jadwal paket umroh reguler terbaru 2026."* |
| **03** | `/paket-umroh/[city]`<br>`src/app/paket-umroh/[city]/page.tsx` | **11 Programmatic City Pages**<br>SSG via `generateStaticParams` | *paket umroh [kota], biaya umroh dari [kota] 2026, travel umroh terpercaya [kota]* | `getTourByCity(city)`, `getBranchByCity(city)` | `TouristTrip`, `Product`, `LocalBusiness`, `FAQPage` | *"Halo CS Samira Travel, saya ingin tanya ketersediaan seat Paket Umroh dari [Kota] durasi [Hari] kamar Quad."* |
| **04** | `/umroh-plus`<br>`src/app/umroh-plus/page.tsx` | **Katalog Umroh Plus**<br>SSG (RSC) | *paket umroh plus 2026, umroh plus wisata peradaban islam* | `getAllPlusTours()` | `CollectionPage`, `TouristTrip` | *"Assalamu'alaikum, saya ingin info program Paket Umroh Plus Samira Travel."* |
| **05** | `/umroh-plus/[slug]`<br>`src/app/umroh-plus/[slug]/page.tsx` | **5 Detail Umroh Plus**<br>SSG (`thaif`, `al-ula`, `turki`, `riyadh`, `jeddah`) | *umroh plus thaif 2026, umroh plus al ula hegra, umroh plus turki istanbul* | `getPlusTourBySlug(slug)` | `TouristTrip`, `Product`, `BreadcrumbList` | *"Assalamu'alaikum CS Samira, saya tertarik dengan Paket Umroh Plus [Destinasi]. Mohon info tanggal & brosur lengkapnya."* |
| **06** | `/haji-khusus-furoda`<br>`src/app/haji-khusus-furoda/page.tsx` | **Haji Furoda Landing Page**<br>SSG (High-Ticket Focus) | *haji furoda 2026 tanpa antri, biaya haji furoda resmi kemenag, haji mujamalah visa resmi* | `getHajiFurodaData()` | `Product`, `Offer`, `FAQPage`, `BreadcrumbList` | *"Assalamu'alaikum, saya ingin konsultasi pendaftaran Haji Furoda 20 Hari (Tanpa Antri) USD 17.000 garansi DP Full Refund."* |
| **07** | `/pembiayaan-syariah`<br>`src/app/pembiayaan-syariah/page.tsx` | **Kalkulator Cicilan Syariah**<br>SSG (Interactive Calculator) | *umroh dulu bayar belakangan, cicilan umroh amitra bsi, kredit umroh syariah tanpa jaminan* | `getFinancingPartners()`, `getSimulationRates()` | `FinancialProduct`, `FAQPage`, `BreadcrumbList` | *"Halo Samira Travel, saya ingin konsultasi simulasi pembiayaan syariah via AMITRA/BSI: DP [DP] tenor [Tenor] bulan."* |
| **08** | `/kantor-cabang`<br>`src/app/kantor-cabang/page.tsx` | **Direktori 26 Cabang**<br>SSG (RSC + Region Filter) | *kantor cabang samira travel, agen samira travel terdekat, alamat travel umroh resmi* | `getAllBranches()`, `getBranchesByRegion()` | `DirectoryPage`, `LocalBusiness` | *"Halo Samira Travel, saya ingin berkonsultasi dengan kantor cabang resmi terdekat di wilayah saya."* |
| **09** | `/kantor-cabang/[slug]`<br>`src/app/kantor-cabang/[slug]/page.tsx` | **26 Detail Cabang Lokal**<br>SSG via `generateStaticParams` | *samira travel cabang [kota], alamat samira travel [kota], no telp kantor umroh [kota]* | `getBranchBySlug(slug)` | `TravelAgency`, `LocalBusiness`, `PostalAddress` | Langsung diarahkan ke nomor WhatsApp Kepala Cabang Kota terkait dengan pre-filled nama kota. |
| **10** | `/kemitraan-dgi`<br>`src/app/kemitraan-dgi/page.tsx` | **Peluang Kemitraan DGi**<br>SSG (B2B Recruitment) | *peluang usaha travel umroh, agen travel umroh non mlm, komisi syiar baitullah dgi* | `getPartnershipTiers()`, `getStarterKitDetails()` | `Opportunity`, `FAQPage`, `BreadcrumbList` | *"Assalamu'alaikum, saya ingin mendaftar kemitraan agen travel umroh DGi Samira Travel (Pejuang Baitullah)."* |
| **11** | `/tentang-kami`<br>`src/app/tentang-kami/page.tsx` | **Legalitas & Rekor Dunia**<br>SSG (Trust Pillar) | *legalitas pt samira ali wisata, rekor muri samira travel, guinness world records samira travel* | `getCompanyProfile()`, `getAwardsList()`, `getBankAccounts()` | `AboutPage`, `Organization` | *"Halo Samira Travel, saya ingin konfirmasi nomor rekening resmi PT Samira Ali Wisata dan legalitas Kemenag."* |
| **12** | `/testimoni`<br>`src/app/testimoni/page.tsx` | **Testimoni & Reputasi**<br>SSG (Social Proof) | *testimoni jemaah samira travel, umroh artis citra kirana rezky adhitya, umroh pasien cuci darah* | `getTestimonials()`, `getCelebrityStories()`, `getMedicalCaseStudies()` | `Review`, `AggregateRating`, `VideoObject` | *"Halo Samira, saya membaca kisah jemaah cuci darah / lansia, ingin konsultasi pendampingan serupa untuk keluarga saya."* |
| **13** | `/artikel`<br>`src/app/artikel/page.tsx` | **Inbound Content Hub**<br>SSG (Search & Pagination) | *tips umroh, panduan haji kemenag, fikih manasik umroh lengkap, berita mekkah madinah* | `getArticlesPaginated(page, limit, category)` | `Blog`, `CollectionPage` | *"Halo Samira Travel, saya membaca artikel panduan umroh di website, mau konsultasi paket yang cocok."* |
| **14** | `/artikel/[slug]`<br>`src/app/artikel/[slug]/page.tsx` | **400 Halaman Baca Artikel**<br>SSG via `generateStaticParams` | Long-tail keyword spesifik per artikel (cth: *aturan masuk raudhah 2026, miqat bir ali*) | `getArticleBySlug(slug)`, `getRelatedArticles(slug)` | `Article`, `BreadcrumbList` | *"Halo CS Samira, saya sedang membaca artikel [Judul Artikel], mohon info paket keberangkatan terkait."* |

---

## 3. Direktori 11 Kota Programmatic Embarkasi

Seluruh 11 rute kota berikut di-generate statis secara otomatis oleh `src/app/paket-umroh/[city]/page.tsx`:
1. `/paket-umroh/jakarta` — 9 Hari Safara Quad Rp 36.000.000 (Lion Air Direct)
2. `/paket-umroh/surabaya` — 12 Hari Safara Quad Rp 38.000.000 (Lion Air Direct)
3. `/paket-umroh/medan` — 12 Hari Safara Quad Rp 36.000.000 (Lion Air Direct)
4. `/paket-umroh/makassar` — 12 Hari Safara Quad Rp 35.000.000 (Lion Air Direct)
5. `/paket-umroh/palembang` — 9 Hari Safara Quad Rp 38.000.000 (Lion Air Transit/Direct)
6. `/paket-umroh/padang` — 13 Hari Safara Quad Rp 36.000.000 (Lion Air Direct)
7. `/paket-umroh/pontianak` — 13 Hari Safara Quad Rp 39.000.000 (Lion Air)
8. `/paket-umroh/aceh` — 13 Hari Safara Quad Rp 35.000.000 (Lion Air via KUL)
9. `/paket-umroh/denpasar` — 12 Hari Safara Quad Rp 35.000.000 (Lion Air)
10. `/paket-umroh/batam` — 13 Hari Safara Quad Rp 39.000.000 (Lion Air)
11. `/paket-umroh/pekanbaru` — 13 Hari Safara Quad Rp 35.000.000 (Lion Air)

---

## 4. Decoupled Data Access Layer (DAL) Contract

Struktur file penyimpanan data lokal di `src/data/`:
* `src/data/tours.ts`: Model data paket umroh reguler, plus, dan haji furoda.
* `src/data/articles.json`: 400 artikel edukasi hasil ekstraksi bersih.
* `src/data/branches.ts`: 26 kantor cabang resmi lengkap dengan geo-koordinat, alamat, dan nomor hotline lokal.
* `src/data/site-config.ts`: Metadata legalitas resmi, rekening bank resmi, dan kontak pusat.

Struktur service di `src/lib/data-service.ts`:
```typescript
// Abstraction contract
export async function getAllTours(): Promise<TourPackage[]>
export async function getTourBySlug(slug: string): Promise<TourPackage | null>
export async function getTourByCity(citySlug: string): Promise<TourPackage | null>
export async function getAllArticles(): Promise<Article[]>
export async function getArticleBySlug(slug: string): Promise<Article | null>
export async function getAllBranches(): Promise<BranchOffice[]>
export async function getBranchBySlug(slug: string): Promise<BranchOffice | null>
```
**Prinsip Masa Depan (Fase 2 CMS Migration)**:
Ketika admin CMS atau database Postgres/Supabase ditambahkan di kemudian hari, developer hanya perlu mengubah implementasi *body* fungsi di `src/lib/data-service.ts` agar mengambil data dari ORM/API CMS. Seluruh 14 komponen halaman frontend di `src/app/` tidak perlu diubah atau di-refactor sama sekali.

---

## 5. Arsitektur SEO & Core Web Vitals

1. **Metode Rendering (100% SSG)**:
   * Menggunakan `export const dynamic = 'error'` dan `generateStaticParams()` pada seluruh dynamic route. Tidak ada pemanggilan server runtime yang lambat.
2. **Dynamic Sitemap (`src/app/sitemap.ts`)**:
   * Menghasilkan file XML yang memetakan seluruh:
     * 14 Halaman Utama
     * 11 Halaman Kota
     * 5 Halaman Umroh Plus
     * 26 Halaman Kantor Cabang
     * 400 Halaman Artikel
     * Total: **456 URL terindeks secara instan oleh Google**.
3. **Structured Data Injection (JSON-LD)**:
   * Setiap halaman menginjeksi script `<script type="application/ld+json">` yang tervalidasi skema Google Rich Results.
4. **Target Kecepatan (Web Vitals Budget)**:
   * First Contentful Paint (FCP): < 0.8 detik
   * Largest Contentful Paint (LCP): < 1.4 detik
   * Cumulative Layout Shift (CLS): 0.00
   * Total Blocking Time (TBT): < 50ms
