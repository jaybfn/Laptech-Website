export function HeroVisual() {
  return (
    <div
      className="relative aspect-[4/3] w-full overflow-hidden rounded-none lg:aspect-auto lg:min-h-[520px]"
      aria-hidden
    >
      <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950" />
      <div className="absolute inset-0 grid-tech opacity-60" />

      {/* Glow orbs */}
      <div className="absolute right-[10%] top-[15%] h-40 w-40 rounded-full bg-accent/20 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-[20%] left-[15%] h-32 w-32 rounded-full bg-accent-dim/30 blur-3xl" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 640 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Server rack */}
        <g opacity="0.9">
          <rect x="80" y="120" width="140" height="280" rx="6" stroke="#0090a5" strokeOpacity="0.45" />
          <rect x="95" y="140" width="110" height="28" rx="2" fill="#0090a5" fillOpacity="0.12" stroke="#0090a5" strokeOpacity="0.3" />
          <rect x="95" y="180" width="110" height="28" rx="2" fill="#0090a5" fillOpacity="0.08" stroke="#0090a5" strokeOpacity="0.25" />
          <rect x="95" y="220" width="110" height="28" rx="2" fill="#0090a5" fillOpacity="0.12" stroke="#0090a5" strokeOpacity="0.3" />
          <rect x="95" y="260" width="110" height="28" rx="2" fill="#0090a5" fillOpacity="0.08" stroke="#0090a5" strokeOpacity="0.25" />
          <rect x="95" y="300" width="110" height="28" rx="2" fill="#0090a5" fillOpacity="0.12" stroke="#0090a5" strokeOpacity="0.3" />
          <circle cx="108" cy="154" r="3" fill="#0090a5" className="animate-pulse-glow" />
          <circle cx="108" cy="234" r="3" fill="#14adc4" />
          <circle cx="108" cy="314" r="3" fill="#0090a5" className="animate-pulse-glow" />
        </g>

        {/* Network hub */}
        <g>
          <circle cx="340" cy="240" r="48" stroke="#0090a5" strokeOpacity="0.35" />
          <circle cx="340" cy="240" r="28" stroke="#0090a5" strokeOpacity="0.5" fill="#0090a5" fillOpacity="0.08" />
          <circle cx="340" cy="240" r="8" fill="#0090a5" fillOpacity="0.7" />
          <text x="340" y="245" textAnchor="middle" fill="#e8eef6" fontSize="9" fontFamily="sans-serif" opacity="0.8">
            CORE
          </text>
        </g>

        {/* CCTV */}
        <g transform="translate(460, 100)">
          <rect x="0" y="20" width="70" height="42" rx="6" stroke="#0090a5" strokeOpacity="0.45" fill="#0090a5" fillOpacity="0.06" />
          <circle cx="35" cy="41" r="14" stroke="#14adc4" strokeOpacity="0.6" />
          <circle cx="35" cy="41" r="6" fill="#0090a5" fillOpacity="0.5" />
          <path d="M35 62v24" stroke="#0090a5" strokeOpacity="0.35" />
          <path d="M20 86h30" stroke="#0090a5" strokeOpacity="0.35" />
        </g>

        {/* Power unit */}
        <g transform="translate(450, 300)">
          <rect x="0" y="0" width="90" height="70" rx="4" stroke="#0090a5" strokeOpacity="0.4" fill="#0090a5" fillOpacity="0.05" />
          <path d="M40 18 L28 38h18l-8 22 28-30H48l8-12z" fill="#0090a5" fillOpacity="0.45" />
        </g>

        {/* Connection lines */}
        <path
          d="M220 240 H292"
          stroke="#0090a5"
          strokeOpacity="0.5"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          className="animate-dash"
        />
        <path
          d="M375 210 L480 140"
          stroke="#0090a5"
          strokeOpacity="0.4"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          className="animate-dash"
        />
        <path
          d="M375 270 L470 330"
          stroke="#0090a5"
          strokeOpacity="0.4"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          className="animate-dash"
        />
        <path
          d="M340 288 V380 H200"
          stroke="#0090a5"
          strokeOpacity="0.3"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          className="animate-dash"
        />

        {/* Nodes */}
        <circle cx="200" cy="380" r="5" fill="#14adc4" fillOpacity="0.8" />
        <circle cx="480" cy="140" r="4" fill="#0090a5" />
        <circle cx="470" cy="330" r="4" fill="#14adc4" />
      </svg>

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent p-6">
        <div className="flex flex-wrap gap-2">
          {["Servers", "Networking", "CCTV", "Power"].map((tag) => (
            <span
              key={tag}
              className="rounded border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-slate-soft"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
