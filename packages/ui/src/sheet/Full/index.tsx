"use client";

import React from "react";
import { AutoFocusTarget, Sheet as SilkSheet } from "@silk-hq/components";
import {
  Backdrop as SharedBackdrop,
  CloseButton,
  Content as SharedContent,
  Description,
  Handle as SharedHandle,
  Header as SharedHeader,
  Outlet,
  Portal,
  ScrollContent as SharedScrollContent,
  ScrollRoot as SharedScrollRoot,
  ScrollView as SharedScrollView,
  Title,
  Trigger,
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
Root.displayName = "SheetFull.Root";

type ViewProps = React.ComponentPropsWithoutRef<typeof SilkSheet.View>;

const View = React.forwardRef<React.ElementRef<typeof SilkSheet.View>, ViewProps>(
  ({ children, className, ...restProps }, ref) => {
    return (
      <SilkSheet.View
        className={cn(
          "fixed inset-0 top-0 z-[200] h-[calc(100dvh+60px)]",
          className
        )}
        swipeOvershoot={false}
        nativeEdgeSwipePrevention={true}
        onPresentAutoFocus={{ focus: true }}
        {...restProps}
        ref={ref}
      >
        {children}
      </SilkSheet.View>
    );
  }
);
View.displayName = "SheetFull.View";

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
Handle.displayName = "SheetFull.Handle";

export const SheetFull = {
  Root,
  Portal,
  View,
  Backdrop: SharedBackdrop,
  Content: SharedContent,
  Trigger,
  Handle,
  Header: SharedHeader,
  CloseButton,
  Outlet,
  Title,
  Description,
  AutoFocusTarget,
  ScrollRoot: SharedScrollRoot,
  ScrollView: SharedScrollView,
  ScrollContent: SharedScrollContent,
};
