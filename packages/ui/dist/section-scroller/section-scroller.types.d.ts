import type { ReactNode } from "react";
export type BaseSectionScrollerProps = {
    title: ReactNode;
    subtitle?: ReactNode;
    action?: ReactNode;
    children: ReactNode;
    as?: "section" | "div";
    noContainer?: boolean;
    className?: string;
};
