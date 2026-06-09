import {
  toGatewayActivityItemData,
  type TGatewayActivityCardItem,
  type TGatewayActivityDetail,
  type TGatewayNonBookableDetail,
} from "@swiss-activities/data";
import {
  Icon,
  SectionNonBookable,
  SectionProduct,
  SectionReviews,
  type ActivityItem,
  type NonBookableFactItem,
  type ProductInfoListItem,
  type SectionReviewsReview,
} from "@swiss-activities/ui";
import { Clock3, Cloud, MapPin, Star } from "@swiss-activities/ui/icons";
import { getSectionReviewsLabels } from "../story-data";

type UnknownRecord = Record<string, unknown>;
type ImageValue = { src: string; alt?: string };

const gatewayLabels = {
  categories: {},
  dateRange: {
    from: "ab",
    until: "bis",
  },
  distanceUnit: "km",
};

const priceLabel = "pro Person";
const fromLabel = "ab";

function isRecord(value: unknown): value is UnknownRecord {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function getValue(root: unknown, path: string[]) {
  return path.reduce<unknown>((current, key) => {
    if (!isRecord(current)) {
      return undefined;
    }

    return current[key];
  }, root);
}

function getString(root: unknown, path: string[]) {
  const value = getValue(root, path);

  return typeof value === "string" ? value.trim() : "";
}

function getNumber(root: unknown, path: string[]) {
  const value = getValue(root, path);

  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === "string") {
    const parsed = Number(value);

    return Number.isFinite(parsed) ? parsed : null;
  }

  return null;
}

function getArray(root: unknown, path: string[]) {
  const value = getValue(root, path);

  return Array.isArray(value) ? value : [];
}

function toImageValue(src: string, alt: string): ImageValue {
  return { src, alt };
}

function uniqueImages(images: ImageValue[]) {
  const seen = new Set<string>();

  return images.filter((image) => {
    if (!isRecord(image) || typeof image.src !== "string") {
      return true;
    }

    if (seen.has(image.src)) {
      return false;
    }

    seen.add(image.src);
    return true;
  });
}

function getActivityTitle(detail: TGatewayActivityDetail) {
  return (
    getString(detail.activity, ["info", "title"]) ||
    getString(detail.activity, ["title"]) ||
    detail.id
  );
}

function getActivityImages(detail: TGatewayActivityDetail) {
  const title = getActivityTitle(detail);
  const teaserUrl = getString(detail.activity, ["teaser_image", "url"]);
  const galleryImages = getArray(detail.activity, ["gallery"]).flatMap((item) => {
    const url = getString(item, ["url"]);

    return url ? [toImageValue(url, title)] : [];
  });

  return uniqueImages([
    ...(teaserUrl ? [toImageValue(teaserUrl, title)] : []),
    ...galleryImages,
  ]);
}

function getActivityRating(detail: TGatewayActivityDetail) {
  const score =
    detail.productContext.rating?.score ??
    getNumber(detail.activity, ["rating", "average_rating"]);
  const count =
    detail.productContext.rating?.count ??
    getNumber(detail.activity, ["rating", "num_ratings"]);

  return score
    ? {
        score,
        count: count ?? undefined,
        stacked: true,
      }
    : undefined;
}

function getActivityInfoItems(
  detail: TGatewayActivityDetail
): ProductInfoListItem[] {
  const weather = detail.productContext.weather;
  const meetingPoint = detail.productContext.meetingPoint;
  const items: Array<ProductInfoListItem | null> = [
    detail.productContext.openingHours
      ? {
          icon: <Icon icon={Clock3} />,
          title: "Öffnungszeiten",
          subtitle: detail.productContext.openingHours,
        }
      : null,
    weather
      ? {
          icon: <Icon icon={Cloud} />,
          title: weather.description ?? weather.locationName,
          subtitle: `${weather.temperature}°C | ${weather.precipitation} mm/h`,
        }
      : null,
    meetingPoint?.displayText || meetingPoint?.address
      ? {
          icon: <Icon icon={MapPin} />,
          title: "Adresse",
          subtitle: [
            meetingPoint.distanceKm ? `${meetingPoint.distanceKm} km` : null,
            meetingPoint.displayText ?? meetingPoint.address,
          ]
            .filter(Boolean)
            .join(" | "),
        }
      : null,
  ];

  return items.filter((item): item is ProductInfoListItem => item !== null);
}

