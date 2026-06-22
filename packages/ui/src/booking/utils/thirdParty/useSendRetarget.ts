import { TActivity } from "../../types/activity";
import { useI18n } from "../i18n/useI18n";

export const useSendRetarget = (activities: TActivity[]) => {
  const { locale } = useI18n();

  const obj = {
    send_to: "AW-645360092",
    dynx_itemid: activities[0].id,
    dynx_itemid2: locale.replace("_", "-").toLowerCase(),
    dynx_pagetype: "activity",
    dynx_totalvalue: activities[0]?.summary?.minAdultPrice?.amount ?? null,
    travel_destid: activities[0]?.location?.id,
    travel_pagetype: "location",
  };

  const sendRetarget = () => {
    try {
      if (
        (process.env.NEXT_PUBLIC_BASE_URL as string).includes("staging") ||
        process.env.NODE_ENV === "development"
      ) {
        console.log("Retargeting: ", obj);
      } else {
        console.log("Retargeting: ", obj);
        window.gtag("event", "page_view", obj);
      }
    } catch (error) {
      console.error("Retargeting Error: ", error);
    }
  };

  return { sendRetarget };
};
