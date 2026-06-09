"use client";

import { createElement, type HTMLAttributes } from "react";
import { ContentBlocks } from "../content-blocks";
import { SectionDetailHeader } from "../detail-layout";
import {
  detailContainerClassName,
  detailMediaFlushClassName,
  detailSingleMediaClassName,
} from "../detail-layout/classes";
import { Icon } from "../icon/icon";
import { ChevronLeft } from "../icons";
import { SectionActivityGrid } from "../section-activity-grid";
import { SectionNonBookableMedia } from "../section-non-bookable/section-non-bookable-media";
import { cn } from "../utils/cn";
import type { BaseSectionBlogDetailProps } from "./section-blog-detail.types";

export type SectionBlogDetailProps = BaseSectionBlogDetailProps &
  Omit<HTMLAttributes<HTMLDivElement>, "children" | "title">;

function BackLink({
  label,
  href,
  onClick,
}: {
  label: string;
  href?: string;
  onClick?: () => void;
}) {
  const tag = href ? "a" : "button";

  return createElement(
    tag,
    {
      className:
        "flex cursor-pointer appearance-none items-center gap-2 border-none bg-transparent p-0 text-white no-underline",
      ...(href ? { href } : { type: "button" as const, onClick }),
    },
    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-solid border-white bg-white/80 backdrop-blur-sm">
      <Icon icon={ChevronLeft} size="sm" className="text-blue" />
    </span>,
    <span className="text-sm font-medium text-white">{label}</span>
  );
}

export function SectionBlogDetail({
  title,
  image,
  renderImage,
  backLabel,
  backHref,
  onBack,
  description,
  contentItems,
  contentTocTitle,
  contentBlocksClassName,
  relatedActivitiesTitle,
  relatedActivitiesAction,
  relatedActivities,
  relatedActivitiesRef,
  className,
  ...props
}: SectionBlogDetailProps) {
  const hasContent = Boolean(contentItems?.length);
  const hasRelatedActivities = Boolean(
    relatedActivities?.length && relatedActivitiesTitle
  );
  const relatedActivitiesGrid = hasRelatedActivities ? (
    <section ref={relatedActivitiesRef} className="min-w-0 lg:pt-6">
      <SectionActivityGrid
        title={relatedActivitiesTitle}
        action={relatedActivitiesAction}
        activities={(relatedActivities ?? []).map((activity) => ({
          ...activity,
          variant: "compactLg" as const,
        }))}
        itemsPerRowLg={1}
      />
    </section>
  ) : null;

  return (
    <article className={cn("section-last", className)} {...props}>
      <section className={detailContainerClassName}>
        {image ? (
          <div className={detailMediaFlushClassName}>
            <div className={detailSingleMediaClassName}>
              <SectionNonBookableMedia
                image={image}
                renderImage={renderImage}
              />
              {backLabel ? (
                <>
                  <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-black/45 to-transparent" />
                  <div className="absolute left-3 top-3 z-20">
                    <BackLink
                      label={backLabel}
                      href={backHref}
                      onClick={onBack}
                    />
                  </div>
                </>
              ) : null}
            </div>
          </div>
        ) : null}

        {!image && backLabel ? (
          <button
            type="button"
            className="mb-6 flex cursor-pointer appearance-none items-center gap-2 border-none bg-transparent p-0 text-black"
            onClick={onBack}
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100">
              <Icon icon={ChevronLeft} size="sm" className="text-blue" />
            </span>
            <span className="text-sm font-medium">{backLabel}</span>
          </button>
        ) : null}

        {relatedActivitiesGrid ? (
          <div className="grid gap-8 lg:grid-cols-3 xl:gap-16">
            <SectionDetailHeader
              title={title}
              description={description}
              className="lg:col-span-2"
            />
            {relatedActivitiesGrid}
          </div>
        ) : (
          <SectionDetailHeader title={title} description={description} />
        )}
      </section>

      {hasContent ? (
        <section className="mt-8 lg:mt-10">
          <div className={detailContainerClassName}>
            <ContentBlocks
              items={contentItems ?? []}
              tocTitle={contentTocTitle}
              variant="article"
              className={contentBlocksClassName}
            />
          </div>
        </section>
      ) : null}
    </article>
  );
}
