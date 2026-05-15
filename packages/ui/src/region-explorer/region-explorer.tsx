"use client";

import type {
  CSSProperties,
  HTMLAttributes,
  KeyboardEvent,
  ReactNode,
} from "react";
import { useMemo, useState } from "react";
import { Card } from "../card";
import { Text } from "../text";
import { cn } from "../utils/cn";
import { regionMapPaths } from "./region-explorer.map";
import { tourismRegionDefinitions } from "./region-explorer.regions";
import type { TourismRegionDefinition } from "./region-explorer.regions";
import { tourismRegionMapPaths } from "./region-explorer.tourism-map";
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

const getNodeText = (value: ReactNode) => {
  if (typeof value === "string" || typeof value === "number") {
    return String(value);
  }

  return "";
};

const getItemTone = (item?: RegionExplorerItem): RegionExplorerTone => {
  if (!item) return "low";

  return item.tone ?? "low";
};

const normalizeRegionKey = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const getItemSearchKeys = (item: RegionExplorerItem) =>
  [item.id, item.code, getNodeText(item.label), getNodeText(item.name)]
    .filter((value): value is string => Boolean(value))
    .map((value) => normalizeRegionKey(value));

const getItemAriaLabel = (item: RegionExplorerItem) =>
  getNodeText(getItemName(item)) || getItemCode(item);

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

const mapPathsByCode = new Map<string, string>(
  regionMapPaths.map((region) => [region.code, region.path])
);

const tourismRegionPathById = new Map<string, string>(
  tourismRegionMapPaths.map((region) => [region.id, region.path])
);

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

function getTourismRegionItem({
  definition,
  items,
}: {
  definition: TourismRegionDefinition;
  items: RegionExplorerItem[];
}) {
  const aliases = new Set(definition.aliases.map(normalizeRegionKey));

  return items.find((item) =>
    getItemSearchKeys(item).some((key) => aliases.has(key))
  );
}

function TourismRegionMapLink({
  active,
  definition,
  item,
  onBlur,
  onFocus,
  onItemClick,
  onMouseEnter,
  onMouseLeave,
  path,
}: {
  active: boolean;
  definition: TourismRegionDefinition;
  item?: RegionExplorerItem;
  onBlur: () => void;
  onFocus: () => void;
  onItemClick?: RegionExplorerProps["onItemClick"];
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  path: string;
}) {
  const disabled = !item || item.disabled;
  const ariaLabel = item ? getItemAriaLabel(item) : definition.label;
  const tone = getItemTone(item);
  const pathClassName = cn(
    "stroke-white stroke-2 transition duration-200 ease-in [stroke-linejoin:round]",
    item ? mapToneClassName[tone] : "fill-gray-200",
    disabled
      ? "opacity-35"
      : "cursor-pointer group-hover:fill-primary/85 group-focus-visible:fill-primary/85",
    active && "fill-primary"
  );
  const handleClick = () => {
    if (item && !disabled) {
      onItemClick?.(item);
    }
  };
  const handleKeyDown = (event: KeyboardEvent<SVGGElement>) => {
    if (!item || disabled) return;

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleClick();
    }
  };

  if (item?.href && !disabled) {
    return (
      <a
        aria-current={active ? "true" : undefined}
        aria-label={ariaLabel}
        className="group outline-none"
        href={item.href}
        onBlur={onBlur}
        onClick={handleClick}
        onFocus={onFocus}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <path d={path} className={pathClassName} />
      </a>
    );
  }

  return (
    <g
      aria-label={ariaLabel}
      aria-pressed={item ? active : undefined}
      className="group outline-none"
      onBlur={onBlur}
      onClick={handleClick}
      onFocus={onFocus}
      onKeyDown={handleKeyDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role={item && !disabled ? "button" : "img"}
      tabIndex={item && !disabled ? 0 : -1}
    >
      <path d={path} className={pathClassName} />
    </g>
  );
}

