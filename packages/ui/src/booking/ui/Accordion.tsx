"use client";

import * as React from "react";
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "../utils/css/cn";

type AccordionProps = Omit<
  AccordionPrimitive.Root.Props,
  "value" | "defaultValue" | "onValueChange" | "multiple"
> & {
  type?: "single" | "multiple";
  collapsible?: boolean;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
};

const Accordion = ({
  type,
  collapsible: _collapsible,
  value,
  defaultValue,
  onValueChange,
  ...props
}: AccordionProps) => (
  <AccordionPrimitive.Root
    multiple={type === "multiple"}
    value={value === undefined ? undefined : value === "" ? [] : [value]}
    defaultValue={
      defaultValue === undefined
        ? undefined
        : defaultValue === ""
          ? []
          : [defaultValue]
    }
    onValueChange={
      onValueChange === undefined
        ? undefined
        : (next) => onValueChange(typeof next[0] === "string" ? next[0] : "")
    }
    {...props}
  />
);
Accordion.displayName = "Accordion";

const AccordionItem = ({
  ref,
  className,
  ...props
}: AccordionPrimitive.Item.Props & {
  ref?: React.Ref<HTMLDivElement>;
}) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("rounded-lg border border-solid border-gray-200", className)}
    {...props}
  />
);
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = ({
  ref,
  className,
  children,
  ...props
}: AccordionPrimitive.Trigger.Props & {
  ref?: React.Ref<HTMLElement>;
}) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 cursor-pointer justify-between rounded-lg border-none bg-transparent px-4 py-4 text-sm font-medium transition-all hover:bg-gray-100 [&[data-panel-open]>svg]:rotate-180 [&[data-panel-open]]:rounded-b-none",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 text-gray-900 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
);
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = ({
  ref,
  className,
  children,
  ...props
}: AccordionPrimitive.Panel.Props & {
  ref?: React.Ref<HTMLDivElement>;
}) => (
  <AccordionPrimitive.Panel
    ref={ref}
    className="data-[closed]:animate-accordion-up data-[open]:animate-accordion-down overflow-hidden px-4 py-6 text-sm"
    {...props}
  >
    <div className={cn(className)}>{children}</div>
  </AccordionPrimitive.Panel>
);
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
