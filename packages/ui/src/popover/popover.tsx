"use client";

import * as React from "react";
import { Popover as PopoverPrimitive } from "@base-ui/react/popover";
import { cn } from "../utils/cn";

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverPortal = PopoverPrimitive.Portal;

type PopoverPositionerProps = React.ComponentPropsWithoutRef<
  typeof PopoverPrimitive.Positioner
>;

export const PopoverPositioner = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Positioner>,
  PopoverPositionerProps
>(({ className, ...props }, ref) => (
  <PopoverPrimitive.Positioner
    ref={ref}
    className={cn("isolate z-[210]", className)}
    {...props}
  />
));
PopoverPositioner.displayName = "PopoverPositioner";

type PopoverContentProps = React.ComponentPropsWithoutRef<
  typeof PopoverPrimitive.Popup
> & {
  align?: PopoverPositionerProps["align"];
  alignOffset?: PopoverPositionerProps["alignOffset"];
  collisionPadding?: PopoverPositionerProps["collisionPadding"];
  side?: PopoverPositionerProps["side"];
  sideOffset?: PopoverPositionerProps["sideOffset"];
  positionerClassName?: string;
};

export const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Popup>,
  PopoverContentProps
>(
  (
    {
      align = "start",
      alignOffset = 0,
      className,
      collisionPadding = 16,
      positionerClassName,
      side = "bottom",
      sideOffset = 8,
      ...props
    },
    ref
  ) => (
    <PopoverPortal>
      <PopoverPositioner
        align={align}
        alignOffset={alignOffset}
        collisionPadding={collisionPadding}
        side={side}
        sideOffset={sideOffset}
        className={positionerClassName}
      >
        <PopoverPrimitive.Popup
          ref={ref}
          data-slot="popover-content"
          className={cn(
            "w-[min(360px,calc(100vw-32px))] rounded-lg border border-solid border-gray-200 bg-white p-4 shadow-lg outline-none",
            className
          )}
          {...props}
        />
      </PopoverPositioner>
    </PopoverPortal>
  )
);
PopoverContent.displayName = "PopoverContent";

export function PopoverHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="popover-header"
      className={cn("flex flex-col gap-1 text-sm", className)}
      {...props}
    />
  );
}

export const PopoverTitle = PopoverPrimitive.Title;
export const PopoverDescription = PopoverPrimitive.Description;
export const PopoverClose = PopoverPrimitive.Close;
