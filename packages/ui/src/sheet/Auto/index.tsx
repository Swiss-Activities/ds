"use client";

import React from "react";
import { Sheet as SilkSheet, AutoFocusTarget } from "@silk-hq/components";
import {
  Handle as SharedHandle,
  Backdrop as SharedBackdrop,
  ScrollRoot as SharedScrollRoot,
  ScrollView as SharedScrollView,
  ScrollContent as SharedScrollContent,
  CloseButton,
  Portal,
  Trigger,
  Outlet,
  Title,
  Description,
} from "../shared";
import { cn } from "../../utils/cn";

type SheetRootProps = React.ComponentPropsWithoutRef<typeof SilkSheet.Root>;
type RootProps = Omit<SheetRootProps, "license"> & {
  license?: SheetRootProps["license"];
};

const Root = React.forwardRef<React.ElementRef<typeof SilkSheet.Root>, RootProps>(
  ({ children, ...restProps }, ref) => {
    return (
      <SilkSheet.Root license="non-commercial" {...restProps} ref={ref}>
        {children}
      </SilkSheet.Root>
    );
  }
);
Root.displayName = "Sheet.Root";

type ViewProps = React.ComponentPropsWithoutRef<typeof SilkSheet.View>;

const View = React.forwardRef<React.ElementRef<typeof SilkSheet.View>, ViewProps>(
  ({ children, className, ...restProps }, ref) => {
    return (
      <SilkSheet.View
        className={cn("fixed inset-x-0 bottom-0 z-[200]", className)}
        swipeOvershoot={false}
        nativeEdgeSwipePrevention={true}
        {...restProps}
        ref={ref}
      >
        {children}
      </SilkSheet.View>
    );
  }
);
View.displayName = "Sheet.View";

const Content = React.forwardRef<
  React.ElementRef<typeof SilkSheet.Content>,
  React.ComponentPropsWithoutRef<typeof SilkSheet.Content>
>(({ children, className, style, ...restProps }, ref) => {
  return (
    <SilkSheet.Content
      className={cn(
        "max-h-[95dvh] rounded-t-3xl bg-white",
        className
        )}
      style={
        {
          ...style,
          "--silk-default-height": "auto",
        } as React.CSSProperties
      }
      {...restProps}
      ref={ref}
    >
      {children}
    </SilkSheet.Content>
  );
});
Content.displayName = "Sheet.Content";

const Handle = React.forwardRef<
  React.ElementRef<typeof SilkSheet.Handle>,
  React.ComponentPropsWithoutRef<typeof SilkSheet.Handle>
>(({ className, ...restProps }, ref) => {
  return (
    <SharedHandle
      className={cn("mx-auto block", className)}
      action="dismiss"
      {...restProps}
      ref={ref}
    />
  );
});
Handle.displayName = "Sheet.Handle";

export const Sheet = {
  Root,
  Portal,
  View,
  Backdrop: SharedBackdrop,
  Content,
  Trigger,
  Handle,
  CloseButton,
  Outlet,
  Title,
  Description,
  AutoFocusTarget,
  ScrollRoot: SharedScrollRoot,
  ScrollView: SharedScrollView,
  ScrollContent: SharedScrollContent,
};
