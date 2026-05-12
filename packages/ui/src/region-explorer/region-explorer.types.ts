import type { ReactNode } from "react";

export type RegionExplorerPosition = {
  row: number;
  column: number;
};

export type RegionExplorerVariant = "map" | "list";

export type RegionExplorerTone = "low" | "mid" | "high";

export type RegionExplorerItem = {
  id: string;
  label: ReactNode;
  active?: boolean;
  disabled?: boolean;
  href?: string;
  position?: RegionExplorerPosition;
  code?: string;
  name?: ReactNode;
  count?: ReactNode;
  countLabel?: ReactNode;
  tone?: RegionExplorerTone;
};

export type BaseRegionExplorerProps = {
  items: RegionExplorerItem[];
  activeItemId?: string;
  onItemClick?: (item: RegionExplorerItem) => void;
  variant?: RegionExplorerVariant;
  className?: string;
};
