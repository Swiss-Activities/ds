"use client";

import { type ReactNode, useEffect, useState } from "react";
import { Pressable, View } from "react-native-css/components";
import { Icon } from "../icon/icon.native";
import { Check } from "../icons/index.native";
import { Text } from "../text/text.native";
import { cn } from "../utils/cn";
import type { BaseCheckboxProps } from "./checkbox.types";

export type CheckboxProps = BaseCheckboxProps & {
  onPress?: () => void;
};

function renderTitle(title: ReactNode) {
  if (typeof title === "string" || typeof title === "number") {
    return (
      <Text size="sm" className="relative top-px text-sm text-gray-900">
        {title}
      </Text>
    );
  }

  return title;
}

export function Checkbox({
  className,
  controlled = true,
  disabled = false,
  help,
  onChange = () => {},
  onPress,
  selected = false,
  title,
}: CheckboxProps) {
  const [value, setValue] = useState(selected);

  useEffect(() => {
    if (controlled) {
      setValue(selected);
    }
  }, [controlled, selected]);

  return (
    <Pressable
      accessibilityRole="checkbox"
      accessibilityState={{ checked: value, disabled }}
      disabled={disabled}
      onPress={() => {
        const nextValue = !value;
        setValue(nextValue);
        onChange(nextValue);
        onPress?.();
      }}
      className={cn(
        "flex flex-row items-start gap-2.5",
        disabled && "opacity-50",
        className
      )}
    >
      <View
        className={cn(
          "mt-0.5 h-5 w-5 items-center justify-center rounded border border-solid",
          value
            ? "border-primary bg-primary"
            : "border-gray-500 bg-white"
        )}
      >
        <Icon
          icon={Check}
          size="xs"
          strokeWidth={2.4}
          color={value ? "#ffffff" : "transparent"}
        />
      </View>
      <View className="min-w-0 flex-1">
        {title ? renderTitle(title) : null}
        {help ? (
          <Text size="xs" gray className="mt-1">
            {help}
          </Text>
        ) : null}
      </View>
    </Pressable>
  );
}
