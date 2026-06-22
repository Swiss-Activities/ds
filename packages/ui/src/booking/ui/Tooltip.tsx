"use client";

import * as React from "react";
import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip";
import { cn } from "../utils/css/cn";

type TooltipProviderProps = React.ComponentPropsWithoutRef<
  typeof TooltipPrimitive.Provider
>;

const TooltipProvider = TooltipPrimitive.Provider;

type TooltipProps = React.ComponentPropsWithoutRef<
  typeof TooltipPrimitive.Root
> & {
  delayDuration?: TooltipProviderProps["delay"];
};

const Tooltip = ({ delayDuration, ...props }: TooltipProps) => (
  <TooltipPrimitive.Provider delay={delayDuration}>
    <TooltipPrimitive.Root {...props} />
  </TooltipPrimitive.Provider>
);

type TooltipTriggerProps = Omit<
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger>,
  "render"
> & {
  asChild?: boolean;
};

const TooltipTrigger = ({
  asChild,
  children,
  ...props
}: TooltipTriggerProps) => {
  if (asChild && React.isValidElement(children)) {
    return <TooltipPrimitive.Trigger {...props} render={children} />;
  }

  return (
    <TooltipPrimitive.Trigger {...props}>{children}</TooltipPrimitive.Trigger>
  );
};

type TooltipPositionerProps = React.ComponentPropsWithoutRef<
  typeof TooltipPrimitive.Positioner
>;

type TooltipContentProps = Omit<
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Popup>,
  "className"
> & {
  align?: TooltipPositionerProps["align"];
  alignOffset?: TooltipPositionerProps["alignOffset"];
  className?: string;
  side?: TooltipPositionerProps["side"];
  sideOffset?: TooltipPositionerProps["sideOffset"];
};

const TooltipContent = ({
  align,
  alignOffset,
  className,
  side,
  sideOffset = 4,
  ...props
}: TooltipContentProps) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Positioner
      align={align}
      alignOffset={alignOffset}
      side={side}
      sideOffset={sideOffset}
      className="isolate z-50"
    >
      <TooltipPrimitive.Popup
        className={cn(
          "w-full max-w-[300px] overflow-hidden rounded-md bg-gray-900 p-3 text-xs text-gray-50 shadow-sm animate-in fade-in-0 zoom-in-95 data-[closed]:animate-out data-[closed]:fade-out-0 data-[closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className
        )}
        {...props}
      />
    </TooltipPrimitive.Positioner>
  </TooltipPrimitive.Portal>
);

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
