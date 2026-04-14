import type { ViewProps } from "react-native";
import { View } from "react-native-css/components";
import { Skeleton } from "../skeleton/skeleton.native";
import { cn } from "../utils/cn";
import type { BaseHeaderProps, BaseHeaderSectionProps } from "./header.types";

export type HeaderProps = BaseHeaderProps & ViewProps;

export function Header({
  children,
  className,
  loading,
  ...props
}: HeaderProps) {
  return (
    <View
      className={cn(
        "z-50 h-14 flex-row items-center justify-between border-b border-solid border-gray-200 bg-white px-4",
        className
      )}
      {...props}
    >
      {loading ? (
        <Skeleton loading amount={1} size="xs" className="w-full" />
      ) : (
        children
      )}
    </View>
  );
}

export type HeaderSectionProps = BaseHeaderSectionProps & ViewProps;

Header.Left = function HeaderLeft({
  children,
  className,
  ...props
}: HeaderSectionProps) {
  return (
    <View className={cn("flex-row items-center gap-2", className)} {...props}>
      {children}
    </View>
  );
};

Header.Right = function HeaderRight({
  children,
  className,
  ...props
}: HeaderSectionProps) {
  return (
    <View className={cn("flex-row items-center gap-2", className)} {...props}>
      {children}
    </View>
  );
};
