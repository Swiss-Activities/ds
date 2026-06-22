import React from "react";
import { useShallow } from "zustand/react/shallow";
import { useTransportStoreLocal } from "../../store";
import { TimePicker as TimePickerComponent } from "../../../ui/TimePicker";

export const TimePicker = () => {
  const { time, setTime } = useTransportStoreLocal(
    useShallow((state) => ({ time: state.time, setTime: state.setTime }))
  );

  const setDateAdapter = (d: Date | undefined) => {
    const next = d ?? new Date();
    setTime(next);
    return next;
  };

  return <TimePickerComponent date={time} setDate={setDateAdapter} />;
};
