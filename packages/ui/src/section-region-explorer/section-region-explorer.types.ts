import type { ReactNode } from "react";

export type RegionExplorerPosition = {
  row: number;
  column: number;
};

export type RegionExplorerTile = {
  id: string;
  label: ReactNode;
  active?: boolean;
  disabled?: boolean;
  href?: string;
  position?: RegionExplorerPosition;
};

export type BaseSectionRegionExplorerProps = {
  title: ReactNode;
  tiles: RegionExplorerTile[];
  activeTileId?: string;
  onTileClick?: (tile: RegionExplorerTile) => void;
  className?: string;
};
