import type { ReactNode } from "react";
import { cn } from "../lib/cn";

export interface SidebarNavItem {
  id: string;
  label: ReactNode;
  icon?: ReactNode;
  onSelect?: () => void;
}

export interface SidebarProps {
  /** Brand lockup or title rendered at the top. */
  header?: ReactNode;
  items: SidebarNavItem[];
  /** Id of the currently active nav item. */
  activeId?: string;
  /** Content pinned to the bottom, e.g. the signed-in user. */
  footer?: ReactNode;
  className?: string;
}

/** Dark product navigation used by the Approva app shell. */
export function Sidebar({ header, items, activeId, footer, className }: SidebarProps) {
  return (
    <aside className={cn("ap-sidebar", className)}>
      {header}
      <nav className="ap-sidebar__nav" aria-label="Navegação principal">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            className="ap-sidebar__item"
            aria-current={item.id === activeId ? "page" : undefined}
            onClick={item.onSelect}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </nav>
      {footer ? <div style={{ marginTop: "auto" }}>{footer}</div> : null}
    </aside>
  );
}
