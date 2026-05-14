export const grayColors = {
  "50": "#fafafa",
  "100": "#f5f5f5",
  "200": "#e5e5e5",
  "300": "#d4d4d4",
  "400": "#a1a1a1",
  "500": "#737373",
  "600": "#525252",
  "700": "#404040",
  "800": "#262626",
  "900": "#171717",
  "950": "#0a0a0a",
} as const;

export type GrayColorName = keyof typeof grayColors;

export const saColors = {
  bg: "#f9fafb",
  border: "#e5e5e5",
  blue: "#002f49",
  dark: "#eb002a",
  light: "#fff5f7",
  medium: "#ff859b",
  primary: "#ff385c",
} as const;

export type SaColorName = keyof typeof saColors;

export const semanticPalette = {
  green: "#17a34a",
  greenLight: "#dcfce7",
  orange: "#ff9f0a",
  orangeLight: "#fff0d8",
  yellow: "#facc15",
  yellowLight: "#fef9c3",
  red: "#dc2626",
  redLight: "#fee2e2",
  blue: "#2563eb",
  blueLight: "#dbeafe",
} as const;

export type SemanticPaletteName = keyof typeof semanticPalette;

export type ColorPalette = {
  surface: {
    default: string;
    raised: string;
    sunken: string;
    inverted: string;
    overlay: string;
  };
  background: {
    default: string;
    subtle: string;
    primarySubtle: string;
  };
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    disabled: string;
    inverted: string;
    onPrimary: string;
    link: string;
  };
  border: {
    subtle: string;
    default: string;
    strong: string;
    focus: string;
  };
  brand: {
    primary: string;
    primaryHover: string;
    primarySubtle: string;
    primaryStrong: string;
    onBrand: string;
  };
  state: {
    success: string;
    successSubtle: string;
    warning: string;
    warningSubtle: string;
    danger: string;
    dangerSubtle: string;
    info: string;
    infoSubtle: string;
  };
};

const lightMode: ColorPalette = {
  surface: {
    default: "#ffffff",
    raised: "#ffffff",
    sunken: grayColors["50"],
    inverted: grayColors["900"],
    overlay: "rgba(0, 0, 0, 0.45)",
  },
  background: {
    default: saColors.bg,
    subtle: grayColors["100"],
    primarySubtle: saColors.light,
  },
  text: {
    primary: grayColors["900"],
    secondary: grayColors["700"],
    tertiary: grayColors["500"],
    disabled: grayColors["400"],
    inverted: "#ffffff",
    onPrimary: "#ffffff",
    link: saColors.primary,
  },
  border: {
    subtle: grayColors["200"],
    default: grayColors["300"],
    strong: grayColors["500"],
    focus: saColors.primary,
  },
  brand: {
    primary: saColors.primary,
    primaryHover: saColors.dark,
    primarySubtle: saColors.light,
    primaryStrong: saColors.dark,
    onBrand: "#ffffff",
  },
  state: {
    success: semanticPalette.green,
    successSubtle: semanticPalette.greenLight,
    warning: semanticPalette.orange,
    warningSubtle: semanticPalette.orangeLight,
    danger: semanticPalette.red,
    dangerSubtle: semanticPalette.redLight,
    info: semanticPalette.blue,
    infoSubtle: semanticPalette.blueLight,
  },
};

const darkMode: ColorPalette = {
  surface: {
    default: grayColors["950"],
    raised: grayColors["900"],
    sunken: "#000000",
    inverted: grayColors["50"],
    overlay: "rgba(0, 0, 0, 0.6)",
  },
  background: {
    default: grayColors["950"],
    subtle: grayColors["900"],
    primarySubtle: "#3a0712",
  },
  text: {
    primary: grayColors["50"],
    secondary: grayColors["300"],
    tertiary: grayColors["400"],
    disabled: grayColors["600"],
    inverted: grayColors["900"],
    onPrimary: "#ffffff",
    link: saColors.medium,
  },
  border: {
    subtle: grayColors["800"],
    default: grayColors["700"],
    strong: grayColors["500"],
    focus: saColors.medium,
  },
  brand: {
    primary: saColors.primary,
    primaryHover: saColors.medium,
    primarySubtle: "#3a0712",
    primaryStrong: saColors.medium,
    onBrand: "#ffffff",
  },
  state: {
    success: semanticPalette.green,
    successSubtle: "#0a3d1f",
    warning: semanticPalette.orange,
    warningSubtle: "#3d2a0a",
    danger: semanticPalette.red,
    dangerSubtle: "#3d0f0f",
    info: semanticPalette.blue,
    infoSubtle: "#0a1f3d",
  },
};

export const colorModes = {
  light: lightMode,
  dark: darkMode,
} as const satisfies Record<"light" | "dark", ColorPalette>;

export type ColorMode = keyof typeof colorModes;
export type SemanticColorPath = ColorPalette;
