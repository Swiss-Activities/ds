"use client";

import { createElement, type HTMLAttributes } from "react";
import { Hero } from "../hero";
import { Icon } from "../icon/icon";
import { ChevronLeft } from "../icons";
import { Text } from "../text";
import { cn } from "../utils/cn";
import { renderImageValue } from "../utils/render-image";
import { Weather } from "../weather";
import type {
  BaseSectionHeroProps,
  SectionHeroTag,
} from "./section-hero.types";

export type SectionHeroProps = BaseSectionHeroProps &
  Omit<HTMLAttributes<HTMLDivElement>, "children" | "title">;

function SectionHeroBackLink({
  label,
  onClick,
}: {
  label: string;
  onClick?: () => void;
}) {
  return createElement(
    "button",
    {
      className:
        "flex cursor-pointer appearance-none items-center gap-2 border-none bg-transparent p-0 text-white no-underline",
      type: "button" as const,
      onClick,
    },
    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-solid border-white bg-white/70 backdrop-blur-sm">
      <Icon icon={ChevronLeft} size="sm" className="text-blue" />
    </span>,
    <span className="text-sm font-medium text-white">{label}</span>
  );
}

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
  backLabel,
  onBack,
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
            {backLabel ? (
              <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-20 bg-gradient-to-b from-blue/50 to-transparent" />
            ) : null}
            {backLabel ? (
              <div className="absolute left-3 top-3 z-30">
                <SectionHeroBackLink label={backLabel} onClick={onBack} />
              </div>
            ) : null}
            <div className="relative z-20 grid min-h-[200px] items-center gap-6 px-4 py-8 text-center sm:min-h-[252px] sm:px-6 lg:min-h-[360px] lg:grid-cols-7 lg:px-10 lg:py-12 lg:text-left xl:px-12">
              <div className="flex min-w-0 flex-col items-center lg:col-span-5 lg:items-start">
                {title ? (
                  <Text
                    as="h1"
                    size="2xl"
                    className="max-w-4xl text-balance !text-white drop-shadow-sm"
                  >
                    {title}
                  </Text>
                ) : null}
              </div>
              {desktopWeather ? (
                <div className="hidden lg:col-span-2 lg:block">
                  {desktopWeather}
                </div>
              ) : null}
            </div>
          </div>
          {mobileWeather ? (
            <div className="px-4 pb-4 sm:px-6 sm:pb-6 lg:hidden">
              {mobileWeather}
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
            {backLabel ? (
              <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-20 bg-gradient-to-b from-blue/50 to-transparent" />
            ) : null}
          </div>
          {backLabel ? (
            <div className="absolute left-3 top-3 z-30">
              <SectionHeroBackLink label={backLabel} onClick={onBack} />
            </div>
          ) : null}
          <div className="relative z-10 flex h-full items-center justify-center px-4 text-center">
            {title || search ? (
              <div className="flex w-full max-w-3xl flex-col items-center gap-5">
                {title ? (
                  <Text
                    as="h1"
                    size="2xl"
                    className="max-w-4xl text-balance !text-white"
                  >
                    {title}
                  </Text>
                ) : null}
                {search ? (
                  <div className="w-full max-w-[640px] text-left">{search}</div>
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
    const mobileWeather = hasWeather ? (
      <Weather
        days={days ?? []}
        unit={unit}
        variant="light"
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
      />
    ) : null;

    return (
      <section className={cn("bg-white", className)} {...props}>
        <div className="grid min-w-0 gap-6 lg:grid-cols-7 lg:items-start lg:gap-8">
          <div className="flex min-w-0 flex-col lg:col-span-5">
            {title ? (
              <Text
                as="h1"
                size="2xl"
                className="w-full text-balance !text-[24px] !font-semibold !leading-tight !text-black sm:!text-[30px] lg:!text-[32px] [&_svg]:!h-5 [&_svg]:!w-5"
              >
                {title}
              </Text>
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
            {mobileWeather ? (
              <div className="mt-6 lg:hidden">{mobileWeather}</div>
            ) : null}
          </div>
          {desktopWeather ? (
            <div className="hidden lg:col-span-2 lg:block">
              {desktopWeather}
            </div>
          ) : null}
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
        backLabel={backLabel}
        onBack={onBack}
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
