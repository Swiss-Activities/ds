import { useShallow } from "zustand/react/shallow";
import { Inner } from "./Inner";
import { Input } from "./Input";
import { useChatStore } from "./store";
import { Drawer } from "../components/Drawer";
import { useMessagesStore } from "../store/messages";

export const Chat = () => {
  const type = useChatStore((state) => state.type);
  const setCurrentConversation = useMessagesStore(
    useShallow((state) => state.setCurrentConversation)
  );

  const handleClose = () => {
    if (type === "review") {
      setCurrentConversation(null);
    }
  };

  return (
    <Drawer
      ident="chat"
      desktopDrawer="right"
      flush
      bottom={<Input />}
      classNameInner="scrollbar-chat"
      onClose={handleClose}
    >
      <Inner />
    </Drawer>
  );
};
