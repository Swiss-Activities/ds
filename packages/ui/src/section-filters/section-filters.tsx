"use client";

import {
  isValidElement,
  useEffect,
  useMemo,
  useRef,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { Button } from "../button";
import { FilterCheckboxGroup } from "../filter-checkbox-group";
import { HorizontalScrollerNext } from "../horizontal-scroller/horizontal-scroller.next";
import { HorizontalScrollerPrev } from "../horizontal-scroller/horizontal-scroller.prev";
import { HorizontalScrollerRoot } from "../horizontal-scroller/horizontal-scroller.root";
import { HorizontalScrollerTrack } from "../horizontal-scroller/horizontal-scroller.track";
import { Icon } from "../icon/icon";
import { Check, ChevronDown, Filter, Search, X } from "../icons";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { Sheet } from "../sheet";
import { Text } from "../text";
import { cn } from "../utils/cn";
import type {
  BaseSectionFiltersProps,
  SectionFilterGroup,
  SectionFilterItem,
  SectionFiltersBreakpoint,
} from "./section-filters.types";

const breakpointMinWidths: Record<SectionFiltersBreakpoint, number> = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

function useMinBreakpoint(breakpoint: SectionFiltersBreakpoint) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
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

function getNodeText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map(getNodeText).join(" ");
  }

  if (isValidElement<{ children?: ReactNode }>(node)) {
    return getNodeText(node.props.children);
  }

  return "";
}

type FilterDropdownGroupProps = {
  group: SectionFilterGroup;
  inlineFrom?: SectionFiltersBreakpoint;
  onItemToggle?: BaseSectionFiltersProps["onFilterGroupItemToggle"];
  searchPlaceholder?: string;
  showTitle?: boolean;
  type?: "inline" | "accordion";
};

function FilterDropdownGroup({
  group,
  onItemToggle,
  searchPlaceholder,
  showTitle = true,
  type = "inline",
}: FilterDropdownGroupProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setQuery("");
  }, [group.id]);

  const normalizedQuery = query.trim().toLocaleLowerCase();
  const filteredItems = normalizedQuery
    ? group.items.filter((item) =>
        getNodeText(item.label).toLocaleLowerCase().includes(normalizedQuery)
      )
    : group.items;
  const visibleItems = [...filteredItems].sort(
    (a, b) => Number(Boolean(b.selected)) - Number(Boolean(a.selected))
  );
  const searchLabel = searchPlaceholder ?? getNodeText(group.title);
  const isAccordion = type === "accordion";

  const content = (
    <>
      <div className={cn("space-y-3", !isAccordion && "px-4 pb-3 pt-4")}>
        {showTitle && !isAccordion ? (
          <Text as="h3" bold black>
            {group.title}
          </Text>
        ) : null}
        <div className="relative">
          <Icon
            icon={Search}
            size="sm"
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
          />
          <input
            type="search"
            value={query}
            placeholder={searchPlaceholder}
            aria-label={searchLabel}
            className="m-0 h-10 w-full appearance-none rounded-lg border border-solid border-gray-200 bg-white py-2 pl-9 pr-3 text-sm text-gray-950 outline-none transition placeholder:text-gray-500 focus:border-primary focus:ring-0 [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden [&::-webkit-search-results-button]:hidden [&::-webkit-search-results-decoration]:hidden"
            onChange={(event) => setQuery(event.currentTarget.value)}
          />
        </div>
      </div>
      <div
        className={cn(
          "grid gap-1",
          isAccordion ? "mt-3" : "px-4 pb-4"
        )}
      >
        {visibleItems.map((item) => {
          const selected = Boolean(item.selected);

          return (
            <Button
              key={item.id}
              type="select"
              selected={selected}
              disabled={item.disabled}
              onClick={() => onItemToggle?.(group, item.id, !selected, item)}
            >
              <span className="min-w-0 flex-1 truncate">{item.label}</span>
              {selected ? (
                <span className="ms-3 flex shrink-0">
                  <Icon icon={Check} size="sm" className="group-hover:hidden" />
                  <Icon icon={X} size="sm" className="hidden group-hover:block" />
                </span>
              ) : null}
            </Button>
          );
        })}
      </div>
    </>
  );

  if (isAccordion) {
    return (
      <div className="!border-l-0 !border-r-0 !border-t-0 border-b border-solid border-gray-200">
        <button
          type="button"
          className="m-0 flex w-full cursor-pointer appearance-none items-center justify-between gap-4 rounded-none !border-0 !bg-transparent px-4 py-4 text-left font-[inherit] text-current shadow-none"
          onClick={() => setOpen((current) => !current)}
        >
          <Text as="span" size="lg" className="!text-[17px]">
            {group.title}
          </Text>
          <Icon
            icon={ChevronDown}
            size="default"
            className={cn("text-gray-400 transition", open && "rotate-180")}
          />
        </button>
        {open ? <div className="space-y-3 px-4 pb-4">{content}</div> : null}
      </div>
    );
  }

  return <div>{content}</div>;
}

