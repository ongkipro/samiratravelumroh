# BUILD-LOG.md — Samira Travel Umroh & Haji

Catatan eksekusi teknis, riwayat build, perbaikan bug, dan deployment produksi ke Vercel.

---

## [2026-09-10 15:50:00 +07:00] — PWA Web App Manifest & Advanced Dynamic Catalog Filter (Phase 15)

- **Tujuan**: Memenuhi agenda lanjutan pada `STATUS.md`: menyediakan Web App Manifest PWA untuk instalasi shortcut mobile OS dan menambahkan filter dinamis multi-kriteria (rentang harga dan periode keberangkatan) pada katalog paket umroh.
- **Implementasi**:
  1. `src/app/manifest.ts`: Metadata route standar Next.js 16 App Router yang menghasilkan `/manifest.webmanifest` statis. Mendeklarasikan identitas resmi, warna tema *Madina Green* (`#084234`), canvas background (`#FAF8F5`), mode `standalone`, dan icon suite (`icon-192.png` maskable, `icon-512.png`, `apple-touch-icon.png`, `favicon.ico`).
  2. `src/app/layout.tsx`: Penambahan atribut `manifest: "/manifest.webmanifest"` pada metadata root layout.
  3. `src/components/packages/PackageCatalogClient.tsx`:
     - Menambahkan filter dinamis rentang harga: `< Rp 30 Juta (Hemat)`, `Rp 30 Jt – 35 Jt`, `Rp 35 Jt – 40 Jt`, dan `> Rp 40 Jt / Haji`.
     - Menambahkan filter dinamis periode keberangkatan: `Musim 1448 H (Juli–Ags)`, `Wisata Halal / Sejuk`, dan `Musim Haji 1447H/1448H`.
     - Menambahkan bar *Active Filter Tags* dengan chip interaktif yang dapat dihapus satu per satu beserta tombol `Reset Semua Filter`.
     - Mengoptimalkan responsivitas layout filter controls menjadi 12-kolom adaptif di desktop dan full-width touch-friendly di mobile dengan font-size anti-zoom.
- **Verifikasi**:
  - `npx tsc --noEmit`: **PASSED (0 Errors)**.
  - `npm run build`: **PASSED**, 467 static pages ter-generate dalam **4.2 detik** termasuk rute `/manifest.webmanifest`.


## [2026-09-09 16:00:00 +07:00] — All in One SEO XML Sitemap Architecture & Multi-Category Sitemaps

- **Commit**: `57479d9` (`perf(image): add sharp dependency and configure next image cache ttl`) & `d4aca2d` (`feat(ui,hotel,seo): revamp mobile menu and search, integrate official hotel tiers with video proofs, and optimize webp assets`)
- **Tujuan**: Memecah arsitektur sitemap tunggal menjadi sistem **XML Sitemap Index & Sub-Sitemaps per Kategori** berstandar industri (*All in One SEO / Yoast SEO / Rank Math*).
- **Implementasi**:
  1. `src/lib/sitemap-helper.ts`: Helper modular untuk membangun XML valid berstandar W3C dengan namespace Google Image Sitemap (`xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"`).
  2. `src/app/sitemap.xml/route.ts`: Master Sitemap Index yang mereferensikan 5 sub-sitemap kategori.
  3. `src/app/sitemap_index.xml/route.ts`: Mirror alias sitemap index untuk crawler mesin pencari.
  4. `src/app/page-sitemap.xml/route.ts`: Sub-sitemap untuk 10 halaman statis utama (`/`, `/paket-umroh`, `/umroh-plus`, `/haji-khusus-furoda`, `/kantor-cabang`, `/pembiayaan-syariah`, `/kemitraan-dgi`, `/tentang-kami`, `/testimoni`, `/artikel`).
  5. `src/app/paket-sitemap.xml/route.ts`: Sub-sitemap untuk 11 paket umroh kota embarkasi langsung dengan gambar penerbangan charter.
  6. `src/app/umroh-plus-sitemap.xml/route.ts`: Sub-sitemap untuk 5 destinasi wisata halal umroh plus (Turki, Al-Ula, Thaif, Dubai, Mesir).
  7. `src/app/cabang-sitemap.xml/route.ts`: Sub-sitemap untuk 26 kantor cabang fisik di seluruh Indonesia.
  8. `src/app/post-sitemap.xml/route.ts`: Sub-sitemap untuk 400 artikel edukasi dengan tanggal rilis asli dan cover photography kontekstual.
  9. `src/app/sitemap.xsl/route.ts`: Stylesheet visual XSLT interaktif bernuansa *Royal Emerald & Gold* untuk browser rendering ramah manusia/auditor.
  10. `src/app/robots.ts`: Aturan crawling canggih untuk Googlebot, Googlebot-Image, dan Bingbot, serta pendaftaran seluruh endpoint sitemap.
- **Verifikasi**: Seluruh endpoint terverifikasi **HTTP 200** secara live di Vercel.

---