function getActivityContentItems(detail: TGatewayActivityDetail) {
  return getArray(detail.activity, ["content_blocks"])
    .flatMap((item, index) => {
      const title = getString(item, ["title"]);
      const html = getString(item, ["text"]);

      return title && html
        ? [
            {
              id: `${title}-${index}`,
              title,
              content: (
                <div
                  className="[&_li]:mb-1 [&_p]:mb-3 [&_p]:break-words [&_p]:text-[14px] [&_p]:leading-relaxed [&_p]:text-gray-700 [&_strong]:font-semibold [&_ul]:list-disc [&_ul]:pl-5"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              ),
            },
          ]
        : [];
    });
}

function getReviewerName(review: UnknownRecord) {
  return (
    [getString(review, ["reviewer", "first_name"]), getString(review, ["reviewer", "last_name"])]
      .filter(Boolean)
      .join(" ") || "Gast"
  );
}

function getActivityReviews(detail: TGatewayActivityDetail): SectionReviewsReview[] {
  return detail.reviews.flatMap((review, index) => {
    if (!isRecord(review)) {
      return [];
    }

    const text = getString(review, ["review"]);
    const rating = getNumber(review, ["rating"]);

    if (!text || !rating) {
      return [];
    }

    return [
      {
        id: String(getValue(review, ["product_review_id"]) ?? index),
        author: getReviewerName(review),
        category: getString(review, ["category"]) || undefined,
        countryCode: getString(review, ["countryCode"]) || undefined,
        date: getString(review, ["date_created"]),
        rating,
        searchTerms: [text, getReviewerName(review)],
        text,
        upvoteCount: getNumber(review, ["upvoteCount"]) ?? undefined,
      },
    ];
  });
}

function formatPrice(value: number | null) {
  return value ? `CHF ${value}` : "";
}

function toActivityCardItem(value: unknown): TGatewayActivityCardItem | null {
  if (!isRecord(value)) {
    return null;
  }

  const id = String(getValue(value, ["id"]) ?? "");
  const title = getString(value, ["info", "title"]) || getString(value, ["title"]);
  const imageUrl = getString(value, ["teaser_image", "url"]);

  if (!id || !title) {
    return null;
  }

  return {
    id,
    title,
    type: "activity",
    imageUrl: imageUrl || null,
    priceFormatted: formatPrice(getNumber(value, ["summary", "startingPrice"])),
    rating: getNumber(value, ["rating", "average_rating"]),
    reviewCount: getNumber(value, ["rating", "num_ratings"]),
    path: getString(value, ["urls", "de_CH"]) || "#",
    subtitle: getString(value, ["location", "title"]) || null,
  };
}

function getRelatedActivities(detail: TGatewayActivityDetail): ActivityItem[] {
  return getArray(detail.activity, ["similarActivities"])
    .flatMap((item) => {
      const gatewayItem = toActivityCardItem(item);

      return gatewayItem
        ? [
            toGatewayActivityItemData(gatewayItem, {
              locale: "de_CH",
              labels: gatewayLabels,
              priceLabel,
              fromLabel,
            }),
          ]
        : [];
    })
    .slice(0, 8);
}

