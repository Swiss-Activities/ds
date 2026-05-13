import { useMemo } from "react";
import type { FlatListProps, StyleProp, ViewStyle } from "react-native";
import { FlatList } from "react-native";
import { Pressable, View } from "react-native-css/components";
import { Text } from "../text/text.native";
import { cn } from "../utils/cn";
import { getCalendarMonths } from "./calendar.shared";
import type {
  BaseCalendarProps,
  CalendarDayModel,
  CalendarMonthModel,
} from "./calendar.types";
import { calendarComponentId } from "./calendar.types";

export type CalendarProps = BaseCalendarProps &
  Omit<
    FlatListProps<CalendarMonthModel>,
    "data" | "extraData" | "keyExtractor" | "renderItem"
  > & {
    contentContainerStyle?: StyleProp<ViewStyle>;
  };

function CalendarDay({
  day,
  onSelect,
}: {
  day: CalendarDayModel | null;
  onSelect: (date: string) => void;
}) {
  if (!day) {
    return <View className="h-10 w-10" />;
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
        "h-10 w-10 items-center justify-center rounded-md border border-transparent",
        day.isDisabled ? "opacity-40" : "opacity-100",
        day.isToday && !day.isSelected && "border-gray-300",
        day.isSelected && "border-primary bg-primary",
      )}
      onPress={() => onSelect(day.date)}
    >
      <Text
        size="sm"
        className={cn(
          "font-medium text-gray-700",
          day.isDisabled && "text-gray-300",
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
  onSelect: (date: string) => void;
}) {
  return (
    <View className="mb-8">
      <Text bold className="mb-4 text-gray-900">
        {month.label}
      </Text>
      <View className="mb-2 flex-row">
        {month.weekdayLabels.map((weekday) => (
          <View
            className="h-8 flex-1 items-center justify-center"
            key={`${month.key}-${weekday}`}
          >
            <Text size="xs" gray className="font-medium uppercase">
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
  contentContainerStyle,
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
    <View className={cn("w-full", className)}>
      <FlatList
        data={calendarMonths}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <CalendarMonth month={item} onSelect={handleSelect} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 48, paddingHorizontal: 16 },
          contentContainerStyle,
        ]}
        initialNumToRender={2}
        maxToRenderPerBatch={3}
        windowSize={3}
        {...props}
      />
    </View>
  );
}

(Calendar as { saComponent?: string }).saComponent = calendarComponentId;
