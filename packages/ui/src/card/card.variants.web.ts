import { cva } from "class-variance-authority";
import { sharedCardBaseStyles } from "./card.variants";

export const cardStyles = cva(
  `${sharedCardBaseStyles} border border-solid border-gray-200`,
  {
    variants: {
      elevation: {
        default: "shadow-[0px_2px_2px_rgba(0,0,0,0.05)]",
        lg: "shadow-md",
      },
      noPadding: {
        true: "p-0",
        false: "p-6",
      },
    },
    defaultVariants: {
      elevation: "default",
      noPadding: false,
    },
  }
);
