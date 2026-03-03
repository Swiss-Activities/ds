import type { ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'ghost-primary'

export const buttonComponentId = 'sa-button'

export type BaseButtonProps = {
  children?: ReactNode
  variant?: ButtonVariant
}
