import { useEffect, useMemo, useRef, useState } from "react";
import { useShallow } from "zustand/react/shallow";
import type {
  GroupedTicket,
  TicketCategoryItem,
} from "../../TicketSelector";
import { useTrips } from "../queries";
import { useTransportStore } from "../store";
import { useBookingStore } from "../../store";
import type { TOfferBooking } from "../../types/offerBooking";
import { useI18n } from "../../utils/i18n/useI18n";
import { useGetProductsTicketCategories } from "../../query/transport/productsTicketCategories";
import { useGetOfferTicketCategories } from "../../query/transport/ticketCategories";
import { useGetTripDetails } from "../../query/transport/trip";

export const useTickets = () => {
  const { locale } = useI18n();
  const { selectedTrip } = useTrips();
  const { active } = useTransportStore(
    useShallow((state) => ({
      active: state.active,
    }))
  );

  const { setOffer } = useBookingStore(
    useShallow((state) => ({
      setOffer: state.setOffer,
    }))
  );

  const isAtTripOrLater =
    active === "trip" ||
    active === "tickets" ||
    active === "products" ||
    active === "personalized";

  const { data, isLoading, error } = useGetOfferTicketCategories(
    { locale },
    !!selectedTrip && isAtTripOrLater
  );

  const ticketCategories = data?.ticketCategories;

  useEffect(() => {
    if (!ticketCategories) return;
    setOffer({
      offerId: 9726,
      ticketCategories: ticketCategories,
    } as unknown as TOfferBooking);
  }, [ticketCategories, setOffer]);

  const groupedTickets = useMemo((): GroupedTicket[] => {
    if (!ticketCategories) return [];

    const allowedAudiences = ["adults", "children", "toddlers"];
    const filteredTickets = ticketCategories.filter((ticket) =>
      allowedAudiences.includes(ticket.audience)
    );

    const grouped = filteredTickets.reduce(
      (acc, ticket) => {
        if (!acc[ticket.audience]) {
          acc[ticket.audience] = {
            audience: ticket.audience,
            minAge: ticket.minAge,
            maxAge: ticket.maxAge ?? undefined,
            children: [],
          };
        }
        const ticketItem: TicketCategoryItem = {
          ticketCategoryId: ticket.ticketCategoryId,
          minAge: ticket.minAge,
          maxAge: ticket.maxAge ?? undefined,
          occupancy: ticket.occupancy,
          audience: ticket.audience,
          discountType: ticket.discountType ?? undefined,
          categoryType: ticket.categoryType,
          label: ticket.label,
          price: ticket.price,
        };
        acc[ticket.audience].children.push(ticketItem);
        return acc;
      },
      {} as Record<string, GroupedTicket>
    );

    return Object.values(grouped).sort((a, b) => b.minAge - a.minAge);
  }, [ticketCategories]);

  return {
    data: groupedTickets,
    isLoading,
    error,
  };
};

export const useTransportTotalDisplay = () => {
  const {
    ticketSelections,
    selectedProductId,
    isFirstClassSelected,
    isLeadingAreaSelected,
    isTailingAreaSelected,
    active,
  } = useTransportStore(
    useShallow((state) => ({
      ticketSelections: state.ticketSelections,
      selectedProductId: state.selectedProductId,
      isFirstClassSelected: state.isFirstClassSelected,
      isLeadingAreaSelected: state.isLeadingAreaSelected,
      isTailingAreaSelected: state.isTailingAreaSelected,
      active: state.active,
    }))
  );

  const isCityTicketSelected = isLeadingAreaSelected || isTailingAreaSelected;

  const { products } = useProductsTicketCategories();

  const isAtProductsOrLater =
    active === "products" || active === "personalized";

  const price = useMemo(() => {
    const hasTicketSelections = Object.keys(ticketSelections).length > 0;

    if (!hasTicketSelections) {
      return 0;
    }

    if (!isAtProductsOrLater || !products.length) {
      return 0;
    }

    const isCityTicketProduct = (product: { title: string }) =>
      product.title.toLowerCase().includes("city-ticket");

    const selectedProduct = products.find((p) => p.id === selectedProductId);
    const cityTicketProduct = products.find((p) => isCityTicketProduct(p));

    const mainProduct =
      isCityTicketSelected && cityTicketProduct
        ? cityTicketProduct
        : selectedProduct;

    if (!mainProduct?.ticketCategories) {
      return 0;
    }

    const targetClassType = isFirstClassSelected ? "1st_class" : "2nd_class";

    const filteredTickets = mainProduct.ticketCategories.filter(
      (tc) => tc.categoryType === targetClassType && tc.price
    );

    if (filteredTickets.length === 0) {
      return 0;
    }

    const cheapestTicket = filteredTickets.reduce((cheapest, tc) => {
      const price = parseFloat(tc.price?.amount || "0");
      const cheapestPrice = parseFloat(cheapest.price?.amount || "0");
      return price < cheapestPrice ? tc : cheapest;
    });

    return parseFloat(cheapestTicket.price?.amount || "0");
  }, [
    ticketSelections,
    products,
    selectedProductId,
    isFirstClassSelected,
    isCityTicketSelected,
    isAtProductsOrLater,
  ]);

  const total = useMemo(() => {
    return Object.keys(ticketSelections).length > 0 && isAtProductsOrLater;
  }, [ticketSelections, isAtProductsOrLater]);

  const from = useMemo(() => {
    if (!isAtProductsOrLater) return true;
    return !selectedProductId;
  }, [isAtProductsOrLater, selectedProductId]);

  const prefix = useMemo(() => {
    return true;
  }, []);

  return {
    price,
    total,
    from,
    prefix,
  };
};

