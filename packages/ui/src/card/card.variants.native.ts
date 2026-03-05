import { cva } from 'class-variance-authority'

export const cardStyles = cva(
  'h-max overflow-hidden rounded-lg bg-white [outline-width:1px] [outline-style:solid] [outline-color:var(--color-border)]',
  {
    variants: {
      elevation: {
        default: 'shadow-[0px_2px_2px_rgba(0,0,0,0.05)]',
        lg: 'shadow-md',
      },
      noPadding: {
        true: 'p-0',
        false: 'p-6',
      },
    },
    defaultVariants: {
      elevation: 'default',
      noPadding: false,
    },
  },
)
