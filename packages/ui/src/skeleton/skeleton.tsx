"use client";

import type { HTMLAttributes } from "react";
import { useEffect, useState } from "react";
import { useCompletedImageLoadDispatch } from "../use-image-load-state";
import { cn } from "../utils/cn";
import type { BaseSkeletonProps } from "./skeleton.types";
import {
  skeletonContainerStyles,
  skeletonItemStyles,
} from "./skeleton.variants";

export type SkeletonProps = BaseSkeletonProps & HTMLAttributes<HTMLSpanElement>;

export function Skeleton({
  loading,
  full = false,
  size = "sm",
  amount = 2,
  className,
  classNameItems,
  ...props
}: SkeletonProps) {
  const completedImageLoadRef =
    useCompletedImageLoadDispatch<HTMLSpanElement>(loading);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setFadeOut(!loading);
  }, [loading]);

  useEffect(() => {
    let frame: number | null = null;
    const handlePageShow = () => {
      if (frame !== null) {
        window.cancelAnimationFrame(frame);
        frame = null;
      }

      if (loading) {
        setFadeOut(false);
        return;
      }

      setFadeOut(false);
      frame = window.requestAnimationFrame(() => setFadeOut(true));
    };

    window.addEventListener("pageshow", handlePageShow);

    return () => {
      if (frame !== null) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, [loading]);

  return (
    <span
      ref={completedImageLoadRef}
      className={cn(skeletonContainerStyles({ full, fadeOut }), className)}
      {...props}
    >
      {Array.from({ length: full ? 1 : amount }).map((_, index) => (
        <span
          key={`skeleton-${index}`}
          className={cn(skeletonItemStyles({ size, full }), classNameItems)}
          style={{
            background: "linear-gradient(90deg, #fafafa, #e4e4e7, #fafafa)",
            backgroundSize: "200% 100%",
          }}
        />
      ))}
    </span>
  );
}
