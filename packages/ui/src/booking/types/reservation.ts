import type { Price, ReservationGuest } from "./generated";

type TPrice = Price;
type TGuest = Required<ReservationGuest>;

type TReservation = {
  reservationId: string;
  cart: {
    cartId: string;
  };
  ticketUsed: string[];
  startsAt: string;
  endsAt: string;
  ticketReservations: TTicketReservation[];
  personalizationData: {
    guide_language: string;
  };
  createdAt: string;
  expiresAt: string;
  cancelledAt: string | null;
  confirmedAt: string | null;
  totalPrice: TPrice;
  isBooked: boolean;
  description: string;
  axessTime: string | null;
  slotTicketTime: string | null;
  offerId: number;
  cancellableUntil: string;
  tripId: string | null;
  isCancellable?: boolean;
  bookingItemId?: string;
  validity?: string | null;
};

type TTicketReservation = {
  ticketReservationId: number;
  reservation: string;
  ticketCategory: {
    ticketCategoryId: number;
    note: string | null;
    articlePrice: TPrice | null;
    articleLabel: string | null;
    categoryType: string | null;
    occupancyType: string;
    label: {
      formatted: string;
      audience: string;
      discount: string | null;
      ageRestriction: string;
      occupancy: string | null;
    };
  };
  ticketCategoryLabel: string;
  audience: string;
  discountType: string | null;
  occupancyType: string;
  seatPrice: TPrice;
  grossSeatPrice: TPrice;
  guests: TGuest[];
  createdAt: string;
  updatedAt: string;
  currencyCode: string;
  offer: {
    offerId: number;
    label: string;
    contentApiId: number;
  };
  description: string;
  seatPriceCommission: TPrice;
  totalCommission: TPrice;
};

export type { TReservation, TTicketReservation, TGuest };
