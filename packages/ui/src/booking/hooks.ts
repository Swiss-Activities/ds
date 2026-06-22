import { useRouter } from "./utils/i18n/navigation";
import { useShallow } from "zustand/react/shallow";
import { useCartStore } from "./Cart/store";
import { useComplementaryStore } from "./ComplementaryActivity/store";
import { usePersonalizedOptions } from "./PersonalizedOptions/hooks";
import {
  isCityTicketProduct,
  isChildOnlyProduct,
  findMatchingCityTicketCategory,
  getAreaCode,
} from "./Transport/Products/hooks";
import { useProductsTicketCategories } from "./Transport/Tickets/hooks";
import { useTrips } from "./Transport/queries";
import {
  useTransportStore,
  useTransportStoreLocal,
} from "./Transport/store";
import { sendTransportEvent } from "./Transport/tracking";
import { useBookingStore } from "./store";
import { useDrawerStore } from "./store/drawer";
import { useSearchStore } from "./store/search";
import type { TActivity } from "./types/activity";
import type { TBooking } from "./types/booking";
import type { TReservation } from "./types/reservation";
import { getPageUrl } from "./utils/content/loaders";
import { secureLocalStorage } from "./utils/data/secureLocalStorage";
import { niceDate } from "./utils/dates/niceDate";
import { useI18n } from "./utils/i18n/useI18n";
import { type Activities, useDataLayer } from "./utils/thirdParty/dataLayerSend";
import { useDistributorId } from "./utils/user/useDistributorId";
import { useGetCart } from "./query/booking/getCart";
import { usePostReservation as usePostReservationMutation } from "./query/booking/postReservation";
import { usePostRebook } from "./query/booking/rebook";
import { useUpdateCart } from "./query/booking/updateCart";
import { useQueryClient } from "./query/client";
import { useSyncOffer } from "./query/offers/syncOffer";
import { usePostTransportReservation } from "./query/transport/reservations";

