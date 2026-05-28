import type { ReactNode } from "react";

export type SegmentedControlOption<T extends string> = {
  disabled?: boolean;
  icon?: ReactNode;
  label: string;
  value: T;
};

export type SegmentedControlProps<T extends string> = {
  className?: string;
  iconOnly?: boolean;
  onChange: (value: T) => void;
  options: SegmentedControlOption<T>[];
  size?: "sm" | "md";
  value: T;
  variant?: "rounded" | "pill";
};
