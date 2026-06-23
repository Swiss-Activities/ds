import { create } from "zustand";
import {
  hasCartRestoreLock,
  unlockCartRestore,
} from "./utils";
import type { TActivity } from "../types/activity";
import type { TCart } from "../types/cart";
import type { TReservation } from "../types/reservation";
import { secureLocalStorage } from "../utils/data/secureLocalStorage";
import { type Activities, sendDataLayer } from "../utils/thirdParty/dataLayerSend";
import { getActivity } from "../query/activity/getActivity";
import { getReservations } from "../query/booking";
import { getCart } from "../query/booking/getCart";
import { restoreCart } from "../query/booking/restoreCart";

let cartInitLocale: string | null = null;
let expiryTimer: ReturnType<typeof setTimeout> | null = null;

const clearExpiryWatcher = () => {
  if (expiryTimer) {
    clearTimeout(expiryTimer);
    expiryTimer = null;
  }
};

export type CartStore = {
  locale: string;
  setLocale: (locale: string) => void;

  cart: TCart & {
    customData: {
      reservation: TReservation;
      activity: TActivity;
    }[];
  };
  setCart: (cart: CartStore["cart"]) => void;

  activityObject: TActivity | null;
  setActivityObject: (activityObject: TActivity | null) => void;

  activityObjects: Activities;
  setActivityObjects: (activityObjects: Activities) => void;

  loadingState: "loading" | "empty" | "ready";
  setLoadingState: (loadingState: CartStore["loadingState"]) => void;

  init: (locale: string, restore: boolean, cartId?: string) => void;
  update: (cart: TCart) => void;
  checkForExpired: () => void;
  reset: () => void;
};

export const useCartStore = create<CartStore>((set, get) => ({
  locale: "",
  setLocale: (locale) => set({ locale }),

  cart: {} as CartStore["cart"],
  setCart: (cart) => set({ cart }),

  loadingState: "loading",
  setLoadingState: (loadingState) => set({ loadingState }),

  activityObject: null,
  setActivityObject: (activityObject: TActivity | null) =>
    set({ activityObject }),

  activityObjects: [] as unknown as Activities,
  setActivityObjects: (activityObjects: Activities) => set({ activityObjects }),

  init: async (locale, restore = true) => {
    if (cartInitLocale === locale) return;
    cartInitLocale = locale;
    set({ loadingState: "loading" });

    const url = new URL(window.location.href);
    const cartIdParam = url.searchParams.get("cartId");

    let cartId = secureLocalStorage.getItem("cartId") || cartIdParam;
    if (!cartId) {
      unlockCartRestore();
      set({ loadingState: "empty" });
      return;
    }

    if (cartIdParam) {
      cartId = cartIdParam;
      secureLocalStorage.setItem("cartId", cartIdParam);
    }

    let cart: any = undefined;

    await getCart(cartId)
      .then((res) => (cart = res))
      .catch(async (err) => {
        if (
          err.status === 404 &&
          secureLocalStorage.getItem("bookingId") &&
          restore &&
          !hasCartRestoreLock()
        ) {
          const restore = await restoreCart(
            secureLocalStorage.getItem("bookingId") as string
          );
          if (restore) {
            cart = restore.cart;
            secureLocalStorage.removeItem("bookingId");
            secureLocalStorage.setItem("cartId", cart.cartId);
          }
        }
      });

    if (!cart) {
      set({ loadingState: "empty" });
      return;
    }

    const customData: {
      reservation: TReservation;
      activity: TActivity;
    }[] = [];

    for (const reservation of cart.reservations) {
      const activity = await getActivity(
        reservation.capiActivityId.toString(),
        locale
      );
      const res = await getReservations(reservation.reservationId, locale);

      if (!res) continue;

      customData.push({
        reservation: {
          ...res,
          offerId: res?.offerId,
          cancellableUntil: res?.cancellableUntil,
          validity: res?.validity,
        },
        activity,
      });
    }

    const enhancedCart = {
      ...cart,
      customData,
    } as CartStore["cart"];
    set({ cart: enhancedCart, locale, loadingState: "ready" });
    get().checkForExpired();
  },

  update: (cart: TCart) => {
    const {
      cart: { customData },
    } = get();

    set({
      cart: {
        ...cart,
        customData,
      },
    });
  },

  checkForExpired: () => {
    const { cart } = get();

    if (!cart || !cart?.reservations?.length) {
      set({ loadingState: "empty" });
      return;
    }

    clearExpiryWatcher();

    const tick = () => {
      const current = get().cart;

      if (!current || !current?.customData?.length) return;

      for (const data of current.customData) {
        const expiresAt = new Date(data.reservation.expiresAt).getTime();

        if (expiresAt <= Date.now()) {
          sendDataLayer({
            obj: {
              event: "reservation_expired",
            },
            activities: [
              {
                reservation: data.reservation,
                activity: data.activity,
              },
            ] as unknown as Activities,
          });

          clearExpiryWatcher();
          cartInitLocale = null;
          get().init(get().locale, true);
          return;
        }
      }

      expiryTimer = setTimeout(tick, 10000);
    };

    tick();
  },

  reset: () => {
    clearExpiryWatcher();
    cartInitLocale = null;
    set({
      cart: {} as CartStore["cart"],
      loadingState: "loading",
      activityObject: null,
      activityObjects: [] as unknown as Activities,
    });
  },
}));
