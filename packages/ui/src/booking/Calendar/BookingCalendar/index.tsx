import { useEffect, useState } from "react";
import dayjs from "dayjs";
import type { CalendarProps } from "react-calendar";
import dynamic from "../../utils/dynamic";
import { useShallow } from "zustand/react/shallow";
import { Card } from "../../Card";
import { useAvailabilities } from "../../Offers/Availabilities/hooks";
import { usePersonalizedOptions } from "../../PersonalizedOptions/hooks";
import { Title } from "../../Title";
import { useBookingStore } from "../../store";
import { I } from "../../components/I";
import { useSearchStore } from "../../store/search";
import { Skeleton } from "@swiss-activities/ui";
import { Text } from "@swiss-activities/ui";
import type { TOfferBooking } from "../../types/offerBooking";
import { cn } from "../../utils/css/cn";
import { DateService } from "../../utils/dates/DateService";
import { toISO } from "../../utils/dates/toISO";
import { useI18n } from "../../utils/i18n/useI18n";
import { useDataLayer } from "../../utils/thirdParty/dataLayerSend";
import { useGetAvailabilities } from "../../query/activity/getAvailabilities";
import {
  type MonthlyAvailability,
  useGetMonthlyAvailabilities,
} from "../../query/activity/getMonthlyAvailabilities";

export const CLASS_ARROW =
  "flex h-12 w-12 items-center justify-center text-xs";

const DynamicCalendar = dynamic(() =>
  // @ts-ignore
  import("react-calendar").then((mod) => mod.Calendar, {
    ssr: false,
  })
);

