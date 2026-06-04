import type { HTMLAttributes, ReactNode } from "react";

export type MapResultsAppProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "children" | "title"
> & {
  desktopList: ReactNode;
  header: ReactNode;
  lockBody?: boolean;
  map: ReactNode;
  mobileList: ReactNode;
  mobileTitle: ReactNode;
  open: boolean;
  resetKey?: string | number;
};
