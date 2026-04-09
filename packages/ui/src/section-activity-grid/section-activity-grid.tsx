"use client";

import type { HTMLAttributes } from "react";
import { cn } from "../utils/cn";
import { ActivityCard } from "../activity-card";
import { HorizontalScrollerRoot } from "../horizontal-scroller/horizontal-scroller.root";
import { HorizontalScrollerTrack } from "../horizontal-scroller/horizontal-scroller.track";
import { HorizontalScrollerTitle } from "../horizontal-scroller/horizontal-scroller.title";
import { useHorizontalScroller } from "../horizontal-scroller/horizontal-scroller.context";
import type { BaseSectionActivityGridProps } from "./section-activity-grid.types";

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      fill="currentColor"
      className={cn("h-3 w-3", className)}
    >
      <path d="M15 239c-9.4 9.4-9.4 24.6 0 33.9L207 465c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L65.9 256 241 81c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L15 239z" />
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      fill="currentColor"
      className={cn("h-3 w-3", className)}
    >
      <path d="M305 239c9.4 9.4 9.4 24.6 0 33.9L113 465c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l175-175L79 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L305 239z" />
    </svg>
  );
}

function NavButton({ direction }: { direction: "prev" | "next" }) {
  const { canScrollLeft, canScrollRight, scrollPrev, scrollNext } =
    useHorizontalScroller();
  const disabled = direction === "prev" ? !canScrollLeft : !canScrollRight;
  const onClick = direction === "prev" ? scrollPrev : scrollNext;

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-30"
    >
      {direction === "prev" ? <ChevronLeft /> : <ChevronRight />}
    </button>
  );
}

export type SectionActivityGridProps = BaseSectionActivityGridProps &
  Omit<HTMLAttributes<HTMLElement>, "children" | "title">;

export function SectionActivityGrid({
  title,
  activities,
  className,
  ...props
}: SectionActivityGridProps) {
  return (
    <HorizontalScrollerRoot className={cn(className)} {...props}>
      <div className="mb-4 flex items-center justify-between">
        <HorizontalScrollerTitle>{title}</HorizontalScrollerTitle>
        <div className="hidden gap-2 sm:flex">
          <NavButton direction="prev" />
          <NavButton direction="next" />
        </div>
      </div>
      <HorizontalScrollerTrack bleed className="snap-x gap-4 sm:gap-6 lg:gap-7">
        {activities.map((a, i) => (
          <li
            key={i}
            className="w-[calc(66%-16px)] shrink-0 snap-start list-none sm:w-[calc(50%-13px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-21px)]"
          >
            <ActivityCard
              image={a.image}
              title={a.title}
              score={a.score}
              reviewCount={a.reviewCount}
              priceLabel={a.priceLabel}
              price={a.price}
            />
          </li>
        ))}
      </HorizontalScrollerTrack>
    </HorizontalScrollerRoot>
  );
}
