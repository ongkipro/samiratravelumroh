import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  Award, 
  AlertTriangle,
  Compass,
  Globe,
  Wallet,
  Building2,
  Users,
  BookOpen,
  HeartHandshake,
  ChevronRight
} from "lucide-react";

export function Footer() {
  const cities = [
    { name: "Jakarta", slug: "jakarta" },
    { name: "Surabaya", slug: "surabaya" },
    { name: "Medan", slug: "medan" },
    { name: "Makassar", slug: "makassar" },
    { name: "Palembang", slug: "palembang" },
    { name: "Padang", slug: "padang" },
    { name: "Pontianak", slug: "pontianak" },
    { name: "Aceh", slug: "aceh" },
    { name: "Denpasar", slug: "denpasar" },
    { name: "Batam", slug: "batam" },
    { name: "Pekanbaru", slug: "pekanbaru" },
  ];

  const banks = [
    { name: "BSI", image: "/images/bank-bsi-syariah-indonesia-rekening-resmi.png", no: "713-333-7777" },
    { name: "Mandiri", image: "/images/bank-mandiri-rekening-resmi.png", no: "124-00-1117777-9" },
    { name: "Muamalat", image: "/images/bank-muamalat-rekening-resmi.png", no: "314-001-7777" },
    { name: "Permata", image: "/images/bank-permata-syariah-rekening-resmi.png", no: "097-111-7777" },
  ];

  return (
    <footer className="bg-[#04261E] text-white border-t border-[#084234]/80 pb-20 sm:pb-0">
      {/* Anti-Fraud Security Notice Bar */}
      <div className="bg-[#031D17] border-b border-[#084234]/60 py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-500/20 text-amber-300 shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div className="text-xs text-emerald-100/90 leading-relaxed">
              <strong className="text-amber-300 font-bold block sm:inline">PENTING (ANTI-PENIPUAN):</strong>{" "}
              Seluruh transaksi pembayaran pendaftaran umrah & haji HANYA SAH ditransfer ke 4 rekening resmi berbadan hukum atas nama <strong>PT Samira Ali Wisata</strong>.
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-5 shrink-0">
            {banks.map((b) => (
              <Image
                key={b.name}
                src={b.image}
                alt={`Bank ${b.name}`}
                width={70}
                height={28}
                style={{ width: "auto", height: "auto" }}
                className="h-6 sm:h-7 w-auto object-contain brightness-0 invert opacity-75 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Col 1 & 2: Brand Profile & Legal Entity */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo-samira-travel.png"
                alt="Samira Travel"
                width={190}
                height={48}
                style={{ width: "auto", height: "auto" }}
                className="h-12 object-contain brightness-0 invert"
              />
            </Link>

            <p className="text-xs text-emerald-100/80 leading-relaxed max-w-sm">
              PT Samira Ali Wisata (Samira Travel) adalah Penyelenggara Perjalanan Ibadah Umrah (PPIU No. 137/2020) & Penyelenggara Ibadah Haji Khusus (PIHK 2022) resmi Kemenag RI dengan predikat Akreditasi A.
            </p>

            <div className="space-y-1.5 text-xs text-emerald-100/80 pt-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                <span>{siteConfig.headOffice.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <span>
                  Hotline:{" "}
                  <a href="tel:085607179735" className="hover:text-white transition-colors font-medium">
                    0856-0717-9735
                  </a>{" "}
                  / (021) 8690-9999
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <span>info@samiratravelumrohhaji.com</span>
              </div>
            </div>
          </div>

          {/* Col 3: 11 Embarkasi Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#C5A059] uppercase tracking-wider">
              11 Kota Keberangkatan
            </h4>
            <ul className="space-y-2 text-xs text-emerald-100/80">
              {cities.slice(0, 6).map((c) => (
                <li key={c.slug}>
                  <Link href={`/paket-umroh/${c.slug}`} className="hover:text-white transition-colors flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-[#C5A059]/70 shrink-0" />
                    <span>Paket Umroh {c.name}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link href="/paket-umroh" className="text-amber-300 font-bold hover:underline inline-flex items-center gap-1">
                  <span>Lihat Semua 11 Kota</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Programs & Secondary Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#C5A059] uppercase tracking-wider">
              Program & Layanan
            </h4>
            <ul className="space-y-2 text-xs text-emerald-100/80">
              <li>
                <Link href="/haji-khusus-furoda" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span>Haji Khusus & Furoda</span>
                </Link>
              </li>
              <li>
                <Link href="/umroh-plus" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span>Umroh Plus Wisata Halal</span>
                </Link>
              </li>
              <li>
                <Link href="/pembiayaan-syariah" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Wallet className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span>Cicilan Syariah AMITRA / BSI</span>
                </Link>
              </li>
              <li>
                <Link href="/kantor-cabang" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span>Direktori 26 Cabang Resmi</span>
                </Link>
              </li>
              <li>
                <Link href="/kemitraan-dgi" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span>Kemitraan DGi (Non-MLM)</span>
                </Link>
              </li>
              <li>
                <Link href="/artikel" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span>400+ Artikel Edukasi Umroh</span>
                </Link>
              </li>
              <li>
                <Link href="/testimoni" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <HeartHandshake className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span>Testimoni Jamaah</span>
                </Link>
              </li>
              <li>
                <Link href="/tentang-kami" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span>Profil & Legalitas PPIU</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Legal Credentials */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#C5A059] uppercase tracking-wider">
              Rekor & Kredensial
            </h4>
            <ul className="space-y-3 text-xs text-emerald-100/80">
              <li className="flex items-start gap-2.5">
                <Award className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white leading-snug">Guinness World Records</div>
                  <div className="text-[11px] text-emerald-200/70">Jamuan Umrah Terbesar (Jeddah)</div>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Award className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white leading-snug">3x Rekor MURI Nasional</div>
                  <div className="text-[11px] text-emerald-200/70">29.171 Jemaah Terbanyak 2024</div>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Award className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white leading-snug">Piala APSI 2026 by tvOne</div>
                  <div className="text-[11px] text-emerald-200/70">Biro Umrah Berkinerja Terbaik</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 mt-8 border-t border-[#084234]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-200/60">
          <div>
            © {new Date().getFullYear()} PT Samira Ali Wisata (Samira Travel). Seluruh Hak Cipta Dilindungi Undang-Undang.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/tentang-kami" className="hover:text-white">Tentang Kami</Link>
            <span>•</span>
            <Link href="/testimoni" className="hover:text-white">Testimoni</Link>
            <span>•</span>
            <Link href="/kantor-cabang" className="hover:text-white">Cabang Resmi</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
