import { useMemo } from "react";
import { useShallow } from "zustand/react/shallow";
import { useProductsTicketCategories } from "../Tickets/hooks";
import { useTransportStore } from "../store";
import type {
  ProductWithTicketCategories,
  TransportAreaCode,
  TransportTicketCategory,
} from "../../types/transport";

export const isValidArea = (area: unknown): area is TransportAreaCode => {
  return (
    !!area &&
    typeof area === "object" &&
    !Array.isArray(area) &&
    "areaCode" in area
  );
};

export const getAreaCode = (area: unknown): number | undefined => {
  if (isValidArea(area)) {
    return area.areaCode;
  }
  return undefined;
};

export const isCityTicketProduct = (
  product: ProductWithTicketCategories
): boolean => {
  return product.title.toLowerCase().includes("city-ticket");
};

export const isChildOnlyProduct = (
  product: ProductWithTicketCategories
): boolean => {
  if (!product.ticketCategories?.length) return false;
  return product.ticketCategories.every((tc) => tc.audience === "children");
};

export const isClassUpgradeProduct = (
  product: ProductWithTicketCategories
): boolean => {
  return product.ticketCategories?.some(
    (tc) => tc.offerType === "class_upgrade"
  );
};

export type CityTicketOptions = {
  hasLeadingArea: boolean;
  hasTailingArea: boolean;
  leadingAreaName?: string;
  tailingAreaName?: string;
  leadingAreaCode?: number;
  tailingAreaCode?: number;
  prices: {
    leadingOnly: number;
    tailingOnly: number;
    both: number;
  };
};

export const getCityTicketOptions = (
  cityTicketProduct: ProductWithTicketCategories | undefined,
  classType: "1st_class" | "2nd_class"
): CityTicketOptions | null => {
  if (!cityTicketProduct?.ticketCategories) return null;

  const classTickets = cityTicketProduct.ticketCategories.filter(
    (tc) => tc.categoryType === classType && tc.price
  );

  if (classTickets.length === 0) return null;

  let leadingAreaName: string | undefined;
  let tailingAreaName: string | undefined;
  let leadingAreaCode: number | undefined;
  let tailingAreaCode: number | undefined;
  let leadingOnlyPrice = 0;
  let tailingOnlyPrice = 0;
  let bothPrice = 0;

  classTickets.forEach((tc) => {
    const hasLeading = isValidArea(tc.leadingArea);
    const hasTailing = isValidArea(tc.tailingArea);
    const price = parseFloat(tc.price?.amount || "0");

    if (hasLeading && !hasTailing) {
      leadingOnlyPrice += price;
      const area = tc.leadingArea as TransportAreaCode;
      leadingAreaName = area.areaName;
      leadingAreaCode = area.areaCode;
    } else if (hasTailing && !hasLeading) {
      tailingOnlyPrice += price;
      const area = tc.tailingArea as TransportAreaCode;
      tailingAreaName = area.areaName;
      tailingAreaCode = area.areaCode;
    } else if (hasLeading && hasTailing) {
      bothPrice += price;
      const leadingArea = tc.leadingArea as TransportAreaCode;
      const tailingArea = tc.tailingArea as TransportAreaCode;
      leadingAreaName = leadingAreaName || leadingArea.areaName;
      tailingAreaName = tailingAreaName || tailingArea.areaName;
      leadingAreaCode = leadingAreaCode || leadingArea.areaCode;
      tailingAreaCode = tailingAreaCode || tailingArea.areaCode;
    }
  });

  const hasLeadingArea = leadingOnlyPrice > 0 || bothPrice > 0;
  const hasTailingArea = tailingOnlyPrice > 0 || bothPrice > 0;

  if (!hasLeadingArea && !hasTailingArea) return null;

  return {
    hasLeadingArea,
    hasTailingArea,
    leadingAreaName,
    tailingAreaName,
    leadingAreaCode,
    tailingAreaCode,
    prices: {
      leadingOnly: leadingOnlyPrice,
      tailingOnly: tailingOnlyPrice,
      both: bothPrice,
    },
  };
};

export const findMatchingCityTicketCategory = (
  cityTicketProduct: ProductWithTicketCategories | undefined,
  classType: "1st_class" | "2nd_class",
  isLeadingAreaSelected: boolean,
  isTailingAreaSelected: boolean
): TransportTicketCategory | undefined => {
  if (!cityTicketProduct?.ticketCategories) return undefined;

  const classTickets = cityTicketProduct.ticketCategories.filter(
    (tc) => tc.categoryType === classType && tc.price
  );

  if (isLeadingAreaSelected && isTailingAreaSelected) {
    return classTickets.find(
      (tc) => isValidArea(tc.leadingArea) && isValidArea(tc.tailingArea)
    );
  } else if (isLeadingAreaSelected) {
    return classTickets.find(
      (tc) => isValidArea(tc.leadingArea) && !isValidArea(tc.tailingArea)
    );
  } else if (isTailingAreaSelected) {
    return classTickets.find(
      (tc) => isValidArea(tc.tailingArea) && !isValidArea(tc.leadingArea)
    );
  }

  return undefined;
};

