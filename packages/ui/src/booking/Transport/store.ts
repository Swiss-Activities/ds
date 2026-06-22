import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { useBookingStore } from "../store";
import { TOfferBooking } from "../types/offerBooking";
import { TReservation } from "../types/reservation";
import { TransportPlaceRef, TransportTrip } from "../types/transport";

type TransportStore = {
  active: "trip" | "tickets" | "products" | "personalized" | "trash";
  setActive: (active: TransportStore["active"]) => void;

  tripType: "oneWay" | "roundTrip";
  setTripType: (tripType: "oneWay" | "roundTrip") => void;

  selectedProductId: number | null;
  setSelectedProduct: (productId: number | null) => void;
  selectedUpgradeIds: number[];
  toggleUpgradeSelection: (upgradeId: number) => void;
  isFirstClassSelected: boolean;
  setFirstClassSelected: (value: boolean) => void;
  isLeadingAreaSelected: boolean;
  setLeadingAreaSelected: (value: boolean) => void;
  isTailingAreaSelected: boolean;
  setTailingAreaSelected: (value: boolean) => void;
  clearProductSelections: () => void;

  ticketsAudiences: Record<string, number>;
  setTicketAudienceAmount: (audience: string, amount: number) => void;
  incrementTicketAudience: (audience: string) => void;
  decrementTicketAudience: (audience: string) => void;
  removeParticipant: (audience: string, index: number) => void;

  ticketSelections: Record<string, number>;
  setTicketSelection: (key: string, ticketCategoryId: number) => void;

  ticketClassSelections: Record<string, "1st_class" | "2nd_class">;
  setTicketClassSelection: (
    audience: string,
    classType: "1st_class" | "2nd_class"
  ) => void;

  hasAutoSelectedTicket: boolean;
  setHasAutoSelectedTicket: (value: boolean) => void;

  showDiscountedTickets: boolean;
  setShowDiscountedTickets: (value: boolean) => void;

  visitedSteps: {
    tickets?: boolean;
    products?: boolean;
    personalized?: boolean;
  };
  markStepAsVisited: (step: "tickets" | "products" | "personalized") => void;

  resetTicketSelections: () => void;
  reset: () => void;
};

const updateBookingStoreTickets = (
  ticketSelections: Record<string, number>
) => {
  const ticketCounts: Record<number, number> = {};

  Object.values(ticketSelections).forEach((ticketCategoryId) => {
    ticketCounts[ticketCategoryId] = (ticketCounts[ticketCategoryId] || 0) + 1;
  });

  useBookingStore.getState().setTickets(ticketCounts);
};

export const initializeFromReservation = (
  reservation: TReservation,
  offer: TOfferBooking
) => {
  const ticketsAudiences: Record<string, number> = {};
  const ticketSelections: Record<string, number> = {};
  const audienceIndices: Record<string, number> = {};

  reservation.ticketReservations.forEach((ticketReservation) => {
    const audience = ticketReservation.audience;
    const ticketCategoryId = Number(
      ticketReservation.ticketCategory.ticketCategoryId
    );

    let totalGuests = 0;
    ticketReservation.guests.forEach((guest) => {
      totalGuests += guest.occupancy;
    });

    if (!audienceIndices[audience]) {
      audienceIndices[audience] = 0;
    }

    for (let i = 0; i < totalGuests; i++) {
      const key = `${audience}-${audienceIndices[audience]}`;
      ticketSelections[key] = ticketCategoryId;
      audienceIndices[audience]++;
    }

    ticketsAudiences[audience] =
      (ticketsAudiences[audience] || 0) + totalGuests;
  });

  return { ticketsAudiences, ticketSelections };
};

