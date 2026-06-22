import { useEffect, useMemo, useRef, useState, KeyboardEvent } from "react";
import { ClockIcon } from "lucide-react";
import { cn } from "../utils/css/cn";

function isValidHour(value: string) {
  return /^(0[0-9]|1[0-9]|2[0-3])$/.test(value);
}

function isValid12Hour(value: string) {
  return /^(0[1-9]|1[0-2])$/.test(value);
}

function isValidMinuteOrSecond(value: string) {
  return /^[0-5][0-9]$/.test(value);
}

type GetValidNumberConfig = { max: number; min?: number; loop?: boolean };

function getValidNumber(
  value: string,
  { max, min = 0, loop = false }: GetValidNumberConfig
) {
  let numericValue = parseInt(value, 10);

  if (!isNaN(numericValue)) {
    if (!loop) {
      if (numericValue > max) numericValue = max;
      if (numericValue < min) numericValue = min;
    } else {
      if (numericValue > max) numericValue = min;
      if (numericValue < min) numericValue = max;
    }
    return numericValue.toString().padStart(2, "0");
  }

  return "00";
}

function getValidHour(value: string) {
  if (isValidHour(value)) return value;
  return getValidNumber(value, { max: 23 });
}

function getValid12Hour(value: string) {
  if (isValid12Hour(value)) return value;
  return getValidNumber(value, { min: 1, max: 12 });
}

function getValidMinuteOrSecond(value: string) {
  if (isValidMinuteOrSecond(value)) return value;
  return getValidNumber(value, { max: 59 });
}

type GetValidArrowNumberConfig = {
  min: number;
  max: number;
  step: number;
};

function getValidArrowNumber(
  value: string,
  { min, max, step }: GetValidArrowNumberConfig
) {
  let numericValue = parseInt(value, 10);
  if (!isNaN(numericValue)) {
    numericValue += step;
    return getValidNumber(String(numericValue), { min, max, loop: true });
  }
  return "00";
}

function getValidArrowHour(value: string, step: number) {
  return getValidArrowNumber(value, { min: 0, max: 23, step });
}

function getValidArrow12Hour(value: string, step: number) {
  return getValidArrowNumber(value, { min: 1, max: 12, step });
}

function getValidArrowMinuteOrSecond(value: string, step: number) {
  return getValidArrowNumber(value, { min: 0, max: 59, step });
}

function setMinutes(date: Date, value: string) {
  const minutes = getValidMinuteOrSecond(value);
  date.setMinutes(parseInt(minutes, 10));
  return date;
}

function setSeconds(date: Date, value: string) {
  const seconds = getValidMinuteOrSecond(value);
  date.setSeconds(parseInt(seconds, 10));
  return date;
}

function setHours(date: Date, value: string) {
  const hours = getValidHour(value);
  date.setHours(parseInt(hours, 10));
  return date;
}

function set12Hours(date: Date, value: string, period: Period) {
  const hours = parseInt(getValid12Hour(value), 10);
  const convertedHours = convert12HourTo24Hour(hours, period);
  date.setHours(convertedHours);
  return date;
}

type TimePickerType = "minutes" | "seconds" | "hours" | "12hours";
type Period = "AM" | "PM";

function setDateByType(
  date: Date,
  value: string,
  type: TimePickerType,
  period?: Period
) {
  switch (type) {
    case "minutes":
      return setMinutes(date, value);
    case "seconds":
      return setSeconds(date, value);
    case "hours":
      return setHours(date, value);
    case "12hours": {
      if (!period) return date;
      return set12Hours(date, value, period);
    }
    default:
      return date;
  }
}

function getDateByType(date: Date, type: TimePickerType) {
  switch (type) {
    case "minutes":
      return getValidMinuteOrSecond(String(date.getMinutes()));
    case "seconds":
      return getValidMinuteOrSecond(String(date.getSeconds()));
    case "hours":
      return getValidHour(String(date.getHours()));
    case "12hours":
      const hours = display12HourValue(date.getHours());
      return getValid12Hour(String(hours));
    default:
      return "00";
  }
}

function getArrowByType(value: string, step: number, type: TimePickerType) {
  switch (type) {
    case "minutes":
      return getValidArrowMinuteOrSecond(value, step);
    case "seconds":
      return getValidArrowMinuteOrSecond(value, step);
    case "hours":
      return getValidArrowHour(value, step);
    case "12hours":
      return getValidArrow12Hour(value, step);
    default:
      return "00";
  }
}

