import { axiosInstanceAuth } from "../axios";

export const createUser = async (data: object, token: string) => {
  return axiosInstanceAuth(token)
    .post(`/users`, data)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("error ===", err);
    });
};
