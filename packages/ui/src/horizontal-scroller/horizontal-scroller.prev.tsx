"use client";

import type { HTMLAttributes } from "react";
import { cn } from "../utils/cn";
import { useHorizontalScroller } from "./horizontal-scroller.context";
import type {
  BaseHorizontalScrollerNavProps,
  HorizontalScrollerVariant,
} from "./horizontal-scroller.types";

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      fill="currentColor"
      className={cn("inline-flex h-[1em] w-[1em] shrink-0", className)}
    >
      <path d="M15 239c-9.4 9.4-9.4 24.6 0 33.9L207 465c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L65.9 256 241 81c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L15 239z" />
    </svg>
  );
}

function DefaultArrowButton({
  variant = "white",
  onClick,
}: {
  variant?: HorizontalScrollerVariant;
  onClick: () => void;
}) {
  return (
    <div className="absolute start-0 top-0 flex h-full items-center">
      <button
        className={cn(
          "pointer-events-auto relative flex w-8 cursor-pointer items-center justify-center border-none",
          {
            "h-full bg-transparent from-white text-black":
              variant === "white" || variant === "white-button",
            "h-full bg-transparent from-bg text-black": variant === "bg",
            "bg-gradient-to-r":
              variant === "white" ||
              variant === "white-button" ||
              variant === "bg",
            "h-8 rounded-full bg-white/20 text-white backdrop-blur":
              variant === "black",
          }
        )}
        onClick={onClick}
      >
        {variant === "white-button" ? (
          <div className="absolute top-1/2 start-0 h-12 w-9 -translate-y-1/2 rounded-r-xl bg-white shadow-[10px_0_10px_0px_rgba(0,0,0,0.5)]" />
        ) : null}
        <ChevronLeft className="relative z-10" />
      </button>
    </div>
  );
}

export type HorizontalScrollerPrevProps = BaseHorizontalScrollerNavProps &
  Omit<HTMLAttributes<HTMLButtonElement>, "children">;

export function HorizontalScrollerPrev({
  children,
  className,
  variant,
  ...props
}: HorizontalScrollerPrevProps) {
  const { canScrollLeft, scrollPrev } = useHorizontalScroller();

  if (!canScrollLeft) return null;

  if (children) {
    return (
      <button
        className={cn("cursor-pointer", className)}
        onClick={scrollPrev}
        {...props}
      >
        {children}
      </button>
    );
  }

  return <DefaultArrowButton variant={variant} onClick={scrollPrev} />;
}
