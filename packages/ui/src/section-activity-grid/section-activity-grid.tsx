"use client";

import type { HTMLAttributes } from "react";
import { cn } from "../utils/cn";
import { ActivityCard } from "../activity-card";
import { Skeleton } from "../skeleton";
import { SectionScroller, sectionScrollerItemClassName } from "../section-scroller";
import type { BaseSectionActivityGridProps } from "./section-activity-grid.types";

export type SectionActivityGridProps = BaseSectionActivityGridProps &
  Omit<HTMLAttributes<HTMLElement>, "children" | "title">;

export function SectionActivityGrid({
  title,
  action,
  activities,
  loading = false,
  skeletonAmount = 4,
  className,
  ...props
}: SectionActivityGridProps) {
  const items = activities.length
    ? activities
    : Array.from({ length: skeletonAmount }, () => ({
        image: null,
        title: "",
        score: 0,
        reviewCount: 0,
        priceLabel: "",
        price: "",
        pending: false,
        render: undefined,
      }));

  const titleNode = loading ? (
    <Skeleton
      loading
      amount={1}
      className="w-40"
      classNameItems="h-8 rounded-md"
      aria-hidden
    />
  ) : (
    title
  );

  return (
    <SectionScroller
      title={titleNode}
      action={loading ? null : action}
      className={cn(className)}
      {...props}
    >
      {items.map((a, i) => (
        <li key={i} className={sectionScrollerItemClassName}>
          <ActivityCard
            image={a.image}
            title={a.title}
            score={a.score}
            reviewCount={a.reviewCount}
            priceLabel={a.priceLabel}
            price={a.price}
            loading={loading}
            pending={a.pending}
            render={a.render}
          />
        </li>
      ))}
    </SectionScroller>
  );
}
