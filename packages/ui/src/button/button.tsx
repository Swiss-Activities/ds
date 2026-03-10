import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

import { cn } from '../utils/cn'
import { buttonComponentId, type BaseButtonProps } from './button.types'
import { buttonStyles } from './button.variants.web'

type ButtonAsButton = BaseButtonProps &
  { as?: 'button' } &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>

type ButtonAsAnchor = BaseButtonProps &
  { as: 'a' } &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'>

export type ButtonProps = ButtonAsButton | ButtonAsAnchor

export function Button(props: ButtonProps) {
  const {
    children = null,
    variant = 'primary',
    size = 'default',
    className,
    style,
    as: Tag = 'button',
  } = props

  const isInstruction = variant === 'instruction'
  const disabled = 'disabled' in props ? props.disabled : undefined
  const shouldApplyDisabledStyles = Boolean(disabled) && !isInstruction
  const isDisabled = Boolean(disabled) || isInstruction

  const classes = cn(
    buttonStyles({ variant, size, disabled: shouldApplyDisabledStyles }),
    className,
  )

  if (Tag === 'a') {
    const { children: _, variant: _v, size: _s, className: _c, style: _st, as: _a, ...anchorProps } = props as ButtonAsAnchor & BaseButtonProps
    return (
      <a
        className={classes}
        style={{ appearance: 'none', ...style }}
        {...anchorProps}
      >
        {children}
      </a>
    )
  }

  const { children: _, variant: _v, size: _s, className: _c, style: _st, as: _a, ...buttonProps } = props as ButtonAsButton & BaseButtonProps
  return (
    <button
      className={classes}
      style={{ appearance: 'none', ...style }}
      disabled={isDisabled}
      type="button"
      {...buttonProps}
    >
      {children}
    </button>
  )
}

;(Button as { saComponent?: string }).saComponent = buttonComponentId
