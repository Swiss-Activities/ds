import React, { forwardRef } from "react";
import type {
  NativeSyntheticEvent,
  TextLayoutEventData,
  TextProps as NativeTextProps,
} from "react-native";
import { Text as NativeText, useWindowDimensions } from "react-native";

import {
  extractMobileTextSizeClass,
  getMobileFontSize,
  mobileFontStyles,
} from "./font";
import { nativeClassName } from "./native-class-name";

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
