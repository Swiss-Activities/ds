import { grayColors, saColors } from "./colors";
import { componentTokens } from "./components";
import { saRadius } from "./radius";
import { textTypographyTokens } from "./typography";

const fontSize = (
  token: (typeof textTypographyTokens)[keyof typeof textTypographyTokens]
) => [`${token.native.fontSize}px`, `${token.native.lineHeight}px`] as const;

export const dsMobileTokens = {
  colors: {
    black: "#000000",
    white: "#ffffff",
    gray: grayColors,
    sa: saColors,
    semantic: {
      green: "#17a34a",
      orange: "#ff9f0a",
      orangeLight: "#fff0d8",
      yellow: "#facc15",
    },
  },
  radius: saRadius,
  typography: {
    fontSize: {
      xs2: fontSize(textTypographyTokens.xs2),
      xs: fontSize(textTypographyTokens.xs),
      sm2: fontSize(textTypographyTokens.sm2),
      sm: fontSize(textTypographyTokens.sm),
      md2: fontSize(textTypographyTokens.md2),
      md: fontSize(textTypographyTokens.sm),
      lg: fontSize(textTypographyTokens.lg),
      xl: fontSize(textTypographyTokens.xl),
      "2xl": fontSize(textTypographyTokens["2xl"]),
      "3xl": fontSize(textTypographyTokens["3xl"]),
      display: fontSize(textTypographyTokens.display),
      none: fontSize(textTypographyTokens.none),
    },
  },
  shadow: {
    card: {
      shadowColor: "#000000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 1,
    },
    bottomBar: {
      shadowColor: "#000000",
      shadowOffset: { width: 0, height: -2 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 1,
    },
  },
  components: componentTokens,
} as const;

export type DsMobileTokens = typeof dsMobileTokens;
