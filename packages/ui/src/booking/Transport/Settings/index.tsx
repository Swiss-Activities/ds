import React, { useState } from "react";
import { ClockIcon, RefreshCwIcon } from "lucide-react";
import { useShallow } from "zustand/react/shallow";
import { DateTimePicker } from "./DateTimePicker";
import { FromTo } from "./FromTo";
import { SettingsSheet } from "./SettingsSheet";
import { useTransportStoreLocal } from "../store";
import { Button } from "@swiss-activities/ui";
import { TimeInput } from "../../ui/TimeInput";
import { dataLayerSend } from "../../utils/thirdParty/dataLayerSend";

export const Settings = () => {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [flyoutOpen, setFlyoutOpen] = useState(false);
  const { time, setTime, resetDateTime } = useTransportStoreLocal(
    useShallow((state) => ({
      time: state.time,
      setTime: state.setTime,
      resetDateTime: state.resetDateTime,
    }))
  );

  const handleOpenSheet = () => {
    setSheetOpen(true);
  };

  return (
    <>
      <div className="relative hidden flex-wrap gap-x-4 gap-y-2 border-b-0 border-e-0 border-s-0 border-t border-solid border-gray-200 px-6 py-3 lg:flex">
        <Button
          variant="ghost"
          onClick={handleOpenSheet}
          className="absolute inset-0 z-10 h-full cursor-pointer opacity-0 lg:hidden"
          aria-label="Open settings"
        />
        <div className="contents lg:hidden">
          <DateTimePicker />
          <FromTo />
        </div>
        <div className="hidden items-center gap-4 lg:flex">
          <DateTimePicker open={flyoutOpen} onOpenChange={setFlyoutOpen} />
          <span className="flex items-center">
            <ClockIcon className="size-4" />
            <TimeInput
              value={time}
              onChange={(d) => {
                setTime(d);
                dataLayerSend({
                  data: {
                    event: "transport_select_time",
                    selected_time: `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`,
                  },
                  noActivities: true,
                  timeout: 0,
                });
              }}
              variant="plain"
            />
          </span>
          <FromTo />
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={resetDateTime}
          className="absolute bottom-0 end-0 z-20 -me-1 ms-auto h-14 w-16 lg:relative lg:h-auto lg:w-auto"
        >
          <RefreshCwIcon className="size-4" />
        </Button>
      </div>

      <SettingsSheet open={sheetOpen} onOpenChange={setSheetOpen} />
    </>
  );
};
