import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ContactInfo } from "@/components/home/ContactInfo";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact LAPTECH on WhatsApp or visit our office for IT infrastructure, CCTV, networking, power backup, fire safety and AMC support.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Build Your Technology Infrastructure."
        description="Message us on WhatsApp for a quick consultation, or visit our office to discuss your requirements in person."
      />
      <ContactInfo />
    </>
  );
}
