import { grayColors } from "./colors";

export const fontFamilies = {
  sans: {
    web: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    native: {
      regular: "Inter-Regular",
      medium: "Inter-Medium",
      semibold: "Inter-SemiBold",
      bold: "Inter-Bold",
    },
  },
} as const;

export const fontWeights = {
  regular: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
} as const;

export type FontWeightName = keyof typeof fontWeights;
export type FontFamilyWeight = keyof typeof fontFamilies.sans.native;
export type TypographyBreakpoint = "base" | "xs" | "sm" | "md" | "lg";

export type NativeTypographyStyle = {
  fontFamily: (typeof fontFamilies.sans.native)[FontFamilyWeight];
  fontSize: number;
  lineHeight: number;
  color?: string;
};

export type TypographyToken = {
  webClassName: string;
  native: NativeTypographyStyle;
  responsive?: Partial<
    Record<
      Exclude<TypographyBreakpoint, "base">,
      Pick<NativeTypographyStyle, "fontSize" | "lineHeight">
    >
  >;
};

export const textTypographySizes = [
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

export type TextTypographySize = (typeof textTypographySizes)[number];

export const textTypographyTokens = {
  "3xl": {
    webClassName:
      "text-[24px] xs:text-[30px] text-black !leading-snug font-bold md:text-[36px] lg:text-[48px]",
    native: {
      fontFamily: fontFamilies.sans.native.bold,
      fontSize: 24,
      lineHeight: 33,
      color: "#000000",
    },
    responsive: {
      xs: { fontSize: 30, lineHeight: 41 },
      md: { fontSize: 36, lineHeight: 50 },
      lg: { fontSize: 48, lineHeight: 66 },
    },
  },
  "2xl": {
    webClassName:
      "text-[20px] xs:text-[24px] text-black !leading-snug font-bold md:text-[30px] lg:text-[36px]",
    native: {
      fontFamily: fontFamilies.sans.native.bold,
      fontSize: 20,
      lineHeight: 28,
      color: "#000000",
    },
    responsive: {
      xs: { fontSize: 24, lineHeight: 33 },
      md: { fontSize: 30, lineHeight: 41 },
      lg: { fontSize: 36, lineHeight: 50 },
    },
  },
  xl: {
    webClassName:
      "text-[18px] xs:text-[20px] text-black !leading-snug font-bold md:text-[24px] lg:text-[30px]",
    native: {
      fontFamily: fontFamilies.sans.native.bold,
      fontSize: 18,
      lineHeight: 25,
      color: "#000000",
    },
    responsive: {
      xs: { fontSize: 20, lineHeight: 28 },
      md: { fontSize: 24, lineHeight: 33 },
      lg: { fontSize: 30, lineHeight: 41 },
    },
  },
  lg: {
    webClassName: "text-black font-semibold text-[17px] sm:text-[20px] lg:text-[24px]",
    native: {
      fontFamily: fontFamilies.sans.native.semibold,
      fontSize: 17,
      lineHeight: 24,
      color: "#000000",
    },
    responsive: {
      sm: { fontSize: 20, lineHeight: 28 },
      lg: { fontSize: 24, lineHeight: 33 },
    },
  },
  default: {
    webClassName: "text-black font-semibold leading-snug text-[16px] xs:text-[18px]",
    native: {
      fontFamily: fontFamilies.sans.native.semibold,
      fontSize: 16,
      lineHeight: 22,
      color: "#000000",
    },
    responsive: {
      xs: { fontSize: 18, lineHeight: 25 },
    },
  },
  md2: {
    webClassName: "text-black font-semibold leading-snug text-[16px] lg:text-[18px]",
    native: {
      fontFamily: fontFamilies.sans.native.semibold,
      fontSize: 16,
      lineHeight: 22,
      color: "#000000",
    },
    responsive: {
      lg: { fontSize: 18, lineHeight: 25 },
    },
  },
  display: {
    webClassName:
      "text-[14px] leading-relaxed text-gray-700 lg:text-[15px] lg:leading-relaxed lg:!text-[16px] lg:!leading-relaxed",
    native: {
      fontFamily: fontFamilies.sans.native.regular,
      fontSize: 14,
      lineHeight: 23,
      color: grayColors["700"],
    },
    responsive: {
      lg: { fontSize: 16, lineHeight: 26 },
    },
  },
  sm: {
    webClassName: "text-[14px] leading-relaxed text-gray-700 lg:text-[15px] lg:leading-relaxed",
    native: {
      fontFamily: fontFamilies.sans.native.regular,
      fontSize: 14,
      lineHeight: 23,
      color: grayColors["700"],
    },
    responsive: {
      lg: { fontSize: 15, lineHeight: 24 },
    },
  },
  sm2: {
    webClassName:
      "text-[14px] leading-relaxed text-gray-700 lg:text-[15px] lg:leading-relaxed lg:!text-[14px]",
    native: {
      fontFamily: fontFamilies.sans.native.regular,
      fontSize: 14,
      lineHeight: 23,
      color: grayColors["700"],
    },
    responsive: {
      lg: { fontSize: 14, lineHeight: 23 },
    },
  },
  xs: {
    webClassName:
      "text-[14px] leading-relaxed text-gray-700 lg:text-[15px] lg:leading-relaxed !text-[12px]",
    native: {
      fontFamily: fontFamilies.sans.native.regular,
      fontSize: 12,
      lineHeight: 20,
      color: grayColors["700"],
    },
  },
  xs2: {
    webClassName: "!text-[11px] !leading-tight relative -top-0.5",
    native: {
      fontFamily: fontFamilies.sans.native.regular,
      fontSize: 11,
      lineHeight: 14,
    },
  },
  none: {
    webClassName: "text-[14px] leading-relaxed text-gray-700 lg:text-[15px] lg:leading-relaxed",
    native: {
      fontFamily: fontFamilies.sans.native.regular,
      fontSize: 14,
      lineHeight: 23,
      color: grayColors["700"],
    },
    responsive: {
      lg: { fontSize: 15, lineHeight: 24 },
    },
  },
} as const satisfies Record<TextTypographySize, TypographyToken>;

export const typographyRoles = {
  heroTitle: textTypographyTokens["3xl"],
  pageTitle: textTypographyTokens["2xl"],
  productTitle: textTypographyTokens.xl,
  sectionTitle: textTypographyTokens.lg,
  cardTitle: textTypographyTokens.default,
  body: textTypographyTokens.sm,
  bodyLarge: textTypographyTokens.display,
  caption: textTypographyTokens.xs,
  micro: textTypographyTokens.xs2,
  button: {
    webClassName: "text-sm font-medium",
    native: {
      fontFamily: fontFamilies.sans.native.medium,
      fontSize: 14,
      lineHeight: 20,
    },
  },
  displayLg: textTypographyTokens["3xl"],
  displayMd: textTypographyTokens["2xl"],
  h1: textTypographyTokens["2xl"],
  h2: textTypographyTokens.xl,
  h3: textTypographyTokens.lg,
  h4: textTypographyTokens.default,
  bodyLg: textTypographyTokens.display,
  bodySm: textTypographyTokens.sm2,
  label: {
    webClassName: "text-[13px] leading-tight font-medium text-gray-700",
    native: {
      fontFamily: fontFamilies.sans.native.medium,
      fontSize: 13,
      lineHeight: 18,
      color: grayColors["700"],
    },
  },
  link: {
    webClassName: "text-[14px] leading-relaxed font-medium underline",
    native: {
      fontFamily: fontFamilies.sans.native.medium,
      fontSize: 14,
      lineHeight: 22,
    },
  },
  overline: {
    webClassName: "text-[11px] leading-tight font-semibold uppercase tracking-wider text-gray-500",
    native: {
      fontFamily: fontFamilies.sans.native.semibold,
      fontSize: 11,
      lineHeight: 14,
      color: grayColors["500"],
    },
  },
  buttonLg: {
    webClassName: "text-[16px] font-medium",
    native: {
      fontFamily: fontFamilies.sans.native.medium,
      fontSize: 16,
      lineHeight: 22,
    },
  },
  buttonSm: {
    webClassName: "text-[13px] font-medium",
    native: {
      fontFamily: fontFamilies.sans.native.medium,
      fontSize: 13,
      lineHeight: 18,
    },
  },
} as const satisfies Record<string, TypographyToken>;

export type TypographyRole = keyof typeof typographyRoles;

export function resolveNativeTypographyStyle(
  token: TypographyToken,
  breakpoint: TypographyBreakpoint = "base"
): NativeTypographyStyle {
  if (breakpoint === "base") {
    return token.native;
  }

  return {
    ...token.native,
    ...token.responsive?.[breakpoint],
  };
}

export function getNativeTextTypographyStyle(
  size: TextTypographySize,
  breakpoint?: TypographyBreakpoint
): NativeTypographyStyle {
  return resolveNativeTypographyStyle(textTypographyTokens[size], breakpoint);
}

export function getNativeTypographyRoleStyle(
  role: TypographyRole,
  breakpoint?: TypographyBreakpoint
): NativeTypographyStyle {
  return resolveNativeTypographyStyle(typographyRoles[role], breakpoint);
}
