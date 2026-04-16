"use client";

import type { ViewProps } from "react-native";
import { cn } from "../utils/cn";
import { Hero } from "../hero/hero.native";
import { Weather } from "../weather/weather.native";
import type { BaseSectionHeroProps } from "./section-hero.types";

export type SectionHeroProps = BaseSectionHeroProps &
  Omit<ViewProps, "children">;

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
    <Hero
      title={title}
      image={image}
      overlay={overlay}
      search={search}
      variant={variant}
      tabs={tabs}
      selectedTabId={selectedTabId}
      onSelectTab={onSelectTab}
      className={cn(className)}
      {...props}
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
  );
}
