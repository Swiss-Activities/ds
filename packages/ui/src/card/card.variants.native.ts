import { cva } from 'class-variance-authority'

export const cardStyles = cva(
  'h-max overflow-hidden rounded-lg bg-white shadow [border-width:1px] [border-style:solid] [border-color:var(--color-gray-200)] p-6',
)
