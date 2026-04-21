import type { HTMLAttributes } from "react";
import type { BaseSectionScrollerProps } from "./section-scroller.types";
export type SectionScrollerProps = BaseSectionScrollerProps & Omit<HTMLAttributes<HTMLElement>, "children" | "title">;
export declare function SectionScroller({ title, subtitle, action, children, as: Tag, noContainer: _noContainer, className, ...props }: SectionScrollerProps): import("react/jsx-runtime").JSX.Element;
export declare const sectionScrollerItemClassName = "w-[calc(66%-16px)] shrink-0 snap-start list-none sm:w-[calc(50%-13px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-21px)]";
