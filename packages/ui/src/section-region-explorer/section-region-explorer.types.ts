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

export type RegionExplorerChip = {
  id: string;
  label: ReactNode;
  active?: boolean;
  disabled?: boolean;
  href?: string;
};

export type BaseSectionRegionExplorerProps = {
  title: ReactNode;
  subtitle?: ReactNode;
  tiles: RegionExplorerTile[];
  chips?: RegionExplorerChip[];
  activeTileId?: string;
  activeChipId?: string;
  action?: ReactNode;
  onTileClick?: (tile: RegionExplorerTile) => void;
  onChipClick?: (chip: RegionExplorerChip) => void;
  className?: string;
};
