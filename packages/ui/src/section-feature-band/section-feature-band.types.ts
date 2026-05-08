import type { ReactNode } from "react";

export type SectionFeatureBandItem = {
  id: string;
  icon?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
};

export type BaseSectionFeatureBandProps = {
  title?: ReactNode;
  items: SectionFeatureBandItem[];
  className?: string;
};
