import type { ReactElement, ReactNode } from "react";

export type CardRender = (props: {
  className: string;
  children: ReactNode;
}) => ReactElement;

export type BaseCardProps = {
  children?: ReactNode;
  className?: string;
  elevation?: "default" | "lg";
  noPadding?: boolean;
  render?: CardRender;
};
