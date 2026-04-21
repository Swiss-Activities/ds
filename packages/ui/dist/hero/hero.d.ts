import { type HTMLAttributes } from "react";
import type { BaseHeroProps } from "./hero.types";
export type HeroProps = BaseHeroProps & Omit<HTMLAttributes<HTMLDivElement>, "children" | "title">;
export declare function Hero({ title, image, images, children, overlay, search, variant, tabs, selectedTabId, onSelectTab, backLabel, backHref, onBack, className, ...props }: HeroProps): import("react/jsx-runtime").JSX.Element;
