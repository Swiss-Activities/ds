import { memo, type ReactNode } from "react";
import isArray from "lodash/isArray";
import { DurationOrValidities } from "../DurationOrValidities";
import { I } from "../I";
import { StaticImage } from "../StaticImage";
import { Text } from "@swiss-activities/ui";
import type { TActivity } from "../../types/activity";
import { cn } from "../../utils/css/cn";
import { useI18n } from "../../utils/i18n/useI18n";
import { formatGuideLanguages } from "./format";

const iconList: Record<string, string> = {
  bookable: "icons/full_day_ticket.svg",
  cancel: "icons/protection.svg",
  confirmation: "icons/handshake.svg",
  discount: "icons/discount.svg",
  duration: "icons/hourglass.png",
  languages: "icons/languages.png",
  meetingPoint: "icons/map.svg",
  mobileTicket: "icons/smartphone.svg",
  online: "icons/lightning.svg",
  openingHours: "icons/clock.svg",
  payment: "icons/payment.svg",
  queue: "icons/skip_the_line.svg",
  request: "icons/duration.svg",
  validity: "icons/hourglass.png",
};

type UspsProps = {
  activity: TActivity;
  className?: string;
  icons?: boolean;
  ids?: string[];
  label?: boolean;
  map?: boolean;
  not?: string[];
  single?: boolean;
  type: "row" | "column" | "full" | "sm" | "xs";
  usps?: string[];
};