export const useCityTicketSelection = () => {
  const { products } = useProductsTicketCategories();
  const {
    isFirstClassSelected,
    isLeadingAreaSelected,
    isTailingAreaSelected,
    selectedProductId,
  } = useTransportStore(
    useShallow((state) => ({
      isFirstClassSelected: state.isFirstClassSelected,
      isLeadingAreaSelected: state.isLeadingAreaSelected,
      isTailingAreaSelected: state.isTailingAreaSelected,
      selectedProductId: state.selectedProductId,
    }))
  );

  const isCityTicketSelected = isLeadingAreaSelected || isTailingAreaSelected;
  const targetClassType = isFirstClassSelected ? "1st_class" : "2nd_class";

  const cityTicketProduct = useMemo(
    () => products?.find((p) => isCityTicketProduct(p)),
    [products]
  );

  const selectedProduct = useMemo(
    () => products?.find((p) => p.id === selectedProductId),
    [products, selectedProductId]
  );

  const cityTicketOptions = useMemo(
    () => getCityTicketOptions(cityTicketProduct, targetClassType),
    [cityTicketProduct, targetClassType]
  );

  const matchingCityTicketCategory = useMemo(
    () =>
      findMatchingCityTicketCategory(
        cityTicketProduct,
        targetClassType,
        isLeadingAreaSelected,
        isTailingAreaSelected
      ),
    [
      cityTicketProduct,
      targetClassType,
      isLeadingAreaSelected,
      isTailingAreaSelected,
    ]
  );

  const cityTicketPrice = useMemo(() => {
    if (!cityTicketOptions) return 0;

    if (isLeadingAreaSelected && isTailingAreaSelected) {
      return cityTicketOptions.prices.both;
    } else if (isLeadingAreaSelected) {
      return cityTicketOptions.prices.leadingOnly;
    } else if (isTailingAreaSelected) {
      return cityTicketOptions.prices.tailingOnly;
    }
    return 0;
  }, [cityTicketOptions, isLeadingAreaSelected, isTailingAreaSelected]);

  return {
    isCityTicketSelected,
    isLeadingAreaSelected,
    isTailingAreaSelected,
    isFirstClassSelected,
    targetClassType,
    cityTicketProduct,
    selectedProduct,
    cityTicketOptions,
    matchingCityTicketCategory,
    cityTicketPrice,
  };
};

export const useProductPrice = () => {
  const { products } = useProductsTicketCategories();
  const {
    selectedProductId,
    isFirstClassSelected,
    isLeadingAreaSelected,
    isTailingAreaSelected,
  } = useTransportStore(
    useShallow((state) => ({
      selectedProductId: state.selectedProductId,
      isFirstClassSelected: state.isFirstClassSelected,
      isLeadingAreaSelected: state.isLeadingAreaSelected,
      isTailingAreaSelected: state.isTailingAreaSelected,
    }))
  );

  const productPrice = useMemo(() => {
    if (!selectedProductId || !products?.length) return 0;

    const targetClassType = isFirstClassSelected ? "1st_class" : "2nd_class";
    const isCityTicketSelected = isLeadingAreaSelected || isTailingAreaSelected;

    const selectedProduct = products.find((p) => p.id === selectedProductId);
    const cityTicketProduct = products.find((p) => isCityTicketProduct(p));

    if (!selectedProduct) return 0;

    // Sum all tickets for a given class type (excluding kurzstrecke tariff)
    const getClassTotal = (
      product: ProductWithTicketCategories,
      classType: "1st_class" | "2nd_class" = targetClassType
    ) => {
      if (!product?.ticketCategories?.length) return 0;
      const tickets = product.ticketCategories.filter(
        (tc) =>
          tc.categoryType === classType &&
          tc.price &&
          tc.tariffLevel !== "kurzstrecke"
      );
      if (tickets.length === 0) return 0;
      return tickets.reduce(
        (sum, tc) => sum + parseFloat(tc.price?.amount || "0"),
        0
      );
    };

    if (isClassUpgradeProduct(selectedProduct)) {
      return getClassTotal(selectedProduct, "1st_class");
    }

    let total = 0;

    const getCityTicketTotal = (
      product: ProductWithTicketCategories,
      classType: "1st_class" | "2nd_class",
      leadingSelected: boolean,
      tailingSelected: boolean
    ) => {
      if (!product?.ticketCategories?.length) return 0;

      const classTickets = product.ticketCategories.filter(
        (tc) => tc.categoryType === classType && tc.price
      );

      let filteredTickets;
      if (leadingSelected && tailingSelected) {
        filteredTickets = classTickets.filter(
          (tc) => isValidArea(tc.leadingArea) && isValidArea(tc.tailingArea)
        );
      } else if (leadingSelected) {
        filteredTickets = classTickets.filter(
          (tc) => isValidArea(tc.leadingArea) && !isValidArea(tc.tailingArea)
        );
      } else if (tailingSelected) {
        filteredTickets = classTickets.filter(
          (tc) => isValidArea(tc.tailingArea) && !isValidArea(tc.leadingArea)
        );
      } else {
        return 0;
      }

      return filteredTickets.reduce(
        (sum, tc) => sum + parseFloat(tc.price?.amount || "0"),
        0
      );
    };

    if (isCityTicketSelected && cityTicketProduct) {
      const cityTicketTotal = getCityTicketTotal(
        cityTicketProduct,
        targetClassType,
        isLeadingAreaSelected,
        isTailingAreaSelected
      );

      if (cityTicketTotal > 0) {
        total = cityTicketTotal;
      } else {
        total = getClassTotal(selectedProduct);
      }
    } else {
      total = getClassTotal(selectedProduct);
    }

    const childProducts = products.filter(
      (p) =>
        isChildOnlyProduct(p) &&
        p.id !== selectedProductId &&
        !isClassUpgradeProduct(p)
    );
    childProducts.forEach((child) => {
      total += getClassTotal(child);
    });

    return total;
  }, [
    selectedProductId,
    products,
    isFirstClassSelected,
    isLeadingAreaSelected,
    isTailingAreaSelected,
  ]);

  return { productPrice };
};
