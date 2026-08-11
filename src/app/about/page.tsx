import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";
import { PageHero, DefaultPageCtas } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { WhySection } from "@/components/home/WhySection";
import { BrandsSection } from "@/components/home/BrandsSection";
import { ContactSection } from "@/components/home/ContactSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about LAPTECH — 15+ years of experience delivering integrated IT infrastructure, security, networking and power solutions.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About LAPTECH"
        title="Technology Expertise. Built on Experience."
        description="LAPTECH provides integrated IT infrastructure, security, networking and power solutions for homes, businesses and enterprises."
        actions={<DefaultPageCtas />}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Who We Are
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-soft">
              Our approach combines quality hardware, professional installation,
              technical expertise and responsive after-sales support to deliver
              dependable technology infrastructure.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-soft">
              From a single laptop repair to complete corporate and industrial
              infrastructure deployment, LAPTECH is built to be one trusted
              technology partner.
            </p>
          </Reveal>

          <Reveal delay={2} className="border border-white/10 bg-navy-900/40 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Highlight
            </p>
            <p className="mt-3 font-display text-5xl font-bold text-white">
              {siteConfig.experience}
            </p>
            <p className="mt-2 text-slate-soft">
              Experience across IT infrastructure and technology solutions.
            </p>
            <p className="mt-6 text-sm text-slate-muted">
              Additional company history, certifications and team details will
              be added when confirmed. No unverified claims are shown here.
            </p>
          </Reveal>
        </div>
      </section>

      <WhySection />
      <BrandsSection />
      <ContactSection compact />
    </>
  );
}
