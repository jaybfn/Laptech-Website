import type { Metadata } from "next";
import { ServicesSection } from "@/components/home/ServicesSection";
import { EcosystemSection } from "@/components/home/EcosystemSection";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { ContactInfo } from "@/components/home/ContactInfo";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore LAPTECH services: IT hardware, CCTV & surveillance, networking, power backup, fire safety, and intercom & audio solutions.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Technology Infrastructure. Built End-to-End."
        description="From individual devices to complete enterprise infrastructure, LAPTECH provides integrated technology solutions designed for reliability, security and performance."
        actions={
          <>
            <Button href="/contact" size="lg">
              Get a Free Consultation
            </Button>
            <Button href="/solutions/cctv-security" variant="secondary" size="lg">
              Browse Solutions
            </Button>
          </>
        }
      />
      <ServicesSection hideHeading />
      <EcosystemSection />
      <ContactInfo compact />
    </>
  );
}
