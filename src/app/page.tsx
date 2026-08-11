import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { CredibilityStrip } from "@/components/home/CredibilityStrip";
import { ServicesSection } from "@/components/home/ServicesSection";
import { EcosystemSection } from "@/components/home/EcosystemSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { WhySection } from "@/components/home/WhySection";
import { BrandsSection } from "@/components/home/BrandsSection";
import { AmcCtaSection } from "@/components/home/AmcCtaSection";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ContactInfo } from "@/components/home/ContactInfo";
import { features } from "@/lib/data";

export const metadata: Metadata = {
  title: "LAPTECH | IT Infrastructure, Security & Power Solutions",
  description:
    "LAPTECH delivers end-to-end IT infrastructure, CCTV, networking, power backup and security solutions for homes, businesses and enterprises.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <CredibilityStrip />
      <ServicesSection />
      <EcosystemSection />
      <IndustriesSection limit={6} />
      {features.showProjects ? <ProjectsSection limit={3} /> : null}
      <WhySection />
      <BrandsSection />
      <AboutPreview />
      <AmcCtaSection />
      <ContactInfo />
    </>
  );
}
