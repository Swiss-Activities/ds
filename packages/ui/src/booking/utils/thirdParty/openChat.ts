import { useDrawerStore } from "../../store/drawer";

export const openChat = () => {
  useDrawerStore.getState().setOpen("chat");
};
