import { cva } from "class-variance-authority";

export const badgeStyles = cva(
  "flex h-5 max-w-max items-center justify-center whitespace-nowrap rounded px-1 text-xs font-bold uppercase leading-[0]",
  {
    variants: {
      variant: {
        demand: "bg-light text-dark",
        glass:
          "inline-flex h-auto gap-1.5 rounded-full border border-white/20 bg-white/10 px-2.5 py-1 font-semibold normal-case leading-none text-white backdrop-blur-sm",
        info: "bg-blue-50 text-blue",
        overlay: "bg-blue/75 text-white backdrop-blur-md",
        text: "!bg-transparent !px-0",
      },
    },
    defaultVariants: {
      variant: "overlay",
    },
  }
);
