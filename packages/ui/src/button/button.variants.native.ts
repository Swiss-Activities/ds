import { cva } from 'class-variance-authority'

import type { ButtonSize, ButtonVariant } from './button.types'
import { buttonSizes, buttonVariants } from './button.types'
import {
  sharedButtonBaseStyles,
  sharedButtonDisabledStyles,
  sharedButtonSizeStyles,
  sharedButtonVariantStyles,
} from './button.variants.shared'

const nativeButtonContainerVariantStyles = Object.fromEntries(
  buttonVariants.map(variant => [variant, sharedButtonVariantStyles[variant].container]),
) as Record<ButtonVariant, string>

const nativeButtonTextVariantStyles = Object.fromEntries(
  buttonVariants.map(variant => [variant, sharedButtonVariantStyles[variant].text]),
) as Record<ButtonVariant, string>

const nativeButtonContainerSizeStyles = Object.fromEntries(
  buttonSizes.map(size => [size, sharedButtonSizeStyles[size].container]),
) as Record<ButtonSize, string>

const nativeButtonTextSizeStyles = Object.fromEntries(
  buttonSizes.map(size => [size, sharedButtonSizeStyles[size].text]),
) as Record<ButtonSize, string>

export const buttonContainerStyles = cva(sharedButtonBaseStyles.container, {
  variants: {
    variant: nativeButtonContainerVariantStyles,
    size: nativeButtonContainerSizeStyles,
    disabled: {
      true: sharedButtonDisabledStyles.container,
      false: '',
    },
  },
  defaultVariants: {
    variant: 'secondary',
    size: 'md',
    disabled: false,
  },
})

export const buttonTextStyles = cva(sharedButtonBaseStyles.text, {
  variants: {
    variant: nativeButtonTextVariantStyles,
    size: nativeButtonTextSizeStyles,
    disabled: {
      true: '',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'secondary',
    size: 'md',
    disabled: false,
  },
})
