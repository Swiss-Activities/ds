import type { ReactNode } from "react";
export type ConditionalWrapperProps = {
    condition: boolean;
    wrapper: (children: ReactNode) => ReactNode;
    children: ReactNode;
};
export declare function ConditionalWrapper({ condition, wrapper, children, }: ConditionalWrapperProps): ReactNode;
