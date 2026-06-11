"use client";

import type { HTMLAttributes } from "react";
import { Hero } from "../hero";
import { Text } from "../text";
import { cn } from "../utils/cn";
import { renderImageValue } from "../utils/render-image";
import { SkeletonOverlay } from "../skeleton-overlay";
import { Weather } from "../weather";
import type {
  BaseSectionHeroProps,
  SectionHeroTag,
} from "./section-hero.types";

export type SectionHeroProps = BaseSectionHeroProps &
  Omit<HTMLAttributes<HTMLDivElement>, "children" | "title">;

function SectionHeroTags({
  className,
  tags,
}: {
  className?: string;
  tags?: SectionHeroTag[];
}) {
  if (!tags?.length) {
    return null;
  }

  return (
    <ul className={cn("flex flex-wrap gap-2 p-0", className)}>
      {tags.map((tag, index) => (
        <li
          key={tag.id ?? index}
          className="m-0 flex min-h-7 list-none items-center gap-1.5 rounded-full border border-dashed border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-600 [&_svg]:!h-3.5 [&_svg]:!w-3.5"
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

/** Invisible stand-in so the weather slot always reserves its space —
 * feeds without forecast days produce no layout shift. */
const DUMMY_WEATHER_DAYS = Array.from({ length: 5 }, (_, index) => ({
  id: `dummy-${index}`,
  label: "–",
  icon: null,
  low: 0,
  high: 0,
}));

export function SectionHero({
  title,
  image,
  overlay,
  search,
  variant = "localized",
  days,
  unit,
  weatherDescription,
  weatherTitle,
  weatherPreviousLabel,
  weatherNextLabel,
  selected,
  onSelect,
  tags,
  tabs,
  selectedTabId,
  onSelectTab,
  refreshing = false,
  className,
  ...props
}: SectionHeroProps) {
  if (variant === "image_summary") {
    const hasWeather = Boolean(days?.length);
    const mobileWeather = hasWeather ? (
      <Weather
        days={days ?? []}
        unit={unit}
        variant="dark"
        sizing="fixed"
        previousLabel={weatherPreviousLabel}
        nextLabel={weatherNextLabel}
        selected={selected}
        onSelect={onSelect}
      />
    ) : null;
    const desktopWeather = hasWeather ? (
      <Weather
        days={days ?? []}
        description={weatherDescription}
        title={weatherTitle}
        unit={unit}
        variant="compact"
        selected={selected}
        onSelect={onSelect}
      />
    ) : null;

    return (
      <section className={cn(className)} {...props}>
        <div className="relative overflow-hidden bg-blue lg:rounded-lg">
          <div className="relative min-h-[200px] overflow-hidden sm:min-h-[252px] lg:min-h-[360px]">
            <div className="absolute inset-0 [&_img]:absolute [&_img]:inset-0 [&_img]:h-full [&_img]:w-full [&_img]:object-cover">
              {renderImageValue(image)}
            </div>
            <div className="absolute inset-0 bg-blue/35" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-2/3 bg-gradient-to-t from-blue/85 to-transparent" />
            <div className="relative z-20 grid min-h-[200px] items-center gap-6 px-4 py-8 text-center sm:min-h-[252px] sm:px-6 lg:min-h-[360px] lg:grid-cols-8 lg:gap-8 lg:px-10 lg:py-12 lg:text-left xl:px-12">
              <div className="flex min-w-0 flex-col items-center lg:col-span-5 lg:items-start">
                {title ? (
                  <Text
                    as="h1"
                    size="2xl"
                    className="max-w-4xl text-balance font-semibold !text-white drop-shadow-sm"
                  >
                    {title}
                  </Text>
                ) : null}
              </div>
              {desktopWeather ? (
                <div className="relative hidden lg:col-span-3 lg:block">
                  {desktopWeather}
                  {refreshing ? <SkeletonOverlay /> : null}
                </div>
              ) : null}
            </div>
          </div>
          {mobileWeather ? (
            <div className="px-4 pb-4 sm:px-6 sm:pb-6 lg:hidden">
              <div className="relative">
                {mobileWeather}
                {refreshing ? <SkeletonOverlay /> : null}
              </div>
            </div>
          ) : null}
        </div>
      </section>
    );
  }

  if (variant === "centered_title") {
    return (
      <section className={cn(className)} {...props}>
        <div className="relative h-[196px] bg-blue sm:h-[228px] lg:h-[264px] lg:rounded-lg">
          <div className="absolute inset-0 overflow-hidden lg:rounded-lg">
            <div className="absolute inset-0 [&_img]:absolute [&_img]:inset-0 [&_img]:h-full [&_img]:w-full [&_img]:object-cover">
              {renderImageValue(image)}
            </div>
            <div className="absolute inset-0 bg-blue/45" />
          </div>
          <div className="relative z-10 flex h-full items-center justify-center px-4 text-center">
            {title || search ? (
              <div className="flex w-full max-w-3xl flex-col items-center gap-5">
                {title ? (
                  <Text
                    as="h1"
                    size="2xl"
                    className="max-w-4xl text-balance font-semibold !text-white"
                  >
                    {title}
                  </Text>
                ) : null}
                {search ? (
                  <div className="w-full max-w-[640px] text-left [&_[data-insights-index='search']]:mx-auto">
                    {search}
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </section>
    );
  }

  if (variant === "summary") {
    const hasWeather = Boolean(days?.length);
    const weatherDays = hasWeather ? (days ?? []) : DUMMY_WEATHER_DAYS;
    const mobileWeather = (
      <Weather
        days={weatherDays}
        unit={unit}
        variant="light"
        sizing="fixed"
        previousLabel={weatherPreviousLabel}
        nextLabel={weatherNextLabel}
        selected={selected}
        onSelect={onSelect}
      />
    );
    const desktopWeather = (
      <Weather
        days={weatherDays}
        description={weatherDescription}
        title={weatherTitle}
        unit={unit}
        variant="compact"
        selected={selected}
        onSelect={onSelect}
      />
    );

    return (
      <section className={cn("bg-white", className)} {...props}>
        <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:items-start lg:gap-8">
          <div className="flex min-w-0 flex-col">
            {title ? (
              // The greeting is personalized (geo/weather/daypart) — cover it
              // while the live data refreshes.
              <span className={refreshing ? "relative block" : "contents"}>
                <Text
                  as="h1"
                  size="2xl"
                  className="w-full text-balance !text-[24px] font-semibold !leading-tight !text-black sm:!text-[30px] lg:!text-[32px] [&_svg]:!h-5 [&_svg]:!w-5"
                >
                  {title}
                </Text>
                {refreshing ? <SkeletonOverlay /> : null}
              </span>
            ) : null}
            {search ? (
              <div
                className={cn(
                  "max-w-[640px] [&_[data-insights-index='search']]:max-w-none",
                  title && "mt-6 lg:mt-8"
                )}
              >
                {search}
              </div>
            ) : null}
            <SectionHeroTags
              tags={tags}
              className={cn(search ? "mt-4" : title && "mt-6")}
            />
            <div className="relative mt-6 lg:hidden">
              <div className={hasWeather ? undefined : "invisible"} aria-hidden={!hasWeather}>
                {mobileWeather}
              </div>
              {refreshing ? <SkeletonOverlay /> : null}
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className={hasWeather ? undefined : "invisible"} aria-hidden={!hasWeather}>
              {desktopWeather}
            </div>
            {refreshing ? <SkeletonOverlay /> : null}
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
            sizing="fixed"
            selected={selected}
            onSelect={onSelect}
          />
        ) : null}
      </Hero>
    </section>
  );
}
