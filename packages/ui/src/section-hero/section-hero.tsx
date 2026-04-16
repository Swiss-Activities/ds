"use client";

import type { HTMLAttributes } from "react";
import { cn } from "../utils/cn";
import { Hero } from "../hero";
import { Weather } from "../weather";
import type { BaseSectionHeroProps } from "./section-hero.types";

export type SectionHeroProps = BaseSectionHeroProps &
  Omit<HTMLAttributes<HTMLDivElement>, "children" | "title">;

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
  tabs,
  selectedTabId,
  onSelectTab,
  className,
  ...props
}: SectionHeroProps) {
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
