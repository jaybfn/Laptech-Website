import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Brand Kit",
  description:
    "LAPTECH brand kit — logo, color palette, typography, letterhead, visiting cards, and email signature.",
  alternates: { canonical: "/brand-kit" },
  robots: { index: false, follow: false },
};

const colors = [
  { name: "Navy 950", hex: "#0A1528", role: "Base background", className: "bg-navy-950" },
  { name: "Navy 900", hex: "#0F1F3D", role: "Surfaces", className: "bg-navy-900" },
  { name: "Navy 800", hex: "#162D53", role: "Panels", className: "bg-navy-800" },
  { name: "Accent", hex: "#0090A5", role: "Links & focus", className: "bg-accent" },
  { name: "Accent Bright", hex: "#14ADC4", role: "Logo / glow", className: "bg-accent-bright" },
  { name: "Gold", hex: "#FEBE3B", role: "Primary CTA", className: "bg-gold text-navy-950" },
  { name: "Gold Bright", hex: "#FFCF66", role: "Hover", className: "bg-gold-bright text-navy-950" },
  { name: "Off White", hex: "#F5F7F8", role: "Light docs", className: "bg-off-white text-navy-950" },
];

const downloads = [
  { label: "Logo mark", href: "/brand/laptech-logo-mark.svg", file: "laptech-logo-mark.svg" },
  { label: "Wordmark", href: "/brand/laptech-wordmark.svg", file: "laptech-wordmark.svg" },
  { label: "Logo lockup", href: "/brand/kit/logo-lockup.svg", file: "logo-lockup.svg" },
  { label: "Color palette", href: "/brand/kit/color-palette.svg", file: "color-palette.svg" },
  { label: "Typography", href: "/brand/kit/typography.svg", file: "typography.svg" },
  { label: "Letterhead (dark)", href: "/brand/kit/letterhead-dark.svg", file: "letterhead-dark.svg" },
  { label: "Letterhead (light)", href: "/brand/kit/letterhead-light.svg", file: "letterhead-light.svg" },
  { label: "Visiting card front", href: "/brand/kit/visiting-card-front.svg", file: "visiting-card-front.svg" },
  { label: "Visiting card back", href: "/brand/kit/visiting-card-back.svg", file: "visiting-card-back.svg" },
  { label: "Email signature HTML", href: "/brand/kit/email-signature.html", file: "email-signature.html" },
  { label: "Social cover", href: "/brand/kit/social-cover.svg", file: "social-cover.svg" },
  { label: "Social avatar", href: "/brand/kit/social-avatar.svg", file: "social-avatar.svg" },
];

function AssetFrame({
  src,
  alt,
  aspect = "aspect-[16/9]",
}: {
  src: string;
  alt: string;
  aspect?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden border border-white/10 bg-navy-900/50 ${aspect}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-contain p-2" />
    </div>
  );
}

