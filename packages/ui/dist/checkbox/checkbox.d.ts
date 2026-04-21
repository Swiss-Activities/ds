import { type InputHTMLAttributes } from "react";
import type { BaseCheckboxProps } from "./checkbox.types";
export type CheckboxProps = BaseCheckboxProps & Omit<InputHTMLAttributes<HTMLInputElement>, "children" | "onChange" | "size" | "title" | "type">;
export declare function Checkbox({ className, controlled, disabled, help, name, onChange, required, selected, title, id, ...props }: CheckboxProps): import("react/jsx-runtime").JSX.Element;