export const useTransportStore = create<TransportStore>((set, get) => ({
  active: "trip",
  setActive: (active: TransportStore["active"]) => set({ active }),

  tripType: "oneWay",
  setTripType: (tripType: "oneWay" | "roundTrip") => set({ tripType }),

  selectedProductId: null,
  setSelectedProduct: (productId: number | null) =>
    set({ selectedProductId: productId }),
  selectedUpgradeIds: [],
  toggleUpgradeSelection: (upgradeId: number) =>
    set((state) => ({
      selectedUpgradeIds: state.selectedUpgradeIds.includes(upgradeId)
        ? state.selectedUpgradeIds.filter((id) => id !== upgradeId)
        : [...state.selectedUpgradeIds, upgradeId],
    })),
  isFirstClassSelected: false,
  setFirstClassSelected: (value: boolean) =>
    set({ isFirstClassSelected: value }),
  isLeadingAreaSelected: false,
  setLeadingAreaSelected: (value: boolean) =>
    set({ isLeadingAreaSelected: value }),
  isTailingAreaSelected: false,
  setTailingAreaSelected: (value: boolean) =>
    set({ isTailingAreaSelected: value }),
  clearProductSelections: () =>
    set({
      selectedProductId: null,
      selectedUpgradeIds: [],
      isFirstClassSelected: false,
      isLeadingAreaSelected: false,
      isTailingAreaSelected: false,
    }),

  ticketsAudiences: {},
  ticketSelections: {},
  ticketClassSelections: {},
  hasAutoSelectedTicket: false,

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

      Object.keys(newSelections).forEach((key) => {
        if (key.startsWith(`${audience}-`)) {
          const index = parseInt(key.split("-")[1]);
          if (index >= newAmount) {
            delete newSelections[key];
          }
        }
      });

      updateBookingStoreTickets(newSelections);

      return {
        ticketsAudiences: {
          ...state.ticketsAudiences,
          [audience]: newAmount,
        },
        ticketSelections: newSelections,
      };
    }),

  removeParticipant: (audience: string, index: number) =>
    set((state) => {
      const newAmount = Math.max(
        0,
        (state.ticketsAudiences[audience] || 0) - 1
      );

      const newSelections = { ...state.ticketSelections };

      const keyToRemove = `${audience}-${index}`;
      delete newSelections[keyToRemove];

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
        delete newSelections[oldKey];
      });

      updateBookingStoreTickets(newSelections);

      return {
        ticketsAudiences: {
          ...state.ticketsAudiences,
          [audience]: newAmount,
        },
        ticketSelections: newSelections,
      };
    }),

  setTicketSelection: (key: string, ticketCategoryId: number) => {
    const newSelections = {
      ...get().ticketSelections,
      [key]: ticketCategoryId,
    };

    updateBookingStoreTickets(newSelections);

    set({ ticketSelections: newSelections });
  },

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

  setHasAutoSelectedTicket: (value: boolean) =>
    set({ hasAutoSelectedTicket: value }),

  showDiscountedTickets: true,
  setShowDiscountedTickets: (value: boolean) =>
    set({ showDiscountedTickets: value }),

  visitedSteps: {},
  markStepAsVisited: (step: "tickets" | "products" | "personalized") =>
    set((state) => ({
      visitedSteps: {
        ...state.visitedSteps,
        [step]: true,
      },
    })),

  resetTicketSelections: () => {
    set({
      ticketSelections: {},
      ticketClassSelections: {},
      hasAutoSelectedTicket: false,
      showDiscountedTickets: true,
    });
    useBookingStore.getState().setTickets({});
  },

  reset: () => {
    set({
      active: "trip",
      tripType: "oneWay",
      selectedProductId: null,
      selectedUpgradeIds: [],
      isFirstClassSelected: false,
      isLeadingAreaSelected: false,
      isTailingAreaSelected: false,
      ticketsAudiences: {},
      ticketSelections: {},
      ticketClassSelections: {},
      hasAutoSelectedTicket: false,
      showDiscountedTickets: true,
      visitedSteps: {},
    });
  },
}));

