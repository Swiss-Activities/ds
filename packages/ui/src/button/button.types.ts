import type { ReactNode } from 'react'

export const buttonVariants = [
  'primary',
  'secondary',
  'tertiary',
  'outline',
  'outline-gray',
  'transparent',
  'blue-outline',
  'blue',
  'gray',
  'instruction',
  'link',
  'linkGray',
] as const

export type ButtonVariant = (typeof buttonVariants)[number]

export const buttonSizes = ['xs', 'sm', 'default', 'pill'] as const

export type ButtonSize = (typeof buttonSizes)[number]

export const buttonComponentId = 'sa-button'

export type BaseButtonProps = {
  children?: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  as?: 'button' | 'a'
}
