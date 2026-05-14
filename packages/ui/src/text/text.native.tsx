import type { StyleProp, TextProps as NativeTextProps, TextStyle } from "react-native";
import { Text as NativeText } from "react-native-css/components";
import { cn } from "../utils/cn";
import type { BaseTextProps } from "./text.types";
import {
  type TextVariant,
  resolveTextVariantStyle,
} from "./text.native.variant";
import {
  type TextVariantSize,
  resolveTextVariantSize,
  textStyles,
} from "./text.variants.shared";

export type { TextVariant } from "./text.native.variant";

export type TextProps = BaseTextProps &
  Omit<NativeTextProps, "children"> & {
    variant?: TextVariant;
  };

export function Text({
  children = null,
  className,
  size,
  as = "p",
  bold = false,
  black = false,
  gray = false,
  variant,
  style,
  ...props
}: TextProps) {
  const variantStyle = resolveTextVariantStyle(variant);
  const normalizedSize: TextVariantSize = variant
    ? "none"
    : resolveTextVariantSize(size);
  const composedStyle: StyleProp<TextStyle> = variantStyle
    ? style
      ? [variantStyle, style]
      : variantStyle
    : style;

  return (
    <NativeText
      className={cn(
        textStyles({
          size: normalizedSize,
          bold,
          black,
          gray,
        }),
        className
      )}
      style={composedStyle}
      {...props}
    >
      {children ?? ""}
    </NativeText>
  );
}
