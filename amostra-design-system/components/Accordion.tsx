import { useState, type ReactNode } from "react";
import { cn } from "../lib/cn";

export interface AccordionItem {
  id: string;
  question: ReactNode;
  answer: ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  /** Id of the item expanded on first render. */
  defaultOpen?: string;
  className?: string;
}

export function Accordion({ items, defaultOpen, className }: AccordionProps) {
  const [open, setOpen] = useState<string | null>(defaultOpen ?? null);

  return (
    <div className={cn("ap-accordion", className)}>
      {items.map((item) => {
        const expanded = open === item.id;
        return (
          <div className="ap-accordion__item" key={item.id}>
            <button
              type="button"
              className="ap-accordion__trigger"
              aria-expanded={expanded}
              aria-controls={`acc-${item.id}`}
              onClick={() => setOpen(expanded ? null : item.id)}
            >
              {item.question}
              <span aria-hidden="true">{expanded ? "–" : "+"}</span>
            </button>
            {expanded ? (
              <div className="ap-accordion__panel" id={`acc-${item.id}`}>
                {item.answer}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
