import { useEffect, useMemo, useState } from "react";
import type { ViewProps } from "react-native";
import { ChevronLeft, ChevronRight } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";
import { dsMobileTokens } from "../tokens/mobile";
import { fontFamilies } from "../tokens/typography";
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
  const tokens = dsMobileTokens.components.calendar;

  if (!day) {
    return <View style={{ height: tokens.daySize, width: tokens.daySize }} />;
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
      style={{
        alignItems: "center",
        borderColor: "transparent",
        borderWidth: 1,
        justifyContent: "center",
        opacity: day.isDisabled ? 0.4 : 1,
        height: tokens.daySize,
        width: tokens.daySize,
        borderRadius: tokens.dayRadius,
        backgroundColor: day.isSelected
          ? tokens.selectedBackground
          : day.isToday && !day.isSelected
            ? tokens.todayBackground
            : "transparent",
      }}
      onPress={() => onSelect(day)}
    >
      <Text
        style={{
          color: day.isSelected
            ? tokens.selectedText
            : day.isToday && !day.isSelected
              ? tokens.todayText
              : day.isDisabled || day.isOutside
                ? tokens.mutedText
                : tokens.text,
          fontFamily: fontFamilies.sans.native.regular,
          fontSize: 14,
          lineHeight: 23,
        }}
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
    <View style={{ marginTop: 16 }}>
      <View style={{ flexDirection: "row", marginBottom: 8 }}>
        {month.weekdayLabels.map((weekday) => (
          <View
            key={`${month.key}-${weekday}`}
            style={{
              alignItems: "center",
              flex: 1,
              height: 32,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: dsMobileTokens.components.calendar.mutedText,
                fontFamily: fontFamilies.sans.native.regular,
                fontSize: 12,
                lineHeight: 20,
              }}
            >
              {weekday}
            </Text>
          </View>
        ))}
      </View>
      {month.weeks.map((week, weekIndex) => (
        <View
          key={`${month.key}-week-${weekIndex}`}
          style={{ flexDirection: "row", marginBottom: 4 }}
        >
          {week.map((day, dayIndex) => (
            <View
              key={day?.date ?? `${month.key}-empty-${weekIndex}-${dayIndex}`}
              style={{ alignItems: "center", flex: 1, justifyContent: "center" }}
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
  className: _className,
  style,
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
  const tokens = dsMobileTokens.components.calendar;
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
    <View style={[{ padding: 12, width: "100%" }, style]} {...props}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 4,
        }}
      >
        {!hideNavigation && (
          <Pressable
            accessibilityLabel="Previous month"
            accessibilityRole="button"
            accessibilityState={{ disabled: !canGoPrevious }}
            style={{
              alignItems: "center",
              backgroundColor: "transparent",
              borderColor: tokens.navigationBorder,
              borderRadius: tokens.dayRadius,
              borderWidth: 1,
              height: 28,
              justifyContent: "center",
              left: 4,
              opacity: canGoPrevious ? 1 : 0.3,
              position: "absolute",
              width: 28,
            }}
            disabled={!canGoPrevious}
            onPress={() => setActiveMonth(addMonths(activeMonth, -1))}
          >
            <ChevronLeft color={tokens.navigationIcon} size={16} />
          </Pressable>
        )}
        <Text
          style={{
            color: "#000000",
            fontFamily: fontFamilies.sans.native.medium,
            fontSize: 14,
            lineHeight: 23,
          }}
        >
          {currentMonth?.label}
        </Text>
        {!hideNavigation && (
          <Pressable
            accessibilityLabel="Next month"
            accessibilityRole="button"
            accessibilityState={{ disabled: !canGoNext }}
            style={{
              alignItems: "center",
              backgroundColor: "transparent",
              borderColor: tokens.navigationBorder,
              borderRadius: tokens.dayRadius,
              borderWidth: 1,
              height: 28,
              justifyContent: "center",
              opacity: canGoNext ? 1 : 0.3,
              position: "absolute",
              right: 4,
              width: 28,
            }}
            disabled={!canGoNext}
            onPress={() => setActiveMonth(addMonths(activeMonth, 1))}
          >
            <ChevronRight color={tokens.navigationIcon} size={16} />
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
