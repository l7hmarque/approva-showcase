import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../lib/cn";

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  /** Completion percentage, 0–100. */
  value: number;
  /** Accessible name for the bar. */
  label: string;
}

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(function Progress(
  { value, label, className, ...rest },
  ref,
) {
  const clamped = Math.min(100, Math.max(0, value));
  return (
    <div
      ref={ref}
      className={cn("ap-progress", className)}
      role="progressbar"
      aria-label={label}
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
      {...rest}
    >
      <div className="ap-progress__bar" style={{ width: `${clamped}%` }} />
    </div>
  );
});
