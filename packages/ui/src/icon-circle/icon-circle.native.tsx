import React from "react";
import type { ReactNode } from "react";
import type { ViewProps } from "react-native";
import { View } from "react-native-css/components";
import { cn } from "../utils/cn";
import { Text } from "../text/text.native";

export type IconCircleProps = {
  icon: ReactNode;
  className?: string;
} & Omit<ViewProps, "children">;

export function IconCircle({
  icon,
  className,
  ...props
}: IconCircleProps) {
  const content =
    typeof icon === "string" || typeof icon === "number" ? (
      <Text as="span" className="text-lg text-primary">
        {icon}
      </Text>
    ) : (
      icon
    );

  return (
    <View
      className={cn(
        "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-light",
        className
      )}
      {...props}
    >
      {content}
    </View>
  );
}
