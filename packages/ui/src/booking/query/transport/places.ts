import { useQuery } from "@tanstack/react-query";
import { TransportPlace } from "../../types/transport";
import { axiosApiInstanceWithCsrf, axiosInstanceProd } from "../axios";

interface GetPlacesParams {
  search?: string;
  coordinates?: {
    longitude: number;
    latitude: number;
  };
}

export const getPlaces = async (token: string, params?: GetPlacesParams) => {
  let requestBody = {};

  if (params?.search) {
    requestBody = {
      placeInput: {
        name: params.search,
      },
    };
  } else if (params?.coordinates) {
    requestBody = {
      placeInput: {
        geoPosition: {
          longitude: params.coordinates.longitude,
          latitude: params.coordinates.latitude,
        },
      },
    };
  }

  return axiosInstanceProd
    .post<{ places: TransportPlace[] }>(`/v1/transport/places`, requestBody, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response.data.places);
};

const getPlacesApi = async (params?: GetPlacesParams) => {
  return axiosApiInstanceWithCsrf
    .post<{ places: TransportPlace[] }>(`/transport/places/`, params)
    .then((response) => response.data.places);
};

export const useGetPlaces = (params?: GetPlacesParams, enabled = true) => {
  return useQuery({
    queryKey: ["get", "places", params],
    queryFn: () => getPlacesApi(params),
    staleTime: 1000 * 60 * 5,
    enabled,
  });
};
