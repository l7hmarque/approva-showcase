import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../lib/cn";

export type AvatarSize = "sm" | "md" | "lg";

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  /** Full name; used for the fallback initials and the image alt text. */
  name: string;
  src?: string;
  size?: AvatarSize;
}

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(function Avatar(
  { name, src, size = "md", className, ...rest },
  ref,
) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

  return (
    <span ref={ref} className={cn("ap-avatar", `ap-avatar--${size}`, className)} {...rest}>
      {src ? <img src={src} alt={name} /> : initials}
    </span>
  );
});
