import type { ViewProps } from "react-native";
import { View } from "react-native-css/components";
import { cn } from "../utils/cn";
import type { BaseImageCardProps } from "./image-card.types";

export type ImageCardProps = BaseImageCardProps & ViewProps;

export function ImageCard({
  image,
  button,
  children,
  className,
  ...props
}: ImageCardProps) {
  return (
    <View
      className={cn(
        "relative flex flex-col justify-between overflow-hidden rounded-lg px-6 py-8",
        className
      )}
      {...props}
    >
      <View className="absolute inset-0">
        {image}
        <View className="absolute inset-0 bg-gradient-to-b from-blue" />
      </View>
      <View className="relative z-10 flex flex-col gap-8">
        {children}
        {button}
      </View>
    </View>
  );
}
