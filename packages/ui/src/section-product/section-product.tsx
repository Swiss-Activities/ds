import { createElement, type HTMLAttributes } from "react";
import { Breadcrumbs } from "../breadcrumbs";
import { ContentBlocks } from "../content-blocks";
import {
  detailContainerClassName,
  detailDescriptionTextClassName,
  detailDescriptionWrapperClassName,
  detailMediaFlushClassName,
  detailTitleClassName,
} from "../detail-layout/classes";
import { Hero } from "../hero";
import { Icon } from "../icon/icon";
import { ChevronLeft } from "../icons";
import { ImageFill } from "../image-fill";
import { InfoBadge } from "../info-badge";
import { ProductInfoList } from "../product-info-list";
import { Rating } from "../rating";
import { SectionActivityGrid } from "../section-activity-grid";
import { SectionReviewGrid } from "../section-review-grid";
import { Slider } from "../slider";
import { Text } from "../text";
import { cn } from "../utils/cn";
import {
  renderImageValue,
  type ImageValue,
  type RenderImage,
} from "../utils/render-image";
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

const galleryImageFillClassName = "[&_img]:!object-contain";

type GalleryMediaProps = Pick<
  BaseSectionProductProps,
  "images" | "renderImage" | "backLabel" | "backHref" | "onBack"
>;

function GalleryBackOverlay({
  backLabel,
  backHref,
  onBack,
}: Pick<GalleryMediaProps, "backLabel" | "backHref" | "onBack">) {
  if (!backLabel) {
    return null;
  }

  return (
    <>
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-20 bg-gradient-to-b from-black/40 to-transparent lg:rounded-tl-lg" />
      <div className="absolute left-3 top-3 z-30">
        <BackLink label={backLabel} href={backHref} onClick={onBack} />
      </div>
    </>
  );
}

function GalleryFillImage({
  image,
  renderImage,
}: {
  image: ImageValue;
  renderImage?: RenderImage;
}) {
  return (
    <ImageFill
      image={image}
      renderImage={renderImage}
      mode="contain"
      imageClassName={galleryImageFillClassName}
    />
  );
}

function GalleryGrid({
  images,
  renderImage,
  backLabel,
  backHref,
  onBack,
}: GalleryMediaProps) {
  const thumbs = images.slice(1, 5);

  return (
    <div className="hidden h-[360px] grid-cols-4 grid-rows-2 gap-1 overflow-hidden md:grid lg:rounded-lg">
      <div className="relative col-span-2 row-span-2 overflow-hidden lg:rounded-s-lg">
        <Slider
          slides={images}
          renderImage={renderImage}
          loop
          className="absolute inset-0"
        />
        <GalleryBackOverlay
          backLabel={backLabel}
          backHref={backHref}
          onBack={onBack}
        />
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
          {renderImageValue(img, renderImage)}
        </div>
      ))}
    </div>
  );
}

function SparseGallery({
  images,
  renderImage,
  backLabel,
  backHref,
  onBack,
}: GalleryMediaProps) {
  const hasSlider = images.length > 1;

  return (
    <div className="relative hidden h-[360px] overflow-hidden bg-gray-100 md:block lg:rounded-lg">
      {hasSlider ? (
        <Slider
          slides={images}
          renderImage={(image) => (
            <GalleryFillImage image={image} renderImage={renderImage} />
          )}
          loop
          slideClassName="overflow-hidden"
          className="absolute inset-0"
        />
      ) : (
        <GalleryFillImage image={images[0]} renderImage={renderImage} />
      )}
      <GalleryBackOverlay
        backLabel={backLabel}
        backHref={backHref}
        onBack={onBack}
      />
    </div>
  );
}

function GalleryMedia(props: GalleryMediaProps) {
  return props.images.length >= 5 ? (
    <GalleryGrid {...props} />
  ) : (
    <SparseGallery {...props} />
  );
}

export function SectionProduct({
  title,
  images,
  renderImage,
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
  contentBlocksClassName,
  relatedActivitiesTitle,
  relatedActivitiesAction,
  relatedActivities,
  relatedActivitiesRef,
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
  const shouldStackInfoAndContent = hasInfoItems && hasContent && !hasReviews;
  const hasLowerSections =
    hasInfoItems || hasReviews || hasContent || hasRelatedActivities;
  const reviewsSectionClassName = "bg-bg py-8 lg:py-10";
  const lowerSectionsClassName =
    "grid grid-cols-1 gap-8 pt-8 lg:gap-10 lg:pt-10";

  return (
    <div {...props}>
      <section className={cn(detailContainerClassName, className)}>
        <div className={cn(detailMediaFlushClassName, "md:hidden")}>
          <Hero
            images={images}
            renderImage={renderImage}
            backLabel={backLabel}
            backHref={backHref}
            onBack={onBack}
          />
        </div>
        {images && images.length > 0 && (
          <div className={cn(detailMediaFlushClassName, "hidden md:block")}>
            <GalleryMedia
              images={images}
              renderImage={renderImage}
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
          <Text
            as="h1"
            size="xl"
            className={cn(detailTitleClassName, "mt-3 lg:mt-6")}
          >
            {title}
          </Text>
        )}
        {(rating || hasBadges) && (
          <div className="mt-4 flex flex-wrap items-center gap-6 lg:mt-6">
            {rating ? <Rating {...rating} stacked /> : null}
            {badges?.map((badge, index) => (
              <div
                key={`${badge.title}-${index}`}
                className="flex items-center gap-6"
              >
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
            <Text
              className={cn(
                detailDescriptionWrapperClassName,
                detailDescriptionTextClassName
              )}
            >
              {description}
            </Text>
          ) : (
            <div className={detailDescriptionWrapperClassName}>
              {description}
            </div>
          )
        ) : null}
      </section>

      {hasLowerSections ? (
        <div className={lowerSectionsClassName}>
          {shouldStackInfoAndContent ? (
            <section>
              <div className={detailContainerClassName}>
                <ProductInfoList
                  items={infoItems ?? []}
                  className="[&>div:first-child]:!border-b-0"
                />
                <ContentBlocks
                  items={contentItems ?? []}
                  tocTitle={contentTocTitle}
                  className={cn("lg:mt-10", contentBlocksClassName)}
                />
              </div>
            </section>
          ) : (
            <>
              {hasInfoItems ? (
                <section>
                  <div className={detailContainerClassName}>
                    <ProductInfoList items={infoItems ?? []} />
                  </div>
                </section>
              ) : null}

              {hasReviews ? (
                <section className={reviewsSectionClassName}>
                  <div className={detailContainerClassName}>
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
                <section>
                  <div className={detailContainerClassName}>
                    <ContentBlocks
                      items={contentItems ?? []}
                      tocTitle={contentTocTitle}
                      className={contentBlocksClassName}
                    />
                  </div>
                </section>
              ) : null}
            </>
          )}

          {hasRelatedActivities ? (
            <section ref={relatedActivitiesRef}>
              <div className={detailContainerClassName}>
                <SectionActivityGrid
                  title={
                    relatedActivitiesTitle as NonNullable<
                      typeof relatedActivitiesTitle
                    >
                  }
                  action={relatedActivitiesAction}
                  activities={relatedActivities ?? []}
                />
              </div>
            </section>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
