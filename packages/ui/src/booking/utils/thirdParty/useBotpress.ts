import { useEffect, useRef } from "react";
import { useSearchParams } from "../i18n/navigation";
import { useUser } from "../user/useUser";

export const useBotpress = () => {
  const { user } = useUser();
  const hasInitialised = useRef(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (hasInitialised.current) return;
    if (searchParams?.get("chat")) {
      // useDrawerStore.getState().setOpen("chat");
      hasInitialised.current = true;
    }
  }, [searchParams, user]);
};
