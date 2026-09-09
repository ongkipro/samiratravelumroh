import json
import re
import html

with open("tour_data.json", "r", encoding="utf-8") as f:
    raw_tours = json.load(f)

def clean(text):
    if not text:
        return ""
    text = html.unescape(text)
    text = text.replace("&amp;", "&").replace("&#8211;", "–").replace("&#8216;", "‘").replace("&#8217;", "’").replace("&#8220;", "“").replace("&#8221;", "”")
    text = text.replace("\u00a0", " ")
    return text.strip()

city_map = [
    ("Palembang", "palembang", 9, 38000000, "/images/brosur-keberangkatan-04.webp"),
    ("Padang", "padang", 13, 36000000, "/images/brosur-keberangkatan-06.webp"),
    ("Pontianak", "pontianak", 13, 39000000, "/images/brosur-keberangkatan-01.webp"),
    ("Aceh", "aceh", 13, 35000000, "/images/brosur-keberangkatan-11.webp"),
    ("Denpasar", "denpasar", 12, 35000000, "/images/brosur-keberangkatan-05.webp"),
    ("Makassar", "makassar", 12, 35000000, "/images/brosur-keberangkatan-05.webp"),
    ("Medan", "medan", 12, 36000000, "/images/brosur-keberangkatan-05.webp"),
    ("Batam", "batam", 13, 39000000, "/images/brosur-keberangkatan-01.webp"),
    ("Pekanbaru", "pekanbaru", 13, 35000000, "/images/brosur-keberangkatan-03.webp"),
    ("Surabaya", "surabaya", 12, 38000000, "/images/brosur-keberangkatan-10.webp"),
    ("Jakarta", "jakarta", 9, 36000000, "/images/brosur-keberangkatan-02.webp"),
]

tours = []

# Process 11 regular tours
for idx, item in enumerate(raw_tours):
    c_name, c_slug, c_dur, c_price, c_flyer = city_map[idx]
    title = f"Paket Umroh Reguler {c_name} {c_dur} Hari (Pasti Berangkat)"
    
    # Parse itinerary
    raw_itinerary = item.get("itinerary", "")
    days_split = re.split(r"(?:###\s*)?Hari\s*(\d+)\s*:\s*", raw_itinerary)
    itinerary_list = []
    for i in range(1, len(days_split), 2):
        day_num = int(days_split[i])
        chunk = days_split[i+1]
        title_line = clean(chunk.split("\n")[0])
        body = "\n".join(chunk.split("\n")[1:])
        bullets = [clean(b.strip("-* •")) for b in body.split("\n") if b.strip().startswith(("-", "*", "•")) and len(b.strip("-* •")) > 0]
        itinerary_list.append({
            "day": day_num,
            "title": title_line,
            "description": clean(body)[:160],
            "activities": bullets if bullets else [title_line]
        })
    
    tours.append({
        "id": f"reg-{c_slug}",
        "slug": c_slug,
        "title": title,
        "city": c_name,
        "durationDays": c_dur,
        "departurePeriod": "Juli – Agustus 2026 (Musim 1448 H)",
        "priceIDR": c_price,
        "priceFormatted": f"Rp {c_price:,}".replace(",", "."),
        "roomType": "Safara Room Quad (Sekamar Berempat)",
        "airline": "Lion Air (Charter Seat Pasti Berangkat)",
        "isDirectFlight": c_name in ["Jakarta", "Surabaya", "Medan", "Makassar", "Padang"],
        "category": "reguler",
        "flyerImage": c_flyer,
        "description": f"Program ibadah Umrah Reguler {c_dur} Hari langsung dari Bandara Internasional kota {c_name}. Hotel ring 1 dekat pelataran Masjidil Haram & Nabawi, jaminan kepastian tiket pesawat charter, bimbingan muthawwif berpengalaman, serta pendampingan tour leader bersertifikat BNSP.",
        "hotelMakkah": {
            "name": "Hotel Safara / Setaraf Bintang 4 Ring 1",
            "stars": 4,
            "distanceText": "< 250 meter ke Masjidil Haram"
        },
        "hotelMadinah": {
            "name": "Hotel Safara Madinah / Setaraf Bintang 4",
            "stars": 4,
            "distanceText": "< 150 meter ke Masjid Nabawi"
        },
        "inclusions": [
            "Tiket pesawat internasional Lion Air PP (Charter Seat)",
            "Akomodasi hotel bintang 4 di Makkah & Madinah (Fullboard)",
            "Makan 3x sehari menu nusantara Indonesia",
            "Transportasi Bus Pariwisata AC Eksekutif selama di Saudi",
            "Muthawwif (Pembimbing Ibadah) fasih berbahasa Indonesia",
            "Tour Leader BNSP mengawal dari bandara asal",
            "Visa Umroh Resmi terdaftar SISKOPATUH Kemenag RI",
            "Asuransi perjalanan & kesehatan internasional",
            "Fasilitas Audio Receiver / Audio Pemandu Shalat (APS)",
            "Air Zamzam 5 Liter (sesuai regulasi otoritas Saudi)",
            "Manasik Umroh intensif sebelum terbang"
        ],
        "exclusions": [
            "Biaya pembuatan paspor di kantor imigrasi",
            "Biaya vaksinasi meningitis & tes kesehatan",
            "Handling bandara & perlengkapan umroh Rp 1.500.000 (koper fiber, kain ihram/mukena, batik)",
            "Pengeluaran pribadi (laundry, room service, roaming)"
        ],
        "itinerary": itinerary_list,
        "terms": [
            "Paspor dengan nama minimal 2 suku kata, masa berlaku minimal 8 bulan",
            "Fotokopi KTP & Kartu Keluarga (KK)",
            "Uang muka pendaftaran (DP) Rp 1.500.000,-",
            "Pelunasan paling lambat H-25 sebelum tanggal terbang",
            "Pas foto berwarna latar putih 3x4 (2 lembar)"
        ]
    })