export const usePostReservation = (
  type: "activity" | "transport" = "activity"
) => {
  const { queryClient } = useQueryClient();
  const router = useRouter();
  const { dataLayer } = useDataLayer();
  let cartId = secureLocalStorage.getItem("cartId") as string;
  const { data: cart, isError: isErrorCart } = useGetCart(cartId);
  if (cartId && isErrorCart) {
    cartId = "";
    secureLocalStorage.removeItem("cartId");
  }

  const { t, locale } = useI18n();
  const [date] = useSearchStore((state) => [state.date]);
  const {
    activity,
    availability,
    bookingId,
    currentReservation,
    flowType,
    isInlineCheckout,
    isRebook,
    offer,
    setError,
    setIsCheckout,
    setIsLoading,
    tickets,
  } = useBookingStore(
    useShallow((state) => ({
      activity: state.activity,
      availability: state.availability,
      bookingId: state.bookingId,
      currentReservation: state.reservation,
      flowType: state.flowType,
      isInlineCheckout: state.isInlineCheckout,
      isRebook: state.isRebook,
      offer: state.offer,
      setError: state.setError,
      setIsCheckout: state.setIsCheckout,
      setIsLoading: state.setIsLoading,
      tickets: state.tickets,
    }))
  );
  const { selectedTrip } = useTrips();
  const {
    selectedProductId,
    tripType,
    isFirstClassSelected,
    isLeadingAreaSelected,
    isTailingAreaSelected,
    ticketSelections: transportTicketSelections,
  } = useTransportStore(
    useShallow((state) => ({
      selectedProductId: state.selectedProductId,
      tripType: state.tripType,
      isFirstClassSelected: state.isFirstClassSelected,
      isLeadingAreaSelected: state.isLeadingAreaSelected,
      isTailingAreaSelected: state.isTailingAreaSelected,
      ticketSelections: state.ticketSelections,
    }))
  );
  const { personalizedOptionsValues } = usePersonalizedOptions();
  const { products, returnTripId } = useProductsTicketCategories();
  const { currentReference: complementaryReference, addComplementaryItem } =
    useComplementaryStore(
      useShallow((state) => ({
        currentReference: state.currentReference,
        addComplementaryItem: state.addComplementaryItem,
      }))
    );
  const isReservation = currentReservation && !isInlineCheckout;

  const distributorId = useDistributorId();

  const selection =
    flowType === "offers-date" && availability?.selection
      ? availability.selection
      : Object.entries(tickets)
          .filter(([_, v]) => v >= 1)
          .map(([k, v]) => ({
            ticketCategoryId: Number(k),
            numGuests: v,
          }));

  const reservation = {
    activityId: Number(activity?.mappedId),
    availabilityId: availability?.availabilityId,
    selection,
    locale: locale,
    doCreateCart: isInlineCheckout || !cartId,
    cartId: isInlineCheckout ? undefined : cartId ? cartId : undefined,
  } as any;

  if (distributorId) {
    reservation.distributorId = distributorId;
  }

  if (personalizedOptionsValues) {
    if (personalizedOptionsValues.reservation) {
      reservation.personalizedData = Object.entries(
        personalizedOptionsValues.reservation
      ).map(([k, v]) => {
        return {
          key: k,
          value: v,
        };
      });
    }

    if (
      Object.values(personalizedOptionsValues).length >= 2 ||
      !personalizedOptionsValues?.reservation
    ) {
      reservation.selection = reservation.selection.map((e: any) => {
        const guests: { personalizedData: { key: string; value: string }[] }[] =
          [];

        Object.values(
          Object.values(personalizedOptionsValues[e.ticketCategoryId] || {})
        ).map((v) => {
          const personalizedData: {
            key: string;
            value: string;
          }[] = [];

          Object.entries(v as Record<string, string>).map(([k, v]) => {
            personalizedData.push({
              key: k,
              value: v,
            });
          });

          if (personalizedData.length) {
            guests.push({ personalizedData });
          }
        });

        return {
          ...e,
          guests: guests.slice(0, e.numGuests),
        };
      });
    }
  }

  if (offer?.ticketCategories) {
    const expandedSelection: any[] = [];
    reservation.selection.forEach((entry: any) => {
      const ticketCategory = offer.ticketCategories.find(
        (tc) => tc.ticketCategoryId === entry.ticketCategoryId
      );

      if (ticketCategory?.occupancyType === "fixed" && entry.numGuests > 1) {
        Array.from({ length: entry.numGuests }).forEach((_, index) => {
          expandedSelection.push({
            ...entry,
            numGuests: 1,
            ...(entry.guests?.length > 0
              ? { guests: [entry.guests[index]] }
              : {}),
          });
        });
      } else {
        expandedSelection.push(entry);
      }
    });
    reservation.selection = expandedSelection;
  }

  const {
    mutateAsync: postActivityReservation,
    isPending: isPendingActivity,
    isSuccess: isSuccessActivity,
  } = usePostReservationMutation();
  const {
    mutateAsync: postTransportReservation,
    isPending: isPendingTransport,
    isSuccess: isSuccessTransport,
  } = usePostTransportReservation();
  const { mutateAsync: updateCart } = useUpdateCart();
  const { mutateAsync: rebook, isPending: isPendingRebook } = usePostRebook();
  const { mutateAsync: syncOffer } = useSyncOffer();

  const postReservation =
    type === "transport" ? postTransportReservation : postActivityReservation;
  const isPending =
    type === "transport" ? isPendingTransport : isPendingActivity;
  const isSuccess =
    type === "transport" ? isSuccessTransport : isSuccessActivity;

  const resObject = { ...reservation };

  const reserve = async () => {
    if (isRebook) {
      await rebook({
        bookingId,
        reservation: {
          ...resObject,
          cartId: undefined,
          doCreateCart: true,
        },
      })
        .then((res) => {
          window.location.href = `${getPageUrl("confirm", locale)}?bookingId=${
            res.bookingId
          }`;
        })
        .catch(() => {
          setError(t("activity.widget.error500"));
        });
      return;
    }

    if (type === "transport") {
      const selectedProduct = products?.find((p) => p.id === selectedProductId);
      const childProduct = products?.find((p) => isChildOnlyProduct(p));
      const cityTicketProduct = products?.find((p) => isCityTicketProduct(p));

      const isCityTicketSelected =
        isLeadingAreaSelected || isTailingAreaSelected;
      const mainProduct =
        isCityTicketSelected && cityTicketProduct
          ? cityTicketProduct
          : selectedProduct;
      const tripId = selectedTrip?.tripId || selectedTrip?.id;

      const targetClassType = isFirstClassSelected ? "1st_class" : "2nd_class";

      if (!mainProduct) {
        setError(t("activity.widget.error500"));
        return;
      }

      const mainProductClassTickets =
        mainProduct.ticketCategories?.filter(
          (tc) => tc.categoryType === targetClassType
        ) || [];

      const adultCount =
        mainProductClassTickets.length > 0
          ? mainProductClassTickets[0]?.quantity || 1
          : 1;

      const childProductClassTickets =
        childProduct?.ticketCategories?.filter(
          (tc) => tc.categoryType === targetClassType
        ) || [];

      const childCount =
        childProductClassTickets.length > 0
          ? childProductClassTickets[0]?.quantity || 0
          : 0;

      const allPersonalizedValues: any[] = [];
      if (personalizedOptionsValues) {
        Object.values(personalizedOptionsValues).forEach(
          (categoryValues: any) => {
            if (typeof categoryValues === "object" && categoryValues !== null) {
              Object.values(categoryValues).forEach((guestValues: any) => {
                if (typeof guestValues === "object" && guestValues !== null) {
                  allPersonalizedValues.push(guestValues);
                }
              });
            }
          }
        );
      }

      const adultPersonalizedValues = allPersonalizedValues.slice(
        0,
        adultCount
      );
      const childPersonalizedValues = allPersonalizedValues.slice(
        adultCount,
        adultCount + childCount
      );

      const matchingCityTicketCategory = isCityTicketSelected
        ? findMatchingCityTicketCategory(
            cityTicketProduct,
            targetClassType,
            isLeadingAreaSelected,
            isTailingAreaSelected
          )
        : undefined;

      const ticketSelectionsByCategory: Record<
        number,
        { indices: number[]; audience: string }
      > = {};
      Object.entries(transportTicketSelections).forEach(
        ([key, ticketCategoryId]) => {
          const [audience, indexStr] = key.split("-");
          const index = parseInt(indexStr, 10);
          if (!ticketSelectionsByCategory[ticketCategoryId]) {
            ticketSelectionsByCategory[ticketCategoryId] = {
              indices: [],
              audience,
            };
          }
          ticketSelectionsByCategory[ticketCategoryId].indices.push(index);
        }
      );

      const mainSelection: any[] = [];

      Object.entries(ticketSelectionsByCategory).forEach(
        ([ticketCategoryIdStr, { indices, audience }]) => {
          const ticketCategoryId = Number(ticketCategoryIdStr);

          const originalTicket = offer?.ticketCategories?.find(
            (t) => t.ticketCategoryId === ticketCategoryId
          );

          let matchingProductTicket = matchingCityTicketCategory;
          if (!matchingProductTicket) {
            matchingProductTicket = mainProduct.ticketCategories?.find(
              (tc) =>
                tc.categoryType === targetClassType &&
                tc.audience === (originalTicket?.audience || audience) &&
                tc.discountType === originalTicket?.discountType
            );
          }

          if (!matchingProductTicket) {
            matchingProductTicket = mainProduct.ticketCategories?.find(
              (tc) => tc.categoryType === targetClassType
            );
          }

          if (matchingProductTicket) {
            const guestsPersonalizedData = indices.map((idx) => {
              const values = allPersonalizedValues[idx];
              if (values) {
                return {
                  personalizedData: Object.entries(values).map(
                    ([key, value]) => ({
                      key,
                      value,
                    })
                  ),
                };
              }
              return { personalizedData: [] };
            });

            mainSelection.push({
              ticketCategoryId: matchingProductTicket.ticketCategoryId,
              ...(matchingProductTicket.offerType
                ? { offerType: matchingProductTicket.offerType }
                : {}),
              ...(matchingProductTicket.tariffLevel
                ? { tariffLevel: matchingProductTicket.tariffLevel }
                : {}),
              directions: tripType === "roundTrip" ? ["round"] : ["outward"],
              numGuests: indices.length,
              guests: guestsPersonalizedData,
              ...(getAreaCode(matchingProductTicket.tailingArea)
                ? {
                    tailingAreaCode: getAreaCode(
                      matchingProductTicket.tailingArea
                    ),
                  }
                : {}),
              ...(getAreaCode(matchingProductTicket.leadingArea)
                ? {
                    leadingAreaCode: getAreaCode(
                      matchingProductTicket.leadingArea
                    ),
                  }
                : {}),
            });
          }
        }
      );

      const isRoundTrip = tripType === "roundTrip";

      const mainResObject = {
        activityId: Number(activity?.mappedId),
        locale,
        doCreateCart: isInlineCheckout || !cartId,
        cartId: isInlineCheckout ? undefined : cartId ? cartId : undefined,
        tripId,
        ...(isRoundTrip && returnTripId ? { returnTripId } : {}),
        offerId: 9726,
        productId: mainProduct.id,
        selection: mainSelection,
        ...(distributorId ? { distributorId } : {}),
      };

      let mainRes: any;
      try {
        mainRes = await postTransportReservation(mainResObject);
      } catch (err) {
        const status = (err as { response?: { status?: number } })?.response
          ?.status;
        if (status === 404) {
          mainRes = await postTransportReservation({
            ...mainResObject,
            doCreateCart: true,
            cartId: undefined,
          });
        } else if (status === 500 || status === 422) {
          if (status === 500) {
            setError(t("activity.widget.error500"));
          }
          if (status === 422 && date) {
            setError(
              t("activity.widget.errorDate", {
                val: niceDate({ date, locale }),
              })
            );
          }
          return;
        }
      }

      if (!mainRes) {
        return;
      }

      const newCartId = mainRes.cart?.cartId;

      if (childProduct && childCount > 0) {
        const filteredChildTicketCategories =
          childProduct.ticketCategories?.filter(
            (tc) => tc.categoryType === targetClassType
          ) || [];

        const cheapestChildTicketCategory =
          filteredChildTicketCategories.length > 0
            ? filteredChildTicketCategories.reduce((cheapest, tc) => {
                const price = parseFloat(tc.price?.amount || "0");
                const cheapestPrice = parseFloat(cheapest.price?.amount || "0");
                return price < cheapestPrice ? tc : cheapest;
              })
            : null;

        const childSelection = cheapestChildTicketCategory
          ? [
              {
                ticketCategoryId: cheapestChildTicketCategory.ticketCategoryId,
                ...(cheapestChildTicketCategory.offerType
                  ? { offerType: cheapestChildTicketCategory.offerType }
                  : {}),
                ...(cheapestChildTicketCategory.tariffLevel
                  ? { tariffLevel: cheapestChildTicketCategory.tariffLevel }
                  : {}),
                directions: tripType === "roundTrip" ? ["round"] : ["outward"],
                numGuests: childPersonalizedValues.length || 1,
                guests: childPersonalizedValues.map((values) => ({
                  personalizedData: Object.entries(values).map(
                    ([key, value]) => ({
                      key,
                      value,
                    })
                  ),
                })),
                ...(getAreaCode(cheapestChildTicketCategory.tailingArea)
                  ? {
                      tailingAreaCode: getAreaCode(
                        cheapestChildTicketCategory.tailingArea
                      ),
                    }
                  : {}),
                ...(getAreaCode(cheapestChildTicketCategory.leadingArea)
                  ? {
                      leadingAreaCode: getAreaCode(
                        cheapestChildTicketCategory.leadingArea
                      ),
                    }
                  : {}),
              },
            ]
          : [];

        const childResObject = {
          activityId: Number(activity?.mappedId),
          locale,
          doCreateCart: false,
          cartId: newCartId,
          tripId,
          ...(isRoundTrip && returnTripId ? { returnTripId } : {}),
          offerId: 9726,
          productId: childProduct.id,
          selection: childSelection,
          ...(distributorId ? { distributorId } : {}),
        };

        try {
          await postTransportReservation(childResObject);
        } catch (err) {
          console.error("Child reservation error:", err);
        }
      }

      if (isReservation) {
        if (cart?.reservations) {
          await updateCart({
            cartId: newCartId,
            data: {
              reservationIds: [
                ...(cart.reservations || [])
                  .map((r) => r.reservationId)
                  .filter(
                    (rid: string) => rid !== currentReservation.reservationId
                  ),
                mainRes.reservationId,
              ],
            },
          });
        }
        sendTransportEvent("transport_update_cart");
      } else {
        sendTransportEvent("transport_add_to_cart");

        if (complementaryReference) {
          addComplementaryItem(mainRes.reservationId, complementaryReference);
        }
      }

      secureLocalStorage.setItem("cartId", newCartId);
      await queryClient.invalidateQueries({
        queryKey: ["get", "carts", newCartId],
      });

      if (isReservation) {
        window.location.reload();
      } else if (isInlineCheckout) {
        setIsLoading(false);
        setIsCheckout(true);
      } else {
        router.push(getPageUrl("basket", locale));
      }

      return;
    }

    const res = await postReservation(resObject).catch(async (err) => {
      if (err?.response?.status === 404) {
        return postReservation({
          ...resObject,
          doCreateCart: true,
          cartId: undefined,
        });
      }
      if (err?.response?.status === 500 || err?.response?.status === 422) {
        if (err?.response?.status === 500) {
          setError(t("activity.widget.error500"));
        }
        if (err?.response?.status === 422 && date) {
          setError(
            t("activity.widget.errorDate", {
              val: niceDate({ date, locale }),
            })
          );
          if (offer?.offerId) {
            await syncOffer({
              offerId: offer.offerId,
            });
          }
        }
        return false;
      }
    });

    if (!res) {
      return;
    }

    if (isReservation) {
      if (!cart?.reservations) return;

      await updateCart({
        cartId,
        data: {
          reservationIds: [
            ...(cart.reservations || [])
              .map((reservation) => reservation.reservationId)
              .filter(
                (reservationId: string) =>
                  reservationId !== currentReservation.reservationId
              ),
            res.reservationId,
          ],
        },
      });
    }

    if (isReservation) {
      dataLayer({ obj: { event: "update_cart" }, timeout: 0 });
    } else {
      dataLayer({ obj: { event: "add_to_cart" }, timeout: 0 });

      if (complementaryReference) {
        addComplementaryItem(res.reservationId, complementaryReference);
      }
    }

    secureLocalStorage.setItem("cartId", res.cart.cartId);
    await queryClient.invalidateQueries({
      queryKey: ["get", "carts", res.cart.cartId],
    });

    if (isReservation) {
      window.location.reload();
    } else {
      if (isInlineCheckout) {
        setIsLoading(false);
        setIsCheckout(true);
      } else {
        router.push(getPageUrl("basket", locale));
      }
    }
  };

  return { reserve, isPending: isPendingRebook || isPending, isSuccess };
};

