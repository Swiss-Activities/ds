import { useState, useEffect, useRef, useCallback } from "react";
import { cn } from "../utils/css/cn";

type TimeField = "hours" | "minutes";

interface TimeInputProps {
  value: Date;
  onChange: (date: Date) => void;
  variant?: "default" | "plain";
  className?: string;
}

export const TimeInput = ({
  value,
  onChange,
  variant = "default",
  className,
}: TimeInputProps) => {
  const hoursInputRef = useRef<HTMLSpanElement>(null);
  const minutesInputRef = useRef<HTMLSpanElement>(null);
  const hoursTypingRef = useRef("");
  const minutesTypingRef = useRef("");

  const [activeField, setActiveField] = useState<TimeField | null>(null);
  const [hoursInput, setHoursInput] = useState(() =>
    value.getHours().toString().padStart(2, "0")
  );
  const [minutesInput, setMinutesInput] = useState(() =>
    value.getMinutes().toString().padStart(2, "0")
  );

  useEffect(() => {
    setHoursInput(value.getHours().toString().padStart(2, "0"));
    setMinutesInput(value.getMinutes().toString().padStart(2, "0"));
  }, [value]);

  const updateTime = useCallback(
    (hours: number, minutes: number) => {
      const newTime = new Date(value);
      newTime.setHours(hours, minutes, 0, 0);
      onChange(newTime);
    },
    [value, onChange]
  );

  const selectAllContent = (element: HTMLElement) => {
    const range = document.createRange();
    range.selectNodeContents(element);
    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);
  };

  const handleHoursKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    const key = e.key;

    if (key === "Enter") {
      e.preventDefault();
      return;
    }

    if (key === "ArrowUp") {
      e.preventDefault();
      const newHours = (value.getHours() + 1) % 24;
      updateTime(newHours, value.getMinutes());
    } else if (key === "ArrowDown") {
      e.preventDefault();
      const newHours = (value.getHours() - 1 + 24) % 24;
      updateTime(newHours, value.getMinutes());
    } else if (key === "ArrowRight" || key === "Tab") {
      if (key === "Tab" && e.shiftKey) return;
      e.preventDefault();
      setActiveField("minutes");
      minutesTypingRef.current = "";
      setTimeout(() => {
        minutesInputRef.current?.focus();
        selectAllContent(minutesInputRef.current!);
      }, 0);
    } else if (key >= "0" && key <= "9") {
      e.preventDefault();
      hoursTypingRef.current += key;

      if (hoursTypingRef.current.length === 1) {
        const hours = parseInt(key, 10);
        setHoursInput(hours.toString().padStart(2, "0"));
        updateTime(hours, value.getMinutes());
      } else {
        const hours = parseInt(hoursTypingRef.current.slice(-2), 10);
        if (hours >= 0 && hours <= 23) {
          setHoursInput(hours.toString().padStart(2, "0"));
          updateTime(hours, value.getMinutes());
        }
        hoursTypingRef.current = "";
        setActiveField("minutes");
        minutesTypingRef.current = "";
        setTimeout(() => {
          minutesInputRef.current?.focus();
          selectAllContent(minutesInputRef.current!);
        }, 0);
      }
    } else if (key === "Backspace" || key === "Delete") {
      e.preventDefault();
      hoursTypingRef.current = "";
    } else if (key.length === 1) {
      e.preventDefault();
    }
  };

  const handleMinutesKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    const key = e.key;

    if (key === "Enter") {
      e.preventDefault();
      return;
    }

    if (key === "ArrowUp") {
      e.preventDefault();
      const newMinutes = (value.getMinutes() + 1) % 60;
      updateTime(value.getHours(), newMinutes);
    } else if (key === "ArrowDown") {
      e.preventDefault();
      const newMinutes = (value.getMinutes() - 1 + 60) % 60;
      updateTime(value.getHours(), newMinutes);
    } else if (key === "ArrowLeft") {
      e.preventDefault();
      setActiveField("hours");
      hoursTypingRef.current = "";
      setTimeout(() => {
        hoursInputRef.current?.focus();
        selectAllContent(hoursInputRef.current!);
      }, 0);
    } else if (key === "Tab" && e.shiftKey) {
      e.preventDefault();
      setActiveField("hours");
      hoursTypingRef.current = "";
      setTimeout(() => {
        hoursInputRef.current?.focus();
        selectAllContent(hoursInputRef.current!);
      }, 0);
    } else if (key >= "0" && key <= "9") {
      e.preventDefault();
      minutesTypingRef.current += key;

      if (minutesTypingRef.current.length === 1) {
        const minutes = parseInt(key, 10);
        setMinutesInput(minutes.toString().padStart(2, "0"));
        updateTime(value.getHours(), minutes);
      } else {
        const minutes = parseInt(minutesTypingRef.current.slice(-2), 10);
        if (minutes >= 0 && minutes <= 59) {
          setMinutesInput(minutes.toString().padStart(2, "0"));
          updateTime(value.getHours(), minutes);
        }
        minutesTypingRef.current = "";
      }
    } else if (key === "Backspace" || key === "Delete") {
      e.preventDefault();
      minutesTypingRef.current = "";
    } else if (key.length === 1) {
      e.preventDefault();
    }
  };

  const handleHoursFocus = () => {
    setActiveField("hours");
    hoursTypingRef.current = "";
    setTimeout(() => {
      if (hoursInputRef.current) selectAllContent(hoursInputRef.current);
    }, 0);
  };

  const handleMinutesFocus = () => {
    setActiveField("minutes");
    minutesTypingRef.current = "";
    setTimeout(() => {
      if (minutesInputRef.current) selectAllContent(minutesInputRef.current);
    }, 0);
  };

  const handleHoursBlur = (e: React.FocusEvent<HTMLSpanElement>) => {
    const hours = parseInt(hoursInput, 10);
    if (isNaN(hours) || hours < 0 || hours > 23) {
      setHoursInput(value.getHours().toString().padStart(2, "0"));
    } else {
      setHoursInput(hours.toString().padStart(2, "0"));
      updateTime(hours, value.getMinutes());
    }
    if (e.relatedTarget !== minutesInputRef.current) {
      setActiveField(null);
    }
  };

  const handleMinutesBlur = (e: React.FocusEvent<HTMLSpanElement>) => {
    const minutes = parseInt(minutesInput, 10);
    if (isNaN(minutes) || minutes < 0 || minutes > 59) {
      setMinutesInput(value.getMinutes().toString().padStart(2, "0"));
    } else {
      setMinutesInput(minutes.toString().padStart(2, "0"));
      updateTime(value.getHours(), minutes);
    }
    if (e.relatedTarget !== hoursInputRef.current) {
      setActiveField(null);
    }
  };

  return (
    <div
      className={cn(
        "flex items-center bg-transparent transition-colors",
        variant === "default" &&
          "h-10 rounded-md border border-solid border-gray-200 px-3 shadow-sm focus-within:border-primary",
        variant === "plain" && "px-1",
        className
      )}
    >
      <span
        ref={hoursInputRef}
        role="spinbutton"
        aria-label="Hours"
        aria-valuemin={0}
        aria-valuemax={23}
        aria-valuenow={value.getHours()}
        suppressHydrationWarning
        tabIndex={0}
        contentEditable
        suppressContentEditableWarning
        inputMode="numeric"
        spellCheck={false}
        autoCorrect="off"
        onFocus={handleHoursFocus}
        onBlur={handleHoursBlur}
        onKeyDown={handleHoursKeyDown}
        onClick={handleHoursFocus}
        className={cn(
          "min-w-[1.25rem] cursor-text rounded px-0.5 text-center text-sm text-black outline-none",
          activeField === "hours" && "bg-primary/10"
        )}
      >
        {hoursInput}
      </span>
      <span className="text-sm text-gray-400">:</span>
      <span
        ref={minutesInputRef}
        role="spinbutton"
        aria-label="Minutes"
        aria-valuemin={0}
        aria-valuemax={59}
        aria-valuenow={value.getMinutes()}
        suppressHydrationWarning
        tabIndex={0}
        contentEditable
        suppressContentEditableWarning
        inputMode="numeric"
        spellCheck={false}
        autoCorrect="off"
        onFocus={handleMinutesFocus}
        onBlur={handleMinutesBlur}
        onKeyDown={handleMinutesKeyDown}
        onClick={handleMinutesFocus}
        className={cn(
          "min-w-[1.25rem] cursor-text rounded px-0.5 text-center text-sm text-black outline-none",
          activeField === "minutes" && "bg-primary/10"
        )}
      >
        {minutesInput}
      </span>
    </div>
  );
};
