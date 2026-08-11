import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/Icon";
import { ContactInfo } from "@/components/home/ContactInfo";
import { AmcCtaSection } from "@/components/home/AmcCtaSection";
import { SolutionHero } from "@/components/solutions/SolutionHero";

type SolutionPageProps = {
  params: Promise<{ slug: string }>;
};

const slugMap: Record<string, string> = {
  "it-hardware": "it-hardware",
  "cctv-security": "cctv",
  "biometrics-access-control": "biometrics",
  "biometrics-vdp": "biometrics", // legacy URL
  "video-door-phone": "vdp",
  networking: "networking",
  "power-backup": "power",
  "fire-safety": "fire",
  "epabx-intercom": "epabx",
  "commercial-audio-pa": "audio-pa",
  "intercom-audio": "audio-pa", // legacy URL
};

export function generateStaticParams() {
  return Object.keys(slugMap).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: SolutionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.id === slugMap[slug]);
  if (!service) return { title: "Solution" };

  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/solutions/${slug}` },
    openGraph: {
      title: service.title,
      description: service.description,
      images: [{ url: service.image, alt: service.imageAlt }],
    },
  };
}

export default async function SolutionPage({ params }: SolutionPageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slugMap[slug]);
  if (!service) notFound();

  return (
    <>
      <SolutionHero
        title={service.title}
        description={service.description}
        imageSrc={service.image}
        imageAlt={service.imageAlt}
        actions={
          <>
            <Button href="/contact" size="lg">
              Get a Free Consultation
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              All Services
            </Button>
          </>
        }
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <div className="border border-white/10 bg-navy-900/40 p-8">
                <span className="flex h-14 w-14 items-center justify-center rounded-md border border-accent/25 bg-accent/10 text-accent">
                  <Icon name={service.icon as IconName} className="h-7 w-7" />
                </span>
                <h2 className="mt-6 text-2xl font-bold text-white">
                  What We Deliver
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-soft">
                  Planning, supply, professional installation and support —
                  tailored to your site and operational needs.
                </p>
              </div>
            </Reveal>

            <Reveal delay={2}>
              <h2 className="text-2xl font-bold text-white">Capabilities</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 border border-white/8 bg-navy-900/30 px-4 py-3 text-sm text-white-soft"
                  >
                    <Icon name="check" className="h-4 w-4 shrink-0 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <AmcCtaSection />
      <ContactInfo compact />
    </>
  );
}
