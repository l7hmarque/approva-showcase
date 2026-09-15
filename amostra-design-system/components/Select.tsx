import { forwardRef, type SelectHTMLAttributes } from "react";
import { cn } from "../lib/cn";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  invalid?: boolean;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { invalid, className, ...rest },
  ref,
) {
  return (
    <select
      ref={ref}
      className={cn("ap-select", className)}
      aria-invalid={invalid || undefined}
      {...rest}
    />
  );
});
