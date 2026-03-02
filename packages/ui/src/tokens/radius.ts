export const saRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
} as const

export type SaRadiusName = keyof typeof saRadius
