"use client";

import * as React from "react";
import { Popover as PopoverPrimitive } from "@base-ui/react/popover";
import { cn } from "../utils/css/cn";

export const Popover = PopoverPrimitive.Root;

type PopoverTriggerProps = Omit<
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger>,
  "render"
> & {
  asChild?: boolean;
};

export const PopoverTrigger = ({
  asChild,
  children,
  ...props
}: PopoverTriggerProps) => {
  if (asChild && React.isValidElement(children)) {
    return <PopoverPrimitive.Trigger {...props} render={children} />;
  }

  return (
    <PopoverPrimitive.Trigger {...props}>{children}</PopoverPrimitive.Trigger>
  );
};

type PopoverPositionerProps = React.ComponentPropsWithoutRef<
  typeof PopoverPrimitive.Positioner
>;

type PopoverContentProps = Omit<
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Popup>,
  "className"
> & {
  align?: PopoverPositionerProps["align"];
  alignOffset?: PopoverPositionerProps["alignOffset"];
  className?: string;
  side?: PopoverPositionerProps["side"];
  sideOffset?: PopoverPositionerProps["sideOffset"];
};

export const PopoverContent = ({
  align = "center",
  alignOffset,
  className,
  side,
  sideOffset = 4,
  ...props
}: PopoverContentProps) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Positioner
      align={align}
      alignOffset={alignOffset}
      side={side}
      sideOffset={sideOffset}
      className="isolate z-[230]"
    >
      <PopoverPrimitive.Popup
        className={cn(
          "w-72 rounded-md border border-solid border-gray-200 bg-white p-4 text-gray-950 shadow-md outline-none data-[open]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[open]:fade-in-0 data-[closed]:zoom-out-95 data-[open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Positioner>
  </PopoverPrimitive.Portal>
);
