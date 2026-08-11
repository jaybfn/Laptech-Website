import type { ReactNode } from "react";

const icons = {
  laptop: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <rect x="3" y="4" width="18" height="12" rx="1.5" />
      <path d="M2 18h20" strokeLinecap="round" />
      <path d="M9 8h6" strokeLinecap="round" opacity="0.5" />
    </svg>
  ),
  camera: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="12" cy="11" r="3.5" />
      <path d="M4 10.5V8a2 2 0 0 1 2-2h2.2l1.3-1.5h5L16 6H18a2 2 0 0 1 2 2v2.5" />
      <path d="M4 13.5V16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2.5" />
      <path d="M12 14.5v3" strokeLinecap="round" />
    </svg>
  ),
  network: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="12" cy="5" r="2" />
      <circle cx="5" cy="19" r="2" />
      <circle cx="19" cy="19" r="2" />
      <circle cx="12" cy="12" r="2" />
      <path d="M12 7v3M10.5 13.5 6.5 17.5M13.5 13.5l4 4" strokeLinecap="round" />
    </svg>
  ),
  power: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M13 2 4 14h7l-1 8 10-13h-7l1-7z" strokeLinejoin="round" />
    </svg>
  ),
  fire: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M12 3c2 3 1 5 1 5s3-1 4 2c1.5 4-1 8-5 9-4-1-6.5-5-5-9 1-3 4-2 4-2s-1-2 1-5z" />
      <path d="M12 14c0 0-1.5 1-1.5 2.5S11.2 19 12 19s1.5-1 1.5-2.5S12 14 12 14z" opacity="0.6" />
    </svg>
  ),
  audio: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M4 10v4a1 1 0 0 0 1 1h2.5L12 19V5L7.5 9H5a1 1 0 0 0-1 1z" />
      <path d="M16 9.5a3.5 3.5 0 0 1 0 5" strokeLinecap="round" />
      <path d="M18.5 7a6.5 6.5 0 0 1 0 10" strokeLinecap="round" />
    </svg>
  ),
  epabx: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <rect x="7" y="6" width="10" height="5" rx="0.5" />
      <circle cx="8.5" cy="15" r="1" />
      <circle cx="12" cy="15" r="1" />
      <circle cx="15.5" cy="15" r="1" />
      <circle cx="8.5" cy="18" r="1" />
      <circle cx="12" cy="18" r="1" />
      <circle cx="15.5" cy="18" r="1" />
    </svg>
  ),
  biometrics: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M12 3a6 6 0 0 0-6 6v1" strokeLinecap="round" />
      <path d="M12 3a6 6 0 0 1 6 6v1" strokeLinecap="round" />
      <path d="M8 10c0 5 1.5 8 4 11" strokeLinecap="round" />
      <path d="M16 10c0 5-1.5 8-4 11" strokeLinecap="round" />
      <path d="M12 10v11" strokeLinecap="round" />
      <path d="M10 12.5c.5 3 1.2 5 2 7.5" strokeLinecap="round" opacity="0.6" />
      <path d="M14 12.5c-.5 3-1.2 5-2 7.5" strokeLinecap="round" opacity="0.6" />
    </svg>
  ),
  vdp: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <rect x="3" y="4" width="10" height="16" rx="1.5" />
      <rect x="5" y="6.5" width="6" height="5" rx="0.5" />
      <circle cx="8" cy="15.5" r="1.5" />
      <rect x="15" y="7" width="6" height="10" rx="1" />
      <path d="M17 10h2M17 12.5h2" strokeLinecap="round" opacity="0.6" />
    </svg>
  ),
  experience: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" strokeLinecap="round" />
    </svg>
  ),
  solutions: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  team: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="9" cy="8" r="3" />
      <circle cx="16" cy="9" r="2.5" />
      <path d="M3 19c0-3 2.5-5 6-5s6 2 6 5" strokeLinecap="round" />
      <path d="M15 14c2.5.3 4.5 2 4.5 4.5" strokeLinecap="round" />
    </svg>
  ),
  support: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M12 3a7 7 0 0 0-7 7v2a2 2 0 0 0 2 2h1v-5a4 4 0 1 1 8 0v5h1a2 2 0 0 0 2-2v-2a7 7 0 0 0-7-7z" />
      <path d="M9 17v1a3 3 0 0 0 6 0v-1" strokeLinecap="round" />
    </svg>
  ),
  service: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M12 3 4 7v5c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V7l-8-4z" />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  arrow: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M7 3h4l1.5 4.5-2 1.5a12 12 0 0 0 5.5 5.5l1.5-2L21 14v4a2 2 0 0 1-2 2A14 14 0 0 1 5 6a2 2 0 0 1 2-2z" strokeLinejoin="round" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  ),
  map: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M20 11.5A8.5 8.5 0 0 1 7.2 18.3L4 20l1.8-3.1A8.5 8.5 0 1 1 20 11.5z" />
      <path d="M9.5 9.5c.3-.6.6-.6.9-.6h.6c.2 0 .4.1.5.4l.7 1.7c.1.2 0 .4-.1.6l-.4.5c-.1.1-.1.3 0 .4.5.8 1.3 1.5 2.1 2 .2.1.4.1.5 0l.6-.5c.2-.1.4-.1.5 0l1.6.9c.3.1.4.3.4.5v.6c0 .3 0 .6-.6.9-.5.2-1.2.4-2 .2-2-.4-4-1.8-5.5-3.4S8.3 10.4 8 8.5c-.2-.8 0-1.5.2-2 .2-.5.5-.5.8-.5h.5z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  menu: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  ),
  close: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
    </svg>
  ),
  chevron: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export type IconName = keyof typeof icons;

export function Icon({
  name,
  className = "h-6 w-6",
}: {
  name: IconName;
  className?: string;
}) {
  return <span className={`inline-flex ${className}`}>{icons[name] as ReactNode}</span>;
}
