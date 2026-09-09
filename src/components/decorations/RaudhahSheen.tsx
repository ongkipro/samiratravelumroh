import React from "react";

interface RaudhahSheenProps {
  children: React.ReactNode;
  className?: string;
}

export function RaudhahSheen({ children, className = "" }: RaudhahSheenProps) {
  return (
    <div className={`relative overflow-hidden group ${className}`}>
      {children}
      <div
        className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-amber-200/25 to-transparent skew-x-12"
        aria-hidden="true"
      />
    </div>
  );
}
