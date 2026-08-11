import { brandPlaceholders } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function BrandsSection() {
  return (
    <section className="border-y border-white/8 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Brands"
            title="Technology From Brands You Trust"
            description="Partner brand logos will appear here once confirmed. Placeholders only — no invented partnerships."
          />
        </Reveal>

        <Reveal delay={2} className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {brandPlaceholders.map((label, i) => (
            <div
              key={`${label}-${i}`}
              className="flex h-20 items-center justify-center border border-white/8 bg-white/[0.02] grayscale"
            >
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-muted">
                [{label}]
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
