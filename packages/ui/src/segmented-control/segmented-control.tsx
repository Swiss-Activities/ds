"use client";

import { cn } from "../utils/cn";
import type { SegmentedControlProps } from "./segmented-control.types";

export const segmentedControlListStyles =
  "inline-flex items-center justify-center border border-solid border-gray-200 bg-white p-0.5";

export const segmentedControlTriggerStyles =
  "inline-flex items-center justify-center gap-1.5 whitespace-nowrap border border-solid border-transparent bg-transparent text-sm font-medium text-gray-600 transition-all duration-150 disabled:pointer-events-none disabled:opacity-50";

const triggerActiveStyles =
  "border-primary bg-transparent text-gray-900";

export function SegmentedControl<T extends string>({
  className,
  iconOnly = false,
  onChange,
  options,
  size = "md",
  value,
  variant = "pill",
}: SegmentedControlProps<T>) {
  const isPill = variant === "pill";

  return (
    <div
      className={cn(
        segmentedControlListStyles,
        isPill ? "rounded-full" : "rounded-lg",
        className
      )}
    >
      {options.map((option) => {
        const selected = value === option.value;

        return (
          <button
            aria-pressed={selected}
            className={cn(
              segmentedControlTriggerStyles,
              isPill ? "rounded-full" : "rounded-md",
              size === "sm"
                ? iconOnly
                  ? "size-8 p-1"
                  : "min-h-8 px-3 py-1"
                : iconOnly
                  ? "size-9 p-1.5"
                  : "min-h-9 px-3.5 py-1.5",
              !selected && "hover:bg-gray-50 hover:text-gray-950",
              selected && triggerActiveStyles,
              option.disabled && "line-through opacity-50"
            )}
            disabled={option.disabled}
            key={option.value}
            onClick={() => onChange(option.value)}
            type="button"
          >
            {option.icon ? (
              <span className="flex text-current">{option.icon}</span>
            ) : null}
            <span className={cn(iconOnly && "sr-only")}>{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
