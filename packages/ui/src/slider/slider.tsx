"use client";

import type { HTMLAttributes } from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { cn } from "../utils/cn";
import { Icon } from "../icon/icon";
import { ChevronLeft, ChevronRight } from "../icons";
import type { BaseSliderProps } from "./slider.types";

export type SliderProps = BaseSliderProps &
  Omit<HTMLAttributes<HTMLDivElement>, "children">;

export function Slider({
  slides,
  showNav = true,
  showCounter = true,
  loop = false,
  className,
  ...props
}: SliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [rawIndex, setRawIndex] = useState(loop ? 1 : 0);
  const isJumping = useRef(false);
  const total = slides.length;

  const allSlides = useMemo(
    () =>
      loop && total > 1
        ? [slides[total - 1], ...slides, slides[0]]
        : slides,
    [slides, loop, total]
  );

  const realIndex = loop && total > 1
    ? ((rawIndex - 1 + total) % total)
    : rawIndex;

  useEffect(() => {
    if (!loop || total <= 1) return;
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: el.clientWidth, behavior: "instant" });
  }, [loop, total]);

  const updateIndex = useCallback(() => {
    if (isJumping.current) return;
    const el = trackRef.current;
    if (!el || el.clientWidth === 0) return;
    setRawIndex(Math.round(el.scrollLeft / el.clientWidth));
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onScrollEnd = () => {
      if (!loop || total <= 1 || isJumping.current) return;
      const idx = Math.round(el.scrollLeft / el.clientWidth);

      if (idx === 0) {
        isJumping.current = true;
        el.scrollTo({ left: total * el.clientWidth, behavior: "instant" });
        setRawIndex(total);
        requestAnimationFrame(() => { isJumping.current = false; });
      } else if (idx === allSlides.length - 1) {
        isJumping.current = true;
        el.scrollTo({ left: el.clientWidth, behavior: "instant" });
        setRawIndex(1);
        requestAnimationFrame(() => { isJumping.current = false; });
      }
    };

    el.addEventListener("scroll", updateIndex, { passive: true });
    el.addEventListener("scrollend", onScrollEnd, { passive: true });
    return () => {
      el.removeEventListener("scroll", updateIndex);
      el.removeEventListener("scrollend", onScrollEnd);
    };
  }, [updateIndex, loop, total, allSlides.length]);

  const goTo = useCallback((i: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
  }, []);

  const goPrev = useCallback(() => {
    if (rawIndex > 0) goTo(rawIndex - 1);
  }, [rawIndex, goTo]);

  const goNext = useCallback(() => {
    if (rawIndex < allSlides.length - 1) goTo(rawIndex + 1);
  }, [rawIndex, allSlides.length, goTo]);

  const showPrev = rawIndex > (loop ? 0 : 0) && realIndex > 0;
  const showNext = loop || rawIndex < allSlides.length - 1;

  return (
    <div
      className={cn("group relative h-full w-full overflow-hidden", className)}
      {...props}
    >
      <div
        ref={trackRef}
        className="no-scrollbar h-full w-full snap-x snap-mandatory overflow-x-auto [display:flex]"
      >
        {allSlides.map((slide, i) => (
          <div
            key={i}
            className="relative h-full min-w-full snap-start [&_img]:h-full [&_img]:w-full [&_img]:object-cover"
          >
            {slide}
          </div>
        ))}
      </div>
      {showNav && showPrev && (
        <button
          type="button"
          onClick={goPrev}
          className="absolute left-3 top-1/2 z-20 hidden h-8 w-8 -translate-y-1/2 cursor-pointer appearance-none items-center justify-center rounded-full border border-solid border-transparent bg-white/90 text-gray-700 shadow-sm backdrop-blur-sm transition hover:bg-white sm:flex"
        >
          <Icon icon={ChevronLeft} size="md" />
        </button>
      )}
      {showNav && showNext && (
        <button
          type="button"
          onClick={goNext}
          className="absolute right-3 top-1/2 z-20 hidden h-8 w-8 -translate-y-1/2 cursor-pointer appearance-none items-center justify-center rounded-full border border-solid border-transparent bg-white/90 text-gray-700 shadow-sm backdrop-blur-sm transition hover:bg-white sm:flex"
        >
          <Icon icon={ChevronRight} size="md" />
        </button>
      )}
      {showCounter && total > 1 && (
        <span className="absolute bottom-3 right-3 z-20 rounded-full bg-white/90 px-2 py-0.5 text-xs font-medium text-blue shadow-sm backdrop-blur-sm">
          {realIndex + 1}/{total}
        </span>
      )}
    </div>
  );
}
