import { type HTMLAttributes } from "react";
import type { BaseFilterCheckboxGroupProps } from "./filter-checkbox-group.types";
export type FilterCheckboxGroupProps = BaseFilterCheckboxGroupProps & Omit<HTMLAttributes<HTMLDivElement>, "children">;
export declare function FilterCheckboxGroup({ className, inlineFrom, items, lessLabel, maxVisible, moreLabel, onItemToggle, title, type, ...props }: FilterCheckboxGroupProps): import("react/jsx-runtime").JSX.Element;
