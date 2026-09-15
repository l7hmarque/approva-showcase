import { useEffect, type ReactNode } from "react";
import { cn } from "../lib/cn";

export interface DialogProps {
  open: boolean;
  onClose: () => void;
  title: ReactNode;
  description?: ReactNode;
  /** Action buttons rendered in the footer. */
  footer?: ReactNode;
  children?: ReactNode;
  className?: string;
}

/** Modal dialog with overlay dismiss and Escape handling. */
export function Dialog({
  open,
  onClose,
  title,
  description,
  footer,
  children,
  className,
}: DialogProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="ap-dialog__overlay" onClick={onClose} role="presentation">
      <div
        className={cn("ap-dialog", className)}
        role="dialog"
        aria-modal="true"
        aria-label={typeof title === "string" ? title : undefined}
        onClick={(event) => event.stopPropagation()}
      >
        <h2 className="ap-dialog__title">{title}</h2>
        {description ? <p className="ap-card__body">{description}</p> : null}
        {children}
        {footer ? <div className="ap-dialog__footer">{footer}</div> : null}
      </div>
    </div>
  );
}
