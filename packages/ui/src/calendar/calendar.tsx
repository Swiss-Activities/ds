'use client';

import { useEffect, useMemo, useState, type HTMLAttributes } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Text } from '../text';
import { cn } from '../utils/cn';
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

export type CalendarProps = BaseCalendarProps &
  Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'>;

function CalendarDay({
  day,
  onSelect,
  variant,
}: {
  day: CalendarDayModel | null;
  onSelect: (day: CalendarDayModel) => void;
  variant: CalendarVariant;
}) {
  const isAvailabilityVariant = variant === 'availability';

  if (!day) {
    return (
      <span
        aria-hidden="true"
        className={isAvailabilityVariant ? 'h-[54px] w-full' : 'h-8 w-8'}
      />
    );
  }

  const price = getPriceLabel(day.availability);

  return (
    <button
      aria-current={day.isToday ? 'date' : undefined}
      aria-label={day.date}
      aria-pressed={day.isSelected}
      className={cn(
        isAvailabilityVariant
          ? 'flex h-[54px] w-full flex-col items-center justify-center rounded-md border border-transparent p-0 text-lg font-medium leading-tight transition hover:no-underline'
          : 'flex h-8 w-8 items-center justify-center rounded-md border border-transparent p-0 text-sm font-normal transition hover:no-underline',
        isAvailabilityVariant && day.isAvailable && !day.isOutside
          ? 'bg-[#a7f3cf] text-gray-900'
          : null,
        isAvailabilityVariant && (day.isDisabled || day.isOutside)
          ? 'cursor-not-allowed bg-transparent text-gray-400'
          : null,
        !isAvailabilityVariant && day.isDisabled
          ? 'cursor-not-allowed text-gray-500 opacity-50'
          : null,
        !isAvailabilityVariant && !day.isDisabled
          ? 'cursor-pointer text-gray-700 hover:bg-gray-100'
          : null,
        !isAvailabilityVariant && day.isOutside && 'text-gray-500 opacity-50',
        !isAvailabilityVariant &&
          day.isToday &&
          !day.isSelected &&
          'bg-gray-100 text-gray-900',
        day.isSelected &&
          (isAvailabilityVariant
            ? '!bg-primary !text-white opacity-100'
            : '!bg-blue !text-gray-50 opacity-100'),
      )}
      disabled={day.isDisabled}
      type="button"
      onClick={() => onSelect(day)}
    >
      {day.day}
      {isAvailabilityVariant && price && day.isAvailable && !day.isOutside ? (
        <span
          className={cn(
            'mt-0.5 block max-w-full truncate text-[10px] font-semibold leading-none text-gray-600',
            day.isSelected && 'text-white/80',
          )}
        >
          {price}
        </span>
      ) : null}
    </button>
  );
}

function getPriceLabel(availability: CalendarAvailability) {
  if (!availability || typeof availability === 'boolean') return null;
  if (availability.price == null || availability.price === '') return null;

  const price = String(availability.price).trim();

  if (!price) return null;
  if (/^[A-Z]{3}\s/i.test(price)) return price;

  return `CHF ${price}`;
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
  const isAvailabilityVariant = variant === 'availability';

  return (
    <section className={cn('space-y-1', isAvailabilityVariant && 'p-1 pt-2')}>
      <div role="grid" aria-label={month.label} className="space-y-1">
        <div role="row" className="grid grid-cols-7 gap-1">
          {month.weekdayLabels.map((weekday) => (
            <Text
              as="span"
              size="xs"
              gray={!isAvailabilityVariant}
              className={cn(
                'flex h-8 items-center justify-center rounded-md text-center',
                isAvailabilityVariant
                  ? 'w-full font-medium uppercase text-gray-900'
                  : 'w-8 font-normal',
              )}
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
                <CalendarDay day={day} onSelect={onSelect} variant={variant} />
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
  variant = 'default',
  visibleMonth,
  weekStartsOn = 1,
  ...props
}: CalendarProps) {
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
    <div
      {...props}
      className={cn(
        'w-full p-3',
        isAvailabilityVariant ? 'max-w-none p-0' : 'max-w-[360px]',
        className,
      )}
    >
      <div
        className={cn(
          'relative flex items-center justify-center pt-1',
          isAvailabilityVariant &&
            'h-14 rounded-t-[10px] border border-gray-200 bg-white p-0',
        )}
      >
        {!hideNavigation && (
          <button
            aria-label="Previous month"
            className={cn(
              'absolute start-1 flex h-7 w-7 items-center justify-center rounded-md border border-gray-200 bg-transparent p-0 opacity-80 transition hover:opacity-100',
              isAvailabilityVariant &&
                'start-0 h-full w-14 rounded-none border-0 border-e',
              !canGoPrevious &&
                'cursor-not-allowed opacity-30 hover:opacity-30',
            )}
            disabled={!canGoPrevious}
            type="button"
            onClick={() => setActiveMonth(addMonths(activeMonth, -1))}
          >
            <ChevronLeft aria-hidden="true" className="h-4 w-4" />
          </button>
        )}
        <Text
          as="h3"
          size={isAvailabilityVariant ? 'lg' : 'sm'}
          className="font-medium text-black"
        >
          {currentMonth?.label}
        </Text>
        {!hideNavigation && (
          <button
            aria-label="Next month"
            className={cn(
              'absolute end-1 flex h-7 w-7 items-center justify-center rounded-md border border-gray-200 bg-transparent p-0 opacity-80 transition hover:opacity-100',
              isAvailabilityVariant &&
                'end-0 h-full w-14 rounded-none border-0 border-s',
              !canGoNext && 'cursor-not-allowed opacity-30 hover:opacity-30',
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
        <div
          className={cn(
            isAvailabilityVariant &&
              'rounded-b-[10px] border-x border-b border-gray-200 bg-white',
          )}
        >
          <CalendarMonth
            month={currentMonth}
            onSelect={selectDay}
            variant={variant}
          />
        </div>
      )}
    </div>
  );
}

(Calendar as { saComponent?: string }).saComponent = calendarComponentId;
