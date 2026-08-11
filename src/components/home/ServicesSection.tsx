import Link from "next/link";
import { services } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function ServicesSection({ hideHeading = false }: { hideHeading?: boolean }) {
  return (
    <section className="relative py-20 sm:py-28" id="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {!hideHeading ? (
          <Reveal>
            <SectionHeading
              eyebrow="Services"
              title="Technology Infrastructure. Built End-to-End."
              description="From individual devices to complete enterprise infrastructure, LAPTECH provides integrated technology solutions designed for reliability, security and performance."
            />
          </Reveal>
        ) : null}

        <div className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ${hideHeading ? "" : "mt-14"}`}>
          {services.map((service, i) => (
            <Reveal
              key={service.id}
              as="article"
              delay={(Math.min((i % 4) + 1, 4) as 1 | 2 | 3 | 4)}
              className="group flex flex-col border border-white/8 bg-navy-900/40 p-6 transition duration-300 hover:border-accent/35 hover:bg-navy-800/50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-md border border-accent/25 bg-accent/10 text-accent transition group-hover:border-accent/50 group-hover:bg-accent/15">
                <Icon name={service.icon as IconName} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-soft">
                {service.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {service.features.slice(0, 4).map((feature) => (
                  <li
                    key={feature}
                    className="rounded border border-white/8 bg-white/[0.03] px-2 py-0.5 text-[11px] text-slate-muted"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={service.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition group-hover:gap-3"
              >
                {service.cta}
                <Icon name="arrow" className="h-3.5 w-3.5" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
