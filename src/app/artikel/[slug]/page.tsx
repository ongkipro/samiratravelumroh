import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { getArticleBySlug, getRelatedArticles } from "@/lib/data-service";
import { buildArticleSchema, buildBreadcrumbSchema } from "@/lib/seo";
import { 
  Calendar, 
  Clock, 
  Tag, 
  ArrowLeft, 
  ArrowRight, 
  ShieldCheck,
  BookOpen,
  ChevronRight
} from "lucide-react";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return { title: "Artikel Tidak Ditemukan" };

  return {
    title: `${article.title} | Samira Travel`,
    description: article.excerpt,
    alternates: {
      canonical: `https://samiratravelumrohhaji.com/artikel/${slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://samiratravelumrohhaji.com/artikel/${slug}`,
      type: "article",
      publishedTime: article.date,
      authors: ["Samira Travel"],
    },
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  const relatedArticles = await getRelatedArticles(slug, 3);

  const articleSchema = buildArticleSchema(article);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Beranda", item: "/" },
    { name: "Artikel Edukasi", item: "/artikel" },
    { name: `${article.title}`, item: `/artikel/${article.slug}` },
  ]);

  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="bg-[#FAF8F5] min-h-screen pb-20">
        {/* Header Hero */}
        <section className="bg-gradient-to-b from-[#04261E] to-[#084234] text-white pt-8 pb-14 md:pt-12 md:pb-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <nav className="flex items-center gap-2 text-xs text-emerald-200/80 mb-6">
              <Link href="/" className="hover:text-white">Beranda</Link>
              <span>/</span>
              <Link href="/artikel" className="hover:text-white">Artikel</Link>
              <span>/</span>
              <span className="text-white font-semibold truncate max-w-xs">{article.title}</span>
            </nav>

            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3 text-xs text-emerald-100/90">
                <span className="font-semibold text-[#C5A059] uppercase tracking-[0.15em] text-xs">
                  {article.categories[0] || "Edukasi Umrah"}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{article.date}</span>
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{article.readingTime} Menit Baca</span>
                </span>
              </div>

              <h1 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                {article.title}
              </h1>
            </div>
          </div>
        </section>

        {/* Article Body Container */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 -mt-6 relative z-10">
          <article className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E3DA] shadow-sm space-y-6">
            {/* Excerpt Lead */}
            {article.excerpt && (
              <p className="text-base sm:text-lg font-medium text-slate-700 leading-relaxed italic border-l-4 border-[#C5A059] pl-4 py-1">
                {article.excerpt}
              </p>
            )}

            {/* Clean Editorial Content */}
            <div className="text-slate-800 text-sm sm:text-base leading-relaxed space-y-4 pt-2">
              {article.content.split("\n\n").map((para, pIdx) => {
                const trimmed = para.trim();
                if (!trimmed) return null;

                if (trimmed.startsWith("# ")) {
                  return (
                    <h2 key={pIdx} className="font-playfair text-xl sm:text-2xl font-bold text-[#0F172A] pt-4">
                      {trimmed.replace(/^#\s*/, "")}
                    </h2>
                  );
                }
                if (trimmed.startsWith("## ")) {
                  return (
                    <h3 key={pIdx} className="font-playfair text-lg sm:text-xl font-bold text-[#0F172A] pt-3">
                      {trimmed.replace(/^##\s*/, "")}
                    </h3>
                  );
                }
                if (trimmed.startsWith("- ")) {
                  const items = trimmed.split("\n").filter(Boolean);
                  return (
                    <ul key={pIdx} className="list-disc pl-5 space-y-1 text-slate-700">
                      {items.map((it, iIdx) => (
                        <li key={iIdx}>{it.replace(/^-\s*/, "")}</li>
                      ))}
                    </ul>
                  );
                }

                return (
                  <p key={pIdx} className="text-slate-700 leading-relaxed">
                    {trimmed}
                  </p>
                );
              })}
            </div>

            {/* Bottom Conversion Callout (Seamless Editorial Footer) */}
            <div className="mt-10 pt-8 border-t border-slate-100 space-y-3 text-center">
              <span className="text-xs font-bold text-[#084234] uppercase tracking-wider block">
                Konsultasi Ibadah Umrah & Haji
              </span>
              <h3 className="font-playfair text-lg sm:text-xl font-bold text-[#0F172A]">
                Ingin Jadwal & Rincian Paket Terkait Topik Ini?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Tim konsultan Samira Travel siap memberikan rincian tanggal keberangkatan, ketersediaan kursi, dan panduan manasik keluarga.
              </p>
              <div className="pt-2">
                <Link
                  href="/paket-umroh"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#084234] hover:bg-[#04261E] text-white font-bold text-xs shadow-sm transition-colors"
                >
                  <span>Lihat Jadwal 11 Kota Embarkasi</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </article>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-12 space-y-5">
              <h2 className="font-playfair text-xl font-bold text-[#0F172A]">
                Artikel Terkait Lainnya
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedArticles.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/artikel/${rel.slug}`}
                    className="bg-white rounded-2xl p-5 border border-[#E8E3DA] hover:border-[#084234]/50 shadow-sm transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <span className="text-[10px] font-bold text-[#084234] uppercase tracking-wider block mb-1.5">
                        {rel.categories[0] || "Edukasi"}
                      </span>
                      <h3 className="text-sm font-bold text-[#0F172A] group-hover:text-[#084234] transition-colors line-clamp-2 leading-snug mb-2">
                        {rel.title}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {rel.excerpt}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 mt-4">
                      <span>{rel.readingTime} mnt baca</span>
                      <span className="text-[#084234] font-bold group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                        <span>Baca</span>
                        <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
