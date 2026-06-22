import { useMutation } from "@tanstack/react-query";
import { unlockCartRestore } from "../../Cart/utils";
import type { TBooking } from "../../types/booking";
import { axiosInstancePatch } from "../axios";

export type CheckoutUser = {
  givenName: string;
  familyName: string;
  email: string;
  phone: string;
  countryCode: string;
};

export type CheckoutFormData = {
  user: CheckoutUser;
  distributorId?: string;
  notes?: string;
  relatedBookingIds?: string[];
};

export const checkout = async (
  cartId: string | null,
  bookingForm: CheckoutFormData
): Promise<TBooking> => {
  unlockCartRestore();

  return axiosInstancePatch
    .patch(`/carts/${cartId}/check_out`, bookingForm)
    .then((response) => response.data);
};

export const useCheckout = () => {
  return useMutation({
    mutationFn: ({
      bookingForm,
      cartId,
      locale,
    }: {
      bookingForm: CheckoutFormData;
      cartId: string | null;
      locale: string;
    }) => checkout(cartId, bookingForm),
  });
};