export function GatewayActivityDetailPage({
  detail,
}: {
  detail: TGatewayActivityDetail;
}) {
  const title = getActivityTitle(detail);

  return (
    <main className="min-h-screen bg-white lg:pt-8">
      <SectionProduct
        title={title}
        images={getActivityImages(detail)}
        backLabel="Zurück"
        rating={getActivityRating(detail)}
        badges={[
          {
            icon: <Icon icon={Star} />,
            title: `${detail.reviewSummary.totalAverage.toFixed(1)}`,
            subtitle: `${detail.reviewSummary.totalAmount} Bewertungen`,
          },
        ]}
        description={getString(detail.activity, ["info", "teaser"])}
        infoItems={getActivityInfoItems(detail)}
        reviewsContent={
          <SectionReviews
            averageRating={detail.reviewSummary.totalAverage}
            labels={getSectionReviewsLabels()}
            reviewCount={detail.reviewSummary.totalAmount}
            reviews={getActivityReviews(detail)}
          />
        }
        contentItems={getActivityContentItems(detail)}
        relatedActivitiesTitle="Weitere Aktivitäten"
        relatedActivities={getRelatedActivities(detail)}
      />
    </main>
  );
}

function getNonBookableImages(detail: TGatewayNonBookableDetail) {
  const title = detail.title ?? "Detail";

  return uniqueImages(
    [detail.coverImage, ...(detail.photos ?? [])].flatMap((src) =>
      src ? [toImageValue(src, title)] : []
    )
  );
}

function formatAmenityLabel(key: string) {
  return key
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/_/g, " ")
    .trim()
    .replace(/^./, (match) => match.toUpperCase());
}

function getNonBookableDetailSections(detail: TGatewayNonBookableDetail) {
  const amenityEntries = Object.entries(detail.amenities ?? {});

  return amenityEntries.length
    ? [
        {
          id: "amenities",
          title: "Ausstattung",
          items: amenityEntries.map(
            ([key, value]): NonBookableFactItem => ({
            id: key,
            label: formatAmenityLabel(key),
            status:
              typeof value === "boolean"
                ? value
                  ? "available"
                  : "unavailable"
                : "neutral",
            value:
              typeof value === "number" && Number.isFinite(value)
                ? String(value)
                : undefined,
            })
          ),
        },
      ]
    : [];
}

function getNonBookableHighlights(
  detail: TGatewayNonBookableDetail
): ProductInfoListItem[] {
  const items: Array<ProductInfoListItem | null> = [
    detail.canton
      ? {
          icon: <Icon icon={MapPin} />,
          title: "Kanton",
          subtitle: detail.canton,
        }
      : null,
    detail.location?.lat && detail.location.lng
      ? {
          icon: <Icon icon={MapPin} />,
          title: "Koordinaten",
          subtitle: `${detail.location.lat}, ${detail.location.lng}`,
        }
      : null,
  ];

  return items.filter((item): item is ProductInfoListItem => item !== null);
}

function getNonBookableRelatedActivities(
  detail: TGatewayNonBookableDetail
): ActivityItem[] {
  return (detail.nearbySection?.data ?? [])
    .filter((item): item is TGatewayActivityCardItem => item.type !== "review")
    .map((item) =>
      toGatewayActivityItemData(item, {
        locale: "de_CH",
        labels: gatewayLabels,
        priceLabel,
        fromLabel,
      })
    );
}

export function GatewayNonBookableDetailPage({
  detail,
}: {
  detail: TGatewayNonBookableDetail;
}) {
  return (
    <main className="min-h-screen bg-white lg:pt-8">
      <SectionNonBookable
        title={detail.title ?? "Detail"}
        images={getNonBookableImages(detail)}
        backLabel="Zurück"
        description={detail.description}
        highlights={getNonBookableHighlights(detail)}
        detailSections={getNonBookableDetailSections(detail)}
        sourceLabel="Quelle öffnen"
        sourceHref={detail.sourceUrl ?? undefined}
        relatedActivitiesTitle={detail.nearbySection?.title ?? "In der Nähe"}
        relatedActivities={getNonBookableRelatedActivities(detail)}
      />
    </main>
  );
}