type FilterGroupContentProps = {
  group: SectionFilterGroup;
  inlineFrom?: SectionFiltersBreakpoint;
  lessLabel: BaseSectionFiltersProps["filterGroupLessLabel"];
  maxVisible?: number;
  moreLabel: NonNullable<BaseSectionFiltersProps["filterGroupMoreLabel"]>;
  onItemToggle?: BaseSectionFiltersProps["onFilterGroupItemToggle"];
  searchPlaceholder?: BaseSectionFiltersProps["filterGroupSearchPlaceholder"];
  showTitle?: boolean;
  type?: "inline" | "accordion";
};

function FilterGroupContent({
  group,
  inlineFrom,
  lessLabel,
  maxVisible,
  moreLabel,
  onItemToggle,
  searchPlaceholder,
  showTitle = true,
  type = "inline",
}: FilterGroupContentProps) {
  if (group.type === "dropdown") {
    return (
      <FilterDropdownGroup
        group={group}
        inlineFrom={inlineFrom}
        onItemToggle={onItemToggle}
        searchPlaceholder={searchPlaceholder}
        showTitle={showTitle}
        type={type}
      />
    );
  }

  return (
    <FilterCheckboxGroup
      title={showTitle ? group.title : undefined}
      items={group.items}
      type={type}
      inlineFrom={inlineFrom}
      maxVisible={maxVisible}
      lessLabel={lessLabel}
      moreLabel={moreLabel}
      selectionMode={group.type === "radio" ? "single" : "multiple"}
      onItemToggle={(id, nextValue, item) =>
        onItemToggle?.(group, id, nextValue, item)
      }
    />
  );
}

type FilterGroupsContentProps = {
  groups: SectionFilterGroup[];
  lessLabel: BaseSectionFiltersProps["filterGroupLessLabel"];
  moreLabel: NonNullable<BaseSectionFiltersProps["filterGroupMoreLabel"]>;
  onItemToggle?: BaseSectionFiltersProps["onFilterGroupItemToggle"];
  searchPlaceholder?: BaseSectionFiltersProps["filterGroupSearchPlaceholder"];
};

function FilterGroupsContent({
  groups,
  lessLabel,
  moreLabel,
  onItemToggle,
  searchPlaceholder,
}: FilterGroupsContentProps) {
  return (
    <div className="-mx-4 !border-b-0 !border-l-0 !border-r-0 border-t border-solid border-gray-200 lg:mx-0 lg:border-t-0">
      {groups.map((group) => (
        <FilterGroupContent
          key={group.id}
          group={group}
          type="accordion"
          inlineFrom="lg"
          lessLabel={lessLabel}
          moreLabel={moreLabel}
          onItemToggle={onItemToggle}
          searchPlaceholder={searchPlaceholder}
        />
      ))}
    </div>
  );
}

