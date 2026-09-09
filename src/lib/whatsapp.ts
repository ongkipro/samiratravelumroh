/**
 * Helper generator for contextual WhatsApp URLs with pre-filled inquiries
 */

export interface WhatsAppOptions {
  packageName?: string;
  city?: string;
  duration?: number;
  roomType?: string;
  dpAmount?: number;
  tenorMonths?: number;
  articleTitle?: string;
  branchName?: string;
  branchPhone?: string;
  intent?: "package" | "financing" | "furoda" | "branch" | "article" | "partnership" | "general";
}

const DEFAULT_PHONE = "6285607179735"; // CS Hotline Resmi Samira Travel

export function getWhatsAppUrl(options: WhatsAppOptions = {}): string {
  const targetPhone = options.branchPhone 
    ? options.branchPhone.replace(/\D/g, "").replace(/^0/, "62") 
    : DEFAULT_PHONE;

  let message = "";

  switch (options.intent) {
    case "package":
      message = `Assalamu'alaikum CS Samira Travel,\nSaya ingin tanya jadwal dan ketersediaan seat untuk:\n\n` +
        `• Paket: ${options.packageName || "Umroh Reguler"}\n` +
        `• Kota Asal: ${options.city || "Jakarta"}\n` +
        `• Durasi: ${options.duration ? options.duration + " Hari" : "Reguler"}\n` +
        `• Tipe Kamar: ${options.roomType || "Quad"}\n\n` +
        `Mohon info tanggal keberangkatan terdekat & syarat pendaftarannya. Terima kasih.`;
      break;

    case "furoda":
      message = `Assalamu'alaikum Konsultan Haji Samira Travel,\n` +
        `Saya ingin konsultasi pendaftaran program *Haji Khusus / Haji Furoda 20 Hari (Langsung Berangkat Kuota Resmi)* biaya USD 17.000 dengan garansi 100% Full Refund DP.\n\n` +
        `Mohon informasi alur pengurusan visa dan jadwal manasik haji. Terima kasih.`;
      break;

    case "financing":
      message = `Assalamu'alaikum Tim Pembiayaan Samira Travel,\n` +
        `Saya tertarik dengan program *Umroh Dulu, Bayar Belakangan* via AMITRA / BSI Syariah.\n\n` +
        `Simulasi Pengajuan:\n` +
        `• Pilihan DP: Rp ${options.dpAmount ? options.dpAmount.toLocaleString("id-ID") : "6.000.000"}\n` +
        `• Tenor Angsuran: ${options.tenorMonths || 24} Bulan\n\n` +
        `Mohon informasi persyaratan SLIK OJK dan proses verifikasi dokumen. Terima kasih.`;
      break;

    case "branch":
      message = `Assalamu'alaikum Admin ${options.branchName || "Cabang Samira Travel"},\n` +
        `Saya calon jemaah dari wilayah ${options.city || "sekitar"}. Saya ingin konsultasi langsung atau berkunjung ke kantor cabang untuk pendaftaran umroh/haji.\n\n` +
        `Mohon info jam operasional dan kontak konsultan cabang. Terima kasih.`;
      break;

    case "partnership":
      message = `Assalamu'alaikum Manajemen Kemitraan DGi Samira Travel,\n` +
        `Saya tertarik mendaftar sebagai *Mitra Syiar Baitullah / Agen Travel Umroh DGi* (Non-MLM).\n\n` +
        `Mohon dikirimkan materi presentasi, paket Starter Kit, dan jadwal pelatihan manasik & sertifikasi BNSP. Terima kasih.`;
      break;

    case "article":
      message = `Assalamu'alaikum CS Samira Travel,\n` +
        `Saya sedang membaca artikel edukasi *"${options.articleTitle || "Panduan Ibadah Umroh"}"* di website resmi.\n\n` +
        `Saya ingin berkonsultasi mengenai paket umroh yang sesuai untuk saya dan keluarga. Terima kasih.`;
      break;

    default:
      message = `Assalamu'alaikum CS Samira Travel,\n` +
        `Saya ingin berkonsultasi mengenai paket umroh & haji khusus resmi Kemenag RI untuk keberangkatan tahun 2026.\n\n` +
        `Mohon informasi paket terbaik untuk keluarga. Terima kasih.`;
      break;
  }

  return `https://wa.me/${targetPhone}?text=${encodeURIComponent(message)}`;
}
