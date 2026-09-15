import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "../lib/cn";

export type ButtonVariant =
  "primary" | "cta" | "outline" | "ghost" | "soft" | "link" | "destructive";
export type ButtonSize = "sm" | "md" | "lg" | "icon";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. `cta` (orange) is reserved for the primary conversion action. */
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Renders a spinner and disables interaction. */
  loading?: boolean;
  /** Stretches the button to the container width. */
  block?: boolean;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = "primary",
    size = "md",
    loading = false,
    block = false,
    leadingIcon,
    trailingIcon,
    className,
    children,
    disabled,
    ...rest
  },
  ref,
) {
  return (
    <button
      ref={ref}
      className={cn(
        "ap-btn",
        `ap-btn--${variant}`,
        `ap-btn--${size}`,
        block && "ap-btn--block",
        className,
      )}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...rest}
    >
      {loading ? <span className="ap-btn__spinner" aria-hidden="true" /> : leadingIcon}
      {children}
      {trailingIcon}
    </button>
  );
});
