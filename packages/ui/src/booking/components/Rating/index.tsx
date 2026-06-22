import type { ReactNode } from "react";
import { Rating as DSRating } from "@swiss-activities/ui";
import type { RatingSize } from "@swiss-activities/ui/rating/rating.types";
import { TActivity } from "../../types/activity";
import { cn } from "../../utils/css/cn";
import { useI18n } from "../../utils/i18n/useI18n";

type RatingProps = {
  activity?: TActivity;
  amount?: number;
  amountOnly?: boolean;
  className?: string;
  classNameOuter?: string;
  link?: string;
  minRating?: number;
  rating?: number;
  showScore?: boolean;
  type?: "xs" | "sm" | "md" | "lg";
  white?: boolean;
};

export const Rating = ({
  activity,
  amount = 0,
  amountOnly = false,
  className = "",
  classNameOuter = "",
  link,
  minRating = 0,
  rating,
  showScore = true,
  type = "md",
  white = false,
}: RatingProps) => {
  const { t } = useI18n();
  const isSm = type === "sm" || type === "xs";
  const isXs = type === "xs";

  const ratingScore = rating
    ? rating
    : parseFloat((activity?.rating?.average_rating as string) || "0");
  const ratingAmount = amount ? amount : activity?.rating?.num_ratings || 0;

  if (!(ratingAmount >= 1 || rating)) return null;
  if (minRating > Number(ratingScore)) return null;

  const color = {
    "!font-medium": true,
    "!text-white lg:!text-gray-700": white,
    "text-gray-700": !white,
  };

  let label: ReactNode = undefined;
  if (!isSm && ratingAmount) {
    if (amountOnly) {
      label = (
        <>
          {" "}
          <span className={cn("text-xs", color)}>({ratingAmount})</span>
        </>
      );
    } else {
      const labelContent = (
        <>
          {" "}
          <span className={cn("relative flex text-xs", color)}>
            ({ratingAmount}{" "}
            {ratingAmount === 1 ? t("activity.rating") : t("activity.reviews")}
            {activity?.summary?.ticketsIssued &&
            activity.summary.ticketsIssued >= 5
              ? ` - ${t("activity.booked", {
                  val: activity?.summary?.ticketsIssued,
                })})`
              : ")"}
          </span>
        </>
      );
      label = link?.length ? (
        <a
          className="underline decoration-gray-700 hover:no-underline"
          href={link}
        >
          {labelContent}
        </a>
      ) : (
        labelContent
      );
    }
  }

  const size: RatingSize = type === "md" ? "default" : type;

  return (
    <DSRating
      score={ratingScore}
      count={ratingAmount}
      size={size}
      showScore={showScore && !!ratingScore}
      label={label}
      className={cn(
        classNameOuter,
        { "me-2": isSm, "!me-0": isXs },
        className,
        color
      )}
    />
  );
};
