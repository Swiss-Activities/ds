import type { Price } from "./generated";

type TPrice = Price;

type TReservation = {
  reservationId: string;
  activityId: number;
  capiActivityId: number;
  offerId: number;
  capiOfferId: number;
  cancellableUntil: string;
  complementaryReferences: {
    complementary_activity_id: number;
    complementary_capi_activity_id: number;
    complementary_offer_id: number;
    complementary_capi_offer_id: number;
    image_url: string;
    text: string;
  }[];
  startsAt: string;
  endsAt: string;
  expiresAt: string;
  isAllDay: boolean;
  duration: string;
  durationInHour: number | null;
  validity: string;
  ticketReservations: {
    ticketCategoryLabel: string;
    seatPrice: TPrice;
    occupancy: number;
  }[];
  infoConfirmationRequired: boolean;
  averageRating: number;
  numberOfRatings: number;
};

type TCart = {
  cartId: string;
  locale: string;
  ip: string;
  reservationsGross: TPrice;
  distributorGross: TPrice;
  reservationsVat: TPrice;
  reservationsNet: TPrice;
  rebatesTotal: TPrice;
  total: TPrice;
  createdAt: string;
  customerServiceFee: TPrice;
  reservations: TReservation[];
  rebateCodes: string[];
};

export type { TCart };
