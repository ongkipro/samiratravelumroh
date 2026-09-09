import React from "react";

export type BrushVariant = "gold" | "emerald" | "amber" | "sand" | "sage";

interface BrushBackgroundProps {
  variant?: BrushVariant;
  className?: string;
  intensity?: "soft" | "medium" | "vibrant";
}

/**
 * Natural organic brush stroke SVG wash that replaces rigid mechanical pills
 * with an authentic calligraphic, artisanal watercolor wash.
 */
export function NaturalBrushStroke({
  variant = "emerald",
  className = "",
  intensity = "medium",
}: BrushBackgroundProps) {
  // Color palette calibrated for Islamic luxury Madinah Noor aesthetic
  const palette = {
    emerald: {
      wash: "#084234",
      accent: "#0B5241",
      glow: "rgba(8, 66, 52, 0.14)",
      stops: [
        { offset: "0%", color: "#084234", opacity: 0.12 },
        { offset: "28%", color: "#0D5D4A", opacity: 0.18 },
        { offset: "65%", color: "#084234", opacity: 0.15 },
        { offset: "100%", color: "#0B5241", opacity: 0.08 },
      ],
      coreStops: [
        { offset: "5%", color: "#084234", opacity: 0.08 },
        { offset: "50%", color: "#0B5241", opacity: 0.14 },
        { offset: "95%", color: "#084234", opacity: 0.06 },
      ],
    },
    sage: {
      wash: "#0F766E",
      accent: "#084234",
      glow: "rgba(15, 118, 110, 0.12)",
      stops: [
        { offset: "0%", color: "#134E4A", opacity: 0.10 },
        { offset: "35%", color: "#0F766E", opacity: 0.16 },
        { offset: "70%", color: "#115E59", opacity: 0.14 },
        { offset: "100%", color: "#134E4A", opacity: 0.06 },
      ],
      coreStops: [
        { offset: "0%", color: "#0F766E", opacity: 0.06 },
        { offset: "50%", color: "#134E4A", opacity: 0.12 },
        { offset: "100%", color: "#0F766E", opacity: 0.05 },
      ],
    },
    gold: {
      wash: "#C5A059",
      accent: "#E6CA65",
      glow: "rgba(197, 160, 89, 0.18)",
      stops: [
        { offset: "0%", color: "#9B7832", opacity: 0.14 },
        { offset: "32%", color: "#C5A059", opacity: 0.22 },
        { offset: "68%", color: "#E6CA65", opacity: 0.20 },
        { offset: "100%", color: "#9B7832", opacity: 0.10 },
      ],
      coreStops: [
        { offset: "0%", color: "#C5A059", opacity: 0.10 },
        { offset: "50%", color: "#E6CA65", opacity: 0.16 },
        { offset: "100%", color: "#C5A059", opacity: 0.08 },
      ],
    },
    amber: {
      wash: "#D97706",
      accent: "#F59E0B",
      glow: "rgba(217, 119, 6, 0.15)",
      stops: [
        { offset: "0%", color: "#B45309", opacity: 0.12 },
        { offset: "40%", color: "#D97706", opacity: 0.18 },
        { offset: "80%", color: "#F59E0B", opacity: 0.16 },
        { offset: "100%", color: "#B45309", opacity: 0.08 },
      ],
      coreStops: [
        { offset: "0%", color: "#D97706", opacity: 0.08 },
        { offset: "50%", color: "#F59E0B", opacity: 0.14 },
        { offset: "100%", color: "#D97706", opacity: 0.06 },
      ],
    },
    sand: {
      wash: "#A89F91",
      accent: "#E8E3DA",
      glow: "rgba(168, 159, 145, 0.12)",
      stops: [
        { offset: "0%", color: "#8C8275", opacity: 0.14 },
        { offset: "35%", color: "#A89F91", opacity: 0.20 },
        { offset: "70%", color: "#C5BCAD", opacity: 0.18 },
        { offset: "100%", color: "#8C8275", opacity: 0.10 },
      ],
      coreStops: [
        { offset: "0%", color: "#8C8275", opacity: 0.08 },
        { offset: "50%", color: "#A89F91", opacity: 0.14 },
        { offset: "100%", color: "#8C8275", opacity: 0.06 },
      ],
    },
  };

  const current = palette[variant] || palette.emerald;
  const gradientId = `brush-grad-${variant}-${intensity}`;
  const coreGradId = `brush-core-${variant}-${intensity}`;

  const opacityMultiplier = intensity === "soft" ? 0.7 : intensity === "vibrant" ? 1.35 : 1.0;

  return (
    <svg
      viewBox="0 0 320 44"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute inset-0 w-full h-full pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="50%" x2="100%" y2="50%">
          {current.stops.map((stop, idx) => (
            <stop
              key={idx}
              offset={stop.offset}
              stopColor={stop.color}
              stopOpacity={Math.min(1, stop.opacity * opacityMultiplier)}
            />
          ))}
        </linearGradient>

        <linearGradient id={coreGradId} x1="3%" y1="50%" x2="97%" y2="50%">
          {current.coreStops.map((stop, idx) => (
            <stop
              key={idx}
              offset={stop.offset}
              stopColor={stop.color}
              stopOpacity={Math.min(1, stop.opacity * opacityMultiplier)}
            />
          ))}
        </linearGradient>

        {/* Subtle watercolor paper grain filter for authentic natural brush feel */}
        <filter id={`grain-${variant}`} x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.04 0.9" numOctaves="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.5" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>

      {/* Layer 1: Broad soft watercolor wash with calligraphic ragged brush edges */}
      <path
        d="M 12 21 C 28 9, 78 12, 138 9 C 198 6, 258 10, 296 15 C 310 17, 317 22, 311 27 C 298 33, 238 35, 168 37 C 98 39, 38 36, 14 31 C 3 28, 4 23, 12 21 Z"
        fill={`url(#${gradientId})`}
        filter={`url(#grain-${variant})`}
      />

      {/* Layer 2: Core pigment spine with organic calligraphy bristle contours */}
      <path
        d="M 22 19 C 55 13, 115 15, 172 12 C 228 9, 272 13, 298 18 C 305 21, 295 26, 272 29 C 215 33, 112 34, 38 27 C 18 24, 17 21, 22 19 Z"
        fill={`url(#${coreGradId})`}
      />

      {/* Layer 3: Natural dry-brush whispers & bristle feathering at start & end */}
      <path
        d="M 8 23 C 14 21, 25 22, 34 23 M 6 25 C 12 24, 22 25, 30 26 M 285 17 C 298 18, 308 20, 314 21 M 290 28 C 300 27, 309 25, 313 23"
        stroke={current.wash}
        strokeWidth="0.8"
        strokeOpacity={0.25 * opacityMultiplier}
        strokeLinecap="round"
      />
    </svg>
  );
}

