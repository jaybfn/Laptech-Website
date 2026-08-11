"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { mainNav, siteConfig, features, solutionsBrochure } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const navItems = mainNav.filter(
    (item) => features.showProjects || item.href !== "/projects"
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setSolutionsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/8 bg-navy-950/80 py-2 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[96rem] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Logo size="lg" className="shrink-0" />

        <nav
          className="hidden items-center gap-1 border-l border-white/10 pl-5 xl:flex"
          aria-label="Primary"
        >
          {navItems.map((item) => {
            if (item.children) {
              return (
                <div key={item.label} className="relative group shrink-0">
                  <button
                    type="button"
                    className="flex items-center justify-center gap-1 whitespace-nowrap rounded-md px-2.5 py-2 text-base font-semibold text-slate-soft transition hover:text-white"
                    aria-expanded="false"
                  >
                    {item.label}
                    <Icon name="chevron" className="h-4 w-4 opacity-60" />
                  </button>
                  <div className="invisible absolute left-0 top-full z-50 w-72 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100">
                    <div className="rounded-lg border border-white/10 bg-navy-900/95 p-2 shadow-2xl backdrop-blur-xl">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-md px-3 py-2.5 transition hover:bg-white/5"
                        >
                          <span className="block text-sm font-medium text-white">
                            {child.label}
                          </span>
                          {child.description ? (
                            <span className="mt-0.5 block text-xs text-slate-muted">
                              {child.description}
                            </span>
                          ) : null}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`shrink-0 whitespace-nowrap rounded-md px-2.5 py-2 text-center text-base font-semibold transition ${
                  active
                    ? "text-white"
                    : "text-slate-soft hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto hidden shrink-0 items-center gap-2 xl:flex">
          <Button
            href={solutionsBrochure.href}
            download={solutionsBrochure.filename}
            variant="outline"
            size="sm"
            className="h-9 w-[7rem] justify-center px-2"
          >
            <Icon name="download" className="h-4 w-4" />
            {solutionsBrochure.label}
          </Button>
          <Button
            href="/contact"
            size="sm"
            className="h-9 w-[7rem] justify-center px-2"
          >
            <Icon name="phone" className="h-4 w-4" />
            Call Us
          </Button>
        </div>

        <button
          type="button"
          className="ml-auto inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/10 text-white xl:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/8 bg-navy-950/98 backdrop-blur-xl xl:hidden">
          <div className="mx-auto max-h-[calc(100vh-4.5rem)] max-w-7xl overflow-y-auto px-4 py-4 sm:px-6">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {navItems.map((item) => {
                if (item.children) {
                  return (
                    <div key={item.label}>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-base font-medium text-white"
                        onClick={() => setSolutionsOpen((v) => !v)}
                        aria-expanded={solutionsOpen}
                      >
                        {item.label}
                        <Icon
                          name="chevron"
                          className={`h-4 w-4 transition ${solutionsOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      {solutionsOpen ? (
                        <div className="mb-2 ml-2 border-l border-white/10 pl-3">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block rounded-md px-3 py-2.5 text-sm text-slate-soft hover:text-white"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-md px-3 py-3 text-base font-medium text-slate-soft hover:text-white"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-4 flex flex-col gap-2 border-t border-white/8 pt-4">
              <Button
                href={solutionsBrochure.href}
                download={solutionsBrochure.filename}
                variant="outline"
                className="w-full"
              >
                <Icon name="download" className="h-4 w-4" />
                {solutionsBrochure.label}
              </Button>
              <Button href="/contact" className="w-full">
                <Icon name="phone" className="h-4 w-4" />
                Call Us — {siteConfig.contact.phone}
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
