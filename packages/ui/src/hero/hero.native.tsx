import type { ReactNode } from "react";
import type { ViewProps } from "react-native";
import { ScrollView } from "react-native";
import { Pressable, View } from "react-native-css/components";
import Svg, { Defs, LinearGradient, Rect, Stop } from "react-native-svg";
import { Icon } from "../icon/icon.native";
import { ChevronLeft } from "../icons/index.native";
import { Slider } from "../slider/slider.native";
import { Text } from "../text/text.native";
import { saColors } from "../tokens/colors";
import { cn } from "../utils/cn";
import type { BaseHeroProps, HeroTab } from "./hero.types";

export type HeroProps = BaseHeroProps & Omit<ViewProps, "children">;

function TopFadeOverlay() {
  return (
    <View className="absolute inset-x-0 top-0 z-20 h-20">
      <Svg
        pointerEvents="none"
        width="100%"
        height="100%"
        style={{ position: "absolute", left: 0, top: 0, bottom: 0 }}
      >
        <Defs>
          <LinearGradient
            id="hero-top-gradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <Stop offset="0%" stopColor={saColors.blue} stopOpacity={0.5} />
            <Stop offset="100%" stopColor={saColors.blue} stopOpacity={0} />
          </LinearGradient>
        </Defs>
        <Rect width="100%" height="100%" fill="url(#hero-top-gradient)" />
      </Svg>
    </View>
  );
}

function BottomFadeOverlay() {
  return (
    <View className="absolute inset-x-0 bottom-0 h-1/2">
      <Svg
        pointerEvents="none"
        width="100%"
        height="100%"
        style={{ position: "absolute", left: 0, top: 0, bottom: 0 }}
      >
        <Defs>
          <LinearGradient
            id="hero-bottom-gradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <Stop offset="0%" stopColor={saColors.blue} stopOpacity={0} />
            <Stop offset="100%" stopColor={saColors.blue} />
          </LinearGradient>
        </Defs>
        <Rect width="100%" height="100%" fill="url(#hero-bottom-gradient)" />
      </Svg>
    </View>
  );
}

function FallbackTintOverlay() {
  return (
    <View className="absolute inset-x-0 top-0 z-10 h-1/2">
      <Svg
        pointerEvents="none"
        width="100%"
        height="100%"
        style={{ position: "absolute", left: 0, top: 0, bottom: 0 }}
      >
        <Defs>
          <LinearGradient
            id="hero-fallback-top-gradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <Stop offset="0%" stopColor={saColors.blue} stopOpacity={0.55} />
            <Stop offset="100%" stopColor={saColors.blue} stopOpacity={0} />
          </LinearGradient>
        </Defs>
        <Rect
          width="100%"
          height="100%"
          fill="url(#hero-fallback-top-gradient)"
        />
      </Svg>
    </View>
  );
}

function BackButton({
  label,
  onPress,
}: {
  label: string;
  onPress?: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      className="flex flex-row items-center gap-2 bg-transparent"
    >
      <View className="flex h-6 w-6 items-center justify-center rounded-full border border-solid border-white bg-white/70">
        <Icon icon={ChevronLeft} size="sm" color="#002f49" />
      </View>
      <Text as="span" size="sm" className="!text-white">
        {label}
      </Text>
    </Pressable>
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
    <View className="absolute inset-x-0 bottom-0 z-20 px-2">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ alignItems: "flex-end" }}
      >
        {tabs.map((tab) => {
          const isActive = tab.id === activeId;

          return (
            <Pressable
              key={tab.id}
              onPress={() => onSelectTab?.(tab.id)}
              className={cn(
                "mr-1 flex min-h-[56px] shrink-0 flex-col items-center gap-1.5 bg-transparent px-3 pb-2 pt-2.5",
                isActive && "rounded-t-lg bg-white"
              )}
            >
              {tab.icon ? (
                <View className={cn(isActive ? "text-blue" : "text-white")}>
                  {isActive && tab.activeIcon ? tab.activeIcon : tab.icon}
                </View>
              ) : null}
              <Text
                size="xs"
                className={cn(isActive ? "!text-black" : "!text-white")}
              >
                {tab.label}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
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
  const hasOverlay = !!overlay || !!search;
  const localizedMediaClassName = "h-[220px] sm:h-[260px] lg:h-[300px]";
  const localizedContentClassName = "h-[96px] sm:h-[100px] lg:h-[108px]";
  const fallbackMediaClassName = "h-[316px] sm:h-[360px] lg:h-[408px]";

  return (
    <View
      className={cn("relative overflow-hidden bg-blue", className)}
      {...props}
    >
      <View
        className={cn(
          "relative w-full overflow-hidden",
          isLocalized && localizedMediaClassName,
          isFallback && fallbackMediaClassName
        )}
      >
        {isGallery ? (
          <Slider slides={images} className="absolute inset-0" />
        ) : (
          (image as ReactNode)
        )}
        {hasBack && <TopFadeOverlay />}
        {isFallback && <FallbackTintOverlay />}
        {hasBottomFade && <BottomFadeOverlay />}
        {hasBack && (
          <View className="absolute left-4 top-3 z-20">
            <BackButton label={backLabel} onPress={onBack} />
          </View>
        )}
        {hasOverlay ? (
          <View
            className={cn(
              isFallback
                ? "absolute inset-0 z-20 flex items-start justify-center px-4 pb-20 pt-14"
                : "absolute inset-0 z-20 flex items-center justify-center px-4 py-6"
            )}
          >
            <View className="relative flex w-full flex-col items-center justify-center gap-6">
              {overlay ? <View>{overlay}</View> : null}
              {search ? (
                <View className="flex w-full items-center justify-center">
                  {search}
                </View>
              ) : null}
            </View>
          </View>
        ) : null}
        {title && (
          <Text
            as="h2"
            size="xl"
            className="absolute bottom-3 left-4 z-10 !text-white"
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
      </View>
      {children && (
        <View
          className={cn(
            isLocalized
              ? cn(localizedContentClassName, "flex items-center px-4 py-3")
              : "p-4"
          )}
        >
          {isLocalized ? <View className="w-full">{children}</View> : children}
        </View>
      )}
    </View>
  );
}
