"use client";

import { useEffect, useMemo, useState, type HTMLAttributes } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Text } from "../text";
import { cn } from "../utils/cn";
import {
  addMonths,
  getCalendarMonths,
  getMonthStart,
  isSameCalendarMonth,
  toLocalDate,
} from "./calendar.shared";
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
  onSelect: (day: CalendarDayModel) => void;
}) {
  if (!day) {
    return <span aria-hidden="true" className="h-8 w-8" />;
  }

  return (
    <button
      aria-current={day.isToday ? "date" : undefined}
      aria-label={day.date}
      aria-pressed={day.isSelected}
      className={cn(
        "flex h-8 w-8 items-center justify-center rounded-md border border-transparent p-0 text-sm font-normal transition hover:no-underline",
        day.isDisabled
          ? "cursor-not-allowed text-gray-500 opacity-50"
          : "cursor-pointer text-gray-700 hover:bg-gray-100",
        day.isOutside && "text-gray-500 opacity-50",
        day.isToday && !day.isSelected && "bg-gray-100 text-gray-900",
        day.isSelected && "!bg-blue !text-gray-50 opacity-100",
      )}
      disabled={day.isDisabled}
      type="button"
      onClick={() => onSelect(day)}
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
  onSelect: (day: CalendarDayModel) => void;
}) {
  return (
    <section className="space-y-1">
      <div role="grid" aria-label={month.label} className="space-y-1">
        <div role="row" className="grid grid-cols-7 gap-1">
          {month.weekdayLabels.map((weekday) => (
            <Text
              as="span"
              size="xs"
              gray
              className="flex h-8 w-8 items-center justify-center rounded-md text-center font-normal"
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
  hideNavigation = false,
  initialMonth,
  locale,
  maxDate,
  minDate,
  months = 12,
  onSelectDate,
  onSelectDay,
  onVisibleMonthChange,
  selectedDate,
  selectedDay,
  showOutsideDays = true,
  visibleMonth,
  weekStartsOn = 1,
  ...props
}: CalendarProps) {
  const startMonth = useMemo(
    () => getMonthStart(toLocalDate(initialMonth)),
    [initialMonth],
  );
  const [internalVisibleMonth, setInternalVisibleMonth] = useState(startMonth);
  const controlledVisibleMonth = visibleMonth
    ? getMonthStart(toLocalDate(visibleMonth))
    : undefined;
  const activeMonth = controlledVisibleMonth ?? internalVisibleMonth;
  const maxVisibleMonth = addMonths(startMonth, Math.max(1, months) - 1);

  useEffect(() => {
    if (!visibleMonth) {
      setInternalVisibleMonth(startMonth);
    }
  }, [startMonth, visibleMonth]);

  const setActiveMonth = (month: Date) => {
    const nextMonth = getMonthStart(month);

    if (!visibleMonth) {
      setInternalVisibleMonth(nextMonth);
    }

    onVisibleMonthChange?.(nextMonth);
  };

  const calendarMonths = useMemo(
    () =>
      getCalendarMonths({
        availableDates,
        disabled,
        disablePastDates,
        initialMonth: activeMonth,
        locale,
        maxDate,
        minDate,
        months: 1,
        selectedDate,
        selectedDay,
        showOutsideDays,
        weekStartsOn,
      }),
    [
      activeMonth,
      availableDates,
      disabled,
      disablePastDates,
      locale,
      maxDate,
      minDate,
      selectedDate,
      selectedDay,
      showOutsideDays,
      weekStartsOn,
    ],
  );
  const handleSelect = onSelectDate ?? onSelectDay ?? (() => {});
  const currentMonth = calendarMonths[0];
  const canGoPrevious = !isSameCalendarMonth(activeMonth, startMonth);
  const canGoNext = !isSameCalendarMonth(activeMonth, maxVisibleMonth);

  const selectDay = (day: CalendarDayModel) => {
    if (day.isOutside) {
      setActiveMonth(toLocalDate(day.date));
    }

    handleSelect(day.date);
  };

  return (
    <div {...props} className={cn("w-full max-w-[360px] p-3", className)}>
      <div className="relative flex items-center justify-center pt-1">
        {!hideNavigation && (
          <button
            aria-label="Previous month"
            className={cn(
              "absolute start-1 flex h-7 w-7 items-center justify-center rounded-md border border-gray-200 bg-transparent p-0 opacity-80 transition hover:opacity-100",
              !canGoPrevious &&
                "cursor-not-allowed opacity-30 hover:opacity-30",
            )}
            disabled={!canGoPrevious}
            type="button"
            onClick={() => setActiveMonth(addMonths(activeMonth, -1))}
          >
            <ChevronLeft aria-hidden="true" className="h-4 w-4" />
          </button>
        )}
        <Text as="h3" size="sm" className="font-medium text-black">
          {currentMonth?.label}
        </Text>
        {!hideNavigation && (
          <button
            aria-label="Next month"
            className={cn(
              "absolute end-1 flex h-7 w-7 items-center justify-center rounded-md border border-gray-200 bg-transparent p-0 opacity-80 transition hover:opacity-100",
              !canGoNext && "cursor-not-allowed opacity-30 hover:opacity-30",
            )}
            disabled={!canGoNext}
            type="button"
            onClick={() => setActiveMonth(addMonths(activeMonth, 1))}
          >
            <ChevronRight aria-hidden="true" className="h-4 w-4" />
          </button>
        )}
      </div>

      {currentMonth && (
        <CalendarMonth month={currentMonth} onSelect={selectDay} />
      )}
    </div>
  );
}

(Calendar as { saComponent?: string }).saComponent = calendarComponentId;
