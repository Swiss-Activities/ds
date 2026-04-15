"use client";

import {
  type InputHTMLAttributes,
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
    InputHTMLAttributes<HTMLInputElement>,
    "children" | "onChange" | "size" | "title" | "type"
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
      <input
        {...props}
        id={resolvedId}
        name={name}
        disabled={disabled}
        required={required}
        type="checkbox"
        checked={value}
        onChange={(event) => {
          const nextValue = event.target.checked;
          setValue(nextValue);
          onChange(nextValue);
        }}
        className="sr-only"
      />
      <span
        aria-hidden="true"
        className={cn(
          "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-solid transition",
          value
            ? "border-primary bg-primary text-white"
            : "border-gray-500 bg-white text-transparent",
          !disabled && "hover:border-gray-700"
        )}
      >
        <Icon icon={Check} size="xs" strokeWidth={2.4} />
      </span>
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
