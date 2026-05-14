import { Dimensions, Platform, StatusBar, StyleSheet } from "react-native";

import { dsMobileTokens } from "@swiss-activities/tokens/mobile";
import { fontFamilies } from "@swiss-activities/tokens/typography";

const MIN_IOS_SCREEN_HEIGHT_FOR_SCALING = 760;
const MAX_IOS_SCREEN_HEIGHT_FOR_SCALING = 1000;
const STANDARD_IOS_SCREEN_HEIGHT_FOR_SCALING = 760;
const STANDARD_IPAD_SCREEN_HEIGHT_FOR_SCALING = 930;
const DEFAULT_ANDROID_SCREEN_HEIGHT_FOR_SCALING = 680;
const IPAD_ICON_SCALING_PERCENT = 1.14;
const DEFAULT_FONT_SIZE = 14;

const isIphoneWithModernSafeArea = (height: number, width: number) =>
  Platform.OS === "ios" &&
  !Platform.isPad &&
  Math.max(height, width) >= 812 &&
  Math.min(height, width) >= 375;

export const getResponsiveFontValue = (
  fontSize: number,
  standardScreenHeight = DEFAULT_ANDROID_SCREEN_HEIGHT_FOR_SCALING
) => {
  const { height, width } = Dimensions.get("window");
  const standardLength = Math.max(height, width);
  const offset =
    width > height ? 0 : Platform.OS === "ios" ? 78 : StatusBar.currentHeight ?? 0;
  const deviceHeight =
    isIphoneWithModernSafeArea(height, width) || Platform.OS === "android"
      ? standardLength - offset
      : standardLength;

  return Math.round((fontSize * deviceHeight) / standardScreenHeight);
};

export const getMobileFontSize = (size: number, height: number) =>
  Platform.OS === "ios"
    ? height < MIN_IOS_SCREEN_HEIGHT_FOR_SCALING
      ? size
      : height >= MAX_IOS_SCREEN_HEIGHT_FOR_SCALING
        ? getResponsiveFontValue(size, STANDARD_IPAD_SCREEN_HEIGHT_FOR_SCALING)
        : getResponsiveFontValue(size, STANDARD_IOS_SCREEN_HEIGHT_FOR_SCALING)
    : getResponsiveFontValue(size);

export const getMobileFontScalingPercent = (height: number) =>
  height < MAX_IOS_SCREEN_HEIGHT_FOR_SCALING
    ? getMobileFontSize(DEFAULT_FONT_SIZE, height) / DEFAULT_FONT_SIZE
    : IPAD_ICON_SCALING_PERCENT;

export const mobileFontStyles = StyleSheet.create({
  inter: {
    fontFamily: fontFamilies.sans.native.regular,
  },
  interMedium: {
    fontFamily: fontFamilies.sans.native.medium,
  },
  interSemibold: {
    fontFamily: fontFamilies.sans.native.semibold,
  },
  interBold: {
    fontFamily: fontFamilies.sans.native.bold,
  },
});

export type MobileTextSizeClass = keyof typeof dsMobileTokens.typography.fontSize;

export const extractMobileTextSizeClass = (classString: string) => {
  const classes = classString.split(" ").filter(Boolean);
  const fontSizeRegex = new RegExp(
    `^text-(${Object.keys(dsMobileTokens.typography.fontSize).join("|")})$`
  );

  let fontSizeClass = "";
  let fontSizeValue = "";
  let lineHeightValue = "";

  for (const cls of classes) {
    const match = cls.match(fontSizeRegex);

    if (match) {
      fontSizeClass = match[0];
      const sizeKey = match[1] as MobileTextSizeClass;

      [fontSizeValue, lineHeightValue] =
        dsMobileTokens.typography.fontSize[sizeKey];
      break;
    }
  }

  return {
    fontSize: Number.parseInt(fontSizeValue, 10),
    lineHeight: Number.parseInt(lineHeightValue, 10),
    rest: classes.filter((cls) => cls !== fontSizeClass).join(" "),
  };
};
