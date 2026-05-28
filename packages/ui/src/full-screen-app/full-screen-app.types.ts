import type { HTMLAttributes, ReactNode } from "react";

export type FullScreenAppProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "children"
> & {
  children: ReactNode;
  lockBody?: boolean;
  open: boolean;
};
