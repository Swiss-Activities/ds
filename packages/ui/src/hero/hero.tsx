import { createElement, type HTMLAttributes } from "react";
import { Icon } from "../icon/icon";
import { cn } from "../utils/cn";
import { ChevronLeft } from "../icons";
import { HorizontalScrollerRoot } from "../horizontal-scroller/horizontal-scroller.root";
import { HorizontalScrollerTrack } from "../horizontal-scroller/horizontal-scroller.track";
import { Text } from "../text";
import { Slider } from "../slider";
import type { BaseHeroProps, HeroTab } from "./hero.types";

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
        "flex cursor-pointer items-center gap-2 bg-transparent p-0 text-white no-underline",
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
                      {tab.icon}
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
  const isFallback = variant === "fallback" && !!tabs?.length;
  const isLocalized = variant === "localized";
  const hasBottomFade = !!title || isFallback;
  const hasOverlay = !!overlay || !!search;
  const localizedMediaClassName = "h-[196px] sm:h-[228px] lg:h-[264px]";
  const localizedContentClassName = "h-[120px] sm:h-[132px] lg:h-[144px]";
  const fallbackMediaClassName = "h-[316px] sm:h-[360px] lg:h-[408px]";

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-blue sm:rounded-lg",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "relative w-full overflow-hidden [&_img]:absolute [&_img]:inset-0 [&_img]:h-full [&_img]:w-full [&_img]:object-cover",
          isLocalized && localizedMediaClassName,
          isFallback && fallbackMediaClassName
        )}
      >
        {isGallery ? (
          <Slider slides={images} loop className="absolute inset-0" />
        ) : (
          image
        )}
        {hasBack && (
          <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-20 bg-gradient-to-b from-blue/50 to-transparent" />
        )}
        {isFallback ? (
          <div className="pointer-events-none absolute inset-0 z-10 bg-blue/35" />
        ) : null}
        {hasBottomFade && (
          <div
            className={cn(
              "pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t to-transparent",
              isFallback ? "from-blue/90" : "from-blue"
            )}
          />
        )}
        {hasBack && (
          <div className="absolute left-3 top-3 z-30">
            <BackLink label={backLabel} href={backHref} onClick={onBack} />
          </div>
        )}
        {hasOverlay ? (
          <div
            className={cn(
              isFallback
                ? "relative z-20 flex items-start justify-center px-4 pt-14 pb-20 sm:px-8 sm:pt-16 sm:pb-24 md:px-10 md:pt-20 md:pb-28 lg:px-12 lg:pt-24 lg:pb-40 xl:pt-28 xl:pb-44"
                : "absolute inset-0 z-20 flex items-center justify-center px-4 py-6 sm:px-8 sm:py-8 md:px-10 md:py-10 lg:px-12 lg:py-12"
            )}
          >
            <div className="pointer-events-auto relative flex w-full max-w-5xl flex-col items-center justify-center gap-6 sm:gap-8">
              {overlay ? (
                <div className="relative flex flex-col items-center justify-center">
                  {overlay}
                </div>
              ) : null}
              {search ? (
                <div className="flex w-full items-center justify-center">
                  {search}
                </div>
              ) : null}
            </div>
          </div>
        ) : null}
        {title && (
          <Text
            as="h2"
            size="xl"
            className="pointer-events-none absolute bottom-3 left-4 z-10 max-w-[90%] !text-white sm:left-6 lg:left-8"
          >
            {title}
          </Text>
        )}
        {isFallback && tabs ? (
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
                  "flex items-center px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-5"
                )
              : "p-4 sm:p-6 lg:p-8"
          )}
        >
          {isLocalized ? <div className="w-full">{children}</div> : children}
        </div>
      )}
    </div>
  );
}
