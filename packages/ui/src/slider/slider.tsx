"use client";

import type { HTMLAttributes } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "../utils/cn";
import type { BaseSliderProps } from "./slider.types";

export type SliderProps = BaseSliderProps &
  Omit<HTMLAttributes<HTMLDivElement>, "children">;

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      fill="currentColor"
      className={cn("h-3 w-3", className)}
    >
      <path d="M15 239c-9.4 9.4-9.4 24.6 0 33.9L207 465c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L65.9 256 241 81c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L15 239z" />
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      fill="currentColor"
      className={cn("h-3 w-3", className)}
    >
      <path d="M305 239c9.4 9.4 9.4 24.6 0 33.9L113 465c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l175-175L79 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L305 239z" />
    </svg>
  );
}

export function Slider({
  slides,
  showNav = true,
  showCounter = true,
  loop = false,
  className,
  ...props
}: SliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const total = slides.length;

  const updateIndex = useCallback(() => {
    const el = trackRef.current;
    if (!el || el.clientWidth === 0) return;
    setIndex(Math.round(el.scrollLeft / el.clientWidth));
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scrollend", updateIndex, { passive: true });
    el.addEventListener("scroll", updateIndex, { passive: true });
    return () => {
      el.removeEventListener("scrollend", updateIndex);
      el.removeEventListener("scroll", updateIndex);
    };
  }, [updateIndex]);

  const goTo = useCallback((i: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
  }, []);

  const goPrev = useCallback(() => {
    if (index > 0) {
      goTo(index - 1);
    } else if (loop) {
      goTo(total - 1);
    }
  }, [index, loop, total, goTo]);

  const goNext = useCallback(() => {
    if (index < total - 1) {
      goTo(index + 1);
    } else if (loop) {
      goTo(0);
    }
  }, [index, loop, total, goTo]);

  const showPrev = loop || index > 0;
  const showNext = loop || index < total - 1;

  return (
    <div className={cn("group relative", className)} {...props}>
      <div
        ref={trackRef}
        className="no-scrollbar h-full snap-x snap-mandatory overflow-x-auto [display:flex]"
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="relative h-full min-w-full snap-start"
          >
            {slide}
          </div>
        ))}
      </div>
      {showNav && showPrev && (
        <button
          onClick={goPrev}
          className="absolute bottom-1/2 left-3 z-20 hidden h-8 w-8 translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-sm backdrop-blur-sm transition hover:bg-white sm:flex"
        >
          <ChevronLeft />
        </button>
      )}
      {showNav && showNext && (
        <button
          onClick={goNext}
          className="absolute bottom-1/2 right-3 z-20 hidden h-8 w-8 translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-sm backdrop-blur-sm transition hover:bg-white sm:flex"
        >
          <ChevronRight />
        </button>
      )}
      {showCounter && total > 1 && (
        <span className="absolute bottom-3 right-3 z-20 rounded-full bg-white/90 px-2 py-0.5 text-xs font-medium text-blue shadow-sm backdrop-blur-sm">
          {index + 1}/{total}
        </span>
      )}
    </div>
  );
}
