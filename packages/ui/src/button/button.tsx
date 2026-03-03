import type { ButtonHTMLAttributes } from 'react'

import { cn } from '../utils/cn'
import { buttonComponentId, type BaseButtonProps } from './button.types'
import { buttonStyles } from './button.variants.web'

export type ButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
  children = null,
  variant = 'primary',
  className,
  style,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonStyles({ variant, disabled }), className)}
      disabled={disabled}
      style={{ appearance: 'none', border: 0, ...style }}
      type="button"
      {...props}
    >
      {children}
    </button>
  )
}

;(Button as { saComponent?: string }).saComponent = buttonComponentId
