import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: ReactNode;
};

export function PageHero({ eyebrow, title, description, actions }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/8 pt-28 pb-16 sm:pt-32 sm:pb-20">
      <div className="absolute inset-0 grid-tech opacity-30" />
      <div className="absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {eyebrow ? (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-soft sm:text-lg">
          {description}
        </p>
        {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
      </div>
    </section>
  );
}

export function DefaultPageCtas() {
  return (
    <>
      <Button href="/contact" size="lg">
        Get a Free Consultation
      </Button>
      <Button href="/services" variant="secondary" size="lg">
        Explore Solutions
      </Button>
    </>
  );
}
