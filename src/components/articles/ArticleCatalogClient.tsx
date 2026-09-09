"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Article } from "@/types";
import { Search, Clock, Calendar, ArrowRight, ChevronLeft, ChevronRight, BookOpen } from "lucide-react";

interface ArticleCatalogClientProps {
  initialArticles: Article[];
}

const CATEGORIES = [
  "Semua",
  "Tips Umroh",
  "Info Haji",
  "Kabar Mekkah",
  "Info Saudi",
  "Tips for travellers",
];

const ITEMS_PER_PAGE = 12;

export function ArticleCatalogClient({ initialArticles }: ArticleCatalogClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter articles based on search and category
  const filteredArticles = useMemo(() => {
    return initialArticles.filter((article) => {
      const matchesSearch =
        searchQuery.trim() === "" ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "Semua" ||
        article.categories.some(
          (c) => c.toLowerCase() === selectedCategory.toLowerCase()
        );

      return matchesSearch && matchesCategory;
    });
  }, [initialArticles, searchQuery, selectedCategory]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE) || 1;
  const paginatedArticles = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredArticles.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredArticles, currentPage]);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="space-y-8">
      {/* Search Bar & Category Pills */}
      <div className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-6 border border-[#E8E3DA] shadow-sm space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Cari topik artikel (contoh: visa, thawaf, miqat, hotel, manasik, koper)..."
            className="w-full h-12 pl-11 pr-4 rounded-xl bg-[#FAF8F5] border border-[#E8E3DA] text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#084234] focus:border-transparent transition-all"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => handleCategoryChange(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#084234] text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-slate-500 font-medium px-1">
        <span>Menampilkan {filteredArticles.length} artikel terindeks</span>
        <span>Halaman {currentPage} dari {totalPages}</span>
      </div>

      {/* Articles Grid */}
      {paginatedArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedArticles.map((article) => (
            <Link
              key={article.id}
              href={`/artikel/${article.slug}`}
              className="group bg-white rounded-2xl p-6 border border-[#E8E3DA] hover:border-[#084234]/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-bold text-[#084234] uppercase tracking-wider bg-emerald-50 px-2.5 py-0.5 rounded-full truncate">
                    {article.categories[0] || "Panduan Umroh"}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-slate-400 shrink-0">
                    <Clock className="w-3 h-3" />
                    <span>{article.readingTime} mnt baca</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-[#0F172A] group-hover:text-[#084234] transition-colors line-clamp-2 mb-2 leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-1 text-[11px]">
                  <Calendar className="w-3 h-3" />
                  <span>{article.date}</span>
                </div>
                <span className="text-[#084234] font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1 text-xs">
                  Baca Lengkap
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl p-12 text-center border border-[#E8E3DA] space-y-3">
          <BookOpen className="w-8 h-8 text-slate-300 mx-auto" />
          <h3 className="text-base font-bold text-slate-700">Tidak ada artikel ditemukan</h3>
          <p className="text-xs text-slate-500">Coba gunakan kata kunci pencarian lain atau pilih kategori Semua.</p>
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-6">
          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            aria-label="Halaman Sebelumnya"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <span className="px-4 py-2 text-xs font-bold text-[#0F172A] bg-white rounded-xl border border-slate-200">
            {currentPage} / {totalPages}
          </span>

          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="p-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            aria-label="Halaman Berikutnya"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