interface NaturalBrushBadgeProps {
  children: React.ReactNode;
  variant?: BrushVariant;
  className?: string;
  intensity?: "soft" | "medium" | "vibrant";
  asHeading?: boolean;
}

/**
 * Natural Brush Badge Component
 * Replaces generic rounded-full pills with an organic artisanal brush stroke.
 */
export function NaturalBrushBadge({
  children,
  variant = "emerald",
  className = "",
  intensity = "medium",
}: NaturalBrushBadgeProps) {
  const textColors = {
    emerald: "text-[#084234]",
    sage: "text-[#0F766E]",
    gold: "text-[#9B7832]",
    amber: "text-[#B45309]",
    sand: "text-[#6B5E52]",
  };

  return (
    <span
      className={`relative inline-flex items-center justify-center px-4 sm:px-5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] ${textColors[variant]} transition-all group ${className}`}
    >
      <NaturalBrushStroke variant={variant} intensity={intensity} />
      <span className="relative z-10 flex items-center gap-1.5 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
        {children}
      </span>
    </span>
  );
}

interface NaturalBrushHighlightProps {
  children: React.ReactNode;
  variant?: BrushVariant;
  className?: string;
}

/**
 * Editorial Natural Brush Underline / Highlighter
 * Emphasizes words or phrases inside headings with an authentic watercolor brush underlay.
 */
export function NaturalBrushHighlight({
  children,
  variant = "gold",
  className = "",
}: NaturalBrushHighlightProps) {
  return (
    <span className={`relative inline-block font-bold ${className}`}>
      <span className="relative z-10">{children}</span>
      <svg
        viewBox="0 0 160 18"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 left-0 right-0 w-full h-2.5 sm:h-3 -z-0 pointer-events-none opacity-80"
        aria-hidden="true"
      >
        <path
          d="M 2 12 C 25 7, 70 8, 110 6 C 135 4, 155 7, 158 10 C 150 14, 115 15, 75 16 C 35 17, 10 15, 2 12 Z"
          fill={variant === "gold" ? "#C5A059" : variant === "emerald" ? "#084234" : "#D97706"}
          fillOpacity={0.28}
        />
      </svg>
    </span>
  );
}

interface FlightLedgerSealProps {
  className?: string;
  airlinesText?: string;
  charterRouteText?: string;
}

/**
 * Editorial Airline Flight Ledger Seal
 * Replaces the generic plane pill badge with a bespoke, prestigious aviation endorsement.
 * Features an organic natural brush parchment background, Madinah Noor accents, and clean typography.
 */
export function FlightLedgerSeal({
  className = "",
  airlinesText = "Lion Air Charter & Saudia Airlines",
  charterRouteText = "Direct Flight Terjamin",
}: FlightLedgerSealProps) {
  return (
    <div
      className={`relative inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-[#FAF8F5]/95 border border-[#E8E3DA] shadow-xs backdrop-blur-xs transition-all hover:border-[#C5A059]/60 group ${className}`}
    >
      {/* Background Natural Brush Wash in Soft Sand/Gold */}
      <NaturalBrushStroke variant="gold" intensity="soft" />

      {/* Flight Icon Glyph in Burnished Gold Ring */}
      <div className="relative z-10 w-6 h-6 rounded-lg bg-[#084234]/8 border border-[#084234]/15 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#084234] transition-all">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-3.5 h-3.5 text-[#084234] group-hover:text-[#E6CA65] transition-colors"
        >
          <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
        </svg>
      </div>

      {/* Typography: Micro Airline Ledger with Direct Status */}
      <div className="relative z-10 flex flex-col text-left leading-none">
        <div className="flex items-center gap-1.5 text-[9px] font-extrabold uppercase tracking-wider text-[#9B7832]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
          <span>{charterRouteText}</span>
        </div>
        <div className="text-xs font-bold text-[#0F172A] tracking-tight mt-0.5">
          {airlinesText}
        </div>
      </div>
    </div>
  );
}
