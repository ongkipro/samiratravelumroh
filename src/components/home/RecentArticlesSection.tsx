import React from "react";
import Link from "next/link";
import { Article } from "@/types";
import { Clock, Calendar, ArrowRight } from "lucide-react";

interface RecentArticlesSectionProps {
  articles: Article[];
}

export function RecentArticlesSection({ articles }: RecentArticlesSectionProps) {
  return (
    <section className="py-14 md:py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider block">
              Edukasi & Manasik Mandiri
            </span>
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F172A]">
              Panduan Ibadah & Wawasan Tanah Suci
            </h2>
            <p className="text-sm text-slate-600">
              Pelajari tata cara thawaf, tips persiapan fisik lansia, fikih manasik, dan regulasi visa terbaru Kementerian Haji Saudi.
            </p>
          </div>

          <Link
            href="/artikel"
            className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-[#084234] hover:underline shrink-0"
          >
            <span>Buka Silo 400 Artikel Lengkap</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.slice(0, 4).map((article) => (
            <Link
              key={article.id}
              href={`/artikel/${article.slug}`}
              className="group bg-white rounded-2xl p-5 border border-[#E8E3DA] hover:border-[#084234]/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-bold text-[#084234] uppercase tracking-wider bg-emerald-50 px-2.5 py-0.5 rounded-md truncate">
                    {article.categories[0] || "Panduan Umroh"}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-slate-400 shrink-0">
                    <Clock className="w-3 h-3" />
                    <span>{article.readingTime} mnt</span>
                  </div>
                </div>

                <h3 className="text-sm font-bold text-[#0F172A] group-hover:text-[#084234] transition-colors line-clamp-2 mb-2 leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed mb-4">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-1 text-[11px]">
                  <Calendar className="w-3 h-3" />
                  <span>{article.date}</span>
                </div>
                <span className="text-[#084234] font-bold group-hover:translate-x-0.5 transition-transform flex items-center gap-1 text-[11px]">
                  Baca
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
