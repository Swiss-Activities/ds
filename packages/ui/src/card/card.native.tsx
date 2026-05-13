import type { ViewProps, ViewStyle } from "react-native";
import { View } from "react-native";
import { dsMobileTokens } from "../tokens/mobile";
import { cn } from "../utils/cn";
import type { BaseCardProps } from "./card.types";
import { cardStyles } from "./card.variants.native";

export type CardProps = BaseCardProps & Omit<ViewProps, "children">;

export function Card({
  children = null,
  className,
  elevation = "default",
  noPadding = false,
  render,
  style,
  ...props
}: CardProps) {
  const mergedClassName = cn(cardStyles({ elevation, noPadding }), className);
  const tokens = dsMobileTokens.components.card;
  const tokenStyle: ViewStyle = {
    backgroundColor: tokens.background,
    borderColor: tokens.border,
    borderRadius: tokens.radius,
    borderWidth: 1,
    padding: noPadding ? 0 : tokens.padding,
    ...(elevation === "lg" ? tokens.shadowLg : tokens.shadow),
  };

  if (render) return render({ className: mergedClassName, children });

  return (
    <View
      style={[tokenStyle, style]}
      {...props}
    >
      {children}
    </View>
  );
}
