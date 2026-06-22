import { useEffect, useRef } from "react";
import { useDrawerStore } from "../store/drawer";
import { useWidget } from "../utils/env/useWidget";

export const WidgetCloseListener = () => {
  const isWidget = useWidget();
  const openDrawer = useDrawerStore((state) => state.isOpen);
  const previousOpenDrawerLengthRef = useRef(openDrawer.length);

  useEffect(() => {
    if (!isWidget) return;

    if (previousOpenDrawerLengthRef.current > 0 && openDrawer.length === 0) {
      parent.postMessage(
        {
          close: true,
        },
        "*"
      );
    }

    previousOpenDrawerLengthRef.current = openDrawer.length;
  }, [isWidget, openDrawer]);

  return null;
};
