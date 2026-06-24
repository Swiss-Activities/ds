import { create } from "zustand";
import type { TActivity } from "./types/activity";
import type { TOfferBooking } from "./types/offerBooking";
import type { TPersonalizedOption } from "./types/personalizedOptions";
import type { TReservation } from "./types/reservation";
import type { MonthlyAvailability } from "./query/activity/getMonthlyAvailabilities";

export type BookingStore = {
  analyticsIds: string[];
  setAnalyticsIds: (analyticsIds: string) => void;

  active:
    | "offers"
    | "tickets"
    | "date"
    | "personalized"
    | "total"
    | "trash"
    | "products";
  setActive: (selected: BookingStore["active"]) => void;

  activity: TActivity | null;
  setActivity: (activityId: BookingStore["activity"]) => void;

  availability: TOfferBooking["availabilities"][number] | null;
  setAvailability: (availabilityId: BookingStore["availability"]) => void;

  bookingId: string | null;
  setBookingId: (bookingId: BookingStore["bookingId"]) => void;

  date: string | null;
  setDate: (date: BookingStore["date"]) => void;

  dates: MonthlyAvailability;
  setDates: (dates: BookingStore["dates"]) => void;

  error: string | null;
  setError: (error: BookingStore["error"]) => void;

  flowType: "date-offers" | "offers-date";
  setFlowType: (flowType: BookingStore["flowType"]) => void;

  isChat: boolean;
  setIsChat: (isChat: BookingStore["isChat"]) => void;

  isCheckout: boolean;
  setIsCheckout: (isCheckout: BookingStore["isCheckout"]) => void;

  isRebook: boolean;
  setIsRebook: (isRebook: BookingStore["isRebook"]) => void;

  isLoading: boolean;
  setIsLoading: (isLoading: BookingStore["isLoading"]) => void;

  isReservationLoaded: boolean;
  setIsReservationLoaded: (isReservationLoaded: boolean) => void;

  isRestore: boolean;
  setIsRestore: (isRestoreError: BookingStore["isRestore"]) => void;

  isRestoreError: boolean;
  setIsRestoreError: (isRestoreError: BookingStore["isRestoreError"]) => void;

  isInlineCheckout: boolean;
  setIsInlineCheckout: (
    inlineCheckout: BookingStore["isInlineCheckout"]
  ) => void;

  offer: TOfferBooking | null;
  setOffer: (offer: BookingStore["offer"]) => void;

  offerId: number | null;
  setOfferId: (offer: BookingStore["offerId"]) => void;

  personalizedOptions: TPersonalizedOption[];
  setPersonalizedOptions: (
    personalizedOptions: BookingStore["personalizedOptions"]
  ) => void;

  personalizedOptionsCache: Record<string, TPersonalizedOption[]>;
  setPersonalizedOptionsCache: (
    id: string,
    personalizedOptionsCache: TPersonalizedOption[]
  ) => void;

  personalizedOptionsValidated: boolean;
  setPersonalizedOptionsValidated: (
    personalizedOptionsValidated: BookingStore["personalizedOptionsValidated"]
  ) => void;

  personalizedOptionsValues: any;
  setPersonalizedOptionsValues: (
    personalizedOptionsValues: BookingStore["personalizedOptionsValues"]
  ) => void;

  reservation: TReservation | null;
  setReservation: (reservation: BookingStore["reservation"]) => void;

  tickets: {
    [key: string]: number;
  };
  setTickets: (tickets: BookingStore["tickets"]) => void;

  ticketsAudiences: {
    [key: string]: number;
  };
  setTicketAudienceAmount: (audience: string, amount: number) => void;
  incrementTicketAudience: (audience: string) => void;
  decrementTicketAudience: (audience: string) => void;
  removeParticipant: (audience: string, index: number) => void;

  ticketSelections: {
    [key: string]: number;
  };
  ticketSelectionsMetadata: {
    [key: string]: {
      audience: string;
      discountType: string | null;
      categoryTypeKey: string | null;
    };
  };
  setTicketSelection: (
    key: string,
    ticketCategoryId: number,
    metadata?: {
      audience: string;
      discountType: string | null;
      categoryTypeKey: string | null;
    }
  ) => void;

  ticketClassSelections?: Record<string, "1st_class" | "2nd_class">;
  setTicketClassSelection?: (
    audience: string,
    classType: "1st_class" | "2nd_class"
  ) => void;

  categoryType?: "1st_class" | "2nd_class" | null;
  setCategoryType?: (classType: "1st_class" | "2nd_class") => void;

  hasAutoSelectedTicket: boolean;
  setHasAutoSelectedTicket: (value: boolean) => void;

  showDiscountedTickets: boolean;
  setShowDiscountedTickets: (value: boolean) => void;

  visitedSteps: {
    offers?: boolean;
    tickets?: boolean;
    date?: boolean;
    personalized?: boolean;
  };
  markStepAsVisited: (
    step: "offers" | "tickets" | "date" | "personalized"
  ) => void;

  reset: (data?: Partial<BookingStore>) => void;
  resetInlineCheckout: (data?: Partial<BookingStore>) => void;

  widgetTab: "booking" | "activity";
  setWidgetTab: (widgetTab: BookingStore["widgetTab"]) => void;
};

