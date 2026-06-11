import { Skeleton } from "../skeleton";
import { cn } from "../utils/cn";

export type SkeletonOverlayProps = {
  className?: string;
  /** Corner rounding of the sheet (defaults to the card radius). */
  classNameItems?: string;
};

/**
 * One opaque skeleton sheet over a dynamic region (a grid, the weather box)
 * while its data refreshes. Render it inside a `relative` container, last —
 * it covers the stale content and is simply not rendered once fresh data is
 * in. Carries `data-skeleton-overlay` so a non-React fallback can strip every
 * overlay when the refresh fails and the underlying content should show.
 */
export function SkeletonOverlay({ className, classNameItems }: SkeletonOverlayProps) {
  return (
    <span
      aria-hidden="true"
      data-skeleton-overlay=""
      className={cn("absolute inset-0 z-30 block", className)}
    >
      <Skeleton
        full
        loading
        className="!absolute inset-0"
        classNameItems={cn("!rounded-lg", classNameItems)}
      />
    </span>
  );
}
