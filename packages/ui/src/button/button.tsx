import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

import { cn } from '../utils/cn'
import { buttonComponentId, type BaseButtonProps } from './button.types'
import { buttonStyles } from './button.variants.web'

type ButtonAsButton = BaseButtonProps &
  { as?: 'button' } &
  ButtonHTMLAttributes<HTMLButtonElement>

type ButtonAsAnchor = BaseButtonProps &
  { as: 'a' } &
  AnchorHTMLAttributes<HTMLAnchorElement>

export type ButtonProps = ButtonAsButton | ButtonAsAnchor

export function Button({
  children = null,
  variant = 'primary',
  size = 'default',
  className,
  style,
  disabled,
  as: Tag = 'button',
  ...props
}: ButtonProps) {
  const isInstruction = variant === 'instruction'
  const shouldApplyDisabledStyles = Boolean(disabled) && !isInstruction
  const isDisabled = Boolean(disabled) || isInstruction

  const sharedProps = {
    className: cn(
      buttonStyles({ variant, size, disabled: shouldApplyDisabledStyles }),
      className,
    ),
    style: { appearance: 'none' as const, ...style },
  }

  if (Tag === 'a') {
    return (
      <a {...sharedProps} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    )
  }

  return (
    <button
      {...sharedProps}
      disabled={isDisabled}
      type="button"
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  )
}

;(Button as { saComponent?: string }).saComponent = buttonComponentId
