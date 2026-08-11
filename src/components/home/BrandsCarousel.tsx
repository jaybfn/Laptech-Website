"use client";

import { brands } from "@/lib/data";

export function BrandsCarousel() {
  const track = [...brands, ...brands];

  return (
    <div className="relative mt-10">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-navy-950 to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-navy-950 to-transparent sm:w-28" />

      <div className="group overflow-hidden py-2">
        <div className="brands-marquee flex w-max gap-4 group-hover:[animation-play-state:paused]">
          {track.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex h-24 w-48 shrink-0 flex-col items-center justify-center gap-2 rounded-md border border-white/10 bg-white px-4 shadow-sm"
              title={brand.name}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                width={140}
                height={48}
                className="h-10 w-auto max-w-[9rem] object-contain"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
              />
              <span className="text-[11px] font-medium tracking-wide text-navy-800">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-5 text-center text-xs text-slate-muted">
        Brands we work with across IT, security, networking, power and peripherals.
      </p>
    </div>
  );
}
