import type { ViewProps } from "react-native";
import { View } from "react-native-css/components";
import { cn } from "../utils/cn";
import { Text } from "../text/text.native";
import { Slider } from "../slider/slider.native";
import type { BaseHeroProps } from "./hero.types";

export type HeroProps = BaseHeroProps & Omit<ViewProps, "children">;

export function Hero({
  title,
  image,
  images,
  children,
  topLeft,
  className,
  ...props
}: HeroProps) {
  const isGallery = images && images.length > 0;

  return (
    <View
      className={cn(
        "relative overflow-hidden rounded-lg bg-blue",
        className
      )}
      {...props}
    >
      <View className="relative aspect-[5/2] w-full overflow-hidden">
        {isGallery ? (
          <Slider slides={images} className="absolute inset-0" />
        ) : (
          image
        )}
        {topLeft && (
          <View className="absolute inset-x-0 top-0 z-20 h-16 bg-gradient-to-b from-black/30 to-transparent" />
        )}
        <View className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blue to-transparent" />
        {topLeft && (
          <View className="absolute left-4 top-3 z-20">
            {topLeft}
          </View>
        )}
        <Text
          as="h2"
          size="2xl"
          className="absolute bottom-3 left-4 z-10 !text-white"
        >
          {title}
        </Text>
      </View>
      {children && <View className="p-4">{children}</View>}
    </View>
  );
}
