import type { Metadata } from "next";
import { industries } from "@/lib/data";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { VisualPanel } from "@/components/ui/VisualPanel";
import { Reveal } from "@/components/ui/Reveal";
import { ContactSection } from "@/components/home/ContactSection";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "LAPTECH designs IT infrastructure, security, networking and power solutions for offices, hotels, hospitals, retail, manufacturing and more.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Solutions Designed Around Your Industry"
        description="Whether you run a corporate office, hotel, campus, hospital or factory — LAPTECH builds technology infrastructure around how you operate."
        actions={
          <>
            <Button href="/contact" size="lg">
              Get a Free Consultation
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              View Services
            </Button>
          </>
        }
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          {industries.map((industry, i) => (
            <Reveal
              key={industry.id}
              as="article"
              delay={(Math.min((i % 3) + 1, 4) as 1 | 2 | 3 | 4)}
              className="overflow-hidden border border-white/8 bg-navy-900/30"
            >
              <VisualPanel
                variant={industry.image}
                label={industry.title}
                className="h-44"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-white">
                  {industry.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-soft">
                  {industry.solutions.join(" · ")}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <ContactSection compact />
    </>
  );
}
