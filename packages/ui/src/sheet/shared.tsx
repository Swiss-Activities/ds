"use client";

import React from "react";
import { Sheet, Scroll } from "@silk-hq/components";
import { Button } from "../button/button";
import { Icon } from "../icon/icon";
import { X } from "../icons";
import { cn } from "../utils/cn";

type HandleProps = React.ComponentPropsWithoutRef<typeof Sheet.Handle>;

export const Handle = React.forwardRef<
  React.ElementRef<typeof Sheet.Handle>,
  HandleProps
>(({ className, ...restProps }, ref) => {
  return (
    <Sheet.Handle
      className={cn(
        "h-1.5 w-12 cursor-pointer rounded-full border-0 bg-gray-300",
        className
      )}
      {...restProps}
      ref={ref}
    />
  );
});
Handle.displayName = "Sheet.Handle";

type BackdropProps = React.ComponentPropsWithoutRef<typeof Sheet.Backdrop>;

export const Backdrop = React.forwardRef<
  React.ElementRef<typeof Sheet.Backdrop>,
  BackdropProps
>(({ className, ...restProps }, ref) => {
  return (
    <Sheet.Backdrop
      className={cn("bg-black backdrop-blur-[2px]", className)}
      travelAnimation={{ opacity: [0, 0.6] }}
      {...restProps}
      ref={ref}
    />
  );
});
Backdrop.displayName = "Sheet.Backdrop";

export function CloseButton({ label = "Close" }: { label?: string }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 flex items-start justify-end">
      <Sheet.Trigger action="dismiss" asChild>
        <Button
          variant="transparent"
          className="pointer-events-auto !min-h-[40px] !border-none !text-white gap-1.5 hover:!bg-transparent focus-visible:!outline-white"
        >
          <Icon icon={X} size="sm" />
          <span>{label}</span>
        </Button>
      </Sheet.Trigger>
    </div>
  );
}

type ContentProps = React.ComponentPropsWithoutRef<typeof Sheet.Content>;

export const Content = React.forwardRef<
  React.ElementRef<typeof Sheet.Content>,
  ContentProps
>(({ children, className, ...restProps }, ref) => {
  return (
    <Sheet.Content
      className={cn(
        "box-border h-[calc(100%-40px)] max-w-[800px] overflow-hidden rounded-t-3xl bg-white",
        className
      )}
      {...restProps}
      ref={ref}
    >
      {children}
    </Sheet.Content>
  );
});
Content.displayName = "Sheet.Content";

type ViewProps = React.ComponentPropsWithoutRef<typeof Sheet.View>;

export const View = React.forwardRef<
  React.ElementRef<typeof Sheet.View>,
  ViewProps
>(({ children, className, ...restProps }, ref) => {
  return (
    <Sheet.View
      className={cn(
        "fixed inset-0 top-0 z-[200] h-[calc(100dvh+60px)]",
        className
      )}
      swipeOvershoot={false}
      nativeEdgeSwipePrevention={true}
      {...restProps}
      ref={ref}
    >
      {children}
    </Sheet.View>
  );
});
View.displayName = "Sheet.View";

type ScrollRootProps = React.ComponentPropsWithoutRef<typeof Scroll.Root>;

export const ScrollRoot = React.forwardRef<
  React.ElementRef<typeof Scroll.Root>,
  ScrollRootProps
>(({ children, ...restProps }, ref) => {
  return (
    <Scroll.Root {...restProps} ref={ref}>
      {children}
    </Scroll.Root>
  );
});
ScrollRoot.displayName = "Sheet.ScrollRoot";

type ScrollViewProps = React.ComponentPropsWithoutRef<typeof Scroll.View>;

export const ScrollView = React.forwardRef<
  React.ElementRef<typeof Scroll.View>,
  ScrollViewProps
>(({ children, className, ...restProps }, ref) => {
  return (
    <Scroll.View
      className={cn("min-h-0", className)}
      scrollGestureTrap={{ yEnd: true }}
      safeArea="layout-viewport"
      onScrollStart={{ dismissKeyboard: true }}
      {...restProps}
      ref={ref}
    >
      {children}
    </Scroll.View>
  );
});
ScrollView.displayName = "Sheet.ScrollView";

type ScrollContentProps = React.ComponentPropsWithoutRef<typeof Scroll.Content>;

export const ScrollContent = React.forwardRef<
  React.ElementRef<typeof Scroll.Content>,
  ScrollContentProps
>(({ children, className, ...restProps }, ref) => {
  return (
    <Scroll.Content className={className} {...restProps} ref={ref}>
      {children}
    </Scroll.Content>
  );
});
ScrollContent.displayName = "Sheet.ScrollContent";

export const Portal = Sheet.Portal;
export const Trigger = Sheet.Trigger;
export const Outlet = Sheet.Outlet;
export const Title = Sheet.Title;
export const Description = Sheet.Description;

type RootProps = Omit<
  React.ComponentPropsWithoutRef<typeof Sheet.Root>,
  "license"
> & {
  license?: React.ComponentPropsWithoutRef<typeof Sheet.Root>["license"];
};

export const Root = React.forwardRef<
  React.ElementRef<typeof Sheet.Root>,
  RootProps
>(({ children, ...restProps }, ref) => {
  return (
    <Sheet.Root license="non-commercial" {...restProps} ref={ref}>
      {children}
    </Sheet.Root>
  );
});
Root.displayName = "Sheet.Root";
