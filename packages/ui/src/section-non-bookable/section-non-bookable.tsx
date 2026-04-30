import { createElement, type HTMLAttributes, type ReactNode } from "react";
import { Accordion } from "../accordion";
import { Button } from "../button";
import { Icon } from "../icon/icon";
import { Check, ChevronLeft, X } from "../icons";
import { ImageFill } from "../image-fill";
import { ProductInfoList } from "../product-info-list";
import { SectionActivityGrid } from "../section-activity-grid";
import { Text } from "../text";
import { cn } from "../utils/cn";
import type {
  BaseSectionNonBookableProps,
  NonBookableDetailSection,
  NonBookableFactItem,
} from "./section-non-bookable.types";

export type SectionNonBookableProps = BaseSectionNonBookableProps &
  Omit<HTMLAttributes<HTMLDivElement>, "children" | "title">;

const containerClassName = "mx-auto max-w-[1232px] px-2 sm:px-4";
const mediaFlushClassName = "-mx-2 sm:-mx-4 lg:mx-0";

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

function MediaGallery({
  images,
  renderImage,
  backLabel,
  backHref,
  onBack,
}: {} & Pick<
  BaseSectionNonBookableProps,
  "images" | "renderImage" | "backLabel" | "backHref" | "onBack"
>) {
  const mainImage = images[0];

  return (
    <div className="relative">
      <div className="relative h-[292px] overflow-hidden bg-gray-100 md:h-[360px] lg:h-[392px] lg:rounded-lg">
        <ImageFill image={mainImage} renderImage={renderImage} />
        {backLabel ? (
          <>
            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-black/45 to-transparent" />
            <div className="absolute left-3 top-3 z-20">
              <BackLink label={backLabel} href={backHref} onClick={onBack} />
            </div>
          </>
        ) : null}
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
  backLabel,
  backHref,
  onBack,
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
      <section className={containerClassName}>
        <div className={mediaFlushClassName}>
          <MediaGallery
            images={images}
            renderImage={renderImage}
            backLabel={backLabel}
            backHref={backHref}
            onBack={onBack}
          />
        </div>
        <div className="pt-4 lg:pt-6">
          <div className="min-w-0">
            <Text as="h1" size="xl" className="max-w-4xl">
              {title}
            </Text>
            {description ? (
              <div className="mt-4 max-w-3xl lg:mt-5">
                {typeof description === "string" ? (
                  <Text className="text-balance !leading-relaxed text-gray-700">
                    {description}
                  </Text>
                ) : (
                  description
                )}
              </div>
            ) : null}
            {hasSourceLink ? (
              <div className="mt-4">
                <SourceLink href={sourceHref}>{sourceLabel}</SourceLink>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <div className="grid gap-0 py-8 lg:gap-10 lg:py-10">
        {hasHighlights ? (
          <section className="min-w-0">
            <div className={cn(containerClassName, "min-w-0")}>
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
            <div className={cn(containerClassName, "min-w-0")}>
              <DetailSections sections={detailSections ?? []} />
            </div>
          </section>
        ) : null}

        {hasRelatedActivities ? (
          <section ref={relatedActivitiesRef} className="mt-8 min-w-0 lg:mt-0">
            <div className={cn(containerClassName, "min-w-0")}>
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
