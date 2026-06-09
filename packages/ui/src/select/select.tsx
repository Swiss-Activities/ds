"use client";

import * as React from "react";
import { Select as SelectPrimitive } from "@base-ui/react/select";
import { Check, ChevronDown, ChevronUp } from "../icons";
import { Icon } from "../icon/icon";
import { cn } from "../utils/cn";

export const Select = SelectPrimitive.Root;
export const SelectGroup = SelectPrimitive.Group;
export const SelectLabel = SelectPrimitive.GroupLabel;
export const SelectValue = SelectPrimitive.Value;
export const SelectSeparator = SelectPrimitive.Separator;

type SelectTriggerProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Trigger
> & {
  size?: "sm" | "default";
};

export const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectTriggerProps
>(({ children, className, size = "default", ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    data-slot="select-trigger"
    data-size={size}
    className={cn(
      "inline-flex h-10 min-w-0 items-center justify-between gap-2 rounded-lg border border-solid border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 shadow-sm outline-none transition hover:border-gray-300 focus:border-primary focus-visible:border-primary focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[size=sm]:h-9",
      className
    )}
    {...props}
  >
    <span className="flex min-w-0 items-center gap-2 truncate">{children}</span>
    <SelectPrimitive.Icon className="flex shrink-0 text-gray-500">
      <Icon icon={ChevronDown} size="sm" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = "SelectTrigger";

type SelectPositionerProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Positioner
>;

type SelectContentProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Popup
> & {
  align?: SelectPositionerProps["align"];
  alignOffset?: SelectPositionerProps["alignOffset"];
  alignItemWithTrigger?: SelectPositionerProps["alignItemWithTrigger"];
  collisionPadding?: SelectPositionerProps["collisionPadding"];
  positionerClassName?: string;
  side?: SelectPositionerProps["side"];
  sideOffset?: SelectPositionerProps["sideOffset"];
};

export const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Popup>,
  SelectContentProps
>(
  (
    {
      align = "start",
      alignOffset = 0,
      alignItemWithTrigger = false,
      children,
      className,
      collisionPadding = 16,
      positionerClassName,
      side = "bottom",
      sideOffset = 6,
      ...props
    },
    ref
  ) => (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        alignItemWithTrigger={alignItemWithTrigger}
        collisionPadding={collisionPadding}
        side={side}
        sideOffset={sideOffset}
        className={cn("isolate z-[220]", positionerClassName)}
      >
        <SelectPrimitive.Popup
          ref={ref}
          data-slot="select-content"
          data-align-trigger={alignItemWithTrigger}
          className={cn(
            "relative box-border max-h-96 min-w-[8rem] overflow-hidden rounded-lg border border-solid border-gray-200 bg-white text-gray-950 shadow-lg outline-none",
            className
          )}
          {...props}
        >
          <SelectPrimitive.ScrollUpArrow className="inset-x-0 top-0 z-10 box-border flex h-8 w-auto min-w-0 cursor-default items-center justify-center overflow-hidden rounded-t-lg !border-0 bg-white text-gray-500">
            <Icon icon={ChevronUp} size="sm" />
          </SelectPrimitive.ScrollUpArrow>
          <SelectPrimitive.List className="max-h-[calc(24rem-4rem)] overflow-y-auto p-1">
            {children}
          </SelectPrimitive.List>
          <SelectPrimitive.ScrollDownArrow className="inset-x-0 bottom-0 z-10 box-border flex h-8 w-auto min-w-0 cursor-default items-center justify-center overflow-hidden rounded-b-lg !border-0 bg-white text-gray-500">
            <Icon icon={ChevronDown} size="sm" />
          </SelectPrimitive.ScrollDownArrow>
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  )
);
SelectContent.displayName = "SelectContent";

type SelectItemProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>;

export const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  SelectItemProps
>(({ children, className, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    data-slot="select-item"
    className={cn(
      "relative flex min-h-9 cursor-default select-none items-center rounded-md py-2 pe-8 ps-3 text-sm outline-none transition data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[highlighted]:bg-gray-100 data-[selected]:font-semibold",
      className
    )}
    {...props}
  >
    <SelectPrimitive.ItemText className="flex flex-1 shrink-0 gap-2 whitespace-nowrap">
      {children}
    </SelectPrimitive.ItemText>
    <span className="absolute end-2 flex h-4 w-4 items-center justify-center text-gray-700">
      <SelectPrimitive.ItemIndicator>
        <Icon icon={Check} size="sm" />
      </SelectPrimitive.ItemIndicator>
    </span>
  </SelectPrimitive.Item>
));
SelectItem.displayName = "SelectItem";

export const SelectGroupLabel = SelectPrimitive.GroupLabel;
export const SelectPortal = SelectPrimitive.Portal;
export const SelectIcon = SelectPrimitive.Icon;
