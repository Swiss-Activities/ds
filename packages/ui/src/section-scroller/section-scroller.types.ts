import type { ReactNode } from "react";

export type BaseSectionScrollerProps = {
  title: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  className?: string;
};
