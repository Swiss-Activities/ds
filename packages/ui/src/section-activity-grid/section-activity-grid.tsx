"use client";

import type { HTMLAttributes } from "react";
import { cn } from "../utils/cn";
import { ActivityCard } from "../activity-card";
import { SectionScroller, sectionScrollerItemClassName } from "../section-scroller";
import type { BaseSectionActivityGridProps } from "./section-activity-grid.types";

export type SectionActivityGridProps = BaseSectionActivityGridProps &
  Omit<HTMLAttributes<HTMLElement>, "children" | "title">;

export function SectionActivityGrid({
  title,
  action,
  activities,
  className,
  ...props
}: SectionActivityGridProps) {
  return (
    <SectionScroller title={title} action={action} className={cn(className)} {...props}>
      {activities.map((a, i) => (
        <li key={i} className={sectionScrollerItemClassName}>
          <ActivityCard
            image={a.image}
            title={a.title}
            score={a.score}
            reviewCount={a.reviewCount}
            priceLabel={a.priceLabel}
            price={a.price}
            render={a.render}
          />
        </li>
      ))}
    </SectionScroller>
  );
}