export const useHasStartedBooking = () => {
  const { offer } = useBookingStore(
    useShallow((state) => ({
      offer: state.offer,
    }))
  );

  const hasStartedBooking = offer?.offerId;

  return { hasStartedBooking };
};

export const useBooking = () => {
  const { dataLayer } = useDataLayer();
  const isOpen = useDrawerStore((state) => state.isOpen);
  const setOpen = useDrawerStore((state) => state.setOpen);
  const {
    resetInlineCheckout,
    setActive,
    setActivity,
    setBookingId,
    setFlowType,
    setInLineCheckout,
    setIsCheckout,
    setIsLoading,
    setIsRebook,
    setReservation,
    offer,
  } = useBookingStore(
    useShallow((state) => ({
      resetInlineCheckout: state.resetInlineCheckout,
      setActive: state.setActive,
      setActivity: state.setActivity,
      setBookingId: state.setBookingId,
      setFlowType: state.setFlowType,
      setInLineCheckout: state.setIsInlineCheckout,
      setIsCheckout: state.setIsCheckout,
      setIsLoading: state.setIsLoading,
      setIsRebook: state.setIsRebook,
      setReservation: state.setReservation,
      offer: state.offer,
    }))
  );
  const { resetCart } = useCartStore(
    useShallow((state) => ({
      resetCart: state.reset,
    }))
  );
  const { setSelectedTrip } = useTransportStoreLocal(
    useShallow((state) => ({
      setSelectedTrip: state.setSelectedTrip,
    }))
  );

  const openBooking = ({
    activity,
    bookingId,
    fromCheckout,
    hide = false,
    inlineCheckout,
    isRebook,
    reservation,
    openHidden = false,
    skipBookNow = false,
  }: {
    activity: TActivity | undefined;
    booking?: TBooking | undefined;
    bookingId?: string;
    fromCheckout?: boolean;
    hide?: boolean;
    inlineCheckout?: boolean;
    isRebook?: boolean;
    reservation?: TReservation | undefined;
    openHidden?: boolean;
    skipBookNow?: boolean;
  }) => {
    if (!activity) return;

    if (inlineCheckout) {
      resetCart();
      resetInlineCheckout();
      setInLineCheckout(true);
    }

    if (reservation) {
      setReservation(reservation);
      if (!fromCheckout && !reservation.tripId) {
        setIsLoading(true);
      }
    }

    if (isRebook && bookingId) {
      setBookingId(bookingId);
      setIsRebook(true);
    }

    setActivity(activity);

    if (reservation) {
      if (!hide) {
        if (reservation.tripId) {
          setActive("trash");
        } else {
          setFlowType("date-offers");
          setActive("date");
        }
        dataLayer({
          obj: {
            event: "open_reservation",
          },
          activities: [{ reservation, activity }] as unknown as Activities,
        });
      }
    } else if (!skipBookNow) {
      dataLayer({
        obj: {
          event: "book_now",
        },
      });
    }
    if (fromCheckout) {
      setIsCheckout(false);
      setActive("date");
    } else {
      if (!isOpen.includes("booking-modal") && !openHidden) {
        if (reservation?.tripId) {
          setSelectedTrip(reservation.tripId);
        }
        try {
          const url = new URL(window.location.href);
          const flowType = url.searchParams.get("flowType");
          if (flowType === "offers-date") {
            if (!offer?.offerId) {
              setActive("offers");
            }
            setFlowType("offers-date");
          }
        } catch (error) {
          console.error(error);
        }
        setOpen("booking-modal");
      }
    }
  };

  const closeBooking = () => setOpen("");

  return { openBooking, closeBooking };
};
