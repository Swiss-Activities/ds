"use client";

import * as React from "react";
import { Popover as BasePopover } from "@base-ui/react/popover";
import { cn } from "../utils/cn";

export const Popover = BasePopover.Root;
export const PopoverTrigger = BasePopover.Trigger;
export const PopoverPortal = BasePopover.Portal;

type PopoverPositionerProps = React.ComponentPropsWithoutRef<
  typeof BasePopover.Positioner
>;

export const PopoverPositioner = React.forwardRef<
  React.ElementRef<typeof BasePopover.Positioner>,
  PopoverPositionerProps
>(({ className, ...props }, ref) => (
  <BasePopover.Positioner
    ref={ref}
    className={cn("z-[210]", className)}
    {...props}
  />
));
PopoverPositioner.displayName = "PopoverPositioner";

type PopoverContentProps = React.ComponentPropsWithoutRef<
  typeof BasePopover.Popup
> & {
  align?: PopoverPositionerProps["align"];
  collisionPadding?: PopoverPositionerProps["collisionPadding"];
  side?: PopoverPositionerProps["side"];
  sideOffset?: PopoverPositionerProps["sideOffset"];
  positionerClassName?: string;
};

export const PopoverContent = React.forwardRef<
  React.ElementRef<typeof BasePopover.Popup>,
  PopoverContentProps
>(
  (
    {
      align = "start",
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
        collisionPadding={collisionPadding}
        side={side}
        sideOffset={sideOffset}
        className={positionerClassName}
      >
        <BasePopover.Popup
          ref={ref}
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

export const PopoverTitle = BasePopover.Title;
export const PopoverDescription = BasePopover.Description;
export const PopoverClose = BasePopover.Close;
