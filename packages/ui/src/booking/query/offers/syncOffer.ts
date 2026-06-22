import { useMutation } from "@tanstack/react-query";
import { axiosInstancePatch } from "../axios";

export const syncOffer = async (offerId: number) => {
  return axiosInstancePatch.patch(`/offers/${offerId}/sync`, {
    action: "schedule",
  });
};

export const useSyncOffer = () => {
  return useMutation({
    mutationKey: ["post", "sync-offer"],
    mutationFn: (data: { offerId: number }) => syncOffer(data.offerId),
  });
};
