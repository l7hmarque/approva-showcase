import { useId, useState, type ReactNode } from "react";
import { cn } from "../lib/cn";

export interface TooltipProps {
  /** Text shown in the bubble. */
  content: ReactNode;
  children: ReactNode;
  className?: string;
}

export function Tooltip({ content, children, className }: TooltipProps) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <span
      className={cn("ap-tooltip", className)}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      aria-describedby={open ? id : undefined}
    >
      {children}
      {open ? (
        <span className="ap-tooltip__bubble" role="tooltip" id={id}>
          {content}
        </span>
      ) : null}
    </span>
  );
}
