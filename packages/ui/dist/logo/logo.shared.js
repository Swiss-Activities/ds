import { logoMarkupDefault, logoMarkupSm } from "./logo.markup";
export function getLogoDimensions(size) {
    if (size === "sm") {
        return { width: 34, height: 34 };
    }
    return { width: 119, height: 64 };
}
export function getLogoMarkup(size) {
    return size === "sm" ? logoMarkupSm : logoMarkupDefault;
}
