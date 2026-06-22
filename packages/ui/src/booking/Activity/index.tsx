import { Badge } from "../components/Badge";
import { Cancellable } from "./Cancellable";
import { Countdown } from "./Countdown";
import { Details } from "./Details";
import { EditButton } from "./Drawer/Edit";
import { UserNav } from "./UserNav";
import { BookingButton } from "../BottomBar";
import { Summary } from "../Cart/Summary";
import type { CartStore } from "../Cart/store";
import { TripContent } from "../Transport/Results/Trip";
import { useTrip } from "../Transport/queries";
import { Button } from "@swiss-activities/ui";
import { Card } from "@swiss-activities/ui";
import { useDrawerStore } from "../store/drawer";
import { I } from "../components/I";
import { Image as StaticImage } from "@swiss-activities/ui";
import { Loader } from "@swiss-activities/ui";
import { Rating } from "../components/Rating";
import { Skeleton } from "@swiss-activities/ui";
import { Text } from "@swiss-activities/ui";
import { Activity as Act } from "../stubs";
import type { TReservation } from "../types/reservation";
import { cn } from "../utils/css/cn";
import { useI18n } from "../utils/i18n/useI18n";
import { useGetActivity } from "../query/activity/getActivity";

type ActivityProps = {
  bookingId?: string;
  bookingObject?: any;
  confirm?: boolean;
  isFailure?: boolean;
  isRebook?: boolean;
  item?: any;
  mx?: boolean;
  size?: "sm" | "md";
  skeleton?: boolean;
  widget?: boolean;
};

const ActivitySkeleton = () => (
  <Card>
    <div className="mb-1 grid grid-cols-[65px,1fr] gap-4 sm:mb-0 sm:grid-cols-1">
      <div className="!h-[65px] w-[65px] animate-pulse rounded bg-gray-200 sm:hidden" />
      <div className="flex flex-col gap-2">
        <div className="h-5 w-3/4 animate-pulse rounded bg-gray-200" />
        <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
      </div>
    </div>
    <div className="mt-4 grid gap-8 sm:grid-cols-[100px,1fr]">
      <div className="hidden !h-[100px] !w-[100px] animate-pulse rounded-lg bg-gray-200 sm:block" />
      <div className="space-y-3">
        <div className="h-4 w-1/2 animate-pulse rounded bg-gray-200" />
        <div className="h-4 w-2/3 animate-pulse rounded bg-gray-200" />
        <div className="h-4 w-1/3 animate-pulse rounded bg-gray-200" />
        <div className="h-4 w-1/2 animate-pulse rounded bg-gray-200" />
      </div>
    </div>
  </Card>
);