export const useProductsTicketCategories = () => {
  const { locale } = useI18n();
  const { selectedTrip } = useTrips();
  const { ticketSelections, active, tripType } = useTransportStore(
    useShallow((state) => ({
      ticketSelections: state.ticketSelections,
      active: state.active,
      tripType: state.tripType,
    }))
  );
  const { offer } = useBookingStore(
    useShallow((state) => ({
      offer: state.offer,
    }))
  );

  const isAtProductsOrLater =
    active === "products" || active === "personalized";

  const isRoundTrip = tripType === "roundTrip";

  const ticketCategoriesParam = useMemo(() => {
    const counts: Record<number, number> = {};

    Object.values(ticketSelections).forEach((ticketCategoryId) => {
      counts[ticketCategoryId] = (counts[ticketCategoryId] || 0) + 1;
    });

    const result: { id: number; quantity: number }[] = [];

    Object.entries(counts).forEach(([id, quantity]) => {
      const ticketId = Number(id);
      result.push({ id: ticketId, quantity });

      const selectedTicket = offer?.ticketCategories?.find(
        (t) => t.ticketCategoryId === ticketId
      );

      if (selectedTicket?.categoryType === "2nd_class") {
        const firstClassEquivalent = offer?.ticketCategories?.find(
          (t) =>
            t.categoryType === "1st_class" &&
            t.audience === selectedTicket.audience &&
            t.discountType === selectedTicket.discountType
        );

        if (
          firstClassEquivalent &&
          !result.some((r) => r.id === firstClassEquivalent.ticketCategoryId)
        ) {
          result.push({
            id: firstClassEquivalent.ticketCategoryId,
            quantity,
          });
        }
      }
    });

    return result;
  }, [ticketSelections, offer]);

  const hasSelections = ticketCategoriesParam.length > 0;

  const tripId = selectedTrip?.tripId || selectedTrip?.id || "";

  const { data: detailedTrip, isLoading: isLoadingTripDetails } =
    useGetTripDetails({ tripId, locale }, !!tripId && hasSelections);

  const returnTripId = detailedTrip?.returnTripId || "";

  const directions = isRoundTrip ? ["round"] : ["outward"];

  const canFetchOneWay =
    !isRoundTrip && !!tripId && hasSelections && isAtProductsOrLater;
  const canFetchRoundTrip =
    isRoundTrip &&
    !!tripId &&
    !!returnTripId &&
    hasSelections &&
    isAtProductsOrLater;
  const isEnabled = canFetchOneWay || canFetchRoundTrip;

  const prevTripTypeRef = useRef(tripType);
  const [isLoadingTripTypeSwitch, setIsLoadingTripTypeSwitch] = useState(false);

  useEffect(() => {
    if (prevTripTypeRef.current !== tripType) {
      setIsLoadingTripTypeSwitch(true);
      prevTripTypeRef.current = tripType;
    }
  }, [tripType]);

  const { data, isLoading, isFetching, error } = useGetProductsTicketCategories(
    {
      tripId,
      returnTripId,
      locale,
      ticketCategories: ticketCategoriesParam,
      directions,
    },
    isEnabled
  );

  useEffect(() => {
    if (!isFetching && isLoadingTripTypeSwitch) {
      setIsLoadingTripTypeSwitch(false);
    }
  }, [isFetching, isLoadingTripTypeSwitch]);

  const isWaitingForRoundTrip =
    isRoundTrip && !returnTripId && hasSelections && isAtProductsOrLater;
  const showLoading =
    isLoading ||
    isLoadingTripDetails ||
    isLoadingTripTypeSwitch ||
    isWaitingForRoundTrip ||
    isFetching;

  return {
    products: showLoading ? [] : (data?.products ?? []),
    isLoading: showLoading,
    isFetching,
    error,
    hasSelections,
    tripType,
    returnTripId,
  };
};
