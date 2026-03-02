import {
  sharedButtonBaseStyles,
  sharedButtonVariantStyles,
} from './Button.variants.shared'

export const buttonBaseStyles = {
  container: sharedButtonBaseStyles.container,
  text: sharedButtonBaseStyles.text,
} as const

export const buttonDisabledStyles = {
  native: 'opacity-50',
} as const

export const buttonVariantStyles = sharedButtonVariantStyles
