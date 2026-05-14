export type CalendarDateValue = string;

export type CalendarAvailability =
  | boolean
  | {
      available?: boolean;
      capacity?: number | string | null;
      disabled?: boolean;
      price?: number | string | null;
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

export type CalendarVariant = 'default' | 'availability';

export type CalendarDayModel = {
  availability: CalendarAvailability;
  date: CalendarDateValue;
  day: number;
  isAvailable: boolean;
  isDisabled: boolean;
  isOutside: boolean;
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
  hideNavigation?: boolean;
  initialMonth?: Date | CalendarDateValue;
  locale?: CalendarLocale;
  maxDate?: Date | CalendarDateValue;
  minDate?: Date | CalendarDateValue;
  months?: number;
  onSelectDate?: (date: CalendarDateValue) => void;
  onSelectDay?: (date: CalendarDateValue) => void;
  onVisibleMonthChange?: (month: Date) => void;
  selectedDate?: CalendarDateValue;
  selectedDay?: CalendarDateValue;
  showOutsideDays?: boolean;
  variant?: CalendarVariant;
  visibleMonth?: Date | CalendarDateValue;
  weekStartsOn?: CalendarWeekStartsOn;
};

export const calendarComponentId = 'sa-calendar';
