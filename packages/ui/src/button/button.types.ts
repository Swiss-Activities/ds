import type { ReactNode } from "react";

export const buttonVariants = [
  "blue",
  "blue-outline",
  "danger",
  "filter",
  "gray",
  "ghost",
  "instruction",
  "link",
  "linkGray",
  "outline",
  "outline-gray",
  "pill",
  "pill-primary",
  "primary",
  "secondary",
  "tertiary",
  "transparent",
  "white",
] as const;

export type ButtonVariant = (typeof buttonVariants)[number];

export const buttonSizes = ["xs", "sm", "md", "lg"] as const;

export type ButtonSizeToken = (typeof buttonSizes)[number];

export type ButtonSize = ButtonSizeToken | "default" | "pill";

export const buttonShowTextFrom = [
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
] as const;

export type ButtonShowTextFrom = (typeof buttonShowTextFrom)[number];

export const buttonComponentId = "sa-button";

export type BaseButtonProps = {
  as?: "button" | "a" | "div" | "submit";
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  icon?: ReactNode;
  iconRight?: ReactNode;
  iconRightDivider?: boolean;
  loading?: boolean;
  reverse?: boolean;
  selected?: boolean;
  showTextFrom?: ButtonShowTextFrom;
  size?: ButtonSize;
  submit?: boolean;
  text?: ReactNode | string;
  type?: ButtonVariant;
  variant?: ButtonVariant;
};
