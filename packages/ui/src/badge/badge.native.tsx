import type { ViewProps } from "react-native";
import { View } from "react-native-css/components";
import { cn } from "../utils/cn";
import { Text } from "../text/text.native";
import type { BaseBadgeProps } from "./badge.types";

export type BadgeProps = BaseBadgeProps & Omit<ViewProps, "children">;

export function Badge({ children, variant = "info", className, ...props }: BadgeProps) {
  return (
    <View
      className={cn(
        "rounded-md px-2 py-0.5",
        {
          demand: "bg-orange/10",
          info: "bg-gray-100",
          overlay: "bg-black/50",
          text: "bg-transparent",
        }[variant],
        className
      )}
      {...props}
    >
      <Text
        as="span"
        size="xs"
        bold
        className={cn({
          "!text-orange": variant === "demand",
          "!text-gray-700": variant === "info" || variant === "text",
          "!text-white": variant === "overlay",
        })}
      >
        {children}
      </Text>
    </View>
  );
}
