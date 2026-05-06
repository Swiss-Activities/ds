"use client";

import type { HTMLAttributes } from "react";
import { Hero } from "../hero";
import { Text } from "../text";
import { cn } from "../utils/cn";
import { Weather } from "../weather";
import type {
  BaseSectionHeroProps,
  SectionHeroTag,
} from "./section-hero.types";

export type SectionHeroProps = BaseSectionHeroProps &
  Omit<HTMLAttributes<HTMLDivElement>, "children" | "title">;

function SectionHeroTags({ tags }: { tags?: SectionHeroTag[] }) {
  if (!tags?.length) {
    return null;
  }

  return (
    <ul className="mt-3 flex flex-wrap gap-2 p-0">
      {tags.map((tag, index) => (
        <li
          key={tag.id ?? index}
          className="m-0 flex min-h-7 list-none items-center gap-1.5 rounded-full border border-solid border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-600 [&_svg]:!h-3.5 [&_svg]:!w-3.5"
        >
          {tag.icon ? (
            <span className="flex shrink-0 text-gray-500">{tag.icon}</span>
          ) : null}
          <span>{tag.label}</span>
        </li>
      ))}
    </ul>
  );
}

export function SectionHero({
  title,
  image,
  overlay,
  search,
  variant = "localized",
  days,
  unit,
  selected,
  onSelect,
  tags,
  tabs,
  selectedTabId,
  onSelectTab,
  className,
  ...props
}: SectionHeroProps) {
  if (variant === "summary") {
    return (
      <section
        className={cn(
          "border-b border-solid border-gray-200 bg-white",
          className
        )}
        {...props}
      >
        <div className="mx-auto max-w-[1232px] px-2 py-8 sm:px-4 lg:py-10">
          <div className="max-w-4xl">
            {title ? (
              <Text
                as="h1"
                size="2xl"
                className="max-w-3xl !text-[28px] !leading-tight sm:!text-[34px] lg:!text-[36px] [&_svg]:!h-7 [&_svg]:!w-7"
              >
                {title}
              </Text>
            ) : null}
            {search ? (
              <div className="mt-6 max-w-[640px] [&_[data-insights-index='search']]:max-w-none">
                {search}
              </div>
            ) : null}
            <SectionHeroTags tags={tags} />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={cn(className)} {...props}>
      <Hero
        title={title}
        image={image}
        overlay={overlay}
        search={search}
        variant={variant}
        tabs={tabs}
        selectedTabId={selectedTabId}
        onSelectTab={onSelectTab}
      >
        {variant === "localized" && days ? (
          <Weather
            days={days}
            unit={unit}
            selected={selected}
            onSelect={onSelect}
          />
        ) : null}
      </Hero>
    </section>
  );
}
