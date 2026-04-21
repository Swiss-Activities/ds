import type { HTMLAttributes } from "react";
import type { BaseSectionHeroProps } from "./section-hero.types";
export type SectionHeroProps = BaseSectionHeroProps & Omit<HTMLAttributes<HTMLDivElement>, "children" | "title">;
export declare function SectionHero({ title, image, overlay, search, variant, days, unit, selected, onSelect, tabs, selectedTabId, onSelectTab, className, ...props }: SectionHeroProps): import("react/jsx-runtime").JSX.Element;
