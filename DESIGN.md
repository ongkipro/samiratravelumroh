# DESIGN.md — Modern Minimalist Madinah Theme & Professional System
**Project**: Samira Travel Umroh & Haji Public Portal (`samiratravelumrohhaji.com`)  
**Design Philosophy**: *"The Modern Madinah Sanctuary"* (Quiet Luxury, Spiritual Reverence, Ultra-Clean Editorial, & High-Conversion Clarity)  
**Status**: Canonical Design Blueprint (Total UI/UX Overhaul from Scratch)  
**Target Standard**: Standar web biro perjalanan umrah/haji luxury global & premium travel concierge, bebas dari AI slop dan pola generik.

---

## 1. Design Read & Anti-Slop Discipline

### 1.1. The Design Read
* **Reading this as**: *High-ticket sacred pilgrimage portal* untuk jemaah dan keluarga Muslim modern Indonesia (usia 25–65 tahun: profesional muda, orang tua, calon pendaftar haji, serta pejuang baitullah).
* **Mode**: **Storefront & Brand Hybrid** dengan jalur konversi langsung ke WhatsApp Konsultasi 1-on-1.
* **The Three Dials (Calibrated for Modern Minimalist Luxury)**:
  * `DESIGN_VARIANCE`: **6** (Ritme editorial asimetris, split-screen dinamis, whitespace lega, eliminasi total grid kartu kembar yang monoton).
  * `MOTION_INTENSITY`: **3** (Halus, tenang, dan bersahaja. Hanya micro-interactions elegan 60fps tanpa animasi berisik atau scroll-jacking).
  * `VISUAL_DENSITY`: **3** (Sangat lapang, bernapas, mengutamakan garis pemisah rambut 1px (*hairlines*) dibanding kotak-kotak berbayang kusam).

### 1.2. Anti-AI Slop Invariants (Aturan Haram)
1. **Dilarang Box-in-Box / Card-in-Card Syndrome**:
   - Dilarang membungkus komponen dalam kartu abu-abu (`bg-[#F9F8F5] border border-slate-200`) yang berada di dalam kartu putih (`bg-white border-[#E5E0D8]`).
   - Informasi ditata menggunakan ritme tipografi (*scale hierarchy*), pemisah garis halus (`divide-x`, `divide-y`, `border-t`), atau kolom terbuka (*open columns*).
2. **Dilarang Badge & Pill Inflation**:
   - Dilarang menaruh pil badge `rounded-full bg-... text-xs uppercase tracking-wider` di atas setiap judul secara berulang-ulang.
   - Gunakan tipografi kategori minimalis atau *hairline kicker* yang bersahaja.
3. **Dilarang Frame Artifisial pada Gambar**:
   - Gambar dilarang diberi padding kaku, border ganda, atau latar polaroid palsu.
   - Seluruh foto dokumentasi dan gambar visual harus tampil *clean*, *full-bleed*, atau dalam *stage aspect-ratio* presisi (16:9 / 16:10 / 4:5) dengan cropping profesional.
4. **Dilarang Tombol WhatsApp Berlebihan (Spam CTA)**:
   - Cukup 1 tombol aksi utama kontekstual per viewport/section + 1 *Floating WhatsApp Radar* di desktop dan 1 *Mobile Web App Dock* (`MobileAppDock.tsx`) di mobile yang bermutasi adaptif menjadi sticky price bar saat scrolling di halaman paket. Tidak boleh ada 3–4 tombol WA bertumpukan di satu layar.
5. **Zero Raw Emojis**:
   - Seluruh ikonografi strictly menggunakan vektor SVG dari `lucide-react`.

---

## 2. The Modern Madinah Color Palette

Warna tidak lagi menggunakan gradasi hijau pekat template AI, melainkan palet arsitektural yang terinspirasi dari **Masjid Nabawi di waktu fajar dan senja**:

