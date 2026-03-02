export const saColors = {
  dark: '#eb002a',
  light: '#fff5f7',
  medium: '#ff859b',
  primary: '#ff385c',
} as const

export type SaColorName = keyof typeof saColors
