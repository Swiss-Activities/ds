import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { TActivity } from "../../types/activity";
import { TOfferBooking } from "../../types/offerBooking";
import { useDistributorId } from "../../utils/user/useDistributorId";
import { axiosInstance } from "../axios";
import { syncOffer } from "../offers/syncOffer";

const getAvailabilities = async (
  activity: TActivity,
  data: {
    distributorId: string | null;
    limit: number;
    locale: string;
    startsAfter: string;
    untilEndOfDay: string;
  }
) => {
  const url = `/activities/${activity.mappedId}/availabilities`;

  return axiosInstance
    .get<TOfferBooking[]>(url, {
      params: { ...data },
    })
    .then((response) => {
      const offers = response.data
        .map((e) => {
          return {
            ...e,
            availabilities: e.availabilities.filter((availability) => {
              const { cutoff } = availability;
              const now = dayjs();
              const isPast = now.isAfter(dayjs(cutoff));

              if (!isPast) return availability;
            }),
          };
        })
        .filter((e) => e.availabilities.length > 0);

      if (offers.length === 0) {
        response.data.forEach((item) => {
          syncOffer(item.offerId);
        });

        return [];
      }

      return offers;
    });
};

export const useGetAvailabilities = (
  activity: TActivity,
  limit: number,
  locale: string,
  startsAfter: string,
  untilEndOfDay: string,
  enabled = true
) => {
  const distributorId = useDistributorId();

  return useQuery({
    queryKey: [
      "get",
      "availabilities",
      activity?.mappedId,
      limit,
      locale,
      startsAfter,
      untilEndOfDay,
    ],
    queryFn: () =>
      getAvailabilities(activity, {
        limit,
        locale,
        startsAfter,
        untilEndOfDay,
        distributorId,
      }),
    staleTime: 1000 * 60 * 5,
    enabled,
  });
};
