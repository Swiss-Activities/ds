import { useEffect, useMemo, useState } from 'react';
import type { ViewProps } from 'react-native';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';
import { dsMobileTokens } from '../tokens/mobile';
import { fontFamilies } from '../tokens/typography';
import {
  addMonths,
  getCalendarMonths,
  getMonthStart,
  isSameCalendarMonth,
  toLocalDate,
} from './calendar.shared';
import type {
  BaseCalendarProps,
  CalendarAvailability,
  CalendarDayModel,
  CalendarMonthModel,
  CalendarVariant,
} from './calendar.types';
import { calendarComponentId } from './calendar.types';

export type CalendarProps = BaseCalendarProps & Omit<ViewProps, 'onLayout'>;

function getPriceLabel(availability: CalendarAvailability) {
  if (!availability || typeof availability === 'boolean') return null;
  if (availability.price == null || availability.price === '') return null;

  const price = String(availability.price).trim();

  if (!price) return null;
  if (/^[A-Z]{3}\s/i.test(price)) return price;

  return `CHF ${price}`;
}

function CalendarDay({
  day,
  onSelect,
  variant,
}: {
  day: CalendarDayModel | null;
  onSelect: (day: CalendarDayModel) => void;
  variant: CalendarVariant;
}) {
  const tokens = dsMobileTokens.components.calendar;
  const availabilityTokens = tokens.availability;
  const isAvailabilityVariant = variant === 'availability';

  if (!day) {
    return (
      <View
        style={{
          height: isAvailabilityVariant
            ? availabilityTokens.dayHeight
            : tokens.daySize,
          width: isAvailabilityVariant ? '100%' : tokens.daySize,
        }}
      />
    );
  }

  const price = getPriceLabel(day.availability);
  const availabilityBackground = day.isSelected
    ? availabilityTokens.selectedBackground
    : day.isAvailable && !day.isOutside
      ? availabilityTokens.availableBackground
      : availabilityTokens.unavailableBackground;
  const availabilityTextColor = day.isSelected
    ? availabilityTokens.selectedText
    : day.isDisabled || day.isOutside
      ? availabilityTokens.mutedText
      : availabilityTokens.text;
  const availabilityPriceColor = day.isSelected
    ? availabilityTokens.selectedPriceText
    : availabilityTokens.priceText;

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
        alignItems: 'center',
        backgroundColor: isAvailabilityVariant
          ? availabilityBackground
          : day.isSelected
            ? tokens.selectedBackground
            : day.isToday && !day.isSelected
              ? tokens.todayBackground
              : 'transparent',
        borderColor: 'transparent',
        borderRadius: isAvailabilityVariant
          ? availabilityTokens.dayRadius
          : tokens.dayRadius,
        borderWidth: 1,
        height: isAvailabilityVariant
          ? availabilityTokens.dayHeight
          : tokens.daySize,
        justifyContent: 'center',
        opacity: day.isDisabled && !isAvailabilityVariant ? 0.4 : 1,
        width: isAvailabilityVariant ? '100%' : tokens.daySize,
      }}
      onPress={() => onSelect(day)}
    >
      <Text
        style={{
          color: isAvailabilityVariant
            ? availabilityTextColor
            : day.isSelected
              ? tokens.selectedText
              : day.isToday && !day.isSelected
                ? tokens.todayText
                : day.isDisabled || day.isOutside
                  ? tokens.mutedText
                  : tokens.text,
          fontFamily: isAvailabilityVariant
            ? fontFamilies.sans.native.medium
            : fontFamilies.sans.native.regular,
          fontSize: isAvailabilityVariant ? 18 : 14,
          lineHeight: isAvailabilityVariant ? 22 : 23,
        }}
      >
        {day.day}
      </Text>
      {isAvailabilityVariant && price && day.isAvailable && !day.isOutside ? (
        <Text
          numberOfLines={1}
          style={{
            color: availabilityPriceColor,
            fontFamily: fontFamilies.sans.native.semibold,
            fontSize: 10,
            lineHeight: 13,
            marginTop: 2,
          }}
        >
          {price}
        </Text>
      ) : null}
    </Pressable>
  );
}

