import { cva } from 'class-variance-authority'

import {
  sharedCardBaseStyles,
  sharedCardMxStyles,
  sharedCardPaddingStyles,
  sharedCardResponsivePaddingStyles,
  sharedCardRoundedStyles,
} from './Card.variants.shared'

export const cardStyles = cva(
  `${sharedCardBaseStyles} ${sharedCardPaddingStyles}`,
  {
    variants: {
      responsivePadding: {
        true: sharedCardResponsivePaddingStyles,
        false: '',
      },
      fullWidth: {
        true: sharedCardMxStyles,
        false: '',
      },
      rounded: {
        true: sharedCardRoundedStyles,
        false: '',
      },
    },
    defaultVariants: {
      responsivePadding: false,
      fullWidth: true,
      rounded: false,
    },
  },
)
