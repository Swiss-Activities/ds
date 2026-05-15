"use client";

import type { HTMLAttributes } from "react";
import { Button } from "../button";
import { Card } from "../card";
import { useHorizontalScroller } from "../horizontal-scroller/horizontal-scroller.context";
import { HorizontalScrollerRoot } from "../horizontal-scroller/horizontal-scroller.root";
import { HorizontalScrollerTrack } from "../horizontal-scroller/horizontal-scroller.track";
import { Icon } from "../icon/icon";
import { ChevronLeft, ChevronRight } from "../icons";
import { Text } from "../text";
import { cn } from "../utils/cn";
import type {
  BaseWeatherProps,
  WeatherDay,
  WeatherVariant,
} from "./weather.types";

export type WeatherProps = BaseWeatherProps &
  Omit<HTMLAttributes<HTMLDivElement>, "children" | "title">;

const BUTTON_WIDTH = 36;
const WEATHER_DAY_ITEM_CLASS_NAME =
  "w-[calc((100%_-_1rem)/3)] xs:w-[calc((100%_-_1.5rem)/4)] sm:w-[calc((100%_-_3rem)/7)]";

type WeatherColorVariant = Exclude<WeatherVariant, "compact">;

const styles = {
  dark: {
    card: "border-white bg-white/5",
    cardSelected: "border-primary bg-white/10",
    label: "!text-white",
    icon: "text-white",
    low: "!text-white/60",
    high: "!text-white",
    button: "border-white bg-white/5 text-white/80 hover:bg-white/10",
    buttonInvisible: "pointer-events-none invisible",
    gradient: "from-blue",
  },
  light: {
    card: "border-gray-200 bg-white",
    cardSelected: "border-primary bg-white",
    label: "!text-gray-900",
    icon: "text-gray-700",
    low: "!text-gray-500",
    high: "!text-gray-900",
    button: "border-gray-200 bg-white text-gray-500 hover:bg-gray-50",
    buttonInvisible: "pointer-events-none invisible",
    gradient: "from-white",
  },
} as const;

function WeatherDayCard({
  day,
  unit,
  variant,
  isSelected,
  onSelect,
}: {
  day: WeatherDay;
  unit: string;
  variant: WeatherColorVariant;
  isSelected: boolean;
  onSelect?: () => void;
}) {
  const s = styles[variant];

  const content = (
    <>
      <Text as="span" size="xs" bold className={s.label}>
        {day.label}
      </Text>
      <div className="flex w-full items-center justify-between">
        <div className={cn("[&_svg]:h-6 [&_svg]:w-6", s.icon)}>{day.icon}</div>
        <div className="flex flex-col items-end">
          <Text as="span" size="xs" className={s.low}>
            {day.low}
            {unit}
          </Text>
          <Text as="span" size="xs" bold className={s.high}>
            {day.high}
            {unit}
          </Text>
        </div>
      </div>
    </>
  );

  const cardClasses = cn(
    "flex w-full flex-col items-start gap-1 rounded-lg border border-solid px-2.5 py-2",
    isSelected ? s.cardSelected : s.card
  );

  if (onSelect) {
    return (
      <Button
        variant="ghost"
        onClick={onSelect}
        className={cn(cardClasses, "cursor-pointer appearance-none text-left")}
      >
        {content}
      </Button>
    );
  }

  return <div className={cardClasses}>{content}</div>;
}

function WeatherCompactDayCard({
  day,
  isCurrent,
  unit,
}: {
  day: WeatherDay;
  isCurrent: boolean;
  unit: string;
}) {
  return (
    <div className="flex min-w-0 flex-col items-center px-0.5 py-1.5 text-center">
      <span
        className={cn(
          "mb-1 h-1.5 w-1.5 rounded-full",
          isCurrent ? "bg-primary" : "bg-transparent"
        )}
      />
      <Text as="span" size="xs2" className="max-w-full truncate !text-gray-600">
        {day.label}
      </Text>
      <div className="mt-1 flex h-6 items-center justify-center [&_svg]:!h-5 [&_svg]:!w-5">
        {day.icon}
      </div>
      <Text as="span" size="xs" bold className="mt-0.5 !text-gray-900">
        {day.high}
        {unit}
      </Text>
      <Text as="span" size="xs" className="!text-gray-500">
        {day.low}
        {unit}
      </Text>
    </div>
  );
}

