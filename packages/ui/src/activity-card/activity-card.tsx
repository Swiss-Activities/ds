import type { HTMLAttributes } from "react";
import { Card } from "../card";
import { Icon } from "../icon/icon";
import { Clock3, MapPin, Ticket } from "../icons";
import { ImageFill } from "../image-fill";
import { Loader } from "../loader";
import { Rating } from "../rating";
import { Text } from "../text";
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
  type = "activity",
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
  const isBookable = type === "activity";
  const hasPricingFooter = isBookable && Boolean(price);
  const shouldUseImageFill = !isBookable && isImageSource(image);
  const metaItems =
    meta ??
    getDefaultMeta({
      type,
      subtitle,
      category,
      dateRange,
      distance,
    });

  return (
    <Card
      noPadding
      render={render}
      className={cn(
        "group relative flex h-full w-full flex-col overflow-hidden lg:hover:shadow-md",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "aspect-[4/3] w-full shrink-0 overflow-hidden",
          shouldUseImageFill
            ? "bg-gray-100"
            : "[&_img]:h-full [&_img]:w-full [&_img]:object-cover"
        )}
      >
        {shouldUseImageFill ? (
          <ImageFill image={image} renderImage={renderImage} />
        ) : (
          renderImageValue(image, renderImage)
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1 p-3.5 pt-4">
        <Text
          as="h3"
          size="default"
          bold
          className="line-clamp-2 !text-left !text-base !leading-snug"
        >
          {title}
        </Text>
        {metaItems.length ? (
          <div className="mt-1.5 space-y-1.5">
            {metaItems.map((item, index) => (
              <ActivityCardMetaLine key={index} {...item} />
            ))}
          </div>
        ) : null}
        {normalizedScore > 0 && (
          <Rating
            score={normalizedScore}
            count={reviewCount ?? undefined}
            size="sm"
            className="mt-1"
          />
        )}
        {hasPricingFooter ? (
          <div className="mt-auto">
            <div className="-mx-3.5 mb-3 mt-2 h-px bg-gray-200" />
            <div className="flex items-baseline justify-between">
              <Text size="xs" gray className="font-medium">
                {priceLabel}
              </Text>
              <Text size="default" bold>
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
