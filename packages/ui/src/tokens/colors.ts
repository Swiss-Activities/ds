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
