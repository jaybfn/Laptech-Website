import { siteConfig } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function AboutPreview() {
  return (
    <section className="border-y border-white/8 bg-navy-900/30 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="About LAPTECH"
            title="Technology Expertise. Built on Experience."
            description="LAPTECH provides integrated IT infrastructure, security, networking and power solutions for homes, businesses and enterprises."
          />
          <p className="mt-4 text-base leading-relaxed text-slate-soft">
            Our approach combines quality hardware, professional installation,
            technical expertise and responsive after-sales support to deliver
            dependable technology infrastructure.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <div className="border border-accent/25 bg-accent/10 px-5 py-4">
              <p className="font-display text-3xl font-bold text-accent">
                {siteConfig.experience}
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-slate-soft">
                Of Experience
              </p>
            </div>
            <Button href="/about" variant="secondary">
              About Us
              <Icon name="arrow" className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>

        <Reveal delay={2} className="relative border border-white/10 bg-navy-950/60 p-8">
          <div className="absolute inset-0 grid-tech opacity-40" />
          <ul className="relative space-y-5">
            {[
              "Planning & consultation",
              "Supply of quality hardware",
              "Professional installation",
              "System integration",
              "Ongoing AMC & support",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-white-soft">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span className="text-base">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
