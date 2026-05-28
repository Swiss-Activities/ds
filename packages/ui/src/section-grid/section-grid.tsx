"use client";

import type { HTMLAttributes } from "react";
import { ActivityCard } from "../activity-card";
import type { ActivityItem } from "../section-activity-grid/section-activity-grid.types";
import { Skeleton } from "../skeleton";
import { Text } from "../text";
import { cn } from "../utils/cn";
import type { BaseSectionGridProps } from "./section-grid.types";

export type SectionGridProps = BaseSectionGridProps &
  Omit<HTMLAttributes<HTMLElement>, "children" | "title">;

const columnClasses: Record<
  NonNullable<SectionGridProps["itemsPerRowLg"]>,
  string
> = {
  1: "lg:grid-cols-1",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  auto: "lg:grid-cols-[repeat(auto-fit,minmax(280px,1fr))]",
};

export function SectionGrid({
  title,
  action,
  activities,
  loading = false,
  skeletonAmount = 8,
  itemsPerRowLg = 4,
  className,
  ...props
}: SectionGridProps) {
  const items: ActivityItem[] = activities.length
    ? activities
    : Array.from({ length: skeletonAmount }, () => ({
        image: null,
        title: "",
        type: "activity",
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
  const shouldRenderHeader = Boolean(titleNode || (!loading && action));

  return (
    <section className={cn(className)} {...props}>
      {shouldRenderHeader ? (
        <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2">
          {titleNode ? (
            <Text as="h2" size="lg" className="min-w-0 flex-1">
              {titleNode}
            </Text>
          ) : null}
          {loading ? null : action}
        </div>
      ) : null}
      <ul
        className={cn(
          "grid list-none gap-4 p-0 sm:grid-cols-2 md:grid-cols-3 lg:gap-7",
          columnClasses[itemsPerRowLg]
        )}
      >
        {items.map((a, i) => (
          <li
            key={i}
            className="min-w-0 list-none"
            data-section-activity-item
            data-section-activity-item-index={i}
          >
            <ActivityCard
              image={a.image}
              title={a.title}
              type={a.type}
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
              pending={a.pending}
              renderImage={a.renderImage}
              render={a.render}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
