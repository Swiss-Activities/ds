"use client";

import type { HTMLAttributes } from "react";
import { useHorizontalScroller } from "../horizontal-scroller/horizontal-scroller.context";
import { HorizontalScrollerRoot } from "../horizontal-scroller/horizontal-scroller.root";
import { HorizontalScrollerTitle } from "../horizontal-scroller/horizontal-scroller.title";
import { HorizontalScrollerTrack } from "../horizontal-scroller/horizontal-scroller.track";
import { Icon } from "../icon/icon";
import { ChevronLeft, ChevronRight } from "../icons";
import { cn } from "../utils/cn";
import type { BaseSectionScrollerProps } from "./section-scroller.types";

function NavButton({ direction }: { direction: "prev" | "next" }) {
  const { canScrollLeft, canScrollRight, scrollPrev, scrollNext } =
    useHorizontalScroller();
  const disabled = direction === "prev" ? !canScrollLeft : !canScrollRight;
  const onClick = direction === "prev" ? scrollPrev : scrollNext;

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-solid border-gray-200 bg-white text-gray-700 shadow-sm transition hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-30"
    >
      {direction === "prev" ? (
        <Icon icon={ChevronLeft} size="md" />
      ) : (
        <Icon icon={ChevronRight} size="md" />
      )}
    </button>
  );
}

export type SectionScrollerProps = BaseSectionScrollerProps &
  Omit<HTMLAttributes<HTMLElement>, "children" | "title">;

export function SectionScroller({
  title,
  subtitle,
  action,
  children,
  as: Tag = "section",
  noContainer: _noContainer,
  className,
  ...props
}: SectionScrollerProps) {
  return (
    <Tag className={cn(className)} {...props}>
      <HorizontalScrollerRoot>
        <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2">
          <div className="flex min-w-0 flex-1 flex-wrap items-center gap-x-4 gap-y-2">
            <HorizontalScrollerTitle>{title}</HorizontalScrollerTitle>
            {subtitle}
            {action ? (
              <div className="hidden shrink-0 sm:block">{action}</div>
            ) : null}
          </div>
          {action ? (
            <div className="ml-auto shrink-0 sm:hidden">{action}</div>
          ) : null}
          <div className="hidden gap-2 sm:flex">
            <NavButton direction="prev" />
            <NavButton direction="next" />
          </div>
        </div>
        <HorizontalScrollerTrack
          bleed
          className="-mx-2 -my-2 snap-x gap-4 px-2 py-2 [scroll-padding-inline:0.5rem] sm:-mx-px sm:gap-6 sm:px-px sm:[scroll-padding-inline:1px] lg:gap-7"
        >
          {children}
        </HorizontalScrollerTrack>
      </HorizontalScrollerRoot>
    </Tag>
  );
}

export const sectionScrollerItemClassName =
  "min-w-0 w-[calc(66%-16px)] max-w-[calc(66%-16px)] shrink-0 snap-start list-none sm:w-[calc(50%-13px)] sm:max-w-[calc(50%-13px)] md:w-[calc(33.333%-16px)] md:max-w-[calc(33.333%-16px)] lg:w-[calc(25%-21px)] lg:max-w-[calc(25%-21px)]";
