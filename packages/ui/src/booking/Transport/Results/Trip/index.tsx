import {
  Pencil,
  CalendarDays,
  Timer,
  ArrowLeftRight,
  ArrowRight,
  Footprints,
  Split,
  Ticket,
} from "lucide-react";
import { useDate } from "../../../utils/date/useDate";
import { useShallow } from "zustand/react/shallow";
import { Card } from "../../../Card";
import { InfoHeaderTitle } from "../../../InfoHeader/Title";
import { PriceDisplay } from "../../../PriceDisplay";
import { Capacity } from "../Capacity";
import { Duration } from "../Duration";
import { Platform } from "../Platform";
import { Time } from "../Time";
import { Type } from "../Type";
import { Via } from "../Via";
import { useTransportStoreLocal } from "../../store";
import { sendTransportEvent } from "../../tracking";
import { useDrawerStore } from "../../../store/drawer";
import { Toast } from "../../../components/Toast";
import type { TransportTrip } from "../../../types/transport";
import { Button } from "@swiss-activities/ui";
import { cn } from "../../../utils/css/cn";
import { useI18n } from "../../../utils/i18n/useI18n";

type TripProps = {
  trip: TransportTrip;
  bookingDate?: string;
  walkingDurationSeconds?: number;
};

export const Trip = ({
  trip,
  bookingDate,
  walkingDurationSeconds,
}: TripProps) => {
  const { setOpen, isOpen } = useDrawerStore(
    useShallow((state) => ({
      setOpen: state.setOpen,
      isOpen: state.isOpen,
    }))
  );
  const { setSelectedTrip, fromValue, toValue } = useTransportStoreLocal(
    useShallow((state) => ({
      setSelectedTrip: state.setSelectedTrip,
      fromValue: state.fromValue,
      toValue: state.toValue,
    }))
  );

  const handleClick = () => {
    const tripId = trip.tripId || trip.id || "";
    setSelectedTrip(tripId);
    if (!isOpen.includes("transport-modal")) {
      setOpen("transport-modal");
    }
    sendTransportEvent("transport_book_now");
  };

  const isPast = (() => {
    if (!bookingDate || !trip.end?.time) return false;
    const parsed = new Date(bookingDate);
    if (
      parsed.getHours() === 0 &&
      parsed.getMinutes() === 0 &&
      parsed.getSeconds() === 0
    )
      return false;
    const eventTime = parsed.getTime();
    const arrivalTime = new Date(trip.end.time).getTime();
    const walkingMs = (walkingDurationSeconds || 0) * 1000;
    return arrivalTime + walkingMs > eventTime;
  })();

  return (
    <Card
      role="button"
      tabIndex={0}
      onClick={handleClick}
      className={cn(
        "trip cursor-pointer transition duration-100 ease-in sm:hover:shadow",
        isPast && "opacity-50"
      )}
      paddingNormalised
    >
      <TripContent
        trip={trip}
        fromValue={fromValue}
        toValue={toValue}
        bookingDate={bookingDate}
        walkingDurationSeconds={walkingDurationSeconds}
      />
    </Card>
  );
};

type TripContentProps = {
  trip: TransportTrip;
  heading?: boolean;
  fromValue?: string;
  toValue?: string;
  hideEdit?: boolean;
  onEdit?: () => void;
  bookingDate?: string;
  walkingDurationSeconds?: number;
  ticketStyle?: boolean;
  reservation?: any;
};

