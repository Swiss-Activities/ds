import { CancellationCard } from "../CancellationCard";
import { Badge } from "../components/Badge";
import { useBooking, useHasStartedBooking } from "../hooks";
import { BottomBar } from "../bottom-bar";
import { Button, type ButtonProps } from "@swiss-activities/ui";
import { ChatButton } from "../ChatButton";
import type { TActivity } from "../types/activity";
import type { TBooking } from "../types/booking";
import type { TReservation } from "../types/reservation";
import { cn } from "../utils/css/cn";
import { useI18n } from "../utils/i18n/useI18n";
import { useFeatureFlag } from "../utils/ui/useFeatureFlag";
import { useGetActivity } from "../query/activity/getActivity";
import { useGetReservation } from "../query/booking/getReservation";

const CANCELLATION_FLAG = "cancellation-card-airbnb";
const CANCELLATION_FORCE_ENV = "NEXT_PUBLIC_CANCELLATION_CARD_VARIANT";

type BookingBottomBarProps = {
  activity?: TActivity;
  activityId?: string;
  booking?: TBooking;
  bookingBarClassName?: string;
  reservation?: TReservation;
} & ButtonProps;

export const BookingBottomBarInner = ({
  ref,
  activity,
  className,
  bookingBarClassName,
  fixed = false,
  ...rest
}: BookingBottomBarProps & {
  ref?: React.Ref<HTMLDivElement>;
  fixed?: boolean;
}) => {
  const { t } = useI18n();
  const cancellationFlag = useFeatureFlag(
    CANCELLATION_FLAG,
    CANCELLATION_FORCE_ENV
  );
  const showCancellationCard =
    !cancellationFlag.loading && cancellationFlag.variant === "test";
  const isCancellable =
    fixed && !!activity?.summary?.cancellation && showCancellationCard;

  return (
    <div ref={ref} className={cn("flex flex-col gap-2", className)}>
      <div className="grid grid-cols-5 gap-3 lg:grid-cols-[1fr_auto_minmax(200px,auto)] lg:gap-8">
        <div className="col-span-2 lg:col-auto">
          <ChatButton className="hidden lg:block" />
          <span className="flex flex-col lg:hidden">
            <span className="!text-base !font-semibold !text-black">
              {`${t("filter.card.from")} ${
                activity?.summary?.minAdultPrice?.formatted
              }`}
            </span>
            <div>
              {activity?.summary?.highDemand &&
              cancellationFlag.variant !== "test" ? (
                <Badge {...{ activity }} text type="demand" />
              ) : null}
            </div>
            {isCancellable ? (
              <CancellationCard
                activity={activity}
                inline
                titleOnly
                hideIconBelowSm
                mutedTitle
                className="self-start"
              />
            ) : null}
          </span>
        </div>
        <div className="ms-auto hidden items-center gap-5 lg:flex">
          {isCancellable ? (
            <>
              <CancellationCard activity={activity} bare />
              <div className="h-10 w-px bg-gray-200" />
            </>
          ) : null}
          <div className="flex w-max flex-col text-sm leading-snug">
            <span>{t("filter.card.from")}</span>
            <span className="text-xl font-semibold text-black">
              {activity?.summary?.minAdultPrice?.formatted}
            </span>
            {activity?.summary?.showPerPersonSuffix && (
              <span>{t("filter.card.person")}</span>
            )}
          </div>
        </div>
        <BookingButton {...{ activity }} {...rest} />
      </div>
    </div>
  );
};

BookingBottomBarInner.displayName = "BookingBottomBarInner";

export const BookingBottomBar = ({
  activity,
  bookingBarClassName,
  ...rest
}: BookingBottomBarProps) => {
  return (
    <BottomBar className={cn("lg:p-4", bookingBarClassName)}>
      <BookingBottomBarInner fixed {...{ activity }} {...rest} />
    </BottomBar>
  );
};

export const BookingButton = ({
  activity,
  activityId,
  reservation,
  reservationId,
  isRebook,
  bookingId,
  ...rest
}: BookingBottomBarProps) => {
  const { t, locale } = useI18n();
  const { openBooking } = useBooking();
  const { hasStartedBooking } = useHasStartedBooking();
  const { data: activityData } = useGetActivity(
    activityId,
    locale,
    !!activityId
  );
  const { data: reservationData } = useGetReservation(
    reservationId,
    !!reservationId
  );

  const handleClick = () => {
    openBooking({
      activity: activity || activityData,
      reservation: reservation || reservationData,
      isRebook,
      bookingId,
    });
  };

  return (
    <Button
      className="col-span-3 w-full font-semibold lg:col-auto lg:w-auto"
      type="primary"
      onClick={handleClick}
      text={t(
        hasStartedBooking ? "activity.widget.adjust" : "activity.widget.check"
      )}
      {...rest}
    />
  );
};
