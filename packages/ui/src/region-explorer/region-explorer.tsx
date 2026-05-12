"use client";

import type {
  CSSProperties,
  HTMLAttributes,
  KeyboardEvent,
  ReactNode,
} from "react";
import { useMemo, useState } from "react";
import { Text } from "../text";
import { cn } from "../utils/cn";
import { regionMapPaths } from "./region-explorer.map";
import type {
  BaseRegionExplorerProps,
  RegionExplorerItem,
  RegionExplorerTone,
} from "./region-explorer.types";

export type RegionExplorerProps = BaseRegionExplorerProps &
  Omit<HTMLAttributes<HTMLElement>, "children" | "onClick">;

const isActive = (item: RegionExplorerItem, activeId?: string) =>
  item.active || item.id === activeId;

const getItemCode = (item: RegionExplorerItem) => {
  if (item.code) return item.code.toUpperCase();
  if (typeof item.label === "string") return item.label.toUpperCase();
  return item.id.toUpperCase();
};

const getItemName = (item: RegionExplorerItem): ReactNode =>
  item.name ?? item.label;

const getItemTone = (item?: RegionExplorerItem): RegionExplorerTone => {
  if (!item) return "low";

  return item.tone ?? "low";
};

const listItemClassName = ({
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

const mapToneClassName: Record<RegionExplorerTone, string> = {
  low: "fill-primary/15",
  mid: "fill-primary/35",
  high: "fill-primary/55",
};

function getListItemStyle(item: RegionExplorerItem): CSSProperties | undefined {
  if (!item.position) {
    return undefined;
  }

  return {
    gridColumn: item.position.column,
    gridRow: item.position.row,
  };
}

function RegionExplorerListItem({
  active,
  item,
  onItemClick,
}: {
  active: boolean;
  item: RegionExplorerItem;
  onItemClick?: RegionExplorerProps["onItemClick"];
}) {
  const className = listItemClassName({ active, disabled: item.disabled });
  const style = getListItemStyle(item);

  if (item.href) {
    return (
      <a
        aria-current={active ? "true" : undefined}
        className={className}
        href={item.href}
        onClick={() => onItemClick?.(item)}
        style={style}
      >
        {item.label}
      </a>
    );
  }

  return (
    <button
      aria-pressed={active}
      className={className}
      disabled={item.disabled}
      onClick={() => onItemClick?.(item)}
      style={style}
      type="button"
    >
      {item.label}
    </button>
  );
}

function RegionExplorerList({
  activeItemId,
  items,
  onItemClick,
}: BaseRegionExplorerProps) {
  return (
    <div className="rounded-xl border border-solid border-gray-200 bg-gray-50 px-2 py-4 sm:px-4">
      <div className="mx-auto grid max-w-[540px] grid-cols-8 gap-1.5 sm:gap-2">
        {items.map((item) => (
          <RegionExplorerListItem
            key={item.id}
            active={isActive(item, activeItemId)}
            item={item}
            onItemClick={onItemClick}
          />
        ))}
      </div>
    </div>
  );
}

function RegionMapLink({
  active,
  item,
  onBlur,
  onFocus,
  onItemClick,
  onMouseEnter,
  onMouseLeave,
  path,
}: {
  active: boolean;
  item: RegionExplorerItem;
  onBlur: () => void;
  onFocus: () => void;
  onItemClick?: RegionExplorerProps["onItemClick"];
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  path: string;
}) {
  const pathClassName = cn(
    "stroke-white stroke-2 transition duration-200 ease-in [stroke-linejoin:round]",
    mapToneClassName[getItemTone(item)],
    item.disabled
      ? "opacity-35"
      : "cursor-pointer group-hover:fill-primary/85 group-hover:stroke-primary group-focus-visible:fill-primary/85 group-focus-visible:stroke-primary",
    active && "fill-primary stroke-primary"
  );
  const handleClick = () => {
    if (!item.disabled) {
      onItemClick?.(item);
    }
  };

  if (item.href) {
    return (
      <a
        aria-current={active ? "true" : undefined}
        className="group outline-none"
        href={item.disabled ? undefined : item.href}
        onBlur={onBlur}
        onClick={(event) => {
          if (item.disabled) {
            event.preventDefault();
            return;
          }

          handleClick();
        }}
        onFocus={onFocus}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <path d={path} className={pathClassName} />
      </a>
    );
  }

  const handleKeyDown = (event: KeyboardEvent<SVGGElement>) => {
    if (item.disabled) return;

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <g
      aria-pressed={active}
      className="group outline-none"
      onBlur={onBlur}
      onClick={handleClick}
      onFocus={onFocus}
      onKeyDown={handleKeyDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role="button"
      tabIndex={item.disabled ? -1 : 0}
    >
      <path d={path} className={pathClassName} />
    </g>
  );
}

function RegionExplorerMap({
  activeItemId,
  items,
  onItemClick,
}: BaseRegionExplorerProps) {
  const itemsByCode = useMemo(() => {
    const map = new Map<string, RegionExplorerItem>();

    for (const item of items) {
      map.set(getItemCode(item), item);
    }

    return map;
  }, [items]);
  const activeItem = items.find((item) => isActive(item, activeItemId));
  const [focusedCode, setFocusedCode] = useState<string | null>(null);
  const focusedItem = focusedCode ? itemsByCode.get(focusedCode) : undefined;
  const tooltipItem = focusedItem ?? activeItem;

  return (
    <div className="relative rounded-3xl border border-solid border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 lg:p-10">
      {tooltipItem ? (
        <div className="pointer-events-none absolute right-6 top-6 z-10 min-w-44 rounded-2xl border border-solid border-gray-200 bg-white p-4 shadow-lg transition">
          <Text
            size="xs"
            bold
            className="mb-0.5 uppercase tracking-widest !text-primary"
          >
            {getItemCode(tooltipItem)}
          </Text>
          <Text size="sm" bold className="mb-1">
            {getItemName(tooltipItem)}
          </Text>
          {tooltipItem.count !== undefined && tooltipItem.count !== null ? (
            <div className="flex flex-col">
              <Text size="lg" bold className="!text-primary">
                {tooltipItem.count}
              </Text>
              <Text size="xs" className="!text-gray-500">
                {tooltipItem.countLabel ?? "Angebote verfügbar"}
              </Text>
            </div>
          ) : null}
        </div>
      ) : null}
      <svg
        aria-label="Schweizer Regionen"
        className="h-auto max-h-[450px] w-full"
        role="img"
        viewBox="0 0 1224 783"
      >
        {regionMapPaths.map((region) => {
          const item = itemsByCode.get(region.code);
          const active = item ? isActive(item, activeItemId) : false;

          return item ? (
            <RegionMapLink
              key={region.code}
              active={active}
              item={item}
              onBlur={() => setFocusedCode(null)}
              onFocus={() => setFocusedCode(region.code)}
              onItemClick={onItemClick}
              onMouseEnter={() => setFocusedCode(region.code)}
              onMouseLeave={() => setFocusedCode(null)}
              path={region.path}
            />
          ) : (
            <path
              aria-hidden
              className="fill-gray-200 stroke-white stroke-2 [stroke-linejoin:round]"
              d={region.path}
              key={region.code}
            />
          );
        })}
      </svg>
    </div>
  );
}

export function RegionExplorer({
  activeItemId,
  className,
  items,
  onItemClick,
  variant = "map",
  ...props
}: RegionExplorerProps) {
  return (
    <div className={cn(className)} {...props}>
      {variant === "list" ? (
        <RegionExplorerList
          activeItemId={activeItemId}
          items={items}
          onItemClick={onItemClick}
        />
      ) : (
        <RegionExplorerMap
          activeItemId={activeItemId}
          items={items}
          onItemClick={onItemClick}
        />
      )}
    </div>
  );
}
