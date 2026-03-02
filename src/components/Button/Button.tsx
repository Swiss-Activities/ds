import './Button.css'

export type ButtonProps = {
  label: string
  variant?: 'primary' | 'secondary'
  disabled?: boolean
  onClick?: () => void
}

export function Button({
  label,
  variant = 'primary',
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`sa-button sa-button--${variant}`}
      disabled={disabled}
      type="button"
      onClick={onClick}
    >
      {label}
    </button>
  )
}
