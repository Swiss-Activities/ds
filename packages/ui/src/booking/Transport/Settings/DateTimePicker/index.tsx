import { useMemo } from "react";
import { de, fr, it, enGB } from "date-fns/locale";
import { CalendarDaysIcon } from "lucide-react";
import { useShallow } from "zustand/react/shallow";
import { useTransportStoreLocal } from "../../store";
import { Button } from "@swiss-activities/ui";
import { Calendar } from "../../../ui/Calendar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../../../ui/DropdownMenu";
import { cn } from "../../../utils/css/cn";
import { useI18n } from "../../../utils/i18n/useI18n";

type DateTimePickerProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  displayOnly?: boolean;
  triggerHidden?: boolean;
};

const localeMap: Record<string, typeof de> = {
  de_CH: de,
  fr_CH: fr,
  it_CH: it,
  en_CH: enGB,
};

export const DateTimePicker = ({
  open: controlledOpen,
  onOpenChange,
  displayOnly = false,
  triggerHidden = false,
}: DateTimePickerProps) => {
  const { locale } = useI18n();
  const dateFnsLocale = useMemo(() => localeMap[locale] || enGB, [locale]);

  const { calendarDate, setCalendarDate } = useTransportStoreLocal(
    useShallow((state) => ({
      calendarDate: state.calendarDate,
      setCalendarDate: state.setCalendarDate,
    }))
  );

  const formattedDate = new Intl.DateTimeFormat(locale.replace("_", "-"), {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(calendarDate);

  if (displayOnly) {
    return (
      <span className="flex items-center gap-2">
        <CalendarDaysIcon className="size-4" />
        <span className="text-sm" suppressHydrationWarning>
          {formattedDate}
        </span>
      </span>
    );
  }

  return (
    <DropdownMenu open={controlledOpen} onOpenChange={onOpenChange}>
      <DropdownMenuTrigger asChild>
        <Button
          id="calendar-button"
          variant="transparent"
          size="sm"
          className={cn("-mx-3 gap-4", triggerHidden && "sr-only")}
        >
          <span className="flex items-center gap-2">
            <CalendarDaysIcon className="size-4" />
            <span className="text-sm" suppressHydrationWarning>
              {formattedDate}
            </span>
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-0" align="start">
        <div className="p-6">
          <Calendar
            mode="single"
            selected={calendarDate}
            onSelect={(d) => {
              if (!d) return;
              setCalendarDate(d);
            }}
            disablePast
            locale={dateFnsLocale}
          />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