type TransportStoreLocal = {
  fromValue: string;
  setFromValue: (value: string) => void;

  toValue: string;
  setToValue: (value: string) => void;

  viaValues: string[];
  setViaValue: (index: number, value: string) => void;

  from: TransportPlaceRef | null;
  setFrom: (ref: TransportPlaceRef | null) => void;

  to: TransportPlaceRef | null;
  setTo: (ref: TransportPlaceRef | null) => void;

  vias: (TransportPlaceRef | null)[];
  setVia: (index: number, ref: TransportPlaceRef | null) => void;

  fromFocused: boolean;
  setFromFocused: (focused: boolean) => void;

  toFocused: boolean;
  setToFocused: (focused: boolean) => void;

  viaFocusedIndex: number | null;
  setViaFocused: (index: number | null) => void;

  calendarDate: Date;
  setCalendarDate: (date: Date) => void;

  time: Date;
  setTime: (date: Date) => void;

  direction: "from" | "to";
  setDirection: (direction: "from" | "to") => void;

  selectedTripId: string;
  setSelectedTrip: (tripId: string) => void;

  trips: Record<string, TransportTrip>;
  addTrips: (trips: TransportTrip[]) => void;
  clearTrips: () => void;

  setFromPlace: (ref: TransportPlaceRef, name: string) => void;
  setToPlace: (ref: TransportPlaceRef, name: string) => void;
  setViaPlace: (index: number, ref: TransportPlaceRef, name: string) => void;
  addVia: () => void;
  removeVia: (index: number) => void;
  clearVia: (index: number) => void;
  swapFromTo: () => void;
  resetDateTime: () => void;
};

type PersistedTransportStore = {
  fromValue: string;
  toValue: string;
  viaValues: string[];
  from: TransportPlaceRef | null;
  to: TransportPlaceRef | null;
  vias: (TransportPlaceRef | null)[];
  calendarDate: string;
  time: string;
  direction: "from" | "to";
  selectedTripId: string;
};

