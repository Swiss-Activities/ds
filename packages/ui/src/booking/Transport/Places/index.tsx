import {
  ReactNode,
  useEffect,
  useRef,
  useMemo,
  useState,
  ChangeEvent,
  MouseEvent,
} from "react";
import { VisuallyHidden } from "@silk-hq/components";
import { useIsFetching } from "@tanstack/react-query";
import { XIcon, PlusIcon, RefreshCwIcon } from "lucide-react";
import { useSearchParams } from "../../utils/i18n/navigation";
import { useShallow } from "zustand/react/shallow";
import { Card } from "../../Card";
import {
  PlaceInput,
  PlaceInputRef,
} from "./PlaceInput";
import { PlaceItem } from "./PlaceItem";
import { PlacesList } from "./PlacesList";
import { Settings } from "../Settings";
import { SettingsSheet } from "../Settings/SettingsSheet";
import { useTransportStoreLocal } from "../store";
import { Loader } from "@swiss-activities/ui";
import { Text } from "@swiss-activities/ui";
import { TransportPlace } from "../../types/transport";
import { Button } from "@swiss-activities/ui";
import { Input } from "@swiss-activities/ui";
import { SheetFull } from "@swiss-activities/ui";
import { Tabs, TabsList, TabsTrigger } from "../../ui/Tabs";
import { cn } from "../../utils/css/cn";
import { useDebounce } from "../../utils/data/useDebounce";
import { useI18n } from "../../utils/i18n/useI18n";
import { dataLayerSend } from "../../utils/thirdParty/dataLayerSend";
import { useGeolocation } from "../../utils/ui/useGeolocation";
import { useGetPlaces } from "../../query/transport/places";

type PlacesProps = {
  disableTo?: boolean;
  toLoading?: boolean;
  autoFocusFrom?: boolean;
  className?: string;
  containerClassName?: string;
  cardClassName?: string;
  title?: string;
  toLabel?: string;
  fromPlaceholder?: string;
  toPlaceholder?: string;
  hideSettings?: boolean;
  children?: ReactNode;
  onFromSelect?: () => void;
};