export const Activity = ({
  bookingId,
  bookingObject,
  confirm,
  isFailure,
  isRebook,
  item,
  mx,
  size,
  skeleton,
  widget,
}: ActivityProps) => {
  const { t } = useI18n();
  const setOpen = useDrawerStore((state) => state.setOpen);
  const drawerIdent = `confirm-activity-${bookingId}-${item?.activity?.id}`;

  if (skeleton) {
    return <ActivitySkeleton />;
  }

  const isSm = size === "sm";

  const canBeCancelled = item.reservation.isCancellable;
  const isCancelled = item.reservation.cancelledAt;
  const canModify = canBeCancelled && !isCancelled;
  const isTrip = item.reservation.tripId;

  const { data: trip, isLoading: isLoadingTrip } = useTrip(
    item.reservation.tripId
  );

  const Wrapper = isSm ? "div" : Card;

  return (
    <>
      <Wrapper
        className={cn({
          group: isSm,
          "lg:flex": confirm && bookingId,
        })}
        {...(!isSm && mx !== undefined ? { mx } : {})}
      >
        <div
          className={cn({
            "cursor-pointer lg:min-w-0 lg:flex-1": confirm && bookingId,
          })}
          onClick={
            confirm && bookingId ? () => setOpen(drawerIdent) : undefined
          }
        >
          {!widget && (
            <div
              style={{
                borderLeft: "none",
                borderRight: "none",
                borderTop: "none",
              }}
              className="container-mx -mt-6 mb-4 flex items-center border border-solid border-sky-100 bg-sky-50 px-4 py-2 text-xs text-sky-700 lg:-mx-6 lg:mb-6 lg:text-sm"
            >
              <I icon="clock" />
              <span className="ms-3">
                {t("pages.basket.hold")} <Countdown {...{ item }} />
              </span>
            </div>
          )}
          {!isTrip && (
            <div
              className={cn({
                "mb-1 grid grid-cols-[65px,1fr] gap-4 sm:mb-0 sm:grid-cols-1":
                  !isSm,
              })}
            >
              {!isSm && (
                <div className="!h-[65px] overflow-hidden rounded sm:hidden">
                  <StaticImage
                    src={item.activity?.teaser_image?.url}
                    alt={item.activity?.teaser_image?.alternativeText}
                    width={200}
                    height={200}
                  />
                </div>
              )}
              <div>
                <Text
                  as="h2"
                  className={cn(
                    "flex !text-base font-semibold !text-black",
                    (canModify || !isCancelled) && "pr-3 lg:pr-6",
                    {
                      "sm:mb-4": !isSm,
                      "mb-1.5 grid grid-cols-[auto,1fr] gap-2": isSm,
                    }
                  )}
                >
                  <span
                    className={cn(`flex flex-col`, {
                      "gap-0.5": widget,
                      "gap-1": !widget || confirm,
                    })}
                  >
                    {item.activity?.info?.title}
                    <Rating
                      activity={item.activity}
                      type={widget && !confirm ? "sm" : "md"}
                      classNameOuter={`mb-0.5`}
                    />
                  </span>
                  {isCancelled && (
                    <Badge className="ms-auto">
                      {t("pages.confirmation.cancelled")}
                    </Badge>
                  )}
                </Text>
              </div>
            </div>
          )}
          <div
            className={cn(`grid gap-8`, {
              "sm:grid-cols-[100px,1fr]": !isSm && !isTrip,
              "gap-4 pe-4 lg:pe-6": isTrip,
            })}
          >
            {isTrip ? (
              !isLoadingTrip && trip ? (
                <div className="relative">
                  {isCancelled && (
                    <Badge className="absolute end-0 top-0">
                      {t("pages.confirmation.cancelled")}
                    </Badge>
                  )}
                  <TripContent trip={trip} heading hideEdit />
                </div>
              ) : (
                <Skeleton
                  loading={true}
                  amount={1}
                  size="md"
                  classNameItems="!h-[88px]"
                />
              )
            ) : null}
            {!isSm && !isTrip && (
              <div className="hidden !h-[100px] overflow-hidden rounded-lg sm:block">
                <StaticImage
                  src={item.activity?.teaser_image?.url}
                  alt={item.activity?.teaser_image?.alternativeText}
                  width={100}
                  height={100}
                />
              </div>
            )}
            <div
              className={cn("space-y-2", {
                "mt-2": !widget,
              })}
            >
              <div className="space-y-6">
                <div className="space-y-4">
                  <Details
                    reservation={item.reservation}
                    activity={item.activity}
                    dontDisplay={
                      [
                        ...(confirm
                          ? ["price"]
                          : !widget
                            ? ["price"]
                            : ["offer"]),
                        ...(isTrip ? ["date", "time"] : []),
                      ] as (
                        | "offer"
                        | "date"
                        | "time"
                        | "validity"
                        | "tickets"
                        | "price"
                      )[]
                    }
                  />
                  {item?.reservation?.reservations?.length
                    ? item?.reservation?.reservations?.map(
                        (reservation: TReservation) => {
                          return (
                            <Details
                              key={reservation.reservationId}
                              reservation={reservation}
                              activity={item.activity}
                              dontDisplay={
                                [
                                  ...(confirm
                                    ? ["price"]
                                    : !widget
                                      ? ["price"]
                                      : ["offer"]),
                                  ...(isTrip ? ["date", "time"] : []),
                                ] as (
                                  | "offer"
                                  | "date"
                                  | "time"
                                  | "validity"
                                  | "tickets"
                                  | "price"
                                )[]
                              }
                            />
                          );
                        }
                      )
                    : null}
                </div>
                {!widget ? (
                  <div>
                    <Summary
                      reservations={[item.reservation]}
                      cart={
                        {
                          total: item.reservation.totalPrice,
                        } as CartStore["cart"]
                      }
                      serviceFee={false}
                    />
                    {!isSm && item.reservation?.cancellableUntil && (
                      <div>
                        <Cancellable
                          inline
                          date={item.reservation?.cancellableUntil}
                        />
                      </div>
                    )}
                  </div>
                ) : null}
              </div>
              {!widget && (
                <div className="flex justify-end gap-2">
                  <BookingButton
                    className="w-max"
                    type="transparent"
                    icon={<I icon="pen-to-square" />}
                    text={t("pages.basket.edit")}
                    activityId={item.activity.id}
                    reservation={item.reservation}
                  />
                </div>
              )}
            </div>
          </div>
          {confirm && item.reservation?.bookingId && (
            <UserNav bookingId={item.reservation?.bookingId} />
          )}
          {confirm && bookingId && (
            <div className="-mx-6 -mb-6 mt-4 grid grid-cols-2 border-b-0 border-e-0 border-s-0 border-t border-solid border-gray-200 lg:hidden">
              {canModify && (
                <EditButton
                  item={item}
                  bookingId={bookingId}
                  canRebook={isRebook}
                  buttonType="transparent"
                  className="justify-center rounded-none !border-none !text-sm font-medium"
                />
              )}
              {!isCancelled && (
                <Button
                  type="transparent"
                  text={t("pages.confirmation.showTickets")}
                  href={`https://mobiletickets.swissactivities.com/b/${bookingId}`}
                  target="_blank"
                  className={cn(
                    "justify-center rounded-none border-b-0 border-e-0 border-t-0 border-solid border-gray-200 !text-sm font-medium",
                    canModify ? "border-s" : "col-span-2 border-s-0"
                  )}
                />
              )}
            </div>
          )}
        </div>
        {confirm && bookingId && (canModify || !isCancelled) && (
          <div
            className="hidden lg:-my-6 lg:-mr-6 lg:flex lg:min-w-[300px] lg:flex-col lg:items-center lg:justify-center lg:gap-4 lg:border-b-0 lg:border-l lg:border-r-0 lg:border-t-0 lg:border-solid lg:border-gray-200 lg:pl-6 lg:pr-6"
            onClick={(e) => e.stopPropagation()}
          >
            {canModify && (
              <EditButton
                item={item}
                bookingId={bookingId}
                canRebook={isRebook}
                className="min-w-[200px]"
              />
            )}
            {!isCancelled && (
              <Button
                type="secondary"
                text={t("pages.confirmation.showTickets")}
                href={`https://mobiletickets.swissactivities.com/b/${bookingId}`}
                target="_blank"
                className="min-w-[200px]"
              />
            )}
          </div>
        )}
      </Wrapper>
    </>
  );
};

export const Content = ({ id }: { id: string | undefined }) => {
  const { locale } = useI18n();
  const { data } = useGetActivity(id, locale);

  return data ? (
    <Act activity={data} confirm={true} />
  ) : (
    <div className="flex w-full items-center justify-center p-4">
      <Loader />
    </div>
  );
};
