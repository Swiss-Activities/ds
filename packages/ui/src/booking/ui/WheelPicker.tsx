"use client";

import * as React from "react";
import { cn } from "../utils/css/cn";

const ITEM_HEIGHT = 40;
const VISIBLE_ITEMS = 5;

type WheelPickerItem = {
  value: string | number;
  label: string;
};

interface WheelPickerColumnProps {
  items: WheelPickerItem[];
  value: string | number;
  onChange: (value: string | number) => void;
  className?: string;
}

const WheelPickerColumn = ({
  ref,
  items,
  value,
  onChange,
  className,
}: WheelPickerColumnProps & {
  ref?: React.RefObject<HTMLDivElement>;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isScrollingRef = React.useRef(false);
  const scrollTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const selectedIndex = items.findIndex((item) => item.value === value);

  React.useEffect(() => {
    if (containerRef.current && !isScrollingRef.current) {
      const scrollTop = selectedIndex * ITEM_HEIGHT;
      containerRef.current.scrollTop = scrollTop;
    }
  }, [selectedIndex]);

  const handleScroll = React.useCallback(() => {
    if (!containerRef.current) return;

    isScrollingRef.current = true;

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      if (!containerRef.current) return;

      const scrollTop = containerRef.current.scrollTop;
      const index = Math.round(scrollTop / ITEM_HEIGHT);
      const clampedIndex = Math.max(0, Math.min(index, items.length - 1));

      containerRef.current.scrollTo({
        top: clampedIndex * ITEM_HEIGHT,
        behavior: "smooth",
      });

      if (items[clampedIndex] && items[clampedIndex].value !== value) {
        onChange(items[clampedIndex].value);
      }

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 100);
    }, 80);
  }, [items, value, onChange]);

  const paddingItems = Math.floor(VISIBLE_ITEMS / 2);

  return (
    <div ref={ref} className={cn("relative h-[200px] flex-1", className)}>
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[80px]"
        style={{
          background:
            "linear-gradient(to bottom, rgb(255 255 255) 0%, transparent 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[80px]"
        style={{
          background:
            "linear-gradient(to top, rgb(255 255 255) 0%, transparent 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 z-[5] h-[40px] -translate-y-1/2 rounded-lg"
        style={{
          background: "rgba(0,0,0,0.05)",
        }}
      />
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="no-scrollbar h-full overflow-y-auto"
        style={{
          scrollSnapType: "y mandatory",
        }}
      >
        {Array.from({ length: paddingItems }).map((_, i) => (
          <div key={`pad-top-${i}`} style={{ height: ITEM_HEIGHT }} />
        ))}
        {items.map((item, index) => {
          const isSelected = item.value === value;
          return (
            <div
              key={item.value}
              className={cn(
                "flex cursor-pointer items-center justify-center text-lg transition-all",
                isSelected ? "text-gray-900" : "text-gray-400"
              )}
              style={{
                height: ITEM_HEIGHT,
                scrollSnapAlign: "center",
              }}
              onClick={() => {
                if (containerRef.current) {
                  containerRef.current.scrollTo({
                    top: index * ITEM_HEIGHT,
                    behavior: "smooth",
                  });
                }
                onChange(item.value);
              }}
            >
              {item.label}
            </div>
          );
        })}
        {Array.from({ length: paddingItems }).map((_, i) => (
          <div key={`pad-bottom-${i}`} style={{ height: ITEM_HEIGHT }} />
        ))}
      </div>
    </div>
  );
};
WheelPickerColumn.displayName = "WheelPickerColumn";

interface WheelPickerProps {
  children: React.ReactNode;
  className?: string;
}

const WheelPicker = ({
  ref,
  children,
  className,
}: WheelPickerProps & {
  ref?: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <div ref={ref} className={cn("flex gap-2", className)}>
      {children}
    </div>
  );
};
WheelPicker.displayName = "WheelPicker";

export { WheelPicker, WheelPickerColumn, type WheelPickerItem };
