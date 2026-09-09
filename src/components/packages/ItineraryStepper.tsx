"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, MapPin, Clock, Calendar } from "lucide-react";

interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  activities: string[];
}

interface ItineraryStepperProps {
  itinerary: ItineraryDay[];
}

export function ItineraryStepper({ itinerary }: ItineraryStepperProps) {
  // Default first 2 days open
  const [openDays, setOpenDays] = useState<number[]>([1, 2]);

  const toggleDay = (dayNum: number) => {
    setOpenDays((prev) =>
      prev.includes(dayNum) ? prev.filter((d) => d !== dayNum) : [...prev, dayNum]
    );
  };

  const expandAll = () => setOpenDays(itinerary.map((i) => i.day));
  const collapseAll = () => setOpenDays([]);

  return (
    <div className="space-y-4">
      {/* Controls */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
        <div className="text-xs text-slate-500 font-medium">
          Rincian Rangkaian Kegiatan {itinerary.length} Hari
        </div>
        <div className="flex items-center gap-3 text-xs font-bold text-[#084234]">
          <button
            type="button"
            onClick={expandAll}
            className="hover:underline cursor-pointer"
          >
            Buka Semua
          </button>
          <span className="text-slate-300">•</span>
          <button
            type="button"
            onClick={collapseAll}
            className="hover:underline cursor-pointer"
          >
            Tutup Semua
          </button>
        </div>
      </div>

      {/* Stepper Timeline */}
      <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-2.5 sm:before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-[#C5A059]/40">
        {itinerary.map((item) => {
          const isOpen = openDays.includes(item.day);

          return (
            <div key={item.day} className="relative">
              {/* Timeline Marker Ring */}
              <button
                type="button"
                onClick={() => toggleDay(item.day)}
                className={`absolute -left-6 sm:-left-8 top-1.5 w-6 sm:w-7 h-6 sm:h-7 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold border-2 transition-all cursor-pointer ${
                  isOpen
                    ? "bg-[#084234] text-white border-[#C5A059] shadow-sm scale-105"
                    : "bg-white text-slate-600 border-slate-300 hover:border-[#084234]"
                }`}
                aria-label={`Hari ${item.day}`}
              >
                {item.day}
              </button>

              {/* Day Accordion Item */}
              <div
                className={`rounded-xl border transition-all duration-150 ${
                  isOpen
                    ? "bg-white border-slate-200 shadow-sm"
                    : "bg-slate-50/60 border-slate-100 hover:border-slate-200"
                }`}
              >
                {/* Header Trigger */}
                <button
                  type="button"
                  onClick={() => toggleDay(item.day)}
                  className="w-full p-4 flex items-center justify-between text-left gap-3 cursor-pointer"
                >
                  <div>
                    <span className="text-[11px] font-bold text-[#C5A059] uppercase tracking-wider block">
                      Hari ke-{item.day}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-[#0F172A] leading-snug">
                      {item.title}
                    </h4>
                  </div>
                  <div className="p-1 rounded-lg bg-slate-100 text-slate-500 shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Collapsible Content */}
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-600 space-y-3 border-t border-slate-100">
                    <p className="leading-relaxed text-slate-700">
                      {item.description}
                    </p>

                    {item.activities && item.activities.length > 0 && (
                      <div className="pt-2">
                        <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                          Agenda Utama:
                        </span>
                        <ul className="space-y-1.5 pl-1">
                          {item.activities.map((act, actIdx) => (
                            <li key={actIdx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#084234] mt-1.5 shrink-0" />
                              <span className="text-xs text-slate-600">{act}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
