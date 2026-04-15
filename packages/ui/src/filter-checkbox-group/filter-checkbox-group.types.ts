import type { ReactNode } from "react";

export type FilterCheckboxGroupBreakpoint =
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl";

export type FilterCheckboxGroupItem = {
  count?: number;
  disabled?: boolean;
  id: string;
  label: ReactNode;
  selected?: boolean;
};

export type BaseFilterCheckboxGroupProps = {
  className?: string;
  inlineFrom?: FilterCheckboxGroupBreakpoint;
  items: FilterCheckboxGroupItem[];
  lessLabel?: ReactNode;
  maxVisible?: number;
  moreLabel?: (remaining: number) => ReactNode;
  onItemToggle?: (id: string, nextValue: boolean) => void;
  title: string;
  type?: "inline" | "accordion";
};
