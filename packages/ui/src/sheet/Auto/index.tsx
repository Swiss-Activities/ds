import React from "react";
import { Sheet } from "@silk-hq/components";
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
Root.displayName = "SheetAuto.Root";

type ViewProps = React.ComponentPropsWithoutRef<typeof Sheet.View>;

const View = React.forwardRef<React.ElementRef<typeof Sheet.View>, ViewProps>(
  ({ children, className, ...restProps }, ref) => {
    return (
      <Sheet.View
        className={cn("fixed inset-x-0 bottom-0 z-[200]", className)}
        swipeOvershoot={false}
        nativeEdgeSwipePrevention={true}
        {...restProps}
        ref={ref}
      >
        {children}
      </Sheet.View>
    );
  }
);
View.displayName = "SheetAuto.View";

const Content = React.forwardRef<
  React.ElementRef<typeof Sheet.Content>,
  React.ComponentPropsWithoutRef<typeof Sheet.Content>
>(({ children, className, style, ...restProps }, ref) => {
  return (
    <Sheet.Content
      className={cn(
        "max-h-[80dvh] rounded-t-3xl bg-white",
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
    </Sheet.Content>
  );
});
Content.displayName = "SheetAuto.Content";

const Handle = React.forwardRef<
  React.ElementRef<typeof Sheet.Handle>,
  React.ComponentPropsWithoutRef<typeof Sheet.Handle>
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
Handle.displayName = "SheetAuto.Handle";

export const SheetAuto = {
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
  ScrollRoot: SharedScrollRoot,
  ScrollView: SharedScrollView,
  ScrollContent: SharedScrollContent,
};
