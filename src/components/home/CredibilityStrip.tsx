import { credibilityItems } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function CredibilityStrip() {
  return (
    <section className="border-y border-white/8 bg-navy-900/50">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-white/5 sm:grid-cols-3 lg:grid-cols-5">
        {credibilityItems.map((item, i) => (
          <Reveal
            key={item.label}
            delay={(Math.min(i + 1, 4) as 1 | 2 | 3 | 4)}
            className="flex flex-col items-start gap-3 bg-navy-950/80 px-5 py-7 sm:px-6"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-md border border-accent/25 bg-accent/10 text-accent">
              <Icon name={item.icon} className="h-5 w-5" />
            </span>
            <p className="text-sm font-semibold leading-snug text-white sm:text-[15px]">
              {item.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
