import type { ViewProps } from "react-native";
import { View } from "react-native-css/components";
import { cn } from "../utils/cn";
import type { BaseHeaderProps, BaseHeaderSectionProps } from "./header.types";

export type HeaderProps = BaseHeaderProps & ViewProps;

export function Header({ children, className, ...props }: HeaderProps) {
  return (
    <View
      className={cn(
        "h-14 flex-row items-center justify-between bg-white px-4",
        className
      )}
      {...props}
    >
      {children}
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