# Add 5 Umroh Plus packages
plus_packages = [
    {
        "id": "plus-thaif",
        "slug": "thaif",
        "title": "Paket Umroh Plus Ta'if (Thaif) 9 Hari",
        "city": "Jakarta",
        "durationDays": 9,
        "departurePeriod": "Sepanjang Musim 2026",
        "priceIDR": 29000000,
        "priceFormatted": "Rp 29.000.000-an",
        "roomType": "Safara Room Quad",
        "airline": "Lion Air / Saudia Airlines",
        "isDirectFlight": True,
        "category": "plus",
        "destinationHighlight": "Kereta Gantung Telefrik Thaif, Masjid Abdullah bin Abbas, Kebun Parfum Mawar & Miqat Qarnul Manazil",
        "flyerImage": "/images/brosur-keberangkatan-07.webp",
        "description": "Perjalanan ibadah umroh dipadukan dengan ziarah ke kota sejuk Ta'if di pegunungan Sarawat. Menikmati wisata kereta gantung melintasi ngarai batu, mengunjungi perkebunan mawar legendaris, dan mengambil miqat umroh di Qarnul Manazil.",
        "hotelMakkah": {"name": "Hotel Safara Bintang 4", "stars": 4, "distanceText": "< 250m ke Masjidil Haram"},
        "hotelMadinah": {"name": "Hotel Safara Madinah Bintang 4", "stars": 4, "distanceText": "< 150m ke Masjid Nabawi"},
        "inclusions": [
            "Tiket pesawat internasional PP",
            "Akomodasi hotel fullboard di Makkah & Madinah",
            "Tiket Kereta Gantung (Telefrik) Thaif",
            "Kunjungan pabrik pengolahan parfum mawar Taif",
            "Visa Umroh Resmi Kemenag",
            "Muthawwif & Tour Leader BNSP",
            "Audio Receiver (APS) untuk thawaf dan sai"
        ],
        "exclusions": ["Handling perlengkapan Rp 1.500.000", "Paspor & vaksin"],
        "itinerary": [
            {"day": 1, "title": "Keberangkatan Jakarta – Jeddah – Madinah", "description": "Tiba di Bandara King Abdulaziz Jeddah, transfer bus ke Madinah.", "activities": ["Penerbangan internasional", "Check-in hotel Madinah", "Istirahat"]},
            {"day": 2, "title": "Madinah – Ziarah Raudhah & Masjid Nabawi", "description": "Ibadah di Masjid Nabawi dan ziarah Makam Rasulullah SAW.", "activities": ["Ziarah Raudhah via Nusuk", "Shalat berjamaah di Nabawi"]},
            {"day": 3, "title": "Ziarah Kota Madinah (Uhud & Quba)", "description": "Napak tilas sejarah Islam di Jabal Uhud dan Masjid Quba.", "activities": ["Masjid Quba", "Jabal Uhud", "Kebun Kurma"]},
            {"day": 4, "title": "Madinah – Miqat Bir Ali – Makkah", "description": "Ambil miqat di Bir Ali dan pelaksanaan umroh wajib.", "activities": ["Niat Ihram di Bir Ali", "Thawaf, Sa'i, Tahallul di Masjidil Haram"]},
            {"day": 5, "title": "Makkah – Memperbanyak Ibadah di Masjidil Haram", "description": "Ibadah mandiri dan thawaf sunnah.", "activities": ["Thawaf sunnah", "Dzikir & do'a mustajab"]},
            {"day": 6, "title": "Wisata Ziarah Ta'if (Kereta Gantung & Mawar)", "description": "Perjalanan ke kota Thaif, naik kereta gantung dan ziarah Masjid Ibnu Abbas.", "activities": ["Telefrik Cable Car", "Masjid Abdullah bin Abbas", "Miqat Qarnul Manazil umroh ke-2"]},
            {"day": 7, "title": "Makkah – Ibadah Khusyuk", "description": "Memperbanyak shalat berjamaah di pelataran Ka'bah.", "activities": ["Shalat 5 waktu di Masjidil Haram"]},
            {"day": 8, "title": "Thawaf Wada' & City Tour Jeddah", "description": "Pamitan baitullah dan belanja suvenir di Al-Balad.", "activities": ["Thawaf Wada", "Corniche Laut Merah", "Pasar Balad"]},
            {"day": 9, "title": "Penerbangan Pulang Menuju Jakarta", "description": "Tiba di tanah air membawa predikat umroh mabrur.", "activities": ["Landing di Bandara Soekarno-Hatta"]}
        ],
        "terms": ["Paspor aktif min 8 bulan", "DP Rp 1.500.000,-", "Pelunasan H-25"]
    },
    {
        "id": "plus-al-ula",
        "slug": "al-ula",
        "title": "Paket Umroh Plus Al-Ula (Hegra UNESCO) 12 Hari",
        "city": "Jakarta",
        "durationDays": 12,
        "departurePeriod": "Periode Musim Sejuk 2026",
        "priceIDR": 34000000,
        "priceFormatted": "Rp 34.000.000-an",
        "roomType": "Safara Room Quad",
        "airline": "Lion Air / Saudia Airlines",
        "isDirectFlight": True,
        "category": "plus",
        "destinationHighlight": "Situs Warisan Dunia UNESCO Hegra Madain Saleh, Elephant Rock (Jabal Al-Fil), Old Town Al-Ula & Maraya Concert Hall",
        "flyerImage": "/images/brosur-keberangkatan-07.webp",
        "description": "Menelusuri keajaiban sejarah peradaban Nabatean kuno di Al-Ula, melihat pahatan makam batu megah Hegra (situs UNESCO pertama di Arab Saudi), keajaiban batu Jabal Al-Fil, berpadu dengan kekhusyukan ibadah di dua tanah suci.",
        "hotelMakkah": {"name": "Hotel Safara Bintang 4", "stars": 4, "distanceText": "< 250m ke Masjidil Haram"},
        "hotelMadinah": {"name": "Hotel Safara Madinah Bintang 4", "stars": 4, "distanceText": "< 150m ke Masjid Nabawi"},
        "inclusions": ["Tiket pesawat internasional PP", "Akomodasi hotel Madinah, Makkah & Al-Ula", "Tiket masuk resmi Hegra UNESCO", "Tour Leader BNSP & Muthawwif", "Visa Umroh Resmi"],
        "exclusions": ["Handling perlengkapan Rp 1.500.000", "Paspor & vaksin"],
        "itinerary": [
            {"day": 1, "title": "Jakarta – Madinah", "description": "Penerbangan langsung Jakarta menuju Madinah.", "activities": ["Check-in hotel Madinah", "Istirahat"]},
            {"day": 2, "title": "Madinah – Raudhah & Masjid Nabawi", "description": "Ziarah makam Rasulullah SAW dan Raudhah.", "activities": ["Shalat di Raudhah", "Ziarah Makam Nabi"]},
            {"day": 3, "title": "Eksplorasi Al-Ula (Hegra & Elephant Rock)", "description": "Perjalanan ke Al-Ula, mengunjungi Hegra situs Nabatean dan Jabal Al-Fil.", "activities": ["Hegra Madain Saleh", "Jabal Al-Fil", "Al-Ula Old Town"]},
            {"day": 4, "title": "Al-Ula – Madinah", "description": "Kembali ke Madinah untuk memperbanyak ibadah.", "activities": ["Ziarah Masjid Quba", "Persiapan Ihram"]},
            {"day": 5, "title": "Madinah – Miqat Bir Ali – Makkah", "description": "Niat ihram di Bir Ali dan pelaksanaan umroh pertama.", "activities": ["Thawaf & Sai di Masjidil Haram"]},
            {"day": 6, "title": "Makkah – Ibadah Khusyuk", "description": "Ibadah mandiri di pelataran Ka'bah.", "activities": ["Dzikir & shalat sunnah"]},
            {"day": 7, "title": "Ziarah Kota Makkah (Jabal Tsur, Nur, Arafah)", "description": "Napak tilas situs haji dan sejarah nabi.", "activities": ["Arafah", "Muzdalifah", "Mina"]},
            {"day": 8, "title": "Makkah – Ibadah & Umroh Ke-2", "description": "Ambil miqat di Ji'ranah atau Tan'im.", "activities": ["Umroh sunnah kedua"]},
            {"day": 9, "title": "Makkah – Ibadah Mandiri", "description": "Memperbanyak thawaf sunnah.", "activities": ["Shalat 5 waktu di Masjidil Haram"]},
            {"day": 10, "title": "Thawaf Wada' & Menuju Jeddah", "description": "Thawaf perpisahan dan belanja di Jeddah.", "activities": ["Thawaf Wada", "Al-Balad"]},
            {"day": 11, "title": "Penerbangan Jeddah – Jakarta", "description": "Penerbangan kembali ke Indonesia.", "activities": ["Boarding"]},
            {"day": 12, "title": "Tiba di Jakarta", "description": "Tiba di Bandara Soekarno Hatta.", "activities": ["Selesai rangkaian ibadah"]}
        ],
        "terms": ["Paspor aktif min 8 bulan", "DP Rp 1.500.000,-", "Pelunasan H-25"]
    },
    {
        "id": "plus-turki",
        "slug": "turki",
        "title": "Paket Umroh Plus Turkey (Istanbul & Bosphorus) 14 Hari",
        "city": "Jakarta",
        "durationDays": 14,
        "departurePeriod": "Musim Semi & Musim Gugur 2026",
        "priceIDR": 37000000,
        "priceFormatted": "Rp 37.000.000-an",
        "roomType": "Safara Room Quad",
        "airline": "Turkish Airlines / Saudia PP",
        "isDirectFlight": False,
        "category": "plus",
        "destinationHighlight": "Masjid Hagia Sophia, Blue Mosque, Istana Topkapi, Pelayaran Bosphorus Cruise & Grand Bazaar Istanbul",
        "flyerImage": "/images/brosur-keberangkatan-07.webp",
        "description": "Menjelajahi jejak kejayaan Khilafah Utsmaniyah di Istanbul, berlayar di Selat Bosphorus membelah benua Asia dan Eropa, shalat di Hagia Sophia, dilanjutkan dengan rangkaian ibadah umroh khusyuk di Makkah dan Madinah.",
        "hotelMakkah": {"name": "Hotel Safara Bintang 4", "stars": 4, "distanceText": "< 250m ke Masjidil Haram"},
        "hotelMadinah": {"name": "Hotel Safara Madinah Bintang 4", "stars": 4, "distanceText": "< 150m ke Masjid Nabawi"},
        "inclusions": ["Tiket pesawat internasional rute Jakarta-Istanbul-Madinah-Jeddah-Jakarta", "Hotel bintang 4/5 di Istanbul, Makkah, Madinah", "Private Bosphorus Cruise", "Visa Turki & Visa Umroh", "Tour Leader & Muthawwif"],
        "exclusions": ["Handling perlengkapan Rp 1.500.000", "Paspor & vaksin"],
        "itinerary": [
            {"day": 1, "title": "Jakarta – Istanbul", "description": "Penerbangan malam menuju Istanbul Turki.", "activities": ["Penerbangan internasional"]},
            {"day": 2, "title": "Istanbul City Tour (Hagia Sophia & Blue Mosque)", "description": "Wisata sejarah arsitektur Islam di jantung Sultanahmet.", "activities": ["Hagia Sophia", "Sultan Ahmed Mosque", "Hippodrome"]},
            {"day": 3, "title": "Topkapi Palace & Bosphorus Cruise", "description": "Melihat peninggalan suci Rasulullah di Topkapi dan berlayar di Selat Bosphorus.", "activities": ["Topkapi Palace Relics", "Bosphorus Cruise", "Grand Bazaar"]},
            {"day": 4, "title": "Istanbul – Madinah", "description": "Penerbangan menuju kota suci Madinah.", "activities": ["Check-in hotel Madinah", "Ziarah makam Nabi"]},
            {"day": 5, "title": "Madinah – Raudhah As-Syarifah", "description": "Ibadah di Raudhah dan Masjid Nabawi.", "activities": ["Raudhah", "Shalat berjamaah"]},
            {"day": 6, "title": "Ziarah Kota Madinah", "description": "Ziarah Jabal Uhud dan Masjid Quba.", "activities": ["Quba", "Uhud", "Kebun Kurma"]},
            {"day": 7, "title": "Madinah – Miqat Bir Ali – Makkah", "description": "Niat ihram dan pelaksanaan umroh wajib.", "activities": ["Ihram di Bir Ali", "Thawaf & Sai"]},
            {"day": 8, "title": "Makkah – Ibadah Khusyuk", "description": "Memperbanyak ibadah di Masjidil Haram.", "activities": ["Thawaf sunnah"]},
            {"day": 9, "title": "Ziarah Kota Makkah", "description": "Napak tilas Arafah, Muzdalifah, Mina.", "activities": ["Jabal Rahmah", "Mina"]},
            {"day": 10, "title": "Makkah – Umroh Kedua", "description": "Ambil miqat di Tan'im untuk umroh kedua.", "activities": ["Umroh sunnah"]},
            {"day": 11, "title": "Makkah – Ibadah Mandiri", "description": "Memperbanyak khataman Al-Quran di Masjidil Haram.", "activities": ["Shalat 5 waktu"]},
            {"day": 12, "title": "Thawaf Wada' & Menuju Jeddah", "description": "Thawaf perpisahan dan transfer ke Jeddah.", "activities": ["Thawaf Wada", "Corniche Jeddah"]},
            {"day": 13, "title": "Penerbangan Jeddah – Jakarta", "description": "Penerbangan pulang ke Indonesia.", "activities": ["Boarding"]},
            {"day": 14, "title": "Tiba di Jakarta", "description": "Tiba di Bandara Soekarno Hatta.", "activities": ["Selesai program"]}
        ],
        "terms": ["Paspor aktif min 8 bulan", "DP Rp 1.500.000,-", "Pelunasan H-35"]
    },
    {
        "id": "plus-riyadh",
        "slug": "riyadh",
        "title": "Paket Umroh Plus Riyadh 9 Hari",
        "city": "Jakarta",
        "durationDays": 9,
        "departurePeriod": "Sepanjang Musim 2026",
        "priceIDR": 30000000,
        "priceFormatted": "Rp 30.000.000-an",
        "roomType": "Safara Room Quad",
        "airline": "Saudia Airlines Direct",
        "isDirectFlight": True,
        "category": "plus",
        "destinationHighlight": "Benteng Al-Masmak, Situs Bersejarah UNESCO Diriyah, & Kingdom Centre Tower",
        "flyerImage": "/images/brosur-keberangkatan-07.webp",
        "description": "Menjelajahi ibu kota modern Kerajaan Arab Saudi (Riyadh), mengunjungi benteng bersejarah unifikasi Saudi Al-Masmak, situs warisan dunia Diriyah, dilanjutkan ibadah umroh di Makkah & Madinah.",
        "hotelMakkah": {"name": "Hotel Safara Bintang 4", "stars": 4, "distanceText": "< 250m ke Masjidil Haram"},
        "hotelMadinah": {"name": "Hotel Safara Madinah Bintang 4", "stars": 4, "distanceText": "< 150m ke Masjid Nabawi"},
        "inclusions": ["Tiket pesawat internasional PP", "Hotel Makkah, Madinah & Riyadh", "City tour Riyadh", "Visa Umroh Resmi", "Tour Leader & Muthawwif"],
        "exclusions": ["Handling perlengkapan Rp 1.500.000", "Paspor & vaksin"],
        "itinerary": [
            {"day": 1, "title": "Jakarta – Riyadh", "description": "Penerbangan menuju ibu kota Arab Saudi.", "activities": ["Check-in hotel Riyadh", "Istirahat"]},
            {"day": 2, "title": "Riyadh City Tour (Masmak & Diriyah)", "description": "Melihat sejarah berdirinya Saudi dan kota tua Diriyah.", "activities": ["Benteng Masmak", "Diriyah UNESCO", "Kingdom Centre"]},
            {"day": 3, "title": "Riyadh – Madinah", "description": "Perjalanan ke Madinah dengan pesawat domestik/kereta cepat.", "activities": ["Ziarah Masjid Nabawi"]},
            {"day": 4, "title": "Madinah – Raudhah & Ziarah Kota", "description": "Shalat di Raudhah dan ziarah Jabal Uhud.", "activities": ["Raudhah", "Masjid Quba", "Uhud"]},
            {"day": 5, "title": "Madinah – Miqat Bir Ali – Makkah", "description": "Niat ihram dan pelaksanaan umroh wajib.", "activities": ["Thawaf & Sai"]},
            {"day": 6, "title": "Makkah – Ibadah Khusyuk", "description": "Memperbanyak shalat dan thawaf sunnah.", "activities": ["Masjidil Haram"]},
            {"day": 7, "title": "Ziarah Kota Makkah", "description": "Ziarah Arafah dan Jabal Rahmah.", "activities": ["Napak tilas masya'ir"]},
            {"day": 8, "title": "Thawaf Wada' & Jeddah", "description": "Thawaf perpisahan dan belanja di Jeddah.", "activities": ["Thawaf Wada", "Pasar Balad"]},
            {"day": 9, "title": "Tiba di Jakarta", "description": "Tiba kembali di tanah air.", "activities": ["Selesai"]}
        ],
        "terms": ["Paspor aktif min 8 bulan", "DP Rp 1.500.000,-", "Pelunasan H-25"]
    },
    {
        "id": "plus-jeddah",
        "slug": "jeddah",
        "title": "Paket Umroh Plus Jeddah 9 Hari",
        "city": "Jakarta",
        "durationDays": 9,
        "departurePeriod": "Sepanjang Musim 2026",
        "priceIDR": 28000000,
        "priceFormatted": "Rp 28.000.000-an",
        "roomType": "Safara Room Quad",
        "airline": "Lion Air Direct PP",
        "isDirectFlight": True,
        "category": "plus",
        "destinationHighlight": "Kawasan Sejarah Al-Balad UNESCO, Corniche Laut Merah, & Masjid Terapung Al-Rahmah",
        "flyerImage": "/images/brosur-keberangkatan-02.webp",
        "description": "City tour mendalam di gerbang utama dua tanah suci: kota pelabuhan Jeddah. Menyusuri arsitektur rumah batu koral Al-Balad, menikmati pesisir Laut Merah, dan shalat di Masjid Terapung.",
        "hotelMakkah": {"name": "Hotel Safara Bintang 4", "stars": 4, "distanceText": "< 250m ke Masjidil Haram"},
        "hotelMadinah": {"name": "Hotel Safara Madinah Bintang 4", "stars": 4, "distanceText": "< 150m ke Masjid Nabawi"},
        "inclusions": ["Tiket pesawat internasional PP", "Hotel Makkah & Madinah fullboard", "City tour Jeddah", "Visa Umroh Resmi", "Tour Leader & Muthawwif"],
        "exclusions": ["Handling perlengkapan Rp 1.500.000", "Paspor & vaksin"],
        "itinerary": [
            {"day": 1, "title": "Jakarta – Jeddah – Madinah", "description": "Mendarat di Jeddah dan perjalanan bus ke Madinah.", "activities": ["Check-in hotel Madinah"]},
            {"day": 2, "title": "Madinah – Raudhah As-Syarifah", "description": "Ibadah di Masjid Nabawi dan Raudhah.", "activities": ["Raudhah", "Makam Nabi"]},
            {"day": 3, "title": "Ziarah Kota Madinah", "description": "Ziarah Quba dan Uhud.", "activities": ["Masjid Quba", "Jabal Uhud"]},
            {"day": 4, "title": "Madinah – Miqat Bir Ali – Makkah", "description": "Niat ihram dan pelaksanaan umroh wajib.", "activities": ["Thawaf & Sai"]},
            {"day": 5, "title": "Makkah – Ibadah Khusyuk", "description": "Ibadah mandiri di Masjidil Haram.", "activities": ["Thawaf sunnah"]},
            {"day": 6, "title": "Ziarah Kota Makkah", "description": "Ziarah Jabal Tsur dan Jabal Nur.", "activities": ["Ziarah sejarah"]},
            {"day": 7, "title": "Makkah – Ibadah Mandiri", "description": "Memperbanyak doa di Multazam dan Hijr Ismail.", "activities": ["Masjidil Haram"]},
            {"day": 8, "title": "Thawaf Wada' & Eksplorasi Jeddah", "description": "City tour mendalam Al-Balad dan Laut Merah.", "activities": ["Al-Balad UNESCO", "Masjid Terapung", "Corniche"]},
            {"day": 9, "title": "Tiba di Jakarta", "description": "Mendarat di Bandara Soekarno Hatta.", "activities": ["Selesai"]}
        ],
        "terms": ["Paspor aktif min 8 bulan", "DP Rp 1.500.000,-", "Pelunasan H-25"]
    }
]

