import { useEffect } from "react";
import { useShallow } from "zustand/react/shallow";
import { Chats } from "../Chats";
import { Messages } from "../Messages";
import { useChatStore } from "../store";
import { useMessagesStore } from "../../store/messages";

export const Content = () => {
  const isChatsOpen = useMessagesStore((state) => state.isChatsOpen);
  const { setType } = useChatStore(useShallow((state) => ({ setType: state.setType })));

  useEffect(() => {
    return () => {
      setType("default");
    };
  }, []);

  return <div className="py-8">{isChatsOpen ? <Chats /> : <Messages />}</div>;
};
