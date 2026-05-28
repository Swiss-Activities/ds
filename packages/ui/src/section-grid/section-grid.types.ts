import type { ReactNode } from "react";
import type { ActivityItem } from "../section-activity-grid/section-activity-grid.types";

export type BaseSectionGridProps = {
  title?: ReactNode;
  action?: ReactNode;
  activities: ActivityItem[];
  loading?: boolean;
  skeletonAmount?: number;
  itemsPerRowLg?: 1 | 2 | 3 | 4 | "auto";
  className?: string;
};

export type { ActivityItem as SectionGridItem };
