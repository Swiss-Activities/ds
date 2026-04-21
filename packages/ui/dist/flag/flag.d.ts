import type { BaseFlagProps } from "./flag.types";
export type FlagProps = BaseFlagProps & Omit<React.HTMLAttributes<HTMLSpanElement>, "children">;
export declare function Flag({ countryCode, className, ...props }: FlagProps): import("react/jsx-runtime").JSX.Element | null;
