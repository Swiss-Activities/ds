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
import { SheetFull } from "../sheet/Full";
import { Skeleton } from "../skeleton";
import { cn } from "../utils/cn";
import type { BaseSearchBarProps } from "./search-bar.types";

export type SearchBarProps = BaseSearchBarProps &
  Omit<HTMLAttributes<HTMLDivElement>, "children" | "onSubmit">;

export const SearchBar = forwardRef<HTMLDivElement, SearchBarProps>(
  function SearchBar(
    {
      autoFocus,
      bottom,
      children,
      className,
      classNameInput,
      classNameInputWrapper,
      classNamePanel,
      classNameSheet,
      defaultOpen = false,
      defaultValue = "",
      disabled = false,
      empty,
      footer,
      inputId,
      loading = false,
      mode = "default",
      onClear,
      onOpenChange,
      onSubmit,
      onValueChange,
      open,
      placeholder = "Jetzt suchen",
      searchButton,
      sheetCloseLabel = "Schliessen",
      sheetTitle = "Suchbegriffe eingeben",
      showClear = true,
      showPanel,
      value,
      ...props
    },
    ref
  ) {
    const rootRef = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const sheetInputRef = useRef<HTMLInputElement | null>(null);
    const suppressMobileSheetFocusRef = useRef(false);
    const suppressMobileSheetFocusTimeoutRef = useRef<number | null>(null);
    const isControlledValue = value !== undefined;
    const isControlledOpen = open !== undefined;
    const [internalValue, setInternalValue] = useState(defaultValue);
    const [internalOpen, setInternalOpen] = useState(defaultOpen);
    const [isMobileViewport, setIsMobileViewport] = useState(false);
    const inputValue = isControlledValue ? value : internalValue;
    const isMobile = mode === "mobile";
    const isMain = mode === "main";
    const isOpen = isControlledOpen ? open : internalOpen;
    const shouldUseMobileSheet = !disabled && (isMobile || isMobileViewport);
    const hasPanelContent =
      Boolean(children) || Boolean(empty) || Boolean(footer);
    const hasFooter = Boolean(footer);
    const shouldShowPanel =
      showPanel ?? (isOpen && hasPanelContent && inputValue.length > 0);
    const shouldShowActions = Boolean(searchButton) || !isMobile;
    const shouldShowInlinePanel = shouldShowPanel && !shouldUseMobileSheet;
    const shouldShowMobileSheet = shouldUseMobileSheet && isOpen;
    const bottomContent = bottom ?? footer;

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

    const clearMobileSheetFocusSuppression = () => {
      suppressMobileSheetFocusRef.current = false;

      if (suppressMobileSheetFocusTimeoutRef.current != null) {
        window.clearTimeout(suppressMobileSheetFocusTimeoutRef.current);
        suppressMobileSheetFocusTimeoutRef.current = null;
      }
    };

    const suppressMobileSheetFocus = () => {
      clearMobileSheetFocusSuppression();
      suppressMobileSheetFocusRef.current = true;
      suppressMobileSheetFocusTimeoutRef.current = window.setTimeout(() => {
        suppressMobileSheetFocusRef.current = false;
        suppressMobileSheetFocusTimeoutRef.current = null;
      }, 500);
    };

    const setInputValue = (nextValue: string) => {
      if (!isControlledValue) {
        setInternalValue(nextValue);
      }

      onValueChange?.(nextValue);
    };

    useEffect(() => {
      const query = window.matchMedia("(max-width: 767px)");
      const handleChange = () => setIsMobileViewport(query.matches);

      handleChange();
      query.addEventListener("change", handleChange);

      return () => {
        query.removeEventListener("change", handleChange);
      };
    }, []);

    useEffect(
      () => () => {
        if (suppressMobileSheetFocusTimeoutRef.current != null) {
          window.clearTimeout(suppressMobileSheetFocusTimeoutRef.current);
        }
      },
      []
    );

    useEffect(() => {
      if (!autoFocus) return;

      const timeout = window.setTimeout(() => {
        if (shouldUseMobileSheet) {
          setOpen(true);
          sheetInputRef.current?.focus();
          return;
        }

        inputRef.current?.focus();
      }, 100);

      return () => window.clearTimeout(timeout);
    }, [autoFocus, shouldUseMobileSheet]);

    useEffect(() => {
      if (!shouldShowMobileSheet) return;

      const timeout = window.setTimeout(() => {
        sheetInputRef.current?.focus();
      }, 100);

      return () => window.clearTimeout(timeout);
    }, [shouldShowMobileSheet]);

    useEffect(() => {
      const handlePointerDown = (event: PointerEvent) => {
        if (shouldUseMobileSheet) {
          return;
        }

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
    }, [isControlledOpen, onOpenChange, shouldUseMobileSheet]);

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
      if (shouldUseMobileSheet) {
        sheetInputRef.current?.focus();
        return;
      }

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

    const handleFocus = (inSheet = false) => {
      if (
        shouldUseMobileSheet &&
        !inSheet &&
        suppressMobileSheetFocusRef.current
      ) {
        return;
      }

      setOpen(true);

      if (shouldUseMobileSheet && !inSheet) {
        return;
      }
    };

    const handleMobileSheetPresentedChange = (nextPresented: boolean) => {
      if (!nextPresented) {
        suppressMobileSheetFocus();
        sheetInputRef.current?.blur();
        inputRef.current?.blur();
      }

      setOpen(nextPresented);
    };

    const renderInput = (inSheet = false) => {
      const isMobileLayout = isMobile || inSheet;
      const isMobileSheetTrigger = shouldUseMobileSheet && !inSheet;
      const inputField = (
        <input
          ref={inSheet ? sheetInputRef : inputRef}
          id={inSheet && inputId ? `${inputId}-sheet` : inputId}
          onBlur={() => {}}
          onChange={handleChange}
          onFocus={() => handleFocus(inSheet)}
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
          onPointerDown={
            !inSheet && shouldUseMobileSheet
              ? clearMobileSheetFocusSuppression
              : undefined
          }
          style={
            isMobileSheetTrigger
              ? {
                  fontSize: 16,
                  transform: "scale(0.875)",
                  transformOrigin: "left center",
                  width: "114.285714%",
                }
              : undefined
          }
          className={cn(
            "rounded-full border-transparent bg-white placeholder-gray-500 focus:!border-primary focus:!outline-primary focus-visible:!border-primary focus-visible:!outline-primary",
            {
              "mb-px me-2 ms-px mt-px w-full py-3.5 pe-6 ps-10 text-[13px]":
                !isMobileLayout,
              "w-full border border-solid border-gray-200 px-10 py-3 text-base focus:!border-gray-200 focus:!outline-none focus-visible:!border-gray-200 focus-visible:!outline-none":
                isMobileLayout,
              "text-sm": isMain && !inSheet,
              "!ps-12": isMobileSheetTrigger,
            },
            classNameInput
          )}
        />
      );
      const focusInput = inSheet ? (
        <SheetFull.AutoFocusTarget.Root asChild timing="present">
          {inputField}
        </SheetFull.AutoFocusTarget.Root>
      ) : (
        inputField
      );
      const input = (
        <div className="relative flex">
          <div className={cn("relative flex w-full", classNameInputWrapper)}>
            <div
              className={cn(
                "pointer-events-none absolute top-1/2 z-10 flex -translate-y-1/2 items-center justify-center",
                {
                  "start-3.5": isMobileLayout,
                  "start-4": !isMobileLayout,
                }
              )}
            >
              <Icon icon={Search} size="md" />
            </div>
            {focusInput}
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
          {!inSheet && shouldShowActions ? (
            <div className="flex shrink-0 items-center">
              {searchButton ?? (
                <Button
                  type="primary"
                  size="sm"
                  className={cn(
                    "me-[-3px] !h-10 !max-h-none shrink-0 self-center rounded-full",
                    {
                      "-me-px !px-6": isMain,
                      "!w-10": !isMain,
                    }
                  )}
                  icon={!isMain && <Icon icon={Search} />}
                  text={isMain ? "Suchen" : undefined}
                  onClick={handleSubmit}
                />
              )}
            </div>
          ) : null}
          {!inSheet ? (
            <Skeleton
              loading={loading}
              full
              className="!start-1 !top-1 hidden sm:block"
              classNameItems="!h-[calc(100%-0.5rem)] !w-full !rounded-full"
            />
          ) : null}
        </div>
      );

      if (inSheet) {
        return input;
      }

      return (
        <div
          className={cn("relative", {
            "sticky top-0 z-10 gap-2 bg-white p-4 pb-2": isMobile,
          })}
        >
          {input}
        </div>
      );
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
        {renderInput()}
        {shouldShowInlinePanel ? (
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
        <SheetFull.Root
          presented={shouldShowMobileSheet}
          onPresentedChange={handleMobileSheetPresentedChange}
        >
          <SheetFull.Portal>
            <SheetFull.View
              contentPlacement="bottom"
              className="!h-[100dvh]"
              onDismissAutoFocus={{ focus: false }}
            >
              <SheetFull.Backdrop />
              <SheetFull.CloseButton label={sheetCloseLabel} />
              <SheetFull.Content
                className={cn(
                  "grid !h-[calc(100dvh-40px)] grid-rows-[min-content_1fr_min-content]",
                  {
                    "grid-rows-[min-content_1fr_min-content]": bottomContent,
                    "grid-rows-[min-content_1fr]": !bottomContent,
                  },
                  classNameSheet
                )}
              >
                <SheetFull.Header className="pb-4 pt-2">
                  <SheetFull.Handle />
                  {sheetTitle ? (
                    <SheetFull.Title className="mt-4 text-base font-semibold text-gray-950">
                      {sheetTitle}
                    </SheetFull.Title>
                  ) : null}
                  <div className="mt-5">{renderInput(true)}</div>
                </SheetFull.Header>
                <SheetFull.ScrollRoot className="min-h-0 h-full">
                  <SheetFull.ScrollView className="min-h-0 h-full">
                    <SheetFull.ScrollContent className="px-4 pb-4 pt-1">
                      <div className="-mx-2 flex flex-col">
                        {shouldShowPanel ? children || empty : null}
                      </div>
                    </SheetFull.ScrollContent>
                  </SheetFull.ScrollView>
                </SheetFull.ScrollRoot>
                {bottomContent ? (
                  <div className="bg-white px-4 pb-[calc(env(safe-area-inset-bottom)+1rem)] pt-3 shadow-[0_-12px_24px_rgba(0,0,0,0.08)]">
                    {bottomContent}
                  </div>
                ) : null}
              </SheetFull.Content>
            </SheetFull.View>
          </SheetFull.Portal>
        </SheetFull.Root>
      </div>
    );
  }
);
