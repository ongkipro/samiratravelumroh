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
            <h2 className="font-playfair text-xl sm:text-2xl md:text-3xl font-bold text-[#0F172A]">
              Panduan Ibadah & Wawasan Tanah Suci
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
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

        {/* Unboxed Editorial Articles Columns (No Card Clutter) */}
        <div className="border-y border-[#E8E3DA] py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-[#E8E3DA]">
          {articles.slice(0, 4).map((article, idx) => (
            <Link
              key={article.id}
              href={`/artikel/${article.slug}`}
              className={`group flex flex-col justify-between ${
                idx === 0 ? "md:pr-6 lg:pr-8" : idx === 3 ? "pt-6 md:pt-0 md:pl-6 lg:pl-8" : "pt-6 md:pt-0 md:px-6 lg:px-8"
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="text-[10px] font-bold text-[#9B7832] uppercase tracking-wider">
                    {article.categories[0] || "Panduan Umroh"}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-slate-400">
                    <Clock className="w-3 h-3" />
                    <span>{article.readingTime} mnt</span>
                  </div>
                </div>

                <h3 className="font-playfair text-base sm:text-lg font-bold text-[#0F172A] group-hover:text-[#084234] transition-colors line-clamp-2 leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-1 text-[11px]">
                  <Calendar className="w-3 h-3" />
                  <span>{article.date}</span>
                </div>
                <span className="text-[#084234] font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1 text-xs">
                  Baca
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
