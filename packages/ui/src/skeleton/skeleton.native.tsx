import { useEffect } from "react";
import type { ViewProps } from "react-native";
import { View } from "react-native-css/components";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { cn } from "../utils/cn";
import type { BaseSkeletonProps } from "./skeleton.types";
import {
  skeletonContainerStyles,
  skeletonItemStyles,
} from "./skeleton.variants.shared";

export type SkeletonProps = BaseSkeletonProps & Omit<ViewProps, "children">;

export function Skeleton({
  loading,
  full = false,
  size = "sm",
  amount = 2,
  className,
  classNameItems,
  ...props
}: SkeletonProps) {
  const opacity = useSharedValue(1);

  useEffect(() => {
    if (loading) {
      opacity.value = withRepeat(withTiming(0.4, { duration: 1500 }), -1, true);
    } else {
      opacity.value = withTiming(0, { duration: 200 });
    }
  }, [loading, opacity]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <View
      className={cn(
        skeletonContainerStyles({ full, fadeOut: !loading }),
        className
      )}
      {...props}
    >
      {Array.from({ length: full ? 1 : amount }).map((_, index) => (
        <Animated.View
          key={`skeleton-${index}`}
          style={animatedStyle}
          className={cn(
            skeletonItemStyles({ size, full }),
            "bg-gray-200",
            classNameItems
          )}
        />
      ))}
    </View>
  );
}
