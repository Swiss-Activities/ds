import { cva } from "class-variance-authority";
import { textTypographyTokens } from "../tokens/typography";
import type { TextSize } from "./text.types";

export const textVariantSizes = [
  "3xl",
  "2xl",
  "xl",
  "lg",
  "default",
  "md2",
  "display",
  "sm",
  "sm2",
  "xs",
  "xs2",
  "none",
] as const;

export type TextVariantSize = (typeof textVariantSizes)[number];

export function resolveTextVariantSize(
  size: TextSize | undefined
): TextVariantSize {
  if (size === false) {
    return "none";
  }

  return size ?? "sm";
}

export const textStyles = cva("break-words", {
  variants: {
    size: {
      "3xl": textTypographyTokens["3xl"].webClassName,
      "2xl": textTypographyTokens["2xl"].webClassName,
      xl: textTypographyTokens.xl.webClassName,
      lg: textTypographyTokens.lg.webClassName,
      default: textTypographyTokens.default.webClassName,
      md2: textTypographyTokens.md2.webClassName,
      display: textTypographyTokens.display.webClassName,
      sm: textTypographyTokens.sm.webClassName,
      sm2: textTypographyTokens.sm2.webClassName,
      xs: textTypographyTokens.xs.webClassName,
      xs2: textTypographyTokens.xs2.webClassName,
      none: textTypographyTokens.none.webClassName,
    },
    bold: {
      true: "",
      false: "",
    },
    black: {
      true: "!text-black",
      false: "",
    },
    gray: {
      true: "!text-gray-500",
      false: "",
    },
  },
  compoundVariants: [
    {
      size: "sm",
      bold: true,
      class: "font-semibold",
    },
    {
      size: "none",
      bold: true,
      class: "font-semibold",
    },
  ],
  defaultVariants: {
    size: "sm",
    bold: false,
    black: false,
    gray: false,
  },
});
