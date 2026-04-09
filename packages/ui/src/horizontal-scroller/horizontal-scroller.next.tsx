"use client";

import type { HTMLAttributes } from "react";
import { cn } from "../utils/cn";
import { useHorizontalScroller } from "./horizontal-scroller.context";
import type {
  BaseHorizontalScrollerNavProps,
  HorizontalScrollerVariant,
} from "./horizontal-scroller.types";

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      fill="currentColor"
      className={cn("inline-flex h-[1em] w-[1em] shrink-0", className)}
    >
      <path d="M305 239c9.4 9.4 9.4 24.6 0 33.9L113 465c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l175-175L79 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L305 239z" />
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
    <div className="absolute end-0 top-0 flex h-full items-center">
      <button
        className={cn(
          "pointer-events-auto relative flex w-8 cursor-pointer items-center justify-center border-none",
          {
            "h-full bg-transparent from-white text-black":
              variant === "white" || variant === "white-button",
            "h-full bg-transparent from-bg text-black": variant === "bg",
            "bg-gradient-to-l":
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
          <div className="absolute top-1/2 end-0 h-12 w-9 -translate-y-1/2 rounded-l-xl bg-white shadow-[-10px_0_10px_0px_rgba(0,0,0,0.5)]" />
        ) : null}
        <ChevronRight className="relative z-10" />
      </button>
    </div>
  );
}

export type HorizontalScrollerNextProps = BaseHorizontalScrollerNavProps &
  Omit<HTMLAttributes<HTMLButtonElement>, "children">;

export function HorizontalScrollerNext({
  children,
  className,
  variant,
  ...props
}: HorizontalScrollerNextProps) {
  const { canScrollRight, scrollNext } = useHorizontalScroller();

  if (!canScrollRight) return null;

  if (children) {
    return (
      <button
        className={cn("cursor-pointer", className)}
        onClick={scrollNext}
        {...props}
      >
        {children}
      </button>
    );
  }

  return <DefaultArrowButton variant={variant} onClick={scrollNext} />;
}