/**
 * Canonical initial values for the resettable booking fields. Both reset() and
 * resetInlineCheckout() spread this then apply their explicit deltas, so a new
 * field can't silently diverge across the copies the way showDiscountedTickets
 * and isRestoreError already had (PRD Q4). The live store's initial state is
 * built inline below and intentionally keeps personalizedOptionsValues as
 * `false` (a truthiness gate in hooks.ts) — only the resets use `{}`.
 */
const DEFAULT_BOOKING_STATE = {
  active: "date",
  activity: null,
  availability: null,
  bookingId: null,
  dates: {},
  error: null,
  flowType: "date-offers",
  isChat: false,
  isCheckout: false,
  isInlineCheckout: false,
  isLoading: false,
  isRebook: false,
  isReservationLoaded: false,
  isRestore: false,
  isRestoreError: false,
  offer: null,
  offerId: null,
  personalizedOptions: [],
  personalizedOptionsCache: {},
  personalizedOptionsValidated: false,
  personalizedOptionsValues: {},
  reservation: null,
  tickets: {},
  ticketsAudiences: {},
  ticketSelections: {},
  ticketSelectionsMetadata: {},
  ticketClassSelections: {},
  categoryType: null,
  hasAutoSelectedTicket: false,
  showDiscountedTickets: true,
  visitedSteps: {},
} satisfies Partial<BookingStore>;