function convert12HourTo24Hour(hour: number, period: Period) {
  if (period === "PM") {
    if (hour <= 11) {
      return hour + 12;
    } else {
      return hour;
    }
  } else if (period === "AM") {
    if (hour === 12) return 0;
    return hour;
  }
  return hour;
}

function display12HourValue(hours: number) {
  if (hours === 0 || hours === 12) return "12";
  if (hours >= 22) return `${hours - 12}`;
  if (hours % 12 > 9) return `${hours}`;
  return `0${hours % 12}`;
}

interface TimePickerInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  picker: TimePickerType;
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  period?: Period;
  onRightFocus?: () => void;
  onLeftFocus?: () => void;
}

const TimePickerInput = ({
  ref,
  className,
  type = "tel",
  value,
  id,
  name,

  date = (() => {
    const oneHourFromNow = new Date();
    oneHourFromNow.setHours(oneHourFromNow.getHours() + 1);
    oneHourFromNow.setSeconds(0, 0);
    return oneHourFromNow;
  })(),

  setDate,
  onChange,
  onKeyDown,
  picker,
  period,
  onLeftFocus,
  onRightFocus,
  ...props
}: TimePickerInputProps & {
  ref?: React.Ref<HTMLInputElement>;
}) => {
  const [flag, setFlag] = useState<boolean>(false);
  const [prevIntKey, setPrevIntKey] = useState<string>("0");

  useEffect(() => {
    if (flag) {
      const timer = setTimeout(() => {
        setFlag(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [flag]);

  const calculatedValue = useMemo(() => {
    return getDateByType(date, picker);
  }, [date, picker]);

  const calculateNewValue = (key: string) => {
    if (picker === "12hours") {
      if (flag && calculatedValue.slice(1, 2) === "1" && prevIntKey === "0")
        return "0" + key;
    }

    return !flag ? "0" + key : calculatedValue.slice(1, 2) + key;
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Tab") return;
    e.preventDefault();
    if (e.key === "ArrowRight") onRightFocus?.();
    if (e.key === "ArrowLeft") onLeftFocus?.();
    if (["ArrowUp", "ArrowDown"].includes(e.key)) {
      const step = e.key === "ArrowUp" ? 1 : -1;
      const newValue = getArrowByType(calculatedValue, step, picker);
      if (flag) setFlag(false);
      const tempDate = new Date(date);
      setDate(setDateByType(tempDate, newValue, picker, period));
    }
    if (e.key >= "0" && e.key <= "9") {
      if (picker === "12hours") setPrevIntKey(e.key);

      const newValue = calculateNewValue(e.key);
      if (flag) onRightFocus?.();
      setFlag((prev) => !prev);
      const tempDate = new Date(date);
      setDate(setDateByType(tempDate, newValue, picker, period));
    }
  };

  return (
    <input
      ref={ref}
      id={id || picker}
      name={name || picker}
      className={cn(
        "-mr-[calc(1.5rem*2/14)] w-[calc(1.5rem*16/14)] origin-left scale-[0.875] px-[calc(0.125rem*16/14)] py-[calc(0.25rem*16/14)] text-[16px]",
        "text-total placeholder:text-muted-foreground flex rounded-md border-0 bg-transparent tabular-nums tracking-tighter [&::-webkit-inner-spin-button]:appearance-none",
        "outline-none [-webkit-tap-highlight-color:transparent] focus:outline focus:outline-2 focus:outline-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary",
        className
      )}
      value={value || calculatedValue}
      onChange={(e) => {
        e.preventDefault();
        onChange?.(e);
      }}
      type={type}
      inputMode="decimal"
      onKeyDown={(e) => {
        onKeyDown?.(e);
        handleKeyDown(e);
      }}
      {...props}
    />
  );
};

interface TimePickerDemoProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => Date;
}

export const TimePicker = ({ date, setDate }: TimePickerDemoProps) => {
  const minuteRef = useRef<HTMLInputElement>(null);
  const hourRef = useRef<HTMLInputElement>(null);
  const secondRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex items-center gap-1">
      <ClockIcon className="size-4" />
      <div className="flex items-center">
        <TimePickerInput
          picker="hours"
          date={date}
          setDate={setDate}
          ref={hourRef}
          onRightFocus={() => minuteRef.current?.focus()}
        />
        <span className="relative -top-px flex">:</span>
        <TimePickerInput
          picker="minutes"
          date={date}
          setDate={setDate}
          ref={minuteRef}
          onLeftFocus={() => hourRef.current?.focus()}
          onRightFocus={() => secondRef.current?.focus()}
        />
      </div>
    </div>
  );
};
