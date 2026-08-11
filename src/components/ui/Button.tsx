import Link from "next/link";
import type { ReactNode, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-navy-950 hover:bg-gold-bright shadow-[0_0_0_1px_rgba(254,190,59,0.35),0_8px_24px_rgba(254,190,59,0.22)] hover:shadow-[0_0_0_1px_rgba(255,207,102,0.45),0_12px_32px_rgba(254,190,59,0.3)]",
  secondary:
    "bg-white/5 text-white border border-white/15 hover:bg-white/10 hover:border-white/25",
  ghost: "bg-transparent text-white-soft hover:text-white hover:bg-white/5",
  outline:
    "bg-transparent text-accent border border-accent/40 hover:bg-accent/10 hover:border-accent",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps & {
  href: string;
  type?: never;
  disabled?: never;
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonAsButton | ButtonAsLink) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-md font-semibold tracking-tight transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...rest } = props;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
