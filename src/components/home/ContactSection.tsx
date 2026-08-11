"use client";

import { FormEvent, useState } from "react";
import { serviceOptions, siteConfig } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

const fieldClass =
  "w-full rounded-md border border-white/10 bg-navy-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-muted outline-none transition focus:border-accent/50 focus:ring-1 focus:ring-accent/40";

export function ContactSection({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className={compact ? "py-16" : "py-20 sm:py-28"} id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title="Let's Build Your Technology Infrastructure."
              description="Tell us what you need. Our team will help you design the right solution for your space, business and budget."
            />

            <ul className="mt-8 space-y-4">
              {[
                { icon: "phone" as const, label: "Call Us", value: siteConfig.contact.phone },
                { icon: "whatsapp" as const, label: "WhatsApp Us", value: siteConfig.contact.whatsapp },
                { icon: "mail" as const, label: "Email Us", value: siteConfig.contact.email },
                { icon: "map" as const, label: "Visit Our Office", value: siteConfig.contact.address },
              ].map((item) => (
                <li
                  key={item.label}
                  className="flex items-start gap-3 border border-white/8 bg-navy-900/40 px-4 py-3"
                >
                  <Icon name={item.icon} className="mt-0.5 h-5 w-5 text-accent" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-muted">
                      {item.label}
                    </p>
                    <p className="mt-0.5 text-sm text-white-soft">{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={2}>
            <form
              onSubmit={handleSubmit}
              className="border border-white/10 bg-navy-900/40 p-6 sm:p-8"
              noValidate
            >
              {submitted ? (
                <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
                  <Icon name="check" className="h-10 w-10 text-accent" />
                  <p className="mt-4 text-lg font-semibold text-white">
                    Request received
                  </p>
                  <p className="mt-2 max-w-sm text-sm text-slate-soft">
                    This demo form does not send data yet. Replace with your CRM
                    or email endpoint when ready. We&apos;ll connect you once
                    contact details are configured.
                  </p>
                  <Button
                    type="button"
                    variant="secondary"
                    className="mt-6"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another request
                  </Button>
                </div>
              ) : (
                <>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-1.5 block text-xs font-medium text-slate-soft">
                        Name *
                      </span>
                      <input
                        required
                        name="name"
                        autoComplete="name"
                        className={fieldClass}
                        placeholder="Your name"
                      />
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block text-xs font-medium text-slate-soft">
                        Company
                      </span>
                      <input
                        name="company"
                        autoComplete="organization"
                        className={fieldClass}
                        placeholder="Company name"
                      />
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block text-xs font-medium text-slate-soft">
                        Phone *
                      </span>
                      <input
                        required
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        className={fieldClass}
                        placeholder="Phone number"
                      />
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block text-xs font-medium text-slate-soft">
                        Email *
                      </span>
                      <input
                        required
                        name="email"
                        type="email"
                        autoComplete="email"
                        className={fieldClass}
                        placeholder="Email address"
                      />
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block text-xs font-medium text-slate-soft">
                        Location
                      </span>
                      <input
                        name="location"
                        className={fieldClass}
                        placeholder="City / Area"
                      />
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block text-xs font-medium text-slate-soft">
                        Service Required *
                      </span>
                      <select
                        required
                        name="service"
                        className={fieldClass}
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        {serviceOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                  <label className="mt-4 block">
                    <span className="mb-1.5 block text-xs font-medium text-slate-soft">
                      Message
                    </span>
                    <textarea
                      name="message"
                      rows={4}
                      className={fieldClass}
                      placeholder="Tell us about your requirements"
                    />
                  </label>
                  <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
                    Request a Consultation
                    <Icon name="arrow" className="h-4 w-4" />
                  </Button>
                </>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
