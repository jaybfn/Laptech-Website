import Link from "next/link";
import { siteConfig, services, features } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Projects", href: "/projects" },
  { label: "AMC & Support", href: "/amc-support" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const links = companyLinks.filter(
    (link) => features.showProjects || link.href !== "/projects"
  );
  return (
    <footer className="border-t border-white/8 bg-navy-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-sm font-bold text-accent">
              L
            </span>
            <span className="font-display text-lg font-bold tracking-[0.08em] text-white">
              LAPTECH
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-soft">
            Complete IT Infrastructure, Security & Power Solutions.
          </p>
          <p className="mt-3 text-xs text-slate-muted">{siteConfig.tagline}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
            Solutions
          </h3>
          <ul className="mt-4 space-y-2.5">
            {services.map((service) => (
              <li key={service.id}>
                <Link
                  href={service.href}
                  className="text-sm text-slate-soft transition hover:text-accent"
                >
                  {service.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
            Company
          </h3>
          <ul className="mt-4 space-y-2.5">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-slate-soft transition hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-soft">
            <li className="flex items-start gap-2.5">
              <Icon name="phone" className="mt-0.5 h-4 w-4 text-accent" />
              <span>{siteConfig.contact.phone}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Icon name="mail" className="mt-0.5 h-4 w-4 text-accent" />
              <span>{siteConfig.contact.email}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Icon name="whatsapp" className="mt-0.5 h-4 w-4 text-accent" />
              <span>{siteConfig.contact.whatsapp}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Icon name="map" className="mt-0.5 h-4 w-4 text-accent" />
              <span>{siteConfig.contact.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-4 py-6 text-xs text-slate-muted sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p>© 2026 LAPTECH. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-slate-soft">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-soft">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
