import { useMutation } from "@tanstack/react-query";
import { axiosApiInstance } from "../axios";

export const syncOffer = async (offerId: number) => {
  const url = `/booking/sync-offer/`;

  return axiosApiInstance.post(url, {
    offerId,
  });
};

export const useSyncOffer = () => {
  return useMutation({
    mutationKey: ["post", "sync-offer"],
    mutationFn: (data: { offerId: number }) => syncOffer(data.offerId),
  });
};
