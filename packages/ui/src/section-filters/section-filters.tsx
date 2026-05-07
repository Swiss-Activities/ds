"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type HTMLAttributes,
} from "react";
import { Button } from "../button";
import { FilterCheckboxGroup } from "../filter-checkbox-group";
import { Icon } from "../icon/icon";
import { ChevronDown, Filter, X } from "../icons";
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

type FilterGroupContentProps = {
  group: SectionFilterGroup;
  inlineFrom?: SectionFiltersBreakpoint;
  lessLabel: BaseSectionFiltersProps["filterGroupLessLabel"];
  maxVisible?: number;
  moreLabel: NonNullable<BaseSectionFiltersProps["filterGroupMoreLabel"]>;
  onItemToggle?: BaseSectionFiltersProps["onFilterGroupItemToggle"];
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
  showTitle = true,
  type = "inline",
}: FilterGroupContentProps) {
  return (
    <FilterCheckboxGroup
      title={showTitle ? group.title : undefined}
      items={group.items}
      type={type}
      inlineFrom={inlineFrom}
      maxVisible={maxVisible}
      lessLabel={lessLabel}
      moreLabel={moreLabel}
      onItemToggle={(id, nextValue) =>
        onItemToggle?.(group, id, nextValue)
      }
    />
  );
}

type FilterGroupsContentProps = {
  groups: SectionFilterGroup[];
  lessLabel: BaseSectionFiltersProps["filterGroupLessLabel"];
  moreLabel: NonNullable<BaseSectionFiltersProps["filterGroupMoreLabel"]>;
  onItemToggle?: BaseSectionFiltersProps["onFilterGroupItemToggle"];
};

function FilterGroupsContent({
  groups,
  lessLabel,
  moreLabel,
  onItemToggle,
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
        />
      ))}
    </div>
  );
}

function getItemGroup(
  item: SectionFilterItem,
  groupsById: Map<string, SectionFilterGroup>,
  groupsByParam: Map<string, SectionFilterGroup>
) {
  const groupById = groupsById.get(item.id);

  if (groupById) {
    return groupById;
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
  onItemClick?: BaseSectionFiltersProps["onItemClick"];
  onItemToggle?: BaseSectionFiltersProps["onFilterGroupItemToggle"];
  onOpenGroup: (group: SectionFilterGroup) => void;
};

function QuickFilterItem({
  group,
  isDesktop,
  item,
  lessLabel,
  moreLabel,
  onItemClick,
  onItemToggle,
  onOpenGroup,
}: QuickFilterItemProps) {
  const hasSelectedOptions = group?.items.some((option) => option.selected);
  const iconRight =
    item.kind === "disclosure" ? (
      <Icon icon={ChevronDown} size="xs" />
    ) : item.kind === "removable" ? (
      <Icon icon={X} size="xs" />
    ) : null;
  const buttonClassName = cn(
    "shrink-0 whitespace-nowrap",
    hasSelectedOptions && "!border-blue !text-blue"
  );

  if (group && item.kind === "disclosure") {
    const trigger = (
      <Button
        type="filter"
        text={item.label}
        iconRight={iconRight}
        className={buttonClassName}
      />
    );

    if (isDesktop) {
      return (
        <Popover>
          <PopoverTrigger render={trigger} />
          <PopoverContent>
            <FilterGroupContent
              group={group}
              lessLabel={lessLabel}
              maxVisible={8}
              moreLabel={moreLabel}
              onItemToggle={onItemToggle}
            />
          </PopoverContent>
        </Popover>
      );
    }

    return (
      <Button
        type="filter"
        text={item.label}
        iconRight={iconRight}
        className={buttonClassName}
        onClick={() => onOpenGroup(group)}
      />
    );
  }

  return (
    <Button
      type="filter"
      text={item.label}
      iconRight={iconRight}
      className={buttonClassName}
      onClick={() => onItemClick?.(item)}
    />
  );
}

export type SectionFiltersProps = BaseSectionFiltersProps &
  Omit<HTMLAttributes<HTMLElement>, "children">;

export function SectionFilters({
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
  const configuredQuickItems = items.filter((item) => item.kind !== "removable");
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
  const activeQuickFilterGroup =
    activeQuickFilterGroupId ? groupsById.get(activeQuickFilterGroupId) : null;
  const resolvedDrawerContent =
    drawerContent ??
    (filterGroups.length > 0 ? (
      <FilterGroupsContent
        groups={filterGroups}
        lessLabel={filterGroupLessLabel}
        moreLabel={filterGroupMoreLabel}
        onItemToggle={onFilterGroupItemToggle}
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
        <div className="no-scrollbar overflow-x-auto py-4 [scrollbar-width:none]">
          <div className="flex min-w-max items-center gap-2">
            <Button
              type="pill"
              text={filterButtonLabel}
              icon={<Icon icon={Filter} size="xs" />}
              className="!min-h-[36px] shrink-0 whitespace-nowrap !bg-white lg:hover:!border-blue lg:hover:!bg-white lg:hover:!text-blue"
              onClick={() => setPresented(true)}
            />
            {[...quickItems, ...removableItems].map((item) => (
              <QuickFilterItem
                key={item.id}
                item={item}
                group={getItemGroup(item, groupsById, groupsByParam)}
                isDesktop={aboveDesktopDrawerBreakpoint}
                lessLabel={filterGroupLessLabel}
                moreLabel={filterGroupMoreLabel}
                onItemClick={onItemClick}
                onItemToggle={onFilterGroupItemToggle}
                onOpenGroup={(group) => {
                  setActiveQuickFilterGroupId(group.id);
                  setQuickFilterPresented(true);
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <Sheet.Root presented={presented} onPresentedChange={setPresented}>
        <Sheet.Portal>
          <Sheet.View
            contentPlacement={resolvedPlacement}
            className={cn(isSideDrawer && "inset-0")}
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
          <Sheet.View contentPlacement="bottom">
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
