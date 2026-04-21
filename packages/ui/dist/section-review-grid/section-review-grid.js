"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../utils/cn";
import { ReviewCard } from "../review-card";
import { SectionScroller, sectionScrollerItemClassName } from "../section-scroller";
export function SectionReviewGrid({ title, subtitle, reviews, as, noContainer, className, ...props }) {
    return (_jsx(SectionScroller, { title: title, subtitle: subtitle, as: as, noContainer: noContainer, className: cn(className), ...props, children: reviews.map((review, i) => (_jsx("li", { className: sectionScrollerItemClassName, children: _jsx(ReviewCard, { author: review.author, countryCode: review.countryCode, date: review.date, rating: review.rating, text: review.text, images: review.images, upvoteCount: review.upvoteCount, onUpvote: review.onUpvote, translatedFrom: review.translatedFrom }) }, review.id ? `${review.id}-${i}` : String(i)))) }));
}
