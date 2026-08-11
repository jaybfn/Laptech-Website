import { siteConfig } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

function whatsappHref(value: string) {
  const digits = value.replace(/\D/g, "");
  if (!digits) return "#";
  return `https://wa.me/${digits}`;
}

export function ContactInfo({ compact = false }: { compact?: boolean }) {
  const whatsapp = siteConfig.contact.whatsapp;
  const address = siteConfig.contact.address;
  const isPlaceholder = whatsapp.includes("[") || !whatsapp.replace(/\D/g, "");

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

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {isPlaceholder ? (
                <div className="flex items-start gap-4 border border-accent/25 bg-accent/10 px-5 py-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-accent/30 bg-navy-950/40 text-accent">
                    <Icon name="whatsapp" className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-muted">
                      WhatsApp / Call
                    </p>
                    <p className="mt-1 text-lg font-semibold text-white">
                      {whatsapp}
                    </p>
                    <p className="mt-1 text-sm text-slate-soft">
                      Add your number in site settings
                    </p>
                  </div>
                </div>
              ) : (
                <a
                  href={whatsappHref(whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 border border-accent/25 bg-accent/10 px-5 py-5 transition hover:border-accent/50 hover:bg-accent/15"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-accent/30 bg-navy-950/40 text-accent">
                    <Icon name="whatsapp" className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-muted">
                      WhatsApp / Call
                    </p>
                    <p className="mt-1 text-lg font-semibold text-white group-hover:text-accent-bright">
                      {whatsapp}
                    </p>
                    <p className="mt-1 text-sm text-slate-soft">
                      Tap to chat on WhatsApp
                    </p>
                  </div>
                </a>
              )}

              <div className="flex items-start gap-4 border border-white/10 bg-navy-950/50 px-5 py-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/5 text-accent">
                  <Icon name="map" className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-muted">
                    Visit Our Office
                  </p>
                  <p className="mt-1 text-lg font-semibold text-white">
                    {address}
                  </p>
                  <p className="mt-1 text-sm text-slate-soft">
                    Walk-ins welcome during business hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
