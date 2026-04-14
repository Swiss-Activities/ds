import type { ViewProps } from "react-native";
import { Pressable, View } from "react-native-css/components";
import { cn } from "../utils/cn";
import { Icon } from "../icon/icon.native";
import { ChevronLeft } from "../icons/index.native";
import { Text } from "../text/text.native";
import { Slider } from "../slider/slider.native";
import type { BaseHeroProps } from "./hero.types";

export type HeroProps = BaseHeroProps & Omit<ViewProps, "children">;

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

export function Hero({
  title,
  image,
  images,
  children,
  backLabel,
  onBack,
  className,
  ...props
}: HeroProps) {
  const isGallery = images && images.length > 0;
  const hasBack = !!backLabel;

  return (
    <View
      className={cn("relative overflow-hidden rounded-lg bg-blue", className)}
      {...props}
    >
      <View className="relative aspect-[5/2] w-full overflow-hidden">
        {isGallery ? (
          <Slider slides={images} className="absolute inset-0" />
        ) : (
          image
        )}
        {hasBack && (
          <View className="absolute inset-x-0 top-0 z-20 h-16 bg-gradient-to-b from-black/30 to-transparent" />
        )}
        {title && (
          <View className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blue to-transparent" />
        )}
        {hasBack && (
          <View className="absolute left-4 top-3 z-20">
            <BackButton label={backLabel} onPress={onBack} />
          </View>
        )}
        {title && (
          <Text
            as="h2"
            size="2xl"
            className="absolute bottom-3 left-4 z-10 !text-white"
          >
            {title}
          </Text>
        )}
      </View>
      {children && <View className="p-4">{children}</View>}
    </View>
  );
}
