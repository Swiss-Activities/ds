import { createElement, type HTMLAttributes } from "react";
import { cn } from "../utils/cn";
import { Hero } from "../hero";
import { Icon } from "../icon/icon";
import { ChevronLeft } from "../icons";
import { Slider } from "../slider";
import { Text } from "../text";
import { Breadcrumbs } from "../breadcrumbs";
import { Rating } from "../rating";
import { InfoBadge } from "../info-badge";
import { ProductInfoList } from "../product-info-list";
import { SectionReviewGrid } from "../section-review-grid";
import { ContentBlocks } from "../content-blocks";
import { SectionActivityGrid } from "../section-activity-grid";
import type { BaseSectionProductProps } from "./section-product.types";

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
    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-solid border-white bg-white/70 backdrop-blur-sm">
      <Icon icon={ChevronLeft} size="sm" className="text-blue" />
    </span>,
    <span className="text-sm font-medium text-white">{label}</span>
  );
}

export type SectionProductProps = BaseSectionProductProps &
  Omit<HTMLAttributes<HTMLDivElement>, "children" | "title">;

const containerClassName = "mx-auto max-w-[1232px] px-2 sm:px-4";
const mediaFlushClassName = "-mx-2 sm:-mx-4 lg:mx-0";

function GalleryGrid({
  images,
  backLabel,
  backHref,
  onBack,
}: {
  images: import("react").ReactNode[];
  backLabel?: string;
  backHref?: string;
  onBack?: () => void;
}) {
  const thumbs = images.slice(1, 5);
  return (
    <div className="hidden h-[360px] grid-cols-4 grid-rows-2 gap-1 overflow-hidden lg:rounded-lg md:grid">
      <div className="relative col-span-2 row-span-2 overflow-hidden lg:rounded-s-lg">
        <Slider slides={images} loop className="absolute inset-0" />
        {backLabel && (
          <>
            <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-20 bg-gradient-to-b from-black/40 to-transparent lg:rounded-tl-lg" />
            <div className="absolute left-3 top-3 z-30">
              <BackLink label={backLabel} href={backHref} onClick={onBack} />
            </div>
          </>
        )}
      </div>
      {thumbs.map((img, i) => (
        <div
          key={i}
          className={cn(
            "relative overflow-hidden [&_img]:absolute [&_img]:inset-0 [&_img]:h-full [&_img]:w-full [&_img]:object-cover",
            i === 1 && "lg:rounded-tr-lg",
            i === 3 && "lg:rounded-br-lg"
          )}
        >
          {img}
        </div>
      ))}
    </div>
  );
}

export function SectionProduct({
  title,
  images,
  breadcrumbs,
  backLabel,
  backHref,
  onBack,
  rating,
  badges,
  description,
  infoItems,
  reviewsTitle,
  reviewsSubtitle,
  reviews,
  contentItems,
  contentTocTitle,
  relatedActivitiesTitle,
  relatedActivitiesAction,
  relatedActivities,
  className,
  ...props
}: SectionProductProps) {
  const hasBadges = Boolean(badges?.length);
  const hasInfoItems = Boolean(infoItems?.length);
  const hasReviews = Boolean(reviews?.length && reviewsTitle);
  const hasContent = Boolean(contentItems?.length);
  const hasRelatedActivities = Boolean(
    relatedActivities?.length && relatedActivitiesTitle
  );
  const reviewsSectionClassName = cn(
    "bg-bg pb-8 lg:pb-10",
    hasInfoItems ? "pt-0" : "pt-6 lg:pt-10"
  );
  const contentSectionClassName = cn(
    "pb-8 lg:pb-10",
    hasInfoItems || hasReviews ? "pt-0" : "pt-6 lg:pt-10"
  );
  const relatedActivitiesClassName = cn(
    containerClassName,
    hasInfoItems || hasReviews || hasContent ? "" : "pt-6 lg:pt-10"
  );

  return (
    <div {...props}>
      <section className={cn(containerClassName, className)}>
        <div className={cn(mediaFlushClassName, "md:hidden")}>
          <Hero
            images={images}
            backLabel={backLabel}
            backHref={backHref}
            onBack={onBack}
          />
        </div>
        {images && images.length > 0 && (
          <div className={cn(mediaFlushClassName, "hidden md:block")}>
            <GalleryGrid
              images={images}
              backLabel={backLabel}
              backHref={backHref}
              onBack={onBack}
            />
          </div>
        )}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <Breadcrumbs
            items={breadcrumbs}
            ignoreLast
            className="mt-3 lg:mt-4"
          />
        )}
        {title && (
          <Text as="h1" size="xl" className="mt-3 lg:mt-6">
            {title}
          </Text>
        )}
        {(rating || hasBadges) && (
          <div className="mt-4 flex flex-wrap items-center gap-6 lg:mt-6">
            {rating ? <Rating {...rating} stacked /> : null}
            {badges?.map((badge, index) => (
              <div key={`${badge.title}-${index}`} className="flex items-center gap-6">
                {(rating || index > 0) && (
                  <div className="h-8 w-px bg-gray-200" />
                )}
                <InfoBadge
                  icon={badge.icon}
                  title={badge.title}
                  subtitle={badge.subtitle}
                />
              </div>
            ))}
          </div>
        )}
        {description ? (
          typeof description === "string" ? (
            <Text className="mt-4 max-w-screen-sm text-balance lg:mt-6">
              {description}
            </Text>
          ) : (
            <div className="mt-4 lg:mt-6">{description}</div>
          )
        ) : null}
      </section>

      {hasInfoItems ? (
        <section className="pb-0 pt-4 lg:pb-10 lg:pt-4">
          <div className={containerClassName}>
            <ProductInfoList items={infoItems ?? []} />
          </div>
        </section>
      ) : null}

      {hasReviews ? (
        <section className={reviewsSectionClassName}>
          <div className={containerClassName}>
            <SectionReviewGrid
              title={reviewsTitle as NonNullable<typeof reviewsTitle>}
              subtitle={reviewsSubtitle}
              reviews={reviews ?? []}
              as="div"
            />
          </div>
        </section>
      ) : null}

      {hasContent ? (
        <section className={contentSectionClassName}>
          <div className={containerClassName}>
            <ContentBlocks
              items={contentItems ?? []}
              tocTitle={contentTocTitle}
            />
          </div>
        </section>
      ) : null}

      {hasRelatedActivities ? (
        <div className={relatedActivitiesClassName}>
          <SectionActivityGrid
            title={relatedActivitiesTitle as NonNullable<
              typeof relatedActivitiesTitle
            >}
            action={relatedActivitiesAction}
            activities={relatedActivities ?? []}
          />
        </div>
      ) : null}
    </div>
  );
}
