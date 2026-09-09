import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getArticleBySlug, getRelatedArticles, getAllArticles } from "@/lib/data-service";
import { buildArticleSchema, buildBreadcrumbSchema } from "@/lib/seo";
import { getArticleCoverImage } from "@/lib/article-media";
import { ArticleShareBar } from "@/components/articles/ArticleShareBar";
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  ArrowRight, 
  ShieldCheck,
  Award,
  List,
  CheckCircle2,
  ChevronRight,
  MessageCircle,
  PhoneCall,
  Sparkles,
  Mail
} from "lucide-react";

function formatInlineText(raw: string): React.ReactNode {
  if (!raw) return "";
  const cleaned = raw.replace(/\*{3,}/g, "**").replace(/[}{]{2,}=?/g, "").trim();
  const parts = cleaned.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return (
        <strong key={i} className="font-semibold text-[#0F172A]">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

interface ParsedBlock {
  type: "h2" | "h3" | "callout" | "table" | "ul" | "ol" | "contact_card" | "p";
  text?: string;
  id?: string;
  items?: string[];
  lines?: string[];
  headers?: string[];
  rows?: string[][];
}

function parseMarkdownBlocks(rawContent: string): ParsedBlock[] {
  const lines = rawContent.split("\n");
  const blocks: ParsedBlock[] = [];
  let i = 0;

  while (i < lines.length) {
    const rawLine = lines[i];
    const line = rawLine.trim();

    if (!line) {
      i++;
      continue;
    }

    // Heading 2
    if (line.startsWith("## ")) {
      const text = line.replace(/^##\s*/, "").replace(/\*\*/g, "").trim();
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      blocks.push({ type: "h2", text, id });
      i++;
      continue;
    }

    // Heading 3
    if (line.startsWith("### ")) {
      const text = line.replace(/^###\s*/, "").replace(/\*\*/g, "").trim();
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      blocks.push({ type: "h3", text, id });
      i++;
      continue;
    }

    // Heading 1 or Heading 4+
    if (line.startsWith("#")) {
      const text = line.replace(/^#+\s*/, "").replace(/\*\*/g, "").trim();
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      blocks.push({ type: "h3", text, id });
      i++;
      continue;
    }

    // Callout (> ...)
    if (line.startsWith(">")) {
      const calloutLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith(">")) {
        calloutLines.push(lines[i].trim().replace(/^>\s*/, "").trim());
        i++;
      }
      blocks.push({ type: "callout", lines: calloutLines });
      continue;
    }

    // Table (| ... |)
    if (line.startsWith("|") && line.includes("|", 1)) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("|") && lines[i].trim().includes("|", 1)) {
        tableLines.push(lines[i].trim());
        i++;
      }
      if (tableLines.length >= 2) {
        const parseRow = (r: string) => r.split("|").slice(1, -1).map((c) => c.trim());
        const headers = parseRow(tableLines[0]);
        const rows = tableLines.slice(2).map(parseRow);
        blocks.push({ type: "table", headers, rows });
        continue;
      }
    }

    // Unordered List (- ... or * ...)
    if (line.startsWith("- ") || line.startsWith("* ")) {
      const items: string[] = [];
      while (i < lines.length && (lines[i].trim().startsWith("- ") || lines[i].trim().startsWith("* "))) {
        items.push(lines[i].trim().replace(/^[-*]\s*/, ""));
        i++;
      }
      blocks.push({ type: "ul", items });
      continue;
    }

    // Numbered List (\d+\. ...)
    if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s*/, ""));
        i++;
      }
      blocks.push({ type: "ol", items });
      continue;
    }

    // Contact Consultation Section
    const isContactSection =
      line.includes("0856-0717-9735") ||
      line.includes("samiratravelsurabayaterpercaya") ||
      (line.toLowerCase().includes("konsultasi") &&
        lines.slice(i, i + 5).some((l) => l.includes("0856") || l.toLowerCase().includes("whatsapp")));
    if (isContactSection) {
      const contactLines: string[] = [];
      while (i < lines.length && lines[i].trim()) {
        contactLines.push(lines[i].trim());
        i++;
      }
      blocks.push({ type: "contact_card", lines: contactLines });
      continue;
    }

    // Regular paragraph: accumulate lines until next special block or blank line
    const pLines: string[] = [];
    while (i < lines.length) {
      const l = lines[i].trim();
      if (!l) break;
      if (pLines.length > 0) {
        if (
          l.startsWith("#") ||
          l.startsWith(">") ||
          (l.startsWith("|") && l.includes("|", 1)) ||
          l.startsWith("- ") ||
          l.startsWith("* ") ||
          /^\d+\.\s/.test(l) ||
          l.includes("0856-0717-9735") ||
          l.includes("samiratravelsurabayaterpercaya")
        ) {
          break;
        }
      }
      pLines.push(l);
      i++;
    }

    if (pLines.length > 0) {
      blocks.push({ type: "p", text: pLines.join(" ") });
    } else {
      i++; // Safety guard: guarantee loop index advancement
    }
  }

  return blocks;
}
export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles.map((a) => ({
    slug: a.slug,
  }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return { title: "Artikel Tidak Ditemukan" };

  const coverImage = getArticleCoverImage(article);
  const pageUrl = `https://samiratravelumrohhaji.com/artikel/${slug}`;

  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: pageUrl,
      type: "article",
      publishedTime: article.date,
      authors: ["Dewan Asatidz Samira Travel"],
      images: [
        {
          url: coverImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [coverImage],
    },
  };
}

interface TocItem {
  id: string;
  text: string;
  level: number;
}

function extractTableOfContents(content: string): TocItem[] {
  const lines = content.split("\n");
  const items: TocItem[] = [];

  lines.forEach((line) => {
    const trimmed = line.trim();
    if (trimmed.startsWith("## ")) {
      const text = trimmed.replace(/^##\s*/, "");
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      if (text && id) {
        items.push({ id, text, level: 2 });
      }
    } else if (trimmed.startsWith("### ")) {
      const text = trimmed.replace(/^###\s*/, "");
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      if (text && id) {
        items.push({ id, text, level: 3 });
      }
    }
  });

  return items;
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  const relatedArticles = await getRelatedArticles(slug, 3);
  const coverImage = getArticleCoverImage(article);
  const tableOfContents = extractTableOfContents(article.content);

  const articleSchema = buildArticleSchema(article);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Beranda", item: "/" },
    { name: "Artikel Edukasi", item: "/artikel" },
    { name: article.title, item: `/artikel/${article.slug}` },
  ]);

  const canonicalUrl = `https://samiratravelumrohhaji.com/artikel/${article.slug}`;

  return (
    <>
      <script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="bg-[#FAF8F5] min-h-screen pb-20">
        {/* Header Hero Banner */}
        <section className="bg-gradient-to-b from-[#04261E] to-[#084234] text-white pt-24 sm:pt-28 pb-14 md:pb-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-2 text-xs text-emerald-200/80 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
              <span>/</span>
              <Link href="/artikel" className="hover:text-white transition-colors">Artikel</Link>
              <span>/</span>
              <span className="text-white font-medium truncate max-w-xs">{article.title}</span>
            </nav>

            <div className="space-y-4 max-w-4xl">
              {/* Category & Verification Metadata */}
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="font-semibold text-[#C5A059] uppercase tracking-[0.2em] bg-white/10 px-3 py-1 rounded-full border border-white/10">
                  {article.categories[0] || "Panduan Umrah"}
                </span>
                <span className="flex items-center gap-1.5 text-emerald-100/90 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{article.date}</span>
                </span>
                <span className="flex items-center gap-1.5 text-emerald-100/90 font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{article.readingTime} Menit Baca</span>
                </span>
                <span className="hidden sm:inline-flex items-center gap-1.5 text-emerald-200/90">
                  <Award className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Ditinjau Muthawwif BNSP</span>
                </span>
              </div>

              {/* H1 Heading */}
              <h1 className="font-playfair text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                {article.title}
              </h1>

              {/* Byline */}
              <div className="pt-2 text-xs text-emerald-200/90 flex items-center gap-2">
                <span>Disusun oleh: <strong className="text-white">Dewan Asatidz Samira Travel</strong></span>
                <span>•</span>
                <span>Izin PPIU No. 137/2020</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Layout (12 Cols: 8 Main Article + 4 Sticky Sidebar) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left 8 Cols: Article Body */}
            <article className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E3DA] shadow-xs space-y-8">
              {/* Cinematic High-Res Cover Image */}
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-md bg-slate-100 border border-slate-100">
                <Image
                  src={coverImage}
                  alt={article.title}
                  fill
                  priority
                  quality={92}
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Top Share Bar */}
              <ArticleShareBar title={article.title} url={canonicalUrl} />

              {/* Excerpt Lead Box */}
              {article.excerpt && (
                <div className="p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] border-l-4 border-[#C5A059] border-y border-r border-[#E8E3DA]">
                  <p className="text-sm sm:text-base font-medium text-slate-700 leading-relaxed italic">
                    {article.excerpt}
                  </p>
                </div>
              )}

              {/* Mobile Table of Contents (if >= 2 items) */}
              {tableOfContents.length >= 2 && (
                <div className="lg:hidden p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8E3DA] space-y-3">
                  <div className="flex items-center gap-2 text-[#084234] font-bold text-sm">
                    <List className="w-4 h-4 text-[#C5A059]" />
                    <span>Daftar Isi Panduan</span>
                  </div>
                  <nav className="space-y-1.5 text-xs text-slate-600">
                    {tableOfContents.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`block py-1 hover:text-[#084234] hover:underline transition-colors ${
                          item.level === 3 ? "pl-3 text-slate-500" : "font-semibold text-slate-800"
                        }`}
                      >
                        • {item.text}
                      </a>
                    ))}
                  </nav>
                </div>
              )}

              {/* Rendered Article Body */}
              <div className="prose prose-slate max-w-none text-slate-800 text-sm sm:text-base leading-relaxed space-y-5 pt-2">
                {parseMarkdownBlocks(article.content).map((block, bIdx) => {
                  // Heading 2
                  if (block.type === "h2") {
                    return (
                      <h2
                        key={bIdx}
                        id={block.id}
                        className="font-playfair text-xl sm:text-2xl font-bold text-[#0F172A] pt-6 pb-2 border-b border-slate-100 scroll-mt-24 flex items-center gap-2"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#C5A059] shrink-0" />
                        <span>{block.text}</span>
                      </h2>
                    );
                  }

                  // Heading 3
                  if (block.type === "h3") {
                    return (
                      <h3
                        key={bIdx}
                        id={block.id}
                        className="font-playfair text-lg sm:text-xl font-bold text-[#0F172A] pt-4 pb-1 scroll-mt-24"
                      >
                        {block.text}
                      </h3>
                    );
                  }

                  // Callout / Note box (> ...)
                  if (block.type === "callout" && block.lines) {
                    const isKeyNote = block.lines[0]?.includes("[!NOTE]");
                    const titleText = isKeyNote ? block.lines[0].replace(/\[!NOTE\]\s*/, "") || "Poin Penting Panduan" : "Catatan Penting";
                    const contentLines = isKeyNote ? block.lines.slice(1) : block.lines;
                    return (
                      <div key={bIdx} className="p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] border-l-4 border-[#084234] border-y border-r border-[#E8E3DA] my-4 shadow-xs">
                        <div className="flex items-center gap-2 font-bold text-[#084234] text-sm mb-2">
                          <Sparkles className="w-4 h-4 text-[#C5A059]" />
                          <span>{titleText}</span>
                        </div>
                        <div className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                          {contentLines.map((line, lIdx) => (
                            <p key={lIdx} className="leading-relaxed">
                              {formatInlineText(line.replace(/^-\s*/, "• "))}
                            </p>
                          ))}
                        </div>
                      </div>
                    );
                  }

                  // Table (| ... |)
                  if (block.type === "table" && block.headers && block.rows) {
                    return (
                      <div key={bIdx} className="overflow-x-auto my-6 rounded-xl border border-[#E8E3DA] shadow-xs">
                        <table className="min-w-full divide-y divide-[#E8E3DA] text-left text-xs sm:text-sm">
                          <thead className="bg-[#FAF8F5]">
                            <tr>
                              {block.headers.map((hCol, hIdx) => (
                                <th key={hIdx} className="px-4 py-3 font-bold text-[#084234]">
                                  {formatInlineText(hCol)}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#E8E3DA] bg-white">
                            {block.rows.map((row, rIdx) => (
                              <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                                {row.map((col, cIdx) => (
                                  <td key={cIdx} className="px-4 py-2.5 text-slate-700">
                                    {formatInlineText(col)}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    );
                  }

                  // Unordered List
                  if (block.type === "ul" && block.items) {
                    return (
                      <ul key={bIdx} className="space-y-2.5 my-4 pl-1">
                        {block.items.map((it, iIdx) => (
                          <li key={iIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#084234] shrink-0 mt-2" />
                            <span>{formatInlineText(it)}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }

                  // Numbered List
                  if (block.type === "ol" && block.items) {
                    return (
                      <ol key={bIdx} className="space-y-2.5 my-4 pl-1">
                        {block.items.map((it, iIdx) => (
                          <li key={iIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                            <span className="font-bold text-[#084234] shrink-0">{iIdx + 1}.</span>
                            <span>{formatInlineText(it)}</span>
                          </li>
                        ))}
                      </ol>
                    );
                  }

                  // Official Consultation Action Card
                  if (block.type === "contact_card" && block.lines) {
                    return (
                      <div key={bIdx} className="my-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#FAF8F5] to-[#F3EFEA] border-2 border-[#C5A059]/30 shadow-md">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-full bg-[#084234] flex items-center justify-center text-white shrink-0">
                            <PhoneCall className="w-5 h-5 text-[#C5A059]" />
                          </div>
                          <div>
                            <h3 className="text-base sm:text-lg font-bold text-[#084234] font-playfair">
                              Pusat Layanan Konsultasi & Pendaftaran Resmi
                            </h3>
                            <p className="text-xs text-slate-600">
                              Samira Travel – Sahabat Umrah & Haji Keluarga Anda
                            </p>
                          </div>
                        </div>

                        <div className="text-xs sm:text-sm text-slate-700 my-4 space-y-1.5">
                          {block.lines.map((l, lIdx) => {
                            const cleanLine = l.replace(/^[-*]\s*/, "");
                            const lower = cleanLine.toLowerCase();
                            if (
                              cleanLine.includes("0856-0717-9735") || 
                              cleanLine.includes("samiratravelsurabayaterpercaya") ||
                              cleanLine.includes("wa.me") ||
                              lower.includes("tautan whatsapp") ||
                              lower.includes("chat whatsapp")
                            ) {
                              return null;
                            }
                            return (
                              <p key={lIdx} className="leading-relaxed">
                                {formatInlineText(cleanLine)}
                              </p>
                            );
                          })}
                        </div>

                        <div className="flex flex-wrap items-center gap-3 pt-2">
                          <a
                            href="https://wa.me/6285607179735"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-semibold shadow-sm transition-all transform hover:-translate-y-0.5"
                          >
                            <MessageCircle className="w-4 h-4 fill-white" />
                            <span>Chat WhatsApp: 0856-0717-9735</span>
                          </a>

                          <a
                            href="tel:085607179735"
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#084234] hover:bg-[#063328] text-white text-xs sm:text-sm font-semibold shadow-sm transition-all"
                          >
                            <PhoneCall className="w-4 h-4 text-[#C5A059]" />
                            <span>Telepon Langsung</span>
                          </a>

                          <a
                            href="mailto:samiratravelsurabayaterpercaya@gmail.com"
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white hover:bg-slate-50 border border-[#E8E3DA] text-slate-700 text-xs sm:text-sm font-medium shadow-2xs transition-all"
                          >
                            <Mail className="w-4 h-4 text-[#084234]" />
                            <span>Kirim Email</span>
                          </a>
                        </div>
                      </div>
                    );
                  }

                  // Standard Paragraph
                  return (
                    <p key={bIdx} className="text-slate-700 leading-relaxed text-sm sm:text-base mb-4">
                      {formatInlineText(block.text || "")}
                    </p>
                  );
                })}
              </div>

              {/* Bottom Share Bar */}
              <div className="pt-6 border-t border-[#E8E3DA]">
                <ArticleShareBar title={article.title} url={canonicalUrl} />
              </div>

              {/* Author & Muthawwif Assurance Profile */}
              <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8E3DA] flex flex-col sm:flex-row items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#04261E] text-[#C5A059] flex items-center justify-center shrink-0 shadow-sm border border-[#084234]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="space-y-1.5 text-xs text-slate-600">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="font-bold text-sm text-[#0F172A]">
                      Dewan Asatidz & Bimbingan Ibadah Samira Travel
                    </h4>
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                      Akreditasi A
                    </span>
                  </div>
                  <p className="leading-relaxed">
                    Disusun dan ditinjau secara berkala oleh Muthawwif tersertifikasi BNSP alumni universitas terkemuka Timur Tengah. Materi diselaraskan dengan tuntunan sunnah Rasulullah SAW serta regulasi visa Kementerian Haji Kerajaan Arab Saudi.
                  </p>
                </div>
              </div>

              {/* Contextual Umroh Conversion Banner */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#04261E] to-[#084234] text-white space-y-4 shadow-xl">
                <span className="text-xs font-semibold tracking-[0.2em] text-[#C5A059] uppercase block">
                  Wujudkan Niat Menuju Baitullah
                </span>
                <h3 className="font-playfair text-xl sm:text-2xl font-bold text-white">
                  Ingin Jadwal & Informasi Paket Terkait Topik Ini?
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed max-w-xl">
                  Dapatkan konsultasi gratis mengenai jadwal penerbangan langsung 11 kota, fasilitas hotel bintang 5 pelataran masjid, dan bimbingan manasik intensif bersama Samira Travel.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={`https://wa.me/6285607179735?text=Assalamu%27alaikum%20Samira%20Travel,%20saya%20membaca%20artikel%20"${encodeURIComponent(article.title)}"%20dan%20ingin%20konsultasi%20paket%20umrah`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 py-3 px-5 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#B8934A] text-[#04261E] font-extrabold text-xs shadow-md hover:brightness-105 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Konsultasi WhatsApp</span>
                  </a>
                  <Link
                    href="/paket-umroh"
                    className="inline-flex items-center gap-2 py-3 px-5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-all"
                  >
                    <span>Lihat Katalog 11 Kota</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>

            {/* Right 4 Cols: Sticky Sidebar */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              {/* Desktop Table of Contents (if >= 2 items) */}
              {tableOfContents.length >= 2 && (
                <div className="hidden lg:block bg-white rounded-3xl p-6 border border-[#E8E3DA] shadow-xs space-y-3">
                  <div className="flex items-center gap-2 text-[#084234] font-bold text-sm pb-2 border-b border-slate-100">
                    <List className="w-4 h-4 text-[#C5A059]" />
                    <span>Daftar Isi Panduan</span>
                  </div>
                  <nav className="space-y-2 text-xs text-slate-600 max-h-[50vh] overflow-y-auto no-scrollbar pr-1">
                    {tableOfContents.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`block py-1 hover:text-[#084234] hover:underline transition-colors ${
                          item.level === 3 ? "pl-3 text-slate-500" : "font-semibold text-[#0F172A]"
                        }`}
                      >
                        • {item.text}
                      </a>
                    ))}
                  </nav>
                </div>
              )}

              {/* Consultation Card */}
              <div className="bg-[#04261E] text-white rounded-3xl p-6 sm:p-7 space-y-4 border border-[#084234]/80 shadow-xl">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-[#C5A059] uppercase tracking-wider block">
                    Layanan Konsultasi 24/7
                  </span>
                  <h4 className="font-playfair text-lg font-bold text-white">
                    Pusat Informasi Jamaah
                  </h4>
                </div>
                <p className="text-xs text-emerald-100/90 leading-relaxed">
                  Punya pertanyaan seputar syarat paspor, suntik meningitis, atau tata cara pendaftaran umroh keluarga?
                </p>
                <div className="pt-2 space-y-2.5">
                  <a
                    href={`https://wa.me/6285607179735?text=Assalamu%27alaikum%20Samira%20Travel,%20saya%20ingin%20tanya%20seputar%20"${encodeURIComponent(article.title)}"`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Hubungi CS Samira Travel</span>
                  </a>
                  <a
                    href="tel:085607179735"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-emerald-100 text-xs font-semibold border border-white/10 transition-all"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Hotline: 0856-0717-9735</span>
                  </a>
                </div>
              </div>

              {/* Program Haji Khusus Furoda Promo Banner */}
              <div className="bg-white rounded-3xl p-6 border border-[#E8E3DA] shadow-xs space-y-3">
                <span className="text-[10px] font-bold text-[#C5A059] uppercase tracking-wider block">
                  Program Khusus 2026
                </span>
                <h4 className="font-playfair text-base font-bold text-[#0F172A]">
                  Haji Furoda Langsung Berangkat
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Visa Mujamalah resmi Kerajaan Saudi tanpa antri kuota reguler. Hotel bintang 5 pelataran dan Maktab VIP ber-AC di Mina & Arafah.
                </p>
                <div className="pt-2">
                  <Link
                    href="/haji-khusus-furoda"
                    className="text-[#084234] font-bold text-xs hover:underline inline-flex items-center gap-1"
                  >
                    <span>Pelajari Haji Furoda</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>

          {/* 3 Related Articles (Bottom Grid) */}
          {relatedArticles.length > 0 && (
            <section aria-label="Artikel Edukasi Terkait" className="mt-14 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold tracking-[0.2em] text-[#C5A059] uppercase block">
                    Literasi Terkait
                  </span>
                  <h2 className="font-playfair text-xl sm:text-2xl font-bold text-[#0F172A]">
                    Artikel Edukasi Terkait Lainnya
                  </h2>
                </div>
                <Link
                  href="/artikel"
                  className="text-xs font-bold text-[#084234] hover:underline flex items-center gap-1"
                >
                  <span>Lihat 400 Panduan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedArticles.map((rel) => {
                  const relCover = getArticleCoverImage(rel);
                  return (
                    <article
                      key={rel.id}
                      className="group bg-white rounded-3xl border border-[#E8E3DA] hover:border-[#C5A059] overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                    >
                      <Link
                        href={`/artikel/${rel.slug}`}
                        className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden block"
                      >
                        <Image
                          src={relCover}
                          alt={rel.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-3 left-3 z-10">
                          <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/95 text-[#084234] text-[10px] font-bold uppercase tracking-wider shadow-xs">
                            {rel.categories[0] || "Edukasi"}
                          </span>
                        </div>
                      </Link>

                      <div className="p-5 flex flex-col justify-between flex-1 space-y-3">
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2 text-[10px] text-slate-400">
                            <span>{rel.date}</span>
                            <span>•</span>
                            <span>{rel.readingTime} mnt baca</span>
                          </div>
                          <h3 className="font-playfair text-sm sm:text-base font-bold text-[#0F172A] group-hover:text-[#084234] transition-colors line-clamp-2 leading-snug">
                            <Link href={`/artikel/${rel.slug}`}>
                              {rel.title}
                            </Link>
                          </h3>
                          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                            {rel.excerpt}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                          <span className="text-slate-400 text-[10px]">Samira Travel</span>
                          <Link
                            href={`/artikel/${rel.slug}`}
                            className="text-[#084234] font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 text-xs"
                          >
                            <span>Baca</span>
                            <ChevronRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
}
