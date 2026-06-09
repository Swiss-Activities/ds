"use client";

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import {
  type ReactNode,
  useEffect,
  useId,
  useState,
} from "react";
import { Icon } from "../icon/icon";
import { Check } from "../icons";
import { Text } from "../text";
import { cn } from "../utils/cn";
import type { BaseCheckboxProps } from "./checkbox.types";

export type CheckboxProps = BaseCheckboxProps &
  Omit<
    CheckboxPrimitive.Root.Props,
    "children" | "checked" | "className" | "defaultChecked" | "onCheckedChange" | "title"
  >;

function renderTitle(title: ReactNode) {
  if (typeof title === "string" || typeof title === "number") {
    return (
      <Text as="span" size="sm" className="relative top-px !text-sm !text-gray-900">
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
  name,
  onChange = () => {},
  required = false,
  selected = false,
  title,
  id,
  ...props
}: CheckboxProps) {
  const generatedId = useId();
  const [value, setValue] = useState(selected);
  const resolvedId = id ?? generatedId;

  useEffect(() => {
    if (controlled) {
      setValue(selected);
    }
  }, [controlled, selected]);

  return (
    <label
      htmlFor={resolvedId}
      className={cn(
        "flex cursor-pointer items-start gap-2.5",
        disabled && "pointer-events-none cursor-not-allowed opacity-50",
        className
      )}
    >
      <CheckboxPrimitive.Root
        {...props}
        id={resolvedId}
        name={name}
        disabled={disabled}
        required={required}
        checked={value}
        onCheckedChange={(nextChecked) => {
          const nextValue = nextChecked === true;
          setValue(nextValue);
          onChange(nextValue);
        }}
        className={cn(
          "peer relative mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-solid shadow-xs outline-none transition after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50",
          value
            ? "border-primary bg-primary text-white"
            : "border-gray-500 bg-white text-transparent",
          !disabled && "hover:border-gray-700"
        )}
      >
        <CheckboxPrimitive.Indicator
          data-slot="checkbox-indicator"
          className="grid place-content-center text-current transition-none"
        >
          <Icon icon={Check} size="xs" strokeWidth={2.4} />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <span className="flex min-w-0 flex-1 flex-col">
        {title ? renderTitle(title) : null}
        {help ? (
          <Text as="span" size="xs" gray className="mt-1">
            {help}
          </Text>
        ) : null}
      </span>
    </label>
  );
}
