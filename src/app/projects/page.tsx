import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, features } from "@/lib/data";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { VisualPanel } from "@/components/ui/VisualPanel";
import { Reveal } from "@/components/ui/Reveal";
import { ContactInfo } from "@/components/home/ContactInfo";

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description:
    "Explore representative LAPTECH project deployments across corporate, hospitality, retail, education and industrial environments.",
  alternates: { canonical: "/projects" },
  robots: features.showProjects
    ? { index: true, follow: true }
    : { index: false, follow: false },
};

export default function ProjectsPage() {
  if (!features.showProjects) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Built for Real-World Performance"
        description="Placeholder case studies illustrating typical LAPTECH deployments. Client names and metrics will be published when authorized."
        actions={
          <>
            <Button href="/contact" size="lg">
              Discuss Your Project
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              Our Solutions
            </Button>
          </>
        }
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {projects.map((project, i) => (
            <Reveal
              key={project.id}
              as="article"
              id={project.id}
              delay={(Math.min((i % 2) + 1, 4) as 1 | 2 | 3 | 4)}
              className="overflow-hidden border border-white/8 bg-navy-900/30 scroll-mt-28"
            >
              <VisualPanel
                variant={project.image}
                label={project.title}
                className="h-52"
              />
              <div className="p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  {project.industry} · Placeholder Case Study
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  {project.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-soft">
                  {project.description}
                </p>
                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-muted">
                    Solution Provided
                  </p>
                  <p className="mt-1 text-sm text-white-soft">
                    {project.solutions.join(" + ")}
                  </p>
                </div>
                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-muted">
                    Technology Used
                  </p>
                  <p className="mt-1 text-sm text-white-soft">
                    {project.technologies.join(" · ")}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <ContactInfo compact />
    </>
  );
}
