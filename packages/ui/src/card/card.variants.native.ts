import { cva } from 'class-variance-authority'

export const cardStyles = cva(
  'h-max overflow-hidden rounded-lg bg-white [border-width:1px] [border-style:solid] [border-color:var(--color-gray-200)]',
  {
    variants: {
      elevation: {
        md: 'shadow-[0px_2px_2px_rgba(0,0,0,0.05)]',
        lg: 'shadow-md',
      },
      noPadding: {
        true: 'p-0',
        false: 'p-6',
      },
    },
    defaultVariants: {
      elevation: 'md',
      noPadding: false,
    },
  },
)
