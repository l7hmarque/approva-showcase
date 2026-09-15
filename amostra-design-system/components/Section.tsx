import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../lib/cn";

export type SectionTone = "default" | "muted" | "dark";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  tone?: SectionTone;
}

/** Full-width page band with vertical rhythm. */
export const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  { tone = "default", className, ...rest },
  ref,
) {
  return (
    <section
      ref={ref}
      className={cn("ap-section", tone !== "default" && `ap-section--${tone}`, className)}
      {...rest}
    />
  );
});

/** Centered max-width wrapper. */
export const Container = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function Container({ className, ...rest }, ref) {
    return <div ref={ref} className={cn("ap-container", className)} {...rest} />;
  },
);
