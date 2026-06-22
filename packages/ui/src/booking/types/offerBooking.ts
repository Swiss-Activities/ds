import type { Price } from "./generated";

type TPrice = Price;

type TOfferBooking = {
  offerId: number;
  contentApiOfferId: number;
  categoryTypes: string[];
  offerLabel: string;
  sequenceIndex: number;
  openingHours: string | null;
  transportType: string | null;
  startingPrice: TPrice;
  ticketCategories: {
    ticketCategoryHash: string;
    ticketCategoryId: number;
    minAge: number;
    maxAge: number;
    categoryTypeKey: string;
    price: TPrice;
    distributorNetPrice: TPrice | null;
    articlePrice: TPrice | null;
    articleLabel: string | null;
    occupancy: number;
    maxOccupancy: number | null;
    audience: string;
    discountType: string | null;
    occupancyType: string;
    note: string;
    categoryType: string | null;
    isActiveForPartnerapi: boolean;
    sequenceIndex: number;
    activeForPartnerapi: boolean;
    isVisible?: boolean;
    label: {
      formatted: string;
      audience: string;
      discount: string | null;
      ageRestriction: string;
      occupancy: number | null;
    };
  }[];
  durations: string[];
  availabilities: {
    availabilityId: string;
    ticketCategoryIds: number[];
    isAllDay: boolean;
    startsAt: string;
    endsAt: string;
    cutoff: string;
    capacity: number | null;
    cancellableUntil: string;
    durationInHour: number | null;
    validity: string;
    personalizationFields: {
      key: string;
      label: string;
      scope: string;
      type: string;
      options: { key: string; label: string }[];
      isStrict: boolean;
      order: number;
    }[];
    startingPrice: TPrice;
    openingHours: string | null;
    selection?: {
      ticketCategoryId: number;
      numGuests: number;
    }[];
    price?: TPrice;
  }[];
  validities: string[];
  durationInHours: string[];
  tickets?: {
    audience: string;
    label: {
      formatted: string;
      audience: string;
      discount: string | null;
      ageRestriction: string | null;
      occupancy: string | null;
    };
    minAge: number;
    maxAge: number | null;
    minPax: number | null;
    maxPax: number | null;
    minPrice: TPrice;
    maxPrice: TPrice;
    categories: {
      value: string;
      label: string;
      discounts: string[];
      ticketCategoryIds: number[];
    }[];
    discounts: {
      value: string;
      label: string;
      categories: string[];
      ticketCategoryIds: number[];
    }[];
    prices: {
      category: string;
      discount: string | null;
      prices: {
        ticketCategoryId: number;
        minPax: number | null;
        maxPax: number | null;
        price: TPrice;
      }[];
    }[];
    computedPrices?: {
      pax: number;
      price: TPrice;
    }[];
  }[];
};

export type { TOfferBooking };
