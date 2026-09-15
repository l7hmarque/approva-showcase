import type { ReactNode } from "react";
import { cn } from "../lib/cn";

export interface FooterColumn {
  title: string;
  links: Array<{ label: string; href: string }>;
}

export interface FooterProps {
  /** Brand lockup and tagline. */
  brand?: ReactNode;
  columns?: FooterColumn[];
  /** Legal line at the bottom. */
  note?: ReactNode;
  className?: string;
}

export function Footer({ brand, columns = [], note, className }: FooterProps) {
  return (
    <footer className={cn("ap-footer", className)}>
      <div
        className="ap-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "var(--ap-space-7)",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            maxWidth: "280px",
            display: "flex",
            flexDirection: "column",
            gap: "var(--ap-space-3)",
          }}
        >
          {brand}
        </div>
        {columns.map((column) => (
          <div
            key={column.title}
            style={{ display: "flex", flexDirection: "column", gap: "var(--ap-space-2)" }}
          >
            <strong style={{ color: "var(--ap-foreground)" }}>{column.title}</strong>
            {column.links.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        ))}
      </div>
      {note ? (
        <div
          className="ap-container"
          style={{ marginTop: "var(--ap-space-6)", fontSize: "var(--ap-text-xs)" }}
        >
          {note}
        </div>
      ) : null}
    </footer>
  );
}
