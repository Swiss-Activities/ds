import type { ReactNode } from "react";

export type BaseHeaderProps = {
  children?: ReactNode;
  className?: string;
  loading?: boolean;
};

export type BaseHeaderSectionProps = {
  children?: ReactNode;
  className?: string;
};
