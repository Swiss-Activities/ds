"use client";

import type { HTMLAttributes } from "react";
import { Card } from "../card";
import { Icon } from "../icon/icon";
import { Clock3, ImageOff, MapPin, Ticket } from "../icons";
import { ImageFill } from "../image-fill";
import { Loader } from "../loader";
import { Rating } from "../rating";
import { Skeleton } from "../skeleton";
import { Text } from "../text";
import { useImageLoadState } from "../use-image-load-state";
import { cn } from "../utils/cn";
import { isImageSource, renderImageValue } from "../utils/render-image";
import { ActivityCardSkeletonContent } from "./activity-card-skeleton";
import type {
  ActivityCardMetaItem,
  BaseActivityCardProps,
} from "./activity-card.types";

export type ActivityCardProps = BaseActivityCardProps &
  HTMLAttributes<HTMLDivElement>;

function hasContent(value: ActivityCardMetaItem["label"]) {
  return value !== null && value !== undefined && value !== "";
}

function ActivityCardMetaLine({ icon, label }: ActivityCardMetaItem) {
  if (!hasContent(label)) {
    return null;
  }

  return (
    <Text
      as="span"
      size="xs"
      gray
      className="flex min-w-0 items-center gap-1.5 font-medium !leading-snug"
    >
      {icon ? (
        <span className="relative -top-px flex shrink-0 text-gray-400">
          {icon}
        </span>
      ) : null}
      <span className="min-w-0">{label}</span>
    </Text>
  );
}

function ActivityCardInlineDistance({
  label,
}: {
  label: ActivityCardMetaItem["label"];
}) {
  if (!hasContent(label)) {
    return null;
  }

  return (
    <Text
      as="span"
      size="xs"
      gray
      className="flex min-w-0 items-center gap-1.5 font-medium !leading-none"
    >
      <span className="flex shrink-0 text-gray-400">
        <Icon icon={MapPin} size="sm" />
      </span>
      <span className="min-w-0 truncate">{label}</span>
    </Text>
  );
}

function ActivityCardImageFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-gray-100 text-gray-400">
      <Icon icon={ImageOff} size="lg" />
    </div>
  );
}

function ActivityCardCompactOverlay({
  title,
  distance,
  normalizedScore,
  reviewCount,
  priceLabel,
  price,
  shouldPairDistanceWithRating,
}: {
  title: BaseActivityCardProps["title"];
  distance: BaseActivityCardProps["distance"];
  normalizedScore: number;
  reviewCount: BaseActivityCardProps["reviewCount"];
  priceLabel: BaseActivityCardProps["priceLabel"];
  price: BaseActivityCardProps["price"];
  shouldPairDistanceWithRating: boolean;
}) {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 hidden bg-gradient-to-t from-black/85 via-black/55 to-transparent p-3 pt-10 text-white lg:block">
      <Text
        as="h3"
        size="sm"
        bold
        className="line-clamp-2 !text-left !leading-snug !text-white"
      >
        {title}
      </Text>
      <div className="mt-1 flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-white">
        {normalizedScore > 0 ? (
          <Rating
            score={normalizedScore}
            count={reviewCount ?? undefined}
            size="sm"
            className="[&_span]:!text-white"
          />
        ) : null}
        {shouldPairDistanceWithRating ? (
          <ActivityCardInlineDistance label={distance} />
        ) : null}
      </div>
      {price ? (
        <div className="mt-2 flex items-end justify-between gap-3">
          <Text size="xs" className="!text-white/75">
            {priceLabel}
          </Text>
          <Text size="sm" bold className="shrink-0 !text-white">
            {price}
          </Text>
        </div>
      ) : null}
    </div>
  );
}

function getDefaultMeta({
  type,
  subtitle,
  category,
  dateRange,
  distance,
}: Pick<
  BaseActivityCardProps,
  "type" | "subtitle" | "category" | "dateRange" | "distance"
>): ActivityCardMetaItem[] {
  const isBookable = !type || type === "activity";

  return [
    !isBookable && hasContent(subtitle)
      ? {
          icon: <Icon icon={MapPin} size="sm" />,
          label: subtitle,
        }
      : null,
    !isBookable && hasContent(dateRange)
      ? {
          icon: <Icon icon={Clock3} size="sm" />,
          label: dateRange,
        }
      : null,
    !isBookable && hasContent(category)
      ? {
          icon: <Icon icon={Ticket} size="sm" />,
          label: category,
        }
      : null,
    hasContent(distance)
      ? {
          icon: <Icon icon={MapPin} size="sm" />,
          label: distance,
        }
      : null,
  ].filter(Boolean) as ActivityCardMetaItem[];
}

