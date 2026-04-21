import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../utils/cn";
function getFlagEmoji(countryCode) {
    const code = countryCode.toUpperCase().slice(-2);
    const codePoints = code
        .split("")
        .map((char) => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
}
export function Flag({ countryCode, className, ...props }) {
    if (!countryCode)
        return null;
    return (_jsx("span", { className: cn("inline-flex text-base leading-none", className), role: "img", "aria-label": countryCode.toUpperCase(), ...props, children: getFlagEmoji(countryCode) }));
}
