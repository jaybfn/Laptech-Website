import Image from "next/image";
import { services, siteConfig, whyLaptech } from "@/lib/data";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";

const sheetClass =
  "pdf-sheet relative mx-auto flex w-[1100px] flex-col overflow-hidden bg-navy-950 text-white-soft";
const sheetStyle = {
  backgroundImage:
    "radial-gradient(ellipse 80% 45% at 50% -10%, rgba(0, 144, 165, 0.16), transparent), linear-gradient(180deg, #0a1528 0%, #0f1f3d 70%, #0a1528 100%)",
} as const;

/** Compact content-sized sheets — each becomes one PDF page (not A4). */
export default function SolutionsBrochurePage() {
  return (
    <div className="space-y-8 bg-black py-8">
      <section
        data-pdf-sheet="about"
        className={sheetClass}
        style={sheetStyle}
      >
          <div className="flex flex-col px-12 py-10">
            <Logo href={false} size="lg" showTagline />

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            About Us
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-white">
            Technology Expertise. Built on Experience.
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-soft">
            LAPTECH provides integrated IT infrastructure, security, networking
            and power solutions for homes, businesses and enterprises. Our
            approach combines quality hardware, professional installation,
            technical expertise and responsive after-sales support.
          </p>

          <div className="mt-7 grid grid-cols-[0.7fr_1.3fr] gap-5">
            <div className="border border-accent/25 bg-accent/10 px-6 py-6">
              <p className="font-display text-5xl font-bold text-accent">
                {siteConfig.experience}
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-slate-soft">
                Of Experience
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-soft">
                From a single device to complete corporate and industrial
                infrastructure — one trusted technology partner.
              </p>
            </div>

            <div className="border border-white/10 bg-navy-900/50 px-6 py-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                How We Work
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-x-5 gap-y-3">
                {[
                  "Planning & consultation",
                  "Supply of quality hardware",
                  "Professional installation",
                  "System integration",
                  "Ongoing AMC & support",
                  "Fast on-site service",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-white-soft">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            {whyLaptech.slice(0, 3).map((item) => (
              <div
                key={item.number}
                className="border border-white/8 bg-navy-900/40 px-4 py-4"
              >
                <p className="text-xs font-semibold text-accent">{item.number}</p>
                <p className="mt-1.5 text-sm font-semibold text-white">
                  {item.title}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-soft">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {services.map((service, index) => (
        <section
          key={service.id}
          data-pdf-sheet={service.id}
          className={sheetClass}
          style={sheetStyle}
        >
          <div className="flex flex-col px-12 py-9">
            <div className="flex items-center justify-between">
              <Logo href={false} size="md" />
              <p className="text-sm text-slate-muted">
                Solution {String(index + 1).padStart(2, "0")} /{" "}
                {String(services.length).padStart(2, "0")}
              </p>
            </div>

            <div className="mt-7 grid grid-cols-[1.05fr_0.95fr] items-start gap-8">
              <div className="flex flex-col">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                  Solutions
                </p>
                <h1 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-white">
                  {service.title}
                </h1>
                <p className="mt-3 text-base leading-relaxed text-slate-soft">
                  {service.description}
                </p>

                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    Key Capabilities
                  </p>
                  <ul className="mt-3 grid grid-cols-2 gap-2.5">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 border border-white/8 bg-navy-900/40 px-3 py-2.5"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span className="text-sm text-white-soft">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md border border-accent/25 bg-accent/10 text-accent">
                    <Icon name={service.icon as IconName} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {siteConfig.contact.whatsapp}
                    </p>
                    <p className="text-xs text-slate-muted">
                      Call / WhatsApp for a free consultation
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative aspect-[4/3] w-full overflow-hidden border border-white/10 bg-navy-900 shadow-[0_0_40px_rgba(0,144,165,0.12)]">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover object-center"
                  sizes="500px"
                  unoptimized
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-navy-950/10" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
              </div>
            </div>
          </div>
        </section>
      ))}

      <section
        data-pdf-sheet="contact"
        className={sheetClass}
        style={sheetStyle}
      >
          <div className="flex flex-col px-12 py-10">
            <Logo href={false} size="lg" showTagline />

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Contact Info
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight text-white">
            Get in touch with LAPTECH
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-soft">
            Reach out for a free consultation — we&apos;re happy to discuss the
            right solution for your home, office or enterprise.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-5">
            <div className="border border-accent/25 bg-accent/10 px-6 py-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-md border border-accent/30 bg-navy-950/40 text-accent">
                <Icon name="whatsapp" className="h-5 w-5" />
              </div>
              <p className="mt-4 text-xs uppercase tracking-wider text-slate-muted">
                WhatsApp / Call
              </p>
              <p className="mt-2 text-2xl font-semibold text-white">
                {siteConfig.contact.whatsapp}
              </p>
            </div>
            <div className="border border-white/10 bg-navy-900/50 px-6 py-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-md border border-white/10 bg-white/5 text-accent">
                <Icon name="mail" className="h-5 w-5" />
              </div>
              <p className="mt-4 text-xs uppercase tracking-wider text-slate-muted">
                Email
              </p>
              <p className="mt-2 text-xl font-semibold text-white">
                {siteConfig.contact.email}
              </p>
            </div>
          </div>

          <div className="mt-5 border border-white/10 bg-navy-950/60 px-6 py-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-md border border-white/10 bg-white/5 text-accent">
              <Icon name="map" className="h-5 w-5" />
            </div>
            <p className="mt-4 text-xs uppercase tracking-wider text-slate-muted">
              Office Address
            </p>
            <p className="mt-2 text-lg font-semibold leading-snug text-white">
              {siteConfig.contact.address}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
