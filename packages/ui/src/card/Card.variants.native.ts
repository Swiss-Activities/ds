import {
  sharedCardBaseStyles,
  sharedCardMxStyles,
  sharedCardPaddingStyles,
  sharedCardResponsivePaddingStyles,
  sharedCardRoundedStyles,
} from './Card.variants.shared'

export const cardBaseStyles = {
  native: sharedCardBaseStyles,
} as const

export const cardPaddingStyles = {
  native: sharedCardPaddingStyles,
} as const

export const cardResponsivePaddingStyles = {
  native: sharedCardResponsivePaddingStyles,
} as const

export const cardMxStyles = {
  native: sharedCardMxStyles,
} as const

export const cardRoundedStyles = {
  native: sharedCardRoundedStyles,
} as const
