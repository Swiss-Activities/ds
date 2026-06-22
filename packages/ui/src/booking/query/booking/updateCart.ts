import { useMutation } from "@tanstack/react-query";
import { useShallow } from "zustand/react/shallow";
import { useCartStore } from "../../Cart/store";
import { axiosInstancePatch } from "../axios";

const updateCart = async (cartId: string, data: unknown) => {
  const url = `/carts/${cartId}`;

  return axiosInstancePatch.patch(url, data).then((response) => response.data);
};

export const useUpdateCart = () => {
  const { update } = useCartStore(
    useShallow((state) => ({
      update: state.update,
    }))
  );

  return useMutation({
    mutationKey: ["patch", "carts"],
    mutationFn: async (data: { cartId: string; data: unknown }) => {
      const cart = await updateCart(data.cartId, data.data);
      update(cart);
      return cart;
    },
  });
};
