"use client";

import { useEffect, useState, type HTMLAttributes } from "react";
import { Button } from "../button";
import { Icon } from "../icon/icon";
import { ChevronDown, Filter, X } from "../icons";
import { Sheet } from "../sheet";
import { Text } from "../text";
import { cn } from "../utils/cn";
import type {
  BaseSectionFiltersProps,
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

function getItemIcon(item: SectionFilterItem) {
  if (item.kind === "disclosure") {
    return <Icon icon={ChevronDown} size="xs" />;
  }

  if (item.kind === "removable") {
    return <Icon icon={X} size="xs" />;
  }

  return null;
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
  items,
  ...props
}: SectionFiltersProps) {
  const [presented, setPresented] = useState(false);
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

  return (
    <>
      <section className={cn(className)} {...props}>
        <div className="sa-container">
          <div className="no-scrollbar overflow-x-auto py-2 [scrollbar-width:none]">
            <div className="flex min-w-max items-center gap-2">
              <Button
                type="filter"
                text={filterButtonLabel}
                icon={<Icon icon={Filter} size="xs" />}
                className="shrink-0 whitespace-nowrap"
                onClick={() => setPresented(true)}
              />
              {items.map((item) => (
                <Button
                  key={item.id}
                  type="filter"
                  text={item.label}
                  iconRight={getItemIcon(item)}
                  className="shrink-0 whitespace-nowrap"
                />
              ))}
            </div>
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
              <div
                className={cn(
                  "px-4 pb-4",
                  isSideDrawer ? "pt-5" : "pt-2"
                )}
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
              </div>
              <Sheet.ScrollRoot className="min-h-0 h-full">
                <Sheet.ScrollView className="min-h-0 h-full">
                  <Sheet.ScrollContent className="px-4 py-3">
                    {drawerContent ?? (
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
                    )}
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
