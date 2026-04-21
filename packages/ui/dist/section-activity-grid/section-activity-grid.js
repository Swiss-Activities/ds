"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../utils/cn";
import { ActivityCard } from "../activity-card";
import { Skeleton } from "../skeleton";
import { SectionScroller, sectionScrollerItemClassName } from "../section-scroller";
export function SectionActivityGrid({ title, action, activities, loading = false, skeletonAmount = 4, className, ...props }) {
    const items = activities.length
        ? activities
        : Array.from({ length: skeletonAmount }, () => ({
            image: null,
            title: "",
            score: 0,
            reviewCount: 0,
            priceLabel: "",
            price: "",
            render: undefined,
        }));
    const titleNode = loading ? (_jsx(Skeleton, { loading: true, amount: 1, className: "w-40", classNameItems: "h-8 rounded-md", "aria-hidden": true })) : (title);
    return (_jsx(SectionScroller, { title: titleNode, action: loading ? null : action, className: cn(className), ...props, children: items.map((a, i) => (_jsx("li", { className: sectionScrollerItemClassName, children: _jsx(ActivityCard, { image: a.image, title: a.title, score: a.score, reviewCount: a.reviewCount, priceLabel: a.priceLabel, price: a.price, loading: loading, render: a.render }) }, i))) }));
}
