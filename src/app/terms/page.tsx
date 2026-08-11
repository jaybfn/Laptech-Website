import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { features } from "@/lib/data";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for the LAPTECH website.",
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  if (!features.showLegal) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="Placeholder terms. Replace with your legal counsel-approved terms before launch."
      />
      <section className="pb-24">
        <div className="mx-auto max-w-3xl space-y-4 px-4 text-sm leading-relaxed text-slate-soft sm:px-6 lg:px-8">
          <p>
            By using this website you agree to these terms. Content is provided
            for informational purposes about LAPTECH services.
          </p>
          <p>
            [Placeholder] Add usage restrictions, liability limitations,
            governing law and other contractual terms here.
          </p>
        </div>
      </section>
    </>
  );
}
