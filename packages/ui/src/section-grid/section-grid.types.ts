import type { ReactNode } from "react";
import type { ActivityItem } from "../section-activity-grid/section-activity-grid.types";

export type BaseSectionGridProps = {
  title?: ReactNode;
  action?: ReactNode;
  activities: ActivityItem[];
  loading?: boolean;
  /** How many leading cards load their image eagerly (above the fold). */
  eagerCards?: number;
  skeletonAmount?: number;
  itemsPerRowLg?: 1 | 2 | 3 | 4 | "auto" | "auto-fill";
  className?: string;
  onActivityHover?: (activity: ActivityItem | null) => void;
};

export type { ActivityItem as SectionGridItem };
