import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "../lib/cn";

export type AlertVariant = "info" | "success" | "warning" | "danger";

export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  variant?: AlertVariant;
  title?: ReactNode;
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  { variant = "info", title, className, children, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      role="status"
      className={cn("ap-alert", `ap-alert--${variant}`, className)}
      {...rest}
    >
      <div>
        {title ? <div className="ap-alert__title">{title}</div> : null}
        {children}
      </div>
    </div>
  );
});
