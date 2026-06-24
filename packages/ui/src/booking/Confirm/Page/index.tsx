"use client";

import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Text } from "@swiss-activities/ui";
import { Activity } from "../../Activity";
import { BookingPageTop } from "../../BookingPageTop";
import { ConfirmDrawer } from "../../Activity/Drawer";
import { EditBookingDrawer } from "../../Activity/Drawer/Edit";
import { Card } from "../../Card";
import type { CartStore } from "../../Cart/store";
import { unlockCartRestore } from "../../Cart/utils";
import { usePaymentProvider } from "../../Checkout/hooks";
import { ComplementaryActivities } from "../../ComplementaryActivity";
import { GetMobileApp } from "../../components/GetMobileApp";
import {
  allCancelled,
  groupCustomData,
  hasTransportBooking,
  isActivityPast,
  isTransportActivity,
  type ResolvedReservation,
} from "../customData";
import { Status } from "../Status";
import { TransportSection } from "../TransportSection";
import { cn } from "../../utils/css/cn";
import { useSearchParams } from "../../utils/i18n/navigation";
import { useI18n } from "../../utils/i18n/useI18n";
import type { Activities } from "../../utils/thirdParty/dataLayerSend";
import { getPageUrl } from "../../utils/content/loaders";
import { getActivity } from "../../query/activity/getActivity";
import { axiosApiInstanceWithCsrf } from "../../query/axios";
import { getBooking } from "../../query/booking";
import { getReservation } from "../../query/booking/getReservation";
import { useMakePaymentDetails } from "../../query/payment/makePaymentDetails";

const TRANSPORT_TYPE_IDS = ["136", "130", "70"];