export const useTransportStoreLocal = create<TransportStoreLocal>()(
  persist(
    (set) => ({
      fromValue: "",
      setFromValue: (value: string) =>
        set(() => {
          return {
            fromValue: value,
            from: null,
          };
        }),

      toValue: "",
      setToValue: (value: string) =>
        set(() => {
          return {
            toValue: value,
            to: null,
          };
        }),

      viaValues: [],
      setViaValue: (index: number, value: string) =>
        set((state) => {
          const newViaValues = [...state.viaValues];
          const newVias = [...state.vias];
          newViaValues[index] = value;
          newVias[index] = null;
          return {
            viaValues: newViaValues,
            vias: newVias,
          };
        }),

      from: null,
      setFrom: (ref: TransportPlaceRef | null) =>
        set({ from: ref, selectedTripId: "", trips: {} }),

      to: null,
      setTo: (ref: TransportPlaceRef | null) =>
        set({ to: ref, selectedTripId: "", trips: {} }),

      vias: [],
      setVia: (index: number, ref: TransportPlaceRef | null) =>
        set((state) => {
          const newVias = [...state.vias];
          newVias[index] = ref;
          return { vias: newVias, selectedTripId: "", trips: {} };
        }),

      fromFocused: false,
      setFromFocused: (focused: boolean) =>
        set(() => {
          return {
            fromFocused: focused,
          };
        }),

      toFocused: false,
      setToFocused: (focused: boolean) =>
        set(() => {
          return {
            toFocused: focused,
          };
        }),

      viaFocusedIndex: null,
      setViaFocused: (index: number | null) =>
        set(() => {
          return {
            viaFocusedIndex: index,
          };
        }),

      calendarDate: new Date(),
      setCalendarDate: (date: Date) => set({ calendarDate: date, trips: {} }),

      time: new Date(),
      setTime: (date: Date) => set({ time: date, trips: {} }),

      direction: "from",
      setDirection: (direction: "from" | "to") => set({ direction, trips: {} }),

      selectedTripId: "",
      setSelectedTrip: (tripId: string) => set({ selectedTripId: tripId }),

      trips: {},
      addTrips: (newTrips: TransportTrip[]) =>
        set((state) => {
          const updatedTrips = { ...state.trips };
          newTrips.forEach((trip) => {
            const id = trip.tripId || trip.id;
            if (id) {
              updatedTrips[id] = trip;
            }
          });
          return { trips: updatedTrips };
        }),
      clearTrips: () => set({ trips: {} }),

      setFromPlace: (ref: TransportPlaceRef, name: string) =>
        set((state) => {
          return {
            from: ref,
            fromValue: name,
            fromFocused: false,
            toFocused: !state.to,
            selectedTripId: "",
          };
        }),
      setToPlace: (ref: TransportPlaceRef, name: string) =>
        set(() => {
          return {
            to: ref,
            toValue: name,
            toFocused: false,
            selectedTripId: "",
          };
        }),
      setViaPlace: (index: number, ref: TransportPlaceRef, name: string) =>
        set((state) => {
          const newVias = [...state.vias];
          const newViaValues = [...state.viaValues];
          newVias[index] = ref;
          newViaValues[index] = name;
          return {
            vias: newVias,
            viaValues: newViaValues,
            viaFocusedIndex: null,
            selectedTripId: "",
          };
        }),
      addVia: () =>
        set((state) => {
          return {
            viaValues: [...state.viaValues, ""],
            vias: [...state.vias, null],
          };
        }),
      removeVia: (index: number) =>
        set((state) => {
          const newViaValues = state.viaValues.filter((_, i) => i !== index);
          const newVias = state.vias.filter((_, i) => i !== index);
          return {
            viaValues: newViaValues,
            vias: newVias,
            viaFocusedIndex: null,
            selectedTripId: "",
          };
        }),
      clearVia: (index: number) =>
        set((state) => {
          const newViaValues = state.viaValues.filter((_, i) => i !== index);
          const newVias = state.vias.filter((_, i) => i !== index);
          return {
            viaValues: newViaValues,
            vias: newVias,
            viaFocusedIndex: null,
            selectedTripId: "",
          };
        }),
      swapFromTo: () =>
        set((state) => ({
          from: state.to,
          fromValue: state.toValue,
          to: state.from,
          toValue: state.fromValue,
          selectedTripId: "",
        })),
      resetDateTime: () =>
        set(() => ({
          calendarDate: new Date(),
          time: new Date(),
          selectedTripId: "",
        })),
    }),
    {
      name: "transportStore",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state): PersistedTransportStore => ({
        fromValue: state.fromValue,
        toValue: state.toValue,
        viaValues: state.viaValues,
        from: state.from,
        to: state.to,
        vias: state.vias,
        calendarDate: state.calendarDate.toISOString(),
        time: state.time.toISOString(),
        direction: state.direction,
        selectedTripId: state.selectedTripId,
      }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          const persistedState = state as any;
          if (typeof persistedState.calendarDate === "string") {
            persistedState.calendarDate = new Date(persistedState.calendarDate);
          }
          if (typeof persistedState.time === "string") {
            persistedState.time = new Date(persistedState.time);
          }
          // Migrate from old single via format to new array format
          if (
            persistedState.viaValue !== undefined &&
            persistedState.viaValues === undefined
          ) {
            persistedState.viaValues = persistedState.viaValue
              ? [persistedState.viaValue]
              : [];
            delete persistedState.viaValue;
          }
          // Drop legacy id-string fields if a previous version persisted them.
          // They no longer carry enough info to rebuild a TransportPlaceRef,
          // so clear the corresponding display values too.
          if (
            persistedState.fromId !== undefined ||
            persistedState.toId !== undefined ||
            persistedState.viaId !== undefined ||
            persistedState.viaIds !== undefined
          ) {
            persistedState.from = null;
            persistedState.to = null;
            persistedState.vias = [];
            persistedState.fromValue = "";
            persistedState.toValue = "";
            persistedState.viaValues = [];
            delete persistedState.fromId;
            delete persistedState.toId;
            delete persistedState.viaId;
            delete persistedState.viaIds;
          }
          // Ensure arrays exist
          if (!Array.isArray(persistedState.viaValues)) {
            persistedState.viaValues = [];
          }
          if (!Array.isArray(persistedState.vias)) {
            persistedState.vias = [];
          }
        }
      },
    }
  )
);
