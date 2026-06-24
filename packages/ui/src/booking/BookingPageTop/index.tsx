import type { ReactNode } from "react";
import { cn } from "../utils/css/cn";

type BookingPageTopProps = {
  children?: ReactNode;
  className?: string;
};

/**
 * The shared top region for the three booking pages (basket, checkout, confirm).
 * One source of truth for the space between the site header and the page
 * content, so all three start at the same offset. The funnel pages (basket,
 * checkout) render the step breadcrumb as children; the confirmation page renders
 * it empty — just the spacing — since it has no breadcrumb of its own.
 */
export const BookingPageTop = ({ children, className }: BookingPageTopProps) => (
  <div className={cn("sa-container pt-4 lg:pt-12", className)}>{children}</div>
);
