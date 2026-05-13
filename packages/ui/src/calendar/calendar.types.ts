export type CalendarDateValue = string;

export type CalendarAvailability =
  | boolean
  | {
      available?: boolean;
      capacity?: number | string | null;
      disabled?: boolean;
    }
  | null
  | undefined;

export type CalendarAvailabilityMap = Record<
  CalendarDateValue,
  CalendarAvailability
>;

export type CalendarWeekStartsOn = 0 | 1;

export type CalendarLocale = {
  months?: readonly string[];
  weekdays?: readonly string[];
};

export type CalendarDayModel = {
  date: CalendarDateValue;
  day: number;
  isAvailable: boolean;
  isDisabled: boolean;
  isSelected: boolean;
  isToday: boolean;
};

export type CalendarMonthModel = {
  key: string;
  label: string;
  month: number;
  weekdayLabels: string[];
  weeks: Array<Array<CalendarDayModel | null>>;
  year: number;
};

export type BaseCalendarProps = {
  availableDates?: CalendarAvailabilityMap;
  className?: string;
  disabled?: boolean;
  disablePastDates?: boolean;
  initialMonth?: Date | CalendarDateValue;
  locale?: CalendarLocale;
  maxDate?: Date | CalendarDateValue;
  minDate?: Date | CalendarDateValue;
  months?: number;
  onSelectDate?: (date: CalendarDateValue) => void;
  onSelectDay?: (date: CalendarDateValue) => void;
  selectedDate?: CalendarDateValue;
  selectedDay?: CalendarDateValue;
  weekStartsOn?: CalendarWeekStartsOn;
};

export const calendarComponentId = "sa-calendar";
