"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Article } from "@/types";
import { 
  Search, 
  Clock, 
  Calendar, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  BookOpen,
  X,
  Compass
} from "lucide-react";
import { 
  getArticleCoverImage, 
  EDITORIAL_CATEGORIES, 
  matchesEditorialCategory 
} from "@/lib/article-media";

interface ArticleCatalogClientProps {
  initialArticles: Article[];
}

const ITEMS_PER_PAGE = 12;

export function ArticleCatalogClient({ initialArticles }: ArticleCatalogClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("semua");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter articles based on search and category
  const filteredArticles = useMemo(() => {
    return initialArticles.filter((article) => {
      const matchesSearch =
        searchQuery.trim() === "" ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCat = matchesEditorialCategory(article, selectedCategory);

      return matchesSearch && matchesCat;
    });
  }, [initialArticles, searchQuery, selectedCategory]);

  // Featured article (first item when no search/filter active)
  const isDefaultView = searchQuery === "" && selectedCategory === "semua" && currentPage === 1;
  const featuredArticle = isDefaultView ? initialArticles[0] : null;

  // Grid items (exclude featured article when in default view)
  const gridSourceArticles = useMemo(() => {
    if (isDefaultView && featuredArticle) {
      return filteredArticles.slice(1);
    }
    return filteredArticles;
  }, [filteredArticles, isDefaultView, featuredArticle]);

  // Pagination calculation
  const totalPages = Math.ceil(gridSourceArticles.length / ITEMS_PER_PAGE) || 1;
  const paginatedArticles = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return gridSourceArticles.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [gridSourceArticles, currentPage]);

  const handleCategoryChange = (slug: string) => {
    setSelectedCategory(slug);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("semua");
    setCurrentPage(1);
  };

  return (
    <div className="space-y-10">
      {/* 1. FEATURED ARTICLE OF THE WEEK (SPLIT EDITORIAL HERO CARD) */}
      {featuredArticle && (
        <article className="group bg-white rounded-3xl border border-[#E8E3DA] hover:border-[#C5A059] shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            {/* Visual Cover (7 cols) */}
            <div className="lg:col-span-7 relative min-h-[280px] sm:min-h-[380px] lg:min-h-[420px] bg-slate-100 overflow-hidden">
              <Image
                src={getArticleCoverImage(featuredArticle)}
                alt={`${featuredArticle.title} - Panduan Ibadah Samira Travel`}
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent lg:hidden" />
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#04261E]/90 backdrop-blur-md text-[#C5A059] text-xs font-bold uppercase tracking-wider border border-[#C5A059]/40 shadow-md">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Pilihan Redaksi • Panduan Utama</span>
                </span>
              </div>
            </div>

            {/* Content Body (5 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-gradient-to-br from-white to-[#FAF8F5]">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                  <span className="text-[#084234] font-bold uppercase tracking-wider bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    {featuredArticle.categories[0] || "Panduan Umrah"}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{featuredArticle.date}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{featuredArticle.readingTime} Menit Baca</span>
                  </span>
                </div>

                <h2 className="font-playfair text-xl sm:text-2xl lg:text-3xl font-bold text-[#0F172A] group-hover:text-[#084234] transition-colors leading-tight">
                  <Link href={`/artikel/${featuredArticle.slug}`}>
                    {featuredArticle.title}
                  </Link>
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 lg:line-clamp-4 leading-relaxed font-normal">
                  {featuredArticle.excerpt}
                </p>
              </div>

              <div className="pt-6 border-t border-[#E8E3DA] flex items-center justify-between mt-6">
                <span className="text-xs text-slate-500 font-medium">
                  Oleh: <strong className="text-slate-800">Tim Edukasi Samira Travel</strong>
                </span>
                <Link
                  href={`/artikel/${featuredArticle.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#084234] hover:bg-[#04261E] text-white font-bold text-xs shadow-sm transition-all group-hover:translate-x-0.5"
                >
                  <span>Baca Lengkap</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </article>
      )}

      {/* 2. SEARCH DECK & CATEGORY FILTER BAR */}
      <div className="bg-white rounded-3xl p-5 sm:p-7 border border-[#E8E3DA] shadow-xs space-y-5">
        <div className="flex flex-col md:flex-row items-center gap-3">
          {/* Search Input */}
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Cari topik panduan (contoh: visa, thawaf, miqat, hotel, manasik, koper, doa)..."
              className="w-full h-12 pl-11 pr-10 rounded-2xl bg-[#FAF8F5] border border-[#E8E3DA] text-xs sm:text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#084234] focus:border-transparent transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setCurrentPage(1);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition-colors"
                aria-label="Bersihkan pencarian"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 pt-1 border-t border-slate-100">
          {EDITORIAL_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.slug;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategoryChange(cat.slug)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#084234] text-white shadow-sm ring-2 ring-[#084234]/20"
                    : "bg-[#FAF8F5] text-slate-600 hover:text-[#084234] hover:bg-emerald-50 border border-[#E8E3DA]/80"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Counter & Active Filter Badge */}
        <div className="flex items-center justify-between text-xs text-slate-500 font-medium px-1">
          <span>
            Menampilkan <strong>{filteredArticles.length}</strong> artikel terindeks
            {selectedCategory !== "semua" && ` dalam kategori ${EDITORIAL_CATEGORIES.find((c) => c.slug === selectedCategory)?.label}`}
          </span>
          {(searchQuery || selectedCategory !== "semua") && (
            <button
              type="button"
              onClick={handleResetFilters}
              className="text-xs font-bold text-[#084234] hover:underline cursor-pointer"
            >
              Reset Filter
            </button>
          )}
        </div>
      </div>

      {/* 3. DYNAMIC ARTICLES GRID WITH FULL COVER PHOTOGRAPHY */}
      {paginatedArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {paginatedArticles.map((article) => {
            const coverImage = getArticleCoverImage(article);
            return (
              <article
                key={article.id}
                className="group flex flex-col bg-white rounded-3xl border border-[#E8E3DA] hover:border-[#C5A059] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300"
              >
                {/* 16:10 Atmospheric Cover Image */}
                <Link
                  href={`/artikel/${article.slug}`}
                  className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden block"
                >
                  <Image
                    src={coverImage}
                    alt={`${article.title} - Samira Travel`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle Gradient Shade for Badge Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Category Pill Tag on Image */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#084234] text-[10px] font-bold uppercase tracking-wider shadow-xs border border-white/40">
                      {article.categories[0] || "Edukasi"}
                    </span>
                  </div>

                  {/* Reading Time Badge */}
                  <div className="absolute bottom-3 right-3 z-10">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#04261E]/80 backdrop-blur-md text-white text-[10px] font-medium">
                      <Clock className="w-2.5 h-2.5 text-[#C5A059]" />
                      <span>{article.readingTime} mnt baca</span>
                    </span>
                  </div>
                </Link>

                {/* Content Details */}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 space-y-4">
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      <span>{article.date}</span>
                    </div>

                    <h3 className="font-playfair text-base sm:text-lg font-bold text-[#0F172A] group-hover:text-[#084234] transition-colors line-clamp-2 leading-snug">
                      <Link href={`/artikel/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-400 text-[11px]">
                      Samira Edukasi
                    </span>
                    <Link
                      href={`/artikel/${article.slug}`}
                      className="text-[#084234] font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1 text-xs"
                    >
                      <span>Baca Lengkap</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-3xl p-12 text-center border border-[#E8E3DA] space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-[#FAF8F5] text-slate-400 flex items-center justify-center mx-auto border border-[#E8E3DA]">
            <BookOpen className="w-6 h-6 text-[#C5A059]" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-[#0F172A]">Tidak Ada Panduan Ditemukan</h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto">
              Tidak ada artikel yang cocok dengan pencarian &ldquo;{searchQuery}&rdquo;.
            </p>
          </div>
          <button
            type="button"
            onClick={handleResetFilters}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#084234] hover:bg-[#04261E] text-white font-bold text-xs transition-colors cursor-pointer"
          >
            <span>Tampilkan Semua Panduan</span>
          </button>
        </div>
      )}

      {/* 4. PAGINATION CONTROLS */}
      {totalPages > 1 && (
        <nav
          aria-label="Navigasi Halaman Artikel"
          className="flex flex-wrap items-center justify-center gap-2 pt-6"
        >
          {/* Previous Button */}
          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="flex items-center gap-1 px-3.5 py-2 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            aria-label="Halaman Sebelumnya"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Sebelumnya</span>
          </button>

          {/* Page Indicators */}
          <div className="flex items-center gap-1 px-1">
            {Array.from({ length: Math.min(5, totalPages) }).map((_, idx) => {
              let pageNum = idx + 1;
              if (totalPages > 5) {
                if (currentPage > 3 && currentPage < totalPages - 2) {
                  pageNum = currentPage - 2 + idx;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + idx;
                }
              }

              return (
                <button
                  key={pageNum}
                  type="button"
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-9 h-9 rounded-xl text-xs font-bold transition-all ${
                    currentPage === pageNum
                      ? "bg-[#084234] text-white shadow-xs"
                      : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>

          {/* Next Button */}
          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="flex items-center gap-1 px-3.5 py-2 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            aria-label="Halaman Berikutnya"
          >
            <span className="hidden sm:inline">Berikutnya</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </nav>
      )}
    </div>
  );
}
