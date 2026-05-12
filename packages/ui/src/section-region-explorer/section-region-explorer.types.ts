import type { ReactNode } from "react";
import type {
  BaseRegionExplorerProps,
  RegionExplorerItem,
  RegionExplorerPosition,
  RegionExplorerTone,
  RegionExplorerVariant,
} from "../region-explorer";

export type {
  RegionExplorerPosition,
  RegionExplorerTone,
  RegionExplorerVariant,
};

export type RegionExplorerTile = RegionExplorerItem;

export type BaseSectionRegionExplorerProps = Omit<
  BaseRegionExplorerProps,
  "items"
> & {
  title: ReactNode;
  tiles: RegionExplorerTile[];
};
