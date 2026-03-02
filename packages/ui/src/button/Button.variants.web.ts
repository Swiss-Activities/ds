import type { ButtonVariant } from './Button.types'
import {
  sharedButtonBaseStyles,
  sharedButtonVariantStyles,
} from './Button.variants.shared'

type ButtonVariantStyles = {
  web: string
}

export const buttonBaseStyles = {
  web:
    `inline-flex ${sharedButtonBaseStyles.container} ${sharedButtonBaseStyles.text} transition-colors focus-visible:outline-2 focus-visible:outline-offset-2`,
} as const

export const buttonDisabledStyles = {
  web: 'disabled:cursor-not-allowed disabled:opacity-50',
} as const

export const buttonVariantStyles: Record<ButtonVariant, ButtonVariantStyles> = {
  primary: {
    web:
      `${sharedButtonVariantStyles.primary.container} ${sharedButtonVariantStyles.primary.text} hover:bg-[#334155] focus-visible:outline-[#0f172b]`,
  },
  secondary: {
    web:
      `${sharedButtonVariantStyles.secondary.container} ${sharedButtonVariantStyles.secondary.text} hover:bg-[#cbd5e1] focus-visible:outline-[#94a3b8]`,
  },
}
