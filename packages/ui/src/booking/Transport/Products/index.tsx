import { useEffect, useMemo, useState } from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import { Check, ChevronDown, Info } from "lucide-react";
import { useShallow } from "zustand/react/shallow";
import { Card } from "../../Card";
import { PriceDisplay } from "../../PriceDisplay";
import { Title } from "../../Title";
import {
  isCityTicketProduct,
  isChildOnlyProduct,
  getCityTicketOptions,
  CityTicketOptions,
} from "./hooks";
import {
  useProductsTicketCategories,
  useTickets,
} from "../Tickets/hooks";
import { useTransportStore } from "../store";
import { sendTransportEvent } from "../tracking";
import { Skeleton } from "@swiss-activities/ui";
import {
  ProductWithTicketCategories,
  TransportTicketValidity,
} from "../../types/transport";
import { GlobalTooltip } from "../../ui/GlobalTooltip";
import { SegmentedControl } from "@swiss-activities/ui";
import { cn } from "../../utils/css/cn";
import { useI18n } from "../../utils/i18n/useI18n";

const formatValidityDate = (
  validity: TransportTicketValidity,
  locale: string,
  t: (key: string, values?: Record<string, string>) => string,
  isConnectionSpecific = false
): string => {
  const fromDate = new Date(`${validity.from.date}T${validity.from.time}`);
  const toDate = new Date(`${validity.to.date}T${validity.to.time}`);

  const intlLocale = locale.replace("_", "-");

  const dateFormatter = new Intl.DateTimeFormat(intlLocale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const timeFormatter = new Intl.DateTimeFormat(intlLocale, {
    hour: "2-digit",
    minute: "2-digit",
  });

  if (isConnectionSpecific) {
    return t("Transport.validityConnection", {
      date: dateFormatter.format(fromDate),
      fromTime: timeFormatter.format(fromDate),
      toTime: timeFormatter.format(toDate),
    });
  }

  return t("Transport.validityDateRange", {
    fromDate: dateFormatter.format(fromDate),
    toDate: dateFormatter.format(toDate),
    toTime: timeFormatter.format(toDate),
  });
};

const parseTextWithLinks = (text: string): React.ReactNode => {
  const urlRegex =
    /(\b(?:https?:\/\/)?(?:www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(?:\/[a-zA-Z0-9\-._~:/?#@!$&'*+,;=%]*[a-zA-Z0-9/])?)/g;
  const parts = text.split(urlRegex);

  return parts.map((part, index) => {
    if (urlRegex.test(part)) {
      urlRegex.lastIndex = 0;
      const href = part.startsWith("http") ? part : `https://${part}`;
      return (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline"
          onClick={(e) => e.stopPropagation()}
        >
          {part}
        </a>
      );
    }
    return part;
  });
};

type TicketSummaryItem = {
  label: string;
  discount?: string;
  discountType?: string | null;
  count: number;
  productTitle: string;
};

type GroupedProducts = {
  main: ProductWithTicketCategories[];
  cityTicket?: ProductWithTicketCategories;
  children: ProductWithTicketCategories[];
  classUpgrade: ProductWithTicketCategories[];
};

const isClassChangeProduct = (
  product: ProductWithTicketCategories
): boolean => {
  return product.ticketCategories?.some(
    (tc) => tc.offerType === "class_upgrade"
  );
};

const isSaverProduct = (product: ProductWithTicketCategories): boolean => {
  return product.title.toLowerCase().startsWith("spar");
};

const isDayPassProduct = (product: ProductWithTicketCategories): boolean => {
  const title = product.title.toLowerCase();
  return title.startsWith("spartageskarte") || title.startsWith("tageskarte");
};

const isDayClassUpgradeProduct = (
  product: ProductWithTicketCategories
): boolean => {
  return product.title.toLowerCase().startsWith("tagesklassenwechsel");
};

const getDisplayTitle = (title: string): string => {
  const colonIndex = title.indexOf(":");
  if (colonIndex > -1) {
    return title.substring(0, colonIndex);
  }
  return title;
};

const getProductTicketTotal = (
  product: ProductWithTicketCategories
): number => {
  if (!product.ticketCategories?.length) return 0;
  return product.ticketCategories.reduce(
    (sum, tc) => sum + parseFloat(tc.price?.amount || "0"),
    0
  );
};

const groupProducts = (
  products: ProductWithTicketCategories[]
): GroupedProducts => {
  const result: GroupedProducts = {
    main: [],
    children: [],
    classUpgrade: [],
  };

  products.forEach((product) => {
    if (isChildOnlyProduct(product)) {
      result.children.push(product);
    } else if (isCityTicketProduct(product)) {
      result.cityTicket = product;
    } else if (isClassChangeProduct(product)) {
      result.classUpgrade.push(product);
    } else {
      result.main.push(product);
    }
  });

  return result;
};

const get2ndClassTotal = (product: ProductWithTicketCategories): number => {
  if (!product.ticketCategories?.length) return 0;
  const secondClassTickets = product.ticketCategories.filter(
    (tc) => tc.categoryType === "2nd_class" && tc.tariffLevel !== "kurzstrecke"
  );
  if (secondClassTickets.length === 0) return 0;
  return secondClassTickets.reduce(
    (sum, tc) => sum + parseFloat(tc.price?.amount || "0"),
    0
  );
};

const get1stClassTotal = (product: ProductWithTicketCategories): number => {
  if (!product.ticketCategories?.length) return 0;
  const firstClassTickets = product.ticketCategories.filter(
    (tc) => tc.categoryType === "1st_class" && tc.tariffLevel !== "kurzstrecke"
  );
  if (firstClassTickets.length === 0) return 0;
  return firstClassTickets.reduce(
    (sum, tc) => sum + parseFloat(tc.price?.amount || "0"),
    0
  );
};

type ProductCardProps = {
  product: ProductWithTicketCategories;
  isSelected: boolean;
  onSelect: () => void;
  childrenTotal: number;
  cityTicketUpgrade?: ProductWithTicketCategories;
  isLeadingAreaSelected: boolean;
  isTailingAreaSelected: boolean;
  onToggleLeadingArea: () => void;
  onToggleTailingArea: () => void;
  isFirstClassSelected?: boolean;
  onToggleFirstClass?: () => void;
  ticketSummary: TicketSummaryItem[];
};

const ProductCard = ({
  product,
  isSelected,
  onSelect,
  childrenTotal,
  cityTicketUpgrade,
  isLeadingAreaSelected,
  isTailingAreaSelected,
  onToggleLeadingArea,
  onToggleTailingArea,
  isFirstClassSelected,
  onToggleFirstClass,
  ticketSummary,
}: ProductCardProps) => {
  const { t, locale } = useI18n();

  const secondClassPrice = useMemo(() => get2ndClassTotal(product), [product]);
  const firstClassPrice = useMemo(() => get1stClassTotal(product), [product]);
  const hasFirstClassOption = firstClassPrice > 0 && secondClassPrice > 0;

  const firstClassUpgradePrice = useMemo(() => {
    if (!hasFirstClassOption) return 0;
    return firstClassPrice - secondClassPrice;
  }, [firstClassPrice, secondClassPrice, hasFirstClassOption]);

  const mainProductPrice = useMemo(() => {
    if (isSelected && isFirstClassSelected && hasFirstClassOption) {
      return firstClassPrice;
    }
    if (secondClassPrice === 0 && firstClassPrice > 0) {
      return firstClassPrice;
    }
    return secondClassPrice;
  }, [
    isSelected,
    isFirstClassSelected,
    hasFirstClassOption,
    firstClassPrice,
    secondClassPrice,
  ]);

  const currentClassType = isFirstClassSelected ? "1st_class" : "2nd_class";

  const cityTicketOptions = useMemo(
    (): CityTicketOptions | null =>
      getCityTicketOptions(cityTicketUpgrade, currentClassType),
    [cityTicketUpgrade, currentClassType]
  );

  const hasCityTicketOption = cityTicketOptions !== null;
  const hasBothAreas =
    cityTicketOptions?.hasLeadingArea && cityTicketOptions?.hasTailingArea;
  const hasOnlyOneArea = hasCityTicketOption && !hasBothAreas;

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

  const isCityTicketSelected = isLeadingAreaSelected || isTailingAreaSelected;

  const isClassUpgrade = useMemo(
    () => isClassChangeProduct(product),
    [product]
  );
  const isSaver = useMemo(() => isSaverProduct(product), [product]);
  const isDayPass = useMemo(() => isDayPassProduct(product), [product]);
  const isDayClassUpgrade = useMemo(
    () => isDayClassUpgradeProduct(product),
    [product]
  );

  const upgradeTicketSummary = useMemo((): TicketSummaryItem[] => {
    if (!isClassUpgrade || !product.ticketCategories?.length) return [];

    const groups: Record<string, TicketSummaryItem> = {};

    product.ticketCategories.forEach((tc) => {
      const key = `${tc.label?.audience || tc.audience}-${tc.label?.discount || ""}`;
      if (!groups[key]) {
        groups[key] = {
          label: tc.label?.audience || tc.audience,
          discount: tc.label?.discount || undefined,
          discountType: tc.discountType,
          count: 0,
          productTitle: getDisplayTitle(product.title),
        };
      }
      groups[key].count += 1;
    });

    return Object.values(groups);
  }, [isClassUpgrade, product]);

  const validityText = useMemo(() => {
    if (isDayPass) {
      return t("Transport.validityGARoutes");
    }
    if (isDayClassUpgrade) {
      return t("Transport.validityDayClassUpgrade");
    }
    if (isClassUpgrade && isSaver) {
      return t("Transport.validityForConnectionWith2ndClass");
    }
    if (isClassUpgrade && !isSaver) {
      return t("Transport.validityForRouteWith2ndClass");
    }
    if (isSaver) {
      return t("Transport.validityForConnection");
    }
    return t("Transport.validityOnSelectedRoute");
  }, [isClassUpgrade, isSaver, isDayPass, isDayClassUpgrade, t]);

  const descriptionItems = useMemo(() => {
    if (!product.description) return [];
    return product.description
      .split("\n\n")
      .map((item) => item.replace(/^\.\t/, "").trim())
      .filter(Boolean);
  }, [product.description]);

  const displayTitle = useMemo(
    () => getDisplayTitle(product.title),
    [product.title]
  );

  const ticketValidity = useMemo(() => {
    const firstTicketWithValidity = product.ticketCategories?.find(
      (tc) => tc.ticketValidity
    );
    return firstTicketWithValidity?.ticketValidity;
  }, [product.ticketCategories]);

  const totalPrice = useMemo(() => {
    if (isSelected && isCityTicketSelected) {
      return cityTicketPrice + childrenTotal;
    }
    return mainProductPrice + childrenTotal;
  }, [
    isSelected,
    isCityTicketSelected,
    cityTicketPrice,
    mainProductPrice,
    childrenTotal,
  ]);

  return (
    <Card
      id={`product-${product.title.toLowerCase().replace(/ /g, "-")}`}
      className={cn("cursor-pointer", {
        "is-selected outline-primary": isSelected,
      })}
      onClick={onSelect}
    >
      <div className="flex items-center">
        <div
          className={cn(
            "me-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-solid text-white transition duration-100 ease-in",
            {
              "border-primary bg-primary": isSelected,
              "border-gray-400": !isSelected,
            }
          )}
        >
          {isSelected && (
            <span className="h-4 w-4 rounded-full border-2 border-solid border-white" />
          )}
        </div>
        <p className="relative text-lg font-medium text-black">
          {displayTitle}
        </p>
        {descriptionItems.length > 0 && (
          <GlobalTooltip
            side="top"
            align="start"
            className="max-w-[280px]"
            content={
              <ul className="list-disc space-y-0.5 ps-4 text-xs">
                {descriptionItems.map((item, index) => (
                  <li key={index}>{parseTextWithLinks(item)}</li>
                ))}
              </ul>
            }
          >
            <button
              type="button"
              onClick={(e) => e.stopPropagation()}
              className="ms-3 mt-0.5 cursor-pointer border-none bg-transparent p-0"
            >
              <Info className="h-4 w-4 text-gray-400" />
            </button>
          </GlobalTooltip>
        )}
      </div>

      <div className="-mx-4 mt-4 border-b-0 border-e-0 border-s-0 border-t border-solid border-gray-200 px-4 pt-4">
        {(() => {
          const items = isClassUpgrade
            ? upgradeTicketSummary
            : ticketSummary.map((item) => ({
                ...item,
                productTitle: displayTitle,
              }));
          if (items.length === 0) return null;
          return (
            <div className="mb-4">
              <p className="mb-1 text-sm font-bold text-black">
                {items.reduce((sum, item) => sum + item.count, 0) === 1
                  ? t("Transport.ticket")
                  : t("Transport.tickets")}
              </p>
              <div className="space-y-1">
                {items.map((item, index) => {
                  const isIncluded =
                    !isClassUpgrade &&
                    (item.discountType === "sbb_ga" ||
                      item.discountType === "sbb_swiss_travel_pass");
                  return (
                    <p key={index} className="text-muted text-sm">
                      {isIncluded && item.discount
                        ? `${item.count} ${t("Transport.includedIn")} ${item.discount}`
                        : `${item.count} ${item.productTitle}${item.discount ? `, ${item.discount}` : `, ${item.label}`}`}
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })()}

        {ticketValidity && (
          <div className={totalPrice ? "mb-4" : ""}>
            <p className="mb-1 text-sm font-bold text-black">
              {t("Transport.validity")}
            </p>
            <p className="text-muted text-sm">{validityText}</p>
            <p className="text-muted text-sm">
              {formatValidityDate(
                ticketValidity,
                locale,
                t,
                isSaver && !isDayPass
              )}
            </p>
          </div>
        )}
      </div>

      {isSelected && hasFirstClassOption && firstClassUpgradePrice > 0 && (
        <div
          className="-mx-4 cursor-pointer border-b-0 border-e-0 border-s-0 border-t border-solid border-gray-200 bg-gray-100 px-4 py-3"
          onClick={(e) => {
            e.stopPropagation();
            onToggleFirstClass?.();
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div
                className={cn(
                  "me-2 flex h-5 w-5 shrink-0 items-center justify-center self-start rounded border border-solid text-white transition duration-100 ease-in",
                  {
                    "border-primary bg-primary": isFirstClassSelected,
                    "border-gray-400 bg-white": !isFirstClassSelected,
                  }
                )}
              >
                {isFirstClassSelected && <Check size={14} strokeWidth={3} />}
              </div>
              <div className="-mt-0.5">
                <span className="text-sm text-black">
                  {t("Transport.upgradeTo1stClass")}
                </span>
                <p className="text-xs text-gray-500">
                  {t("Transport.upgradeTo1stClassDescription")}
                </p>
              </div>
            </div>
            <span className="self-start text-sm font-medium text-black">
              + CHF {firstClassUpgradePrice.toFixed(2)}
            </span>
          </div>
        </div>
      )}

      {isSelected && hasCityTicketOption && (
        <>
          {hasOnlyOneArea ? (
            <div
              className="-mx-4 cursor-pointer border-b-0 border-e-0 border-s-0 border-t border-solid border-gray-200 bg-gray-100 px-4 py-3"
              onClick={(e) => {
                e.stopPropagation();
                if (cityTicketOptions?.hasLeadingArea) {
                  onToggleLeadingArea();
                } else {
                  onToggleTailingArea();
                }
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div
                    className={cn(
                      "me-2 flex h-5 w-5 shrink-0 items-center justify-center self-start rounded border border-solid text-white transition duration-100 ease-in",
                      {
                        "border-primary bg-primary": isCityTicketSelected,
                        "border-gray-400 bg-white": !isCityTicketSelected,
                      }
                    )}
                  >
                    {isCityTicketSelected && (
                      <Check size={14} strokeWidth={3} />
                    )}
                  </div>
                  <div className="-mt-0.5">
                    <span className="text-sm text-black">
                      {cityTicketOptions?.hasLeadingArea
                        ? cityTicketOptions.leadingAreaName
                        : cityTicketOptions?.tailingAreaName}
                    </span>
                    <p className="text-xs text-gray-500">
                      {t("Transport.cityTicketDescription")}
                    </p>
                  </div>
                </div>
                <span className="self-start text-sm font-medium text-black">
                  + CHF{" "}
                  {(
                    (cityTicketOptions?.hasLeadingArea
                      ? cityTicketOptions?.prices.leadingOnly
                      : cityTicketOptions?.prices.tailingOnly || 0) -
                    mainProductPrice
                  ).toFixed(2)}
                </span>
              </div>
            </div>
          ) : (
            <>
              {cityTicketOptions?.hasLeadingArea && (
                <div
                  className="-mx-4 cursor-pointer border-b-0 border-e-0 border-s-0 border-t border-solid border-gray-200 bg-gray-100 px-4 py-3"
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleLeadingArea();
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div
                        className={cn(
                          "me-2 flex h-5 w-5 shrink-0 items-center justify-center self-start rounded border border-solid text-white transition duration-100 ease-in",
                          {
                            "border-primary bg-primary": isLeadingAreaSelected,
                            "border-gray-400 bg-white": !isLeadingAreaSelected,
                          }
                        )}
                      >
                        {isLeadingAreaSelected && (
                          <Check size={14} strokeWidth={3} />
                        )}
                      </div>
                      <div className="-mt-0.5">
                        <span className="text-sm text-black">
                          {cityTicketOptions.leadingAreaName}
                        </span>
                        <p className="text-xs text-gray-500">
                          {t("Transport.cityTicketDescription")}
                        </p>
                      </div>
                    </div>
                    {!(isLeadingAreaSelected && isTailingAreaSelected) && (
                      <span className="self-start text-sm font-medium text-black">
                        + CHF{" "}
                        {(isTailingAreaSelected
                          ? cityTicketOptions.prices.both -
                            cityTicketOptions.prices.tailingOnly
                          : cityTicketOptions.prices.leadingOnly -
                            mainProductPrice
                        ).toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              )}
              {cityTicketOptions?.hasTailingArea && (
                <div
                  className="-mx-4 cursor-pointer border-b-0 border-e-0 border-s-0 border-t border-solid border-gray-200 bg-gray-100 px-4 py-3"
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleTailingArea();
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div
                        className={cn(
                          "me-2 flex h-5 w-5 shrink-0 items-center justify-center self-start rounded border border-solid text-white transition duration-100 ease-in",
                          {
                            "border-primary bg-primary": isTailingAreaSelected,
                            "border-gray-400 bg-white": !isTailingAreaSelected,
                          }
                        )}
                      >
                        {isTailingAreaSelected && (
                          <Check size={14} strokeWidth={3} />
                        )}
                      </div>
                      <div className="-mt-0.5">
                        <span className="text-sm text-black">
                          {cityTicketOptions.tailingAreaName}
                        </span>
                        <p className="text-xs text-gray-500">
                          {t("Transport.cityTicketDescription")}
                        </p>
                      </div>
                    </div>
                    <span className="self-start text-sm font-medium text-black">
                      + CHF{" "}
                      {(isLeadingAreaSelected && isTailingAreaSelected
                        ? cityTicketOptions.prices.both - mainProductPrice
                        : isLeadingAreaSelected
                          ? cityTicketOptions.prices.both -
                            cityTicketOptions.prices.leadingOnly
                          : cityTicketOptions.prices.tailingOnly -
                            mainProductPrice
                      ).toFixed(2)}
                    </span>
                  </div>
                </div>
              )}
            </>
          )}
        </>
      )}

      <PriceDisplay
        price={totalPrice}
        total
        className="-mx-4 border-b-0 border-e-0 border-s-0 border-t border-solid border-gray-200 px-4 pt-4"
      />
    </Card>
  );
};

export const Products = () => {
  const { t } = useI18n();
  const { products, isLoading, isFetching } = useProductsTicketCategories();
  const { data: ticketCategories } = useTickets();
  const [isClassUpgradeOpen, setIsClassUpgradeOpen] = useState(false);
  const {
    selectedProductId,
    setSelectedProduct,
    isFirstClassSelected,
    setFirstClassSelected,
    isLeadingAreaSelected,
    setLeadingAreaSelected,
    isTailingAreaSelected,
    setTailingAreaSelected,
    clearProductSelections,
    tripType,
    setTripType,
    ticketSelections,
  } = useTransportStore(
    useShallow((state) => ({
      selectedProductId: state.selectedProductId,
      setSelectedProduct: state.setSelectedProduct,
      isFirstClassSelected: state.isFirstClassSelected,
      setFirstClassSelected: state.setFirstClassSelected,
      isLeadingAreaSelected: state.isLeadingAreaSelected,
      setLeadingAreaSelected: state.setLeadingAreaSelected,
      isTailingAreaSelected: state.isTailingAreaSelected,
      setTailingAreaSelected: state.setTailingAreaSelected,
      clearProductSelections: state.clearProductSelections,
      tripType: state.tripType,
      setTripType: state.setTripType,
      ticketSelections: state.ticketSelections,
    }))
  );

  const handleSelectProduct = (productId: number) => {
    setSelectedProduct(productId);
    const product = products.find((p) => p.id === productId);
    sendTransportEvent("transport_select_product", {
      item_category3: product ? getDisplayTitle(product.title) : undefined,
    });
  };

  const handleToggleFirstClass = () => {
    const next = !isFirstClassSelected;
    setFirstClassSelected(next);
    sendTransportEvent("transport_select_upgrade", {
      upgrade_type: "first_class",
      selected: next,
    });
  };

  const handleToggleLeadingArea = () => {
    const next = !isLeadingAreaSelected;
    setLeadingAreaSelected(next);
    sendTransportEvent("transport_select_upgrade", {
      upgrade_type: "city_ticket_leading",
      selected: next,
    });
  };

  const handleToggleTailingArea = () => {
    const next = !isTailingAreaSelected;
    setTailingAreaSelected(next);
    sendTransportEvent("transport_select_upgrade", {
      upgrade_type: "city_ticket_tailing",
      selected: next,
    });
  };

  const handleTripTypeChange = (value: string) => {
    setTripType(value as "oneWay" | "roundTrip");
    sendTransportEvent("transport_select_trip_type", {
      trip_type: value,
    });
  };

  const groupedProducts = useMemo(() => {
    const grouped = groupProducts(products);
    if (grouped.main.length === 0 && grouped.children.length > 0) {
      return {
        ...grouped,
        main: grouped.children,
        children: [],
      };
    }
    return grouped;
  }, [products]);

  useEffect(() => {
    if (isFetching || !products.length) return;

    const productIds = new Set(products.map((p) => p.id));
    const selectedExists = selectedProductId
      ? productIds.has(selectedProductId)
      : true;

    if (!selectedExists) {
      clearProductSelections();
    }
  }, [products, selectedProductId, isFetching, clearProductSelections]);

  const childrenTotal = useMemo(() => {
    const targetClassType = isFirstClassSelected ? "1st_class" : "2nd_class";
    return groupedProducts.children.reduce((sum, child) => {
      if (!child.ticketCategories?.length) return sum;
      const classTickets = child.ticketCategories.filter(
        (tc) => tc.categoryType === targetClassType
      );
      if (classTickets.length === 0) return sum;
      return (
        sum +
        classTickets.reduce(
          (ticketSum, tc) => ticketSum + parseFloat(tc.price?.amount || "0"),
          0
        )
      );
    }, 0);
  }, [groupedProducts.children, isFirstClassSelected]);

  const ticketSummary = useMemo((): TicketSummaryItem[] => {
    const ticketCounts: Record<number, number> = {};

    Object.values(ticketSelections).forEach((ticketCategoryId) => {
      ticketCounts[ticketCategoryId] =
        (ticketCounts[ticketCategoryId] || 0) + 1;
    });

    const items: TicketSummaryItem[] = [];

    Object.entries(ticketCounts).forEach(([ticketCategoryIdStr, count]) => {
      const ticketCategoryId = Number(ticketCategoryIdStr);

      for (const product of products) {
        const ticket = product.ticketCategories?.find(
          (tc) => tc.ticketCategoryId === ticketCategoryId
        );
        if (ticket) {
          items.push({
            label: ticket.label?.audience || ticket.audience,
            discount: ticket.label?.discount || undefined,
            discountType: ticket.discountType,
            count,
            productTitle: getDisplayTitle(product.title),
          });
          break;
        }
      }
    });

    return items;
  }, [ticketSelections, products]);

  const cityTicket = groupedProducts.cityTicket;
  const classUpgradeProducts = groupedProducts.classUpgrade;

  return (
    <div>
      <Title>{t("Transport.selectProduct")}</Title>
      <SegmentedControl
        value={tripType}
        onChange={handleTripTypeChange}
        options={[
          { value: "oneWay", label: t("Transport.oneWay") },
          { value: "roundTrip", label: t("Transport.roundTrip") },
        ]}
        className="mb-4 w-full [&_button]:flex-1"
        variant="rounded"
      />
      {isLoading && <Skeleton loading amount={3} />}
      {!isLoading && groupedProducts.main.length === 0 && (
        <div className="py-4 text-center text-sm text-gray-500">
          {t("Transport.noProductsAvailable")}
        </div>
      )}
      {!isLoading && groupedProducts.main.length > 0 && (
        <div className="space-y-2">
          {groupedProducts.main.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isSelected={selectedProductId === product.id}
              onSelect={() => handleSelectProduct(product.id)}
              childrenTotal={childrenTotal}
              cityTicketUpgrade={cityTicket}
              isLeadingAreaSelected={isLeadingAreaSelected}
              isTailingAreaSelected={isTailingAreaSelected}
              onToggleLeadingArea={handleToggleLeadingArea}
              onToggleTailingArea={handleToggleTailingArea}
              isFirstClassSelected={isFirstClassSelected}
              onToggleFirstClass={handleToggleFirstClass}
              ticketSummary={ticketSummary}
            />
          ))}
        </div>
      )}
      {!isLoading &&
        classUpgradeProducts.length > 0 &&
        Object.keys(ticketSelections).length <= 1 && (
          <Collapsible.Root
            open={isClassUpgradeOpen}
            onOpenChange={setIsClassUpgradeOpen}
            className="mt-4"
          >
            <Collapsible.Trigger className="flex w-full cursor-pointer items-center justify-between border-none bg-transparent py-3 text-start">
              <span className="text-lg font-medium text-black">
                {t("Transport.classUpgradeOnly")}
              </span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 text-gray-500 transition-transform duration-200",
                  isClassUpgradeOpen && "rotate-180"
                )}
              />
            </Collapsible.Trigger>
            <Collapsible.Content className="space-y-2">
              {classUpgradeProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isSelected={selectedProductId === product.id}
                  onSelect={() => handleSelectProduct(product.id)}
                  childrenTotal={childrenTotal}
                  isLeadingAreaSelected={false}
                  isTailingAreaSelected={false}
                  onToggleLeadingArea={() => {}}
                  onToggleTailingArea={() => {}}
                  ticketSummary={ticketSummary}
                />
              ))}
            </Collapsible.Content>
          </Collapsible.Root>
        )}
    </div>
  );
};