export const ConfirmPage = () => {
  const { t, locale } = useI18n();
  const [bkgId, setBkgId] = useState<string | undefined>(undefined);
  const [booking, setBooking] = useState(null) as any;
  const [customData, setCustomData] = useState<CartStore["cart"]["customData"]>([]);
  const [isAllCancelled, setIsAllCancelled] = useState(false);
  const [isFailure, setIsFailure] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isRebook, setIsRebook] = useState(false);
  const [madePaymentDetails, setMadePaymentDetails] = useState(false);
  const [relatedData, setRelatedData] = useState<
    { bookingId: string; customData: CartStore["cart"]["customData"] }[]
  >([]);
  const bookingUrl = getPageUrl("booking", locale);
  const searchParams = useSearchParams();
  const { mutateAsync: makePaymentDetails } = useMakePaymentDetails();
  const { paymentProvider } = usePaymentProvider();

  const bookingObject = async (event = "purchase") => {
    const complementaryMap: Record<number, number> = {};
    if (booking?.items) {
      for (const item of booking.items) {
        const mainActivityId = item.relatedIds?.activity_id;
        if (mainActivityId && item.complementaryReferences?.length) {
          for (const ref of item.complementaryReferences) {
            if (ref.complementary_activity_id) {
              complementaryMap[ref.complementary_activity_id] = mainActivityId;
            }
          }
        }
      }
    }

    const obj = {
      obj: {
        event,
        payment_type: booking.payments?.[0]?.paymentGatewayType,
        customer_state: booking.user.existingUser ? "Existing Customer" : "New Customer",
        user_country: booking.user.countryCode,
        user_email: booking.user.email,
        user: booking.user,
        ecommerce: {
          currency: booking.totalNet.currency,
          value:
            Number(booking.totalGross.amount) -
            Number(booking?.customerServiceFee?.amount || "0.00"),
          transaction_id: booking.bookingId,
          service_fee: Number(booking?.customerServiceFee?.amount || "0.00"),
          basket_gross_ex_sf: Number(
            (
              Number(booking?.totalGross?.amount || "0.00") -
              Number(booking?.customerServiceFee?.amount || "0.00")
            ).toFixed(2)
          ),
          basket_gross: Number(booking?.totalGross?.amount || "0.00"),
          discount_code:
            booking?.rebates?.[0]?.provider === "internal" ? booking?.rebates?.[0]?.code : null,
          discount_value:
            booking?.rebates?.[0]?.provider === "internal"
              ? Number(booking?.totalRebates?.amount || "0.00")
              : null,
          tax: Number(booking?.vat?.amount || "0.00"),
        },
      },
      activities: Object.values(customData) as unknown as Activities,
      complementaryMap:
        Object.keys(complementaryMap).length > 0 ? complementaryMap : undefined,
      timeout: 0,
    } as const;

    let finalCommission = 0;
    try {
      const bookingSummary = await axiosApiInstanceWithCsrf
        .post("/booking/summary/", {
          bookingId: booking?.bookingId?.replaceAll("/", ""),
        })
        .then((data) => data.data);

      if (bookingSummary) {
        bookingSummary.items.forEach((item) => {
          finalCommission = finalCommission + Number(item.saCommission.amount);
        });
        finalCommission =
          finalCommission + Number(bookingSummary?.customerServiceFee?.amount || "0.00");

        if (finalCommission !== 0) {
          const finalCommissionMinusTax = Number((finalCommission / 1.081).toFixed(2));
          (obj.obj.ecommerce as { value: number }).value = finalCommissionMinusTax;
        }
      }
    } catch (e) {}

    return obj;
  };

  useEffect(() => {
    const url = new URL(window.location.href);
    const bookingIdSearchParam = url.searchParams.get("bookingId");

    if (bookingIdSearchParam) {
      setBkgId(bookingIdSearchParam);
    }
  }, []);

  useEffect(() => {
    if (!paymentProvider) return;
    if (paymentProvider !== "adyen" || madePaymentDetails) {
      setMadePaymentDetails(true);
      return;
    }

    const url = new URL(window.location.href);
    const redirectResult = url.searchParams.get("redirectResult");

    if (!bkgId) {
      return;
    }

    if (!redirectResult) {
      setMadePaymentDetails(true);
      return;
    }

    (async () => {
      try {
        const result = await makePaymentDetails({
          bookingId: bkgId,
          data: {
            redirectResult,
          },
          locale,
        });
        if (["Error", "Refused", "Cancelled"].includes(result.resultCode)) {
          unlockCartRestore();
          window.location.href = bookingUrl;
          return;
        } else {
          setMadePaymentDetails(true);
        }
      } catch (e) {
        setMadePaymentDetails(true);
      }
    })();
  }, [isLoading, bkgId, madePaymentDetails, paymentProvider]);

  useEffect(() => {
    if (!bkgId || !madePaymentDetails) return;

    (async () => {
      if (bkgId) {
        if (booking?.bookingId) return;
        try {
          const bookingItem = await getBooking(bkgId);
          setBooking(bookingItem);

          if (bookingItem) {
            const resolved: ResolvedReservation[] = [];
            for (const item of bookingItem?.items) {
              const act = await getActivity(item.relatedIds.activity_id_capi, locale);
              for (const itemInner of item.reservations) {
                const res = await getReservation(itemInner.reservationId);
                const cancellableUntil = dayjs(itemInner.cancellableUntil).toDate();
                const now = dayjs().toDate();
                const isCancellable =
                  itemInner.cancellableUntil !== null && !(cancellableUntil < now);
                resolved.push({
                  act,
                  res,
                  isCancellable,
                  cancellableUntil: itemInner.cancellableUntil,
                  bookingItemId: item.bookingItemId,
                  cancelledAt: item.cancelledAt,
                  offerId: item.relatedIds.offer_id,
                  validity: item?.validity,
                });
              }
            }
            const customDataItems = groupCustomData(resolved) as CartStore["cart"]["customData"];

            setCustomData(customDataItems);

            if (bookingItem?.items?.length === 1) {
              if (!bookingItem.items[0].cancelledAt && bookingItem.items[0].isCancellable) {
                setIsRebook(true);
              }
            }
            setIsAllCancelled(allCancelled(bookingItem?.items));

            if (bookingItem.relatedBookingIds?.length > 0) {
              const relatedResults: typeof relatedData = [];
              for (const relatedBkgId of bookingItem.relatedBookingIds) {
                try {
                  const relatedBooking = await getBooking(relatedBkgId);
                  if (!relatedBooking) continue;
                  const rResolved: ResolvedReservation[] = [];
                  for (const rItem of relatedBooking.items) {
                    const rAct = await getActivity(rItem.relatedIds.activity_id_capi, locale);
                    for (const rInner of rItem.reservations) {
                      const rRes = await getReservation(rInner.reservationId);
                      const rCancellableUntil = dayjs(rInner.cancellableUntil).toDate();
                      const rIsCancellable =
                        rInner.cancellableUntil !== null &&
                        !(rCancellableUntil < dayjs().toDate());
                      rResolved.push({
                        act: rAct,
                        res: rRes,
                        isCancellable: rIsCancellable,
                        cancellableUntil: rInner.cancellableUntil,
                        bookingItemId: rItem.bookingItemId,
                        cancelledAt: rItem.cancelledAt,
                        offerId: rItem.relatedIds.offer_id,
                        validity: rItem?.validity,
                      });
                    }
                  }
                  relatedResults.push({
                    bookingId: relatedBkgId,
                    customData: groupCustomData(rResolved) as CartStore["cart"]["customData"],
                  });
                } catch (err) {
                  console.log("Error fetching related booking:", err);
                }
              }
              setRelatedData(relatedResults);
            }
          }
        } finally {
          setTimeout(() => {
            if (searchParams?.get("housibot")) return;
            setIsLoading(false);
          }, 100);
        }
      }
    })();
  }, [bkgId, booking, madePaymentDetails]);

  const transportBooking = hasTransportBooking(customData, relatedData);
  const activityPast = isActivityPast(customData, new Date());
  const transportActivity = isTransportActivity(customData, TRANSPORT_TYPE_IDS);
  const showTransport =
    !transportBooking &&
    !activityPast &&
    !transportActivity &&
    !isAllCancelled &&
    customData.length === 1;

  return (
    <section className="bg-bg pb-20 lg:pb-24">
      {/* Shared top spacing so confirm starts at the same offset below the header
          as the basket/checkout funnel pages (which get it from the breadcrumb). */}
      <BookingPageTop />
      <div className="sa-container">
        <div className="grid grid-cols-1 gap-8 mb-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-12">
          <div>
            <Text as="h1" size="lg" className="mb-2">
              {t("confirm.title")}
            </Text>
            <Status {...{ booking, setIsFailure, isLoading }} />
          </div>
        </div>
        {showTransport && (
          <div className="mb-8">
            <TransportSection booking={booking} />
          </div>
        )}
        <div className="space-y-2">
          {(Object.values(customData) as CartStore["cart"]["customData"]).map((data, index) => {
            return (
              <div key={data?.activity?.id + index}>
                <Activity
                  bookingId={bkgId}
                  confirm
                  item={data}
                  widget
                  mx={false}
                  {...{ isFailure, isRebook, bookingObject }}
                />
                <ConfirmDrawer
                  item={data}
                  bookingId={bkgId}
                  bookingObject={bookingObject}
                  canRebook={isRebook}
                />
              </div>
            );
          })}
        </div>
        {relatedData?.length > 0 && (
          <div className="mt-8">
            <Text as="h2" size="md" className="mb-4">
              {t("pages.confirmation.relatedBookings")}
            </Text>
            <div className="space-y-2">
              {relatedData.map((related) =>
                (Object.values(related.customData) as CartStore["cart"]["customData"]).map(
                  (data, index) => (
                    <div key={data?.activity?.id + index}>
                      <Activity
                        bookingId={related.bookingId}
                        confirm
                        item={data}
                        widget
                        mx={false}
                      />
                      <ConfirmDrawer
                        item={data}
                        bookingId={related.bookingId}
                        bookingObject={bookingObject}
                      />
                    </div>
                  )
                )
              )}
            </div>
          </div>
        )}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:mt-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-12">
          <Card size="lg">
            <GetMobileApp center textProps={{ size: "md" }} descriptionProps={{ size: "sm" }} addon />
          </Card>
          <ComplementaryActivities {...{ booking }} className="lg:col-span-2" />
        </div>
      </div>
      <EditBookingDrawer bookingObject={bookingObject} />
    </section>
  );
};
