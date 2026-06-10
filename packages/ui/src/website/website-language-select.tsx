"use client";

import { Icon } from "../icon/icon";
import { Languages } from "../icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../select";
import type { WebsiteLanguageSelectProps } from "./website.types";

export function WebsiteLanguageSelect({
  ariaLabel = "Sprache",
  className,
  long = false,
  onValueChange,
  options,
  value,
}: WebsiteLanguageSelectProps) {
  const selected = options.find((option) => option.value === value);

  return (
    <Select
      value={value}
      onValueChange={(next) => onValueChange?.(String(next))}
    >
      <SelectTrigger
        aria-label={ariaLabel}
        className={className ?? "bg-white shadow-none"}
      >
        <Icon icon={Languages} size="sm" />
        <SelectValue>
          {long
            ? selected?.label
            : selected?.shortLabel ?? selected?.value.slice(0, 2).toUpperCase()}
        </SelectValue>
      </SelectTrigger>
      <SelectContent align="end">
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
