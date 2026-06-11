"use client";

import type { HTMLAttributes } from "react";
import { ActivityCard } from "../activity-card";
import {
  SectionScroller,
  sectionScrollerItemClassName,
} from "../section-scroller";
import { Skeleton } from "../skeleton";
import { cn } from "../utils/cn";
import type {
  ActivityItem,
  BaseSectionActivityGridProps,
} from "./section-activity-grid.types";

export type SectionActivityGridProps = BaseSectionActivityGridProps &
  Omit<HTMLAttributes<HTMLElement>, "children" | "title">;

export function SectionActivityGrid({
  title,
  action,
  activities,
  loading = false,
  eagerCards = 0,
  skeletonAmount = 4,
  itemsPerRowLg,
  className,
  ...props
}: SectionActivityGridProps) {
  const items: ActivityItem[] = activities.length
    ? activities
    : Array.from({ length: skeletonAmount }, () => ({
        image: null,
        title: "",
        type: "activity",
        description: undefined,
        subtitle: undefined,
        category: undefined,
        dateRange: undefined,
        distance: undefined,
        meta: undefined,
        score: 0,
        reviewCount: 0,
        priceLabel: "",
        price: "",
        pending: false,
        renderImage: undefined,
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
      itemsPerRowLg={itemsPerRowLg}
      className={cn(className)}
      {...props}
    >
      {items.map((a, i) => (
        <li
          key={i}
          className={sectionScrollerItemClassName}
          data-section-activity-item
          data-section-activity-item-index={i}
        >
          <ActivityCard
            image={a.image}
            images={a.images}
            title={a.title}
            description={a.description}
            type={a.type}
            variant={a.variant}
            subtitle={a.subtitle}
            category={a.category}
            dateRange={a.dateRange}
            distance={a.distance}
            meta={a.meta}
            score={a.score}
            reviewCount={a.reviewCount}
            priceLabel={a.priceLabel}
            price={a.price}
            loading={loading}
            imagePriority={i < eagerCards}
            pending={a.pending}
            renderImage={a.renderImage}
            render={a.render}
          />
        </li>
      ))}
    </SectionScroller>
  );
}
