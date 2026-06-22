import { useState } from "react";
import { useShallow } from "zustand/react/shallow";
import { useTransportStoreLocal } from "../../store";
import { I } from "../../../components/I";
import { Button } from "@swiss-activities/ui";
import { Calendar as CalendarComponent } from "../../../ui/Calendar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../../../ui/DropdownMenu";
import { useI18n } from "../../../utils/i18n/useI18n";
import { dataLayerSend } from "../../../utils/thirdParty/dataLayerSend";

export const Calendar = () => {
  const { locale } = useI18n();
  const [open, setOpen] = useState(false);
  const { calendarDate, setCalendarDate } = useTransportStoreLocal(
    useShallow((state) => ({
      calendarDate: state.calendarDate,
      setCalendarDate: state.setCalendarDate,
    }))
  );

  const formatted = new Intl.DateTimeFormat(locale.replace("_", "-"), {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(calendarDate);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          id="calendar-button"
          variant="transparent"
          size="sm"
          className="-mx-3 gap-2"
        >
          <I icon="calendar-days" />
          <span className="text-sm" suppressHydrationWarning>
            {formatted}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-4">
        <CalendarComponent
          mode="single"
          selected={calendarDate}
          onSelect={(d) => {
            if (!d) return;
            setCalendarDate(d);
            setOpen(false);
            dataLayerSend({
              data: {
                event: "transport_select_date",
                selected_date: d.toISOString().split("T")[0],
              },
              noActivities: true,
              timeout: 0,
            });
          }}
          disablePast
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
