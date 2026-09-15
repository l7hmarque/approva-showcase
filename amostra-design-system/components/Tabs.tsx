import { useState, type ReactNode } from "react";
import { cn } from "../lib/cn";

export interface TabItem {
  id: string;
  label: ReactNode;
  content: ReactNode;
}

export interface TabsProps {
  items: TabItem[];
  /** Id of the tab selected on first render. */
  defaultTab?: string;
  className?: string;
}

export function Tabs({ items, defaultTab, className }: TabsProps) {
  const [active, setActive] = useState(defaultTab ?? items[0]?.id);
  const current = items.find((item) => item.id === active) ?? items[0];

  return (
    <div className={cn("ap-tabs", className)}>
      <div className="ap-tabs__list" role="tablist">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            id={`tab-${item.id}`}
            aria-selected={item.id === current?.id}
            aria-controls={`panel-${item.id}`}
            className="ap-tabs__trigger"
            onClick={() => setActive(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      {current ? (
        <div
          className="ap-tabs__panel"
          role="tabpanel"
          id={`panel-${current.id}`}
          aria-labelledby={`tab-${current.id}`}
        >
          {current.content}
        </div>
      ) : null}
    </div>
  );
}
