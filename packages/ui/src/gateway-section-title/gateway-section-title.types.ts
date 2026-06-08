import type { AnchorHTMLAttributes, ReactNode } from "react";

export type GatewaySectionTitleProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "children" | "href" | "title"
> & {
  title: ReactNode;
  href?: string | null;
  pillarPath?: string | null;
};
