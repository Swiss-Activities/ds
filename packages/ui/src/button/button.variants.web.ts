import { cva } from 'class-variance-authority'
import {
  sharedButtonBaseStyles,
  sharedButtonVariantStyles,
} from './button.variants.shared'

export const buttonStyles = cva(
  `inline-flex appearance-none border-0 ${sharedButtonBaseStyles.container} ${sharedButtonBaseStyles.text} transition-colors focus-visible:outline-2 focus-visible:outline-offset-2`,
  {
    variants: {
      variant: {
        primary:
          `${sharedButtonVariantStyles.primary.container} ${sharedButtonVariantStyles.primary.text} ${sharedButtonVariantStyles.primary.webInteraction}`,
        'ghost-primary':
          `${sharedButtonVariantStyles['ghost-primary'].container} ${sharedButtonVariantStyles['ghost-primary'].text} ${sharedButtonVariantStyles['ghost-primary'].webInteraction}`,
      },
      disabled: {
        true: 'disabled:cursor-not-allowed disabled:opacity-50',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      disabled: false,
    },
  },
)