| Token Name | Hex Code | OKLCH Equivalent | Peran & Karakter Desain |
|:---|:---:|:---|:---|
| `--color-canvas` | `#FAF8F5` | `oklch(0.978 0.008 80)` | **Madinah Alabaster**: Marmer putih hangat yang sejuk di mata, anti-silau, dan terasa tenang (*sanctuary feel*). |
| `--color-surface` | `#FFFFFF` | `oklch(1.000 0.000 00)` | **Pure Marble**: Latar kartu utama, dialog sheet, dan kontainer terangkat. |
| `--color-surface-subtle` | `#F3EFEA` | `oklch(0.952 0.012 80)` | **Desert Sand Tint**: Area selang-seling netral tanpa memberi kesan kotak abu-abu. |
| `--color-brand-primary` | `#084234` | `oklch(0.330 0.070 165)` | **Rawdah Deep Forest**: Hijau kubah Nabawi yang sangat matang, berwibawa, teduh, dan prestisius (bukan hijau terang murahan). |
| `--color-brand-deep` | `#04261E` | `oklch(0.230 0.055 165)` | **Midnight Rawdah**: Header gelap, footer editorial, dan backdrop foto sinematik. |
| `--color-gold-accent` | `#C5A059` | `oklch(0.700 0.110 80)` | **Madinah Brass**: Kuningan arsitektural payung dan mimbar Nabawi. Digunakan sebagai aksen halus 1px dan highlight harga. |
| `--color-gold-light` | `#F7EEDD` | `oklch(0.945 0.035 85)` | **Champagne Sheen**: Latar badge eksklusif dan penanda status terverifikasi yang anggun. |
| `--color-ink-primary` | `#0F172A` | `oklch(0.200 0.025 260)` | **Slate Obsidian**: Teks headline utama, angka harga, dan teks kontras tinggi (rasio > 14:1). |
| `--color-ink-secondary` | `#475569` | `oklch(0.450 0.020 260)` | **Muted Stone**: Deskripsi, catatan kaki, dan teks body yang nyaman dibaca berlama-lama. |
| `--color-border-hairline` | `#E8E3DA` | `oklch(0.910 0.010 80)` | **Hairline Seam**: Garis tipis 1px menggantikan drop-shadow tebal. |
| `--color-conversion` | `#15803D` | `oklch(0.550 0.160 145)` | **Deep Emerald Action**: Tombol WhatsApp & aksi pendaftaran yang mantap, kredibel, dan ramah sentuh. |

---

## 3. Tipografi Editorial & Skala Visual

Kunci dari web kekinian dan berkelas adalah **hierarki tipografi yang berani dan proporsional**:

1. **Display Heading**: **`Playfair Display`** (atau editorial serif kontemporer)
   - Digunakan selektif pada headline utama H1 Hero, H2 babak cerita, dan kutipan spiritual.
   - Ukuran: `text-3xl` hingga `text-6xl` dengan tracking rapat (`tracking-tight`) dan leading yang anggun.
2. **Body & UI Interface**: **`Plus Jakarta Sans`**
   - Font sans-serif karya desainer Indonesia yang modern, dengan *open aperture* lebar, sangat nyaman dibaca oleh jemaah senior.
   - Bobot: *Regular (400)* untuk narasi, *Medium (500)* untuk deskripsi, *SemiBold (600)* untuk navigasi, dan *Bold (700)* untuk harga.
3. **Tabular Figures for Pricing**:
   - Seluruh angka harga, tanggal keberangkatan, dan durasi wajib menggunakan kelas `tabular-nums font-mono` atau sans dengan angka monospaced agar tidak goyang saat interaksi.
4. **Kebijakan Anti-Zoom Trap**:
   - Seluruh elemen input, select, dan search disetel minimal `16px` (`text-base`) di viewport mobile (< 768px).

---

## 4. Layout Architecture: "The Open Sanctuary"

Menghilangkan kebiasaan template AI yang membagi halaman menjadi baris kartu 3x3 yang seragam. Layout baru menerapkan:

