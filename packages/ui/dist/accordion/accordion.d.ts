import type { HTMLAttributes } from "react";
import type { BaseAccordionProps } from "./accordion.types";
export type AccordionProps = BaseAccordionProps & Omit<HTMLAttributes<HTMLDivElement>, "children">;
export declare function Accordion({ items, className, ...props }: AccordionProps): import("react/jsx-runtime").JSX.Element;
