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
    `inline-flex appearance-none border-0 ${sharedButtonBaseStyles.container} ${sharedButtonBaseStyles.text} transition-colors focus-visible:outline-2 focus-visible:outline-offset-2`,
} as const

export const buttonDisabledStyles = {
  web: 'disabled:cursor-not-allowed disabled:opacity-50',
} as const

export const buttonVariantStyles: Record<ButtonVariant, ButtonVariantStyles> = {
  primary: {
    web:
      `${sharedButtonVariantStyles.primary.container} ${sharedButtonVariantStyles.primary.text} ${sharedButtonVariantStyles.primary.webInteraction}`,
  },
  'ghost-primary': {
    web:
      `${sharedButtonVariantStyles['ghost-primary'].container} ${sharedButtonVariantStyles['ghost-primary'].text} ${sharedButtonVariantStyles['ghost-primary'].webInteraction}`,
  },
}
