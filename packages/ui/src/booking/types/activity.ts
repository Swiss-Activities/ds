import type { Price } from "./generated";
import { TUser } from "./user";

type TPrice = Price;

type TBaseActivity = {
  attribute_values: TAttributeValue[];
  attributes: TAttributes;
  availableDates: string[];
  bookingOnRequest?: boolean;
  breadcrumbs: TUrls[];
  content_blocks: TContentBlock[];
  created_at?: string;
  dataLayer: TDataLayer;
  destination: TDestination;
  distance?: number;
  excluded_benefits: THighlight[];
  gallery: TImage[];
  id: string;
  included_benefits: THighlight[];
  info: TInfo;
  infoConfirmationRequired?: boolean;
  isActive?: boolean;
  lat: number;
  listings: { id: string }[];
  lng: number;
  locale: string;
  location: TLocation;
  mappedId: string;
  meeting_points: TMeetingPoint[];
  offered_benefits: THighlight[];
  parent_listing: null | { id: string };
  rating: TRating;
  raw: {
    important_information: string;
    benefits: string;
    content_blocks: string;
  };
  region: {
    id: string;
    title: string;
  };
  similarActivities: TActivity[];
  summary: TSummary;
  supplier: TSupplier;
  teaser_image: TImage;
  title: string;
  type: TActivityType;
  urls: TUrls[];
  user?: TUser | null;
};

type TActivity = TBaseActivity & {
  createdAt: string;
  translations?: TBaseActivity[];
};

type TAttributes = {
  [key: string]: {
    label: string;
    attributeId?: string;
    attributeLabel?: string;
    types: string[];
    items: {
      description: string | undefined;
      index?: number;
      id: string;
      uniqueId: string;
      label: string;
      labelEn: string;
      teaser_image?: {
        url: string;
        alternativeText: string;
      };
      type: string;
    }[];
  };
};

type TDataLayer = {
  attribute: string;
  breadcrumbs: string[];
  id: string;
  reservationSystem: string;
  supplier: string;
  title: string;
  type: string;
};

type TSupplier = {
  id: string;
  name: string;
};

type TContentBlock = {
  text: string;
  title: string;
  youtube_url: string;
};

type TDestination = {
  id: string;
  latitude: string;
  longitude: string;
};

type TImage = {
  alternativeText: string;
  caption: null | string;
  id: string;
  url: string;
};

type TAttributeValue = {
  attribute: TAttribute;
  id: string;
  value: string;
};

type TAttribute = {
  id: string;
  label: string;
};

type TLocation = {
  id: string;
  slug: string;
  title: string;
  parent?: TLocation;
};

type TActivityType = {
  id: string;
  slug: string;
  title: string;
};

type TMeetingPoint = {
  id?: string;
  address: string;
  label: string;
  latitude: string;
  longitude: string;
};

type TInfo = {
  benefits: THighlight[];
  highlights: THighlight[];
  important_information: string;
  slug: string;
  teaser: string;
  teaser_image_alt_text: string;
  title: string;
  external_website: string;
};

type THighlight = {
  text: string;
  type?: string;
};

type TRating = {
  average_rating: string;
  lookup: string;
  name: string;
  num_ratings: number;
  sku: string;
};

type TUrls = {
  title: "string";
  urls: {
    [key: string]: string;
  };
};

type TSummary = {
  activityId: number;
  adStrategy: string;
  availableTicketCategory: null | string;
  bookingOnRequest: boolean;
  cancellation: boolean;
  cancellationCutOff: number;
  contentApiActivityId: number;
  discount: Record<string, string>[];
  distributorCommission?: number;
  durationInHours: string[];
  durations: (number | string)[];
  dynamicPrice: boolean;
  guideLanguages: string;
  highDemand: boolean;
  infoConfirmationRequired: boolean;
  maxAge: number;
  maxPrice: TPrice;
  minAdultPrice: TPrice;
  minAdultPriceStartdate: string;
  minAge: number;
  minPrice: TPrice;
  numOffers: number;
  openingHours: null | string;
  popularity: number;
  rankingScoreValue: number;
  rankingScoreNoDate: number;
  resTech: boolean;
  reservationSystem: string;
  showPerPersonSuffix: boolean;
  startingPrice: TPrice;
  ticketsIssued: number;
  validities: string[];
};

export type {
  TActivity,
  TActivityType,
  TAttribute,
  TAttributeValue,
  TContentBlock,
  TDestination,
  THighlight,
  TImage,
  TInfo,
  TLocation,
  TMeetingPoint,
  TRating,
  TSummary,
  TSupplier,
  TUrls,
};