export default function BrandKitPage() {
  return (
    <>
      <PageHero
        eyebrow="Brand Kit"
        title="LAPTECH visual identity"
        description="Logo, colors, type, stationery, and signatures pulled from the website design — ready to download and use."
        actions={
          <>
            <Button href="/brand/kit/logo-lockup.svg" download="laptech-logo-lockup.svg" size="lg">
              Download lockup
            </Button>
            <Button href="#downloads" variant="secondary" size="lg">
              All assets
            </Button>
          </>
        }
      />

      {/* Brand mark */}
      <section className="border-b border-white/8 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Brand mark
            </p>
            <h2 className="mt-3 max-w-2xl text-2xl font-bold text-white sm:text-3xl">
              Shield + circuit L — connectivity, protection, infrastructure.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <AssetFrame src="/brand/kit/logo-lockup.svg" alt="LAPTECH logo lockup" />
              <p className="mt-3 text-sm text-slate-muted">
                Primary lockup — mark + wordmark + tagline
              </p>
            </Reveal>
            <Reveal delay={2}>
              <AssetFrame src="/brand/kit/logo-usage.svg" alt="Logo usage guidelines" />
              <p className="mt-3 text-sm text-slate-muted">Clear space and usage notes</p>
            </Reveal>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <Reveal>
              <div className="flex h-40 items-center justify-center border border-white/10 bg-navy-900/40">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/brand/laptech-logo-mark.svg"
                  alt="Logo mark"
                  className="h-[72px] w-[72px]"
                />
              </div>
              <p className="mt-2 text-sm text-slate-soft">Mark only</p>
            </Reveal>
            <Reveal delay={2}>
              <div className="flex h-40 items-center justify-center border border-white/10 bg-navy-900/40 px-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/brand/laptech-wordmark.svg"
                  alt="Wordmark"
                  className="h-16 w-auto max-w-full"
                />
              </div>
              <p className="mt-2 text-sm text-slate-soft">Wordmark</p>
            </Reveal>
            <Reveal delay={3}>
              <div className="flex h-40 items-center justify-center border border-white/10 bg-navy-900/40">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/brand/kit/social-avatar.svg"
                  alt="Avatar"
                  className="h-24 w-24 rounded-full"
                />
              </div>
              <p className="mt-2 text-sm text-slate-soft">Social avatar</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Colors */}
      <section className="border-b border-white/8 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Color palette
            </p>
            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              Navy foundation. Cyan energy. Gold action.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {colors.map((c, i) => (
              <Reveal key={c.hex} delay={(Math.min(i, 3) + 1) as 1 | 2 | 3 | 4}>
                <div className={`h-28 ${c.className}`} />
                <div className="border border-t-0 border-white/10 bg-navy-900/40 px-4 py-3">
                  <p className="font-display text-sm font-bold text-white">{c.name}</p>
                  <p className="mt-0.5 font-mono text-xs text-accent-bright">{c.hex}</p>
                  <p className="mt-1 text-xs text-slate-muted">{c.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8">
            <AssetFrame
              src="/brand/kit/color-palette.svg"
              alt="Full color palette board"
              aspect="aspect-[5/3]"
            />
            <div className="mt-4">
              <Button
                href="/brand/kit/color-palette.svg"
                download="laptech-color-palette.svg"
                variant="outline"
                size="sm"
              >
                Download palette board
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Typography */}
      <section className="border-b border-white/8 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Typography
            </p>
            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              Manrope for display. Plus Jakarta Sans for body.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <Reveal className="border border-white/10 bg-navy-900/40 p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Display — Manrope
              </p>
              <p className="mt-6 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Complete IT Infrastructure
              </p>
              <p className="mt-4 font-display text-xl font-extrabold tracking-[0.14em] text-white">
                LAP
                <span className="bg-gradient-to-r from-accent-bright to-gold bg-clip-text text-transparent">
                  TECH
                </span>
              </p>
              <p className="mt-6 text-sm text-slate-muted">
                Weights 600–800 · Headlines −0.02em · Wordmark 0.14em
              </p>
            </Reveal>
            <Reveal delay={2} className="border border-white/10 bg-navy-900/40 p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Body — Plus Jakarta Sans
              </p>
              <p className="mt-6 text-lg leading-relaxed text-white-soft">
                {siteConfig.tagline}
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-soft">
                {siteConfig.description}
              </p>
              <p className="mt-6 text-sm text-slate-muted">
                Weights 400–600 · UI, forms, and long-form copy
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stationery */}
      <section className="border-b border-white/8 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Stationery
            </p>
            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              Letterheads &amp; visiting cards
            </h2>
            <p className="mt-3 max-w-2xl text-slate-soft">
              A4 letterheads (dark + light) and 90×50mm visiting cards. Replace
              “Your Name” on the card back and signature before printing.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <AssetFrame
                src="/brand/kit/letterhead-dark.svg"
                alt="Dark letterhead"
                aspect="aspect-[210/297]"
              />
              <div className="mt-3 flex items-center justify-between gap-3">
                <p className="text-sm text-slate-soft">Letterhead — dark</p>
                <Button
                  href="/brand/kit/letterhead-dark.svg"
                  download="laptech-letterhead-dark.svg"
                  variant="ghost"
                  size="sm"
                >
                  Download
                </Button>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <AssetFrame
                src="/brand/kit/letterhead-light.svg"
                alt="Light letterhead"
                aspect="aspect-[210/297]"
              />
              <div className="mt-3 flex items-center justify-between gap-3">
                <p className="text-sm text-slate-soft">Letterhead — light</p>
                <Button
                  href="/brand/kit/letterhead-light.svg"
                  download="laptech-letterhead-light.svg"
                  variant="ghost"
                  size="sm"
                >
                  Download
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <AssetFrame
                src="/brand/kit/visiting-card-front.svg"
                alt="Visiting card front"
                aspect="aspect-[105/60]"
              />
              <div className="mt-3 flex items-center justify-between gap-3">
                <p className="text-sm text-slate-soft">Visiting card — front</p>
                <Button
                  href="/brand/kit/visiting-card-front.svg"
                  download="laptech-visiting-card-front.svg"
                  variant="ghost"
                  size="sm"
                >
                  Download
                </Button>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <AssetFrame
                src="/brand/kit/visiting-card-back.svg"
                alt="Visiting card back"
                aspect="aspect-[105/60]"
              />
              <div className="mt-3 flex items-center justify-between gap-3">
                <p className="text-sm text-slate-soft">Visiting card — back</p>
                <Button
                  href="/brand/kit/visiting-card-back.svg"
                  download="laptech-visiting-card-back.svg"
                  variant="ghost"
                  size="sm"
                >
                  Download
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Signature & social */}
      <section className="border-b border-white/8 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Signature &amp; social
            </p>
            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              Email signature and profile templates
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <AssetFrame
                src="/brand/kit/email-signature-preview.svg"
                alt="Email signature"
                aspect="aspect-[3/1]"
              />
              <div className="mt-3 flex flex-wrap gap-2">
                <Button
                  href="/brand/kit/email-signature.html"
                  download="laptech-email-signature.html"
                  variant="outline"
                  size="sm"
                >
                  Download HTML signature
                </Button>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <AssetFrame
                src="/brand/kit/social-cover.svg"
                alt="Social cover"
                aspect="aspect-[4/1]"
              />
              <div className="mt-3 flex flex-wrap gap-2">
                <Button
                  href="/brand/kit/social-cover.svg"
                  download="laptech-social-cover.svg"
                  variant="outline"
                  size="sm"
                >
                  Cover (1584×396)
                </Button>
                <Button
                  href="/brand/kit/social-avatar.svg"
                  download="laptech-social-avatar.svg"
                  variant="ghost"
                  size="sm"
                >
                  Avatar
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Voice */}
      <section className="border-b border-white/8 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Voice
            </p>
            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              How LAPTECH speaks
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Clear",
                body: "Name the solution: infrastructure, security, power — not jargon.",
              },
              {
                title: "Trusted",
                body: "Emphasize partnership, experience, and reliable after-sales support.",
              },
              {
                title: "Complete",
                body: "Position LAPTECH as one partner for homes, businesses, and enterprises.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={(i + 1) as 1 | 2 | 3}>
                <div className="border border-white/10 bg-navy-900/40 p-6">
                  <h3 className="font-display text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-soft">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8 border border-white/10 bg-navy-900/30 p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-muted">
              Tagline
            </p>
            <p className="mt-3 font-display text-xl font-bold text-white sm:text-2xl">
              {siteConfig.tagline}
            </p>
            <p className="mt-4 text-sm text-slate-soft">
              Phone {siteConfig.contact.phone} · {siteConfig.contact.email}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Downloads */}
      <section id="downloads" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Downloads
            </p>
            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              All brand kit files
            </h2>
          </Reveal>
          <ul className="mt-8 divide-y divide-white/8 border border-white/10">
            {downloads.map((item) => (
              <li
                key={item.href}
                className="flex flex-wrap items-center justify-between gap-3 px-4 py-3.5 sm:px-5"
              >
                <div>
                  <p className="text-sm font-medium text-white">{item.label}</p>
                  <p className="text-xs text-slate-muted">{item.file}</p>
                </div>
                <Button href={item.href} download={item.file} variant="secondary" size="sm">
                  Download
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