export const Places = ({
  disableTo,
  toLoading,
  autoFocusFrom,
  className,
  containerClassName,
  cardClassName,
  title,
  toLabel,
  fromPlaceholder,
  toPlaceholder,
  hideSettings,
  children,
  onFromSelect,
}: PlacesProps = {}) => {
  const { t, locale } = useI18n();
  const searchParams = useSearchParams();
  const hasInitializedTo = useRef(false);
  const hasInitializedFrom = useRef(false);
  const hasInitializedFocus = useRef(false);
  const fromInputRef = useRef<PlaceInputRef>(null);
  const toInputRef = useRef<PlaceInputRef>(null);
  const hiddenInputRef = useRef<HTMLInputElement>(null);
  const sheetInputRef = useRef<HTMLInputElement>(null);

  const [loadingDots, setLoadingDots] = useState(0);
  useEffect(() => {
    if (!toLoading) return;
    const interval = setInterval(() => {
      setLoadingDots((d) => (d + 1) % 4);
    }, 400);
    return () => clearInterval(interval);
  }, [toLoading]);
  const toLoadingText = `${t("Transport.loadingDestination")}${".".repeat(loadingDots)}`;

  const [mobileSheetOpen, setMobileSheetOpen] = useState(false);
  const [mobileSheetType, setMobileSheetType] = useState<"from" | "to" | "via">(
    "from"
  );
  const [mobileSheetViaIndex, setMobileSheetViaIndex] = useState(0);
  const [mobileSettingsSheetOpen, setMobileSettingsSheetOpen] = useState(false);

  const urlParams = useMemo(() => {
    const toLat = searchParams?.get("toLat");
    const toLng = searchParams?.get("toLng");
    const fromLat = searchParams?.get("fromLat");
    const fromLng = searchParams?.get("fromLng");
    const fromText = searchParams?.get("from")?.trim() || null;
    const toText = searchParams?.get("to")?.trim() || null;
    const hasFocusFrom = searchParams?.has("focusFrom") ?? false;
    const hasFocusTo = searchParams?.has("focusTo") ?? false;

    return {
      toLat: toLat ? parseFloat(toLat) : null,
      toLng: toLng ? parseFloat(toLng) : null,
      fromLat: fromLat ? parseFloat(fromLat) : null,
      fromLng: fromLng ? parseFloat(fromLng) : null,
      fromText,
      toText,
      focusFrom: hasFocusFrom,
      focusTo: hasFocusTo,
    };
  }, [searchParams]);

  const {
    toFocused,
    fromFocused,
    viaFocusedIndex,
    to,
    from,
    vias,
    setToPlace,
    setFromPlace,
    setViaPlace,
    fromValue,
    toValue,
    viaValues,
    setFromValue,
    setToValue,
    setViaValue,
    addVia,
    removeVia,
    calendarDate,
    time,
    direction,
    setDirection,
    resetDateTime,
  } = useTransportStoreLocal(
    useShallow((state) => ({
      fromFocused: state.fromFocused,
      toFocused: state.toFocused,
      viaFocusedIndex: state.viaFocusedIndex,
      to: state.to,
      from: state.from,
      vias: state.vias,
      setToPlace: state.setToPlace,
      setFromPlace: state.setFromPlace,
      setViaPlace: state.setViaPlace,
      fromValue: state.fromValue,
      toValue: state.toValue,
      viaValues: state.viaValues,
      setFromValue: state.setFromValue,
      setToValue: state.setToValue,
      setViaValue: state.setViaValue,
      addVia: state.addVia,
      removeVia: state.removeVia,
      calendarDate: state.calendarDate,
      time: state.time,
      direction: state.direction,
      setDirection: state.setDirection,
      resetDateTime: state.resetDateTime,
    }))
  );

  const hasToCoords = urlParams.toLat !== null && urlParams.toLng !== null;
  const hasFromCoords =
    urlParams.fromLat !== null && urlParams.fromLng !== null;

  const { data: toPlacesFromUrl } = useGetPlaces(
    hasToCoords
      ? {
          coordinates: {
            latitude: urlParams.toLat || 0,
            longitude: urlParams.toLng || 0,
          },
        }
      : urlParams.toText
        ? { search: urlParams.toText }
        : undefined,
    (hasToCoords || !!urlParams.toText) && !to && !hasInitializedTo.current
  );

  const { data: fromPlacesFromUrl } = useGetPlaces(
    hasFromCoords
      ? {
          coordinates: {
            latitude: urlParams.fromLat || 0,
            longitude: urlParams.fromLng || 0,
          },
        }
      : urlParams.fromText
        ? { search: urlParams.fromText }
        : undefined,
    (hasFromCoords || !!urlParams.fromText) &&
      !from &&
      !hasInitializedFrom.current
  );

  useEffect(() => {
    if (
      toPlacesFromUrl &&
      toPlacesFromUrl.length > 0 &&
      !hasInitializedTo.current
    ) {
      const firstPlace = toPlacesFromUrl[0];
      setToPlace(firstPlace.ref, firstPlace.name);
      hasInitializedTo.current = true;
    }
  }, [toPlacesFromUrl, setToPlace]);

  useEffect(() => {
    if (
      fromPlacesFromUrl &&
      fromPlacesFromUrl.length > 0 &&
      !hasInitializedFrom.current
    ) {
      const firstPlace = fromPlacesFromUrl[0];
      setFromPlace(firstPlace.ref, firstPlace.name);
      hasInitializedFrom.current = true;
    }
  }, [fromPlacesFromUrl, setFromPlace]);

  useEffect(() => {
    if (hasInitializedFocus.current) return;

    if (autoFocusFrom) {
      hasInitializedFocus.current = true;
      setTimeout(() => fromInputRef.current?.focus(), 200);
    } else if (urlParams.focusFrom) {
      hasInitializedFocus.current = true;
      setTimeout(() => fromInputRef.current?.focus(), 100);
    } else if (urlParams.focusTo) {
      hasInitializedFocus.current = true;
      setTimeout(() => toInputRef.current?.focus(), 100);
    }
  }, [autoFocusFrom, urlParams.focusFrom, urlParams.focusTo]);

  const handleMobileFromClick = () => {
    hiddenInputRef.current?.focus();
    setMobileSheetType("from");
    setMobileSheetOpen(true);
  };

  const handleMobileToClick = () => {
    hiddenInputRef.current?.focus();
    setMobileSheetType("to");
    setMobileSheetOpen(true);
  };

  const handleMobileViaClick = (index: number) => {
    hiddenInputRef.current?.focus();
    setMobileSheetType("via");
    setMobileSheetViaIndex(index);
    setMobileSheetOpen(true);
  };

  const handleAddVia = () => {
    addVia();
  };

  const handleRemoveVia = (index: number) => {
    removeVia(index);
  };

  const handleSheetPresentedChange = (presented: boolean) => {
    setMobileSheetOpen(presented);
  };

  const sheetSearchTerm =
    mobileSheetType === "from"
      ? fromValue
      : mobileSheetType === "to"
        ? toValue
        : viaValues[mobileSheetViaIndex] || "";
  const setSheetSearchTerm =
    mobileSheetType === "from"
      ? setFromValue
      : mobileSheetType === "to"
        ? setToValue
        : (value: string) => setViaValue(mobileSheetViaIndex, value);
  const setSheetPlace =
    mobileSheetType === "from"
      ? (place: TransportPlace) => setFromPlace(place.ref, place.name)
      : mobileSheetType === "to"
        ? (place: TransportPlace) => setToPlace(place.ref, place.name)
        : (place: TransportPlace) =>
            setViaPlace(mobileSheetViaIndex, place.ref, place.name);
  const sheetPlaceholder =
    mobileSheetType === "from"
      ? (fromPlaceholder ?? t("general.from"))
      : mobileSheetType === "to"
        ? (toPlaceholder ?? t("general.to"))
        : t("Transport.via");

  const debouncedSheetSearchTerm = useDebounce(sheetSearchTerm, 300);
  const globalFetching = useIsFetching({ queryKey: ["get", "places"] });
  const showLoader = debouncedSheetSearchTerm.length > 0 && globalFetching > 0;

  const { isAvailable, isDenied, getCurrentPosition } = useGeolocation();
  const [currentCoordinates, setCurrentCoordinates] = useState<{
    longitude: number;
    latitude: number;
  } | null>(null);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);

  const { data: sheetPlaces } = useGetPlaces(
    { search: debouncedSheetSearchTerm },
    debouncedSheetSearchTerm.length > 0 &&
      mobileSheetOpen &&
      !currentCoordinates
  );

  const {
    data: currentLocationPlaces,
    isFetched: isLocationPlacesFetched,
    error: locationPlacesError,
  } = useGetPlaces(
    { coordinates: currentCoordinates! },
    Boolean(currentCoordinates)
  );
  const [locationError, setLocationError] = useState(false);

  const navigateToNextTab = () => {
    let nextType: "from" | "to" | "via" | null = null;
    let nextViaIndex = 0;

    if (mobileSheetType === "from") {
      if (vias.length > 0) {
        nextType = "via";
        nextViaIndex = 0;
      } else if (!disableTo) {
        nextType = "to";
      } else {
        setMobileSheetOpen(false);
        return;
      }
    } else if (mobileSheetType === "via") {
      // Check if there's a next via
      if (mobileSheetViaIndex < vias.length - 1) {
        nextType = "via";
        nextViaIndex = mobileSheetViaIndex + 1;
      } else if (!disableTo) {
        nextType = "to";
      } else {
        setMobileSheetOpen(false);
        return;
      }
    } else if (mobileSheetType === "to") {
      if (!from) {
        nextType = "from";
      } else {
        // Check for any unfilled vias
        const emptyViaIndex = vias.findIndex((v) => !v);
        if (emptyViaIndex !== -1) {
          nextType = "via";
          nextViaIndex = emptyViaIndex;
        } else {
          setMobileSheetOpen(false);
          return;
        }
      }
    }

    if (nextType) {
      setMobileSheetType(nextType);
      if (nextType === "via") {
        setMobileSheetViaIndex(nextViaIndex);
      }
      const nextHasValue =
        nextType === "from"
          ? from
          : nextType === "to"
            ? to
            : vias[nextViaIndex];
      if (!nextHasValue) {
        sheetInputRef.current?.focus();
        sheetInputRef.current?.click();
      }
    }
  };

  useEffect(() => {
    if (!currentCoordinates || !isLocationPlacesFetched) return;

    if (locationPlacesError) {
      setCurrentCoordinates(null);
      setLocationError(true);
      return;
    }

    if (currentLocationPlaces && currentLocationPlaces.length > 0) {
      const firstPlace = currentLocationPlaces[0];
      setSheetPlace(firstPlace);
      sendSelectEvent(getSearchField(), firstPlace.name, "geolocation");
      setCurrentCoordinates(null);
      navigateToNextTab();
    } else {
      setCurrentCoordinates(null);
    }
  }, [
    currentLocationPlaces,
    currentCoordinates,
    isLocationPlacesFetched,
    locationPlacesError,
    setSheetPlace,
  ]);

  const handleSheetInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSheetSearchTerm(e.target.value);
  };

  const handleSheetReset = () => {
    setSheetSearchTerm("");
  };

  const lastSearchTermRef = useRef<Record<string, string>>({});
  const searchTimerRef = useRef<Record<string, ReturnType<typeof setTimeout>>>(
    {}
  );
  const pendingSearchRef = useRef<Record<string, () => void>>({});

  const getSearchField = () => {
    if (mobileSheetType === "via") return `via_${mobileSheetViaIndex + 1}`;
    return mobileSheetType;
  };

  useEffect(() => {
    if (!mobileSheetOpen || !debouncedSheetSearchTerm || !sheetPlaces) return;
    const field = getSearchField();
    if (lastSearchTermRef.current[field] === debouncedSheetSearchTerm) return;
    lastSearchTermRef.current[field] = debouncedSheetSearchTerm;

    const fire = () => {
      dataLayerSend({
        data: {
          event: `transport_search_${field}`,
          search_term: debouncedSheetSearchTerm,
          search_results: sheetPlaces.length,
        },
        noActivities: true,
        timeout: 0,
      });
      delete pendingSearchRef.current[field];
    };

    if (searchTimerRef.current[field])
      clearTimeout(searchTimerRef.current[field]);
    pendingSearchRef.current[field] = fire;
    searchTimerRef.current[field] = setTimeout(fire, 2000);

    return () => {
      if (searchTimerRef.current[field])
        clearTimeout(searchTimerRef.current[field]);
    };
  }, [
    sheetPlaces,
    debouncedSheetSearchTerm,
    mobileSheetOpen,
    mobileSheetType,
    mobileSheetViaIndex,
  ]);

  const flushPendingSearch = (field: string) => {
    if (searchTimerRef.current[field]) {
      clearTimeout(searchTimerRef.current[field]);
      delete searchTimerRef.current[field];
    }
    if (pendingSearchRef.current[field]) {
      pendingSearchRef.current[field]();
    }
  };

  const sendSelectEvent = (
    field: string,
    name: string,
    source: "search" | "geolocation" = "search"
  ) => {
    flushPendingSearch(field);
    dataLayerSend({
      data: {
        event: `transport_search_${field}_select`,
        search_term: name,
        search_source: source,
      },
      noActivities: true,
      timeout: 0,
    });
  };

  const handleSheetPlaceSelect = (place: TransportPlace) => {
    setSheetPlace(place);
    sendSelectEvent(getSearchField(), place.name);
    navigateToNextTab();
  };

  const handleCurrentLocationSelect = async () => {
    try {
      setIsLoadingLocation(true);
      setLocationError(false);
      const coordinates = await getCurrentPosition();
      setCurrentCoordinates(coordinates);
    } catch (error) {
      console.error("Error getting location:", error);
      setLocationError(true);
    } finally {
      setIsLoadingLocation(false);
    }
  };

  return (
    <>
      <div
        className={cn(
          "mx-auto w-full max-w-screen-sm",
          containerClassName,
          className
        )}
      >
        <Card
          className={cn(
            "relative flex-col overflow-visible border-solid pb-1 lg:pb-0",
            hideSettings && !children && "pb-4 lg:pb-4",
            cardClassName
          )}
          paddingNone
        >
          <div className="px-4 pb-3 pt-4 lg:px-6 lg:pb-2">
            <Text size="md2">{title || t("Transport.searchTrips")}</Text>
          </div>
          <div className="mb-4 me-4 ms-12 overflow-visible rounded-lg border border-solid border-gray-300 lg:m-0 lg:rounded-none lg:border-0">
            <div className="-ms-12 flex lg:ms-0">
              <div className="flex w-10 flex-col items-center py-[1.125rem] lg:w-16 lg:py-[1.575rem]">
                <div className="h-2.5 w-2.5 shrink-0 rounded-full border border-solid border-gray-800 bg-gray-800" />
                <div className="w-0.5 flex-1 bg-gray-800" />
                {vias.map((_, index) => (
                  <div key={index} className="contents">
                    <div className="h-2.5 w-2.5 shrink-0 rounded-full border-2 border-solid border-gray-800 bg-white" />
                    <div className="w-0.5 flex-1 bg-gray-800" />
                  </div>
                ))}
                <div className="h-2.5 w-2.5 shrink-0 rounded-full border border-solid border-gray-800 bg-gray-800" />
              </div>
              <div className="ms-2 flex w-full flex-col lg:ms-0">
                <div className="relative">
                  <PlaceInput
                    ref={fromInputRef}
                    type="from"
                    placeholder={fromPlaceholder ?? t("general.from")}
                    className="rounded-none"
                    onMobileClick={handleMobileFromClick}
                  />
                  {fromFocused && <PlacesList />}
                </div>
                {vias.map((_, index) => {
                  return (
                    <div className="relative" key={index}>
                      <PlaceInput
                        type="via"
                        viaIndex={index}
                        placeholder={t("Transport.via")}
                        className="rounded-none"
                        onMobileClick={() => handleMobileViaClick(index)}
                      />
                      <div className="absolute end-0 top-1/2 z-20 me-2 flex -translate-y-1/2 gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={(e: MouseEvent<HTMLButtonElement>) => {
                            e.stopPropagation();
                            handleRemoveVia(index);
                          }}
                        >
                          <XIcon className="size-4" />
                        </Button>
                      </div>
                      {viaFocusedIndex === index && (
                        <PlacesList viaIndex={index} />
                      )}
                    </div>
                  );
                })}
                <div className="relative">
                  <PlaceInput
                    ref={toInputRef}
                    type="to"
                    placeholder={
                      disableTo && toLoading
                        ? toLoadingText
                        : (toPlaceholder ?? t("general.to"))
                    }
                    className="rounded-none"
                    onMobileClick={disableTo ? undefined : handleMobileToClick}
                    isLast
                    disabled={disableTo}
                    overrideValue={toLabel}
                  />
                  {!disableTo && (
                    <Button
                      id="add-via-button"
                      variant="ghost"
                      size="icon"
                      onClick={(e: MouseEvent<HTMLButtonElement>) => {
                        e.stopPropagation();
                        handleAddVia();
                      }}
                      className="absolute end-0 top-1/2 z-20 me-2 -translate-y-1/2"
                    >
                      <PlusIcon className="size-4" />
                    </Button>
                  )}
                  {toFocused && !disableTo && <PlacesList />}
                </div>
              </div>
            </div>
            {!hideSettings && (
              <div className="flex items-center gap-2 overflow-hidden border-b-0 border-e-0 border-s-0 border-t border-solid border-gray-200 pe-2 ps-3 lg:hidden">
                <button
                  type="button"
                  onClick={() => setMobileSettingsSheetOpen(true)}
                  className="flex min-w-0 flex-1 cursor-pointer items-center gap-2.5 border-0 bg-transparent p-0 text-start text-sm"
                  suppressHydrationWarning
                >
                  <span
                    className="line-clamp-1 min-w-0 text-black"
                    suppressHydrationWarning
                  >
                    {new Intl.DateTimeFormat(locale.replace("_", "-"), {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    }).format(calendarDate)}
                    ,{" "}
                    {new Intl.DateTimeFormat(locale.replace("_", "-"), {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: false,
                    }).format(time)}
                  </span>
                  <span className="shrink-0 text-gray-400">|</span>
                  <span
                    className="shrink-0 cursor-pointer text-gray-700"
                    onClick={(e) => {
                      e.stopPropagation();
                      const next = direction === "from" ? "to" : "from";
                      setDirection(next);
                      dataLayerSend({
                        data: {
                          event: "transport_select_direction",
                          transport_direction: next,
                        },
                        noActivities: true,
                        timeout: 0,
                      });
                    }}
                  >
                    {direction === "from"
                      ? t("Transport.departure")
                      : t("Transport.arrival")}
                  </span>
                </button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={resetDateTime}
                  className="shrink-0"
                >
                  <RefreshCwIcon className="size-4" />
                </Button>
              </div>
            )}
          </div>
          {hideSettings ? (
            children && (
              <div className="border-b-0 border-e-0 border-s-0 border-t border-solid border-gray-200 px-4 py-3 lg:px-6">
                {children}
              </div>
            )
          ) : (
            <>
              <Settings />
              <SettingsSheet
                open={mobileSettingsSheetOpen}
                onOpenChange={setMobileSettingsSheetOpen}
              />
            </>
          )}
        </Card>
      </div>

      <input
        ref={hiddenInputRef}
        type="text"
        aria-hidden="true"
        tabIndex={-1}
        className="pointer-events-none fixed -start-[9999px] hidden h-0 w-0 opacity-0"
      />

      <SheetFull.Root
        presented={mobileSheetOpen}
        onPresentedChange={handleSheetPresentedChange}
      >
        <SheetFull.Portal>
          <SheetFull.View>
            <SheetFull.Backdrop />
            <SheetFull.CloseButton />
            <SheetFull.Content className="grid grid-rows-[min-content_1fr]">
              <div className="grid grid-rows-[min-content_1fr] gap-5 px-5 pb-3 pt-2">
                <SheetFull.Handle />
                <VisuallyHidden.Root asChild>
                  <SheetFull.Title>{sheetPlaceholder}</SheetFull.Title>
                </VisuallyHidden.Root>

                <div className="flex items-center gap-2">
                  <Tabs
                    value={mobileSheetType}
                    onValueChange={(value: string) => {
                      const newType = value as "from" | "to" | "via";
                      setMobileSheetType(newType);
                      const hasValue =
                        newType === "from"
                          ? from
                          : newType === "to"
                            ? to
                            : vias[mobileSheetViaIndex];
                      if (!hasValue) {
                        sheetInputRef.current?.focus();
                        sheetInputRef.current?.click();
                      }
                    }}
                    className="flex-1"
                  >
                    <TabsList
                      className="w-full"
                      onMouseDown={(e: MouseEvent<HTMLElement>) => e.preventDefault()}
                    >
                      <TabsTrigger value="from" className="flex-1">
                        {t("general.from")}
                      </TabsTrigger>
                      {vias.length > 0 && (
                        <TabsTrigger value="via" className="flex-1">
                          {t("Transport.via")}
                        </TabsTrigger>
                      )}
                      {!disableTo && (
                        <TabsTrigger value="to" className="flex-1">
                          {t("general.to")}
                        </TabsTrigger>
                      )}
                    </TabsList>
                  </Tabs>
                </div>

                {(from || to) && (
                  <div className="mt-2">
                    <div className="relative h-[2px] w-full bg-gray-800 before:absolute before:left-0 before:top-1/2 before:h-2.5 before:w-2.5 before:-translate-y-1/2 before:rounded-full before:border before:border-solid before:border-gray-800 before:bg-gray-800 before:content-[''] after:absolute after:right-0 after:top-1/2 after:h-2.5 after:w-2.5 after:-translate-y-1/2 after:rounded-full after:border after:border-solid after:border-gray-800 after:bg-gray-800 after:content-['']">
                      {vias.length > 0 && (
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                          <div className="absolute -left-1.5 -top-[5px] h-2.5 w-2.5 rounded-full bg-white" />
                          <div className="absolute -left-1 -top-[5px] h-2.5 w-2.5 rounded-full border-2 border-solid border-gray-800" />
                        </div>
                      )}
                    </div>
                    <div className="relative mt-2 flex items-start justify-between text-sm text-black">
                      <span className="max-w-[40%] truncate">
                        {from ? fromValue : "–"}
                      </span>
                      {vias.length > 0 && (
                        <span className="absolute left-1/2 max-w-[30%] -translate-x-1/2 truncate text-center">
                          {vias[0] ? viaValues[0] : "–"}
                        </span>
                      )}
                      <span className="max-w-[40%] truncate text-end">
                        {to ? toValue : "–"}
                      </span>
                    </div>
                  </div>
                )}

                <div className="relative">
                  <SheetFull.AutoFocusTarget.Root timing="present" asChild>
                    <Input
                      ref={sheetInputRef}
                      autoFocus
                      placeholder={sheetPlaceholder}
                      type="text"
                      value={sheetSearchTerm}
                      onChange={handleSheetInputChange}
                      className="w-full pe-10"
                    />
                  </SheetFull.AutoFocusTarget.Root>
                  {sheetSearchTerm && (
                    <Button
                      onClick={handleSheetReset}
                      variant="ghost"
                      size="icon"
                      className="absolute end-2 top-1/2 -translate-y-1/2"
                    >
                      {showLoader ? (
                        <Loader size="xs" />
                      ) : (
                        <XIcon className="size-4" />
                      )}
                    </Button>
                  )}
                </div>
              </div>

              <SheetFull.ScrollRoot>
                <SheetFull.ScrollView>
                  <SheetFull.ScrollContent className="py-2">
                    <div className="flex flex-col">
                      {(isLoadingLocation || currentCoordinates) && (
                        <div className="flex items-center justify-center py-4">
                          <Loader size="sm" />
                        </div>
                      )}
                      {!isLoadingLocation &&
                        !currentCoordinates &&
                        isAvailable && (
                          <PlaceItem
                            name={
                              locationError
                                ? t("Transport.locationError")
                                : isDenied
                                  ? t("Transport.locationDisabled")
                                  : t("general.currentLocation")
                            }
                            isCurrentLocation
                            onClick={
                              isDenied || locationError
                                ? undefined
                                : handleCurrentLocationSelect
                            }
                            disabled={isDenied || locationError}
                          />
                        )}
                      {!isLoadingLocation &&
                        !currentCoordinates &&
                        sheetSearchTerm &&
                        sheetPlaces?.map((place) => (
                          <PlaceItem
                            key={place.id}
                            name={place.name}
                            onClick={() => handleSheetPlaceSelect(place)}
                          />
                        ))}
                    </div>
                  </SheetFull.ScrollContent>
                </SheetFull.ScrollView>
              </SheetFull.ScrollRoot>
            </SheetFull.Content>
          </SheetFull.View>
        </SheetFull.Portal>
      </SheetFull.Root>
    </>
  );
};
