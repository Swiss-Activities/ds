export const saColors = {
  bg: '#f9fafb',
  blue: '#002f49',
  dark: '#eb002a',
  light: '#fff5f7',
  medium: '#ff859b',
  primary: '#ff385c',
} as const

export type SaColorName = keyof typeof saColors
