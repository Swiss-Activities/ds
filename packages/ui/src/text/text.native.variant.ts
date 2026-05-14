import type { StyleProp, TextStyle } from "react-native";
import {
  type TypographyBreakpoint,
  type TypographyRole,
  getNativeTypographyRoleStyle,
  typographyRoles,
} from "../tokens/typography";

export const textVariantList = Object.keys(typographyRoles) as TypographyRole[];

export type TextVariant = TypographyRole;

export function resolveTextVariantStyle(
  variant: TextVariant | undefined,
  breakpoint: TypographyBreakpoint = "base"
): StyleProp<TextStyle> | undefined {
  if (!variant) {
    return undefined;
  }
  const style = getNativeTypographyRoleStyle(variant, breakpoint);
  return style as StyleProp<TextStyle>;
}
