import { forwardRef } from "react";
import type { GestureResponderEvent, ImageProps, ViewProps } from "react-native";
import { Image } from "react-native";
import { Text, TouchableOpacity, View } from "react-native-css/components";
import { Icon } from "../icon/icon.native";
import { MapPin, Mountain, Store, Ticket } from "../icons/index.native";
import { cn } from "../utils/cn";
import type {
  BaseSearchBarResultItemProps,
  SearchBarResultVariant,
} from "./search-bar.types";

function getFallbackIcon(variant: SearchBarResultVariant) {
  switch (variant) {
    case "location":
      return MapPin;
    case "poi":
      return Mountain;
    case "activity":
    case "activity-listing":
      return Ticket;
    case "supplier":
      return Store;
    case "discovery":
    default:
      return MapPin;
  }
}

export type SearchBarResultItemProps = BaseSearchBarResultItemProps &
  Omit<ViewProps, "title" | "onBlur" | "onFocus"> & {
    imageProps?: Omit<ImageProps, "source">;
    onPress?: ((event: GestureResponderEvent) => void) | undefined;
  };

export const SearchBarResultItem = forwardRef<any, SearchBarResultItemProps>(
  function SearchBarResultItem(
    {
      className,
      classNameImage,
      detail,
      distance,
      icon,
      image,
      imageAlt,
      imageProps,
      imageSrc,
      onPress,
      subtitle,
      title,
      variant,
      ...props
    },
    ref
  ) {
    const media = image ?? (
      imageSrc ? (
        <Image
          {...imageProps}
          source={{ uri: imageSrc }}
          accessibilityLabel={imageAlt}
          className="h-full w-full"
          resizeMode="cover"
        />
      ) : null
    );
    const fallbackIcon = getFallbackIcon(variant);
    const content = (
      <>
        <View
          className={cn(
            "mr-4 flex h-[45px] w-[45px] shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 text-gray-500",
            classNameImage
          )}
        >
          {media ? media : icon ? icon : <Icon icon={fallbackIcon} size="sm" />}
        </View>
        <View className="min-w-0 flex-1">
          <Text className="text-sm font-semibold leading-tight text-black">
            {title}
          </Text>
          {subtitle || detail ? (
            <View className="mt-0.5 flex flex-row items-center gap-1">
              {subtitle ? (
                <Text
                  numberOfLines={1}
                  className="shrink text-[11px] font-medium text-gray-500"
                >
                  {subtitle}
                </Text>
              ) : null}
              {subtitle && detail ? (
                <Text className="text-[11px] font-medium text-gray-500">|</Text>
              ) : null}
              {detail ? (
                <Text
                  numberOfLines={1}
                  className="shrink text-[11px] font-medium text-gray-500"
                >
                  {detail}
                </Text>
              ) : null}
            </View>
          ) : null}
        </View>
        {distance ? (
          <View className="ml-3 flex shrink-0 flex-row items-center gap-1">
            <Icon icon={MapPin} size="xs" />
            <Text className="text-[11px] font-medium text-gray-500">
              {distance}
            </Text>
          </View>
        ) : null}
      </>
    );

    if (onPress) {
      return (
        <TouchableOpacity
          {...props}
          accessibilityRole="button"
          ref={ref}
          onPress={onPress}
          className={cn(
            "flex flex-row items-center rounded-lg px-3.5 py-2",
            className
          )}
        >
          {content}
        </TouchableOpacity>
      );
    }

    return (
      <View
        {...props}
        ref={ref}
        className={cn(
          "flex flex-row items-center rounded-lg px-3.5 py-2",
          className
        )}
      >
        {content}
      </View>
    );
  }
);
