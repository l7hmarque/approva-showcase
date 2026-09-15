import { forwardRef, type TableHTMLAttributes } from "react";
import { cn } from "../lib/cn";

export type TableProps = TableHTMLAttributes<HTMLTableElement>;

/** Data table shell; compose with native thead/tbody/tr/th/td. */
export const Table = forwardRef<HTMLTableElement, TableProps>(function Table(
  { className, ...rest },
  ref,
) {
  return <table ref={ref} className={cn("ap-table", className)} {...rest} />;
});
