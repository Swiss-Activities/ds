"use client";

import type { HTMLAttributes } from "react";
import { Breadcrumbs } from "../breadcrumbs";
import { ContentBlocks } from "../content-blocks";
import { SectionDetailHeader } from "../detail-layout";
import {
  detailContainerClassName,
  detailMediaFlushClassName,
  detailSingleMediaClassName,
} from "../detail-layout/classes";
import { SectionActivityGrid } from "../section-activity-grid";
import { SectionNonBookableMedia } from "../section-non-bookable/section-non-bookable-media";
import { cn } from "../utils/cn";
import type { BaseSectionBlogDetailProps } from "./section-blog-detail.types";

export type SectionBlogDetailProps = BaseSectionBlogDetailProps &
  Omit<HTMLAttributes<HTMLDivElement>, "children" | "title">;

export function SectionBlogDetail({
  title,
  image,
  renderImage,
  breadcrumbs,
  description,
  contentLead,
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
  const hasContent = Boolean(contentItems?.length) || Boolean(contentLead);
  const hasRelatedActivities = Boolean(
    relatedActivities?.length && relatedActivitiesTitle
  );
  const relatedActivitiesGrid = hasRelatedActivities ? (
    <section ref={relatedActivitiesRef} className="min-w-0">
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
            </div>
          </div>
        ) : null}

        {breadcrumbs && breadcrumbs.length > 0 && (
          <Breadcrumbs items={breadcrumbs} ignoreLast className="mt-3 lg:mt-4" />
        )}

        {/* The title spans full width; related activities live in the content
            rail below so the article column flows uninterrupted next to it. */}
        {relatedActivitiesGrid && !hasContent ? (
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
              lead={contentLead}
              aside={relatedActivitiesGrid}
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
