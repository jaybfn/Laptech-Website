import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for the LAPTECH website.",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="Placeholder privacy policy. Replace with your legal counsel-approved policy before launch."
      />
      <section className="pb-24">
        <div className="mx-auto max-w-3xl space-y-4 px-4 text-sm leading-relaxed text-slate-soft sm:px-6 lg:px-8">
          <p>
            LAPTECH respects your privacy. Information submitted through forms
            on this website will be used only to respond to enquiries and
            provide requested services.
          </p>
          <p>
            [Placeholder] Detail data collection practices, retention periods,
            third-party processors and contact for privacy requests here.
          </p>
        </div>
      </section>
    </>
  );
}
