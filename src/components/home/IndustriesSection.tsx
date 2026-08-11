import Image from "next/image";
import Link from "next/link";
import { industries } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function IndustriesSection({ limit }: { limit?: number }) {
  const items = limit ? industries.slice(0, limit) : industries;

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Industries"
              title="Solutions Designed Around Your Industry"
              description="Purpose-built technology infrastructure for the environments you operate in."
            />
          </Reveal>
          {limit ? (
            <Reveal delay={2}>
              <Button href="/industries" variant="outline" size="sm">
                View All Industries
              </Button>
            </Reveal>
          ) : null}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((industry, i) => (
            <Reveal
              key={industry.id}
              as="article"
              delay={(Math.min((i % 3) + 1, 4) as 1 | 2 | 3 | 4)}
              className="group overflow-hidden border border-white/8 bg-navy-900/30 transition hover:border-accent/30"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={industry.image}
                  alt={industry.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.05]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/55 via-transparent to-navy-950/10" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">
                  {industry.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-soft">
                  {industry.solutions.join(" · ")}
                </p>
                <Link
                  href="/industries"
                  className="mt-4 inline-block text-sm font-medium text-accent opacity-0 transition group-hover:opacity-100"
                >
                  Learn more →
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
