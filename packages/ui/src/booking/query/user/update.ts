import { axiosInstanceAuthPatch } from "../axios";

export const updateUser = async (id: string, data: object, token: string) => {
  return axiosInstanceAuthPatch(token)
    .patch(`/users/${id}`, data)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("error ===", err);
    });
};
