import { whyLaptech } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function WhySection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
      <div className="absolute inset-0 grid-tech opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Why LAPTECH"
            title="Why Businesses Choose LAPTECH"
            description="Engineering expertise, reliable delivery and long-term support — built for decision-makers who need infrastructure that works."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyLaptech.map((item, i) => (
            <Reveal
              key={item.number}
              delay={(Math.min((i % 3) + 1, 4) as 1 | 2 | 3 | 4)}
              className="border border-white/8 bg-white/[0.02] p-6 transition hover:border-accent/30"
            >
              <span className="font-display text-4xl font-bold tracking-tight text-accent/40 transition group-hover:text-accent">
                {item.number}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-soft">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
