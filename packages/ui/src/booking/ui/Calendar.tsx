"use client";

import { ComponentProps } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { buttonVariants } from "./buttonVariants";
import { cn } from "../utils/css/cn";
import "../styles/calendar.css";

export type CalendarProps = ComponentProps<typeof DayPicker> & {
  disablePast?: boolean;
};

const Calendar = ({
  className,
  classNames,
  showOutsideDays = true,
  disablePast = false,
  ...props
}: CalendarProps) => {
  const today = new Date();
  const startOfToday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  const mergedFromDate = disablePast
    ? (props.fromDate ?? startOfToday)
    : props.fromDate;

  const mergedDisabled = disablePast
    ? [
        { before: startOfToday },
        ...(Array.isArray(props.disabled)
          ? props.disabled
          : props.disabled
            ? [props.disabled]
            : []),
      ]
    : props.disabled;

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      fromDate={mergedFromDate}
      disabled={mergedDisabled}
      classNames={{
        months:
          "flex flex-col justify-center sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium text-black",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 focus-visible:opacity-100 hover:opacity-100"
        ),
        nav_button_previous: "absolute start-1",
        nav_button_next: "absolute end-1",
        table:
          "w-full flex flex-col items-center justify-center border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-gray-500 rounded-md !text-center w-8 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-gray-100",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-8 w-8 p-0 font-normal aria-selected:opacity-100 hover:no-underline hover:bg-gray-100"
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected: "!bg-blue !text-gray-50",
        day_today: "bg-gray-100 text-gray-900",
        day_outside: "text-gray-500 opacity-50",
        day_disabled: "text-gray-500 opacity-50",
        day_range_middle:
          "aria-selected:bg-gray-100 aria-selected:text-gray-900",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: () => <ChevronLeft className="h-4 w-4" />,
        IconRight: () => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
};
Calendar.displayName = "Calendar";

export { Calendar };
