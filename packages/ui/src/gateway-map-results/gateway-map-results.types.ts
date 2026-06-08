import type { HTMLAttributes, ReactNode } from "react";
import type { ActivityItem } from "../section-activity-grid";

export type GatewayMapResultsLabels = {
  activities: ReactNode;
  noExactResultsTitle: ReactNode;
  noExactResultsDescription: ReactNode;
  showNearestResults: ReactNode;
  resetDate: ReactNode;
};

export type GatewayMapResultsProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "children" | "title"
> & {
  action?: ReactNode;
  activities: ActivityItem[];
  apiKey?: string;
  filterHeader: ReactNode;
  labels: GatewayMapResultsLabels;
  loading?: boolean;
  open: boolean;
  resetKey?: string | number;
  sectionTitle: ReactNode;
  onResetDate?: () => void;
};
