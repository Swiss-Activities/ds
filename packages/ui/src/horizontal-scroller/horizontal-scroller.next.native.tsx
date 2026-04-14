"use client";

import type { PressableProps } from "react-native";
import { Pressable, View } from "react-native-css/components";
import Svg, {
  Defs,
  LinearGradient,
  Path,
  Rect,
  Stop,
} from "react-native-svg";
import { cn } from "../utils/cn";
import { useHorizontalScroller } from "./horizontal-scroller.context";
import type {
  BaseHorizontalScrollerNavProps,
  HorizontalScrollerVariant,
} from "./horizontal-scroller.types";

function ChevronRight({ color }: { color: string }) {
  return (
    <Svg width={14} height={14} viewBox="0 0 320 512" fill={color}>
      <Path d="M305 239c9.4 9.4 9.4 24.6 0 33.9L113 465c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l175-175L79 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L305 239z" />
    </Svg>
  );
}

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
    <View className="absolute bottom-0 right-0 top-0 z-10 justify-center">
      {!isBlack ? (
        <Svg
          pointerEvents="none"
          width="100%"
          height="100%"
          style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 32 }}
        >
          <Defs>
            <LinearGradient id="horizontal-next-gradient" x1="100%" y1="0%" x2="0%" y2="0%">
              <Stop offset="0%" stopColor={gradientColor} />
              <Stop offset="100%" stopColor={gradientColor} stopOpacity={0} />
            </LinearGradient>
          </Defs>
          <Rect width="100%" height="100%" fill="url(#horizontal-next-gradient)" />
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
            className="absolute right-0 h-12 w-9 rounded-l-xl bg-white"
            style={{
              shadowColor: "#000000",
              shadowOffset: { width: -10, height: 0 },
              shadowOpacity: 0.2,
              shadowRadius: 10,
              elevation: 6,
            }}
          />
        ) : null}
        <ChevronRight color={iconColor} />
      </Pressable>
    </View>
  );
}

export type HorizontalScrollerNextProps = BaseHorizontalScrollerNavProps &
  Omit<PressableProps, "children">;

export function HorizontalScrollerNext({
  children,
  className,
  variant,
  ...props
}: HorizontalScrollerNextProps) {
  const { canScrollRight, scrollNext } = useHorizontalScroller();

  if (!canScrollRight) return null;

  if (children) {
    return (
      <Pressable
        className={cn(className)}
        onPress={scrollNext}
        {...props}
      >
        {children}
      </Pressable>
    );
  }

  return <DefaultArrowButton variant={variant} onPress={scrollNext} />;
}
