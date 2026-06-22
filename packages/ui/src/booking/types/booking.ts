import type { BookingDistributor, Price } from "./generated";
import { TUser as TCurrentUser } from "./user";

export type TPrice = Price;
export type TDistributor = Required<BookingDistributor>;

type TBookingItemReservation = {
  reservationId?: string;
  description?: string;
  totalPrice?: TPrice;
  confirmedAt?: string | null;
  [key: string]: unknown;
};

type TBookingItem = {
  bookingItemId?: string;
  startsAt?: string;
  endsAt?: string;
  isAllDay?: boolean;
  cancelledAt?: string | null;
  isCancellable?: boolean;
  totalPrice?: TPrice;
  service?: { offer?: string };
  reservations: TBookingItemReservation[];
  guests?: {
    guestId: string;
    ticketCategoryLabel: string;
  }[];
  relatedIds: {
    activity_id: number;
    activity_id_capi: string;
    supplier_id: number;
    offer_id: number;
  };
  complementaryReferences?: {
    complementary_activity_id: number;
    complementary_capi_activity_id: number;
    complementary_offer_id: number;
    complementary_capi_offer_id: number;
    image_url: string;
    text: string;
  }[];
};

type TBooking = {
  bookingId: string;
  bookingStatus: string;
  createdAt: string;
  description: string[];
  distributor: TDistributor;
  items: TBookingItem[];
  locale: string;
  notes: string;
  paymentStatus: string;
  serviceDate: string;
  totalGross: TPrice;
  totalNet: TPrice;
  user: TUser;
  vat: TPrice;
  currentUser?: TCurrentUser | null;
};

type TUser = {
  email: string;
  fullName: string;
  userId: number;
};

export type { TBooking, TUser };
