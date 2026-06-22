import { useEffect, useState, useMemo } from "react";
import { VisuallyHidden } from "@silk-hq/components";
import dayjs from "dayjs";
import { RefreshCwIcon } from "lucide-react";
import { useShallow } from "zustand/react/shallow";
import { useTransportStoreLocal } from "../../store";
import { Button } from "@swiss-activities/ui";
import { Text } from "@swiss-activities/ui";
import { Button as UiButton } from "@swiss-activities/ui";
import { SegmentedControl } from "@swiss-activities/ui";
import { Sheet as SheetAuto } from "@swiss-activities/ui";
import { WheelPicker, WheelPickerColumn } from "../../../ui/WheelPicker";
import { useI18n } from "../../../utils/i18n/useI18n";
import { useDataLayer } from "../../../utils/thirdParty/dataLayerSend";

type SettingsSheetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const SettingsSheet = ({ open, onOpenChange }: SettingsSheetProps) => {
  const { dataLayer } = useDataLayer();
  const { t, locale } = useI18n();

  const {
    calendarDate,
    setCalendarDate,
    time,
    setTime,
    direction,
    setDirection,
    resetDateTime,
  } = useTransportStoreLocal(
    useShallow((state) => ({
      calendarDate: state.calendarDate,
      setCalendarDate: state.setCalendarDate,
      time: state.time,
      setTime: state.setTime,
      direction: state.direction,
      setDirection: state.setDirection,
      resetDateTime: state.resetDateTime,
    }))
  );

  const isDateTimeInFuture = useMemo(() => {
    const combinedDateTime = new Date(calendarDate);
    combinedDateTime.setHours(time.getHours(), time.getMinutes(), 0, 0);
    const now = new Date();
    now.setSeconds(0, 0);
    return combinedDateTime.getTime() > now.getTime() + 60000;
  }, [calendarDate, time]);

  const [tempDate, setTempDate] = useState(calendarDate);
  const [tempHour, setTempHour] = useState(time.getHours());
  const [tempMinute, setTempMinute] = useState(
    Math.round(time.getMinutes() / 5) * 5
  );
  const [tempDirection, setTempDirection] = useState(direction);

  useEffect(() => {
    if (open) {
      setTempDate(calendarDate);
      setTempHour(time.getHours());
      setTempMinute(Math.round(time.getMinutes() / 5) * 5);
      setTempDirection(direction);
    }
  }, [open, calendarDate, time, direction]);

  const generateDayItems = () => {
    const items: { value: string; label: string }[] = [];
    const today = dayjs().startOf("day");

    for (let i = 0; i < 90; i++) {
      const date = today.add(i, "day");
      const dateStr = date.format("YYYY-MM-DD");
      let label: string;

      if (i === 0) {
        label = t("general.today");
      } else {
        const dayName = new Intl.DateTimeFormat(locale.replace("_", "-"), {
          weekday: "short",
        }).format(date.toDate());
        const dayNum = date.date();
        const monthName = new Intl.DateTimeFormat(locale.replace("_", "-"), {
          month: "short",
        }).format(date.toDate());
        label = `${dayName} ${dayNum} ${monthName}`;
      }

      items.push({ value: dateStr, label });
    }

    return items;
  };

  const generateHourItems = () => {
    const items: { value: number; label: string }[] = [];
    for (let i = 0; i < 24; i++) {
      items.push({ value: i, label: i.toString().padStart(2, "0") });
    }
    return items;
  };

  const generateMinuteItems = () => {
    const items: { value: number; label: string }[] = [];
    for (let i = 0; i < 60; i += 5) {
      items.push({ value: i, label: i.toString().padStart(2, "0") });
    }
    return items;
  };

  const dayItems = generateDayItems();
  const hourItems = generateHourItems();
  const minuteItems = generateMinuteItems();

  const selectedDateStr = dayjs(tempDate).format("YYYY-MM-DD");

  const handleApply = () => {
    const newDate = new Date(tempDate);
    newDate.setHours(0, 0, 0, 0);
    setCalendarDate(newDate);

    const newTime = new Date();
    newTime.setHours(tempHour, tempMinute, 0, 0);
    setTime(newTime);

    setDirection(tempDirection);
    onOpenChange(false);

    dataLayer({
      data: {
        event: "transport_select_settings",
        selected_date: newDate.toISOString().split("T")[0],
        selected_time: `${String(tempHour).padStart(2, "0")}:${String(tempMinute).padStart(2, "0")}`,
        transport_direction: tempDirection,
      },
      noActivities: true,
      timeout: 0,
    });
  };

  return (
    <SheetAuto.Root presented={open} onPresentedChange={onOpenChange}>
      <SheetAuto.Portal>
        <SheetAuto.View contentPlacement="bottom">
          <SheetAuto.Backdrop />
          <SheetAuto.CloseButton />
          <SheetAuto.Content className="flex h-[414px] flex-col overflow-hidden bg-white">
            <div className="px-5 pb-3 pt-2">
              <SheetAuto.Handle />
            </div>

            <VisuallyHidden.Root asChild>
              <SheetAuto.Title>{t("Transport.travelDate")}</SheetAuto.Title>
            </VisuallyHidden.Root>

            <div className="px-4 pb-4">
              <div className="flex items-center justify-between">
                <Text size="md2" as="span">
                  {t("Transport.travelDate")}
                </Text>
                {isDateTimeInFuture && (
                  <UiButton
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      resetDateTime();
                      setTempDate(new Date());
                      const now = new Date();
                      setTempHour(now.getHours());
                      setTempMinute(Math.round(now.getMinutes() / 5) * 5);
                    }}
                  >
                    <RefreshCwIcon className="size-4" />
                  </UiButton>
                )}
              </div>
              <SegmentedControl<"from" | "to">
                value={tempDirection}
                onChange={setTempDirection}
                options={[
                  { value: "from", label: t("Transport.departure") },
                  { value: "to", label: t("Transport.arrival") },
                ]}
                variant="rounded"
                className="mt-3 w-full [&_button]:flex-1"
              />
            </div>

            <WheelPicker className="px-4">
              <WheelPickerColumn
                items={dayItems}
                value={selectedDateStr}
                onChange={(value) => {
                  const newDate = dayjs(`${value}T00:00:00`).toDate();
                  setTempDate(newDate);
                }}
              />
              <WheelPickerColumn
                items={hourItems}
                value={tempHour}
                onChange={(value) => setTempHour(value as number)}
              />
              <WheelPickerColumn
                items={minuteItems}
                value={tempMinute}
                onChange={(value) => setTempMinute(value as number)}
              />
            </WheelPicker>

            <div className="p-4 pt-6">
              <Button type="primary" onClick={handleApply} className="w-full">
                {t("Transport.confirmTravelDate")}
              </Button>
            </div>
          </SheetAuto.Content>
        </SheetAuto.View>
      </SheetAuto.Portal>
    </SheetAuto.Root>
  );
};
