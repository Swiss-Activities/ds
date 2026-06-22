"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import {
  segmentedControlListStyles,
  segmentedControlTriggerStyles,
} from "@swiss-activities/ui";
import { cn } from "../utils/css/cn";

const Tabs = TabsPrimitive.Root;

const TabsList = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & {
  ref?: React.RefObject<React.ElementRef<typeof TabsPrimitive.List>>;
}) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(segmentedControlListStyles, "rounded-lg", className)}
    {...props}
  />
);
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
  ref?: React.RefObject<React.ElementRef<typeof TabsPrimitive.Trigger>>;
}) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      segmentedControlTriggerStyles,
      "rounded px-3 py-1.5 focus-visible:outline-none data-[state=active]:border-primary data-[state=active]:text-gray-900",
      className
    )}
    {...props}
  />
);
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> & {
  ref?: React.RefObject<React.ElementRef<typeof TabsPrimitive.Content>>;
}) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-white empty:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2",
      className,
      {
        "data-[state=inactive]:hidden": props.forceMount,
      }
    )}
    {...props}
  />
);
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