## [2026-09-09 15:03:00 +07:00] — High-Resolution 3D Transparent Favicon Suite

- **Commit**: `2b84556` (`feat(brand): add high-resolution transparent 3D emblem favicon suite and update icon metadata`)
- **Tujuan**: Membuat favicon beresolusi tinggi dengan transparansi latar belakang penuh (full/fill 96%) berbasis lambang kaligrafi resmi Samira Travel (*سميرة*).
- **Implementasi**:
  1. Master icon dibuat dengan rasio kuadratik presisi dan masking transparan murni RGBA (`public/images/favicon-master.png`).
  2. Multi-size suite:
     - `src/app/icon.png` (512x512)
     - `src/app/apple-icon.png` (180x180)
     - `src/app/favicon.ico` (Multi-resolution 16/32/48 ICO)
     - `public/favicon.png` (32x32)
     - `public/favicon-16x16.png` & `public/favicon-32x32.png`
     - `public/icon-192.png` & `public/icon-512.png` (Android/PWA)
     - `public/apple-touch-icon.png` (iOS Safari)
  3. Konfigurasi `icons` lengkap di `src/app/layout.tsx`.
- **Verifikasi**: Live HTTP 200 di Vercel untuk seluruh berkas favicon.

---

## [2026-09-09 14:41:00 +07:00] — SSG Parser Infinite Loop Bugfix & Custom 404 Page

- **Commit**: `a66fed1` (`fix(articles): resolve markdown parser loop and add custom not-found page`)
- **Masalah**: Pada saat build Next.js 16 (Turbopack) untuk 457 rute SSG, proses *generating static pages* sempat macet di worker (0/457).
- **Akar Masalah**: Fungsi `parseMarkdownBlocks` di `src/app/artikel/[slug]/page.tsx` tidak menangani heading level 1 (`# `) dan level 4+ (`####`), sehingga memicu `break` pada inner loop paragraf tanpa memajukan pointer index `i` (infinite loop pada 105 artikel bertingkat heading 4).
- **Solusi**:
  1. Menambahkan dukungan untuk `#` dan `####` ke blok heading.
  2. Menambahkan penjaga kemajuan `else { i++; }` pada blok paragraf.
  3. Menambahkan halaman 404 bernuansa islami di `src/app/not-found.tsx`.
- **Hasil**: Waktu parsing 400 artikel turun menjadi **61ms**, dan seluruh 457 static pages selesai dikompilasi hanya dalam **11.9 detik**!

---

## [2026-09-09 17:06:00 +07:00] — AI Search Engine & LLM Readiness (llms.txt + robots.ts AI Directives)
- **Commit**: `d5427bc` (`feat(seo): add public/llms.txt and optimize robots.ts with AI crawler directives`) & `afff458` (`docs: update STATUS.md with llms.txt and AI bot rules status`)
- **Deployment**: Vercel Production `dpl_2srskJz7NaytQ4yoNGJFxVAg1qbU` (`● READY` di Edge Network).
- **Implementasi**:
  1. Pembuatan file standar `public/llms.txt` yang memuat ringkasan identitas legalitas perusahaan, keunggulan kompetitif, katalog rute, daftar 11 kota embarkasi, dan referensi indeks sitemap untuk AI answer engines (ChatGPT, Claude, Perplexity, Gemini, Apple Intelligence).
  2. Optimasi `src/app/robots.ts` dengan menyertakan aturan akses terperinci untuk crawler AI: `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `ClaudeBot`, `Claude-SearchBot`, `Claude-User`, `PerplexityBot`, `Perplexity-User`, `Applebot`, `Applebot-Extended`, `Google-Extended`, `cohere-ai`, `Meta-ExternalAgent`, `FacebookBot`, dan `Bytespider`.
  3. Memastikan jalur publik dan `/llms.txt` terbuka untuk sitasi AI search engine dengan tetap memproteksi endpoint privat/API.
  4. Nonaktifkan dev server localhost (port 3000 bebas dan siap untuk sesi berikutnya).

---

## [2026-09-09 14:31:00 +07:00] — Official Contact Channels, Footer, and Site Config Sync

- **Commit**: `df361dd` (`feat(content): update contact channels, article reader layout, and documentation`)
- **Implementasi**: Penyelarasan nomor hotline resmi `0856-0717-9735` dan telepon kantor `(021) 8690-9999`, pembaruan alamat email resmi `info@samiratravelumrohhaji.com`, serta kartu konsultasi resmi di akhir pembaca artikel.

---

## [2026-09-09 14:15:00 +07:00] — Inisialisasi GitHub Publik & Vercel Production

- **Remote GitHub**: `https://github.com/ongkipro/samiratravelumroh` (Public)
- **Vercel Project**: `ongkipro/samiratravelumroh`
- **Domain Resmi**:
  - `https://samiratravelumrohhaji.com` (Target Utama)
  - `https://samiratravelumroh.vercel.app` (Live Edge Fallback)
- **SSL / HTTPS**: Terverifikasi dan aktif di jaringan Vercel Edge.
