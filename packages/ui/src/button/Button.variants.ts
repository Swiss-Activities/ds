import type { ButtonVariant } from './Button.types'

type ButtonVariantStyles = {
  web: string
  nativeContainer: string
  nativeText: string
}

export const buttonBaseStyles = {
  web:
    'inline-flex min-h-10 items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2',
  nativeContainer: 'min-h-10 items-center justify-center rounded-lg px-4 py-2.5',
  nativeText: 'text-sm font-semibold',
} as const

export const buttonDisabledStyles = {
  web: 'disabled:cursor-not-allowed disabled:opacity-50',
  native: 'opacity-50',
} as const

export const buttonVariantStyles: Record<ButtonVariant, ButtonVariantStyles> = {
  primary: {
    web: 'bg-slate-900 text-white hover:bg-slate-700 focus-visible:outline-slate-900',
    nativeContainer: 'bg-slate-900',
    nativeText: 'text-white',
  },
  secondary: {
    web: 'bg-slate-100 text-slate-900 hover:bg-slate-200 focus-visible:outline-slate-400',
    nativeContainer: 'bg-slate-200',
    nativeText: 'text-slate-900',
  },
}
