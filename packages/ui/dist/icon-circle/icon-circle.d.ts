import type { HTMLAttributes, ReactNode } from "react";
export type IconCircleProps = {
    icon: ReactNode;
    className?: string;
} & HTMLAttributes<HTMLSpanElement>;
export declare function IconCircle({ icon, className, ...props }: IconCircleProps): import("react/jsx-runtime").JSX.Element;
