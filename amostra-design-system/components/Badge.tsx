import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../lib/cn";

export type BadgeVariant = "brand" | "accent" | "neutral" | "success" | "warning" | "danger";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  /** Uppercase, letter-spaced label used above section headings. */
  eyebrow?: boolean;
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  { variant = "brand", eyebrow = false, className, ...rest },
  ref,
) {
  return (
    <span
      ref={ref}
      className={cn("ap-badge", `ap-badge--${variant}`, eyebrow && "ap-badge--eyebrow", className)}
      {...rest}
    />
  );
});
