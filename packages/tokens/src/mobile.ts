import { colorModes, grayColors, saColors, semanticPalette } from "./colors";
import { componentTokens } from "./components";
import { dsMotion } from "./motion";
import { saRadius } from "./radius";
import { dsSpacing, dsSpacingSemantic } from "./spacing";
import { textTypographyTokens, typographyRoles } from "./typography";
import { dsZIndex } from "./zIndex";

const fontSize = (
  token: (typeof textTypographyTokens)[keyof typeof textTypographyTokens]
) => [`${token.native.fontSize}px`, `${token.native.lineHeight}px`] as const;

const baseShadow = {
  shadowColor: "#000000",
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0,
  shadowRadius: 0,
  elevation: 0,
} as const;

const elevation = (level: 0 | 1 | 2 | 3 | 4 | 5) => {
  switch (level) {
    case 0:
      return baseShadow;
    case 1:
      return {
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
      } as const;
    case 2:
      return {
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 2,
      } as const;
    case 3:
      return {
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
      } as const;
    case 4:
      return {
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.12,
        shadowRadius: 16,
        elevation: 8,
      } as const;
    case 5:
      return {
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 16 },
        shadowOpacity: 0.16,
        shadowRadius: 24,
        elevation: 16,
      } as const;
  }
};

export const dsMobileTokens = {
  colors: {
    black: "#000000",
    white: "#ffffff",
    gray: grayColors,
    sa: saColors,
    semantic: {
      green: semanticPalette.green,
      orange: semanticPalette.orange,
      orangeLight: semanticPalette.orangeLight,
      yellow: semanticPalette.yellow,
    },
    palette: semanticPalette,
  },
  colorModes,
  radius: saRadius,
  spacing: dsSpacing,
  spacingSemantic: dsSpacingSemantic,
  motion: dsMotion,
  zIndex: dsZIndex,
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
    roles: typographyRoles,
  },
  shadow: {
    none: elevation(0),
    sm: elevation(1),
    card: elevation(1),
    bottomBar: {
      shadowColor: "#000000",
      shadowOffset: { width: 0, height: -2 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 1,
    },
    button: elevation(1),
    raised: elevation(2),
    popover: elevation(3),
    modal: elevation(4),
    tooltip: elevation(2),
    overlay: elevation(5),
  },
  components: componentTokens,
} as const;

export type DsMobileTokens = typeof dsMobileTokens;
