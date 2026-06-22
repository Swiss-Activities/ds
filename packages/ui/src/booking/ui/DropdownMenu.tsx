"use client";

import {
  Children,
  type ComponentPropsWithoutRef,
  type ComponentPropsWithRef,
  type ComponentRef,
  type HTMLAttributes,
  type ReactElement,
  type Ref,
} from "react";
import { Menu } from "@base-ui/react/menu";
import { Check, ChevronRight, Circle } from "lucide-react";
import { cn } from "../utils/css/cn";

const DropdownMenu = Menu.Root;

const DropdownMenuGroup = Menu.Group;

const DropdownMenuPortal = Menu.Portal;

const DropdownMenuSub = Menu.SubmenuRoot;

const DropdownMenuRadioGroup = Menu.RadioGroup;

type DropdownMenuPositionerProps = ComponentPropsWithoutRef<
  typeof Menu.Positioner
>;

const DropdownMenuTrigger = ({
  asChild,
  children,
  ref,
  ...props
}: ComponentPropsWithRef<typeof Menu.Trigger> & {
  asChild?: boolean;
}) =>
  asChild ? (
    <Menu.Trigger
      ref={ref}
      render={Children.only(children) as ReactElement}
      {...props}
    />
  ) : (
    <Menu.Trigger ref={ref} {...props}>
      {children}
    </Menu.Trigger>
  );
DropdownMenuTrigger.displayName = "DropdownMenuTrigger";

const DropdownMenuSubTrigger = ({
  className,
  inset,
  children,
  ...props
}: ComponentPropsWithoutRef<typeof Menu.SubmenuTrigger> & {
  ref?: Ref<ComponentRef<typeof Menu.SubmenuTrigger>>;
  inset?: boolean;
}) => (
  <Menu.SubmenuTrigger
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-gray-100 data-[open]:bg-gray-100",
      inset && "ps-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ms-auto h-4 w-4" />
  </Menu.SubmenuTrigger>
);
DropdownMenuSubTrigger.displayName = "DropdownMenuSubTrigger";

const DropdownMenuSubContent = ({
  align = "start",
  className,
  positionerClassName,
  side = "right",
  sideOffset = 0,
  ...props
}: ComponentPropsWithoutRef<typeof Menu.Popup> & {
  ref?: Ref<ComponentRef<typeof Menu.Popup>>;
  align?: DropdownMenuPositionerProps["align"];
  positionerClassName?: string;
  side?: DropdownMenuPositionerProps["side"];
  sideOffset?: DropdownMenuPositionerProps["sideOffset"];
}) => (
  <Menu.Portal>
    <Menu.Positioner
      align={align}
      side={side}
      sideOffset={sideOffset}
      className={cn("isolate z-50", positionerClassName)}
    >
      <Menu.Popup
        className={cn(
          "min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white p-1 text-gray-950 shadow-lg data-[ending-style]:animate-out data-[starting-style]:animate-in data-[ending-style]:fade-out-0 data-[starting-style]:fade-in-0 data-[ending-style]:zoom-out-95 data-[starting-style]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className
        )}
        {...props}
      />
    </Menu.Positioner>
  </Menu.Portal>
);
DropdownMenuSubContent.displayName = "DropdownMenuSubContent";

const DropdownMenuContent = ({
  align = "center",
  className,
  positionerClassName,
  side = "bottom",
  sideOffset = 4,
  ...props
}: ComponentPropsWithoutRef<typeof Menu.Popup> & {
  ref?: Ref<ComponentRef<typeof Menu.Popup>>;
  align?: DropdownMenuPositionerProps["align"];
  positionerClassName?: string;
  side?: DropdownMenuPositionerProps["side"];
  sideOffset?: DropdownMenuPositionerProps["sideOffset"];
}) => (
  <Menu.Portal>
    <Menu.Positioner
      align={align}
      side={side}
      sideOffset={sideOffset}
      className={cn("isolate z-50", positionerClassName)}
    >
      <Menu.Popup
        className={cn(
          "min-w-[8rem] overflow-hidden rounded-md border border-solid border-gray-200 bg-white p-1 text-gray-950 shadow-md",
          "data-[ending-style]:animate-out data-[starting-style]:animate-in data-[ending-style]:fade-out-0 data-[starting-style]:fade-in-0 data-[ending-style]:zoom-out-95 data-[starting-style]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className
        )}
        {...props}
      />
    </Menu.Positioner>
  </Menu.Portal>
);
DropdownMenuContent.displayName = "DropdownMenuContent";

const DropdownMenuItem = ({
  className,
  inset,
  ...props
}: ComponentPropsWithoutRef<typeof Menu.Item> & {
  ref?: Ref<ComponentRef<typeof Menu.Item>>;
  inset?: boolean;
}) => (
  <Menu.Item
    className={cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[highlighted]:bg-gray-100 data-[highlighted]:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "ps-8",
      className
    )}
    {...props}
  />
);
DropdownMenuItem.displayName = "DropdownMenuItem";

const DropdownMenuCheckboxItem = ({
  className,
  children,
  checked,
  ...props
}: ComponentPropsWithoutRef<typeof Menu.CheckboxItem> & {
  ref?: Ref<ComponentRef<typeof Menu.CheckboxItem>>;
}) => (
  <Menu.CheckboxItem
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pe-2 ps-8 text-sm outline-none transition-colors data-[highlighted]:bg-gray-100 data-[highlighted]:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute start-2 top-1/2 mt-px flex h-3.5 w-3.5 -translate-y-1/2 items-center justify-center">
      <Menu.CheckboxItemIndicator>
        <Check className="h-4 w-4" />
      </Menu.CheckboxItemIndicator>
    </span>
    {children}
  </Menu.CheckboxItem>
);
DropdownMenuCheckboxItem.displayName = "DropdownMenuCheckboxItem";

const DropdownMenuRadioItem = ({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<typeof Menu.RadioItem> & {
  ref?: Ref<ComponentRef<typeof Menu.RadioItem>>;
}) => (
  <Menu.RadioItem
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pe-2 ps-8 text-sm outline-none transition-colors data-[highlighted]:bg-gray-100 data-[highlighted]:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute start-2 flex h-3.5 w-3.5 items-center justify-center">
      <Menu.RadioItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </Menu.RadioItemIndicator>
    </span>
    {children}
  </Menu.RadioItem>
);
DropdownMenuRadioItem.displayName = "DropdownMenuRadioItem";

const DropdownMenuLabel = ({
  className,
  inset,
  ...props
}: ComponentPropsWithoutRef<typeof Menu.GroupLabel> & {
  ref?: Ref<ComponentRef<typeof Menu.GroupLabel>>;
  inset?: boolean;
}) => (
  <Menu.GroupLabel
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "ps-8",
      className
    )}
    {...props}
  />
);
DropdownMenuLabel.displayName = "DropdownMenuLabel";

const DropdownMenuSeparator = ({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof Menu.Separator> & {
  ref?: Ref<ComponentRef<typeof Menu.Separator>>;
}) => (
  <Menu.Separator
    className={cn("-mx-1 my-1 h-px bg-gray-100", className)}
    {...props}
  />
);
DropdownMenuSeparator.displayName = "DropdownMenuSeparator";

const DropdownMenuShortcut = ({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ms-auto text-xs tracking-widest opacity-60", className)}
      {...props}
    />
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
