export const logoSizes = ['sm', 'default'] as const

export type LogoSize = (typeof logoSizes)[number]

export type BaseLogoProps = {
  size?: LogoSize
  className?: string
}
