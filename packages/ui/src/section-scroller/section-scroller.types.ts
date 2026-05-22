import type { ReactNode } from "react";

export const sectionScrollerDesktopLayouts = ["scroll", "grid"] as const;

export type SectionScrollerDesktopLayout =
  (typeof sectionScrollerDesktopLayouts)[number];

export type BaseSectionScrollerProps = {
  title?: ReactNode;
  subtitle?: ReactNode;
  action?: ReactNode;
  children: ReactNode;
  as?: "section" | "div";
  desktopLayout?: SectionScrollerDesktopLayout;
  hideHeader?: boolean;
  itemsPerRowLg?: 1 | 3 | 4;
  noContainer?: boolean;
  showControls?: boolean;
  className?: string;
  trackClassName?: string;
};
