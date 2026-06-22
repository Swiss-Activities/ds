import { useEffect, useState } from "react";
import dayjs from "dayjs";
import type { CalendarProps } from "react-calendar";
import dynamic from "../../utils/dynamic";
import { useShallow } from "zustand/react/shallow";
import { Availabilities } from "../../Availabilities";
import {
  useAvailabilitiesByQuantities,
  useTicketAudiencesForQuery,
} from "./hooks";
import { Card } from "../../Card";
import { useAvailabilities } from "../../Offers/Availabilities/hooks";
import { Title } from "../../Title";
import { useBookingStore } from "../../store";
import { I } from "../../components/I";
import { Skeleton } from "@swiss-activities/ui";
import { TActivity } from "../../types/activity";
import { TOfferBooking } from "../../types/offerBooking";
import { cn } from "../../utils/css/cn";
import { DateService } from "../../utils/dates/DateService";
import { toISO } from "../../utils/dates/toISO";
import { useI18n } from "../../utils/i18n/useI18n";
import { dataLayerSend } from "../../utils/thirdParty/dataLayerSend";
import { MonthlyAvailability } from "../../query/activity/getMonthlyAvailabilities";
import { useGetMonthlyDates } from "../../query/activity/getMonthlyDates";

export const CLASS_ARROW =
  "w-full h-full flex items-center justify-center text-xs flex h-12 w-12 items-center justify-center";

const DynamicCalendar = dynamic(() =>
  // @ts-ignore
  import("react-calendar").then((mod) => mod.Calendar, {
    ssr: false,
  })
);

