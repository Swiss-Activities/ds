import { useMemo } from "react";
import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";
import { useBookingStore } from "../store";
import { useSearchStore } from "../store/search";
import { logBookingFlowError } from "../utils/log/logBookingFlowError";

const logError = (err: any, fingerprint?: string[]) => {
  const url = typeof err?.config?.url === "string" ? err.config.url : "";
  const statusCode = err?.response?.status;
  const data = useBookingStore.getState();
  const date = useSearchStore.getState().date;

  const isCart404 = statusCode === 404 && url.startsWith("/carts");

  if (isCart404) {
    return;
  }

  let combined = false;
  let message = `${(err?.config?.method || "").toUpperCase()} request to ${
    err?.config?.url
  }`;

  if (
    [
      "checkout",
      "payment_attempts",
      "make-payment",
      "make-payment-details",
    ].some((string) => url.includes(string))
  ) {
    const data = JSON.parse(err?.config?.data || "{}");
    combined = true;
    if (url.includes("checkout")) {
      message = `POST request to ${url}`;
    }
    if (url.includes("payment_attempts")) {
      if (statusCode === 422) return;
      message = `POST request to ${url} (Payyo)`;
    }
    if (url.includes("make-payment")) {
      if (statusCode === 422) return;
      message = `POST request to /bookings/${data?.bookingId}/make_payments (Adyen with ${data?.paymentMethod?.type})`;
    }
    if (url.includes("make-payment-details")) {
      message = `POST request to /bookings/${data?.bookingId}/make_payment_details (Adyen with with ${data?.paymentMethod?.type})`;
    }
  }

  logBookingFlowError({
    activity: data?.activity,
    availability: data?.availability,
    combined,
    date,
    err,
    fingerprint,
    locale: data?.activity?.locale,
    message,
    reservation: data?.reservation,
  });
};

export const useQueryClient = () => {
  const queryClient = useMemo(
    () =>
      new QueryClient({
        queryCache: new QueryCache({
          onError: (err, query) => {
            const fingerprint = [query.queryHash.replaceAll(/[0-9]/g, "0")];
            logError(err, fingerprint);
          },
        }),
        mutationCache: new MutationCache({
          onError: (err, _variables, _context, mutation) => {
            const fingerprint = mutation.options.mutationKey
              ? (Array.from(mutation.options.mutationKey) as string[])
              : [
                  "mutation-no-key",
                  mutation.mutationId.toString().replaceAll(/[0-9]/g, "0"),
                ];

            logError(err, fingerprint);
          },
        }),
      }),
    []
  );

  return { queryClient };
};