function TourismRegionSidebarItem({
  active,
  definition,
  item,
  onItemClick,
  onRegionBlur,
  onRegionFocus,
}: {
  active: boolean;
  definition: TourismRegionDefinition;
  item?: RegionExplorerItem;
  onItemClick?: RegionExplorerProps["onItemClick"];
  onRegionBlur: () => void;
  onRegionFocus: () => void;
}) {
  const disabled = !item || item.disabled;
  const className = cn(
    "flex w-full items-center justify-between gap-2 rounded-lg px-2.5 py-1.5 text-left text-xs no-underline transition",
    disabled
      ? "pointer-events-none opacity-40"
      : "cursor-pointer hover:bg-primary/10 hover:text-primary focus-visible:bg-primary/10 focus-visible:text-primary",
    active
      ? "bg-primary text-white hover:bg-primary hover:text-white"
      : "text-gray-700"
  );
  const content = (
    <>
      <span className="min-w-0 truncate font-medium">
        {item ? getItemName(item) : definition.label}
      </span>
      {item?.count !== undefined && item.count !== null ? (
        <span
          className={cn(
            "shrink-0 rounded-full px-1.5 py-0.5 text-[10px] font-semibold leading-none",
            active ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
          )}
        >
          {item.count}
        </span>
      ) : null}
    </>
  );
  const handleClick = () => {
    if (item && !disabled) {
      onItemClick?.(item);
    }
  };

  if (item?.href && !disabled) {
    return (
      <a
        aria-current={active ? "true" : undefined}
        className={className}
        href={item.href}
        onBlur={onRegionBlur}
        onClick={handleClick}
        onFocus={onRegionFocus}
        onMouseEnter={onRegionFocus}
        onMouseLeave={onRegionBlur}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      aria-pressed={item ? active : undefined}
      className={className}
      disabled={disabled}
      onBlur={onRegionBlur}
      onClick={handleClick}
      onFocus={onRegionFocus}
      onMouseEnter={onRegionFocus}
      onMouseLeave={onRegionBlur}
      type="button"
    >
      {content}
    </button>
  );
}

function RegionExplorerTourismMap({
  activeItemId,
  items,
  onItemClick,
}: BaseRegionExplorerProps) {
  const [focusedRegionId, setFocusedRegionId] = useState<string | null>(null);
  const itemsByRegionId = useMemo(() => {
    const map = new Map<string, RegionExplorerItem>();

    for (const definition of tourismRegionDefinitions) {
      const item = getTourismRegionItem({ definition, items });

      if (item) {
        map.set(definition.id, item);
      }
    }

    return map;
  }, [items]);
  const activeItem = items.find((item) => isActive(item, activeItemId));
  const focusedItem = focusedRegionId
    ? itemsByRegionId.get(focusedRegionId)
    : undefined;
  const tooltipItem = focusedItem ?? activeItem;

  return (
    <div className="relative rounded-3xl border border-solid border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 lg:p-10">
      {tooltipItem ? (
        <Card className="pointer-events-none absolute right-6 top-6 z-10 min-w-44 transition xl:hidden">
          <Text
            size="xs"
            bold
            className="mb-0.5 uppercase tracking-widest !text-gray-500"
          >
            {getItemCode(tooltipItem)}
          </Text>
          <Text size="sm" bold className="mb-1">
            {getItemName(tooltipItem)}
          </Text>
          {tooltipItem.count !== undefined && tooltipItem.count !== null ? (
            <div className="flex flex-col">
              <Text size="lg" bold>
                {tooltipItem.count}
              </Text>
              <Text size="xs" className="!text-gray-500">
                {tooltipItem.countLabel ?? "Angebote verfügbar"}
              </Text>
            </div>
          ) : null}
        </Card>
      ) : null}
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_240px] xl:items-center">
        <svg
          aria-label="Geographic map of Switzerland with tourism regions"
          className="h-auto max-h-[450px] w-full"
          role="img"
          viewBox="0 0 1224 783"
        >
          <title>Switzerland tourism regions</title>
          {tourismRegionDefinitions.map((definition) => {
            const item = itemsByRegionId.get(definition.id);
            const active = item
              ? isActive(item, activeItemId) ||
                focusedRegionId === definition.id
              : focusedRegionId === definition.id;
            const path = tourismRegionPathById.get(definition.id);

            if (!path) {
              return null;
            }

            return (
              <TourismRegionMapLink
                active={active}
                definition={definition}
                item={item}
                key={definition.id}
                onBlur={() => setFocusedRegionId(null)}
                onFocus={() => setFocusedRegionId(definition.id)}
                onItemClick={onItemClick}
                onMouseEnter={() => setFocusedRegionId(definition.id)}
                onMouseLeave={() => setFocusedRegionId(null)}
                path={path}
              />
            );
          })}
        </svg>
        <aside className="hidden rounded-2xl bg-white/75 p-2 shadow-sm ring-1 ring-gray-200 xl:block">
          <div className="grid gap-1">
            {tourismRegionDefinitions.map((definition) => {
              const item = itemsByRegionId.get(definition.id);
              const active = item
                ? isActive(item, activeItemId) ||
                  focusedRegionId === definition.id
                : focusedRegionId === definition.id;

              return (
                <TourismRegionSidebarItem
                  active={active}
                  definition={definition}
                  item={item}
                  key={definition.id}
                  onItemClick={onItemClick}
                  onRegionBlur={() => setFocusedRegionId(null)}
                  onRegionFocus={() => setFocusedRegionId(definition.id)}
                />
              );
            })}
          </div>
        </aside>
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
      : "cursor-pointer group-hover:fill-primary/85 group-focus-visible:fill-primary/85",
    active && "fill-primary"
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

function RegionExplorerCantonMap({
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
        <Card className="pointer-events-none absolute right-6 top-6 z-10 min-w-44 transition">
          <Text
            size="xs"
            bold
            className="mb-0.5 uppercase tracking-widest !text-gray-500"
          >
            {getItemCode(tooltipItem)}
          </Text>
          <Text size="sm" bold className="mb-1">
            {getItemName(tooltipItem)}
          </Text>
          {tooltipItem.count !== undefined && tooltipItem.count !== null ? (
            <div className="flex flex-col">
              <Text size="lg" bold>
                {tooltipItem.count}
              </Text>
              <Text size="xs" className="!text-gray-500">
                {tooltipItem.countLabel ?? "Angebote verfügbar"}
              </Text>
            </div>
          ) : null}
        </Card>
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
      ) : variant === "cantons" ? (
        <RegionExplorerCantonMap
          activeItemId={activeItemId}
          items={items}
          onItemClick={onItemClick}
        />
      ) : (
        <RegionExplorerTourismMap
          activeItemId={activeItemId}
          items={items}
          onItemClick={onItemClick}
        />
      )}
    </div>
  );
}
