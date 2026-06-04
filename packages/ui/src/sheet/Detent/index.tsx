"use client";

import React, { createContext, useContext, useState } from "react";
import { Sheet, Scroll, type SheetViewProps } from "@silk-hq/components";
import {
  Backdrop as SharedBackdrop,
  CloseButton,
  Content as SharedContent,
  Description,
  Handle as SharedHandle,
  Outlet,
  Portal,
  ScrollContent as SharedScrollContent,
  ScrollRoot as SharedScrollRoot,
  ScrollView as SharedScrollView,
  Title,
  Trigger,
  View as SharedView,
} from "../shared";

type SheetWithDetentContextValue = {
  activeDetent: number | undefined;
  lastDetentIndex: number;
  reachedLastDetent: boolean;
  setActiveDetent: React.Dispatch<React.SetStateAction<number | undefined>>;
  setLastDetentIndex: React.Dispatch<React.SetStateAction<number>>;
  setReachedLastDetent: React.Dispatch<React.SetStateAction<boolean>>;
};

const SheetWithDetentContext =
  createContext<SheetWithDetentContextValue | null>(null);

function useSheetWithDetentContext() {
  const context = useContext(SheetWithDetentContext);

  if (!context) {
    throw new Error(
      "useSheetWithDetentContext must be used within SheetWithDetent.Root"
    );
  }

  return context;
}

type SheetRootProps = React.ComponentPropsWithoutRef<typeof Sheet.Root>;
type RootProps = Omit<SheetRootProps, "license"> & {
  license?: SheetRootProps["license"];
};

const Root = React.forwardRef<React.ElementRef<typeof Sheet.Root>, RootProps>(
  ({ children, defaultActiveDetent, onActiveDetentChange, ...restProps }, ref) => {
    const [activeDetent, setActiveDetent] = useState<number | undefined>(
      defaultActiveDetent
    );
    const [lastDetentIndex, setLastDetentIndex] = useState(1);
    const [reachedLastDetent, setReachedLastDetent] = useState(false);

    return (
      <SheetWithDetentContext.Provider
        value={{
          activeDetent,
          lastDetentIndex,
          reachedLastDetent,
          setActiveDetent,
          setLastDetentIndex,
          setReachedLastDetent,
        }}
      >
        <Sheet.Root
          defaultActiveDetent={defaultActiveDetent}
          license="non-commercial"
          onActiveDetentChange={(detent) => {
            setActiveDetent(detent);

            if (detent === lastDetentIndex) {
              setReachedLastDetent(true);
            }

            onActiveDetentChange?.(detent);
          }}
          {...restProps}
          ref={ref}
        >
          {children}
        </Sheet.Root>
      </SheetWithDetentContext.Provider>
    );
  }
);
Root.displayName = "SheetWithDetent.Root";

type ViewProps = Omit<
  React.ComponentPropsWithoutRef<typeof Sheet.View>,
  "detents"
> & {
  detents?: SheetViewProps["detents"];
  keepDetentsAtLastDetent?: boolean;
};

function getLastDetentIndex(detents: SheetViewProps["detents"]) {
  if (!detents) {
    return 1;
  }

  return (Array.isArray(detents) ? detents.length : 1) + 1;
}

const View = React.forwardRef<React.ElementRef<typeof Sheet.View>, ViewProps>(
  (
    {
      children,
      className,
      detents = "50dvh",
      keepDetentsAtLastDetent = false,
      onTravel,
      onTravelRangeChange,
      onTravelStatusChange,
      ...restProps
    },
    ref
  ) => {
    const {
      activeDetent,
      reachedLastDetent,
      setActiveDetent,
      setLastDetentIndex,
      setReachedLastDetent,
    } = useSheetWithDetentContext();
    const lastDetentIndex = getLastDetentIndex(detents);

    React.useEffect(() => {
      setLastDetentIndex(lastDetentIndex);
    }, [lastDetentIndex, setLastDetentIndex]);

    return (
      <SharedView
        className={className}
        detents={
          !reachedLastDetent || keepDetentsAtLastDetent ? detents : undefined
        }
        onTravelStatusChange={(status) => {
          if (status === "idleOutside") {
            setActiveDetent(undefined);
            setReachedLastDetent(false);
          }

          if (
            status === "idleInside" &&
            activeDetent !== undefined &&
            activeDetent < lastDetentIndex
          ) {
            setReachedLastDetent(false);
          }

          onTravelStatusChange?.(status);
        }}
        onTravelRangeChange={(range) => {
          if (range.start === lastDetentIndex && range.end === lastDetentIndex) {
            setReachedLastDetent(true);
          }

          onTravelRangeChange?.(range);
        }}
        onTravel={onTravel}
        {...restProps}
        ref={ref}
      >
        {children}
      </SharedView>
    );
  }
);
View.displayName = "SheetWithDetent.View";

type HandleProps = React.ComponentPropsWithoutRef<typeof Sheet.Handle> & {
  lastDetentAction?: React.ComponentPropsWithoutRef<
    typeof Sheet.Handle
  >["action"];
};

const Handle = React.forwardRef<React.ElementRef<typeof Sheet.Handle>, HandleProps>(
  ({ action, className, lastDetentAction = "dismiss", ...restProps }, ref) => {
    const { activeDetent, lastDetentIndex, reachedLastDetent } =
      useSheetWithDetentContext();
    const isAtLastDetent =
      reachedLastDetent ||
      (activeDetent !== undefined && activeDetent >= lastDetentIndex);

    return (
      <SharedHandle
        action={action ?? (isAtLastDetent ? lastDetentAction : "step")}
        className={`mx-auto block ${className ?? ""}`.trim()}
        {...restProps}
        ref={ref}
      />
    );
  }
);
Handle.displayName = "SheetWithDetent.Handle";

const ScrollView = React.forwardRef<
  React.ElementRef<typeof Scroll.View>,
  React.ComponentPropsWithoutRef<typeof Scroll.View>
>(({ children, className, ...restProps }, ref) => {
  const { activeDetent, lastDetentIndex, reachedLastDetent } =
    useSheetWithDetentContext();
  const canScroll =
    reachedLastDetent ||
    (activeDetent !== undefined && activeDetent >= lastDetentIndex);

  return (
    <SharedScrollView
      className={className}
      scrollGesture={canScroll ? "auto" : false}
      {...restProps}
      ref={ref}
    >
      {children}
    </SharedScrollView>
  );
});
ScrollView.displayName = "SheetWithDetent.ScrollView";

export const SheetWithDetent = {
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
  BleedingBackground: Sheet.BleedingBackground,
  SpecialWrapper: Sheet.SpecialWrapper,
  ScrollRoot: SharedScrollRoot,
  ScrollView,
  ScrollContent: SharedScrollContent,
};
