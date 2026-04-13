import type { ReactNode } from "react";

export type BaseSectionProductProps = {
  title: ReactNode;
  images: ReactNode[];
  breadcrumbs?: { label: string; href: string }[];
  backLabel?: string;
  backHref?: string;
  onBack?: () => void;
  children?: ReactNode;
  className?: string;
};