export const TripContent = ({
  trip,
  heading,
  fromValue,
  toValue,
  hideEdit,
  onEdit,
  bookingDate,
  walkingDurationSeconds,
  ticketStyle,
  reservation,
}: TripContentProps) => {
  const { t } = useI18n();
  const { formatDateShort } = useDate();
  const close = useDrawerStore((state) => state.close);
  const firstTransportType = trip.transportationType?.[0];

  const adultTickets =
    trip.ticketCategories?.filter(
      (ticket) =>
        ticket.audience === "adults" &&
        ticket.discountType === "sbb_half_fare" &&
        ticket.categoryType === "2nd_class" &&
        ticket.price &&
        parseFloat(ticket.price.amount) > 0
    ) || [];

  const lowestAdultPrice =
    adultTickets.length > 0
      ? parseFloat(
          adultTickets.reduce((lowest, current) => {
            const currentPrice = parseFloat(current.price?.amount || "0");
            const lowestPrice = parseFloat(lowest.price?.amount || "0");
            return currentPrice < lowestPrice ? current : lowest;
          }).price?.amount || "0"
        )
      : null;

  const transferPositions =
    trip.stopTransfers?.map((stop) =>
      Math.max(10, Math.min(90, stop.position))
    ) || [];

  const displayFrom = fromValue || trip.start.name;
  const displayTo = toValue || trip.end.name;

  const tripDateFormatted = formatDateShort(trip.start.time);

  const transfersText =
    trip.transfers === 0
      ? t("Transport.direct")
      : `${trip.transfers}x ${t("Transport.transfer")}`;

  const walkingMinutes = Math.max(
    1,
    Math.round((walkingDurationSeconds || 0) / 60)
  );

  const timeBeforeEvent = (() => {
    if (!bookingDate || !trip.end?.time) return null;
    const eventTime = new Date(bookingDate).getTime();
    const arrivalTime = new Date(trip.end.time).getTime();
    const walkingMs = (walkingDurationSeconds || 0) * 1000;
    const diff = Math.floor((eventTime - arrivalTime - walkingMs) / 60000);
    return { minutes: diff, isPast: diff < 0 };
  })();

  if (heading) {
    const headingContent = (
      <>
        <InfoHeaderTitle>
          {trip.start.name}{" "}
          {trip.direction === "RETURN" ? (
            <ArrowLeftRight className="relative top-px inline size-4" />
          ) : (
            <ArrowRight className="relative top-px inline size-4" />
          )}{" "}
          {trip.end.name}
        </InfoHeaderTitle>

        {trip.stopTransfers && trip.stopTransfers.length > 0 && (
          <p className="mb-2 text-xs text-gray-600">
            via {trip.stopTransfers.map((stop) => stop.name).join(", ")}
          </p>
        )}
      </>
    );

    return (
      <div className="relative">
        {!hideEdit && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => (onEdit ? onEdit() : close("transport-modal"))}
            className="absolute -end-2 -top-2 h-8 w-8"
          >
            <Pencil className="h-4 w-4" />
          </Button>
        )}

        {ticketStyle ? (
          <div className="grid grid-cols-[64px_1fr] gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-solid border-gray-200 bg-gray-50">
              <Ticket className="size-8 text-gray-500" />
            </div>
            <div className="flex flex-col justify-center [&>p]:mb-0">
              {headingContent}
              {trip.via && <Via trip={trip} />}
              <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <CalendarDays className="size-4" />
                  {tripDateFormatted}
                </span>
                <span className="flex items-center gap-1">
                  <Timer className="size-4" />
                  <Duration duration={trip.duration} />
                </span>
                <span className="flex items-center gap-1">
                  <Split className="size-4" />
                  {transfersText}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <>
            {headingContent}

            <div className="mt-4 grid grid-cols-[auto_1fr_auto] items-center gap-3">
              <Time time={trip.start.time} className="text-sm" />
              <div className="relative h-[2px] w-full bg-gray-800 before:absolute before:left-0 before:top-1/2 before:h-2.5 before:w-2.5 before:-translate-y-1/2 before:rounded-full before:border before:border-solid before:border-gray-800 before:bg-gray-800 before:content-[''] after:absolute after:right-0 after:top-1/2 after:h-2.5 after:w-2.5 after:-translate-y-1/2 after:rounded-full after:border after:border-solid after:border-gray-800 after:bg-gray-800 after:content-['']">
                {transferPositions.map((position, index) => (
                  <div
                    key={index}
                    className="absolute top-1/2 -translate-y-1/2"
                    style={{ left: `${position}%` }}
                  >
                    <div className="absolute -left-1 -top-1 h-2 w-2 rounded-full bg-white" />
                    <div className="absolute -left-[3px] -top-1 h-2 w-2 rounded-full border-2 border-solid border-gray-800" />
                  </div>
                ))}
              </div>
              <Time time={trip.end.time} className="text-sm" />
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <CalendarDays className="size-4" />
                {tripDateFormatted}
              </span>
              <span className="flex items-center gap-1">
                <Timer className="size-4" />
                <Duration duration={trip.duration} />
              </span>
              <span className="flex items-center gap-1">
                <Split className="size-4" />
                {transfersText}
              </span>
            </div>
          </>
        )}

        {ticketStyle &&
          reservation &&
          (() => {
            const isReturn =
              !!reservation.returnTripId || trip.direction === "RETURN";
            const categoryType =
              reservation.ticketReservations?.[0]?.ticketCategory?.categoryType;
            const classLabel =
              categoryType === "1st_class" ? "1. Klasse" : "2. Klasse";
            const directionLabel = isReturn
              ? t("Transport.roundTrip")
              : t("Transport.oneWay");
            return (
              <>
                <div className="-mx-4 mt-4 border-b-0 border-l-0 border-r-0 border-t border-solid border-gray-200 px-4 pt-4">
                  <p className="text-base font-normal text-black">
                    {directionLabel}
                    <span className="mx-2 text-gray-300">|</span>
                    {classLabel}
                  </p>
                </div>
                {reservation.ticketReservations?.map((ticket: any) => (
                  <div key={ticket.ticketReservationId} className="mt-4">
                    <p className="text-sm text-black">{ticket.description}</p>
                    {ticket.sbbOfferData?.title && (
                      <p className="text-xs text-gray-600">
                        {ticket.sbbOfferData.title}
                      </p>
                    )}
                  </div>
                ))}
              </>
            );
          })()}
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3">
        <Time time={trip.start.time} className="lg:text-base" />
        <div className="relative h-[2px] w-full bg-gray-800 before:absolute before:left-0 before:top-1/2 before:h-2.5 before:w-2.5 before:-translate-y-1/2 before:rounded-full before:border before:border-solid before:border-gray-800 before:bg-gray-800 before:content-[''] after:absolute after:right-0 after:top-1/2 after:h-2.5 after:w-2.5 after:-translate-y-1/2 after:rounded-full after:border after:border-solid after:border-gray-800 after:bg-gray-800 after:content-['']">
          {transferPositions.map((position, index) => (
            <div
              key={index}
              className="absolute top-1/2 -translate-y-1/2"
              style={{ left: `${position}%` }}
            >
              <div className="absolute -left-1 -top-1 h-2 w-2 rounded-full bg-white" />
              <div className="absolute -left-[3px] -top-1 h-2 w-2 rounded-full border-2 border-solid border-gray-800" />
            </div>
          ))}
        </div>
        <Time time={trip.end.time} className="lg:text-base" />
      </div>

      <div className="mt-2 flex items-center justify-between text-xs font-semibold text-black lg:text-sm">
        <span className="w-[45%] truncate">{displayFrom}</span>
        <span className="w-[45%] truncate text-end">{displayTo}</span>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Type transportationType={firstTransportType} />
          <Platform platform={trip.start.platform} inline />
          {trip.transfers === 0 && <Capacity capacity={trip.capacity} />}
        </div>
        <Duration duration={trip.duration} />
      </div>

      {timeBeforeEvent && !timeBeforeEvent.isPast && (
        <Toast
          className="mt-4 [&>div]:max-w-none"
          icon={<Footprints className="size-4" />}
          text={t("Transport.timeBeforeEvent", {
            minutes: timeBeforeEvent.minutes,
            walkingMinutes,
          })}
        />
      )}

      {lowestAdultPrice && (
        <div className="-mx-4 mt-4 flex items-center justify-end border-b-0 border-e-0 border-s-0 border-t border-solid border-gray-200 px-4 pt-4">
          <PriceDisplay price={lowestAdultPrice} from />
        </div>
      )}
    </div>
  );
};
