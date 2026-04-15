import type { ReactNode } from "react";

export type BaseCheckboxProps = {
  className?: string;
  controlled?: boolean;
  disabled?: boolean;
  help?: ReactNode;
  name?: string;
  onChange?: (checked: boolean) => void;
  required?: boolean;
  selected?: boolean;
  title?: ReactNode;
};
