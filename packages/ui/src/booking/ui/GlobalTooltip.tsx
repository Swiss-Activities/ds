"use client";

import * as React from "react";
import { Popover as PopoverPrimitive } from "@base-ui/react/popover";
import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip";
import { cn } from "../utils/css/cn";
import { useIsMobile } from "../utils/ui/useIsMobile";

type GlobalTooltipProps = {
  children: React.ReactNode;
  content: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  sideOffset?: number;
  className?: string;
};

const tooltipContentStyles =
  "w-full max-w-[300px] overflow-hidden rounded-md bg-gray-900 p-3 text-xs text-gray-50 shadow-sm animate-in fade-in-0 zoom-in-95 data-[closed]:animate-out data-[closed]:fade-out-0 data-[closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2";

export const GlobalTooltip = ({
  children,
  content,
  side = "top",
  align = "start",
  sideOffset = 4,
  className,
}: GlobalTooltipProps) => {
  const isMobile = useIsMobile();
  const trigger = React.isValidElement(children) ? children : undefined;

  if (isMobile) {
    return (
      <PopoverPrimitive.Root>
        <PopoverPrimitive.Trigger render={trigger}>
          {trigger ? undefined : children}
        </PopoverPrimitive.Trigger>
        <PopoverPrimitive.Portal>
          <PopoverPrimitive.Positioner
            side={side}
            align={align}
            sideOffset={sideOffset}
            className="isolate z-50"
          >
            <PopoverPrimitive.Popup className={cn(tooltipContentStyles, className)}>
              {content}
            </PopoverPrimitive.Popup>
          </PopoverPrimitive.Positioner>
        </PopoverPrimitive.Portal>
      </PopoverPrimitive.Root>
    );
  }

  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger render={trigger}>
          {trigger ? undefined : children}
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Positioner
            side={side}
            align={align}
            sideOffset={sideOffset}
            className="isolate z-50"
          >
            <TooltipPrimitive.Popup
              className={cn(tooltipContentStyles, className)}
            >
              {content}
            </TooltipPrimitive.Popup>
          </TooltipPrimitive.Positioner>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};
