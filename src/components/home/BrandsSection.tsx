import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { BrandsCarousel } from "@/components/home/BrandsCarousel";

export function BrandsSection() {
  return (
    <section className="border-y border-white/8 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Brands"
            title="Technology From Brands You Trust"
            description="We source and deploy technology from leading global and trusted brands across IT, security, networking, power and peripherals."
          />
        </Reveal>

        {/* Keep carousel outside Reveal so logos are always visible */}
        <BrandsCarousel />
      </div>
    </section>
  );
}
