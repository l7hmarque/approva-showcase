import type { ReactNode } from "react";
import { cn } from "../lib/cn";

export interface TopbarProps {
  /** Left-hand content: brand, breadcrumb or page title. */
  start?: ReactNode;
  /** Center content, typically a search field. */
  center?: ReactNode;
  /** Right-hand actions. */
  end?: ReactNode;
  className?: string;
}

export function Topbar({ start, center, end, className }: TopbarProps) {
  return (
    <header className={cn("ap-topbar", className)}>
      <div>{start}</div>
      <div style={{ flex: 1 }}>{center}</div>
      <div style={{ display: "flex", gap: "var(--ap-space-2)", alignItems: "center" }}>{end}</div>
    </header>
  );
}
