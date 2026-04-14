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
  days,
  unit,
  selected,
  onSelect,
  className,
  ...props
}: SectionHeroProps) {
  return (
    <section className={cn(className)} {...props}>
      <div className="sa-container">
        <div className="-mx-2 sm:mx-0">
          <Hero title={title} image={image}>
            <Weather days={days} unit={unit} selected={selected} onSelect={onSelect} />
          </Hero>
        </div>
      </div>
    </section>
  );
}