export const useBookingStore = create<BookingStore>((set, get) => {
  let widgetTab = "booking" as BookingStore["widgetTab"];

  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    widgetTab = (params.get("widgetNavigationTab") ??
      "booking") as BookingStore["widgetTab"];
  }

  return {
    analyticsIds: [],
    setAnalyticsIds: (analyticsIds) =>
      set({
        analyticsIds: [...get().analyticsIds, analyticsIds],
      }),

    active: "date",
    setActive: (active: BookingStore["active"]) => set({ active }),

    activity: null,
    setActivity: (activity: BookingStore["activity"]) => set({ activity }),

    availability: null,
    setAvailability: (availability: BookingStore["availability"]) =>
      set({ availability }),

    bookingId: null,
    setBookingId: (bookingId: BookingStore["bookingId"]) => set({ bookingId }),

    date: null,
    setDate: (date: BookingStore["date"]) => set({ date }),

    dates: {},
    setDates: (dates: BookingStore["dates"]) => set({ dates }),

    error: null,
    setError: (error: BookingStore["error"]) => set({ error }),

    flowType: "date-offers",
    setFlowType: (flowType: BookingStore["flowType"]) => set({ flowType }),

    isChat: false,
    setIsChat: (isChat: BookingStore["isChat"]) => set({ isChat }),

    isCheckout: false,
    setIsCheckout: (isCheckout: BookingStore["isCheckout"]) =>
      set({ isCheckout }),

    isLoading: false,
    setIsLoading: (isLoading: BookingStore["isLoading"]) => set({ isLoading }),

    isRebook: false,
    setIsRebook: (isRebook: BookingStore["isRebook"]) => set({ isRebook }),

    isReservationLoaded: false,
    setIsReservationLoaded: (isReservationLoaded: boolean) =>
      set({ isReservationLoaded }),

    isInlineCheckout: false,
    setIsInlineCheckout: (isInlineCheckout: BookingStore["isInlineCheckout"]) =>
      set({ isInlineCheckout }),

    isRestore: false,
    setIsRestore: (isRestore: BookingStore["isRestore"]) => set({ isRestore }),

    isRestoreError: false,
    setIsRestoreError: (isRestoreError: BookingStore["isRestoreError"]) =>
      set({ isRestoreError }),

    offer: null,
    setOffer: (offer: BookingStore["offer"]) => set({ offer }),

    offerId: null,
    setOfferId: (offerId: BookingStore["offerId"]) => set({ offerId }),

    personalizedOptions: [],
    setPersonalizedOptions: (
      personalizedOptions: BookingStore["personalizedOptions"]
    ) => set({ personalizedOptions }),

    personalizedOptionsCache: {},
    setPersonalizedOptionsCache: (id, personalizedOptionsCache) => {
      const cache = { ...get().personalizedOptionsCache };
      cache[id] = personalizedOptionsCache;
      set({ personalizedOptionsCache: cache });
    },

    personalizedOptionsValidated: false,
    setPersonalizedOptionsValidated: (personalizedOptionsValidated) =>
      set({ personalizedOptionsValidated }),

    personalizedOptionsValues: false,
    setPersonalizedOptionsValues: (personalizedOptionsValues) =>
      set({ personalizedOptionsValues }),

    reservation: null,
    setReservation: (reservation: BookingStore["reservation"]) =>
      set({ reservation }),

    tickets: {},
    setTickets: (tickets: BookingStore["tickets"]) => set({ tickets }),

    ticketsAudiences: {},
    setTicketAudienceAmount: (audience: string, amount: number) =>
      set((state) => ({
        ticketsAudiences: {
          ...state.ticketsAudiences,
          [audience]: amount,
        },
      })),

    incrementTicketAudience: (audience: string) =>
      set((state) => ({
        ticketsAudiences: {
          ...state.ticketsAudiences,
          [audience]: (state.ticketsAudiences[audience] || 0) + 1,
        },
      })),

    decrementTicketAudience: (audience: string) =>
      set((state) => {
        const newAmount = Math.max(
          0,
          (state.ticketsAudiences[audience] || 0) - 1
        );

        const newSelections = { ...state.ticketSelections };
        const newMetadata = { ...state.ticketSelectionsMetadata };

        Object.keys(newSelections).forEach((key) => {
          if (key.startsWith(`${audience}-`)) {
            const index = parseInt(key.split("-")[1]);
            if (index >= newAmount) {
              delete newSelections[key];
              delete newMetadata[key];
            }
          }
        });

        const updates: Partial<BookingStore> = {
          ticketsAudiences: {
            ...state.ticketsAudiences,
            [audience]: newAmount,
          },
          ticketSelections: newSelections,
          ticketSelectionsMetadata: newMetadata,
        };

        if (state.flowType !== "offers-date") {
          const ticketCounts: Record<number, number> = {};
          Object.values(newSelections).forEach((ticketCategoryId) => {
            ticketCounts[ticketCategoryId] =
              (ticketCounts[ticketCategoryId] || 0) + 1;
          });
          updates.tickets = ticketCounts;
        }

        return updates;
      }),

    removeParticipant: (audience: string, index: number) =>
      set((state) => {
        const newAmount = Math.max(
          0,
          (state.ticketsAudiences[audience] || 0) - 1
        );

        const newSelections = { ...state.ticketSelections };
        const newMetadata = { ...state.ticketSelectionsMetadata };

        const keyToRemove = `${audience}-${index}`;
        delete newSelections[keyToRemove];
        delete newMetadata[keyToRemove];

        const keysToUpdate: Array<{ oldKey: string; newKey: string }> = [];
        Object.keys(newSelections).forEach((key) => {
          if (key.startsWith(`${audience}-`)) {
            const keyIndex = parseInt(key.split("-")[1]);
            if (keyIndex > index) {
              keysToUpdate.push({
                oldKey: key,
                newKey: `${audience}-${keyIndex - 1}`,
              });
            }
          }
        });

        keysToUpdate.forEach(({ oldKey, newKey }) => {
          newSelections[newKey] = newSelections[oldKey];
          newMetadata[newKey] = newMetadata[oldKey];
          delete newSelections[oldKey];
          delete newMetadata[oldKey];
        });

        const updates: Partial<BookingStore> = {
          ticketsAudiences: {
            ...state.ticketsAudiences,
            [audience]: newAmount,
          },
          ticketSelections: newSelections,
          ticketSelectionsMetadata: newMetadata,
        };

        if (state.flowType !== "offers-date") {
          const ticketCounts: Record<number, number> = {};
          Object.values(newSelections).forEach((ticketCategoryId) => {
            ticketCounts[ticketCategoryId] =
              (ticketCounts[ticketCategoryId] || 0) + 1;
          });
          updates.tickets = ticketCounts;
        }

        return updates;
      }),

    ticketSelections: {},
    ticketSelectionsMetadata: {},
    setTicketSelection: (key: string, ticketCategoryId: number, metadata) => {
      const state = get();
      const newSelections = {
        ...state.ticketSelections,
        [key]: ticketCategoryId,
      };

      const updates: Partial<BookingStore> = {
        ticketSelections: newSelections,
      };

      if (metadata) {
        updates.ticketSelectionsMetadata = {
          ...state.ticketSelectionsMetadata,
          [key]: metadata,
        };
      }

      if (state.flowType !== "offers-date") {
        const ticketCounts: Record<number, number> = {};
        Object.values(newSelections).forEach((ticketCategoryId) => {
          ticketCounts[ticketCategoryId] =
            (ticketCounts[ticketCategoryId] || 0) + 1;
        });
        updates.tickets = ticketCounts;
      }

      set(updates);
    },

    ticketClassSelections: {},
    setTicketClassSelection: (
      audience: string,
      classType: "1st_class" | "2nd_class"
    ) => {
      set((state) => ({
        ticketClassSelections: {
          ...state.ticketClassSelections,
          [audience]: classType,
        },
      }));
    },

    categoryType: null,
    setCategoryType: (classType: "1st_class" | "2nd_class") => {
      set({ categoryType: classType });
    },

    hasAutoSelectedTicket: false,
    setHasAutoSelectedTicket: (value: boolean) =>
      set({ hasAutoSelectedTicket: value }),

    showDiscountedTickets: true,
    setShowDiscountedTickets: (value: boolean) =>
      set({ showDiscountedTickets: value }),

    visitedSteps: {},
    markStepAsVisited: (step: "offers" | "tickets" | "date" | "personalized") =>
      set((state) => ({
        visitedSteps: {
          ...state.visitedSteps,
          [step]: true,
        },
      })),

    widgetTab,
    setWidgetTab: (widgetTab: BookingStore["widgetTab"]) => set({ widgetTab }),

    reset: (data: Partial<BookingStore> = {}) => {
      set({
        ...DEFAULT_BOOKING_STATE,
        // The full reset leaves offerId untouched — the offer can be
        // pre-selected from page context (inline checkout differs, see below).
        offerId: get().offerId,
        widgetTab,
        ...data,
      });
    },

    resetInlineCheckout: (data: Partial<BookingStore> = {}) => {
      set({
        ...DEFAULT_BOOKING_STATE,
        // Inline checkout resets *within* the inline flow: keep inline-checkout
        // mode on and use offerId 0 (its sentinel), unlike the full reset.
        isInlineCheckout: get().isInlineCheckout,
        offerId: 0,
        widgetTab,
        ...data,
      });
    },
  };
});
