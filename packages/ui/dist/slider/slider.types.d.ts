import type { ReactNode } from "react";
export type BaseSliderProps = {
    slides: ReactNode[];
    showNav?: boolean;
    showCounter?: boolean;
    loop?: boolean;
    className?: string;
};
