import type { ButtonHTMLAttributes } from 'react'

import type { BaseButtonProps } from './Button.types'
import {
  buttonBaseStyles,
  buttonDisabledStyles,
  buttonVariantStyles,
} from './Button.variants'

export type ButtonProps = BaseButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>

export function Button({
  label,
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${buttonBaseStyles.web} ${buttonVariantStyles[variant].web} ${buttonDisabledStyles.web} ${className ?? ''}`.trim()}
      type="button"
      {...props}
    >
      {label}
    </button>
  )
}
