import { useId, type ReactElement, type ReactNode, cloneElement } from "react";
import { cn } from "../lib/cn";

export interface FormFieldProps {
  label: ReactNode;
  /** Helper text shown under the control. */
  hint?: ReactNode;
  /** Error message; replaces the hint and marks the control invalid. */
  error?: ReactNode;
  className?: string;
  /** A single form control (Input, Textarea, Select). */
  children: ReactElement<{
    id?: string | undefined;
    "aria-describedby"?: string | undefined;
    "aria-invalid"?: boolean | undefined;
  }>;
}

/** Labelled wrapper that wires id, description and error state to a control. */
export function FormField({ label, hint, error, className, children }: FormFieldProps) {
  const id = useId();
  const describedBy = error || hint ? `${id}-desc` : undefined;

  return (
    <div className={cn("ap-field", className)}>
      <label className="ap-label" htmlFor={id}>
        {label}
      </label>
      {cloneElement(children, {
        id,
        "aria-describedby": describedBy,
        "aria-invalid": Boolean(error) || undefined,
      })}
      {error ? (
        <span className="ap-error" id={describedBy}>
          {error}
        </span>
      ) : hint ? (
        <span className="ap-hint" id={describedBy}>
          {hint}
        </span>
      ) : null}
    </div>
  );
}