# Add Haji Furoda package
haji_furoda = {
    "id": "haji-furoda",
    "slug": "haji-furoda",
    "title": "Program Haji Khusus & Haji Furoda (Tanpa Antri) 20 Hari",
    "city": "Jakarta",
    "durationDays": 20,
    "departurePeriod": "Musim Haji 1447H / 1448H (Kloter Akhir)",
    "priceIDR": 272000000,
    "priceUSD": 17000,
    "priceFormatted": "USD 17.000",
    "roomType": "Hotel Bintang 5 & Tenda Maktab AC Arafah-Mina",
    "airline": "Saudia Airlines / Garuda Indonesia (Direct PP)",
    "isDirectFlight": True,
    "category": "haji",
    "destinationHighlight": "Wukuf Arafah, Mabit Mina Maktab Ber-AC, Bus Toilet Eksklusif, Garansi DP 100% Full Refund Jika Visa Tidak Terbit",
    "flyerImage": "/images/perlengkapan-haji-samira-travel.webp",
    "description": "Program Ibadah Haji Khusus Furoda / Mujamalah langsung berangkat pada tahun berjalan tanpa menunggu antrean puluhan tahun. Menggunakan kuota visa haji resmi Kerajaan Arab Saudi, fasilitas tenda ber-AC maktab haji khusus di Arafah & Mina, bus berpendingin udara dengan toilet, dan jaminan keamanan dana DP USD 5.000 100% full refund jika visa tidak disetujui.",
    "hotelMakkah": {"name": "Hotel Bintang 5 Pelataran Masjidil Haram", "stars": 5, "distanceText": "< 100 meter ke Ka'bah"},
    "hotelMadinah": {"name": "Hotel Bintang 5 Pelataran Masjid Nabawi", "stars": 5, "distanceText": "< 100 meter ke Raudhah"},
    "inclusions": [
        "Penerbitan Visa Haji Khusus Furoda resmi terdaftar e-Hajj KSA",
        "Tiket pesawat internasional kelas ekonomi langsung PP",
        "Hotel berbintang 5 di Makkah & Madinah (Fullboard menu Indonesia)",
        "Tenda maktab haji khusus ber-AC di Arafah & Mina",
        "Armada Bus AC Pariwisata Eksklusif dilengkapi Toilet di dalam bus",
        "Muthawwif berpengalaman & Tour Leader bersertifikat resmi BNSP",
        "Bimbingan Manasik Haji intensif di hotel berbintang sebelum terbang",
        "Asuransi perjalanan & jaminan kesehatan internasional",
        "Air Zamzam 5 Liter & bagasi 2 koli (total 46 kg)"
    ],
    "exclusions": [
        "Biaya pembuatan/perpanjangan paspor",
        "Biaya vaksinasi meningitis internasional",
        "Biaya handling & perlengkapan haji Rp 1.500.000",
        "Dam (denda) haji tamattu atau qurban pribadi",
        "Pengeluaran pribadi (laundry, telepon roaming)"
    ],
    "itinerary": [
        {"day": 1, "title": "Pemberangkatan Jakarta – Jeddah Menuju Makkah", "description": "Terbang dengan kloter akhir musim haji, langsung berniat umroh di Yalamlam.", "activities": ["Ihram di pesawat", "Thawaf & Sai umroh tamattu"]},
        {"day": 2, "title": "Makkah – Pemantapan Manasik Masya'ir", "description": "Bimbingan fikih persiapan puncak haji dan istirahat fisik prima.", "activities": ["Manasik hotel Makkah", "Shalat di Masjidil Haram"]},
        {"day": 3, "title": "Hari Tarwiyah (8 Dzulhijjah) – Menuju Mina", "description": "Memulai ihram haji dan mabit di tenda maktab ber-AC Mina.", "activities": ["Niat Ihram Haji", "Mabit di Tenda AC Mina"]},
        {"day": 4, "title": "Hari Wukuf Arafah (9 Dzulhijjah) – Puncak Haji", "description": "Wukuf di Padang Arafah, khutbah wukuf, muhasabah, dan doa mustajab.", "activities": ["Khutbah Wukuf", "Dzikir & Doa akbar Arafah"]},
        {"day": 5, "title": "Malam Muzdalifah & Lempar Jumrah Aqabah (10 Dzulhijjah)", "description": "Mabit Muzdalifah, pengambilan kerikil, dan melontar Jumrah Aqabah di Mina.", "activities": ["Mabit Muzdalifah", "Jumrah Aqabah", "Tahallul Awal"]},
        {"day": 6, "title": "Hari Tasyriq 1 (11 Dzulhijjah) – Melontar 3 Jumrah", "description": "Mabit di Mina dan melontar Jumrah Ula, Wustha, Aqabah.", "activities": ["Melontar 3 Jumrah", "Bimbingan muthawwif"]},
        {"day": 7, "title": "Hari Tasyriq 2 (12 Dzulhijjah) – Nafar Awal", "description": "Melontar 3 jumrah dan persiapan nafar awal kembali ke Makkah.", "activities": ["Melontar 3 jumrah", "Kembali ke hotel Makkah"]},
        {"day": 8, "title": "Thawaf Ifadhah & Sa'i Haji di Masjidil Haram", "description": "Penyelesaian rukun haji dan tahallul tsani (sempurna).", "activities": ["Thawaf Ifadhah", "Sai Haji", "Tahallul Tsani"]},
        {"day": 9, "title": "Makkah – Hari Tasyriq Terakhir & Istirahat", "description": "Pemulihan fisik dan shalat berjamaah di pelataran Ka'bah.", "activities": ["Khataman Al-Quran"]},
        {"day": 10, "title": "Thawaf Wada' & Perjalanan Menuju Madinah", "description": "Thawaf pamitan baitullah dan perjalanan bus eksekutif ke Madinah.", "activities": ["Thawaf Wada", "Perjalanan ke Madinah"]},
        {"day": 11, "title": "Madinah – Ziarah Makam Rasulullah SAW & Raudhah", "description": "Mengucapkan salam kepada Baginda Nabi dan shalat di taman surga Raudhah.", "activities": ["Ziarah Makam Nabi", "Raudhah via Nusuk"]},
        {"day": 12, "title": "Madinah – Ziarah Syuhada Uhud & Masjid Quba", "description": "Ziarah sejarah peradaban Islam di Madinah Al-Munawwarah.", "activities": ["Masjid Quba", "Jabal Uhud", "Masjid Qiblatain"]},
        {"day": 13, "title": "Madinah – Memperbanyak Ibadah di Masjid Nabawi", "description": "Ibadah khusyuk dan shalat 40 waktu (Arba'in).", "activities": ["Shalat 5 waktu di Nabawi"]},
        {"day": 14, "title": "Madinah – City Tour & Museum Al-Quran", "description": "Kunjungan ke museum sejarah dan pameran Al-Quran.", "activities": ["Museum Al-Quran Madinah"]},
        {"day": 15, "title": "Madinah – Ibadah Khusyuk", "description": "Memperbanyak doa dan shalawat di Masjid Nabawi.", "activities": ["Ibadah mandiri"]},
        {"day": 16, "title": "Madinah – Ibadah Mandiri & Belanja Kurma", "description": "Membeli oleh-oleh kurma Ajwa di pasar kurma Madinah.", "activities": ["Pasar Kurma Madinah"]},
        {"day": 17, "title": "Madinah – Persiapan Kepulangan", "description": "Ziarah wada' di makam Rasulullah SAW.", "activities": ["Ziarah Wada"]},
        {"day": 18, "title": "Madinah – Menuju Bandara Madinah / Jeddah", "description": "Proses check-in bagasi dan imigrasi kepulangan.", "activities": ["Transfer ke bandara"]},
        {"day": 19, "title": "Penerbangan Internasional Menuju Jakarta", "description": "Penerbangan langsung kembali ke Indonesia.", "activities": ["Boarding"]},
        {"day": 20, "title": "Tiba di Jakarta – Penyambutan Haji Mabrur", "description": "Tiba di Bandara Soekarno Hatta dan kembali ke keluarga tercinta.", "activities": ["Selesai rangkaian haji furoda"]}
    ],
    "terms": [
        "Paspor aktif minimal 8 bulan dengan nama minimal 2 suku kata",
        "Fotokopi KTP, Kartu Keluarga, dan Buku Nikah / Akta Lahir",
        "Uang Muka (DP) USD 5.000 disetorkan saat pendaftaran",
        "KLAUSUL JAMINAN KEAMANAN DANA: Jika visa haji tidak terbit / tidak disetujui Kerajaan Arab Saudi, DP dikembalikan 100% UTUH tanpa potongan (Non-Loss Guarantee)",
        "Pelunasan biaya paling lambat 10 hari sebelum jadwal keberangkatan kloter haji",
        "Penyetoran wajib ke rekening resmi valas PT SAMIRA ALI WISATA di Bank Permata Syariah (USD) atau Bank Mandiri (USD)"
    ]
}

all_tours = tours + plus_packages + [haji_furoda]

content_ts = 'import { TourPackage } from "@/types";\n\nexport const toursData: TourPackage[] = ' + json.dumps(all_tours, ensure_ascii=False, indent=2) + ";\n"

with open("src/data/tours.ts", "w", encoding="utf-8") as f:
    f.write(content_ts)

print(f"Successfully generated src/data/tours.ts with {len(all_tours)} total packages!")
