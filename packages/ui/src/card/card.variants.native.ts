import { cva } from 'class-variance-authority'

export const cardStyles = cva(
  'h-max overflow-hidden bg-white shadow [border-width:1px] [border-style:solid] [border-color:#e2e8f0] p-6',
  {
    variants: {
      responsivePadding: {
        true: 'px-2 sm:px-4 lg:px-6',
        false: '',
      },
      fullWidth: {
        true: '-mx-2 rounded-none sm:-mx-4 lg:mx-0',
        false: '',
      },
      rounded: {
        true: 'rounded-lg',
        false: '',
      },
    },
    defaultVariants: {
      responsivePadding: false,
      fullWidth: true,
      rounded: false,
    },
  },
)
