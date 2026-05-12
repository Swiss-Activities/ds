"use client";

import type { HTMLAttributes } from "react";
import { RegionExplorer } from "../region-explorer";
import { Text } from "../text";
import { cn } from "../utils/cn";
import type { BaseSectionRegionExplorerProps } from "./section-region-explorer.types";

export type SectionRegionExplorerProps = BaseSectionRegionExplorerProps &
  Omit<HTMLAttributes<HTMLElement>, "children" | "title" | "onClick"> & {
    activeTileId?: string;
    onTileClick?: BaseSectionRegionExplorerProps["onItemClick"];
  };

export function SectionRegionExplorer({
  activeItemId,
  activeTileId,
  className,
  onItemClick,
  onTileClick,
  tiles,
  title,
  variant = "map",
  ...props
}: SectionRegionExplorerProps) {
  return (
    <section className={cn(className)} {...props}>
      <Text as="h2" size="lg" className="mb-4">
        {title}
      </Text>
      <RegionExplorer
        activeItemId={activeItemId ?? activeTileId}
        items={tiles}
        onItemClick={onItemClick ?? onTileClick}
        variant={variant}
      />
    </section>
  );
}
