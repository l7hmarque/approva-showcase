import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../lib/cn";

export type LogoProduct = "prisma" | "approva";
export type LogoTone = "light" | "dark";

export interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  /** Which brand lockup to render. */
  product?: LogoProduct;
  /** Tone of the surface the logo sits on. */
  tone?: LogoTone;
  /** Hide the wordmark and render the mark only. */
  markOnly?: boolean;
  /** Mark size in pixels. */
  size?: number;
}

/** Prisma Tecnologias / Approva brand lockup. */
export const Logo = forwardRef<HTMLDivElement, LogoProps>(function Logo(
  { product = "prisma", tone = "light", markOnly = false, size = 32, className, ...rest },
  ref,
) {
  const fg = tone === "dark" ? "var(--ap-foreground-on-dark)" : "var(--ap-foreground)";
  const muted = tone === "dark" ? "rgba(255,255,255,0.6)" : "var(--ap-foreground-subtle)";

  return (
    <div
      ref={ref}
      className={cn("ap-logo", className)}
      style={{ display: "inline-flex", alignItems: "center", gap: "var(--ap-space-2)" }}
      {...rest}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        role="img"
        aria-label={product === "approva" ? "Approva" : "Prisma Tecnologias"}
      >
        <rect width="32" height="32" rx="9" fill="var(--ap-primary)" />
        <path d="M10 22V10l11 6-11 6z" fill="#fff" opacity="0.92" />
        <path d="M10 16l11-6-4 12-7-6z" fill="var(--ap-accent)" opacity="0.9" />
      </svg>
      {!markOnly && (
        <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.05 }}>
          <span
            style={{
              fontFamily: "var(--ap-font-display)",
              fontWeight: "var(--ap-weight-bold)",
              fontSize: "var(--ap-text-lg)",
              color: fg,
              letterSpacing: "var(--ap-tracking-tight)",
            }}
          >
            {product === "approva" ? "Approva" : "Prisma"}
          </span>
          <span
            style={{
              fontSize: "10px",
              letterSpacing: "var(--ap-tracking-wide)",
              textTransform: "uppercase",
              color: muted,
            }}
          >
            {product === "approva" ? "por Prisma" : "Tecnologias"}
          </span>
        </span>
      )}
    </div>
  );
});
