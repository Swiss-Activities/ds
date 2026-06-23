"use client";

import { useEffect, useRef, useState } from "react";
import { Loader, Text } from "@swiss-activities/ui";
import { lockCartRestore, unlockCartRestore } from "../../Cart/utils";
import { I } from "../../components/I";
import { SplashScreen } from "../../components/SplashScreen";
import { Toast } from "../../components/Toast";
import { cn } from "../../utils/css/cn";
import { secureLocalStorage } from "../../utils/data/secureLocalStorage";
import { useSearchParams } from "../../utils/i18n/navigation";
import { useI18n } from "../../utils/i18n/useI18n";
import { getBooking, getPaymentAttempts } from "../../query/booking";

const checkInterval = 3000;
const maxCheckNumber = 60;

type StatusProps = {
  booking: any;
  bookingId?: string;
  isLoading: boolean;
  setIsFailure: any;
};

export const Status = ({ booking, bookingId, setIsFailure, isLoading }: StatusProps) => {
  const { t } = useI18n();
  const searchParams = useSearchParams();
  const [bookingNumber, setBookingNumber] = useState(maxCheckNumber);
  const [bookingStatus, setBookingStatus] = useState(bookingId ? "confirmed" : "pending");
  const [paymentAccepted, setPaymentAccepted] = useState(!!bookingId);
  const [paymentNumber, setPaymentNumber] = useState(maxCheckNumber);
  const bookingNumberRef = useRef(bookingNumber);
  const paymentNumberRef = useRef(paymentNumber);

  const bkgId = bookingId || searchParams?.get("bookingId");

  const checkPaymentStatus = async (bookingItem) => {
    setPaymentNumber((prevState) => {
      return prevState - 1;
    });
    const paymentResultPromises = bookingItem.paymentAttempts.map((attempt) =>
      getPaymentAttempts(attempt.paymentAttemptId)
    );
    const paymentResult = await Promise.all(paymentResultPromises);
    if (
      paymentResult.some(
        ({ status }) => status === "used" || status === "free" || status === "paid_reseller"
      ) ||
      bookingItem.paymentStatus === "free"
    ) {
      return setPaymentAccepted(true);
    }

    if (bookingItem.paymentStatus === "voided") {
      return setPaymentAccepted(false);
    }

    if (paymentNumberRef.current > 0) {
      setTimeout(() => {
        checkPaymentStatus(bookingItem);
      }, checkInterval);
    }
  };

  useEffect(() => {
    paymentNumberRef.current = paymentNumber;
  }, [paymentNumber]);

  const checkBookingStatus = async (bookingItem) => {
    if (bookingItem?.reservationFailed) {
      return setBookingStatus("failed");
    }

    setBookingNumber((prevState) => {
      return prevState - 1;
    });

    const res = bookingItem.items;
    const resMap = res.map((e) => e.reservations).flat();
    const resLength = resMap.length;
    const confirmedResLength = resMap.filter((e) => e.confirmedAt).length;
    const cancelledResLength = resMap.filter((e) => e.cancelledAt).length;

    const status =
      cancelledResLength === resLength
        ? "cancelled"
        : confirmedResLength === resLength
          ? "confirmed"
          : "pending";

    setBookingStatus(status);

    if (status === "pending" && bookingNumberRef.current > 0) {
      const bookingItem = await getBooking(bkgId as string);
      setTimeout(() => {
        checkBookingStatus(bookingItem);
      }, checkInterval);
    } else {
      return status;
    }
  };

  useEffect(() => {
    bookingNumberRef.current = bookingNumber;
  }, [bookingNumber]);

  useEffect(() => {
    const fetchBooking = async (bookingItem) => {
      if (!bookingItem) return;

      if (
        bookingItem.paymentStatus !== "paid" &&
        bookingItem.paymentStatus !== "partially_paid" &&
        bookingItem.paymentStatus !== "free" &&
        bookingItem.paymentStatus !== "paid_reseller"
      ) {
        setTimeout(() => {
          checkPaymentStatus(bookingItem);
        }, checkInterval);
      } else {
        setPaymentAccepted(true);
      }

      const bookingStatus = await checkBookingStatus(bookingItem);
      if (bookingStatus === "pending") {
        setTimeout(() => {
          checkBookingStatus(bookingItem);
        }, checkInterval);
      }
    };

    if (!bkgId) return;

    fetchBooking(booking);
  }, [bkgId, booking]);

  useEffect(() => {
    setIsFailure(
      bookingStatus === "failed" ||
        (bookingStatus === "confirmed" && !paymentAccepted) ||
        bookingStatus === "pending" ||
        bookingStatus === "cancelled"
    );
  }, [bookingStatus, paymentAccepted]);

  const isFailure =
    bookingStatus === "failed" || (bookingStatus === "confirmed" && !paymentAccepted);
  const isFailureOrCancelled = isFailure || bookingStatus === "cancelled";
  const isAccepted = bookingStatus === "confirmed" && paymentAccepted;

  useEffect(() => {
    if (!secureLocalStorage.getItem("bookingId")) {
      return;
    }
    if (isAccepted || isFailureOrCancelled) {
      secureLocalStorage.removeItem("bookingId");
      unlockCartRestore();
    } else {
      lockCartRestore();
    }
  }, [bookingStatus, isFailureOrCancelled, isAccepted]);

  return (
    <>
      <div>
        <Text
          size="md2"
          className={cn("flex items-center", {
            "text-green-600": isAccepted,
            "text-yellow-600": bookingStatus === "pending",
            "text-red-600": isFailureOrCancelled,
          })}
        >
          {isFailureOrCancelled ? (
            <I icon="square-exclamation-solid" />
          ) : bookingStatus === "confirmed" ? (
            <I icon="square-check-solid" />
          ) : (
            <Loader size="xs" color="text-yellow-600" />
          )}
          <span className="ms-2">{t(`confirm.${isFailure ? "failed" : bookingStatus}`)}</span>
        </Text>
        {isFailure && (
          <Text size="xs">
            {t(`confirm.${!paymentAccepted ? "failedPayment" : "failedReservation"}`)}
          </Text>
        )}
        {booking?.user?.email && !isFailure && !bookingId && (
          <Toast icon={<I icon="envelope-circle-check" />} className="mt-4 max-w-screen-sm">
            <span
              dangerouslySetInnerHTML={{
                __html: t
                  .raw("confirm.email")
                  .replace(
                    "{email}",
                    `<strong class="text-inherit">${booking.user.email}</strong>`
                  ),
              }}
            />
          </Toast>
        )}
      </div>
      <SplashScreen show={isLoading ? true : !(isAccepted || isFailureOrCancelled)} />
    </>
  );
};
