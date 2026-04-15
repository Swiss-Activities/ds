import React from "react";
import { type TouchableOpacityProps } from "react-native";
import { Text, TouchableOpacity, View } from "react-native-css/components";
import { forwardRef } from "react";
import { Loader } from "../loader/index.native";
import { cn } from "../utils/cn";
import {
  buttonComponentId,
  type BaseButtonProps,
  type ButtonSize,
  type ButtonSizeToken,
  type ButtonVariant,
} from "./button.types";
import {
  buttonContainerStyles,
  buttonTextStyles,
} from "./button.variants.native";

export type ButtonProps = BaseButtonProps &
  Omit<TouchableOpacityProps, "children"> & { className?: string };

function resolveVariant(
  type?: ButtonVariant,
  variant?: ButtonVariant
): ButtonVariant {
  return type ?? variant ?? "secondary";
}

function resolveSize(size?: ButtonSize): ButtonSizeToken {
  if (size === "xs" || size === "sm" || size === "lg") return size;

  return "md";
}

function getSpinnerColor(variant: ButtonVariant, selected: boolean) {
  if (
    variant === "primary" ||
    variant === "blue" ||
    variant === "gray" ||
    variant === "pill-primary" ||
    (variant === "pill" && selected)
  ) {
    return "#ffffff";
  }

  return "#002f49";
}

export const Button = forwardRef<any, ButtonProps>(function Button(
  {
    children = null,
    variant,
    type,
    size = "md",
    disabled,
    icon = null,
    loading = false,
    reverse = false,
    selected = false,
    text = null,
    className,
    ...props
  },
  ref
) {
  const resolvedVariant = resolveVariant(type, variant);
  const resolvedSize = resolveSize(size);
  const isInstruction = resolvedVariant === "instruction";
  const shouldApplyDisabledStyles = Boolean(disabled) && !isInstruction;
  const isDisabled = Boolean(disabled) || isInstruction || loading;
  const usesLegacyPillSize = size === "pill";
  const textClassName = cn(
    buttonTextStyles({
      variant: resolvedVariant,
      size: resolvedSize,
      disabled: shouldApplyDisabledStyles,
    }),
    {
      "!text-white": resolvedVariant === "pill" && selected,
    }
  );
  const childNodes = React.Children.toArray(children ?? []);
  const combinedContent = text != null ? [text, ...childNodes] : childNodes;
  const contentNodes = icon ? [icon, ...combinedContent] : combinedContent;
  const isTextOnly = childNodes.every(
    (child) => typeof child === "string" || typeof child === "number"
  );

  return (
    <TouchableOpacity
      accessibilityRole="button"
      className={cn(
        buttonContainerStyles({
          variant: resolvedVariant,
          size: resolvedSize,
          disabled: shouldApplyDisabledStyles,
        }),
        {
          "min-h-[32px] rounded-full px-3 py-1.5 lg:min-h-[36px]":
            usesLegacyPillSize,
          "bg-blue border-blue": resolvedVariant === "pill" && selected,
        },
        className
      )}
      disabled={isDisabled}
      ref={ref}
      {...props}
    >
      {loading ? (
        <Loader
          color={getSpinnerColor(resolvedVariant, selected)}
          size="sm"
        />
      ) : isTextOnly && !icon && text == null ? (
        <Text className={textClassName}>{children}</Text>
      ) : (
        <View
          className={cn("flex flex-row items-center justify-center gap-2", {
            "flex-row-reverse": reverse,
          })}
        >
          {contentNodes.map((child, index) =>
            typeof child === "string" || typeof child === "number" ? (
              <Text className={textClassName} key={`button-text-${index}`}>
                {child}
              </Text>
            ) : (
              <React.Fragment key={`button-node-${index}`}>
                {child}
              </React.Fragment>
            )
          )}
        </View>
      )}
    </TouchableOpacity>
  );
});

(Button as { saComponent?: string }).saComponent = buttonComponentId;
