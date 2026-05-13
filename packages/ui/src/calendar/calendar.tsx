"use client";

import { useMemo, type HTMLAttributes } from "react";
import { Text } from "../text";
import { cn } from "../utils/cn";
import { getCalendarMonths } from "./calendar.shared";
import type {
  BaseCalendarProps,
  CalendarDayModel,
  CalendarMonthModel,
} from "./calendar.types";
import { calendarComponentId } from "./calendar.types";

export type CalendarProps = BaseCalendarProps &
  Omit<HTMLAttributes<HTMLDivElement>, "onSelect">;

function CalendarDay({
  day,
  onSelect,
}: {
  day: CalendarDayModel | null;
  onSelect: (date: string) => void;
}) {
  if (!day) {
    return <span aria-hidden="true" className="h-10 w-10" />;
  }

  return (
    <button
      aria-current={day.isToday ? "date" : undefined}
      aria-label={day.date}
      aria-pressed={day.isSelected}
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-md border border-transparent text-sm font-medium transition",
        day.isDisabled
          ? "cursor-not-allowed text-gray-300"
          : "cursor-pointer text-gray-700 hover:bg-light hover:text-primary",
        day.isToday && !day.isSelected && "border-gray-300 text-gray-900",
        day.isSelected &&
          "border-primary bg-primary text-white hover:bg-primary hover:text-white",
      )}
      disabled={day.isDisabled}
      type="button"
      onClick={() => onSelect(day.date)}
    >
      {day.day}
    </button>
  );
}

function CalendarMonth({
  month,
  onSelect,
}: {
  month: CalendarMonthModel;
  onSelect: (date: string) => void;
}) {
  return (
    <section className="border-t border-gray-200 pt-6 first:border-t-0 first:pt-0">
      <Text as="h3" bold className="mb-4 text-gray-900">
        {month.label}
      </Text>
      <div role="grid" aria-label={month.label} className="space-y-2">
        <div role="row" className="grid grid-cols-7 gap-1">
          {month.weekdayLabels.map((weekday) => (
            <Text
              as="span"
              size="xs"
              gray
              className="flex h-8 items-center justify-center text-center font-medium uppercase"
              key={`${month.key}-${weekday}`}
              role="columnheader"
            >
              {weekday}
            </Text>
          ))}
        </div>
        {month.weeks.map((week, weekIndex) => (
          <div
            role="row"
            className="grid grid-cols-7 gap-1"
            key={`${month.key}-week-${weekIndex}`}
          >
            {week.map((day, dayIndex) => (
              <span
                className="flex items-center justify-center"
                key={day?.date ?? `${month.key}-empty-${weekIndex}-${dayIndex}`}
                role="gridcell"
              >
                <CalendarDay day={day} onSelect={onSelect} />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export function Calendar({
  availableDates,
  className,
  disabled = false,
  disablePastDates = true,
  initialMonth,
  locale,
  maxDate,
  minDate,
  months = 12,
  onSelectDate,
  onSelectDay,
  selectedDate,
  selectedDay,
  weekStartsOn = 1,
  ...props
}: CalendarProps) {
  const calendarMonths = useMemo(
    () =>
      getCalendarMonths({
        availableDates,
        disabled,
        disablePastDates,
        initialMonth,
        locale,
        maxDate,
        minDate,
        months,
        selectedDate,
        selectedDay,
        weekStartsOn,
      }),
    [
      availableDates,
      disabled,
      disablePastDates,
      initialMonth,
      locale,
      maxDate,
      minDate,
      months,
      selectedDate,
      selectedDay,
      weekStartsOn,
    ],
  );
  const handleSelect = onSelectDate ?? onSelectDay ?? (() => {});

  return (
    <div
      {...props}
      className={cn("flex w-full max-w-[360px] flex-col gap-6", className)}
    >
      {calendarMonths.map((month) => (
        <CalendarMonth key={month.key} month={month} onSelect={handleSelect} />
      ))}
    </div>
  );
}

(Calendar as { saComponent?: string }).saComponent = calendarComponentId;
