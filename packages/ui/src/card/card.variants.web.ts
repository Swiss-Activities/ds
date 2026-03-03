import { cva } from 'class-variance-authority'

import { sharedCardBaseStyles } from './card.variants.shared'

export const cardStyles = cva(
  `${sharedCardBaseStyles} border border-gray-200`,
  {
    variants: {
      elevation: {
        md: 'shadow-[0px_2px_2px_rgba(0,0,0,0.05)]',
        lg: 'shadow-md',
      },
      noPadding: {
        true: 'p-0',
        false: 'p-6',
      },
    },
    defaultVariants: {
      elevation: 'md',
      noPadding: false,
    },
  },
)
