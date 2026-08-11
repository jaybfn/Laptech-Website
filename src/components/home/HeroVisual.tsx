"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { services } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";

const INTERVAL_MS = 4500;

export function HeroVisual() {
  const slides = services;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;

  const goTo = (next: number) => {
    setIndex(((next % count) + count) % count);
  };

  useEffect(() => {
    if (paused || count < 2) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused, count]);

  const current = slides[index];

  return (
    <div
      className="relative aspect-[4/3] w-full overflow-hidden lg:aspect-auto lg:min-h-[520px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${
            i === index ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <Image
            src={slide.image}
            alt={slide.imageAlt}
            fill
            priority={i === 0}
            sizes="(max-width: 1024px) 100vw, 560px"
            className={`object-cover object-center transition-transform duration-[4500ms] ease-out ${
              i === index ? "scale-105" : "scale-100"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/35 to-navy-950/20" />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
        </div>
      ))}

      <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
          Solutions
        </p>
        <Link
          href={current.href}
          className="mt-1.5 block text-lg font-semibold text-white transition hover:text-accent-bright sm:text-xl"
        >
          {current.title}
        </Link>
        <p className="mt-1.5 line-clamp-2 max-w-md text-sm text-slate-soft">
          {current.description}
        </p>

        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Solution slides">
            {slides.map((slide, i) => (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show ${slide.shortTitle}`}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index
                    ? "w-6 bg-accent"
                    : "w-1.5 bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous solution"
              onClick={() => goTo(index - 1)}
              className="inline-flex h-9 w-9 items-center justify-center border border-white/15 bg-navy-950/50 text-white transition hover:border-accent/40 hover:text-accent"
            >
              <Icon name="chevron" className="h-4 w-4 rotate-90" />
            </button>
            <button
              type="button"
              aria-label="Next solution"
              onClick={() => goTo(index + 1)}
              className="inline-flex h-9 w-9 items-center justify-center border border-white/15 bg-navy-950/50 text-white transition hover:border-accent/40 hover:text-accent"
            >
              <Icon name="chevron" className="h-4 w-4 -rotate-90" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
