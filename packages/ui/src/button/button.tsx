import type { ButtonHTMLAttributes } from 'react'

import { cn } from '../utils/cn'
import { buttonComponentId, type BaseButtonProps } from './button.types'
import { buttonStyles } from './button.variants.web'

export type ButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
  children = null,
  variant = 'secondary',
  size = 'md',
  className,
  style,
  disabled,
  ...props
}: ButtonProps) {
  const isInstruction = variant === 'instruction'
  const shouldApplyDisabledStyles = Boolean(disabled) && !isInstruction
  const isDisabled = Boolean(disabled) || isInstruction

  return (
    <button
      className={cn(
        buttonStyles({ variant, size, disabled: shouldApplyDisabledStyles }),
        className,
      )}
      disabled={isDisabled}
      style={{ appearance: 'none', ...style }}
      type="button"
      {...props}
    >
      {children}
    </button>
  )
}

;(Button as { saComponent?: string }).saComponent = buttonComponentId
