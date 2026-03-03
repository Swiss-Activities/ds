import { cva } from 'class-variance-authority'

import {
  sharedButtonBaseStyles,
  sharedButtonVariantStyles,
} from './button.variants.shared'

export const buttonContainerStyles = cva(sharedButtonBaseStyles.container, {
  variants: {
    variant: {
      primary: sharedButtonVariantStyles.primary.container,
      'ghost-primary': sharedButtonVariantStyles['ghost-primary'].container,
    },
    disabled: {
      true: 'opacity-50',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'primary',
    disabled: false,
  },
})

export const buttonTextStyles = cva(sharedButtonBaseStyles.text, {
  variants: {
    variant: {
      primary: sharedButtonVariantStyles.primary.text,
      'ghost-primary': sharedButtonVariantStyles['ghost-primary'].text,
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})
