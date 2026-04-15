import React, {
  createContext,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
import { Sheet, Scroll, type SheetViewProps } from "@silk-hq/components";
import {
  Handle as SharedHandle,
  Backdrop as SharedBackdrop,
  Content as SharedContent,
  View as SharedView,
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

type SheetWithDetentContextValue = {
  reachedLastDetent: boolean;
  setReachedLastDetent: React.Dispatch<React.SetStateAction<boolean>>;
  viewRef: React.RefObject<HTMLElement | null>;
};

const SheetWithDetentContext =
  createContext<SheetWithDetentContextValue | null>(null);

const useSheetWithDetentContext = () => {
  const context = useContext(SheetWithDetentContext);
  if (!context) {
    throw new Error(
      "useSheetWithDetentContext must be used within SheetWithDetent.Root"
    );
  }
  return context;
};

type SheetRootProps = React.ComponentPropsWithoutRef<typeof Sheet.Root>;
type RootProps = Omit<SheetRootProps, "license"> & {
  license?: SheetRootProps["license"];
};

const Root = React.forwardRef<React.ElementRef<typeof Sheet.Root>, RootProps>(
  ({ children, ...restProps }, ref) => {
    const [reachedLastDetent, setReachedLastDetent] = useState(false);
    const viewRef = useRef<HTMLElement>(null);

    return (
      <SheetWithDetentContext.Provider
        value={{
          reachedLastDetent,
          setReachedLastDetent,
          viewRef,
        }}
      >
        <Sheet.Root license="non-commercial" {...restProps} ref={ref}>
          {children}
        </Sheet.Root>
      </SheetWithDetentContext.Provider>
    );
  }
);
Root.displayName = "SheetWithDetent.Root";

type ViewProps = React.ComponentPropsWithoutRef<typeof Sheet.View> & {
  detentHeight?: string;
};

const View = React.forwardRef<React.ElementRef<typeof Sheet.View>, ViewProps>(
  (
    {
      children,
      className,
      detentHeight = "50dvh",
      onTravelStatusChange,
      onTravelRangeChange,
      onTravel,
      ...restProps
    },
    ref
  ) => {
    const { reachedLastDetent, setReachedLastDetent, viewRef } =
      useSheetWithDetentContext();

    const travelHandler = useMemo(() => {
      if (!reachedLastDetent) return onTravel;

      const handler: SheetViewProps["onTravel"] = ({ progress, ...rest }) => {
        if (!viewRef.current) return onTravel?.({ progress, ...rest });

        if (progress < 0.999) {
          viewRef.current.focus();
        }
        onTravel?.({ progress, ...rest });
      };
      return handler;
    }, [reachedLastDetent, onTravel, viewRef]);

    const setRefs = React.useCallback(
      (node: HTMLElement | null) => {
        // @ts-ignore
        viewRef.current = node;

        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      },
      [ref, viewRef]
    );

    return (
      <SharedView
        className={className}
        detents={!reachedLastDetent ? detentHeight : undefined}
        onTravelStatusChange={(status) => {
          if (status === "idleOutside") {
            setReachedLastDetent(false);
          }
          onTravelStatusChange?.(status);
        }}
        onTravelRangeChange={(range) => {
          if (range.start === 2) {
            setReachedLastDetent(true);
          }
          onTravelRangeChange?.(range);
        }}
        onTravel={travelHandler}
        {...restProps}
        ref={setRefs}
      >
        {children}
      </SharedView>
    );
  }
);
View.displayName = "SheetWithDetent.View";

const Handle = React.forwardRef<
  React.ElementRef<typeof Sheet.Handle>,
  React.ComponentPropsWithoutRef<typeof Sheet.Handle>
>(({ className, ...restProps }, ref) => {
  const { reachedLastDetent } = useSheetWithDetentContext();

  return (
    <SharedHandle
      className={`mx-auto block ${className ?? ""}`.trim()}
      action={reachedLastDetent ? "dismiss" : "step"}
      {...restProps}
      ref={ref}
    />
  );
});
Handle.displayName = "SheetWithDetent.Handle";

const ScrollView = React.forwardRef<
  React.ElementRef<typeof Scroll.View>,
  React.ComponentPropsWithoutRef<typeof Scroll.View>
>(({ children, className, ...restProps }, ref) => {
  const { reachedLastDetent } = useSheetWithDetentContext();

  return (
    <SharedScrollView
      className={className}
      scrollGesture={!reachedLastDetent ? false : "auto"}
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
  ScrollRoot: SharedScrollRoot,
  ScrollView,
  ScrollContent: SharedScrollContent,
};
