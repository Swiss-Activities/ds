"use client";

import type { HTMLAttributes } from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Icon } from "../icon/icon";
import { ChevronLeft, ChevronRight } from "../icons";
import { cn } from "../utils/cn";
import { renderImageValue } from "../utils/render-image";
import type { BaseSliderProps } from "./slider.types";

export type SliderProps = BaseSliderProps &
  Omit<HTMLAttributes<HTMLDivElement>, "children">;

export function Slider({
  slides,
  renderImage,
  imageOptions,
  showNav = true,
  showNavOnHover = false,
  showCounter = true,
  showIndicators = false,
  loop = false,
  className,
  slideClassName,
  ...props
}: SliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [rawIndex, setRawIndex] = useState(loop ? 1 : 0);
  const isJumping = useRef(false);
  const total = slides.length;

  const allSlides = useMemo(
    () =>
      loop && total > 1 ? [slides[total - 1], ...slides, slides[0]] : slides,
    [slides, loop, total]
  );

  const realIndex =
    loop && total > 1 ? (rawIndex - 1 + total) % total : rawIndex;

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
        requestAnimationFrame(() => {
          isJumping.current = false;
        });
      } else if (idx === allSlides.length - 1) {
        isJumping.current = true;
        el.scrollTo({ left: el.clientWidth, behavior: "instant" });
        setRawIndex(1);
        requestAnimationFrame(() => {
          isJumping.current = false;
        });
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

  const canGoPrev = rawIndex > (loop ? 0 : 0) && realIndex > 0;
  const canGoNext = loop || rawIndex < allSlides.length - 1;
  const visibleIndicatorCount = Math.min(total, 5);
  const indicatorStart = useMemo(() => {
    if (total <= visibleIndicatorCount) return 0;

    return Math.min(Math.max(realIndex - 2, 0), total - visibleIndicatorCount);
  }, [realIndex, total, visibleIndicatorCount]);
  const indicatorStep = 12;
  const indicatorWidth =
    visibleIndicatorCount * 6 + Math.max(visibleIndicatorCount - 1, 0) * 6;

  return (
    <div
      className={cn("group relative h-full w-full overflow-hidden", className)}
      {...props}
    >
      <div
        ref={trackRef}
        className="no-scrollbar h-full w-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden [display:flex] [touch-action:pan-x_pan-y]"
      >
        {allSlides.map((slide, i) => (
          <div
            key={i}
            className={cn(
              "relative h-full min-w-full snap-start [&_img]:h-full [&_img]:w-full",
              slideClassName ?? "[&_img]:object-cover"
            )}
          >
            {renderImageValue(slide, renderImage, imageOptions)}
          </div>
        ))}
      </div>
      {showNav && total > 1 && (
        <button
          type="button"
          aria-hidden={!canGoPrev}
          aria-disabled={!canGoPrev}
          tabIndex={canGoPrev ? 0 : -1}
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            if (canGoPrev) {
              goPrev();
            }
          }}
          className={cn(
            "absolute left-3 top-1/2 z-20 hidden h-8 w-8 -translate-y-1/2 cursor-pointer appearance-none items-center justify-center rounded-full border border-solid border-transparent bg-white/90 text-gray-700 shadow-sm backdrop-blur-sm transition hover:bg-white sm:flex",
            showNavOnHover && "lg:opacity-0 lg:group-hover:opacity-100",
            !canGoPrev &&
              "cursor-default opacity-0 hover:bg-white/90 lg:!opacity-0"
          )}
        >
          <Icon icon={ChevronLeft} size="md" />
        </button>
      )}
      {showNav && total > 1 && (
        <button
          type="button"
          aria-hidden={!canGoNext}
          aria-disabled={!canGoNext}
          tabIndex={canGoNext ? 0 : -1}
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            if (canGoNext) {
              goNext();
            }
          }}
          className={cn(
            "absolute right-3 top-1/2 z-20 hidden h-8 w-8 -translate-y-1/2 cursor-pointer appearance-none items-center justify-center rounded-full border border-solid border-transparent bg-white/90 text-gray-700 shadow-sm backdrop-blur-sm transition hover:bg-white sm:flex",
            showNavOnHover && "lg:opacity-0 lg:group-hover:opacity-100",
            !canGoNext &&
              "cursor-default opacity-0 hover:bg-white/90 lg:!opacity-0"
          )}
        >
          <Icon icon={ChevronRight} size="md" />
        </button>
      )}
      {showIndicators && total > 1 && (
        <>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-10 bg-gradient-to-t from-black/35 via-black/15 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-1.5 z-20 flex justify-center">
            <div
              className="h-3 overflow-hidden"
              style={{ width: indicatorWidth }}
            >
              <div
                className="flex items-center gap-1.5 transition-transform duration-200 ease-out"
                style={{
                  transform: `translateX(-${indicatorStart * indicatorStep}px)`,
                }}
              >
                {slides.map((_, index) => {
                  const visiblePosition = index - indicatorStart;
                  const isVisibleEdge =
                    visibleIndicatorCount === 5 &&
                    visiblePosition >= 0 &&
                    visiblePosition < visibleIndicatorCount &&
                    (visiblePosition === 0 ||
                      visiblePosition === visibleIndicatorCount - 1);
                  const isActive = index === realIndex;

                  return (
                    <span
                      key={index}
                      className="flex size-1.5 shrink-0 items-center justify-center"
                    >
                      <span
                        className={cn(
                          "block rounded-full bg-white shadow-sm transition-all duration-150",
                          isActive
                            ? "size-1.5 opacity-100"
                            : isVisibleEdge
                              ? "size-1 opacity-70"
                              : "size-1.5 opacity-80"
                        )}
                      />
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
      {showCounter && total > 1 && (
        <span className="absolute bottom-3 right-3 z-20 rounded-full bg-white/90 px-2 py-0.5 text-xs font-medium text-blue shadow-sm backdrop-blur-sm">
          {realIndex + 1}/{total}
        </span>
      )}
    </div>
  );
}
