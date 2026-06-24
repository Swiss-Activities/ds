const grayColors = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#e5e5e5",
  300: "#d4d4d4",
  400: "#a1a1a1",
  500: "#737373",
  600: "#525252",
  700: "#404040",
  800: "#262626",
  900: "#171717",
  950: "#0a0a0a",
};

const saColors = {
  bg: "#f9fafb",
  border: "#e5e5e5",
  blue: "#002f49",
  dark: "#eb002a",
  light: "#fff5f7",
  medium: "#ff859b",
  primary: "#ff385c",
};

const dsTailwindTokens = {
  colors: {
    black: "#000000",
    white: "#ffffff",
    gray: grayColors,
    sa: saColors,
    semantic: {
      green: "#16a34a",
      orange: "#ff9f0a",
      orangeLight: "#fff0d8",
      yellow: "#facc15",
    },
  },
  radius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
  },
  typography: {
    fontSize: {
      xs2: ["11px", "14px"],
      xs: ["12px", "20px"],
      sm2: ["14px", "23px"],
      sm: ["14px", "23px"],
      md2: ["16px", "22px"],
      md: ["14px", "23px"],
      lg: ["17px", "24px"],
      xl: ["18px", "25px"],
      "2xl": ["20px", "28px"],
      "3xl": ["24px", "33px"],
      display: ["14px", "23px"],
      none: ["14px", "23px"],
    },
  },
};

module.exports = {
  dsTailwindTokens,
};
