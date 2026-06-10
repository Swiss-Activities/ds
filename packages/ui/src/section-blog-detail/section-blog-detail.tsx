"use client";

import type { HTMLAttributes } from "react";
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
            </div>
          </div>
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
