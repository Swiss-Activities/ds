import { axiosInstanceAuth } from "../axios";

export const getUser = async (id: string, token: string) => {
  return axiosInstanceAuth(token)
    .get(`/users/${id}/userdata`, {
      params: { t: Date.now() },
      timeout: 120000,
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      // console.log("error ===", err);
    });
};
