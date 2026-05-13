import { useEffect, useMemo, useState } from "react";
import type { ViewProps } from "react-native";
import { ChevronLeft, ChevronRight } from "lucide-react-native";
import { Pressable, View } from "react-native-css/components";
import { Text } from "../text/text.native";
import { grayColors } from "../tokens/colors";
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

export type CalendarProps = BaseCalendarProps & Omit<ViewProps, "onLayout">;

function CalendarDay({
  day,
  onSelect,
}: {
  day: CalendarDayModel | null;
  onSelect: (day: CalendarDayModel) => void;
}) {
  if (!day) {
    return <View className="h-8 w-8" />;
  }

  return (
    <Pressable
      accessibilityLabel={day.date}
      accessibilityRole="button"
      accessibilityState={{
        disabled: day.isDisabled,
        selected: day.isSelected,
      }}
      disabled={day.isDisabled}
      className={cn(
        "h-8 w-8 items-center justify-center rounded-md border border-transparent",
        day.isDisabled ? "opacity-40" : "opacity-100",
        day.isToday && !day.isSelected && "bg-gray-100",
        day.isSelected && "bg-blue opacity-100",
      )}
      onPress={() => onSelect(day)}
    >
      <Text
        size="sm"
        className={cn(
          "font-normal text-gray-700",
          (day.isDisabled || day.isOutside) && "text-gray-500",
          day.isToday && !day.isSelected && "text-gray-900",
          day.isSelected && "text-white",
        )}
      >
        {day.day}
      </Text>
    </Pressable>
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
    <View className="mt-4">
      <View className="mb-2 flex-row">
        {month.weekdayLabels.map((weekday) => (
          <View
            className="h-8 flex-1 items-center justify-center"
            key={`${month.key}-${weekday}`}
          >
            <Text size="xs" gray className="font-normal">
              {weekday}
            </Text>
          </View>
        ))}
      </View>
      {month.weeks.map((week, weekIndex) => (
        <View className="mb-1 flex-row" key={`${month.key}-week-${weekIndex}`}>
          {week.map((day, dayIndex) => (
            <View
              className="flex-1 items-center justify-center"
              key={day?.date ?? `${month.key}-empty-${weekIndex}-${dayIndex}`}
            >
              <CalendarDay day={day} onSelect={onSelect} />
            </View>
          ))}
        </View>
      ))}
    </View>
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
    <View className={cn("w-full p-3", className)} {...props}>
      <View className="relative items-center justify-center pt-1">
        {!hideNavigation && (
          <Pressable
            accessibilityLabel="Previous month"
            accessibilityRole="button"
            accessibilityState={{ disabled: !canGoPrevious }}
            className={cn(
              "absolute left-1 h-7 w-7 items-center justify-center rounded-md border border-gray-200 bg-transparent",
              !canGoPrevious && "opacity-30",
            )}
            disabled={!canGoPrevious}
            onPress={() => setActiveMonth(addMonths(activeMonth, -1))}
          >
            <ChevronLeft color={grayColors["900"]} size={16} />
          </Pressable>
        )}
        <Text size="sm" className="font-medium text-black">
          {currentMonth?.label}
        </Text>
        {!hideNavigation && (
          <Pressable
            accessibilityLabel="Next month"
            accessibilityRole="button"
            accessibilityState={{ disabled: !canGoNext }}
            className={cn(
              "absolute right-1 h-7 w-7 items-center justify-center rounded-md border border-gray-200 bg-transparent",
              !canGoNext && "opacity-30",
            )}
            disabled={!canGoNext}
            onPress={() => setActiveMonth(addMonths(activeMonth, 1))}
          >
            <ChevronRight color={grayColors["900"]} size={16} />
          </Pressable>
        )}
      </View>

      {currentMonth && (
        <CalendarMonth month={currentMonth} onSelect={selectDay} />
      )}
    </View>
  );
}

(Calendar as { saComponent?: string }).saComponent = calendarComponentId;