function CompactWeather({
  days,
  description,
  title,
  unit,
  className,
  ...props
}: WeatherProps & { unit: string }) {
  const currentDay = days[0];

  if (!currentDay) {
    return null;
  }

  return (
    <Card className={cn("!p-4", className)} {...props}>
      <div className="flex items-center gap-3">
        <div className="flex shrink-0 items-center justify-center [&_svg]:!h-12 [&_svg]:!w-12">
          {currentDay.icon}
        </div>
        <div className="min-w-0">
          <Text as="p" size="xl" bold className="!leading-none !text-gray-900">
            {currentDay.high}
            {unit}
          </Text>
          {title || description ? (
            <div className="mt-1 flex min-w-0 items-baseline gap-1.5">
              {title ? (
                <Text
                  as="span"
                  size="sm"
                  bold
                  className="shrink-0 truncate !text-gray-900"
                >
                  {title}
                </Text>
              ) : null}
              {description ? (
                <Text
                  as="span"
                  size="sm"
                  className="min-w-0 truncate !text-gray-500"
                >
                  {description}
                </Text>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
      <div className="mt-4 pt-3">
        <div className="grid grid-cols-7 gap-1">
          {days.slice(0, 7).map((day, index) => {
            const id = day.id ?? String(index);

            return (
              <WeatherCompactDayCard
                key={id}
                day={day}
                isCurrent={index === 0}
                unit={unit}
              />
            );
          })}
        </div>
      </div>
    </Card>
  );
}

function NextButton({
  label,
  variant,
}: {
  label?: string;
  variant: WeatherColorVariant;
}) {
  const { scrollNext } = useHorizontalScroller();
  const s = styles[variant];

  return (
    <button
      type="button"
      aria-label={label}
      onClick={scrollNext}
      tabIndex={0}
      className={cn(
        "flex shrink-0 cursor-pointer items-center justify-center self-stretch rounded-lg border border-solid px-2.5 transition",
        s.button
      )}
      style={{ width: BUTTON_WIDTH }}
    >
      <Icon icon={ChevronRight} size="sm" />
    </button>
  );
}

function ScrollBackButton({
  label,
  variant,
}: {
  label?: string;
  variant: WeatherColorVariant;
}) {
  const { canScrollLeft, scrollPrev } = useHorizontalScroller();
  const s = styles[variant];

  return (
    <button
      type="button"
      aria-label={label}
      onClick={scrollPrev}
      tabIndex={canScrollLeft ? 0 : -1}
      className={cn(
        "absolute inset-y-0 start-0 z-10 flex w-10 cursor-pointer appearance-none items-center justify-start rounded-none border-0 bg-gradient-to-r to-transparent p-0 ps-2 transition-opacity",
        s.gradient,
        canScrollLeft ? "opacity-100" : "pointer-events-none opacity-0"
      )}
    >
      <Icon
        icon={ChevronLeft}
        size="sm"
        className={cn(variant === "dark" ? "text-white/80" : "text-gray-500")}
      />
    </button>
  );
}

export function Weather({
  days,
  description,
  title,
  unit = "°",
  variant = "dark",
  previousLabel,
  nextLabel,
  selected,
  onSelect,
  className,
  ...props
}: WeatherProps) {
  if (variant === "compact") {
    return (
      <CompactWeather
        days={days}
        description={description}
        title={title}
        unit={unit}
        selected={selected}
        className={className}
        {...props}
      />
    );
  }

  const showNavigation = days.length > 4;

  return (
    <div className={cn(className)}>
      <HorizontalScrollerRoot className="flex gap-2" {...props}>
        <div className="relative flex-1 overflow-hidden">
          <ScrollBackButton label={previousLabel} variant={variant} />
          <HorizontalScrollerTrack className="gap-2">
            {days.map((day, i) => {
              const id = day.id ?? String(i);
              return (
                <li
                  key={id}
                  className={cn(
                    "shrink-0 list-none",
                    WEATHER_DAY_ITEM_CLASS_NAME
                  )}
                >
                  <WeatherDayCard
                    day={day}
                    unit={unit}
                    variant={variant}
                    isSelected={selected === id}
                    onSelect={onSelect ? () => onSelect(id) : undefined}
                  />
                </li>
              );
            })}
          </HorizontalScrollerTrack>
        </div>
        {showNavigation ? (
          <NextButton label={nextLabel} variant={variant} />
        ) : null}
      </HorizontalScrollerRoot>
    </div>
  );
}
