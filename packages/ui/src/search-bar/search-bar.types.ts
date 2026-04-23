import type { ReactNode } from "react";

export type SearchBarMode = "default" | "main" | "mobile";
export const searchBarResultVariants = [
  "location",
  "poi",
  "activity",
  "activity-listing",
  "discovery",
  "supplier",
] as const;

export type SearchBarResultVariant = (typeof searchBarResultVariants)[number];

export type BaseSearchBarProps = {
  autoFocus?: boolean;
  children?: ReactNode;
  classNameInput?: string;
  classNameInputWrapper?: string;
  classNamePanel?: string;
  controls?: ReactNode;
  defaultOpen?: boolean;
  defaultValue?: string;
  disabled?: boolean;
  empty?: ReactNode;
  footer?: ReactNode;
  inputId?: string;
  loading?: boolean;
  mobileControls?: ReactNode;
  mode?: SearchBarMode;
  onClear?: () => void;
  onOpenChange?: (open: boolean) => void;
  onSubmit?: (value: string) => void;
  onValueChange?: (value: string) => void;
  open?: boolean;
  placeholder?: string;
  searchButton?: ReactNode;
  showClear?: boolean;
  showPanel?: boolean;
  value?: string;
};

export type BaseSearchBarResultItemProps = {
  classNameImage?: string;
  detail?: ReactNode;
  distance?: ReactNode;
  icon?: ReactNode;
  image?: ReactNode;
  imageAlt?: string;
  imageSrc?: string;
  subtitle?: ReactNode;
  title: ReactNode;
  variant: SearchBarResultVariant;
};
