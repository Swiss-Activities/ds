"use client";

import type { CSSProperties, HTMLAttributes } from "react";
import { Text } from "../text";
import { cn } from "../utils/cn";
import type {
  BaseSectionRegionExplorerProps,
  RegionExplorerTile,
} from "./section-region-explorer.types";

export type SectionRegionExplorerProps = BaseSectionRegionExplorerProps &
  Omit<HTMLAttributes<HTMLElement>, "children" | "title">;

const isActive = (
  item: RegionExplorerTile,
  activeId?: string
) => item.active || item.id === activeId;

const tileClassName = ({
  active,
  disabled,
}: {
  active: boolean;
  disabled?: boolean;
}) =>
  cn(
    "flex aspect-square w-full appearance-none items-center justify-center rounded border border-solid text-xs font-semibold tracking-wide no-underline transition sm:text-sm",
    active
      ? "border-blue bg-blue text-white"
      : "border-gray-200 bg-white text-gray-600 hover:border-primary hover:bg-light hover:text-primary",
    disabled && "pointer-events-none opacity-45"
  );

function getTileStyle(tile: RegionExplorerTile): CSSProperties | undefined {
  if (!tile.position) {
    return undefined;
  }

  return {
    gridColumn: tile.position.column,
    gridRow: tile.position.row,
  };
}

function RegionTile({
  active,
  onClick,
  tile,
}: {
  active: boolean;
  onClick?: SectionRegionExplorerProps["onTileClick"];
  tile: RegionExplorerTile;
}) {
  const className = tileClassName({ active, disabled: tile.disabled });
  const style = getTileStyle(tile);

  if (tile.href) {
    return (
      <a
        aria-current={active ? "true" : undefined}
        className={className}
        href={tile.href}
        onClick={() => onClick?.(tile)}
        style={style}
      >
        {tile.label}
      </a>
    );
  }

  return (
    <button
      aria-pressed={active}
      className={className}
      disabled={tile.disabled}
      onClick={() => onClick?.(tile)}
      style={style}
      type="button"
    >
      {tile.label}
    </button>
  );
}

export function SectionRegionExplorer({
  title,
  tiles,
  activeTileId,
  onTileClick,
  className,
  ...props
}: SectionRegionExplorerProps) {
  return (
    <section className={cn(className)} {...props}>
      <Text as="h2" size="lg" className="mb-4">
        {title}
      </Text>
      <div className="rounded-xl border border-solid border-gray-200 bg-gray-50 px-2 py-4 sm:px-4">
        <div className="mx-auto grid max-w-[540px] grid-cols-8 gap-1.5 sm:gap-2">
          {tiles.map((tile) => (
            <RegionTile
              key={tile.id}
              active={isActive(tile, activeTileId)}
              onClick={onTileClick}
              tile={tile}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
