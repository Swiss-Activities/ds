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
  days,
  unit,
  selected,
  onSelect,
  className,
  ...props
}: SectionHeroProps) {
  return (
    <Hero title={title} image={image} className={cn(className)} {...props}>
      <Weather days={days} unit={unit} selected={selected} onSelect={onSelect} />
    </Hero>
  );
}
