import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../lib/cn";

export type CardVariant = "outlined" | "elevated" | "dark";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  /** Adds hover lift for clickable cards. */
  interactive?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { variant = "outlined", interactive = false, className, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn(
        "ap-card",
        variant !== "outlined" && `ap-card--${variant}`,
        interactive && "ap-card--interactive",
        className,
      )}
      {...rest}
    />
  );
});

export const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  function CardTitle({ className, ...rest }, ref) {
    return <h3 ref={ref} className={cn("ap-card__title", className)} {...rest} />;
  },
);

export const CardBody = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function CardBody({ className, ...rest }, ref) {
    return <div ref={ref} className={cn("ap-card__body", className)} {...rest} />;
  },
);
