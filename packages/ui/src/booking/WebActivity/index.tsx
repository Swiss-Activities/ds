"use client";

import { useEffect, useRef } from "react";
import { Booking } from "../index";
import { BookingBottomBar } from "../BottomBar";
import { useCartStore } from "../Cart/store";
import { useGetActivity } from "../query/activity/getActivity";
import { useI18n } from "../utils/i18n/useI18n";
import { useDataLayer } from "../utils/thirdParty/dataLayerSend";

export const WebActivity = ({ activityId }: { activityId: string }) => {
  const { locale } = useI18n();
  const { data: activity } = useGetActivity(activityId, locale, true);
  const setActivityObject = useCartStore((state) => state.setActivityObject);
  const { dataLayer } = useDataLayer();
  const viewItemFired = useRef<string | null>(null);

  useEffect(() => {
    if (activity) {
      setActivityObject(activity);
    }
  }, [activity, setActivityObject]);

  useEffect(() => {
    if (!activity || viewItemFired.current === activityId) return;
    viewItemFired.current = activityId;
    dataLayer({ obj: { event: "view_item" }, activity });
  }, [activity, activityId, dataLayer]);

  const bookable = Boolean(activity?.availableDates?.length && activity?.summary);

  return (
    <>
      {bookable && activity ? <BookingBottomBar activity={activity} /> : null}
      <Booking />
    </>
  );
};
