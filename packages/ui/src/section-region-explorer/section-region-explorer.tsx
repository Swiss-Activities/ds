"use client";

import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { Text } from "../text";
import { cn } from "../utils/cn";
import type {
  BaseSectionRegionExplorerProps,
  RegionExplorerChip,
  RegionExplorerTile,
} from "./section-region-explorer.types";

export type SectionRegionExplorerProps = BaseSectionRegionExplorerProps &
  Omit<HTMLAttributes<HTMLElement>, "children" | "title">;

const isActive = (
  item: RegionExplorerTile | RegionExplorerChip,
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

const chipClassName = ({
  active,
  disabled,
}: {
  active: boolean;
  disabled?: boolean;
}) =>
  cn(
    "inline-flex min-h-8 appearance-none items-center gap-1.5 rounded-full border border-solid px-3 py-1.5 text-xs font-medium no-underline transition",
    active
      ? "border-blue bg-blue text-white"
      : "border-gray-200 bg-white text-black hover:border-gray-300 hover:bg-gray-100",
    disabled && "pointer-events-none opacity-45"
  );

function RegionSubtitle({ children }: { children: ReactNode }) {
  return (
    <Text
      as="span"
      size="xs"
      gray
      className="inline-flex items-center gap-1.5 font-medium uppercase tracking-[0.04em]"
    >
      <span
        aria-hidden="true"
        className="h-1.5 w-1.5 rounded-full bg-primary"
      />
      {children}
    </Text>
  );
}

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

function RegionChip({
  active,
  chip,
  onClick,
}: {
  active: boolean;
  chip: RegionExplorerChip;
  onClick?: SectionRegionExplorerProps["onChipClick"];
}) {
  const className = chipClassName({ active, disabled: chip.disabled });
  const content = (
    <>
      <span
        aria-hidden="true"
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          active ? "bg-white" : "bg-primary"
        )}
      />
      {chip.label}
    </>
  );

  if (chip.href) {
    return (
      <a
        aria-current={active ? "true" : undefined}
        className={className}
        href={chip.href}
        onClick={() => onClick?.(chip)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      aria-pressed={active}
      className={className}
      disabled={chip.disabled}
      onClick={() => onClick?.(chip)}
      type="button"
    >
      {content}
    </button>
  );
}

export function SectionRegionExplorer({
  title,
  subtitle,
  tiles,
  chips = [],
  activeTileId,
  activeChipId,
  action,
  onTileClick,
  onChipClick,
  className,
  ...props
}: SectionRegionExplorerProps) {
  return (
    <section className={cn(className)} {...props}>
      <div className="mb-4 flex flex-wrap items-baseline gap-x-4 gap-y-2">
        <Text as="h2" size="lg" className="min-w-0 flex-1">
          {title}
        </Text>
        {subtitle ? <RegionSubtitle>{subtitle}</RegionSubtitle> : null}
        {action}
      </div>
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
      {chips.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {chips.map((chip) => (
            <RegionChip
              key={chip.id}
              active={isActive(chip, activeChipId)}
              chip={chip}
              onClick={onChipClick}
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}
