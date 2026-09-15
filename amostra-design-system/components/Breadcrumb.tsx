import { Fragment, type ReactNode } from "react";
import { cn } from "../lib/cn";

export interface BreadcrumbItem {
  label: ReactNode;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav className={cn("ap-breadcrumb", className)} aria-label="Trilha de navegação">
      {items.map((item, index) => (
        <Fragment key={index}>
          {index > 0 ? (
            <span className="ap-breadcrumb__sep" aria-hidden="true">
              /
            </span>
          ) : null}
          {item.href ? (
            <a href={item.href}>{item.label}</a>
          ) : (
            <span aria-current="page">{item.label}</span>
          )}
        </Fragment>
      ))}
    </nav>
  );
}
