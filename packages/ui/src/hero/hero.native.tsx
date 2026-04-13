import type { ViewProps } from "react-native";
import { View } from "react-native-css/components";
import { cn } from "../utils/cn";
import { Text } from "../text/text.native";
import type { BaseHeroProps } from "./hero.types";

export type HeroProps = BaseHeroProps & Omit<ViewProps, "children">;

export function Hero({
  title,
  image,
  children,
  className,
  ...props
}: HeroProps) {
  return (
    <View
      className={cn(
        "relative overflow-hidden rounded-lg bg-blue",
        className
      )}
      {...props}
    >
      <View className="relative aspect-[4/3] w-full overflow-hidden">
        {image}
        <View className="absolute inset-0 bg-gradient-to-t from-blue/90 via-blue/30 to-transparent" />
        <Text
          as="h2"
          size="2xl"
          className="absolute bottom-3 left-4 !text-white"
        >
          {title}
        </Text>
      </View>
      {children && <View className="p-4">{children}</View>}
    </View>
  );
}
