import type { HTMLAttributes } from "react";
import { cn } from "../utils/cn";
import type { BaseTabsProps } from "./tabs.types";

export type TabsProps = BaseTabsProps & Omit<HTMLAttributes<HTMLElement>, "children">;

/**
 * shadcn-styled tab navigation. Items are LINKS (each tab is its own page —
 * e.g. the legal family /agb/ · /agb/b2b/ · /agb/affiliates/ · /impressum/ ·
 * /datenschutz/), so this is an `<nav>` of anchors with the tabs look rather
 * than stateful tab panels.
 */
export function Tabs({ items, className, ...props }: TabsProps) {
  return (
    <nav
      className={cn(
        "inline-flex max-w-full items-center gap-1 overflow-x-auto rounded-lg bg-gray-100 p-1",
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          aria-current={item.active ? "page" : undefined}
          className={cn(
            "inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
            item.active
              ? "bg-white text-black shadow-sm"
              : "text-gray-600 hover:text-black"
          )}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
