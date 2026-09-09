import React from "react";

interface CanopyPatternProps {
  className?: string;
  opacity?: number;
  size?: number;
}

export function CanopyPattern({
  className = "",
  opacity = 0.04,
  size = 600,
}: CanopyPatternProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* 8-pointed star & Nabawi canopy architectural tessellation */}
      <g stroke="#C5A059" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Outer Ring */}
        <circle cx="300" cy="300" r="280" strokeDasharray="4 6" />
        <circle cx="300" cy="300" r="240" />
        <circle cx="300" cy="300" r="180" />
        <circle cx="300" cy="300" r="120" />
        <circle cx="300" cy="300" r="60" />

        {/* 8 Cardinal & Diagonal Axes */}
        <line x1="300" y1="20" x2="300" y2="580" />
        <line x1="20" y1="300" x2="580" y2="300" />
        <line x1="102" y1="102" x2="498" y2="498" />
        <line x1="102" y1="498" x2="498" y2="102" />

        {/* 8-Pointed Star Interlacing (Rub el Hizb inspired) */}
        <polygon points="300,60 470,130 540,300 470,470 300,540 130,470 60,300 130,130" />
        <polygon points="300,120 427,173 480,300 427,427 300,480 173,427 120,300 173,173" />
        <rect x="180" y="180" width="240" height="240" transform="rotate(0 300 300)" />
        <rect x="180" y="180" width="240" height="240" transform="rotate(45 300 300)" />
        <rect x="220" y="220" width="160" height="160" transform="rotate(22.5 300 300)" />
        <rect x="220" y="220" width="160" height="160" transform="rotate(67.5 300 300)" />

        {/* Geometric radiating petals */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => (
          <path
            key={idx}
            d="M300,180 Q330,240 300,300 Q270,240 300,180"
            transform={`rotate(${angle} 300 300)`}
          />
        ))}
      </g>
    </svg>
  );
}
