import type { Metadata } from "next";
import { amcFeatures } from "@/lib/data";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { ContactInfo } from "@/components/home/ContactInfo";

export const metadata: Metadata = {
  title: "AMC & Support",
  description:
    "LAPTECH Annual Maintenance Contracts and on-site technical support for CCTV, networking, IT hardware and power backup systems.",
  alternates: { canonical: "/amc-support" },
};

export default function AmcSupportPage() {
  return (
    <>
      <PageHero
        eyebrow="AMC & Support"
        title="Your Infrastructure Shouldn't Stop When Installation Ends."
        description="LAPTECH provides Annual Maintenance Contracts and ongoing technical support to keep your technology infrastructure reliable and operational."
        actions={
          <>
            <Button href="/contact" size="lg">
              Talk to Our Support Team
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              View Services
            </Button>
          </>
        }
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              What&apos;s Included
            </h2>
            <p className="mt-3 max-w-2xl text-slate-soft">
              Structured maintenance programs designed for uptime, early issue
              detection and responsive on-site assistance.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {amcFeatures.map((feature, i) => (
              <Reveal
                key={feature}
                delay={(Math.min((i % 3) + 1, 4) as 1 | 2 | 3 | 4)}
                className="flex items-center gap-3 border border-white/8 bg-navy-900/40 px-5 py-4"
              >
                <Icon name="check" className="h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm font-medium text-white-soft">
                  {feature}
                </span>
              </Reveal>
            ))}
          </div>

          <Reveal delay={2} className="mt-14 border border-accent/20 bg-navy-900/50 p-8 sm:p-10">
            <h3 className="text-xl font-semibold text-white">
              Need urgent assistance?
            </h3>
            <p className="mt-2 max-w-xl text-sm text-slate-soft">
              Reach out through the contact form and select &quot;AMC /
              Support&quot; so our team can prioritize your request.
            </p>
            <Button href="/contact" className="mt-6">
              Request Support
              <Icon name="arrow" className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>
      </section>

      <ContactInfo compact />
    </>
  );
}
