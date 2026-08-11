import type { Metadata } from "next";
import Image from "next/image";
import { industries } from "@/lib/data";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ContactInfo } from "@/components/home/ContactInfo";

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
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={industry.image}
                  alt={industry.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-navy-950/10" />
              </div>
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

      <ContactInfo compact />
    </>
  );
}
