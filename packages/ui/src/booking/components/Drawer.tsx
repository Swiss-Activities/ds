import { useEffect, useState, type ReactNode } from "react";
import { SheetFull as Sheet, cn, Button, Icon, X } from "@swiss-activities/ui";
import { useDrawerStore } from "../store/drawer";
import { useI18n } from "../utils/i18n/useI18n";

const useIsDesktop = () => {
  const [desktop, setDesktop] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(min-width: 1024px)").matches,
  );

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
  classNameContent?: string;
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
  classNameContent,
  className,
}: DrawerProps) => {
  const { t } = useI18n();
  const isOpen = useDrawerStore((s) => s.isOpen);
  const close = useDrawerStore((s) => s.close);
  const presented = isOpen.includes(ident);
  const isDesktop = useIsDesktop();
  const placement = isDesktop && desktopDrawer ? desktopDrawer : "bottom";
  const isSide = placement === "left" || placement === "right";
  const wantsTall = Boolean(desktopDrawer);
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
          {notCloseable ? null : (
            <div
              className={cn(
                "pointer-events-none absolute inset-x-0 top-0 z-10 flex items-start p-1",
                placement === "right" ? "justify-start" : "justify-end",
              )}
            >
              <Sheet.Trigger action="dismiss" asChild>
                <Button
                  type="transparent"
                  icon={<Icon icon={X} size="sm" />}
                  text={t("Drawer.close")}
                  className="pointer-events-auto gap-1.5 !min-h-[40px] !border-none !text-white hover:!bg-transparent"
                />
              </Sheet.Trigger>
            </div>
          )}
          <Sheet.Content
            className={cn(
              "grid overflow-hidden bg-white",
              bottom
                ? "grid-rows-[min-content_1fr_min-content]"
                : "grid-rows-[min-content_1fr]",
              isSide
                ? "h-dvh min-h-dvh max-h-none w-[min(92vw,600px)] max-w-[min(92vw,600px)] rounded-none"
                : wantsTall
                  ? "h-[calc(100dvh-40px)] max-h-[calc(100dvh-40px)] min-h-[calc(100dvh-40px)] rounded-t-3xl"
                  : "h-auto max-h-[90dvh] rounded-t-3xl",
              classNameContent,
            )}
          >
            {isSide ? (
              <div className="flex min-h-[56px] items-center justify-between gap-3 border-0 border-b border-solid border-gray-200 bg-white pe-2 ps-5">
                <Sheet.Title
                  className={cn(
                    "truncate text-lg font-semibold text-gray-950",
                    !showTitle && "sr-only",
                  )}
                >
                  {title}
                </Sheet.Title>
                {notCloseable ? null : (
                  <Sheet.Trigger action="dismiss" asChild>
                    <Button
                      type="transparent"
                      icon={<Icon icon={X} size="sm" />}
                      className="!min-h-[44px] !min-w-[44px] !border-none !text-gray-500 hover:!text-gray-700"
                    />
                  </Sheet.Trigger>
                )}
              </div>
            ) : (
              <Sheet.Header className="pb-2 pt-2">
                <Sheet.Handle />
                {showTitle ? (
                  <Sheet.Title className="mt-3 text-xl font-semibold text-gray-950">
                    {title}
                  </Sheet.Title>
                ) : null}
              </Sheet.Header>
            )}
            <Sheet.ScrollRoot className={cn("h-full min-h-0", classNameInner)}>
              <Sheet.ScrollView className="h-full min-h-0">
                <Sheet.ScrollContent
                  className={cn("min-h-full", !flush && padding && "px-4 pb-4")}
                >
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
