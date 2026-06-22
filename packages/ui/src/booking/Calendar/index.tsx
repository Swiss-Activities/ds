import dayjs from "dayjs";
import type { CalendarProps } from "react-calendar";
import dynamic from "../utils/dynamic";
import { I } from "../components/I";
import { useSearchStore } from "../store/search";
import { cn } from "../utils/css/cn";
import { DateService } from "../utils/dates/DateService";
import { useI18n } from "../utils/i18n/useI18n";

export const CLASS_ARROW =
  "w-full h-full flex items-center justify-center text-xs flex h-12 w-12 items-center justify-center";

const DynamicCalendar = dynamic(() =>
  // @ts-ignore
  import("react-calendar").then((mod) => mod.Calendar, {
    ssr: false,
  })
);

export const Calendar = () => {
  const { locale } = useI18n();
  const [date, setDate] = useSearchStore((state) => [
    state.date,
    state.setDate,
  ]);

  const tileDisabled: CalendarProps["tileDisabled"] = ({ date, view }) => {
    if (view === "month") {
      return (
        date < dayjs().toDate() &&
        dayjs(dayjs(date).toDate().toDateString()).toDate() <
          dayjs(dayjs().toDate().toDateString()).toDate()
      );
    }
    return false;
  };

  return (
    <DynamicCalendar
      locale={locale.replace("_", "-")}
      className={cn(
        `booking !mt-0 !rounded-lg !border !border-solid !border-gray-200`
      )}
      value={date}
      prev2Label={null}
      prevLabel={
        <div className={cn(CLASS_ARROW)} role="button">
          <I icon="arrow-left" />
        </div>
      }
      next2Label={null}
      nextLabel={
        <div className={CLASS_ARROW} role="button">
          <I icon="arrow-right" />
        </div>
      }
      minDetail="month"
      calendarType="ISO 8601"
      onChange={(
        newDate: Parameters<NonNullable<CalendarProps["onChange"]>>[0]
      ) => {
        setDate(
          DateService.formatDate(dayjs(newDate as Date).toDate()) === date
            ? null
            : DateService.formatDate(dayjs(newDate as Date).toDate())
        );
      }}
      formatShortWeekday={(_, date) => DateService.formatWeekday(date, "d")}
      tileDisabled={tileDisabled}
      tileClassName={({ date: dateInner }) => {
        let base = "flex flex-col font-semibold !text-sm !leading-normal";
        let cls = "";

        if (
          date &&
          DateService.formatDate(dayjs(dateInner).toDate()) ===
            DateService.formatDate(dayjs(date).toDate())
        ) {
          cls = "!text-white !bg-primary hover:!bg-dark";
        } else if (!(dateInner < dayjs().toDate())) {
          cls = "!bg-emerald-200 hover:!bg-emerald-300";
        }
        return `${base} ${cls}`;
      }}
    />
  );
};
