import { useState, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { Button } from "./Button";

export interface DropdownItem {
  id: string;
  label: ReactNode;
  onSelect?: () => void;
}

export interface DropdownMenuProps {
  /** Text of the trigger button. */
  trigger: ReactNode;
  items: DropdownItem[];
  className?: string;
}

export function DropdownMenu({ trigger, items, className }: DropdownMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn("ap-menu", className)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) setOpen(false);
      }}
    >
      <Button
        variant="outline"
        size="sm"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {trigger}
      </Button>
      {open ? (
        <div className="ap-menu__list" role="menu">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              role="menuitem"
              className="ap-menu__item"
              onClick={() => {
                item.onSelect?.();
                setOpen(false);
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
