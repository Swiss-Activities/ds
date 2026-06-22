import { axiosApiInstanceWithCsrf } from "../axios";

export const voteReview = async (reviewId: string, upvoteCount: number) => {
  return axiosApiInstanceWithCsrf
    .post(`/reviews/vote/`, {
      reviewId,
      upvoteCount,
    })
    .then((response) => {
      return response.data;
    });
};