export const BookingCalendarV2 = () => {
  const { t, locale } = useI18n();
  const {
    activity,
    availability,
    date,
    offer,
    setDate,
    setDates,
    setTickets,
    ticketSelectionsMetadata,
  } = useBookingStore(
    useShallow((state) => ({
      activity: state.activity,
      availability: state.availability,
      date: state.date,
      offer: state.offer,
      setDate: state.setDate,
      setDates: state.setDates,
      setTickets: state.setTickets,
      ticketSelectionsMetadata: state.ticketSelectionsMetadata,
    }))
  );
  const { setAvailability } = useAvailabilities();
  const { ticketAudiencesForQuery } = useTicketAudiencesForQuery();
  const { offers } = useAvailabilitiesByQuantities();

  const [currentMonth, setCurrentMonth] = useState<dayjs.Dayjs | null>(null);
  const [queryMonth, setQueryMonth] = useState<{
    year: number | null;
    month: number | null;
  }>({ year: null, month: null });

  const [searchAttempts, setSearchAttempts] = useState(0);
  const MAX_MONTHS_TO_CHECK = 6;

  const [initialLoad, setInitialLoad] = useState(true);

  if (!activity) return null;

  const { data: availabilities, isLoading } = useGetMonthlyDates(
    activity as TActivity,
    locale,
    queryMonth.year,
    queryMonth.month,
    offer?.offerId ? [offer.offerId] : [],
    ticketAudiencesForQuery
  );

  useEffect(() => {
    if (
      !offers ||
      !offer ||
      !ticketSelectionsMetadata ||
      Object.keys(ticketSelectionsMetadata).length === 0
    )
      return;

    const selectedOffer = offers.find((off) => off.offerId === offer.offerId);
    if (!selectedOffer) return;

    const allOfferTickets = selectedOffer.ticketCategories;
    const ticketCounts: Record<number, number> = {};

    Object.entries(ticketSelectionsMetadata).forEach(([_, metadata]) => {
      const matchingTicket = availability
        ? allOfferTickets.find(
            (ticket) =>
              availability.ticketCategoryIds.includes(
                ticket.ticketCategoryId
              ) &&
              ticket.audience === metadata.audience &&
              ticket.discountType === metadata.discountType &&
              ticket.categoryTypeKey === metadata.categoryTypeKey
          )
        : allOfferTickets.find(
            (ticket) =>
              ticket.audience === metadata.audience &&
              ticket.discountType === metadata.discountType &&
              ticket.categoryTypeKey === metadata.categoryTypeKey
          );

      if (matchingTicket) {
        ticketCounts[matchingTicket.ticketCategoryId] =
          (ticketCounts[matchingTicket.ticketCategoryId] || 0) + 1;
      }
    });

    setTickets(ticketCounts);
  }, [offers, offer, availability, ticketSelectionsMetadata, setTickets]);

  useEffect(() => {
    if (!isLoading && availabilities && currentMonth === null) {
      const firstDate = Object.keys(availabilities)[0];
      if (firstDate) {
        setCurrentMonth(dayjs(firstDate));
      }
    }
  }, [availabilities, isLoading, currentMonth]);

  useEffect(() => {
    if (availability?.availabilityId) return;

    if (
      !isLoading &&
      availabilities &&
      currentMonth &&
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
        setQueryMonth({
          year: nextMonth.year(),
          month: nextMonth.month() + 1,
        });
      } else {
        const availableDates = Object.entries(availabilities);
        const firstAvailableDate = availableDates.find(
          ([_, data]: [string, any]) => data.price !== null
        );

        if (firstAvailableDate && !date) {
          setDate(firstAvailableDate[0]);
          dataLayerSend({ obj: { event: "select_date" } });
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
  ]);

  useEffect(() => {
    setSearchAttempts(0);
    setInitialLoad(true);
    setCurrentMonth(null);
    setQueryMonth({ year: null, month: null });
  }, [activity.mappedId]);

  useEffect(() => {
    if (!offer || !availability) return;

    const updatedOffer = offers?.find((o) =>
      offer.offerId
        ? o.offerId === offer.offerId
        : o?.offerId === offer?.offerId
    ) as TOfferBooking;
    if (!updatedOffer) return;
    if (updatedOffer.availabilities.length === 1) {
      setAvailability(updatedOffer.availabilities[0]);
    } else {
      if (
        !offer?.availabilities.find(
          (a) => a.availabilityId === availability?.availabilityId
        )
      ) {
        const startingTimes = updatedOffer.availabilities.map((a) =>
          toISO(a.startsAt, {
            time: true,
          })
        );
        const availabilityIndex = startingTimes.indexOf(
          toISO(availability?.startsAt as string, {
            time: true,
          })
        );
        if (availabilityIndex !== -1) {
          setAvailability(updatedOffer.availabilities[availabilityIndex]);
        } else {
          setAvailability(null as any);
        }
      }
    }
  }, [date, offers, offer, availability]);

  const firstDate = dayjs(Object.keys(availabilities || {})[0]).toDate();
  const cantBack =
    currentMonth &&
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

  useEffect(() => {
    setDates(availabilities as MonthlyAvailability);
  }, [availabilities]);

  return (
    <>
      <div>
        <Title>{t("activity.selectDate")}</Title>
        <Card className="rounded-lg border-0 bg-transparent p-0 !shadow-none outline-0">
          <DynamicCalendar
            locale={locale.replace("_", "-")}
            className={cn(
              "booking booking-v2 booking-v3 !mt-0 !rounded-lg !bg-transparent [&_.react-calendar__month-view__days]:!p-[2px]",
              {
                "cant-back": cantBack,
              }
            )}
            view="month"
            value={dayjs(date).toDate()}
            activeStartDate={currentMonth ? currentMonth.toDate() : new Date()}
            onActiveStartDateChange={({ activeStartDate, view }) => {
              if (view === "month" && activeStartDate && currentMonth) {
                const newMonth = dayjs(activeStartDate);
                if (!newMonth.isSame(currentMonth, "month")) {
                  console.log("Calendar navigation:", {
                    from: currentMonth.format("YYYY-MM"),
                    to: newMonth.format("YYYY-MM"),
                  });
                  setInitialLoad(false);
                  setCurrentMonth(newMonth);
                  setQueryMonth({
                    year: newMonth.year(),
                    month: newMonth.month() + 1,
                  });
                }
              }
            }}
            prev2Label={null}
            prevLabel={
              <div
                className={cn(CLASS_ARROW, {
                  "text-black/10": cantBack,
                })}
                role="button"
              >
                <I icon="arrow-left" />
              </div>
            }
            next2Label={null}
            nextLabel={
              <div className={CLASS_ARROW} role="button">
                <I icon="arrow-right" />
              </div>
            }
            minDetail="month"
            calendarType="ISO 8601"
            onChange={(
              newDate: Parameters<NonNullable<CalendarProps["onChange"]>>[0]
            ) => {
              setDate(DateService.formatDate(dayjs(newDate as Date).toDate()));
              dataLayerSend({
                obj: {
                  event: "select_date",
                },
              });
            }}
            formatShortWeekday={(_, date) =>
              DateService.formatWeekday(date, "d")
            }
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
                "relative !gap-1.5 !h-12 !text-base flex flex-col !bg-white !rounded-lg font-semibold transition ease-in duration-100 !leading-normal";

              if (!availabilities) return base;

              let cls: string = "";
              if (view === "month") {
                if (d === date) {
                  cls = "shadow-[inset_0_0_0_1px_theme(colors.primary)]";
                } else {
                  cls =
                    "!border-bg !outline-1 !outline !outline-solid !outline-gray-200 !outline-offset-[-2px]";
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
                `${Number(
                  (availabilities[formattedDate]?.price || "")
                    .replace("CHF", "")
                    .replace(",", "")
                ).toFixed(0)}`;

              const isCheapest =
                prices.length >= 2 &&
                pricesNumbers?.[0] === Number(price?.replace("CHF", "").trim());

              return (
                <>
                  <Skeleton full loading={isLoading} />
                  {price && activity.summary.dynamicPrice ? (
                    <p
                      className={cn(
                        "flex items-center whitespace-nowrap text-[10px] leading-none opacity-50",
                        {
                          "font-semibold text-[#008A00]": isCheapest,
                        }
                      )}
                    >
                      {price}
                    </p>
                  ) : null}
                </>
              );
            }}
          />
        </Card>
      </div>
      {offer?.availabilities && <Availabilities {...{ offer }} />}
    </>
  );
};
