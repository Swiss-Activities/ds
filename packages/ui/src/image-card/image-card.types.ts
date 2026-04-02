import type { ReactNode } from "react";

export type BaseImageCardProps = {
  image: ReactNode;
  button?: ReactNode;
  children?: ReactNode;
  className?: string;
};
