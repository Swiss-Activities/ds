"use client";

import { forwardRef, useState, type ReactNode } from "react";
import type { TextInputProps, ViewProps } from "react-native";
import { TextInput, TouchableOpacity, View } from "react-native";
import { Button } from "../button/index.native";
import { Icon } from "../icon/icon.native";
import { Search, X } from "../icons/index.native";
import { Skeleton } from "../skeleton/index.native";
import { cn } from "../utils/cn";
import type { BaseSearchBarProps } from "./search-bar.types";

export type SearchBarProps = BaseSearchBarProps &
  Omit<ViewProps, "children"> & {
    inputProps?: Omit<TextInputProps, "onChangeText" | "value">;
  };

export const SearchBar = forwardRef<any, SearchBarProps>(function SearchBar(
  {
    children,
    className,
    classNameInput,
    classNameInputWrapper,
    controls,
    defaultOpen = false,
    defaultValue = "",
    disabled = false,
    empty,
    footer,
    inputProps,
    loading = false,
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
  const isControlledValue = value !== undefined;
  const isControlledOpen = open !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const inputValue = isControlledValue ? value : internalValue;
  const isOpen = isControlledOpen ? open : internalOpen;
  const isMobile = mode === "mobile";
  const hasPanelContent = Boolean(children) || Boolean(empty) || Boolean(footer);
  const shouldShowPanel =
    showPanel ?? (isOpen && hasPanelContent && inputValue.length > 0);
  const shouldShowActions = Boolean(controls) || Boolean(searchButton) || !isMobile;

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

    if (nextValue.length > 0) {
      setOpen(true);
    }
  };

  const handleClear = () => {
    setInputValue("");
    setOpen(false);
    onClear?.();
  };

  const panelContent = (children || empty) as ReactNode;

  return (
    <View
      ref={ref}
      className={cn(
        "relative rounded-full border border-gray-200 bg-white px-1",
        isMobile && "rounded-none border-0 p-4",
        className
      )}
      {...props}
    >
      <View className="relative flex flex-row items-center">
        <View className={cn("relative flex flex-1", classNameInputWrapper)}>
          <View className="absolute left-4 top-1/2 z-10 -translate-y-1/2">
            <Icon icon={Search} />
          </View>
          <TextInput
            {...inputProps}
            value={inputValue}
            editable={!disabled}
            placeholder={placeholder}
            onFocus={() => setOpen(true)}
            onChangeText={setInputValue}
            onSubmitEditing={() => onSubmit?.(inputValue)}
            className={cn(
              "w-full rounded-full bg-white py-3.5 pl-10 pr-10 text-sm text-black",
              isMobile && "border border-gray-200",
              classNameInput
            )}
          />
          {showClear && inputValue !== "" ? (
            <TouchableOpacity
              accessibilityRole="button"
              onPress={handleClear}
              className="absolute right-2.5 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2"
            >
              <Icon icon={X} />
            </TouchableOpacity>
          ) : null}
        </View>
        {shouldShowActions ? (
          <>
            {controls}
            {searchButton ?? (
              <Button
                type="primary"
                size="sm"
                className="ml-1 h-10 w-10 shrink-0 self-center rounded-full"
                icon={<Icon icon={Search} />}
                onPress={() => onSubmit?.(inputValue)}
              />
            )}
          </>
        ) : null}
        <Skeleton
          loading={loading}
          full
          className="absolute inset-1"
          classNameItems="rounded-full"
        />
      </View>
      {shouldShowPanel ? (
        <View className="mt-2 rounded-xl border border-gray-200 bg-white">
          <View>{panelContent}</View>
          {footer ? <View>{footer}</View> : null}
        </View>
      ) : null}
    </View>
  );
});
