import { useEffect, useMemo } from "react";
import { useShallow } from "zustand/react/shallow";
import { useProductsTicketCategories } from "./hooks";
import { useTrips } from "../queries";
import { useTransportStore } from "../store";
import { useBookingStore } from "../../store";
import { ProductWithTicketCategories } from "../../types/transport";
import { useI18n } from "../../utils/i18n/useI18n";
import { useGetPersonalizationFields } from "../../query/transport/personalizationFields";

const isChildOnlyProduct = (product: ProductWithTicketCategories): boolean => {
  if (!product.ticketCategories?.length) return false;
  return product.ticketCategories.every((tc) => tc.audience === "children");
};

const isCityTicketProduct = (product: ProductWithTicketCategories): boolean => {
  return product.title.toLowerCase().includes("city-ticket");
};

export const usePersonalizationFields = () => {
  const { locale } = useI18n();
  const { selectedTrip } = useTrips();
  const { selectedProductId, selectedUpgradeIds } = useTransportStore(
    useShallow((state) => ({
      selectedProductId: state.selectedProductId,
      selectedUpgradeIds: state.selectedUpgradeIds,
    }))
  );

  const {
    personalizedOptionsCache,
    setPersonalizedOptions,
    setPersonalizedOptionsCache,
  } = useBookingStore(
    useShallow((state) => ({
      personalizedOptionsCache: state.personalizedOptionsCache,
      setPersonalizedOptions: state.setPersonalizedOptions,
      setPersonalizedOptionsCache: state.setPersonalizedOptionsCache,
    }))
  );

  const { products, returnTripId, tripType } = useProductsTicketCategories();

  const ticketCategoriesParam = useMemo(() => {
    if (!selectedProductId || !products?.length) return [];

    const categories: { id: number; quantity: number }[] = [];

    const selectedProduct = products.find((p) => p.id === selectedProductId);
    if (!selectedProduct) return [];

    const selectedCityTicket = products.find(
      (p) => selectedUpgradeIds.includes(p.id) && isCityTicketProduct(p)
    );

    const mainProduct = selectedCityTicket || selectedProduct;

    mainProduct.ticketCategories?.forEach((tc) => {
      if (tc.ticketCategoryId && tc.quantity) {
        categories.push({
          id: tc.ticketCategoryId,
          quantity: tc.quantity,
        });
      }
    });

    const childProducts = products.filter((p) => isChildOnlyProduct(p));
    childProducts.forEach((child) => {
      child.ticketCategories?.forEach((tc) => {
        if (tc.ticketCategoryId && tc.quantity) {
          categories.push({
            id: tc.ticketCategoryId,
            quantity: tc.quantity,
          });
        }
      });
    });

    return categories;
  }, [selectedProductId, selectedUpgradeIds, products]);

  const effectiveProductId = useMemo(() => {
    if (!selectedProductId || !products?.length) return 0;

    const selectedCityTicket = products.find(
      (p) => selectedUpgradeIds.includes(p.id) && isCityTicketProduct(p)
    );

    return selectedCityTicket?.id || selectedProductId;
  }, [selectedProductId, selectedUpgradeIds, products]);

  const hasSelections = ticketCategoriesParam.length > 0;
  const tripId = selectedTrip?.tripId || selectedTrip?.id || "";

  const isRoundTrip = tripType === "roundTrip";

  const { data, isLoading } = useGetPersonalizationFields(
    {
      tripId,
      ...(isRoundTrip && returnTripId ? { returnTripId } : {}),
      productId: effectiveProductId,
      locale,
      ticketCategories: ticketCategoriesParam,
    },
    !!tripId && !!effectiveProductId && hasSelections
  );

  useEffect(() => {
    if (
      !selectedTrip ||
      isLoading ||
      !data ||
      personalizedOptionsCache?.[tripId]
    ) {
      return;
    }
    setPersonalizedOptions(data.fields);
    setPersonalizedOptionsCache(tripId, data.fields);
  }, [selectedTrip, isLoading, data, tripId]);

  return { data, isLoading };
};
