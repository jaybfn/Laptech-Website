import Image from "next/image";
import type { ReactNode } from "react";

type SolutionHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: ReactNode;
  imageSrc: string;
  imageAlt: string;
};

export function SolutionHero({
  eyebrow = "Solutions",
  title,
  description,
  actions,
  imageSrc,
  imageAlt,
}: SolutionHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/8 pt-28 pb-16 sm:pt-32 sm:pb-20">
      <div className="absolute inset-0 grid-tech opacity-30" />
      <div className="absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div>
          {eyebrow ? (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="max-w-xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-soft sm:text-lg">
            {description}
          </p>
          {actions ? (
            <div className="mt-8 flex flex-wrap gap-3">{actions}</div>
          ) : null}
        </div>

        <div className="relative mx-auto h-56 w-full max-w-md overflow-hidden border border-white/10 bg-navy-900 shadow-[0_0_40px_rgba(0,144,165,0.1)] sm:h-64 lg:ml-auto lg:h-72 lg:max-w-lg">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 90vw, 480px"
            className="object-cover object-center transition duration-700 hover:scale-[1.03]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-navy-950/10" />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
        </div>
      </div>
    </section>
  );
}
