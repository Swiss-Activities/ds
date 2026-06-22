import type { TReview } from "../../types/reviews";
import { axiosApiInstance } from "../axios";

const ACTIVITY_REVIEWS_CACHE: Record<string, TReview[]> = {};
const REVIEWS_PER_PAGE = 500;

type ReviewsResponse = {
  data: TReview[];
  pagination: {
    total: number;
    page: number;
    perPage: number;
    totalPages: number;
    hasMore: boolean;
  };
};

async function getActivityReviewsPage(
  activityId: string,
  locale: string,
  page: number
) {
  const response = await axiosApiInstance("/data/v1/reviews/", {
    params: {
      activityId,
      locale,
      page,
      perPage: REVIEWS_PER_PAGE,
    },
  });

  return response.data as ReviewsResponse;
}

export async function getActivityReviews(activityId: string, locale: string) {
  if (!activityId || activityId === "undefined") {
    return [];
  }

  const cacheKey = `${activityId}-${locale}`;

  if (ACTIVITY_REVIEWS_CACHE[cacheKey]) {
    return ACTIVITY_REVIEWS_CACHE[cacheKey];
  }

  const firstPage = await getActivityReviewsPage(activityId, locale, 1);
  const totalPages = firstPage.pagination.totalPages;

  if (totalPages <= 1) {
    ACTIVITY_REVIEWS_CACHE[cacheKey] = firstPage.data;
    return firstPage.data;
  }

  const remainingPages = await Promise.all(
    Array.from({ length: totalPages - 1 }, (_, index) =>
      getActivityReviewsPage(activityId, locale, index + 2)
    )
  );

  const reviews = [firstPage, ...remainingPages].flatMap((page) => page.data);

  ACTIVITY_REVIEWS_CACHE[cacheKey] = reviews;

  return reviews;
}
