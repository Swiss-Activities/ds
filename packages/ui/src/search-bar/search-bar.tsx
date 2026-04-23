"use client";

import {
  forwardRef,
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type HTMLAttributes,
  type KeyboardEvent,
} from "react";
import { Button } from "../button";
import { Icon } from "../icon/icon";
import { Search, X } from "../icons";
import { Skeleton } from "../skeleton";
import { cn } from "../utils/cn";
import type { BaseSearchBarProps } from "./search-bar.types";

export type SearchBarProps = BaseSearchBarProps &
  Omit<HTMLAttributes<HTMLDivElement>, "children" | "onSubmit">;

export const SearchBar = forwardRef<HTMLDivElement, SearchBarProps>(
  function SearchBar(
    {
      autoFocus,
      children,
      className,
      classNameInput,
      classNameInputWrapper,
      classNamePanel,
      controls,
      defaultOpen = false,
      defaultValue = "",
      disabled = false,
      empty,
      footer,
      inputId,
      loading = false,
      mobileControls,
      mode = "default",
      onClear,
      onOpenChange,
      onSubmit,
      onValueChange,
      open,
      placeholder = "Jetzt suchen",
      searchButton,
      showClear = true,
      showPanel,
      value,
      ...props
    },
    ref
  ) {
    const rootRef = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const isControlledValue = value !== undefined;
    const isControlledOpen = open !== undefined;
    const [internalValue, setInternalValue] = useState(defaultValue);
    const [internalOpen, setInternalOpen] = useState(defaultOpen);
    const inputValue = isControlledValue ? value : internalValue;
    const isMobile = mode === "mobile";
    const isMain = mode === "main";
    const isOpen = isControlledOpen ? open : internalOpen;
    const hasPanelContent = Boolean(children) || Boolean(empty) || Boolean(footer);
    const hasFooter = Boolean(footer);
    const shouldShowPanel =
      showPanel ?? (isOpen && hasPanelContent && inputValue.length > 0);
    const shouldShowActions = Boolean(controls) || Boolean(searchButton) || !isMobile;

    const setRootRef = (node: HTMLDivElement | null) => {
      rootRef.current = node;

      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    };

    const setOpen = (nextOpen: boolean) => {
      if (!isControlledOpen) {
        setInternalOpen(nextOpen);
      }

      onOpenChange?.(nextOpen);
    };

    const setInputValue = (nextValue: string) => {
      if (!isControlledValue) {
        setInternalValue(nextValue);
      }

      onValueChange?.(nextValue);
    };

    useEffect(() => {
      if (!autoFocus) return;

      const timeout = window.setTimeout(() => {
        inputRef.current?.focus();
      }, 100);

      return () => window.clearTimeout(timeout);
    }, [autoFocus]);

    useEffect(() => {
      const handlePointerDown = (event: PointerEvent) => {
        const root = rootRef.current;

        if (!root || root.contains(event.target as Node)) {
          return;
        }

        if (!isControlledOpen) {
          setInternalOpen(false);
        }

        onOpenChange?.(false);
      };

      document.addEventListener("pointerdown", handlePointerDown);

      return () => {
        document.removeEventListener("pointerdown", handlePointerDown);
      };
    }, [isControlledOpen, onOpenChange]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);

      if (event.target.value.length > 0) {
        setOpen(true);
      }
    };

    const handleClear = () => {
      setInputValue("");
      setOpen(false);
      onClear?.();
      inputRef.current?.focus();
    };

    const handleSubmit = () => {
      onSubmit?.(inputValue);
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key !== "Enter") return;

      event.preventDefault();
      handleSubmit();
    };

    return (
      <div
        ref={setRootRef}
        className={cn(
          "relative",
          {
            "max-w-[500px] rounded-full border border-solid border-gray-200 bg-white pe-2":
              !isMobile,
          },
          className
        )}
        data-insights-index="search"
        {...props}
      >
        <div
          className={cn("relative", {
            "sticky top-0 z-10 gap-2 bg-white p-4 pb-2": isMobile,
          })}
        >
          <div className="relative flex">
            <div className={cn("relative flex w-full", classNameInputWrapper)}>
              <div
                className={cn(
                  "absolute top-1/2 flex -translate-y-1/2 items-center justify-center",
                  {
                    "start-3.5": isMobile,
                    "start-4": !isMobile,
                  }
                )}
              >
                <Icon icon={Search} />
              </div>
              <input
                ref={inputRef}
                id={inputId}
                onBlur={() => {}}
                onChange={handleChange}
                onFocus={() => setOpen(true)}
                onKeyDown={handleKeyDown}
                value={inputValue}
                type="text"
                placeholder={placeholder}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
                maxLength={512}
                disabled={disabled}
                className={cn(
                  "rounded-full border-transparent bg-white placeholder-gray-500 focus:!border-primary focus:!outline-primary focus-visible:!border-primary focus-visible:!outline-primary",
                  {
                    "mb-px me-2 ms-px mt-px w-full py-3.5 pe-6 ps-10 text-[13px]":
                      !isMobile,
                    "w-full border border-solid border-gray-200 px-10 py-3 text-base focus:!border-gray-200 focus:!outline-none focus-visible:!border-gray-200 focus-visible:!outline-none":
                      isMobile,
                    "text-sm": isMain,
                  },
                  classNameInput
                )}
              />
              {showClear && inputValue !== "" ? (
                <button
                  type="button"
                  onClick={handleClear}
                  className="absolute end-2.5 top-1/2 m-0 flex -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-none bg-white p-2 text-base text-black transition duration-100 ease-in"
                >
                  <Icon icon={X} />
                </button>
              ) : null}
            </div>
            {shouldShowActions ? (
              <div className="flex shrink-0 items-center">
                {controls}
                {searchButton ?? (
                  <Button
                    type="primary"
                    size="sm"
                    className={cn("me-[-3px] shrink-0 self-center !h-10 !max-h-none rounded-full", {
                      "-me-px !px-6": isMain,
                      "!w-10": !isMain,
                    })}
                    icon={!isMain && <Icon icon={Search} />}
                    text={isMain ? "Suchen" : undefined}
                    onClick={handleSubmit}
                  />
                )}
              </div>
            ) : null}
            <Skeleton
              loading={loading}
              full
              className="!start-1 !top-1 hidden sm:block"
              classNameItems="!h-[calc(100%-0.5rem)] !w-full !rounded-full"
            />
          </div>
        </div>
        {mobileControls ? (
          <div className="mb-6 flex flex-col gap-2 px-4 sm:hidden">
            {mobileControls}
          </div>
        ) : null}
        {shouldShowPanel ? (
          <div
            className={cn(
              {
                "absolute bottom-0 top-[3.375rem] w-full overflow-hidden rounded-xl border border-solid border-gray-200 bg-white shadow-xl transition duration-100 ease-in lg:min-w-[350px]":
                  !isMobile,
                "h-[calc(450px+3.5rem)]": !isMobile && hasFooter,
                "h-[450px]": !isMobile && !hasFooter,
                "pb-14": isMobile && hasFooter,
              },
              classNamePanel
            )}
          >
            <div
              className={cn("flex flex-col", {
                "overflow-y-auto p-1": !isMobile,
                "h-[450px]": !isMobile && hasFooter,
                "h-full": !isMobile && !hasFooter,
                "space-y-2.5 p-1": isMobile,
                "pb-8": hasFooter,
                "pb-0": !hasFooter,
              })}
            >
              {children || empty}
            </div>
            {footer ? (
              <div
                className={cn({
                  "fixed bottom-0 w-full bg-white": isMobile,
                  "hidden h-14 lg:block": !isMobile,
                })}
              >
                <div className="h-px w-full bg-gray-200" />
                {footer}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    );
  }
);
