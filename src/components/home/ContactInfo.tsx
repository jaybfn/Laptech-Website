import { siteConfig } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

function whatsappHref(value: string) {
  const digits = value.replace(/\D/g, "");
  if (!digits) return "#";
  return `https://wa.me/${digits}`;
}

export function ContactInfo({ compact = false }: { compact?: boolean }) {
  const { whatsapp, address, mapsUrl, mapsEmbedUrl, phone } = siteConfig.contact;
  const telHref = `tel:${phone.replace(/\s/g, "")}`;

  return (
    <section className={compact ? "py-16" : "py-20 sm:py-28"} id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="border border-white/10 bg-navy-900/40 p-8 sm:p-10 lg:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Get in Touch
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Reach us on WhatsApp or visit our office.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-soft">
              Message us for a quick consultation, or stop by if you prefer to
              discuss your requirements in person.
            </p>

            <div className="mt-8 grid gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)]">
              <div className="flex items-start gap-4 border border-accent/25 bg-accent/10 px-5 py-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-accent/30 bg-navy-950/40 text-accent">
                  <Icon name="whatsapp" className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-muted">
                    WhatsApp / Call
                  </p>
                  <a
                    href={whatsappHref(whatsapp)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-lg font-semibold text-white transition hover:text-accent-bright"
                  >
                    {whatsapp}
                  </a>
                  <p className="mt-1 text-sm text-slate-soft">
                    Tap to chat on WhatsApp
                  </p>
                  <a
                    href={telHref}
                    className="mt-2 inline-block text-sm font-medium text-accent hover:underline"
                  >
                    Or call {phone}
                  </a>
                </div>
              </div>

              <div className="overflow-hidden border border-white/10 bg-navy-950/50">
                <div className="grid h-full md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)]">
                  <div className="flex items-start gap-4 px-5 py-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/5 text-accent">
                      <Icon name="map" className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-muted">
                        Visit Our Office
                      </p>
                      <p className="mt-1 text-base font-semibold leading-snug text-white">
                        {address}
                      </p>
                      <a
                        href={mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-block text-sm font-medium text-accent transition hover:underline"
                      >
                        Open in Google Maps →
                      </a>
                    </div>
                  </div>

                  <div className="relative min-h-52 border-t border-white/10 md:min-h-full md:border-l md:border-t-0">
                    <iframe
                      title="LAPTECH office location on Google Maps"
                      src={mapsEmbedUrl}
                      className="absolute inset-0 h-full w-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
