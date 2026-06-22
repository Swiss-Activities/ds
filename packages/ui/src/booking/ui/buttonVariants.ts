import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "border-none cursor-pointer bg-transparent inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors text-black disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-gray-50 sm:hover:bg-dark",
        block: "w-full !block mx-0 !w-full max-w-full !h-auto !p-0",
        destructive: "bg-red-500 text-gray-50 hover:bg-red-500/90",
        outline:
          "border border-solid border-gray-200 bg-transparent hover:bg-gray-100",
        transparent: "text-gray-900 hover:bg-gray-100",
        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
        ghost: "!p-0 hover:bg-transparent hover:underline",
        ghostAlt: "hover:bg-transparent hover:underline",
        ghostHover: "hover:bg-gray-100",
        link: "text-gray-900 underline-offset-4 hover:underline",
        tag: "bg-gray-100 text-gray-900 hover:bg-gray-200 py-1.5 font-normal !h-auto !min-h-8 !rounded-full",
        card: "bg-white h-10 outline outline-1 outline-offset-0 outline-gray-200 shadow-[0px_2px_2px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow duration-150",
      },
      size: {
        default: "h-9 px-4 py-2",
        xs: "h-7 rounded-md px-2 text-xs",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "min-h-10 min-w-10 w-10 h-10",
        inputSquare: "h-[38px] w-[38px]",
        card: "h-10 px-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
