import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";
import { cn } from "../lib/cn";

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: ReactNode;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(
  { label, className, ...rest },
  ref,
) {
  return (
    <label className={cn("ap-switch", className)}>
      <input ref={ref} type="checkbox" role="switch" {...rest} />
      <span className="ap-switch__track" aria-hidden="true">
        <span className="ap-switch__thumb" />
      </span>
      {label ? <span>{label}</span> : null}
    </label>
  );
});
