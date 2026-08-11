import Link from "next/link";
import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VisualPanel } from "@/components/ui/VisualPanel";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function ProjectsSection({ limit = 3 }: { limit?: number }) {
  const items = projects.slice(0, limit);

  return (
    <section className="border-y border-white/8 bg-navy-900/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Projects"
              title="Built for Real-World Performance"
              description="Representative deployments across industries. Project details shown as placeholders until LAPTECH case studies are published."
            />
          </Reveal>
          <Reveal delay={2}>
            <Button href="/projects" variant="outline" size="sm">
              View All Projects
            </Button>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {items.map((project, i) => (
            <Reveal
              key={project.id}
              as="article"
              delay={(Math.min(i + 1, 4) as 1 | 2 | 3 | 4)}
              className="group flex flex-col overflow-hidden border border-white/8 bg-navy-950/60 transition hover:border-accent/30"
            >
              <div className="overflow-hidden">
                <VisualPanel
                  variant={project.image}
                  label={project.title}
                  className="h-48 transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  {project.industry}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-soft">
                  {project.description}
                </p>
                <p className="mt-4 text-xs text-slate-muted">
                  {project.solutions.join(" + ")}
                </p>
                <Link
                  href={`/projects#${project.id}`}
                  className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-accent"
                >
                  View Case Study
                  <Icon name="arrow" className="h-3.5 w-3.5" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
