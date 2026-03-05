export const grayColors = {
  '50': 'oklch(0.984 0.003 247.858)',
  '100': 'oklch(0.968 0.007 247.896)',
  '200': 'oklch(0.929 0.013 255.508)',
  '300': 'oklch(0.869 0.022 252.894)',
  '400': 'oklch(0.704 0.04 256.788)',
  '500': 'oklch(0.554 0.046 257.417)',
  '600': 'oklch(0.446 0.043 257.281)',
  '700': 'oklch(0.372 0.044 257.287)',
  '800': 'oklch(0.279 0.041 260.031)',
  '900': 'oklch(0.208 0.042 265.755)',
  '950': 'oklch(0.129 0.042 264.695)',
} as const

export type GrayColorName = keyof typeof grayColors

export const saColors = {
  bg: '#f9fafb',
  blue: '#002f49',
  dark: '#eb002a',
  light: '#fff5f7',
  medium: '#ff859b',
  primary: '#ff385c',
} as const

export type SaColorName = keyof typeof saColors