### 4.1. Asymmetric Hero Split
- **Kiri**: Headline spiritual editorial yang kuat, bukti legalitas Kemenag ringkas, dan 2 tombol aksi tegas (Konsultasi Seat & Unduh Brosur Resmi).
- **Kanan**: Visual sinematik megah (Pelataran Ka'bah / Nabawi senja) dengan overlay lencana rekor dunia yang minimalis dan terintegrasi mulus tanpa kartu mengambang norak.
- **Bawah Hero**: *Flight Deck Quick Filter* yang ramping, berbentuk strip horizontal presisi (*horizontal command strip*), bukan kotak tebal bertingkat.

### 4.2. Editorial Package Grid (Curated Showcase)
- Menampilkan paket umrah dalam format **Showcase Terkurasi**:
  - Foto destinasi/hotel berdimensi presisi (16:10 / 16:9).
  - Info penerbangan (Direct Charter Lion Air/Saudia), durasi, dan tanggal disajikan dalam 1 baris metadata rapi.
  - Fasilitas hotel bintang 5 disajikan dengan tipografi jernih (Makkah & Madinah) tanpa kotak bersarang.
  - Harga jernih (*All-in Quad*) dengan CTA langsung ke rincian atau konsultasi ketersediaan seat.

### 4.3. High-Credibility Social Proof (Bukan Galeri Stempel)
- **Rekor MURI**: Ditampilkan dalam 1 karya foto lanskap otentik yang membentang luas (*expansive frameless*), didampingi ringkasan 3 tonggak sejarah bergaris pemisah vertikal halus.
- **Guinness World Records & Piala APSI**: Berdampingan dalam rasio **16:9 yang identik dan presisi 1 ukuran**, memperlihatkan foto asli penyerahan piagam di panggung bersama pejabat resmi, didukung deskripsi kredibilitas yang berbobot.
- **Testimoni**: Ditata seperti rubrik wawancara majalah bergengsi dengan kutipan otentik, foto jemaah, dan label program.

---

## 5. Rencana Aset Visual & Strategi Image Generation

Untuk mengangkat kualitas web agar benar-benar setara portal umrah luxury kekinian, aset visual yang tidak konsisten atau bergaya brosur jadul akan digenerate ulang dengan standar visual fotografi profesional beresolusi tinggi menggunakan skill `generate_image`:

### 5.1. Daftar Kebutuhan Aset Visual Baru:
1. **Hero Main Visual (`hero_kaaba_sanctuary`)**:
   - *Prompt Concept*: Cinematic atmospheric photograph of the Holy Kaaba and Masjidil Haram courtyard during early dawn (fajr) twilight, soft golden and deep cyan morning light, pristine white marble floor reflecting gentle illumination, peaceful pilgrims performing tawaf, high-end travel editorial style, photorealistic, 8k, serene and divine, no artificial text, 16:9 aspect ratio.
2. **Hero Secondary / Nabawi Sanctuary (`nabawi_dawn_pillars`)**:
   - *Prompt Concept*: Architectural fine-art photograph of the grand marble courtyard of the Prophet's Mosque (Masjid an-Nabawi) in Madinah at sunrise, massive white and gold architectural umbrellas slowly opening, soft warm ambient lighting, elegant perspective, ultra clean, luxury spiritual journey aesthetic, 16:9 aspect ratio.
3. **Katalog Umroh Plus Ta'if (`dest_umroh_plus_thaif`)**:
   - *Prompt Concept*: Breathtaking landscape photograph of the cool mountainous city of Ta'if Saudi Arabia, lush rose gardens and scenic teleferik cable car over misty green mountains, golden hour sunbeams, cinematic National Geographic travel style, 16:9 aspect ratio.
4. **Katalog Umroh Plus Al-Ula (`dest_umroh_plus_alula`)**:
   - *Prompt Concept*: Majestic photograph of Hegra (Madain Saleh) in Al-Ula, ancient monumental carved sandstone tomb facade glowing in warm desert sunset light, pristine untouched desert sand dunes, luxury heritage travel photography, 16:9 aspect ratio.
5. **Katalog Umroh Plus Turki (`dest_umroh_plus_turki`)**:
   - *Prompt Concept*: Atmospheric wide panoramic view of Istanbul and the Bosphorus strait at twilight, the historic Hagia Sophia and Blue Mosque silhouettes with warm glowing dome lights, calm water reflections, elegant luxury travel editorial, 16:9 aspect ratio.
6. **Kit Perlengkapan Umrah Premium (`perlengkapan_umrah_luxury`)**:
   - *Prompt Concept*: Studio product photograph of a luxury umrah luggage set on clean warm beige limestone surface: sleek dark emerald green fiber suitcase with brushed gold TSA lock, neatly folded premium white cotton ihram cloth, elegant batik scarf, modern passport pouch, and leather prayer guide book, soft diffused museum lighting, minimalist luxury editorial, 16:9 aspect ratio.

---

## 6. Motion & Arsitektur Animasi React ("The Sanctuary Motion")

Prinsip animasi: **Bersahaja, tenang, 60fps GPU-accelerated, dan zero-layout-shift (CLS = 0.00)**. Memberikan sensasi aplikasi native modern tanpa membebani jemaah lansia atau merusak metrik Core Web Vitals (INP < 100ms, LCP < 1.4s).

### 6.1. The Hybrid Motion Stack
- **Layer 1: Pure CSS Hardware Keyframes & Transitions (0 KB JS Overhead)**:
  - Dijalankan langsung di thread GPU compositor.
  - Digunakan untuk: background `CanopyPattern`, `RaudhahSheen` light sweep, card hover elevation (`translateY(-2px)`), dan tombol tap feedback (`:active:scale-[0.98]`).
- **Layer 2: Framer Motion (Khusus Interactive Client Islands)**:
  - Digunakan selektif pada komponen pulau interaktif:
    1. **Spring Tab Indicator (`layoutId="activeFilter"`)**: Transisi pegas elastis halus (`stiffness: 400, damping: 35`) saat jemaah berpindah kategori paket atau kota embarkasi.
    2. **Adaptive Morphing Mobile Dock**: Transisi `AnimatePresence` masuk/keluar saat dock 4-tab bertransformasi menjadi Sticky Price Bar saat scroll melewati 380px.
    3. **Rolling Number Counter**: Angka estimasi angsuran bulanan pada kalkulator pembiayaan syariah bergulir halus saat slider DP/tenor digeser.
    4. **Subtle Load-In Cascade**: Jeda kemunculan kartu (`staggerChildren: 0.05s`, `y: 8px -> 0px`, `duration: 0.3s`) kurva `cubic-bezier(0.16, 1, 0.3, 1)`.

### 6.2. Aturan Emas Motion & Aksesibilitas
1. **Haram Scroll-Jacking**: Dilarang memanipulasi scroll alami mouse jemaah.
2. **Haram Animasi 3D Putar/Tumbling**: Gerakan visual dilarang melebihi translasi 2D sederhana.
3. **Kepatuhan `prefers-reduced-motion`**:
   Bagi jemaah yang mengaktifkan opsi hemat gerakan pada OS, seluruh durasi animasi otomatis disetel ke `0.01ms` (instan).
4. **Garansi CLS = 0.00**:
   Seluruh wadah animasi dinamis wajib memiliki `min-height` atau rasio aspek terkunci agar tidak memicu pergeseran layout.

---

## 7. Responsivitas & Standar Ergonomi Mobile

- **Mobile Viewport (< 768px)**:
  - Header ramping dengan logo tajam dan tombol darurat hotline / menu drawer.
  - Kartu paket memadatkan metadata penting: durasi, hotel ring-1, harga all-in, dan CTA WhatsApp.
  - *Mobile Web App Dock (`MobileAppDock.tsx`)*: Dock bawah 4-tab (Beranda, Paket, 26 Cabang, Tanya CS) yang ramah jempol, otomatis bermutasi menjadi sticky price conversion bar saat scrolling di halaman paket.
- **Tablet (768px – 1024px)**:
  - Grid 2 kolom seimbang dan rapi.
- **Desktop (≥ 1024px)**:
  - Whitespace mewah, tipografi proporsional, grid teratur tanpa ada ruang kosong aneh.

