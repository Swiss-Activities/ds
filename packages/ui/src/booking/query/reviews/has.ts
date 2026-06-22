import { axiosApiInstanceWithCsrf } from "../axios";

export const hasReview = async (data: { order_id: string }) => {
  return axiosApiInstanceWithCsrf
    .post("/reviews/has/", data)
    .then((response) => response.data);
};
