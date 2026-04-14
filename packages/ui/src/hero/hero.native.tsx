import type { ViewProps } from "react-native";
import { Pressable, View } from "react-native-css/components";
import Svg, { Defs, LinearGradient, Rect, Stop } from "react-native-svg";
import { cn } from "../utils/cn";
import { Icon } from "../icon/icon.native";
import { ChevronLeft } from "../icons/index.native";
import { Text } from "../text/text.native";
import { Slider } from "../slider/slider.native";
import { saColors } from "../tokens/colors";
import type { BaseHeroProps } from "./hero.types";

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
          <LinearGradient id="hero-top-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
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
          <LinearGradient id="hero-bottom-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop offset="0%" stopColor={saColors.blue} stopOpacity={0} />
            <Stop offset="100%" stopColor={saColors.blue} />
          </LinearGradient>
        </Defs>
        <Rect width="100%" height="100%" fill="url(#hero-bottom-gradient)" />
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
      className={cn("relative overflow-hidden bg-blue", className)}
      {...props}
    >
      <View className="relative aspect-video w-full overflow-hidden">
        {isGallery ? (
          <Slider slides={images} className="absolute inset-0" />
        ) : (
          image
        )}
        {hasBack && <TopFadeOverlay />}
        {title && <BottomFadeOverlay />}
        {hasBack && (
          <View className="absolute left-4 top-3 z-20">
            <BackButton label={backLabel} onPress={onBack} />
          </View>
        )}
        {title && (
          <Text
            as="h2"
            size="xl"
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
