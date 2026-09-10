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
type PriceRange = "all" | "under-30" | "30-35" | "35-40" | "above-40";
type PeriodFilter = "all" | "1448-reguler" | "wisata-halal" | "haji-furoda";
type SortOption = "default" | "price-asc" | "price-desc" | "duration";

export function PackageCatalogClient({ tours }: PackageCatalogClientProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [selectedCity, setSelectedCity] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<PriceRange>("all");
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodFilter>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<SortOption>("default");

  const resetAllFilters = () => {
    setActiveCategory("all");
    setSelectedCity("all");
    setPriceRange("all");
    setSelectedPeriod("all");
    setSearchQuery("");
    setSortBy("default");
  };

  const hasActiveFilters =
    activeCategory !== "all" ||
    selectedCity !== "all" ||
    priceRange !== "all" ||
    selectedPeriod !== "all" ||
    searchQuery.trim() !== "" ||
    sortBy !== "default";

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

      const matchesPrice = (() => {
        if (priceRange === "under-30") return tour.priceIDR < 30000000;
        if (priceRange === "30-35") return tour.priceIDR >= 30000000 && tour.priceIDR <= 35000000;
        if (priceRange === "35-40") return tour.priceIDR > 35000000 && tour.priceIDR <= 40000000;
        if (priceRange === "above-40") return tour.priceIDR > 40000000;
        return true;
      })();

      const matchesPeriod = (() => {
        if (selectedPeriod === "1448-reguler") {
          return tour.departurePeriod.includes("1448 H") && tour.category === "reguler";
        }
        if (selectedPeriod === "wisata-halal") {
          return tour.category === "plus";
        }
        if (selectedPeriod === "haji-furoda") {
          return tour.category === "haji";
        }
        return true;
      })();

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === "" ||
        tour.title.toLowerCase().includes(query) ||
        tour.city.toLowerCase().includes(query) ||
        tour.description.toLowerCase().includes(query) ||
        tour.airline.toLowerCase().includes(query) ||
        tour.hotelMakkah.name.toLowerCase().includes(query) ||
        tour.hotelMadinah.name.toLowerCase().includes(query) ||
        tour.departurePeriod.toLowerCase().includes(query);

      return (
        matchesCategory &&
        matchesCity &&
        matchesPrice &&
        matchesPeriod &&
        matchesSearch
      );
    });

    if (sortBy === "price-asc") {
      result = [...result].sort((a, b) => a.priceIDR - b.priceIDR);
    } else if (sortBy === "price-desc") {
      result = [...result].sort((a, b) => b.priceIDR - a.priceIDR);
    } else if (sortBy === "duration") {
      result = [...result].sort((a, b) => a.durationDays - b.durationDays);
    }

    return result;
  }, [tours, activeCategory, selectedCity, priceRange, selectedPeriod, searchQuery, sortBy]);

  const getPackageUrl = (tour: TourPackage) => {
    if (tour.category === "haji") return "/haji-khusus-furoda";
    if (tour.category === "plus") return `/umroh-plus/${tour.slug}`;
    return `/paket-umroh/${tour.slug || tour.city.toLowerCase()}`;
  };

  const getTourImage = (tour: TourPackage) => {
    if (tour.flyerImage) return tour.flyerImage;
    if (tour.category === "haji") return "/images/haji-khusus-furoda-mujamalah-resmi-kemenag.webp";
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

        {/* Filter Controls Row: Search, City Filter, Price Range, Period & Sort */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 pt-4 border-t border-slate-100">
          {/* Search Box - 4 cols on desktop */}
          <div className="sm:col-span-2 lg:col-span-4 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari paket, kota, maskapai, hotel..."
              className="w-full h-11 pl-10 pr-9 rounded-xl bg-[#FAF8F5] border border-[#E8E3DA] text-base sm:text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#084234] focus:border-transparent transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 cursor-pointer"
                title="Hapus pencarian"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* City Filter - 2 cols on desktop */}
          <div className="lg:col-span-2">
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full h-11 px-3 rounded-xl bg-[#FAF8F5] border border-[#E8E3DA] text-base sm:text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#084234] transition-all cursor-pointer truncate"
              title="Filter Kota Embarkasi"
            >
              <option value="all">Semua Embarkasi</option>
              {cities.map((c) => (
                <option key={c} value={c}>
                  Embarkasi {c}
                </option>
              ))}
            </select>
          </div>

          {/* Price Range Filter - 2 cols on desktop */}
          <div className="lg:col-span-2">
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value as PriceRange)}
              className="w-full h-11 px-3 rounded-xl bg-[#FAF8F5] border border-[#E8E3DA] text-base sm:text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#084234] transition-all cursor-pointer truncate"
              title="Filter Rentang Biaya"
            >
              <option value="all">Semua Biaya</option>
              <option value="under-30">&lt; Rp 30 Juta (Hemat)</option>
              <option value="30-35">Rp 30 Jt – 35 Jt</option>
              <option value="35-40">Rp 35 Jt – 40 Jt</option>
              <option value="above-40">&gt; Rp 40 Jt / Haji</option>
            </select>
          </div>

          {/* Departure Period Filter - 2 cols on desktop */}
          <div className="lg:col-span-2">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value as PeriodFilter)}
              className="w-full h-11 px-3 rounded-xl bg-[#FAF8F5] border border-[#E8E3DA] text-base sm:text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#084234] transition-all cursor-pointer truncate"
              title="Filter Periode Keberangkatan"
            >
              <option value="all">Semua Jadwal</option>
              <option value="1448-reguler">Musim 1448 H (Juli–Ags)</option>
              <option value="wisata-halal">Wisata Halal / Sejuk</option>
              <option value="haji-furoda">Musim Haji 1447H/1448H</option>
            </select>
          </div>

          {/* Sort By - 2 cols on desktop */}
          <div className="lg:col-span-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="w-full h-11 px-3 rounded-xl bg-[#FAF8F5] border border-[#E8E3DA] text-base sm:text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#084234] transition-all cursor-pointer truncate"
              title="Urutan Tampilan"
            >
              <option value="default">Urut: Rekomendasi</option>
              <option value="price-asc">Biaya Terendah</option>
              <option value="price-desc">Biaya Tertinggi</option>
              <option value="duration">Durasi Hari</option>
            </select>
          </div>
        </div>

        {/* Active Filter Tags */}
        {hasActiveFilters && (
          <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-100 text-xs">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Filter Aktif:
            </span>
            {activeCategory !== "all" && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-medium">
                <span>
                  {activeCategory === "reguler"
                    ? "Umroh Reguler"
                    : activeCategory === "plus"
                    ? "Umroh Plus"
                    : "Haji Khusus"}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveCategory("all")}
                  className="hover:text-emerald-950 cursor-pointer"
                  title="Hapus filter kategori"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {selectedCity !== "all" && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-50 text-amber-900 border border-amber-200 text-xs font-medium">
                <span>Kota: {selectedCity}</span>
                <button
                  type="button"
                  onClick={() => setSelectedCity("all")}
                  className="hover:text-amber-950 cursor-pointer"
                  title="Hapus filter kota"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {priceRange !== "all" && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-50 text-blue-800 border border-blue-200 text-xs font-medium">
                <span>
                  Biaya:{" "}
                  {priceRange === "under-30"
                    ? "< Rp 30 Juta"
                    : priceRange === "30-35"
                    ? "Rp 30 Jt – 35 Jt"
                    : priceRange === "35-40"
                    ? "Rp 35 Jt – 40 Jt"
                    : "> Rp 40 Jt / Haji"}
                </span>
                <button
                  type="button"
                  onClick={() => setPriceRange("all")}
                  className="hover:text-blue-950 cursor-pointer"
                  title="Hapus filter biaya"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {selectedPeriod !== "all" && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-purple-50 text-purple-800 border border-purple-200 text-xs font-medium">
                <span>
                  Jadwal:{" "}
                  {selectedPeriod === "1448-reguler"
                    ? "Musim 1448 H"
                    : selectedPeriod === "wisata-halal"
                    ? "Wisata Halal"
                    : "Haji Furoda"}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedPeriod("all")}
                  className="hover:text-purple-950 cursor-pointer"
                  title="Hapus filter jadwal"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {searchQuery && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 border border-slate-200 text-xs font-medium">
                <span>Cari: &ldquo;{searchQuery}&rdquo;</span>
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="hover:text-slate-950 cursor-pointer"
                  title="Hapus kata kunci"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {sortBy !== "default" && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-stone-100 text-stone-800 border border-stone-200 text-xs font-medium">
                <span>
                  Urut:{" "}
                  {sortBy === "price-asc"
                    ? "Biaya Terendah"
                    : sortBy === "price-desc"
                    ? "Biaya Tertinggi"
                    : "Durasi Hari"}
                </span>
                <button
                  type="button"
                  onClick={() => setSortBy("default")}
                  className="hover:text-stone-950 cursor-pointer"
                  title="Reset urutan"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            <button
              type="button"
              onClick={resetAllFilters}
              className="text-[11px] font-bold text-[#084234] hover:underline cursor-pointer ml-auto"
            >
              Reset Semua Filter
            </button>
          </div>
        )}
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
                      alt={`${tour.title} - Paket Umroh Resmi Kemenag Samira Travel`}
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
                    <div className="text-xs text-slate-600 space-y-1.5 bg-[#FAF8F5] p-3 rounded-xl border border-[#E8E3DA]/80">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="truncate">Makkah: <strong className="font-semibold text-slate-800">{tour.hotelMakkah.name.split("/")[0].trim()}</strong></span>
                          <span className="text-amber-600 font-bold shrink-0 ml-2 text-[11px]">★ {tour.hotelMakkah.stars}</span>
                        </div>
                        {tour.hotelMakkah.distanceText && (
                          <div className="text-[10px] text-emerald-800 font-medium truncate mt-0.5">
                            🚶 {tour.hotelMakkah.distanceText}
                          </div>
                        )}
                      </div>
                      <div className="pt-1 border-t border-[#E8E3DA]/60">
                        <div className="flex items-center justify-between">
                          <span className="truncate">Madinah: <strong className="font-semibold text-slate-800">{tour.hotelMadinah.name.split("/")[0].trim()}</strong></span>
                          <span className="text-amber-600 font-bold shrink-0 ml-2 text-[11px]">★ {tour.hotelMadinah.stars}</span>
                        </div>
                        {tour.hotelMadinah.distanceText && (
                          <div className="text-[10px] text-amber-800 font-medium truncate mt-0.5">
                            🚶 {tour.hotelMadinah.distanceText}
                          </div>
                        )}
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
            onClick={resetAllFilters}
            className="px-5 py-2.5 rounded-xl bg-[#084234] text-white text-xs font-bold hover:bg-[#04261E] transition-colors cursor-pointer"
          >
            Tampilkan Semua Paket
          </button>
        </div>
      )}
    </div>
  );
}
