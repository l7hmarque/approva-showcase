import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../lib/cn";

export interface StatProps extends HTMLAttributes<HTMLDivElement> {
  /** Headline figure, e.g. "+1.2M". */
  value: string;
  /** Short description under the figure. */
  label: string;
}

export const Stat = forwardRef<HTMLDivElement, StatProps>(function Stat(
  { value, label, className, ...rest },
  ref,
) {
  return (
    <div ref={ref} className={cn("ap-stat", className)} {...rest}>
      <div className="ap-stat__value">{value}</div>
      <div className="ap-stat__label">{label}</div>
    </div>
  );
});
