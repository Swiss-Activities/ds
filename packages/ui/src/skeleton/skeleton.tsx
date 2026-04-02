"use client";

import type { HTMLAttributes } from "react";
import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import type { BaseSkeletonProps } from "./skeleton.types";
import {
  skeletonContainerStyles,
  skeletonItemStyles,
} from "./skeleton.variants.shared";

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
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (!loading) {
      setFadeOut(true);

      const timer = setTimeout(() => {}, 500);

      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <span
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