function getItemGroup(
  item: SectionFilterItem,
  groupsById: Map<string, SectionFilterGroup>,
  groupsByParam: Map<string, SectionFilterGroup>,
  groupsByOptionValue: Map<string, SectionFilterGroup>
) {
  const groupById = groupsById.get(item.id);

  if (groupById) {
    return groupById;
  }

  if (item.param && item.value) {
    const groupByOptionValue = groupsByOptionValue.get(
      `${item.param}:${item.value}`
    );

    if (groupByOptionValue) {
      return groupByOptionValue;
    }
  }

  if (item.param) {
    const group = groupsByParam.get(item.param);

    if (group) {
      return group;
    }
  }

  return null;
}

type QuickFilterItemProps = {
  group: SectionFilterGroup | null;
  isDesktop: boolean;
  item: SectionFilterItem;
  lessLabel: BaseSectionFiltersProps["filterGroupLessLabel"];
  moreLabel: NonNullable<BaseSectionFiltersProps["filterGroupMoreLabel"]>;
  size?: "xs" | "sm" | "md";
  onItemClick?: BaseSectionFiltersProps["onItemClick"];
  onItemToggle?: BaseSectionFiltersProps["onFilterGroupItemToggle"];
  onOpenGroup: (group: SectionFilterGroup) => void;
  searchPlaceholder?: BaseSectionFiltersProps["filterGroupSearchPlaceholder"];
};

function QuickFilterItem({
  group,
  isDesktop,
  item,
  lessLabel,
  moreLabel,
  size,
  onItemClick,
  onItemToggle,
  onOpenGroup,
  searchPlaceholder,
}: QuickFilterItemProps) {
  const selectedOptionCount =
    group?.items.filter((option) => option.selected).length ?? 0;
  const hasSelectedOptions = selectedOptionCount > 0;
  const hasSelectedDisclosureOptions =
    item.kind === "disclosure" && hasSelectedOptions;
  const iconRight =
    item.kind === "disclosure" ? (
      <Icon icon={ChevronDown} size="xs" />
    ) : item.kind === "removable" ? (
      <Icon icon={X} size="xs" />
    ) : null;
  const buttonClassName = cn(
    "shrink-0 whitespace-nowrap",
    item.kind === "removable" &&
      "!min-h-[36px] !px-3 !py-1.5 !text-xs sm:!text-sm",
    hasSelectedDisclosureOptions && "relative !border-blue !text-blue"
  );
  const removableLabel =
    item.kind === "removable" && group ? (
      <>
        {group.title}: {item.label}
      </>
    ) : (
      item.label
    );
  const labelWithSelectedCount = (
    <>
      <span>{item.label}</span>
      {hasSelectedDisclosureOptions ? (
        <span className="absolute -right-1 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-blue px-1 text-[10px] font-semibold leading-none text-white shadow-sm">
          {selectedOptionCount}
        </span>
      ) : null}
    </>
  );

  if (group && item.kind === "disclosure") {
    const trigger = (
      <Button
        type="filter"
        iconRight={iconRight}
        className={buttonClassName}
      >
        {labelWithSelectedCount}
      </Button>
    );

    if (isDesktop) {
      return (
        <Popover>
          <PopoverTrigger render={trigger} />
          <PopoverContent
            className={cn(
              group.type === "dropdown" &&
                "!max-h-[min(60vh,380px)] !overflow-y-auto !p-0"
            )}
          >
            <FilterGroupContent
              group={group}
              lessLabel={lessLabel}
              maxVisible={8}
              moreLabel={moreLabel}
              onItemToggle={onItemToggle}
              searchPlaceholder={searchPlaceholder}
            />
          </PopoverContent>
        </Popover>
      );
    }

    return (
      <Button
        type="filter"
        iconRight={iconRight}
        className={buttonClassName}
        onClick={() => onOpenGroup(group)}
      >
        {labelWithSelectedCount}
      </Button>
    );
  }

  return (
    <Button
      type="filter"
      size={size}
      iconRight={iconRight}
      className={buttonClassName}
      onClick={() => onItemClick?.(item)}
    >
      {removableLabel}
    </Button>
  );
}

