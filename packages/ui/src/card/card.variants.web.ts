import { cva } from 'class-variance-authority'

import { sharedCardBaseStyles } from './card.variants.shared'

export const cardStyles = cva(
  `${sharedCardBaseStyles} border border-gray-200 shadow-[0_1px_3px_var(--color-sa-gray-shadow)]`,
)
