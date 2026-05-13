import clsx from "clsx";
import React from "react";
import {
  ActivityIndicator as NativeActivityIndicator,
  Pressable,
  View,
} from "react-native";

import { dsMobileTokens } from "../tokens/mobile";
import { nativeClassName } from "./native-class-name";
import { Text, TextWeight } from "./text";

export enum ButtonVariant {
  DEFAULT = "default",
  CTA = "cta",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
}

export type MobileButtonProps = {
  variant?: ButtonVariant;
  classNames?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  isNarrow?: boolean;
  onPress: () => void;
  onLongPress?: () => void;
};

export const Button: React.FC<React.PropsWithChildren<MobileButtonProps>> = ({
  children,
  variant = ButtonVariant.DEFAULT,
  classNames,
  isDisabled,
  isLoading = false,
  isNarrow = false,
  onPress,
  onLongPress,
}) => {
  const press = () => {
    if (!isDisabled) {
      onPress();
    }
  };

  const longPress = () => {
    if (!isDisabled) {
      onLongPress?.();
    }
  };

  return (
    <Pressable disabled={isDisabled} onPress={press} onLongPress={longPress}>
      {({ pressed }) => (
        <View
          {...nativeClassName(
            clsx(
              "relative flex min-h-[48px] items-center justify-center rounded-lg border border-solid px-3.5 py-2.5",
              classNames,
              {
                "px-4 py-3": !isNarrow,
                "min-h-[36px] px-2.5 py-1": isNarrow,
                "border-gray-400 bg-white":
                  variant === ButtonVariant.DEFAULT && !isDisabled && !pressed,
                "border-gray-500 bg-gray-500":
                  variant === ButtonVariant.DEFAULT && pressed && !isDisabled,
                "border-primary bg-primary":
                  variant === ButtonVariant.CTA && !isDisabled && !pressed,
                "border-gray-300 bg-gray-300":
                  isDisabled &&
                  (variant === ButtonVariant.DEFAULT ||
                    variant === ButtonVariant.CTA ||
                    variant === ButtonVariant.SECONDARY),
                "border-dark bg-dark":
                  variant === ButtonVariant.CTA && pressed && !isDisabled,
                "border-blue bg-blue":
                  variant === ButtonVariant.SECONDARY &&
                  !isDisabled &&
                  !pressed &&
                  !isLoading,
                "border-blue bg-blue opacity-80":
                  variant === ButtonVariant.SECONDARY &&
                  pressed &&
                  !isDisabled &&
                  !isLoading,
                "border-transparent bg-transparent":
                  variant === ButtonVariant.TERTIARY ||
                  (variant === ButtonVariant.SECONDARY &&
                    !pressed &&
                    !isDisabled &&
                    isLoading),
              }
            )
          )}
        >
          <Text
            classNames={clsx("text-center text-sm", {
              "opacity-0": isLoading,
              "text-gray-700":
                variant === ButtonVariant.DEFAULT && !pressed && !isDisabled,
              "text-gray-500": variant === ButtonVariant.DEFAULT && isDisabled,
              "text-white":
                (variant === ButtonVariant.DEFAULT && pressed && !isDisabled) ||
                variant === ButtonVariant.CTA ||
                variant === ButtonVariant.SECONDARY,
              "text-primary": variant === ButtonVariant.TERTIARY && !pressed,
              "text-dark":
                variant === ButtonVariant.TERTIARY && pressed && !isDisabled,
            })}
            weight={TextWeight.MEDIUM}
          >
            {children}
          </Text>
          {isLoading && (
            <View
              {...nativeClassName(
                "absolute inset-0 bottom-0 top-0 items-center justify-center"
              )}
            >
              <NativeActivityIndicator
                size="small"
                color={
                  variant === ButtonVariant.DEFAULT
                    ? dsMobileTokens.colors.sa.blue
                    : dsMobileTokens.colors.white
                }
              />
            </View>
          )}
        </View>
      )}
    </Pressable>
  );
};
