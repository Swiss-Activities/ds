"use client";

import type { PressableProps } from "react-native";
import { Pressable, View } from "react-native-css/components";
import Svg, {
  Defs,
  LinearGradient,
  Rect,
  Stop,
} from "react-native-svg";
import { cn } from "../utils/cn";
import { Icon } from "../icon/icon.native";
import { ChevronLeft } from "../icons/index.native";
import { useHorizontalScroller } from "./horizontal-scroller.context";
import type {
  BaseHorizontalScrollerNavProps,
  HorizontalScrollerVariant,
} from "./horizontal-scroller.types";

function DefaultArrowButton({
  variant = "white",
  onPress,
}: {
  variant?: HorizontalScrollerVariant;
  onPress: () => void;
}) {
  const isBlack = variant === "black";
  const gradientColor = variant === "bg" ? "#f9fafb" : "#ffffff";
  const iconColor = isBlack ? "#ffffff" : "#171717";

  return (
    <View className="absolute bottom-0 left-0 top-0 z-10 justify-center">
      {!isBlack ? (
        <Svg
          pointerEvents="none"
          width="100%"
          height="100%"
          style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 32 }}
        >
          <Defs>
            <LinearGradient id="horizontal-prev-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <Stop offset="0%" stopColor={gradientColor} />
              <Stop offset="100%" stopColor={gradientColor} stopOpacity={0} />
            </LinearGradient>
          </Defs>
          <Rect width="100%" height="100%" fill="url(#horizontal-prev-gradient)" />
        </Svg>
      ) : null}
      <Pressable
        className={cn("relative items-center justify-center", {
          "h-full w-8": !isBlack,
          "h-8 w-8 rounded-full bg-white/20": isBlack,
        })}
        onPress={onPress}
      >
        {variant === "white-button" ? (
          <View
            className="absolute left-0 h-12 w-9 rounded-r-xl bg-white"
            style={{
              shadowColor: "#000000",
              shadowOffset: { width: 10, height: 0 },
              shadowOpacity: 0.2,
              shadowRadius: 10,
              elevation: 6,
            }}
          />
        ) : null}
        <Icon icon={ChevronLeft} size="md" color={iconColor} />
      </Pressable>
    </View>
  );
}

export type HorizontalScrollerPrevProps = BaseHorizontalScrollerNavProps &
  Omit<PressableProps, "children">;

export function HorizontalScrollerPrev({
  children,
  className,
  variant,
  ...props
}: HorizontalScrollerPrevProps) {
  const { canScrollLeft, scrollPrev } = useHorizontalScroller();

  if (!canScrollLeft) return null;

  if (children) {
    return (
      <Pressable
        className={cn(className)}
        onPress={scrollPrev}
        {...props}
      >
        {children}
      </Pressable>
    );
  }

  return <DefaultArrowButton variant={variant} onPress={scrollPrev} />;
}
