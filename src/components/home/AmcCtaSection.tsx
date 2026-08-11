import { amcFeatures } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function AmcCtaSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden border border-accent/20 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 p-8 sm:p-12 lg:p-16">
          <div className="absolute inset-0 grid-tech opacity-30" />
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <Reveal>
              <SectionHeading
                eyebrow="AMC & Support"
                title="Your Infrastructure Shouldn't Stop When Installation Ends."
                description="LAPTECH provides Annual Maintenance Contracts and ongoing technical support to keep your technology infrastructure reliable and operational."
              />
              <div className="mt-8">
                <Button href="/amc-support" size="lg">
                  Talk to Our Support Team
                  <Icon name="arrow" className="h-4 w-4" />
                </Button>
              </div>
            </Reveal>

            <Reveal delay={2}>
              <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
                {amcFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 border border-white/8 bg-navy-950/50 px-4 py-3 text-sm text-white-soft"
                  >
                    <Icon name="check" className="h-4 w-4 shrink-0 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
