import Link from "next/link";
import { siteConfig } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { HeroVisual } from "@/components/home/HeroVisual";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-24">
      <div className="absolute inset-0 grid-tech opacity-40" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-8 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:pb-24 lg:pt-12">
        <div>
          <p className="mb-5 font-display text-sm font-bold uppercase tracking-[0.28em] text-accent">
            LAPTECH
          </p>
          <h1 className="max-w-xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
            {siteConfig.heroHeadline}
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-soft sm:text-lg">
            {siteConfig.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact" size="lg">
              Get a Free Consultation
              <Icon name="arrow" className="h-4 w-4" />
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              Explore Our Solutions
            </Button>
          </div>
          <p className="mt-8 text-sm text-slate-muted">
            <Link href="/about" className="text-slate-soft underline-offset-4 hover:text-accent hover:underline">
              {siteConfig.experience} Experience
            </Link>
            {" · "}
            End-to-end infrastructure partner
          </p>
        </div>

        <div className="relative border border-white/10 bg-navy-900/40 shadow-[0_0_80px_rgba(0,168,232,0.08)]">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
