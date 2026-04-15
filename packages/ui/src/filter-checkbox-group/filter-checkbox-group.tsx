"use client";

import {
  useEffect,
  useMemo,
  useState,
  type HTMLAttributes,
} from "react";
import { Button } from "../button";
import { Checkbox } from "../checkbox";
import { Icon } from "../icon/icon";
import { ChevronDown, Plus } from "../icons";
import { Text } from "../text";
import { cn } from "../utils/cn";
import type {
  BaseFilterCheckboxGroupProps,
  FilterCheckboxGroupBreakpoint,
  FilterCheckboxGroupItem,
} from "./filter-checkbox-group.types";

const breakpointMinWidths: Record<FilterCheckboxGroupBreakpoint, number> = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

function useMinBreakpoint(breakpoint?: FilterCheckboxGroupBreakpoint) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (!breakpoint) {
      setMatches(false);
      return;
    }

    const mediaQuery = window.matchMedia(
      `(min-width: ${breakpointMinWidths[breakpoint]}px)`
    );

    const update = () => {
      setMatches(mediaQuery.matches);
    };

    update();
    mediaQuery.addEventListener("change", update);

    return () => {
      mediaQuery.removeEventListener("change", update);
    };
  }, [breakpoint]);

  return matches;
}

function FilterCheckboxLabel({
  label,
  count,
}: {
  label: FilterCheckboxGroupItem["label"];
  count?: number;
}) {
  return (
    <span className="relative top-[2px] inline-block text-sm leading-5 text-gray-900">
      <span className="me-2 inline-block">
        {label}
      </span>
      {typeof count === "number" ? (
        <span className="relative -top-px inline-flex h-max rounded bg-blue/10 px-1 py-1 text-[11px] leading-none text-blue">
          {count}
        </span>
      ) : null}
    </span>
  );
}

function FilterCheckboxList({
  items,
  lessLabel,
  maxVisible,
  moreLabel,
  onItemToggle,
}: {
  items: FilterCheckboxGroupItem[];
  lessLabel: BaseFilterCheckboxGroupProps["lessLabel"];
  maxVisible: number;
  moreLabel: NonNullable<BaseFilterCheckboxGroupProps["moreLabel"]>;
  onItemToggle?: BaseFilterCheckboxGroupProps["onItemToggle"];
}) {
  const [isAll, setIsAll] = useState(false);
  const [selectedById, setSelectedById] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setSelectedById(
      Object.fromEntries(
        items.map((item) => [item.id, Boolean(item.selected)])
      )
    );
  }, [items]);

  const visibleItems = items.slice(0, isAll ? items.length : maxVisible);

  return (
    <div className="flex flex-col">
      {visibleItems.map((item) => (
        <Checkbox
          key={item.id}
          title={<FilterCheckboxLabel label={item.label} count={item.count} />}
          selected={Boolean(selectedById[item.id])}
          disabled={item.disabled}
          className="py-1"
          onChange={(nextValue) => {
            setSelectedById((current) => ({
              ...current,
              [item.id]: nextValue,
            }));
            onItemToggle?.(item.id, nextValue);
          }}
        />
      ))}

      {items.length > maxVisible ? (
        <Button
          type="link"
          className="mt-1 !border-none !bg-transparent !p-0 !text-left !text-gray-900"
          icon={!isAll ? <Icon icon={Plus} size="xs" /> : null}
          text={isAll ? lessLabel : moreLabel(items.length - maxVisible)}
          onClick={() => setIsAll((current) => !current)}
        />
      ) : null}
    </div>
  );
}

export type FilterCheckboxGroupProps = BaseFilterCheckboxGroupProps &
  Omit<HTMLAttributes<HTMLDivElement>, "children">;

export function FilterCheckboxGroup({
  className,
  inlineFrom,
  items,
  lessLabel = "Show less",
  maxVisible = 5,
  moreLabel = (remaining) => `Show ${remaining} more`,
  onItemToggle,
  title,
  type = "inline",
  ...props
}: FilterCheckboxGroupProps) {
  const [open, setOpen] = useState(false);
  const shouldRenderInline = useMinBreakpoint(inlineFrom);
  const content = useMemo(
    () => (
      <FilterCheckboxList
        items={items}
        lessLabel={lessLabel}
        maxVisible={maxVisible}
        moreLabel={moreLabel}
        onItemToggle={onItemToggle}
      />
    ),
    [items, lessLabel, maxVisible, moreLabel, onItemToggle]
  );

  if (type === "accordion" && !shouldRenderInline) {
    return (
      <div
        className={cn("border-b border-solid border-gray-200", className)}
        {...props}
      >
        <button
          type="button"
          className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left"
          onClick={() => setOpen((current) => !current)}
        >
          <Text as="span" size="lg" className="!text-[17px]">
            {title}
          </Text>
          <Icon
            icon={ChevronDown}
            size="default"
            className={cn("text-gray-400 transition", open && "rotate-180")}
          />
        </button>
        {open ? <div className="px-4 pb-4">{content}</div> : null}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "space-y-2",
        type === "accordion" &&
          inlineFrom &&
          shouldRenderInline &&
          "py-3 first:pt-0",
        className
      )}
      {...props}
    >
      <Text as="h3" bold black>
        {title}
      </Text>
      {content}
    </div>
  );
}
