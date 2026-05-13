import type {
  BaseCalendarProps,
  CalendarAvailability,
  CalendarDayModel,
  CalendarLocale,
  CalendarMonthModel,
  CalendarWeekStartsOn,
} from "./calendar.types";

const defaultMonthLabels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

const defaultWeekdayLabels = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
] as const;

const isoDatePattern = /^(\d{4})-(\d{2})-(\d{2})$/;

function padDatePart(value: number) {
  return String(value).padStart(2, "0");
}

function toLocalDate(value?: Date | string) {
  if (!value) return new Date();

  if (value instanceof Date) {
    return new Date(value.getFullYear(), value.getMonth(), value.getDate());
  }

  const isoParts = isoDatePattern.exec(value);

  if (isoParts) {
    return new Date(
      Number(isoParts[1]),
      Number(isoParts[2]) - 1,
      Number(isoParts[3]),
    );
  }

  const date = new Date(value);
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function toDateKey(date: Date) {
  return `${date.getFullYear()}-${padDatePart(date.getMonth() + 1)}-${padDatePart(
    date.getDate(),
  )}`;
}

function getMonthStart(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function addMonths(date: Date, months: number) {
  return new Date(date.getFullYear(), date.getMonth() + months, 1);
}

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function rotateWeekdayLabels(
  labels: readonly string[],
  weekStartsOn: CalendarWeekStartsOn,
) {
  return [...labels.slice(weekStartsOn), ...labels.slice(0, weekStartsOn)];
}

function resolveAvailability(availability: CalendarAvailability) {
  if (availability == null) return false;
  if (typeof availability === "boolean") return availability;
  if (availability.disabled) return false;
  if (availability.available === false) return false;
  if (availability.capacity === "none") return false;

  return true;
}

function isDateDisabled({
  availability,
  availabilityRequired,
  dateKey,
  disabled,
  disablePastDates,
  maxDateKey,
  minDateKey,
  todayKey,
}: {
  availability: CalendarAvailability;
  availabilityRequired: boolean;
  dateKey: string;
  disabled: boolean;
  disablePastDates: boolean;
  maxDateKey?: string;
  minDateKey?: string;
  todayKey: string;
}) {
  if (disabled) return true;
  if (disablePastDates && dateKey < todayKey) return true;
  if (minDateKey && dateKey < minDateKey) return true;
  if (maxDateKey && dateKey > maxDateKey) return true;
  if (availabilityRequired && !resolveAvailability(availability)) return true;

  return false;
}

function buildCalendarMonth({
  availabilityRequired,
  locale,
  monthDate,
  options,
  selectedDate,
  todayKey,
  weekStartsOn,
}: {
  availabilityRequired: boolean;
  locale?: CalendarLocale;
  monthDate: Date;
  options: Required<Pick<BaseCalendarProps, "disabled" | "disablePastDates">> &
    Pick<BaseCalendarProps, "availableDates" | "maxDate" | "minDate">;
  selectedDate?: string;
  todayKey: string;
  weekStartsOn: CalendarWeekStartsOn;
}): CalendarMonthModel {
  const year = monthDate.getFullYear();
  const month = monthDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const leadingDays = (firstDay.getDay() - weekStartsOn + 7) % 7;
  const daysInMonth = getDaysInMonth(year, month);
  const totalCells = Math.ceil((leadingDays + daysInMonth) / 7) * 7;
  const maxDateKey = options.maxDate
    ? toDateKey(toLocalDate(options.maxDate))
    : undefined;
  const minDateKey = options.minDate
    ? toDateKey(toLocalDate(options.minDate))
    : undefined;
  const monthLabels = locale?.months ?? defaultMonthLabels;
  const weekdayLabels = rotateWeekdayLabels(
    locale?.weekdays ?? defaultWeekdayLabels,
    weekStartsOn,
  );
  const days: Array<CalendarDayModel | null> = [];

  for (let cellIndex = 0; cellIndex < totalCells; cellIndex += 1) {
    const day = cellIndex - leadingDays + 1;

    if (day < 1 || day > daysInMonth) {
      days.push(null);
      continue;
    }

    const date = new Date(year, month, day);
    const dateKey = toDateKey(date);
    const availability = options.availableDates?.[dateKey];
    const isDisabled = isDateDisabled({
      availability,
      availabilityRequired,
      dateKey,
      disabled: options.disabled,
      disablePastDates: options.disablePastDates,
      maxDateKey,
      minDateKey,
      todayKey,
    });

    days.push({
      date: dateKey,
      day,
      isAvailable: !availabilityRequired || resolveAvailability(availability),
      isDisabled,
      isSelected: selectedDate === dateKey,
      isToday: todayKey === dateKey,
    });
  }

  const weeks: CalendarMonthModel["weeks"] = [];

  for (let weekIndex = 0; weekIndex < days.length; weekIndex += 7) {
    weeks.push(days.slice(weekIndex, weekIndex + 7));
  }

  return {
    key: `${year}-${padDatePart(month + 1)}`,
    label: `${monthLabels[month] ?? defaultMonthLabels[month]} ${year}`,
    month,
    weekdayLabels,
    weeks,
    year,
  };
}

export function getCalendarMonths({
  availableDates,
  disabled = false,
  disablePastDates = true,
  initialMonth,
  locale,
  maxDate,
  minDate,
  months = 12,
  selectedDate,
  selectedDay,
  weekStartsOn = 1,
}: BaseCalendarProps) {
  const monthCount = Math.max(1, months);
  const start = getMonthStart(toLocalDate(initialMonth));
  const todayKey = toDateKey(toLocalDate());
  const selected = selectedDate ?? selectedDay;
  const availabilityRequired = Boolean(availableDates);

  return Array.from({ length: monthCount }, (_, index) =>
    buildCalendarMonth({
      availabilityRequired,
      locale,
      monthDate: addMonths(start, index),
      options: {
        availableDates,
        disabled,
        disablePastDates,
        maxDate,
        minDate,
      },
      selectedDate: selected,
      todayKey,
      weekStartsOn,
    }),
  );
}
