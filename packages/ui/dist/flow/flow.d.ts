import type { HTMLAttributes } from "react";
import type { BaseFlowProps } from "./flow.types";
export type FlowProps = BaseFlowProps & HTMLAttributes<HTMLDivElement>;
export declare function Flow({ children, className, ...props }: FlowProps): import("react/jsx-runtime").JSX.Element;
