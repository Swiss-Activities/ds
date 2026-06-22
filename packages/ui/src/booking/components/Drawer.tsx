import { useEffect, useState, type ReactNode } from "react";
import { Sheet, cn } from "@swiss-activities/ui";
import { useDrawerStore } from "../store/drawer";

const useIsDesktop = () => {
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return desktop;
};

export type DrawerProps = {
  ident: string;
  title?: ReactNode;
  children?: ReactNode;
  bottom?: ReactNode;
  bottomLarge?: boolean;
  desktopDrawer?: "left" | "right";
  modal?: boolean;
  flush?: boolean;
  padding?: boolean;
  size?: "sm" | "md" | "lg";
  onClose?: () => void;
  notCloseable?: boolean;
  mobileTitle?: boolean;
  desktopTitle?: boolean;
  classNameInner?: string;
  className?: string;
  [key: string]: unknown;
};

export const Drawer = ({
  ident,
  title,
  children,
  bottom,
  bottomLarge,
  desktopDrawer,
  flush,
  padding = true,
  onClose,
  notCloseable,
  mobileTitle = true,
  desktopTitle = true,
  classNameInner,
  className,
}: DrawerProps) => {
  const isOpen = useDrawerStore((s) => s.isOpen);
  const close = useDrawerStore((s) => s.close);
  const presented = isOpen.includes(ident);
  const isDesktop = useIsDesktop();
  const placement = isDesktop && desktopDrawer ? desktopDrawer : "bottom";
  const isSide = placement === "left" || placement === "right";
  const showTitle = Boolean(title) && (isDesktop ? desktopTitle : mobileTitle);

  return (
    <Sheet.Root
      presented={presented}
      onPresentedChange={(open) => {
        if (!open) {
          close(ident);
          onClose?.();
        }
      }}
    >
      <Sheet.Portal>
        <Sheet.View
          contentPlacement={placement}
          className={cn("z-[220]", isSide && "inset-0", className)}
        >
          <Sheet.Backdrop />
          {notCloseable ? null : <Sheet.CloseButton />}
          <Sheet.Content
            className={cn(
              "grid max-h-[90dvh] overflow-hidden bg-white",
              bottom ? "grid-rows-[min-content_1fr_min-content]" : "grid-rows-[min-content_1fr]",
              isSide &&
                "h-dvh max-h-none w-[min(92vw,420px)] max-w-[min(92vw,420px)] rounded-none",
            )}
          >
            <Sheet.Header className={cn("pb-3", isSide ? "pt-5" : "pt-2")}>
              {isSide ? null : <Sheet.Handle />}
              {showTitle ? (
                <Sheet.Title
                  className={cn("text-xl font-semibold text-gray-950", !isSide && "mt-3")}
                >
                  {title}
                </Sheet.Title>
              ) : null}
            </Sheet.Header>
            <Sheet.ScrollRoot className="h-full min-h-0">
              <Sheet.ScrollView className="h-full min-h-0">
                <Sheet.ScrollContent className={cn(!flush && padding && "px-4 pb-4", classNameInner)}>
                  {children}
                </Sheet.ScrollContent>
              </Sheet.ScrollView>
            </Sheet.ScrollRoot>
            {bottom ? (
              <div
                className={cn(
                  "border-0 border-t border-solid border-gray-200 bg-white px-4 py-3",
                  bottomLarge && "py-4",
                )}
              >
                {bottom}
              </div>
            ) : null}
          </Sheet.Content>
        </Sheet.View>
      </Sheet.Portal>
    </Sheet.Root>
  );
};