export type SectionFiltersProps = BaseSectionFiltersProps &
  Omit<HTMLAttributes<HTMLElement>, "children">;

export function SectionFilters({
  action,
  className,
  drawerPlacement = "bottom",
  filterButtonLabel = "Filter",
  desktopDrawer,
  desktopDrawerFrom = "lg",
  drawerTitle = "Filter",
  drawerContent,
  filterGroups = [],
  filterGroupLessLabel = "Show less",
  filterGroupMoreLabel = (remaining) => `Show ${remaining} more`,
  filterGroupSearchPlaceholder,
  hideQuickFilters = false,
  selectedFiltersLabel = "Applied filters",
  items,
  onFilterGroupItemToggle,
  onItemClick,
  ...props
}: SectionFiltersProps) {
  const [presented, setPresented] = useState(false);
  const [quickFilterPresented, setQuickFilterPresented] = useState(false);
  const quickFilterPresentedRef = useRef(false);
  const [activeQuickFilterGroupId, setActiveQuickFilterGroupId] = useState<
    string | null
  >(null);
  const aboveDesktopDrawerBreakpoint = useMinBreakpoint(desktopDrawerFrom);
  const resolvedPlacement =
    desktopDrawer && aboveDesktopDrawerBreakpoint
      ? desktopDrawer
      : drawerPlacement;
  const isSideDrawer =
    resolvedPlacement === "left" || resolvedPlacement === "right";
  const sideDrawerContentClassName = cn(
    "grid h-dvh min-h-dvh max-h-none grid-rows-[min-content_1fr] overflow-hidden bg-white",
    resolvedPlacement === "left" &&
      "w-[min(92vw,420px)] max-w-[min(92vw,420px)] rounded-none",
    resolvedPlacement === "right" &&
      "w-[min(92vw,420px)] max-w-[min(92vw,420px)] rounded-none"
  );
  const groupsById = useMemo(
    () => new Map(filterGroups.map((group) => [group.id, group])),
    [filterGroups]
  );
  const groupsByParam = useMemo(() => {
    const paramCounts = new Map<string, number>();

    for (const group of filterGroups) {
      paramCounts.set(group.param, (paramCounts.get(group.param) ?? 0) + 1);
    }

    return new Map(
      filterGroups
        .filter((group) => paramCounts.get(group.param) === 1)
        .map((group) => [group.param, group])
    );
  }, [filterGroups]);
  const groupsByOptionValue = useMemo(() => {
    const groups = new Map<string, SectionFilterGroup>();

    for (const group of filterGroups) {
      for (const option of group.items) {
        const value = option.value ?? option.id;
        const key = `${group.param}:${value}`;

        if (!groups.has(key)) {
          groups.set(key, group);
        }
      }
    }

    return groups;
  }, [filterGroups]);
  const configuredQuickItems = items.filter(
    (item) => item.kind !== "removable"
  );
  const quickItems =
    configuredQuickItems.length > 0
      ? configuredQuickItems
      : filterGroups.map((group) => ({
          id: group.id,
          label: group.title,
          kind: "disclosure" as const,
          param: group.param,
        }));
  const removableItems = items.filter((item) => item.kind === "removable");
  const appliedFilterScroller =
    removableItems.length > 0 ? (
      <HorizontalScrollerRoot className="min-w-0">
        <HorizontalScrollerTrack className="-my-2 py-2">
          {removableItems.map((item) => (
            <li key={item.id} className="shrink-0 list-none">
              <QuickFilterItem
                item={item}
                group={getItemGroup(
                  item,
                  groupsById,
                  groupsByParam,
                  groupsByOptionValue
                )}
                isDesktop={aboveDesktopDrawerBreakpoint}
                lessLabel={filterGroupLessLabel}
                moreLabel={filterGroupMoreLabel}
                size="sm"
                onItemClick={onItemClick}
                onItemToggle={onFilterGroupItemToggle}
                onOpenGroup={(group) => {
                  setActiveQuickFilterGroupId(group.id);
                  setQuickFilterPresented(true);
                }}
                searchPlaceholder={filterGroupSearchPlaceholder}
              />
            </li>
          ))}
        </HorizontalScrollerTrack>
        <HorizontalScrollerPrev variant="white" />
        <HorizontalScrollerNext variant="white" />
      </HorizontalScrollerRoot>
    ) : null;
  const activeQuickFilterGroup = activeQuickFilterGroupId
    ? groupsById.get(activeQuickFilterGroupId)
    : null;
  const resolvedDrawerContent =
    drawerContent ??
    (filterGroups.length > 0 ? (
      <FilterGroupsContent
        groups={filterGroups}
        lessLabel={filterGroupLessLabel}
        moreLabel={filterGroupMoreLabel}
        onItemToggle={onFilterGroupItemToggle}
        searchPlaceholder={filterGroupSearchPlaceholder}
      />
    ) : (
      <div className="grid gap-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-xl border border-solid border-gray-200 bg-white px-4 py-3"
          >
            <Text bold black>
              {item.label}
            </Text>
          </div>
        ))}
      </div>
    ));

  useEffect(() => {
    quickFilterPresentedRef.current = quickFilterPresented;
  }, [quickFilterPresented]);

  return (
    <>
      <section className={cn(className)} {...props}>
        <div className="pt-4">
          {hideQuickFilters ? (
            <div className="flex min-w-0 items-center gap-3">
              <Button
                type="pill"
                text={filterButtonLabel}
                icon={<Icon icon={Filter} size="xs" />}
                className="!min-h-[36px] shrink-0 whitespace-nowrap !bg-white lg:hover:!border-blue lg:hover:!bg-white lg:hover:!text-blue"
                onClick={() => setPresented(true)}
              />
              {appliedFilterScroller ? (
                <div className="min-w-0 flex-1">{appliedFilterScroller}</div>
              ) : action ? (
                <div className="min-w-0 flex-1" />
              ) : null}
              {action ? <div className="shrink-0">{action}</div> : null}
            </div>
          ) : (
            <HorizontalScrollerRoot>
              <HorizontalScrollerTrack className="-my-2 py-2">
                <li className="shrink-0 list-none lg:hidden">
                  <Button
                    type="pill"
                    text={filterButtonLabel}
                    icon={<Icon icon={Filter} size="xs" />}
                    className="!min-h-[36px] shrink-0 whitespace-nowrap !bg-white lg:hover:!border-blue lg:hover:!bg-white lg:hover:!text-blue"
                    onClick={() => setPresented(true)}
                  />
                </li>
                {removableItems.map((item) => (
                  <li key={item.id} className="shrink-0 list-none lg:hidden">
                    <QuickFilterItem
                      item={item}
                      group={getItemGroup(
                        item,
                        groupsById,
                        groupsByParam,
                        groupsByOptionValue
                      )}
                      isDesktop={aboveDesktopDrawerBreakpoint}
                      lessLabel={filterGroupLessLabel}
                      moreLabel={filterGroupMoreLabel}
                      size="sm"
                      onItemClick={onItemClick}
                      onItemToggle={onFilterGroupItemToggle}
                      onOpenGroup={(group) => {
                        setActiveQuickFilterGroupId(group.id);
                        setQuickFilterPresented(true);
                      }}
                      searchPlaceholder={filterGroupSearchPlaceholder}
                    />
                  </li>
                ))}
                {quickItems.map((item) => (
                  <li key={item.id} className="hidden shrink-0 list-none lg:list-item">
                    <QuickFilterItem
                      item={item}
                      group={getItemGroup(
                        item,
                        groupsById,
                        groupsByParam,
                        groupsByOptionValue
                      )}
                      isDesktop={aboveDesktopDrawerBreakpoint}
                      lessLabel={filterGroupLessLabel}
                      moreLabel={filterGroupMoreLabel}
                      onItemClick={onItemClick}
                      onItemToggle={onFilterGroupItemToggle}
                      onOpenGroup={(group) => {
                        setActiveQuickFilterGroupId(group.id);
                        setQuickFilterPresented(true);
                      }}
                      searchPlaceholder={filterGroupSearchPlaceholder}
                    />
                  </li>
                ))}
              </HorizontalScrollerTrack>
              <HorizontalScrollerPrev variant="white" />
              <HorizontalScrollerNext variant="white" />
            </HorizontalScrollerRoot>
          )}
          {removableItems.length > 0 && !hideQuickFilters ? (
            <div className="mt-2 hidden lg:block">
              {appliedFilterScroller}
            </div>
          ) : null}
        </div>
      </section>

      <Sheet.Root presented={presented} onPresentedChange={setPresented}>
        <Sheet.Portal>
          <Sheet.View
            contentPlacement={resolvedPlacement}
            className={cn("z-[220]", isSideDrawer && "inset-0")}
          >
            <Sheet.Backdrop />
            <Sheet.CloseButton />
            <Sheet.Content
              className={cn(
                "grid grid-rows-[min-content_1fr] overflow-hidden bg-white",
                isSideDrawer && sideDrawerContentClassName
              )}
            >
              <Sheet.Header
                className={cn("pb-4", isSideDrawer ? "pt-5" : "pt-2")}
              >
                {!isSideDrawer ? <Sheet.Handle /> : null}
                <Sheet.Title
                  className={cn(
                    "text-xl font-semibold text-gray-950",
                    !isSideDrawer && "mt-3"
                  )}
                >
                  {drawerTitle}
                </Sheet.Title>
              </Sheet.Header>
              <Sheet.ScrollRoot className="h-full min-h-0">
                <Sheet.ScrollView className="h-full min-h-0">
                  <Sheet.ScrollContent className="py-3">
                    {resolvedDrawerContent}
                  </Sheet.ScrollContent>
                </Sheet.ScrollView>
              </Sheet.ScrollRoot>
            </Sheet.Content>
          </Sheet.View>
        </Sheet.Portal>
      </Sheet.Root>

      <Sheet.Root
        presented={quickFilterPresented}
        onPresentedChange={setQuickFilterPresented}
        onSafeToUnmountChange={(safeToUnmount) => {
          if (safeToUnmount && !quickFilterPresentedRef.current) {
            setActiveQuickFilterGroupId(null);
          }
        }}
      >
        <Sheet.Portal>
          <Sheet.View contentPlacement="bottom" className="z-[220]">
            <Sheet.Backdrop />
            <Sheet.CloseButton />
            <Sheet.Content className="grid max-h-[85dvh] grid-rows-[min-content_1fr] overflow-hidden bg-white">
              <Sheet.Header className="pb-4 pt-2">
                <Sheet.Handle />
                <Sheet.Title className="mt-3 text-xl font-semibold text-gray-950">
                  {activeQuickFilterGroup?.title}
                </Sheet.Title>
              </Sheet.Header>
              <Sheet.ScrollRoot className="h-full min-h-0">
                <Sheet.ScrollView className="h-full min-h-0">
                  <Sheet.ScrollContent className="pb-5 pt-1">
                    {activeQuickFilterGroup ? (
                      <FilterGroupContent
                        group={activeQuickFilterGroup}
                        lessLabel={filterGroupLessLabel}
                        maxVisible={8}
                        moreLabel={filterGroupMoreLabel}
                        onItemToggle={onFilterGroupItemToggle}
                        searchPlaceholder={filterGroupSearchPlaceholder}
                        showTitle={false}
                      />
                    ) : null}
                  </Sheet.ScrollContent>
                </Sheet.ScrollView>
              </Sheet.ScrollRoot>
            </Sheet.Content>
          </Sheet.View>
        </Sheet.Portal>
      </Sheet.Root>
    </>
  );
}