export const BookingCalendar = () => {
  const { dataLayer } = useDataLayer();
  const { t, locale } = useI18n();
  const {
    activity,
    availability,
    isLoadingBooking,
    isReservationLoaded,
    reservation,
    setActive,
    setDates,
    setIsLoadingBooking,
    setIsReservationLoaded,
    setOffer,
    setTickets,
  } = useBookingStore(
    useShallow((state) => ({
      activity: state.activity,
      availability: state.availability,
      isLoadingBooking: state.isLoading,
      isReservationLoaded: state.isReservationLoaded,
      reservation: state.reservation,
      setActive: state.setActive,
      setDates: state.setDates,
      setIsLoadingBooking: state.setIsLoading,
      setIsReservationLoaded: state.setIsReservationLoaded,
      setOffer: state.setOffer,
      setTickets: state.setTickets,
    }))
  );
  const { setPersonalizedOptionsValues } = usePersonalizedOptions();
  const { setAvailability } = useAvailabilities();

  let [date, setDate] = useSearchStore((state) => [state.date, state.setDate]);

  if (reservation && isLoadingBooking && !date) {
    date = DateService.formatDate(dayjs(reservation.startsAt).toDate());
  } else if (!date) {
    date = DateService.formatDate(dayjs(new Date()).toDate());
  }

  const [currentMonth, setCurrentMonth] = useState(() =>
    dayjs(date || new Date())
  );

  const [searchAttempts, setSearchAttempts] = useState(0);
  const MAX_MONTHS_TO_CHECK = 12;

  const [initialLoad, setInitialLoad] = useState(true);

  if (!activity) return null;

  const { data: availabilities, isLoading } = useGetMonthlyAvailabilities(
    activity,
    currentMonth.year(),
    currentMonth.month() + 1
  );

  const { data: offers } = useGetAvailabilities(
    activity,
    1000,
    locale,
    DateService.formatDate(dayjs().toDate()),
    date,
    !!reservation?.startsAt
  );

  useEffect(
    function initBookingFromReservation() {
      if (!reservation || isReservationLoaded) return;

      (async () => {
        setDate(DateService.formatDate(dayjs(reservation.startsAt).toDate()));

        const offer = offers?.find(
          (o) =>
            o.offerId ===
            (reservation?.ticketReservations[0]?.offer?.offerId ||
              reservation?.offerId)
        ) as TOfferBooking;

        if (!offer) return;

        setOffer(offer);

        const availability =
          offer.availabilities.find(
            (item) =>
              toISO(item.startsAt, {
                time: true,
              }) ===
              toISO(reservation.startsAt, {
                time: true,
              })
          ) || offer.availabilities[0];
        const fields = await setAvailability(availability);

        const ticketHashs: Record<string, number> = {};
        reservation.ticketReservations.map((item) => {
          let amount = 0;
          item.guests.forEach((item) => (amount = amount + item.occupancy));
          const categoryId =
            offer.ticketCategories.find(
              (e) =>
                e.ticketCategoryId ===
                Number(item.ticketCategory.ticketCategoryId)
            )?.ticketCategoryId || "";
          ticketHashs[categoryId] = (ticketHashs[categoryId] || 0) + amount;
        });
        setTickets(ticketHashs);

        const personalizedOptionsValues: any = {};
        reservation.ticketReservations.forEach((ticket) => {
          const categoryId = ticket.ticketCategory.ticketCategoryId;
          const existing = personalizedOptionsValues[categoryId] || {};
          const offset = Object.keys(existing).length;

          ticket.guests.forEach((guest, index) => {
            if (!Object.values(guest.personalizationData).length) return;
            existing[offset + index] = guest.personalizationData;
          });

          if (!Object.keys(existing).length) return;
          personalizedOptionsValues[categoryId] = existing;
        });
        if (reservation.personalizationData) {
          Object.entries(reservation.personalizationData).map(([k, v]) => {
            personalizedOptionsValues.reservation = {
              ...personalizedOptionsValues.reservation,
              [k]: v,
            };
          });
        }

        if (Object.keys(personalizedOptionsValues).length > 0) {
          setPersonalizedOptionsValues(
            personalizedOptionsValues,
            fields,
            ticketHashs
          );
        }

        setIsLoadingBooking(false);
        setIsReservationLoaded(true);
      })();
    },
    [reservation, isReservationLoaded, offers]
  );

  useEffect(() => {
    if (availability?.availabilityId || reservation) return;

    if (
      !isLoading &&
      availabilities &&
      searchAttempts < MAX_MONTHS_TO_CHECK &&
      initialLoad
    ) {
      const hasNoValidPrices = Object.entries(availabilities).every(
        (item: any) => item[1].price === null
      );

      if (hasNoValidPrices) {
        setSearchAttempts((prev) => prev + 1);
        const nextMonth = currentMonth.add(1, "month");
        setCurrentMonth(nextMonth);
      } else {
        const availableDates = Object.entries(availabilities);
        const firstAvailableDate = availableDates.find(
          ([_, data]: [string, any]) => data.price !== null
        );

        if (firstAvailableDate && !date) {
          setDate(firstAvailableDate[0]);
        }
        setInitialLoad(false);
      }
    }
  }, [
    availabilities,
    isLoading,
    searchAttempts,
    currentMonth,
    initialLoad,
    availability,
    reservation,
  ]);

  useEffect(() => {
    setSearchAttempts(0);
    setInitialLoad(true);
  }, [activity.mappedId]);

  const firstDate = dayjs(Object.keys(availabilities || {})[0]).toDate();
  const cantBack =
    dayjs().month() >= dayjs(firstDate).month() &&
    dayjs().year() >= dayjs(firstDate).year();

  const prices = [
    ...new Set(
      Object.values(availabilities || {})
        .map((e) => e && e?.price)
        .filter((e) => e)
    ),
  ] as unknown as string[];

  const pricesNumbers = prices
    ?.map((e) => Number(e?.replace("CHF", "").trim()))
    ?.sort((a, b) => a - b);

  const tileDisabled: CalendarProps["tileDisabled"] = ({ date, view }) => {
    if (view === "month") {
      return (
        date < dayjs().toDate() &&
        dayjs(dayjs(date).toDate().toDateString()).toDate() <
          dayjs(dayjs().toDate().toDateString()).toDate()
      );
    }
    return false;
  };

  const handlePrevMonth = () => {
    setInitialLoad(false);
    setCurrentMonth(currentMonth.subtract(1, "month"));
  };

  const handleNextMonth = () => {
    setInitialLoad(false);
    setCurrentMonth(currentMonth.add(1, "month"));
  };

  useEffect(() => {
    setDates(availabilities as MonthlyAvailability);
  }, [availabilities]);

  return (
    <div>
      <Title>{t("activity.selectDate")}</Title>
      <Card className="p-0">
        <DynamicCalendar
          locale={locale.replace("_", "-")}
          className={cn(
            `booking booking-v2 !mt-0 !rounded-lg [&_.react-calendar__month-view__days]:!p-[2px]`,
            {
              "cant-back": cantBack,
            }
          )}
          view="month"
          value={dayjs(date).toDate()}
          activeStartDate={currentMonth.toDate()}
          prev2Label={null}
          prevLabel={
            <div
              className={cn(CLASS_ARROW, {
                "text-black/10": cantBack,
              })}
              role="button"
              onClick={handlePrevMonth}
            >
              <I icon="arrow-left" />
            </div>
          }
          next2Label={null}
          nextLabel={
            <div
              className={CLASS_ARROW}
              role="button"
              onClick={handleNextMonth}
            >
              <I icon="arrow-right" />
            </div>
          }
          minDetail="month"
          calendarType="ISO 8601"
          onChange={(
            newDate: Parameters<NonNullable<CalendarProps["onChange"]>>[0]
          ) => {
            setDate(DateService.formatDate(dayjs(newDate as Date).toDate()));
            setActive("offers");
            dataLayer({
              obj: {
                event: "select_date",
              },
            });
          }}
          formatShortWeekday={(_, date) => DateService.formatWeekday(date, "d")}
          tileDisabled={tileDisabled}
          tileClassName={({ view, date: dateInner }) => {
            const d = DateService.formatDate(dateInner);

            const isPast =
              dayjs().isAfter(dateInner) &&
              DateService.formatDate(dayjs().toDate()) !== d;
            const isNotInCalendar = !availabilities?.[d];
            const notAvailable = availabilities?.[d]?.capacity === "none";

            if (isPast || isNotInCalendar || notAvailable)
              return "!bg-transparent !pointer-events-none";

            let base =
              "relative flex flex-col !rounded-lg font-semibold transition ease-in duration-100 !text-sm !leading-normal";

            if (!availabilities) return base;

            const price = availabilities[d]?.price;
            const isCheapest =
              prices.length >= 2 &&
              pricesNumbers?.[0] === Number(price?.replace("CHF", "").trim());

            let cls: string = "";
            if (view === "month") {
              if (d === date) {
                cls = "!text-white !bg-primary hover:!bg-dark";
              } else {
                cls =
                  prices.length >= 2 && !isCheapest
                    ? "!bg-[#B3D3EB] hover:!bg-[#a0c8e6]"
                    : "!bg-emerald-200 hover:!bg-emerald-300";
              }
            }

            return `${base} ${cls}`;
          }}
          tileContent={({ date: tileDate }) => {
            const formattedDate = DateService.formatDate(
              dayjs(tileDate).toDate()
            );
            const price =
              availabilities &&
              availabilities?.[formattedDate]?.price &&
              `CHF ${Number(
                (availabilities[formattedDate]?.price || "")
                  .replace("CHF", "")
                  .replace(",", "")
              ).toFixed(0)}`;

            return (
              <>
                <Skeleton full loading={isLoading} />
                {price ? (
                  <p className="flex items-center whitespace-nowrap text-[8px] font-bold leading-none opacity-50">
                    {price}
                  </p>
                ) : null}
              </>
            );
          }}
        />
        {prices.length >= 2 && (
          <div className="mx-auto flex items-center justify-center py-3">
            <div className="me-2 h-3.5 w-5 rounded-sm bg-emerald-200"></div>
            <Text size="xs">{t("activity.widget.cheapest")}</Text>
          </div>
        )}
      </Card>
    </div>
  );
};