export function ActivityCard({
  image,
  title,
  description,
  type = "activity",
  variant = "default",
  subtitle,
  category,
  dateRange,
  distance,
  meta,
  score = 0,
  reviewCount = 0,
  priceLabel = "",
  price = "",
  loading = false,
  pending = false,
  renderImage,
  className,
  render,
  ...props
}: ActivityCardProps) {
  const normalizedScore = Number(score) || 0;
  const isCompactLg = variant === "compactLg";
  const isBookable = type === "activity";
  const imageSource = isImageSource(image) ? image : null;
  const imageSourceKey = imageSource?.src ?? "";
  const hasPricingFooter = isBookable && Boolean(price);
  const shouldUseImageFill = !isBookable && Boolean(imageSource);
  const {
    imageContainerRef,
    imageFailed,
    imageLoaded,
    handleImageError,
    handleImageLoad,
  } = useImageLoadState<HTMLDivElement>({
    sourceKey: imageSourceKey,
    markFailedOnError: true,
  });
  const showImageFallback = imageFailed || !image;
  const showImageSkeleton = Boolean(imageSource) && !showImageFallback;
  const shouldPairDistanceWithRating =
    normalizedScore > 0 && hasContent(distance);
  const resolvedMetaItems =
    meta ??
    getDefaultMeta({
      type,
      subtitle,
      category,
      dateRange,
      distance,
    });
  const metaItems = shouldPairDistanceWithRating
    ? resolvedMetaItems.filter((item) => item.label !== distance)
    : resolvedMetaItems;

  return (
    <Card
      noPadding
      render={render}
      className={cn(
        "group relative flex h-full w-full flex-col overflow-hidden lg:hover:shadow-md",
        isCompactLg && "lg:aspect-video lg:h-auto lg:min-h-0",
        className
      )}
      {...props}
    >
      <div
        ref={imageContainerRef}
        className={cn(
          "relative aspect-[4/3] w-full shrink-0 overflow-hidden",
          isCompactLg && "lg:aspect-auto lg:h-full",
          showImageFallback || shouldUseImageFill
            ? "bg-gray-100"
            : "[&_img]:h-full [&_img]:w-full [&_img]:object-cover"
        )}
      >
        {showImageFallback ? (
          <ActivityCardImageFallback />
        ) : shouldUseImageFill ? (
          <ImageFill
            image={image}
            renderImage={renderImage}
            onImageLoad={handleImageLoad}
            onImageError={handleImageError}
          />
        ) : (
          renderImageValue(image, renderImage, {
            onLoad: handleImageLoad,
            onError: handleImageError,
          })
        )}
        {showImageSkeleton ? (
          <Skeleton
            full
            loading={!imageLoaded && !loading}
            className="z-20"
            classNameItems="!rounded-none"
          />
        ) : null}
        {isCompactLg ? (
          <ActivityCardCompactOverlay
            title={title}
            distance={distance}
            normalizedScore={normalizedScore}
            reviewCount={reviewCount}
            priceLabel={priceLabel}
            price={price}
            shouldPairDistanceWithRating={shouldPairDistanceWithRating}
          />
        ) : null}
      </div>
      <div
        className={cn(
          "flex flex-1 flex-col gap-1 p-3.5 pt-4",
          isCompactLg && "lg:hidden"
        )}
      >
        <Text
          as="h3"
          size="default"
          bold
          className={cn(
            "line-clamp-2 !text-left !text-base !leading-snug",
            isCompactLg && "lg:!text-sm"
          )}
        >
          {title}
        </Text>
        {hasContent(description) ? (
          <Text
            size="sm"
            gray
            className={cn(
              "line-clamp-3 !text-left !leading-snug",
              isCompactLg && "lg:hidden"
            )}
          >
            {description}
          </Text>
        ) : null}
        {metaItems.length ? (
          <div className={cn("mt-1.5 space-y-1.5", isCompactLg && "lg:mt-1")}>
            {metaItems.map((item, index) => (
              <ActivityCardMetaLine key={index} {...item} />
            ))}
          </div>
        ) : null}
        {normalizedScore > 0 ? (
          shouldPairDistanceWithRating ? (
            <div
              className={cn(
                "mt-1.5 flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1",
                isCompactLg && "lg:mt-1"
              )}
            >
              <Rating
                score={normalizedScore}
                count={reviewCount ?? undefined}
                size="sm"
              />
              <ActivityCardInlineDistance label={distance} />
            </div>
          ) : (
            <Rating
              score={normalizedScore}
              count={reviewCount ?? undefined}
              size="sm"
              className={cn("mt-1", isCompactLg && "lg:mt-0.5")}
            />
          )
        ) : null}
        {hasPricingFooter ? (
          <div className="mt-auto">
            <div
              className={cn(
                "-mx-3.5 mb-3 mt-2 h-px bg-gray-200",
                isCompactLg && "lg:-mx-3 lg:mb-2 lg:mt-1.5"
              )}
            />
            <div className="flex items-baseline justify-between">
              <Text size="xs" gray className="font-medium">
                {priceLabel}
              </Text>
              <Text
                size="default"
                bold
                className={cn(isCompactLg && "lg:!text-sm")}
              >
                {price}
              </Text>
            </div>
          </div>
        ) : null}
      </div>
      {loading ? (
        <div className="absolute inset-0 z-10 bg-white">
          <ActivityCardSkeletonContent />
        </div>
      ) : pending ? (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/70 backdrop-blur-sm">
          <Loader size="md" color="text-blue" />
        </div>
      ) : null}
    </Card>
  );
}
