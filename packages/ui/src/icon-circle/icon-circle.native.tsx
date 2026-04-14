import type { ReactNode } from "react";
import type { ViewProps } from "react-native";
import { View } from "react-native-css/components";
import { cn } from "../utils/cn";

export type IconCircleProps = {
  icon: ReactNode;
  className?: string;
} & Omit<ViewProps, "children">;

export function IconCircle({
  icon,
  className,
  ...props
}: IconCircleProps) {
  return (
    <View
      className={cn(
        "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-light",
        className
      )}
      {...props}
    >
      {icon}
    </View>
  );
}
