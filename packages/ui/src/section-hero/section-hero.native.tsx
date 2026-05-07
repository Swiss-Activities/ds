"use client";

import type { ViewProps } from "react-native";
import { View } from "react-native-css/components";
import { Hero } from "../hero/hero.native";
import { Text } from "../text/index.native";
import { cn } from "../utils/cn";
import { Weather } from "../weather/weather.native";
import type {
  BaseSectionHeroProps,
  SectionHeroTag,
} from "./section-hero.types";

export type SectionHeroProps = BaseSectionHeroProps &
  Omit<ViewProps, "children">;

function SectionHeroTags({ tags }: { tags?: SectionHeroTag[] }) {
  if (!tags?.length) {
    return null;
  }

  return (
    <View className="flex flex-row flex-wrap gap-2">
      {tags.map((tag, index) => (
        <View
          key={tag.id ?? index}
          className="flex min-h-7 flex-row items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1"
        >
          {tag.icon ? (
            <View className="flex shrink-0 text-gray-500">{tag.icon}</View>
          ) : null}
          <Text as="span" size="xs" bold gray>
            {tag.label}
          </Text>
        </View>
      ))}
    </View>
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
  if (variant === "centered_title") {
    return (
      <View
        className={cn("relative h-[220px] overflow-hidden bg-blue", className)}
        {...props}
      >
        <Hero image={image} variant="localized" />
        <View className="absolute inset-0 bg-blue/45" />
        <View className="absolute inset-0 flex items-center justify-center px-4">
          {title ? (
            <Text as="h1" size="2xl" className="text-center !text-white">
              {title}
            </Text>
          ) : null}
        </View>
      </View>
    );
  }

  if (variant === "summary") {
    return (
      <View
        className={cn(
          "space-y-6 border-b border-gray-200 bg-white px-4 py-8",
          className
        )}
        {...props}
      >
        {title ? (
          <Text as="h1" size="2xl" className="max-w-3xl">
            {title}
          </Text>
        ) : null}
        {search ? <View>{search}</View> : null}
        <SectionHeroTags tags={tags} />
      </View>
    );
  }

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