export const Usps = memo(
  ({
    activity,
    className,
    icons = true,
    ids,
    label = true,
    map = true,
    not,
    single = false,
    type,
    usps,
  }: UspsProps) => {
    if (!activity?.summary) return null;

    const { t, locale } = useI18n();

    let isRow = type === "row";
    let isColumn = type === "column";
    const isFull = type === "full";
    const isSm = type === "sm" || type === "xs";
    const isXs = type === "xs";
    const isRestech = !ids && activity.summary.resTech;
    const isCancellable = !ids && activity.summary.cancellation;
    const isRequest = !ids && activity.summary.bookingOnRequest;

    const discounts = () => {
      let string = "";
      activity?.summary?.discount.map((item, index) => {
        string +=
          item[locale] +
          (activity?.summary?.discount.length !== index + 1 ? ", " : "");
      });
      return string;
    };

    const data = !ids
      ? ([
          {
            id: "duration",
            condition: activity.summary.durationInHours.filter((e) => e !== "0")
              .length,
            title: t("usps.duration.title"),
            description: (
              <DurationOrValidities
                {...{ activity }}
                durations={activity.summary.durationInHours}
              />
            ),
            titleSingle: (
              <DurationOrValidities
                {...{ activity }}
                durations={activity.summary.durationInHours}
                title={t("usps.duration.title")}
              />
            ),
            icon: <I icon="hourglass" />,
          },
          {
            id: "openingHours",
            condition: !!activity.summary.openingHours,
            icon: <I icon="clock" />,
            title: t("usps.openingHours.title"),
            description: activity.summary.openingHours,
            titleSingle: `${t("usps.openingHours.title")}: ${activity.summary.openingHours}`,
          },
          // {
          //   id: "validity",
          //   condition: activity.summary.validities.length,
          //   title: t("usps.validity.title"),
          //   description: (
          //     <DurationOrValidities
          //       {...{ activity }}
          //       durations={activity.summary.validities}
          //     />
          //   ),
          //   titleSingle: (
          //     <DurationOrValidities
          //       {...{ activity }}
          //       durations={activity.summary.validities}
          //       title={t("usps.validity.title")}
          //     />
          //   ),
          //   icon: <I icon="hourglass" />,
          // },
          {
            id: "mobileTicket",
            condition: isRestech,
            icon: <I icon="ticket" />,
          },
          // {
          //   id: "confirmation",
          //   condition: isRestech,
          //   icon: <I icon="circle-check" />,
          // },
          {
            id: "queue",
            condition:
              isRestech &&
              activity?.attributes?.a7?.items?.find((e) => e.id === "21"),
            icon: <I icon="circle-minus" />,
          },
          {
            id: "meetingPoint",
            condition:
              (activity.meeting_points?.[0]?.label ||
                activity.meeting_points?.[0]?.address) &&
              map,
            title: t(`usps.meetingPoint.title`),
            description:
              activity.meeting_points?.[0]?.label ||
              activity.meeting_points?.[0]?.address,
            icon: <I icon="map-location-dot" />,
          },
          {
            id: "discount",
            condition: activity?.summary?.discount.length,
            icon: <I icon="percent" />,
            description: discounts(),
            titleSingle: `${t("usps.discount.title")}: ${discounts()}`,
            clickable: "booking",
          },
          {
            id: "cancel",
            condition: isCancellable,
            icon: <I icon="circle-x-mark" />,
            titleSingle: t("usps.cancel.title"),
          },
          {
            id: "request",
            condition: isRequest,
            icon: <I icon="circle-exclamation" />,
            titleSingle: t("usps.request.title"),
          },
          {
            id: "amount",
            condition: activity?.summary?.ticketsIssued >= 5,
            icon: <I icon="cart-shopping" />,
            title: t("activity.booked", {
              val: activity?.summary?.ticketsIssued.toLocaleString(
                ["de_CH", "fr_CH", "it_CH"].includes(locale) ? "de-CH" : "en-US"
              ),
            }),
          },
          {
            id: "languages",
            condition:
              isArray(activity?.summary?.guideLanguages) &&
              (activity?.summary?.guideLanguages as unknown as string[]).filter(
                (e) => e
              ).length >= 1,
            icon: <I icon="globe" />,
            title: t("filter.lang", {
              val: activity?.summary?.ticketsIssued,
            }),
            description: formatGuideLanguages(
              activity?.summary?.guideLanguages,
              locale
            ),
          },
        ] as {
          id: string;
          condition: boolean;
          icon: ReactNode;
          title: string;
          titleSingle?: string;
          description?: string;
          clickable?: string;
        }[])
      : [];

    if (data) {
      let dataIndex = 0;
      data.forEach((item) => {
        if (item.condition) {
          dataIndex++;
        }
      });

      dataIndex = dataIndex - (not?.length || 0);

      label = dataIndex <= 6;
      isRow = !isSm && dataIndex >= 7;
      single = dataIndex >= 7;
    }

    const Usp = ({
      description = "",
      icon = null,
      title = "",
      titleSingle = "",
      iconSingle,
    }: {
      description?: string;
      icon?: ReactNode;
      title?: string;
      titleSingle?: string;
      iconSingle?: ReactNode;
    }) => {
      return (
        <div
          className={cn(`flex flex-col items-start`, {
            "!text-sm !font-medium !text-gray-700": isSm,
          })}
        >
          <div
            className={cn(`!grid`, {
              "grid-cols-[50px,1fr]": !isSm,
              "grid-cols-[auto,1fr] items-start gap-2": isSm,
            })}
          >
            {icons && (
              <>
                {isSm ? (
                  <div
                    className={cn("relative flex h-max", {
                      "top-px": isXs,
                      "top-[3px]": isSm && !isXs,
                    })}
                  >
                    {iconSingle}
                  </div>
                ) : (
                  <div className="flex h-[20px] w-[20px]">
                    <StaticImage
                      public
                      src={`/assets/${icon}`}
                      width={20}
                      height={20}
                    />
                  </div>
                )}
              </>
            )}
            <div
              className={cn(`font-medium text-black`, {
                "-ms-3 block": !isSm,
                "flex items-center": isSm,
              })}
            >
              {title && (
                <div className="flex items-center">
                  <Text
                    className={cn({
                      "!text-xs !font-medium !text-gray-700 md:!text-sm":
                        isSm && !isXs,
                      "!text-xs !font-medium !text-gray-700": isXs,
                      "!text-sm !font-semibold !text-black": !isSm,
                    })}
                  >
                    <span
                      className="inline-block first-letter:uppercase"
                      suppressHydrationWarning
                    >
                      {isSm || single
                        ? titleSingle || description || title
                        : title}
                    </span>
                  </Text>
                </div>
              )}
              {description && label && !isSm && (
                <Text className="!text-sm lg:block">{description}</Text>
              )}
            </div>
          </div>
        </div>
      );
    };

    return (
      <div
        className={cn(
          "empty:hidden",
          {
            "flex flex-wrap gap-x-8 gap-y-4 lg:space-y-0": !isFull && !isSm,
            "flex flex-wrap gap-x-4 gap-y-0.5 md:gap-x-5 lg:space-y-0": isSm,
            "space-y flex max-w-max flex-col": isRow || isColumn,
            "lg:grid lg:grid-cols-2 lg:gap-x-6 lg:gap-y-6 lg:space-y-0":
              isColumn && !isRow,
            "grid grid-cols-1 gap-4": isFull,
          },
          className
        )}
      >
        {ids
          ? ids.map((item) => {
              return (
                <Usp
                  key={item}
                  icon={iconList[item]}
                  title={t(`usps.${item}.title`)}
                  description={
                    item === "amount" ||
                    item === "online" ||
                    item === "payment" ||
                    item === "queue" ||
                    item === "meetingPoint" ||
                    item === "languages"
                      ? ""
                      : t(`usps.${item}.description`, {})
                  }
                />
              );
            })
          : data
              .filter((e) => (not?.length ? !not.includes(e.id) : true))
              .filter((e) => (usps ? usps.includes(e.id) : true))
              .map((item) => {
                if (!item.condition) return null;

                return (
                  <Usp
                    key={item.id}
                    icon={iconList[item.id]}
                    iconSingle={item.icon}
                    title={item.title || t(`usps.${item.id}.title`)}
                    description={
                      item.description ||
                      (item.id === "amount" ||
                      item.id === "online" ||
                      item.id === "payment" ||
                      item.id === "queue" ||
                      item.id === "meetingPoint" ||
                      item.id === "languages"
                        ? ""
                        : item.id === "cancel"
                          ? t(
                              `usps.${item.id}.description${
                                activity?.summary?.cancellationCutOff > 24
                                  ? "Days"
                                  : ""
                              }`,
                              {
                                val:
                                  activity?.summary?.cancellationCutOff > 24
                                    ? (
                                        activity?.summary?.cancellationCutOff /
                                        24
                                      )
                                        .toFixed(2)
                                        .replace(".00", "")
                                    : activity?.summary?.cancellationCutOff,
                              }
                            )
                          : t(`usps.${item.id}.description`))
                    }
                    titleSingle={item.titleSingle}
                  />
                );
              })}
      </div>
    );
  }
);