function CalendarMonth({
  month,
  onSelect,
  variant,
}: {
  month: CalendarMonthModel;
  onSelect: (day: CalendarDayModel) => void;
  variant: CalendarVariant;
}) {
  const tokens = dsMobileTokens.components.calendar;
  const availabilityTokens = tokens.availability;
  const isAvailabilityVariant = variant === 'availability';

  return (
    <View style={{ marginTop: isAvailabilityVariant ? 0 : 16 }}>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: isAvailabilityVariant ? 6 : 8,
          paddingHorizontal: isAvailabilityVariant
            ? availabilityTokens.dayGap
            : 0,
          paddingTop: isAvailabilityVariant ? 10 : 0,
        }}
      >
        {month.weekdayLabels.map((weekday) => (
          <View
            key={`${month.key}-${weekday}`}
            style={{
              alignItems: 'center',
              flex: 1,
              height: 32,
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                color: isAvailabilityVariant
                  ? availabilityTokens.weekdayText
                  : tokens.mutedText,
                fontFamily: isAvailabilityVariant
                  ? fontFamilies.sans.native.medium
                  : fontFamilies.sans.native.regular,
                fontSize: 12,
                lineHeight: 20,
                textTransform: isAvailabilityVariant ? 'uppercase' : 'none',
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
          style={{
            flexDirection: 'row',
            marginBottom: isAvailabilityVariant ? availabilityTokens.dayGap : 4,
            paddingHorizontal: isAvailabilityVariant
              ? availabilityTokens.dayGap
              : 0,
          }}
        >
          {week.map((day, dayIndex) => (
            <View
              key={day?.date ?? `${month.key}-empty-${weekIndex}-${dayIndex}`}
              style={{
                alignItems: 'center',
                flex: 1,
                justifyContent: 'center',
                paddingHorizontal: isAvailabilityVariant
                  ? availabilityTokens.dayGap / 2
                  : 0,
              }}
            >
              <CalendarDay day={day} onSelect={onSelect} variant={variant} />
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

function CalendarNavigationButton({
  canNavigate,
  direction,
  isAvailabilityVariant,
  onPress,
}: {
  canNavigate: boolean;
  direction: 'previous' | 'next';
  isAvailabilityVariant: boolean;
  onPress: () => void;
}) {
  const tokens = dsMobileTokens.components.calendar;
  const Icon = direction === 'previous' ? ChevronLeft : ChevronRight;

  return (
    <Pressable
      accessibilityLabel={
        direction === 'previous' ? 'Previous month' : 'Next month'
      }
      accessibilityRole="button"
      accessibilityState={{ disabled: !canNavigate }}
      disabled={!canNavigate}
      style={{
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderColor: isAvailabilityVariant
          ? 'transparent'
          : tokens.navigationBorder,
        borderRadius: tokens.dayRadius,
        borderWidth: isAvailabilityVariant ? 0 : 1,
        height: isAvailabilityVariant ? tokens.availability.headerHeight : 28,
        justifyContent: 'center',
        opacity: canNavigate ? 1 : 0.3,
        width: isAvailabilityVariant
          ? tokens.availability.navigationCellWidth
          : 28,
      }}
      onPress={onPress}
    >
      <Icon
        color={tokens.navigationIcon}
        size={isAvailabilityVariant ? 24 : 16}
      />
    </Pressable>
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
  variant = 'default',
  visibleMonth,
  weekStartsOn = 1,
  ...props
}: CalendarProps) {
  const tokens = dsMobileTokens.components.calendar;
  const isAvailabilityVariant = variant === 'availability';
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
    <View
      style={[
        { padding: isAvailabilityVariant ? 0 : 12, width: '100%' },
        style,
      ]}
      {...props}
    >
      {isAvailabilityVariant ? (
        <View
          style={{
            backgroundColor: '#ffffff',
            borderColor: tokens.availability.containerBorder,
            borderRadius: 10,
            borderWidth: 1,
            overflow: 'hidden',
          }}
        >
          <View
            style={{
              alignItems: 'center',
              backgroundColor: tokens.availability.headerBackground,
              borderBottomColor: tokens.availability.containerBorder,
              borderBottomWidth: 1,
              flexDirection: 'row',
              height: tokens.availability.headerHeight,
            }}
          >
            {!hideNavigation ? (
              <View
                style={{
                  borderRightColor: tokens.availability.containerBorder,
                  borderRightWidth: 1,
                }}
              >
                <CalendarNavigationButton
                  canNavigate={canGoPrevious}
                  direction="previous"
                  isAvailabilityVariant
                  onPress={() => setActiveMonth(addMonths(activeMonth, -1))}
                />
              </View>
            ) : null}
            <View style={{ alignItems: 'center', flex: 1 }}>
              <Text
                style={{
                  color: '#000000',
                  fontFamily: fontFamilies.sans.native.medium,
                  fontSize: 18,
                  lineHeight: 25,
                }}
              >
                {currentMonth?.label}
              </Text>
            </View>
            {!hideNavigation ? (
              <View
                style={{
                  borderLeftColor: tokens.availability.containerBorder,
                  borderLeftWidth: 1,
                }}
              >
                <CalendarNavigationButton
                  canNavigate={canGoNext}
                  direction="next"
                  isAvailabilityVariant
                  onPress={() => setActiveMonth(addMonths(activeMonth, 1))}
                />
              </View>
            ) : null}
          </View>

          {currentMonth ? (
            <CalendarMonth
              month={currentMonth}
              onSelect={selectDay}
              variant={variant}
            />
          ) : null}
        </View>
      ) : (
        <>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: 4,
            }}
          >
            {!hideNavigation && (
              <View style={{ left: 4, position: 'absolute' }}>
                <CalendarNavigationButton
                  canNavigate={canGoPrevious}
                  direction="previous"
                  isAvailabilityVariant={false}
                  onPress={() => setActiveMonth(addMonths(activeMonth, -1))}
                />
              </View>
            )}
            <Text
              style={{
                color: '#000000',
                fontFamily: fontFamilies.sans.native.medium,
                fontSize: 14,
                lineHeight: 23,
              }}
            >
              {currentMonth?.label}
            </Text>
            {!hideNavigation && (
              <View style={{ position: 'absolute', right: 4 }}>
                <CalendarNavigationButton
                  canNavigate={canGoNext}
                  direction="next"
                  isAvailabilityVariant={false}
                  onPress={() => setActiveMonth(addMonths(activeMonth, 1))}
                />
              </View>
            )}
          </View>

          {currentMonth ? (
            <CalendarMonth
              month={currentMonth}
              onSelect={selectDay}
              variant={variant}
            />
          ) : null}
        </>
      )}
    </View>
  );
}

(Calendar as { saComponent?: string }).saComponent = calendarComponentId;
