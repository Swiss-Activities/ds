import {
  axiosInstance,
  axiosInstanceAuth,
  axiosInstanceAuthPatch,
} from "./axios";
import { getOffers as getCapiOffers } from "./offers/getOffersCapi";
import { getToken } from "./token";
import { logError } from "../utils/thirdParty/logError";

// Reservations

export const getReservations = async (
  reservationId: string,
  locale: string
) => {
  const offers = await getCapiOffers(locale);

  return axiosInstance
    .get(`/reservations/${reservationId}`)
    .then((response) => {
      return {
        ...response.data,
        ticketReservations: response.data.ticketReservations.map(
          (e: { offer?: { contentApiId?: number; label?: string } }) => {
            return {
              ...e,
              offer: {
                ...e.offer,
                label:
                  offers.find((x) => parseInt(x.id) === e?.offer?.contentApiId)
                    ?.label || e?.offer?.label,
              },
            };
          }
        ),
      };
    })
    .catch((err) => logError(err));
};

export const syncOffer = async (offerId: string, token: string) => {
  return axiosInstanceAuthPatch(token)
    .patch(`/offers/${offerId}/sync`, {
      action: "schedule",
    })
    .then((response) => response.data)
    .catch((err) => logError(err));
};

export const updateOffer = async (
  offerId: string,
  token: string,
  data: unknown
) => {
  return axiosInstanceAuthPatch(token)
    .patch(`/offers/${offerId}`, data)
    .then((response) => {
      return response.data;
    });
};

// Payment

export const getPaymentAttempts = async (id: string) => {
  return axiosInstance
    .get(`/payment_attempts/${id}`)
    .then((response) => response.data)
    .catch((err) => logError(err));
};

// Bookings

export const getBooking = async (id: string) => {
  return axiosInstance
    .get(`/bookings/${id}`)
    .then((response) => response.data)
    .catch((err) => logError(err));
};

type GetUserBookingsParams = {
  oauthUserId: string;
  token: string;
  status?: "all" | "booked" | "cancelled";
  time?: "all" | "upcoming" | "past";
  page?: number;
  itemsPerPage?: number;
};

type GetUserBookingsResponse = {
  bookings: any[];
  paging: {
    page: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
  };
};

export const getUserBookings = async ({
  oauthUserId,
  token,
  status = "all",
  time = "all",
  page = 1,
  itemsPerPage = 10,
}: GetUserBookingsParams): Promise<GetUserBookingsResponse> => {
  return axiosInstanceAuth(token)
    .get(`/v1/users/${oauthUserId}/bookings`, {
      params: { status, time, page, itemsPerPage },
    })
    .then((response) => response.data)
    .catch((err) => {
      logError(err);
      return {
        bookings: [],
        paging: { page: 1, itemsPerPage, totalItems: 0, totalPages: 0 },
      };
    });
};

export const getBookings = async (data: {}, token: string) => {
  const params = new URLSearchParams(data).toString();
  return axiosInstanceAuth(token)
    .get(`/bookings?${params}`)
    .then((response) => response.data)
    .catch((err) => logError(err));
};

export const getBookingsSummary = async (id: string, token: string) => {
  return axiosInstanceAuth(token)
    .get(`/bookings/summary`, {
      params: {
        bookingId: [id],
      },
    })
    .then((response) => response.data)
    .catch((err) => logError(err));
};

// Suppliers

export const getSuppliers = async () => {
  const token = await getToken();

  return axiosInstanceAuth(token)
    .get(`/suppliers?itemsPerPage=1000`)
    .then((response) => response.data)
    .catch((err) => logError(err));
};

export const getSupplier = async (id: string) => {
  const token = await getToken();

  return axiosInstanceAuth(token)
    .get(`/suppliers/CA${id}`)
    .then((response) => response.data)
    .catch((err) => logError(err));
};

export const getSupplierById = async (id: string) => {
  const token = await getToken();

  return axiosInstanceAuth(token)
    .get(`/suppliers/${id}`)
    .then((response) => response.data)
    .catch((err) => logError(err));
};

// Distributors

type Props = {
  token: string;
  name?: string;
  page?: number;
};
export const getDistributors = async ({ token, ...rest }: Props) => {
  return axiosInstanceAuth(token)
    .get("/distributors", { params: rest })
    .then((response) => response.data)
    .catch((err) => logError(err));
};

// Activities

export const getDates = async () => {
  return axiosInstance
    .get("/activities/dates")
    .then((response) => response.data)
    .catch((err) => logError(err));
};

export const getSummaries = async (params: unknown) => {
  return axiosInstance
    .get("/activities/summaries", {
      params,
    })
    .then((response) => response.data)
    .catch((err) => logError(err));
};

export const getOffers = async (activityId: string, token: string) => {
  return axiosInstanceAuth(token)
    .get(`/activities/${activityId}/offers`)
    .then((response) => response.data)
    .catch((err) => logError(err));
};

// Ticket Categories

export const getTicketCategoriesOptions = async () => {
  return axiosInstance
    .get("/ticket_categories/options", {
      params: {
        locale: "en_CH",
      },
    })
    .then((response) => response.data)
    .catch((err) => logError(err));
};

// Reservation systems

export const getReservationSystems = async () => {
  return axiosInstance
    .get("/swissactivities/reservation_system")
    .then((response) => response.data)
    .catch((err) => logError(err));
};

// Duplicate

export const duplicateOffer = async (id: number) => {
  return axiosInstance
    .get(`/offers/${id}/duplicate`)
    .then((response) => response.data);
};

export const duplicateSchedule = async (id: number) => {
  return axiosInstance
    .get(`/schedules/${id}/duplicate`)
    .then((response) => response.data);
};

export const duplicateTicketCategory = async (id: number) => {
  return axiosInstance
    .get(`/ticket_categories/${id}/duplicate`)
    .then((response) => response.data);
};
