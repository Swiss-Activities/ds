import {
  sharedCardBaseStyles,
  sharedCardMxStyles,
  sharedCardPaddingStyles,
  sharedCardResponsivePaddingStyles,
  sharedCardRoundedStyles,
} from './Card.variants.shared'

export const cardBaseStyles = {
  web: sharedCardBaseStyles,
} as const

export const cardPaddingStyles = {
  web: sharedCardPaddingStyles,
} as const

export const cardResponsivePaddingStyles = {
  web: sharedCardResponsivePaddingStyles,
} as const

export const cardMxStyles = {
  web: sharedCardMxStyles,
} as const

export const cardRoundedStyles = {
  web: sharedCardRoundedStyles,
} as const
