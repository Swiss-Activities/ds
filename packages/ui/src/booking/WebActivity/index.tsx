"use client";

import { useEffect } from "react";
import { Booking } from "../index";
import { BookingBottomBar } from "../BottomBar";
import { useCartStore } from "../Cart/store";
import { useGetActivity } from "../query/activity/getActivity";
import { useI18n } from "../utils/i18n/useI18n";

export const WebActivity = ({ activityId }: { activityId: string }) => {
  const { locale } = useI18n();
  const { data: activity } = useGetActivity(activityId, locale, true);
  const setActivityObject = useCartStore((state) => state.setActivityObject);

  useEffect(() => {
    if (activity) {
      setActivityObject(activity);
    }
  }, [activity, setActivityObject]);

  const bookable = Boolean(activity?.availableDates?.length && activity?.summary);

  return (
    <>
      {bookable && activity ? <BookingBottomBar activity={activity} /> : null}
      <Booking />
    </>
  );
};
