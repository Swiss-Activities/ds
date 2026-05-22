import { cva } from "class-variance-authority";

export const badgeStyles = cva(
  "inline-flex max-w-max items-center justify-center whitespace-nowrap font-bold",
  {
    variants: {
      variant: {
        dark: "bg-black/65 text-white shadow-md backdrop-blur-sm",
        demand: "bg-light text-dark",
        glass: "border border-white/20 bg-white/10 text-white backdrop-blur-sm",
        info: "bg-blue-50 text-blue",
        overlay: "bg-blue/75 text-white backdrop-blur-md",
        text: "!bg-transparent !px-0",
      },
      size: {
        default: "h-5 rounded px-1 text-xs uppercase leading-[0]",
        lg: "h-auto gap-1.5 rounded-full px-2.5 py-1.5 text-xs font-semibold normal-case leading-none",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "overlay",
    },
  }
);
