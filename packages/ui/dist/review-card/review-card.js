import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../utils/cn";
import { Card } from "../card";
import { Button } from "../button";
import { Icon } from "../icon/icon";
import { Languages, ThumbsUp } from "../icons";
import { Text } from "../text";
import { Rating } from "../rating";
import { Flag } from "../flag";
export function ReviewCard({ author, countryCode, date, rating, text, images, upvoteCount, onUpvote, translatedFrom, className, ...props }) {
    return (_jsxs(Card, { className: cn("flex flex-col !p-4", className), ...props, children: [_jsxs("div", { className: "-mx-4 flex items-center gap-1.5 border-b border-solid border-gray-200 px-4 pb-3", children: [countryCode && _jsx(Flag, { countryCode: countryCode }), _jsx(Text, { as: "span", size: "sm", bold: true, black: true, children: author }), _jsx(Text, { as: "span", size: "sm", gray: true, className: "ms-auto", children: date })] }), _jsxs("div", { className: "mt-3 flex items-center justify-between", children: [_jsx(Rating, { score: rating, showScore: false, size: "md" }), upvoteCount != null && (_jsxs("div", { className: "flex items-stretch rounded-md border border-solid border-gray-200", children: [_jsx(Button, { variant: "ghost", size: "sm", onClick: onUpvote, className: "!rounded-none !px-2.5 text-gray-400 hover:text-gray-600", children: _jsx(Icon, { icon: ThumbsUp, size: "sm" }) }), _jsx("div", { className: "flex items-center border-l border-solid border-gray-200 px-2.5", children: _jsx(Text, { as: "span", size: "xs", gray: true, children: upvoteCount }) })] }))] }), _jsx(Text, { size: "xs", className: "mt-3 line-clamp-5 !text-gray-700", children: text }), images && images.length > 0 && (_jsx("div", { className: "mt-3 flex gap-1.5", children: images.map((img, i) => (_jsx("div", { className: "relative h-16 w-16 shrink-0 overflow-hidden rounded [&_img]:absolute [&_img]:inset-0 [&_img]:h-full [&_img]:w-full [&_img]:object-cover", children: img }, i))) })), translatedFrom && (_jsxs("div", { className: "mt-3 flex items-center gap-1 text-gray-400", children: [_jsx(Icon, { icon: Languages, size: "sm" }), _jsxs(Text, { as: "span", size: "xs", gray: true, children: ["Original in ", translatedFrom] })] }))] }));
}
