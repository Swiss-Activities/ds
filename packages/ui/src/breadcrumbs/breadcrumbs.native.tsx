import type { ViewProps } from "react-native";
import { ScrollView, Text, View } from "react-native-css/components";
import Svg, {
  Defs,
  LinearGradient,
  Rect,
  Stop,
} from "react-native-svg";
import { cn } from "../utils/cn";
import type { BaseBreadcrumbsProps } from "./breadcrumbs.types";

export type BreadcrumbsProps = BaseBreadcrumbsProps &
  Omit<ViewProps, "children">;

export function Breadcrumbs({
  items,
  white = false,
  ignoreLast = false,
  gradient = false,
  className,
  ...props
}: BreadcrumbsProps) {
  return (
    <View className={cn("relative", className)} {...props}>
      {gradient ? (
        <Svg
          pointerEvents="none"
          width={48}
          height="100%"
          style={{ position: "absolute", right: 0, top: 0, bottom: 0, zIndex: 10 }}
        >
          <Defs>
            <LinearGradient id="breadcrumbs-gradient" x1="100%" y1="0%" x2="0%" y2="0%">
              <Stop
                offset="0%"
                stopColor={gradient === "gray" ? "#fafafa" : "#ffffff"}
              />
              <Stop
                offset="100%"
                stopColor={gradient === "gray" ? "#fafafa" : "#ffffff"}
                stopOpacity={0}
              />
            </LinearGradient>
          </Defs>
          <Rect width="100%" height="100%" fill="url(#breadcrumbs-gradient)" />
        </Svg>
      ) : null}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="flex flex-row items-center pe-10">
          {items.map((item, index) => {
            const isLast = ignoreLast && items.length === index + 1;

            return (
              <View key={item.href} className="flex flex-row items-center">
                <Text
                  className={cn("text-xs font-medium", {
                    "text-gray-500": isLast && !white,
                    "text-white/70": isLast && white,
                    "text-gray-700": !isLast && !white,
                    "text-white": !isLast && white,
                  })}
                >
                  {item.label}
                </Text>
                {items.length > index + 1 && (
                  <Text
                    className={cn("px-1.5 text-xs", {
                      "text-white/50": white,
                      "text-gray-500": !white,
                    })}
                  >
                    ›
                  </Text>
                )}
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
