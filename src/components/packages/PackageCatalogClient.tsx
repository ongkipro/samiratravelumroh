"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { TourPackage } from "@/types";
import { 
  MapPin, 
  Calendar, 
  Hotel, 
  Plane, 
  Star, 
  ChevronRight,
  MessageCircle,
  Clock,
  SlidersHorizontal,
  Search,
  X,
  Building2,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

interface PackageCatalogClientProps {
  tours: TourPackage[];
}

type CategoryFilter = "all" | "reguler" | "plus" | "haji";
type SortOption = "default" | "price-asc" | "price-desc" | "duration";

export function PackageCatalogClient({ tours }: PackageCatalogClientProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [selectedCity, setSelectedCity] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<SortOption>("default");

  // Distinct cities from reguler tours
  const cities = useMemo(() => {
    const set = new Set<string>();
    tours.forEach((t) => {
      if (t.city) set.add(t.city);
    });
    return Array.from(set).sort();
  }, [tours]);

  // Counts by category
  const categoryCounts = useMemo(() => {
    return {
      all: tours.length,
      reguler: tours.filter((t) => t.category === "reguler").length,
      plus: tours.filter((t) => t.category === "plus").length,
      haji: tours.filter((t) => t.category === "haji").length,
    };
  }, [tours]);

  const filteredTours = useMemo(() => {
    let result = tours.filter((tour) => {
      const matchesCategory =
        activeCategory === "all" || tour.category === activeCategory;

      const matchesCity =
        selectedCity === "all" ||
        (tour.city && tour.city.toLowerCase() === selectedCity.toLowerCase());

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === "" ||
        tour.title.toLowerCase().includes(query) ||
        tour.city.toLowerCase().includes(query) ||
        tour.description.toLowerCase().includes(query) ||
        tour.airline.toLowerCase().includes(query);

      return matchesCategory && matchesCity && matchesSearch;
    });

    if (sortBy === "price-asc") {
      result = [...result].sort((a, b) => a.priceIDR - b.priceIDR);
    } else if (sortBy === "price-desc") {
      result = [...result].sort((a, b) => b.priceIDR - a.priceIDR);
    } else if (sortBy === "duration") {
      result = [...result].sort((a, b) => a.durationDays - b.durationDays);
    }

    return result;
  }, [tours, activeCategory, selectedCity, searchQuery, sortBy]);

  const getPackageUrl = (tour: TourPackage) => {
    if (tour.category === "haji") return "/haji-khusus-furoda";
    if (tour.category === "plus") return `/umroh-plus/${tour.slug}`;
    return `/paket-umroh/${tour.slug || tour.city.toLowerCase()}`;
  };

  const getTourImage = (tour: TourPackage) => {
    if (tour.flyerImage) return tour.flyerImage;
    if (tour.category === "haji") return "/images/haji_furoda_sanctuary.jpg";
    if (tour.category === "plus") return "/images/paket-umroh-plus-thaif-wisata-kebun-mawar.webp";
    return "/images/jadwal-paket-umroh-reguler-lion-air-charter.webp";
  };

  return (
    <div className="space-y-8">
      {/* Control Island: Category Tabs, City Selector, Search, & Sort */}
      <div className="bg-white rounded-3xl p-5 sm:p-7 border border-[#E8E3DA] shadow-lg shadow-black/5 space-y-5">
        {/* Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <button
            type="button"
            onClick={() => {
              setActiveCategory("all");
              setSelectedCity("all");
            }}
            className={`px-4.5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer shrink-0 flex items-center gap-2 ${
              activeCategory === "all"
                ? "bg-[#084234] text-white shadow-md ring-2 ring-[#084234]/20"
                : "bg-[#FAF8F5] text-slate-700 border border-[#E8E3DA] hover:bg-slate-100"
            }`}
          >
            <span>Semua Paket</span>
            <span className={`text-[10px] px-2 py-0.2 rounded-full font-bold ${
              activeCategory === "all" ? "bg-[#C5A059] text-slate-950" : "bg-slate-200 text-slate-600"
            }`}>
              {categoryCounts.all}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveCategory("reguler")}
            className={`px-4.5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer shrink-0 flex items-center gap-2 ${
              activeCategory === "reguler"
                ? "bg-[#084234] text-white shadow-md ring-2 ring-[#084234]/20"
                : "bg-[#FAF8F5] text-slate-700 border border-[#E8E3DA] hover:bg-slate-100"
            }`}
          >
            <span>Umroh Reguler 11 Kota</span>
            <span className={`text-[10px] px-2 py-0.2 rounded-full font-bold ${
              activeCategory === "reguler" ? "bg-[#C5A059] text-slate-950" : "bg-slate-200 text-slate-600"
            }`}>
              {categoryCounts.reguler}
            </span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveCategory("plus");
              setSelectedCity("all");
            }}
            className={`px-4.5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer shrink-0 flex items-center gap-2 ${
              activeCategory === "plus"
                ? "bg-[#084234] text-white shadow-md ring-2 ring-[#084234]/20"
                : "bg-[#FAF8F5] text-slate-700 border border-[#E8E3DA] hover:bg-slate-100"
            }`}
          >
            <span>Umroh Plus Sejarah</span>
            <span className={`text-[10px] px-2 py-0.2 rounded-full font-bold ${
              activeCategory === "plus" ? "bg-[#C5A059] text-slate-950" : "bg-slate-200 text-slate-600"
            }`}>
              {categoryCounts.plus}
            </span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveCategory("haji");
              setSelectedCity("all");
            }}
            className={`px-4.5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer shrink-0 flex items-center gap-2 ${
              activeCategory === "haji"
                ? "bg-[#084234] text-white shadow-md ring-2 ring-[#084234]/20"
                : "bg-[#FAF8F5] text-slate-700 border border-[#E8E3DA] hover:bg-slate-100"
            }`}
          >
            <span>Haji Khusus Furoda</span>
            <span className={`text-[10px] px-2 py-0.2 rounded-full font-bold ${
              activeCategory === "haji" ? "bg-[#C5A059] text-slate-950" : "bg-slate-200 text-slate-600"
            }`}>
              {categoryCounts.haji}
            </span>
          </button>
        </div>

        {/* Filter Controls Row: Search, City Filter & Sort */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-2 border-t border-slate-100">
          {/* Search Box */}
          <div className="sm:col-span-6 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari paket (nama kota, maskapai, durasi)..."
              className="w-full h-11 pl-10 pr-9 rounded-xl bg-[#FAF8F5] border border-[#E8E3DA] text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#084234] focus:border-transparent transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* City Filter */}
          <div className="sm:col-span-3">
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full h-11 px-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8E3DA] text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#084234] transition-all cursor-pointer"
            >
              <option value="all">Semua Kota Embarkasi</option>
              {cities.map((c) => (
                <option key={c} value={c}>
                  Embarkasi {c}
                </option>
              ))}
            </select>
          </div>

          {/* Sort By */}
          <div className="sm:col-span-3">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="w-full h-11 px-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8E3DA] text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#084234] transition-all cursor-pointer"
            >
              <option value="default">Urutkan: Rekomendasi</option>
              <option value="price-asc">Biaya Terendah</option>
              <option value="price-desc">Biaya Tertinggi</option>
              <option value="duration">Durasi Hari</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Indicator Bar */}
      <div className="flex items-center justify-between text-xs text-slate-600 font-medium px-2">
        <span>
          Menampilkan <strong className="text-slate-900 font-bold">{filteredTours.length}</strong> paket ibadah terverifikasi
        </span>
        {(searchQuery || selectedCity !== "all" || activeCategory !== "all" || sortBy !== "default") && (
          <button
            type="button"
            onClick={() => {
              setActiveCategory("all");
              setSelectedCity("all");
              setSearchQuery("");
              setSortBy("default");
            }}
            className="text-[11px] font-bold text-[#084234] hover:underline"
          >
            Reset Semua Filter
          </button>
        )}
      </div>

      {/* Package Cards Grid */}
      {filteredTours.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredTours.map((tour) => {
            const url = getPackageUrl(tour);
            const imageSrc = getTourImage(tour);
            const waGreeting = encodeURIComponent(
              `Assalamu'alaikum Samira Travel, saya tertarik dengan ${tour.title} (${tour.durationDays} Hari) dari Embarkasi ${tour.city}. Mohon informasi seat dan jadwal keberangkatan.`
            );
            const waLink = `https://wa.me/6285607179735?text=${waGreeting}`;

            return (
              <article
                key={tour.id}
                className="group bg-white rounded-3xl border border-[#E8E3DA] hover:border-[#C5A059]/70 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Thumbnail with Native 16:9 Aspect Ratio */}
                  <div className="relative aspect-[16/9] w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={imageSrc}
                      alt={tour.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Duration Badge */}
                    <span className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-[#04261E]/80 backdrop-blur-md text-white text-xs font-semibold shadow-sm border border-white/20 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#C5A059]" />
                      <span>{tour.durationDays} Hari</span>
                    </span>

                    {/* Embarkation City Badge */}
                    <span className="absolute bottom-3 left-3.5 px-2.5 py-0.5 rounded-md bg-black/60 backdrop-blur-sm text-white text-[11px] font-medium border border-white/10 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#C5A059]" />
                      <span>Embarkasi {tour.city}</span>
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-3.5">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                        <span className="text-[#9B7832] font-bold uppercase tracking-wider">
                          {tour.category === "haji" ? "Haji Khusus" : tour.category === "plus" ? "Umroh Plus" : "Umroh Reguler"}
                        </span>
                        <span className="text-slate-600 font-semibold">{tour.airline}</span>
                      </div>
                      <h3 className="font-playfair text-xl font-bold text-[#0F172A] group-hover:text-[#084234] transition-colors leading-snug line-clamp-1">
                        {tour.title}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {tour.description}
                    </p>

                    {/* Hotel Specs */}
                    <div className="text-xs text-slate-600 space-y-1 bg-[#FAF8F5] p-3 rounded-xl border border-[#E8E3DA]/80">
                      <div className="flex items-center justify-between">
                        <span className="truncate">Makkah: <strong className="font-semibold text-slate-800">{tour.hotelMakkah.name.split("/")[0].trim()}</strong></span>
                        <span className="text-amber-600 font-bold shrink-0 ml-2 text-[11px]">★ {tour.hotelMakkah.stars}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="truncate">Madinah: <strong className="font-semibold text-slate-800">{tour.hotelMadinah.name.split("/")[0].trim()}</strong></span>
                        <span className="text-amber-600 font-bold shrink-0 ml-2 text-[11px]">★ {tour.hotelMadinah.stars}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer: Price & Action Buttons */}
                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-[#E8E3DA] space-y-3">
                    <div className="flex items-baseline justify-between">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                        {tour.category === "haji" ? "Biaya Paket (USD)" : "Biaya All-in (Quad)"}
                      </span>
                      <div className="text-lg sm:text-xl font-bold text-[#084234] tracking-tight">
                        {tour.priceFormatted}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold transition-colors"
                        title="Chat Konsultasi WhatsApp"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Chat WA</span>
                      </a>

                      <Link
                        href={url}
                        className="inline-flex items-center justify-center gap-1 px-3 py-2.5 rounded-xl bg-[#084234] hover:bg-[#04261E] text-white text-xs font-bold transition-all shadow-sm active:scale-98"
                      >
                        <span>Detail Paket</span>
                        <ChevronRight className="w-3.5 h-3.5 text-[#C5A059]" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-16 bg-white rounded-3xl border border-[#E8E3DA] p-8 space-y-3 max-w-md mx-auto shadow-sm">
          <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
            <Building2 className="w-7 h-7" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-bold text-slate-800">
              Tidak Ada Paket yang Cocok
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Tidak ditemukan paket untuk kriteria pencarian Anda. Silakan coba reset filter atau hubungi konsultan kami.
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              setActiveCategory("all");
              setSelectedCity("all");
              setSearchQuery("");
              setSortBy("default");
            }}
            className="px-5 py-2.5 rounded-xl bg-[#084234] text-white text-xs font-bold hover:bg-[#04261E] transition-colors"
          >
            Tampilkan Semua Paket
          </button>
        </div>
      )}
    </div>
  );
}
