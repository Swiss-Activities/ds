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

function SectionHeroTags({ tags }: { tags?: SectionHeroTag[] }) {
  if (!tags?.length) {
    return null;
  }

  return (
    <ul className="flex flex-wrap gap-2 p-0">
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
                  <Text as="h1" size="2xl" className="max-w-4xl !text-white">
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
          <div className="flex min-w-0 flex-col space-y-6 lg:col-span-5 lg:space-y-8">
            {title ? (
              <Text
                as="h1"
                size="2xl"
                className="w-full max-w-3xl !text-[28px] !font-semibold !leading-tight sm:!text-[34px] lg:!text-[36px] [&_svg]:!h-6 [&_svg]:!w-6"
              >
                {title}
              </Text>
            ) : null}
            {search ? (
              <div className="max-w-[640px] [&_[data-insights-index='search']]:max-w-none">
                {search}
              </div>
            ) : null}
            <SectionHeroTags tags={tags} />
            {mobileWeather ? (
              <div className="lg:hidden">{mobileWeather}</div>
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
