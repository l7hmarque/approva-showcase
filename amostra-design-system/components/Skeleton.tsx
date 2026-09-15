import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../lib/cn";

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
  /** Rounds the block into a circle for avatar placeholders. */
  circle?: boolean;
}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(function Skeleton(
  { width = "100%", height = "16px", circle = false, className, style, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn("ap-skeleton", className)}
      style={{
        width,
        height,
        borderRadius: circle ? "var(--ap-radius-full)" : undefined,
        ...style,
      }}
      {...rest}
    />
  );
});
