import { createElement, type HTMLAttributes } from "react";
import { Icon } from "../icon/icon";
import { cn } from "../utils/cn";
import { ChevronLeft } from "../icons";
import { HorizontalScrollerRoot } from "../horizontal-scroller/horizontal-scroller.root";
import { HorizontalScrollerTrack } from "../horizontal-scroller/horizontal-scroller.track";
import { Text } from "../text";
import { Slider } from "../slider";
import type { BaseHeroProps, HeroTab } from "./hero.types";
import { renderImageValue } from "../utils/render-image";

export type HeroProps = BaseHeroProps &
  Omit<HTMLAttributes<HTMLDivElement>, "children" | "title">;

function BackLink({
  label,
  href,
  onClick,
}: {
  label: string;
  href?: string;
  onClick?: () => void;
}) {
  const tag = href ? "a" : "button";
  return createElement(
    tag,
    {
      className:
        "flex cursor-pointer appearance-none items-center gap-2 border-none bg-transparent p-0 text-white no-underline",
      ...(href ? { href } : { type: "button" as const, onClick }),
    },
    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-solid border-white bg-white/70 backdrop-blur-sm">
      <Icon icon={ChevronLeft} size="sm" className="text-blue" />
    </span>,
    <span className="text-sm font-medium text-white">{label}</span>
  );
}

function HeroTabs({
  tabs,
  selectedTabId,
  onSelectTab,
}: {
  tabs: HeroTab[];
  selectedTabId?: string;
  onSelectTab?: (id: string) => void;
}) {
  const activeId = selectedTabId ?? tabs[0]?.id;

  return (
    <div className="absolute inset-x-0 bottom-0 z-20 px-2 sm:px-4 lg:px-6">
      <HorizontalScrollerRoot activeId={activeId}>
        <HorizontalScrollerTrack className="gap-0 overflow-x-auto px-0 sm:justify-center [&>*]:snap-none">
          {tabs.map((tab) => {
            const isActive = tab.id === activeId;

            return (
              <li key={tab.id} data-id={tab.id} className="list-none">
                <button
                  type="button"
                  onClick={() => onSelectTab?.(tab.id)}
                  className={cn(
                    "group relative flex min-h-[56px] w-max shrink-0 cursor-pointer flex-col items-center gap-1.5 whitespace-nowrap border-none bg-transparent px-3 pb-2 pt-2.5 text-xs text-white sm:flex-row sm:px-4 sm:text-base lg:px-8 lg:pb-3 lg:pt-3.5 lg:text-lg",
                    isActive && "rounded-t-lg bg-white text-black"
                  )}
                >
                  {tab.icon ? (
                    <span
                      className={cn(
                        "flex shrink-0",
                        isActive ? "text-blue" : "text-white"
                      )}
                    >
                      {isActive && tab.activeIcon ? tab.activeIcon : tab.icon}
                    </span>
                  ) : null}
                  <span className="relative mt-auto sm:mt-0 lg:top-px">
                    {tab.label}
                  </span>
                </button>
              </li>
            );
          })}
        </HorizontalScrollerTrack>
      </HorizontalScrollerRoot>
    </div>
  );
}

export function Hero({
  title,
  image,
  images,
  renderImage,
  children,
  overlay,
  search,
  variant = "localized",
  tabs,
  selectedTabId,
  onSelectTab,
  backLabel,
  backHref,
  onBack,
  className,
  ...props
}: HeroProps) {
  const isGallery = images && images.length > 0;
  const hasBack = !!backLabel;
  const isFallback = variant === "fallback";
  const hasTabs = isFallback && !!tabs?.length;
  const isLocalized = variant === "localized";
  const hasBottomFade = !!title || isFallback;
  const hasOverlayStack = !!overlay || !!search;
  const hasSearchOnlyOverlay = !!search && !overlay;
  const hasTopFade = isFallback || hasSearchOnlyOverlay;
  const hasLocalizedContent = isLocalized && !!children;
  const localizedMediaClassName = hasLocalizedContent
    ? "h-[196px] sm:h-[240px] lg:h-[288px]"
    : "h-[196px] sm:h-[228px] lg:h-[264px]";
  const localizedContentClassName = "h-[120px]";
  const fallbackMediaClassName = "h-[316px] sm:h-[360px] lg:h-[408px]";

  return (
    <div className={cn("relative", className)} {...props}>
      <div className="relative overflow-hidden bg-blue lg:rounded-lg">
        <div
          className={cn(
            "relative w-full overflow-hidden",
            isLocalized && localizedMediaClassName,
            isFallback && fallbackMediaClassName
          )}
        >
          <div className="absolute inset-0 [&_img]:absolute [&_img]:inset-0 [&_img]:h-full [&_img]:w-full [&_img]:object-cover">
            {isGallery ? (
              <Slider
                slides={images}
                renderImage={renderImage}
                loop
                className="absolute inset-0"
              />
            ) : (
              renderImageValue(image, renderImage)
            )}
          </div>
          {hasBack && (
            <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-20 bg-gradient-to-b from-blue/50 to-transparent" />
          )}
          {hasTopFade ? (
            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-1/2 bg-gradient-to-b from-blue/55 to-transparent" />
          ) : null}
          {hasBottomFade && (
            <div
              className={cn(
                "pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1/2 bg-gradient-to-t to-transparent",
                isFallback ? "from-blue/75" : "from-blue"
              )}
            />
          )}
          {hasBack && (
            <div className="absolute left-3 top-3 z-30">
              <BackLink label={backLabel} href={backHref} onClick={onBack} />
            </div>
          )}
          {title && (
            <Text
              as="h2"
              size="xl"
              className="pointer-events-none absolute bottom-3 left-4 z-10 max-w-[90%] !text-white sm:left-6 lg:left-8"
            >
              {title}
            </Text>
          )}
          {hasTabs && tabs ? (
            <HeroTabs
              tabs={tabs}
              selectedTabId={selectedTabId}
              onSelectTab={onSelectTab}
            />
          ) : null}
        </div>
        {children && (
          <div
            className={cn(
              isLocalized
                ? cn(
                    localizedContentClassName,
                    "flex items-center px-4 pb-4 sm:px-6 sm:pb-6 lg:px-8 lg:pb-8"
                  )
                : "p-4 sm:p-6 lg:p-8"
            )}
          >
            {isLocalized ? <div className="w-full">{children}</div> : children}
          </div>
        )}
      </div>
      {hasOverlayStack ? (
        <div
          className={cn(
            "pointer-events-none absolute inset-0 z-40 flex justify-center px-4 sm:px-8 md:px-10 lg:px-12",
            isFallback
              ? "items-start pt-12 lg:pt-16"
              : hasSearchOnlyOverlay
                ? "items-start pt-10 sm:pt-12 lg:pt-16"
                : "items-center py-6 sm:py-8 md:py-10 lg:py-12"
          )}
        >
          <div
            className={cn(
              "pointer-events-auto relative flex w-full max-w-5xl flex-col items-center justify-center",
              isFallback && search ? "gap-6 sm:gap-8" : "gap-0"
            )}
          >
            {overlay ? (
              <div className="relative flex flex-col items-center justify-center">
                {overlay}
              </div>
            ) : null}
            {search ? (
              <div
                className={cn(
                  "flex w-full items-center justify-center",
                  hasSearchOnlyOverlay && "mt-4"
                )}
              >
                {search}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}
