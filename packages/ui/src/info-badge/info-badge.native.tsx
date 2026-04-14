import type { ViewProps } from "react-native";
import { View } from "react-native-css/components";
import { cn } from "../utils/cn";
import { Text } from "../text/text.native";
import type { BaseInfoBadgeProps } from "./info-badge.types";

export type InfoBadgeProps = BaseInfoBadgeProps &
  Omit<ViewProps, "children">;

export function InfoBadge({
  icon,
  title,
  subtitle,
  className,
  ...props
}: InfoBadgeProps) {
  return (
    <View className={cn("flex flex-row items-center gap-2", className)} {...props}>
      <View className="flex shrink-0 text-gray-700 [&_svg]:h-7 [&_svg]:w-7">
        {icon}
      </View>
      <View className="flex flex-col">
        <Text as="span" size="xs" black bold className="!leading-tight">
          {title}
        </Text>
        {subtitle && (
          <Text as="span" size="xs" gray className="!leading-tight">
            {subtitle}
          </Text>
        )}
      </View>
    </View>
  );
}
