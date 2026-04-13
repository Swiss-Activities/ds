"use client";

import type { HTMLAttributes } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "../utils/cn";
import { Text } from "../text";
import { Button } from "../button";
import { HorizontalScrollerRoot } from "../horizontal-scroller/horizontal-scroller.root";
import { HorizontalScrollerTrack } from "../horizontal-scroller/horizontal-scroller.track";
import { useHorizontalScroller } from "../horizontal-scroller/horizontal-scroller.context";
import type { BaseWeatherProps, WeatherDay, WeatherVariant } from "./weather.types";

export type WeatherProps = BaseWeatherProps &
  Omit<HTMLAttributes<HTMLDivElement>, "children">;

const MIN_ITEM_WIDTH = 60;
const BUTTON_WIDTH = 36;
const GAP = 8;

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
    low: "!text-gray-400",
    high: "!text-gray-900",
    button: "border-gray-200 bg-white text-gray-500 hover:bg-gray-50",
    buttonInvisible: "pointer-events-none invisible",
    gradient: "from-white",
  },
} as const;

function WeatherDayCard({
  day,
  unit,
  width,
  variant,
  isSelected,
  onSelect,
}: {
  day: WeatherDay;
  unit: string;
  width?: number;
  variant: WeatherVariant;
  isSelected: boolean;
  onSelect?: () => void;
}) {
  const s = styles[variant];

  const content = (
    <>
      <Text as="span" size="xs" bold className={s.label}>
        {day.label}
      </Text>
      <div className={cn("flex items-center justify-center [&_svg]:h-5 [&_svg]:w-5", s.icon)}>
        {day.icon}
      </div>
      <div className="flex items-center gap-0.5">
        <Text as="span" size="xs" className={s.low}>
          {day.low}{unit}
        </Text>
        <Text as="span" size="xs" bold className={s.high}>
          {day.high}{unit}
        </Text>
      </div>
    </>
  );

  const cardClasses = cn(
    "flex flex-col items-center gap-1 rounded-lg border border-solid px-2.5 py-2",
    isSelected ? s.cardSelected : s.card
  );

  if (onSelect) {
    return (
      <Button
        variant="ghost"
        onClick={onSelect}
        className={cardClasses}
        style={width ? { width } : undefined}
      >
        {content}
      </Button>
    );
  }

  return (
    <div className={cardClasses} style={width ? { width } : undefined}>
      {content}
    </div>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      fill="currentColor"
      className={cn("h-3.5 w-3.5", className)}
    >
      <path d="M305 239c9.4 9.4 9.4 24.6 0 33.9L113 465c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l175-175L79 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L305 239z" />
    </svg>
  );
}

function NextButton({ hasOverflow, variant }: { hasOverflow: boolean; variant: WeatherVariant }) {
  const { canScrollRight, scrollNext } = useHorizontalScroller();
  const s = styles[variant];

  if (!hasOverflow) return null;

  return (
    <button
      onClick={scrollNext}
      tabIndex={canScrollRight ? 0 : -1}
      className={cn(
        "flex shrink-0 cursor-pointer items-center justify-center self-stretch rounded-lg border border-solid px-2.5 transition",
        s.button,
        !canScrollRight && s.buttonInvisible
      )}
      style={{ width: BUTTON_WIDTH }}
    >
      <ChevronRight />
    </button>
  );
}

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      fill="currentColor"
      className={cn("h-3.5 w-3.5", className)}
    >
      <path d="M15 239c-9.4 9.4-9.4 24.6 0 33.9L207 465c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L65.9 256 241 81c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L15 239z" />
    </svg>
  );
}

function ScrollBackButton({ variant }: { variant: WeatherVariant }) {
  const { canScrollLeft, scrollPrev } = useHorizontalScroller();
  const s = styles[variant];

  return (
    <button
      onClick={scrollPrev}
      tabIndex={canScrollLeft ? 0 : -1}
      className={cn(
        "absolute inset-y-0 start-0 z-10 flex w-10 cursor-pointer items-center justify-start rounded-none bg-gradient-to-r to-transparent ps-2 transition-opacity",
        s.gradient,
        canScrollLeft ? "opacity-100" : "pointer-events-none opacity-0"
      )}
    >
      <ChevronLeft className={cn(variant === "dark" ? "text-white/80" : "text-gray-500")} />
    </button>
  );
}

export function Weather({
  days,
  unit = "°",
  variant = "dark",
  selected,
  onSelect,
  className,
  ...props
}: WeatherProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [itemWidth, setItemWidth] = useState<number | undefined>();
  const [hasOverflow, setHasOverflow] = useState(false);

  const measure = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;

    const containerWidth = el.clientWidth;
    const fitsAll = days.length <= Math.floor((containerWidth + GAP) / (MIN_ITEM_WIDTH + GAP));

    setHasOverflow(!fitsAll);

    const available = fitsAll
      ? containerWidth
      : containerWidth - BUTTON_WIDTH - GAP;
    const count = Math.max(1, Math.floor((available + GAP) / (MIN_ITEM_WIDTH + GAP)));
    const w = (available - (count - 1) * GAP) / count;
    setItemWidth(Math.max(w, MIN_ITEM_WIDTH));
  }, [days.length]);

  useEffect(() => {
    measure();
    const observer = new ResizeObserver(measure);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [measure]);

  return (
    <div ref={containerRef} className={cn(className)}>
      <HorizontalScrollerRoot className="flex gap-2" {...props}>
        <div className="relative flex-1 overflow-hidden">
          <ScrollBackButton variant={variant} />
          <HorizontalScrollerTrack className="gap-2">
            {days.map((day, i) => {
              const id = day.id ?? String(i);
              return (
                <li key={id} className="shrink-0 list-none">
                  <WeatherDayCard
                    day={day}
                    unit={unit}
                    width={itemWidth}
                    variant={variant}
                    isSelected={selected === id}
                    onSelect={onSelect ? () => onSelect(id) : undefined}
                  />
                </li>
              );
            })}
          </HorizontalScrollerTrack>
        </div>
        <NextButton hasOverflow={hasOverflow} variant={variant} />
      </HorizontalScrollerRoot>
    </div>
  );
}
