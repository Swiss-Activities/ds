type TReview = {
  product_review_id: string;
  category: string;
  countryCode: string;
  date_created: string;
  exclude: boolean;
  locale: string | null;
  product: string;
  rating: number;
  review: string;
  reviewer: { first_name: string; last_name: string };
  sku: string;
  tags: { tag: string }[];
  replies: {
    comments: string;
  }[];
  upvoteCount?: number;
};

export type { TReview };
