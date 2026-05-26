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
  lat?: number | null;
  lng?: number | null;
  selected?: boolean;
  value?: string;
};

export type BaseFilterCheckboxGroupProps = {
  className?: string;
  inlineFrom?: FilterCheckboxGroupBreakpoint;
  items: FilterCheckboxGroupItem[];
  lessLabel?: ReactNode;
  maxVisible?: number;
  moreLabel?: (remaining: number) => ReactNode;
  onItemToggle?: (
    id: string,
    nextValue: boolean,
    item: FilterCheckboxGroupItem
  ) => void;
  selectionMode?: "multiple" | "single";
  title?: ReactNode;
  type?: "inline" | "accordion";
};
