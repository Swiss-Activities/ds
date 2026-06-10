import type { HTMLAttributes, ReactNode } from "react";
import { Accordion } from "../accordion";
import { Button } from "../button";
import { SectionDetailHeader } from "../detail-layout";
import {
  detailContainerClassName,
  detailMediaFlushClassName,
  detailSingleMediaClassName,
} from "../detail-layout/classes";
import { Icon } from "../icon/icon";
import { Check, X } from "../icons";
import { ProductInfoList } from "../product-info-list";
import { SectionActivityGrid } from "../section-activity-grid";
import { Text } from "../text";
import { cn } from "../utils/cn";
import { SectionNonBookableMedia } from "./section-non-bookable-media";
import type {
  BaseSectionNonBookableProps,
  NonBookableDetailSection,
  NonBookableFactItem,
} from "./section-non-bookable.types";

export type SectionNonBookableProps = BaseSectionNonBookableProps &
  Omit<HTMLAttributes<HTMLDivElement>, "children" | "title">;

function MediaGallery({
  images,
  renderImage,
}: Pick<BaseSectionNonBookableProps, "images" | "renderImage">) {
  const mainImage = images[0];

  return (
    <div className="relative">
      <div className={detailSingleMediaClassName}>
        <SectionNonBookableMedia image={mainImage} renderImage={renderImage} />
      </div>
    </div>
  );
}

function FactValue({ item }: { item: NonBookableFactItem }) {
  if (item.status === "available") {
    return (
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-50 text-green-700">
        <Icon icon={Check} size="xs" />
      </span>
    );
  }

  if (item.status === "unavailable") {
    return (
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 text-gray-400">
        <Icon icon={X} size="xs" />
      </span>
    );
  }

  if (item.value) {
    return (
      <Text
        as="span"
        size="sm"
        gray
        className="block break-words text-right !leading-snug"
      >
        {item.value}
      </Text>
    );
  }

  return null;
}

function FactList({ items }: { items: NonBookableFactItem[] }) {
  return (
    <div className="divide-y divide-solid divide-gray-200 [&>*]:!border-l-0 [&>*]:!border-r-0">
      {items.map((item, index) => (
        <div
          key={item.id ?? `${String(item.label)}-${index}`}
          className="flex items-start justify-between gap-4 py-2.5"
        >
          <Text as="span" size="sm" className="pt-0.5 !leading-snug">
            {item.label}
          </Text>
          <div className="min-w-0 max-w-[62%] shrink-0">
            <FactValue item={item} />
          </div>
        </div>
      ))}
    </div>
  );
}

function DetailSections({
  sections,
}: {
  sections: NonBookableDetailSection[];
}) {
  const accordionItems = sections.map((section) => ({
    id: section.id,
    title: section.title,
    content: <FactList items={section.items} />,
  }));

  return (
    <>
      <div className="lg:hidden">
        <Accordion items={accordionItems} />
      </div>
      <div className="hidden grid-cols-2 gap-4 lg:grid">
        {sections.map((section) => (
          <div
            key={section.id ?? section.title}
            className="rounded-lg border border-solid border-gray-200 bg-white p-5 shadow-sm"
          >
            <Text as="h2" size="default" bold className="mb-2">
              {section.title}
            </Text>
            <FactList items={section.items} />
          </div>
        ))}
      </div>
    </>
  );
}

function SourceLink({
  href,
  children,
}: {
  href?: string;
  children?: ReactNode;
}) {
  if (!href || !children) {
    return null;
  }

  return (
    <Button
      as="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      variant="secondary"
      size="sm"
    >
      {children}
    </Button>
  );
}

export function SectionNonBookable({
  title,
  images,
  renderImage,
  categoryLabel: _categoryLabel,
  categoryTitleLabel: _categoryTitleLabel,
  locationLabel: _locationLabel,
  locationTitleLabel: _locationTitleLabel,
  description,
  highlights,
  detailSections,
  sourceLabel,
  sourceHref,
  relatedActivitiesTitle,
  relatedActivitiesAction,
  relatedActivities,
  relatedActivitiesRef,
  className,
  ...props
}: SectionNonBookableProps) {
  const hasHighlights = Boolean(highlights?.length);
  const hasDetailSections = Boolean(detailSections?.length);
  const hasRelatedActivities = Boolean(
    relatedActivities?.length && relatedActivitiesTitle
  );
  const hasSourceLink = Boolean(sourceHref && sourceLabel);

  return (
    <div className={cn("bg-white", className)} {...props}>
      <section className={detailContainerClassName}>
        <div className={detailMediaFlushClassName}>
          <MediaGallery images={images} renderImage={renderImage} />
        </div>
        <SectionDetailHeader title={title} description={description}>
          {hasSourceLink ? (
            <div className="mt-4">
              <SourceLink href={sourceHref}>{sourceLabel}</SourceLink>
            </div>
          ) : null}
        </SectionDetailHeader>
      </section>

      <div className="grid gap-0 py-8 lg:gap-10 lg:py-10">
        {hasHighlights ? (
          <section className="min-w-0">
            <div className={cn(detailContainerClassName, "min-w-0")}>
              <ProductInfoList
                items={highlights ?? []}
                className={
                  hasDetailSections
                    ? "[&>div:first-child]:!border-b-0"
                    : undefined
                }
              />
            </div>
          </section>
        ) : null}

        {hasDetailSections ? (
          <section className="min-w-0">
            <div className={cn(detailContainerClassName, "min-w-0")}>
              <DetailSections sections={detailSections ?? []} />
            </div>
          </section>
        ) : null}

        {hasRelatedActivities ? (
          <section ref={relatedActivitiesRef} className="mt-8 min-w-0 lg:mt-0">
            <div className={cn(detailContainerClassName, "min-w-0")}>
              <SectionActivityGrid
                title={relatedActivitiesTitle}
                action={relatedActivitiesAction}
                activities={relatedActivities ?? []}
              />
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
}
