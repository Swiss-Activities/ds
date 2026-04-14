import React from "react";
import type { TouchableOpacityProps } from "react-native";
import { Text, TouchableOpacity, View } from "react-native-css/components";
import { cn } from "../utils/cn";
import { buttonComponentId, type BaseButtonProps } from "./button.types";
import {
  buttonContainerStyles,
  buttonTextStyles,
} from "./button.variants.native";

export type ButtonProps = BaseButtonProps &
  Omit<TouchableOpacityProps, "children"> & { className?: string };

export function Button({
  children = null,
  variant = "primary",
  size = "default",
  disabled,
  className,
  ...props
}: ButtonProps) {
  const isInstruction = variant === "instruction";
  const shouldApplyDisabledStyles = Boolean(disabled) && !isInstruction;
  const isDisabled = Boolean(disabled) || isInstruction;
  const textClassName = cn(
    buttonTextStyles({
      variant,
      size,
      disabled: shouldApplyDisabledStyles,
    })
  );
  const childNodes = React.Children.toArray(children);
  const isTextOnly = childNodes.every(
    (child) => typeof child === "string" || typeof child === "number"
  );

  return (
    <TouchableOpacity
      accessibilityRole="button"
      className={cn(
        buttonContainerStyles({
          variant,
          size,
          disabled: shouldApplyDisabledStyles,
        }),
        className
      )}
      disabled={isDisabled}
      {...props}
    >
      {isTextOnly ? (
        <Text className={textClassName}>{children}</Text>
      ) : (
        <View className="flex flex-row items-center justify-center gap-1.5">
          {childNodes.map((child, index) =>
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
}

(Button as { saComponent?: string }).saComponent = buttonComponentId;
