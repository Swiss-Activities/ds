"use client";

import type { HTMLAttributes } from "react";
import { Icon } from "../icon/icon";
import { cn } from "../utils/cn";
import { ChevronLeft } from "../icons";
import { useHorizontalScroller } from "./horizontal-scroller.context";
import type {
  BaseHorizontalScrollerNavProps,
  HorizontalScrollerVariant,
} from "./horizontal-scroller.types";

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
        <Icon icon={ChevronLeft} size="md" className="relative z-10" />
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
