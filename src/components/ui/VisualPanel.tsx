/** Abstract industry / project visual panels — no stock photos */

const palettes: Record<string, { from: string; to: string; accent: string }> = {
  corporate: { from: "#162d53", to: "#1c3866", accent: "#0090a5" },
  hotels: { from: "#0f1f3d", to: "#25487a", accent: "#14adc4" },
  education: { from: "#0a1528", to: "#1c3866", accent: "#0090a5" },
  hospitals: { from: "#0a1528", to: "#162d53", accent: "#cce9ed" },
  retail: { from: "#0f1f3d", to: "#25487a", accent: "#0090a5" },
  warehouses: { from: "#0a1528", to: "#162d53", accent: "#14adc4" },
  manufacturing: { from: "#0f1f3d", to: "#1c3866", accent: "#0090a5" },
  residential: { from: "#0f1f3d", to: "#25487a", accent: "#cce9ed" },
  commercial: { from: "#0a1528", to: "#1c3866", accent: "#0090a5" },
  "project-corporate": { from: "#0a1528", to: "#162d53", accent: "#0090a5" },
  "project-hotel": { from: "#0f1f3d", to: "#1c3866", accent: "#14adc4" },
  "project-retail": { from: "#0a1528", to: "#162d53", accent: "#0090a5" },
  "project-campus": { from: "#0f1f3d", to: "#1c3866", accent: "#cce9ed" },
  "project-industrial": { from: "#0a1528", to: "#162d53", accent: "#0090a5" },
  "project-residential": { from: "#0f1f3d", to: "#25487a", accent: "#14adc4" },
};

type VisualPanelProps = {
  variant: string;
  label: string;
  className?: string;
};

export function VisualPanel({ variant, label, className = "" }: VisualPanelProps) {
  const palette = palettes[variant] ?? palettes.corporate;

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      role="img"
      aria-label={label}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(145deg, ${palette.from} 0%, ${palette.to} 55%, ${palette.from} 100%)`,
        }}
      />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />
      <svg
        className="absolute inset-0 h-full w-full opacity-50"
        viewBox="0 0 400 240"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <defs>
          <linearGradient id={`g-${variant}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={palette.accent} stopOpacity="0.5" />
            <stop offset="100%" stopColor={palette.accent} stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect x="40" y="50" width="90" height="120" rx="4" fill="none" stroke={palette.accent} strokeOpacity="0.35" />
        <rect x="55" y="65" width="60" height="8" rx="1" fill={palette.accent} fillOpacity="0.25" />
        <rect x="55" y="85" width="45" height="6" rx="1" fill={palette.accent} fillOpacity="0.15" />
        <rect x="55" y="100" width="50" height="6" rx="1" fill={palette.accent} fillOpacity="0.15" />
        <circle cx="280" cy="80" r="28" fill="none" stroke={palette.accent} strokeOpacity="0.4" />
        <circle cx="280" cy="80" r="12" fill={palette.accent} fillOpacity="0.2" />
        <path
          d="M130 110 H200 M200 110 L260 80 M200 110 L260 150"
          stroke={`url(#g-${variant})`}
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="6 4"
          className="animate-dash"
        />
        <rect x="300" y="130" width="60" height="50" rx="3" fill="none" stroke={palette.accent} strokeOpacity="0.3" />
        <path d="M310 145h40M310 155h28M310 165h35" stroke={palette.accent} strokeOpacity="0.25" strokeWidth="2" />
      </svg>
      <div
        className="absolute inset-x-0 bottom-0 h-1/2"
        style={{
          background: `linear-gradient(to top, ${palette.from}cc, transparent)`,
        }}
      />
    </div>
  );
}
