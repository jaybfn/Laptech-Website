import { ecosystemNodes } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Logo } from "@/components/ui/Logo";

export function EcosystemSection() {
  return (
    <section className="relative overflow-hidden border-y border-white/8 bg-navy-900/40 py-20 sm:py-28">
      <div className="absolute inset-0 grid-tech opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Integrated Approach"
            title="One Partner. Complete Technology Infrastructure."
            description="Instead of managing multiple vendors, businesses can rely on one experienced technology partner for planning, supply, installation, integration and ongoing support."
          />
        </Reveal>

        <Reveal delay={2} className="relative mx-auto mt-16 max-w-4xl">
          <div className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-accent/40 bg-navy-950 shadow-[0_0_60px_rgba(0,168,232,0.25)] sm:h-36 sm:w-36">
            <Logo href={false} showWordmark={false} size="lg" />
            <span className="mt-1 font-display text-[10px] font-bold tracking-[0.15em] text-white sm:text-xs">
              LAPTECH
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {ecosystemNodes.map((node, i) => (
              <div
                key={node}
                className={`relative flex min-h-[88px] items-center justify-center border border-white/10 bg-navy-950/70 px-3 py-4 text-center text-sm font-medium text-white-soft transition hover:border-accent/40 hover:text-white ${
                  i === 0 || i === 1 ? "sm:mt-0" : ""
                }`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <span className="absolute left-2 top-2 h-1 w-1 rounded-full bg-accent/60" />
                {node}
              </div>
            ))}
          </div>

          <svg
            className="pointer-events-none absolute inset-0 hidden h-full w-full opacity-40 lg:block"
            aria-hidden
          >
            <line
              x1="50%"
              y1="50%"
              x2="12%"
              y2="25%"
              stroke="#0090a5"
              strokeWidth="1"
              strokeDasharray="4 4"
              className="animate-dash"
            />
            <line
              x1="50%"
              y1="50%"
              x2="88%"
              y2="25%"
              stroke="#0090a5"
              strokeWidth="1"
              strokeDasharray="4 4"
              className="animate-dash"
            />
            <line
              x1="50%"
              y1="50%"
              x2="12%"
              y2="75%"
              stroke="#0090a5"
              strokeWidth="1"
              strokeDasharray="4 4"
              className="animate-dash"
            />
            <line
              x1="50%"
              y1="50%"
              x2="88%"
              y2="75%"
              stroke="#0090a5"
              strokeWidth="1"
              strokeDasharray="4 4"
              className="animate-dash"
            />
          </svg>
        </Reveal>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-slate-muted">
          Laptop → Network → Server → CCTV → Security → Power → Fire Safety →
          Communication
        </p>
      </div>
    </section>
  );
}
