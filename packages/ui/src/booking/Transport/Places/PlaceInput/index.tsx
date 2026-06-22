import {
  ChangeEvent,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";
import { useShallow } from "zustand/react/shallow";
import { useTransportStoreLocal } from "../../store";
import { Input } from "@swiss-activities/ui";
import { cn } from "../../../utils/css/cn";

type PlaceInputProps = {
  className?: string;
  placeholder: string;
  type: "from" | "to" | "via";
  viaIndex?: number;
  onMobileClick?: () => void;
  isLast?: boolean;
  disabled?: boolean;
  overrideValue?: string;
};

export type PlaceInputRef = {
  focus: () => void;
};

export const PlaceInput = forwardRef<PlaceInputRef, PlaceInputProps>(
  (
    {
      className,
      placeholder,
      type,
      viaIndex = 0,
      onMobileClick,
      isLast,
      disabled,
      overrideValue,
    },
    ref
  ) => {
    const {
      fromValue,
      toValue,
      viaValues,
      fromFocused,
      toFocused,
      viaFocusedIndex,
      setFromValue,
      setToValue,
      setViaValue,
      setFromFocused,
      setToFocused,
      setViaFocused,
    } = useTransportStoreLocal(
      useShallow((state) => ({
        fromValue: state.fromValue,
        toValue: state.toValue,
        viaValues: state.viaValues,
        fromFocused: state.fromFocused,
        toFocused: state.toFocused,
        viaFocusedIndex: state.viaFocusedIndex,
        setFromValue: state.setFromValue,
        setToValue: state.setToValue,
        setViaValue: state.setViaValue,
        setFromFocused: state.setFromFocused,
        setToFocused: state.setToFocused,
        setViaFocused: state.setViaFocused,
      }))
    );

    const inputRef = useRef<HTMLInputElement>(null);

    const storeValue =
      type === "from"
        ? fromValue
        : type === "to"
          ? toValue
          : viaValues[viaIndex] || "";
    const searchTerm = overrideValue || storeValue;
    const focus =
      type === "from"
        ? fromFocused
        : type === "to"
          ? toFocused
          : viaFocusedIndex === viaIndex;
    const setSearchTerm =
      type === "from"
        ? setFromValue
        : type === "to"
          ? setToValue
          : (value: string) => setViaValue(viaIndex, value);
    const setFocus =
      type === "from"
        ? setFromFocused
        : type === "to"
          ? setToFocused
          : (focused: boolean) => setViaFocused(focused ? viaIndex : null);

    useImperativeHandle(
      ref,
      () => ({
        focus: () => {
          if (inputRef.current) {
            inputRef.current.focus();
            setFocus(true);
          }
        },
      }),
      [setFocus]
    );

    useEffect(() => {
      if (focus && inputRef.current) {
        inputRef.current.focus();
      }
    }, [focus]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;
      if (!focus) {
        setFocus(true);
      }
      setSearchTerm(e.target.value);
    };

    const handleFocus = () => {
      if (disabled) return;
      setFocus(true);
    };

    const handleBlur = () => {
      if (disabled) return;
      setFocus(false);
    };

    const handleMobileClick = () => {
      if (disabled) return;
      onMobileClick?.();
    };

    return (
      <div className="relative w-full">
        {onMobileClick && (
          <button
            type="button"
            onClick={handleMobileClick}
            className="absolute inset-0 z-10 hidden cursor-pointer opacity-0 lg:hidden"
            aria-label={placeholder}
          />
        )}

        <Input
          ref={inputRef}
          {...{ placeholder }}
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          disabled={disabled}
          className={cn(
            "h-auto w-full origin-left scale-[0.875] border-transparent py-2 pe-2 ps-3 text-base shadow-none sm:text-base lg:h-[3.875rem] lg:scale-100 lg:p-0 lg:pt-5 lg:text-lg lg:!placeholder-transparent",
            "[-webkit-tap-highlight-color:transparent] focus:border-transparent focus:ring-0",
            disabled && "disabled:opacity-100",
            className
          )}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <div
          className={cn(
            "pointer-events-none absolute -bottom-px start-0 z-10 h-px w-full bg-gray-200",
            isLast && "hidden lg:block"
          )}
        />
        <span
          className={cn(
            "pointer-events-none hidden lg:absolute lg:start-0 lg:top-0 lg:block lg:translate-y-[20px] lg:text-[15px] lg:text-gray-500 lg:transition-all",
            {
              "lg:translate-y-2 lg:text-xs": focus || searchTerm,
            }
          )}
        >
          {placeholder}
        </span>
      </div>
    );
  }
);

PlaceInput.displayName = "PlaceInput";
