import dayjs from "dayjs";
import { CalendarDays, Clock, User } from "lucide-react";
import { Cancellable } from "../Cancellable";
import { Details } from "../Details";
import { CancelDrawer } from "./Cancel";
import { EditButton } from "./Edit";
import { Card } from "../../Card";
import { CartStore } from "../../Cart/store";
import { TripContent } from "../../Transport/Results/Trip";
import { TripDetails } from "../../Transport/Results/TripDetails";
import { Button } from "@swiss-activities/ui";
import { Drawer } from "../../components/Drawer";
import { Image as StaticImage } from "@swiss-activities/ui";
import { Skeleton } from "@swiss-activities/ui";
import { Usps } from "../../components/Usps";
import { Content } from "../../stubs";
import { toISO } from "../../utils/dates/toISO";
import { useI18n } from "../../utils/i18n/useI18n";
import { useGetActivity } from "../../query/activity/getActivity";
import { useGetTripDetails } from "../../query/transport/trip";

type ConfirmDrawerProps = {
  bookingId?: string;
  bookingObject: any;
  canRebook?: boolean;
  item: CartStore["cart"]["customData"][number];
};

export const ConfirmDrawer = ({
  item,
  bookingId,
  bookingObject,
  canRebook,
}: ConfirmDrawerProps) => {
  const { t } = useI18n();
  const isCancellableFuture =
    !!item.reservation?.cancellableUntil &&
    dayjs(item.reservation.cancellableUntil).toDate() > dayjs().toDate();

  return (
    <>
      <Drawer
        ident={`confirm-activity-${bookingId}-${item?.activity?.id}`}
        title={t("pages.confirmation.drawerTitle")}
        desktopDrawer="right"
        flush
        classNameInner="bg-bg"
        bottomLarge={isCancellableFuture}
        bottom={
          <ConfirmDrawerBottom
            bookingId={bookingId}
            item={item}
            canRebook={canRebook}
          />
        }
      >
        <ConfirmDrawerContent item={item} />
      </Drawer>
      <CancelDrawer
        item={item}
        bookingId={bookingId}
        bookingObject={bookingObject}
      />
    </>
  );
};

const ConfirmDrawerBottom = ({
  bookingId,
  item,
  canRebook,
}: {
  bookingId?: string;
  item: ConfirmDrawerProps["item"];
  canRebook?: boolean;
}) => {
  const { t } = useI18n();
  const canModify =
    item.reservation.isCancellable && !item.reservation.cancelledAt;

  return (
    <div className="flex w-full flex-col gap-3">
      {item.reservation?.cancellableUntil &&
        dayjs(item.reservation.cancellableUntil).toDate() >
          dayjs().toDate() && (
          <Cancellable
            date={item.reservation.cancellableUntil as unknown as Date}
          />
        )}
      <div className="grid w-full grid-cols-2 gap-3">
        {canModify && (
          <EditButton item={item} bookingId={bookingId} canRebook={canRebook} />
        )}
        <Button
          type="primary"
          text={t("pages.confirmation.showTickets")}
          href={`https://mobiletickets.swissactivities.com/b/${bookingId}`}
          target="_blank"
          className={canModify ? "" : "col-span-2"}
        />
      </div>
    </div>
  );
};

const ConfirmDrawerContent = ({
  item,
}: {
  item: ConfirmDrawerProps["item"];
}) => {
  const { t, locale } = useI18n();
  const reservation = item.reservation;
  const activity = item.activity;
  const tripId = (reservation as any).tripId;
  const { data: tripData } = useGetTripDetails(
    { tripId: tripId || "", locale },
    !!tripId
  );
  const { data: fullActivity } = useGetActivity(
    tripId ? undefined : activity?.id,
    locale
  );

  if (tripId) {
    return (
      <div className="flex flex-col px-4 pt-4 lg:px-6 lg:pt-6">
        <div className="flex flex-col space-y-6">
          {tripData && (
            <Card className="flex flex-col">
              <TripContent
                trip={tripData}
                heading
                hideEdit
                ticketStyle
                reservation={reservation}
              />
            </Card>
          )}
          <TripDetails tripId={tripId} />
        </div>
        <div className="-mx-2 block w-full pb-8 lg:-mx-6" />
      </div>
    );
  }

  const date = toISO(reservation.startsAt, { dateString: true });
  const time = toISO(reservation.startsAt, { time: true });
  const ticketCount = reservation.ticketReservations?.length || 0;

  return (
    <div className="flex flex-col px-4 pb-8 pt-4 lg:px-6 lg:pt-6">
      <Card elevation="lg">
        <div className="grid grid-cols-[64px_1fr] gap-4">
          <div className="h-[64px] w-[64px] overflow-hidden rounded-lg">
            <StaticImage
              src={activity?.teaser_image?.url}
              alt={activity?.teaser_image?.alternativeText}
              width={128}
              height={128}
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-base font-semibold text-black">
              {activity?.info?.title}
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <CalendarDays className="size-4" />
                {date}
              </span>
              {time && time !== "00:00" && (
                <span className="flex items-center gap-1">
                  <Clock className="size-4" />
                  {time}
                </span>
              )}
              <span className="flex items-center gap-1">
                <User className="size-4" />
                {ticketCount}
              </span>
            </div>
          </div>
        </div>
        <div className="-mx-4 my-4 h-px bg-gray-200" />
        <Details
          reservation={reservation}
          activity={activity}
          dontDisplay={["price"]}
        />
      </Card>
      {fullActivity ? (
        <div className="-mx-4 mt-4 lg:-mx-6">
          {fullActivity.summary && (
            <Usps
              className="mt-4 px-4 lg:px-6"
              activity={fullActivity}
              type="full"
              not={["amount", "openingHours"]}
            />
          )}
          <Content activity={fullActivity} compact />
        </div>
      ) : (
        <div className="mt-4">
          <Skeleton loading amount={3} />
        </div>
      )}
    </div>
  );
};
