import React, { forwardRef } from "react";
import type {
  NativeSyntheticEvent,
  TextLayoutEventData,
  TextProps as NativeTextProps,
  TextStyle,
} from "react-native";
import { Text as NativeText, useWindowDimensions } from "react-native";

import {
  extractMobileTextSizeClass,
  getMobileFontSize,
  mobileFontStyles,
} from "./font";
import { nativeClassName } from "./native-class-name";
import { grayColors, saColors } from "@swiss-activities/tokens/colors";

export enum TextWeight {
  DEFAULT = "default",
  MEDIUM = "medium",
  SEMIBOLD = "semibold",
  BOLD = "bold",
}

export type MobileTextProps = Omit<
  NativeTextProps,
  "ellipsizeMode" | "numberOfLines" | "onTextLayout"
> & {
  classNames?: string;
  weight?: TextWeight;
  numberOfLines?: number;
  ellipsizeMode?: "tail";
  isFontScalingNeeded?: boolean;
  onTextLayout?: (event: NativeSyntheticEvent<TextLayoutEventData>) => void;
};

const spacingScale: Record<string, number> = {
  "0": 0,
  "0.5": 2,
  "1": 4,
  "1.5": 6,
  "2": 8,
  "2.5": 10,
  "3": 12,
  "3.5": 14,
  "4": 16,
  "5": 20,
  "6": 24,
  "7": 28,
  "8": 32,
  "9": 36,
  "10": 40,
};

const textColors: Record<string, string> = {
  black: "#000000",
  white: "#ffffff",
  blue: saColors.blue,
  dark: saColors.dark,
  light: saColors.light,
  medium: saColors.medium,
  primary: saColors.primary,
  "grey-100": saColors.bg,
  "grey-200": saColors.border,
  "grey-300": grayColors["300"],
  "grey-400": grayColors["500"],
  "grey-500": saColors.blue,
  "gray-50": grayColors["50"],
  "gray-100": grayColors["100"],
  "gray-200": grayColors["200"],
  "gray-300": grayColors["300"],
  "gray-400": grayColors["400"],
  "gray-500": grayColors["500"],
  "gray-600": grayColors["600"],
  "gray-700": grayColors["700"],
  "gray-800": grayColors["800"],
  "gray-900": grayColors["900"],
  "pink-300": saColors.light,
  "pink-400": saColors.medium,
  "pink-500": saColors.primary,
  "pink-600": saColors.dark,
};

const hexToRgba = (hex: string, opacity: number) => {
  const value = hex.replace("#", "");
  const r = Number.parseInt(value.slice(0, 2), 16);
  const g = Number.parseInt(value.slice(2, 4), 16);
  const b = Number.parseInt(value.slice(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

const resolveTextColor = (value: string) => {
  const [colorName, opacityValue] = value.replace(/^!/, "").split("/");
  const color = textColors[colorName];

  if (!color) return undefined;
  if (!opacityValue) return color;

  const opacity = Number.parseInt(opacityValue, 10) / 100;

  return Number.isFinite(opacity) ? hexToRgba(color, opacity) : color;
};

const extractMobileTextStyle = (classString: string): TextStyle => {
  const style: TextStyle = {};

  classString
    .split(" ")
    .filter(Boolean)
    .forEach((rawClassName) => {
      const className = rawClassName.replace(/^!/, "");
      const colorName = className.startsWith("text-")
        ? className.replace("text-", "")
        : "";
      const color = colorName ? resolveTextColor(colorName) : undefined;

      if (color) {
        style.color = color;
        return;
      }

      const spacingMatch = className.match(/^(m[trblxy]?)-(.+)$/);

      if (spacingMatch) {
        const value = spacingScale[spacingMatch[2]];

        if (value === undefined) return;

        switch (spacingMatch[1]) {
          case "m":
            style.margin = value;
            break;
          case "mt":
            style.marginTop = value;
            break;
          case "mr":
            style.marginRight = value;
            break;
          case "mb":
            style.marginBottom = value;
            break;
          case "ml":
            style.marginLeft = value;
            break;
          case "mx":
            style.marginHorizontal = value;
            break;
          case "my":
            style.marginVertical = value;
            break;
        }

        return;
      }

      if (className === "flex-1") {
        style.flex = 1;
      } else if (className === "text-center") {
        style.textAlign = "center";
      } else if (className === "text-left") {
        style.textAlign = "left";
      } else if (className === "text-right") {
        style.textAlign = "right";
      } else if (className === "uppercase") {
        style.textTransform = "uppercase";
      } else if (className === "underline") {
        style.textDecorationLine = "underline";
      }
    });

  return style;
};

export const Text = forwardRef<
  NativeText,
  React.PropsWithChildren<MobileTextProps>
>(
  (
    {
      children,
      classNames,
      weight = TextWeight.DEFAULT,
      numberOfLines,
      ellipsizeMode,
      isFontScalingNeeded = true,
      onTextLayout,
      style,
      ...props
    },
    ref
  ) => {
    const styles = extractMobileTextSizeClass(classNames ?? "");
    const textStyle = extractMobileTextStyle(styles.rest);
    const { height } = useWindowDimensions();

    const weightStyle =
      weight === TextWeight.DEFAULT
        ? mobileFontStyles.inter
        : weight === TextWeight.MEDIUM
          ? mobileFontStyles.interMedium
          : weight === TextWeight.SEMIBOLD
            ? mobileFontStyles.interSemibold
            : mobileFontStyles.interBold;

    return (
      <NativeText
        ref={ref}
        {...nativeClassName(styles.rest)}
        style={[
          weightStyle,
          Number.isFinite(styles.fontSize) && Number.isFinite(styles.lineHeight)
            ? {
                fontSize: isFontScalingNeeded
                  ? getMobileFontSize(styles.fontSize, height)
                  : styles.fontSize,
                lineHeight: isFontScalingNeeded
                  ? getMobileFontSize(styles.lineHeight, height)
                  : styles.lineHeight,
              }
            : {},
          textStyle,
          style,
        ]}
        numberOfLines={numberOfLines ? numberOfLines : 0}
        ellipsizeMode={ellipsizeMode}
        onTextLayout={onTextLayout}
        {...props}
      >
        {children}
      </NativeText>
    );
  }
);

Text.displayName = "Text";
