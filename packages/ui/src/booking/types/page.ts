type TPage = {
  activityId: string;
  activityIds: string[];
  attribute?: {
    uniqueId: string;
    id: string;
    title: string;
    slug: string;
    urls: { [key: string]: string };
    teaser_image: { url: string; alternativeText: string };
  };
  blogType:
    | {
        id: string;
        slug: string;
        title: string;
      }[]
    | null;
  dataLayer: {
    tile_name: string;
    tile_type: string;
    tile_url: string;
    list_name: string;
  };
  listingId: string;
  locationId: string;
  locale: string;
  numActivities: number;
  path: string;
  sitemap: boolean;
  sitemapPath?: string;
  title: string;
  titleFrontend: string;
  type: string;
  listingType: string;
  typeId: string;
  updatedAt: string;
};

export type { TPage };
