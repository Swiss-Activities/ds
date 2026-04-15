import React from "react";
import { Sheet, AutoFocusTarget } from "@silk-hq/components";
import {
  Handle as SharedHandle,
  Backdrop as SharedBackdrop,
  Content as SharedContent,
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

type SheetRootProps = React.ComponentPropsWithoutRef<typeof Sheet.Root>;
type RootProps = Omit<SheetRootProps, "license"> & {
  license?: SheetRootProps["license"];
};

const Root = React.forwardRef<React.ElementRef<typeof Sheet.Root>, RootProps>(
  ({ children, ...restProps }, ref) => {
    return (
      <Sheet.Root license="non-commercial" {...restProps} ref={ref}>
        {children}
      </Sheet.Root>
    );
  }
);
Root.displayName = "SheetFull.Root";

type ViewProps = React.ComponentPropsWithoutRef<typeof Sheet.View>;

const View = React.forwardRef<React.ElementRef<typeof Sheet.View>, ViewProps>(
  ({ children, className, ...restProps }, ref) => {
    return (
      <Sheet.View
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
      </Sheet.View>
    );
  }
);
View.displayName = "SheetFull.View";

const Handle = React.forwardRef<
  React.ElementRef<typeof Sheet.Handle>,
  React.ComponentPropsWithoutRef<typeof Sheet.Handle>
>(({ className, ...restProps }, ref) => {
  return (
    <SharedHandle
      className={`mx-auto block ${className ?? ""}`.trim()}
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
  CloseButton,
  Outlet,
  Title,
  Description,
  AutoFocusTarget,
  ScrollRoot: SharedScrollRoot,
  ScrollView: SharedScrollView,
  ScrollContent: SharedScrollContent,
};
