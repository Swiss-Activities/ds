import type { HTMLAttributes } from "react";
import { Icon } from "../icon/icon";
import { ChevronRight } from "../icons";
import { cn } from "../utils/cn";
import type { BaseBreadcrumbsProps } from "./breadcrumbs.types";

export type BreadcrumbsProps = BaseBreadcrumbsProps &
  Omit<HTMLAttributes<HTMLElement>, "children">;

export function Breadcrumbs({
  items,
  white = false,
  ignoreLast = false,
  gradient = false,
  className,
  ...props
}: BreadcrumbsProps) {
  return (
    <nav className={cn("relative", className)} {...props}>
      {gradient && (
        <div
          className={cn(
            "pointer-events-none absolute end-0 top-0 z-10 h-full w-12 bg-gradient-to-l",
            {
              "from-white": gradient === "white",
              "from-gray-50": gradient === "gray",
            }
          )}
        />
      )}
      <div className="no-scrollbar flex max-w-full overflow-y-auto pe-10">
        {items.map((item, index) => {
          const isLast = ignoreLast && items.length === index + 1;

          return (
            <span key={item.href} className="flex items-center">
              <a
                href={item.href}
                tabIndex={isLast ? -1 : 0}
                className={cn(
                  "focus-text whitespace-nowrap text-xs font-medium lg:text-sm lg:hover:underline",
                  {
                    "pointer-events-none text-gray-500": isLast && !white,
                    "pointer-events-none text-white/70": isLast && white,
                    "text-gray-700": !isLast && !white,
                    "text-white": !isLast && white,
                  }
                )}
              >
                {item.label}
              </a>
              {items.length > index + 1 && (
                <span
                  className={cn("flex items-center px-1.5", {
                    "text-white/50": white,
                    "text-gray-500": !white,
                  })}
                >
                  <Icon icon={ChevronRight} size="xs" strokeWidth={2} />
                </span>
              )}
            </span>
          );
        })}
        <div className="h-full min-w-[70px] lg:hidden" />
      </div>
    </nav>
  );
}
