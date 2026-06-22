"use client";

import * as React from "react";
import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
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
}: TabsPrimitive.List.Props & {
  ref?: React.Ref<HTMLDivElement>;
}) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(segmentedControlListStyles, "rounded-lg", className)}
    {...props}
  />
);
TabsList.displayName = "TabsList";

const TabsTrigger = ({
  ref,
  className,
  ...props
}: TabsPrimitive.Tab.Props & {
  ref?: React.Ref<HTMLElement>;
}) => (
  <TabsPrimitive.Tab
    ref={ref}
    className={cn(
      segmentedControlTriggerStyles,
      "rounded px-3 py-1.5 focus-visible:outline-none data-[active]:border-primary data-[active]:text-gray-900",
      className
    )}
    {...props}
  />
);
TabsTrigger.displayName = "TabsTrigger";

const TabsContent = ({
  ref,
  className,
  forceMount,
  ...props
}: Omit<TabsPrimitive.Panel.Props, "keepMounted"> & {
  ref?: React.Ref<HTMLDivElement>;
  forceMount?: boolean;
}) => (
  <TabsPrimitive.Panel
    ref={ref}
    keepMounted={forceMount}
    className={cn(
      "mt-2 ring-offset-white empty:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2",
      className,
      {
        "data-[hidden]:hidden": forceMount,
      }
    )}
    {...props}
  />
);
TabsContent.displayName = "TabsContent";

export { Tabs, TabsList, TabsTrigger, TabsContent };
