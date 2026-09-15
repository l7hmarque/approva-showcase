import type { ReactNode } from "react";
import { cn } from "../lib/cn";

export interface StepItem {
  title: ReactNode;
  description?: ReactNode;
}

export interface StepsProps {
  items: StepItem[];
  className?: string;
}

/** Numbered horizontal workflow, as in "Fluxo de trabalho contínuo". */
export function Steps({ items, className }: StepsProps) {
  return (
    <ol className={cn("ap-steps", className)} style={{ listStyle: "none" }}>
      {items.map((item, index) => (
        <li className="ap-steps__item" key={index}>
          <div className="ap-steps__marker">{String(index + 1).padStart(2, "0")}</div>
          <div style={{ fontWeight: "var(--ap-weight-semibold)" }}>{item.title}</div>
          {item.description ? <p className="ap-card__body">{item.description}</p> : null}
        </li>
      ))}
    </ol>
  );
}
