"use client";

import Link from "next/link";
import { useId } from "react";

type LogoProps = {
  href?: string | false;
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
  showTagline?: boolean;
  className?: string;
};

const sizes = {
  sm: { mark: "h-9 w-9", word: "text-lg", gap: "gap-2.5" },
  md: { mark: "h-11 w-11", word: "text-xl", gap: "gap-3" },
  lg: { mark: "h-14 w-14", word: "text-2xl", gap: "gap-3.5" },
};

/** Premium LAPTECH mark — circuit “L” + connectivity nodes. */
function LogoMark({ className = "" }: { className?: string }) {
  const uid = useId().replace(/:/g, "");

  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-md ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 48 48"
        className="h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id={`${uid}-bg`}
            x1="8"
            y1="4"
            x2="42"
            y2="46"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#16365f" />
            <stop offset="1" stopColor="#0a1528" />
          </linearGradient>
          <linearGradient
            id={`${uid}-l`}
            x1="14"
            y1="10"
            x2="34"
            y2="38"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#14adc4" />
            <stop offset="0.55" stopColor="#0090a5" />
            <stop offset="1" stopColor="#febe3b" />
          </linearGradient>
          <linearGradient
            id={`${uid}-ring`}
            x1="10"
            y1="8"
            x2="40"
            y2="40"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#14adc4" stopOpacity="0.9" />
            <stop offset="1" stopColor="#febe3b" stopOpacity="0.75" />
          </linearGradient>
        </defs>

        <path
          d="M24 3.5 41 11.2v12.4c0 9.2-7.1 17.5-17 20.4C14.1 41.1 7 32.8 7 23.6V11.2L24 3.5Z"
          fill={`url(#${uid}-bg)`}
        />
        <path
          d="M24 3.5 41 11.2v12.4c0 9.2-7.1 17.5-17 20.4C14.1 41.1 7 32.8 7 23.6V11.2L24 3.5Z"
          stroke={`url(#${uid}-ring)`}
          strokeWidth="1.4"
        />
        <path
          d="M24 8.2 36.5 13.6v8.9c0 6.6-5.1 12.6-12.5 14.7C16.6 35.1 11.5 29.1 11.5 22.5v-8.9L24 8.2Z"
          fill="#0090a5"
          fillOpacity="0.12"
          stroke="#0090a5"
          strokeOpacity="0.35"
          strokeWidth="0.8"
        />
        <path
          d="M18.5 15.5v14.2h11.2"
          stroke={`url(#${uid}-l)`}
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.5 22.5h5.2"
          stroke="#14adc4"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.7"
        />
        <circle cx="18.5" cy="15.5" r="2.1" fill="#febe3b" />
        <circle cx="18.5" cy="29.7" r="2.1" fill="#14adc4" />
        <circle cx="29.7" cy="29.7" r="2.1" fill="#febe3b" />
        <circle cx="23.7" cy="22.5" r="1.4" fill="#cce9ed" />
      </svg>
    </span>
  );
}

export function Logo({
  href = "/",
  size = "md",
  showWordmark = true,
  showTagline = false,
  className = "",
}: LogoProps) {
  const s = sizes[size];

  const content = (
    <span className={`group inline-flex items-center ${s.gap} ${className}`}>
      <LogoMark className={s.mark} />
      {showWordmark ? (
        <span className="flex flex-col leading-none">
          <span
            className={`font-display font-extrabold tracking-[0.14em] text-white ${s.word}`}
          >
            LAP
            <span className="bg-gradient-to-r from-accent-bright to-gold bg-clip-text text-transparent">
              TECH
            </span>
          </span>
          {showTagline ? (
            <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-slate-muted">
              Infrastructure · Security · Power
            </span>
          ) : null}
        </span>
      ) : null}
    </span>
  );

  if (href === false) return content;

  return (
    <Link href={href} className="inline-flex" aria-label="LAPTECH home">
      {content}
    </Link>
  );
}
