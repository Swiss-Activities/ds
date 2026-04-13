import type { ReactNode } from "react";

export type BaseHeroProps = {
  title: ReactNode;
  image: ReactNode;
  children?: ReactNode;
  className?: string;
};
