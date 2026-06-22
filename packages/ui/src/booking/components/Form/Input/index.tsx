import React, { useState, useEffect } from "react";
import { ChangeEvent, InputHTMLAttributes } from "react";
import { Skeleton } from "@swiss-activities/ui";
import { Text } from "@swiss-activities/ui";
import { cn } from "../../../utils/css/cn";
import { useI18n } from "../../../utils/i18n/useI18n";
import { emailRegex } from "../../../utils/string/emailRegex";
import { Base } from "../Base";
import { useEmailSuggestion } from "./utils";

type InputProps = {
  className?: string;
  errors?: any;
  outerError?: boolean;
  help?: string;
  isLoading?: boolean;
  keepPlaceholder?: boolean;
  onInput?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  row?: boolean;
  rowFull?: boolean;
  showSkeleton?: boolean;
  title?: string;
  type?:
    | "text"
    | "number"
    | "password"
    | "email"
    | "tel"
    | "search"
    | "url"
    | "date"
    | "time";
  valid?: boolean;
  value?: string | number | undefined;
  [key: string]: any;
};

export const Input = ({
  className = "",
  errors = null,
  outerError = false,
  help = "",
  isLoading = false,
  keepPlaceholder = false,
  onChange,
  onInput,
  placeholder = "",
  required = false,
  row = false,
  rowFull = false,
  showSkeleton = false,
  title = "",
  type = "text",
  valid = true,
  value = undefined,
  ...rest
}: InputProps & Omit<InputHTMLAttributes<HTMLInputElement>, "onInput">) => {
  const handleChange = onInput || onChange || ((_: any) => {});
  const { t } = useI18n();

  const isEmailInvalid =
    type === "email" && value && !emailRegex.test(String(value));
  const isValid = (valid && value && !errors && !isEmailInvalid) as boolean;

  const [dynamicPlaceholder, setDynamicPlaceholder] = useState(placeholder);
  const emailSuggestion = useEmailSuggestion(value, type);

  useEffect(() => {
    if (keepPlaceholder && placeholder) {
      const inputLength = (value || "").toString().length;
      const newPlaceholder = placeholder.slice(inputLength);
      setDynamicPlaceholder(newPlaceholder || placeholder);
    }
  }, [value, keepPlaceholder, placeholder]);

  const handleSuggestionClick = () => {
    if (emailSuggestion && handleChange) {
      const syntheticEvent = {
        target: { value: emailSuggestion.full, name: rest.name },
      } as ChangeEvent<HTMLInputElement>;
      handleChange(syntheticEvent);
    }
  };

  return (
    <Base
      {...{ title, isValid, row, rowFull, help, required }}
      isError={outerError ? errors : !!emailSuggestion}
      after={
        outerError ? (
          <Text className="mt-1 text-gray-600">{errors}</Text>
        ) : (
          emailSuggestion &&
          !isEmailInvalid && (
            <div className="mt-1 block w-full">
              <Text className="text-gray-600">
                {t.rich("general.didYouMean", {
                  email: emailSuggestion.full,
                  suggestion: (chunks) => (
                    <button
                      className="cursor-pointer border-none bg-transparent p-0 text-sm text-primary underline shadow-none sm:hover:no-underline lg:text-[15px]"
                      onClick={handleSuggestionClick}
                    >
                      {chunks}
                    </button>
                  ),
                })}
              </Text>
            </div>
          )
        )
      }
      classNameCircle={cn({
        "!end-10": type === "date" || type === "number",
      })}
    >
      {keepPlaceholder && placeholder?.length > (value as string)?.length && (
        <Text className="pointer-events-none absolute start-3 top-1/2 -translate-y-1/2 !text-base !text-gray-500 lg:!text-sm">
          <span className="invisible">{value}</span>
          {dynamicPlaceholder}
        </Text>
      )}
      <input
        {...rest}
        onChange={handleChange}
        {...{ value, type, required }}
        placeholder={keepPlaceholder ? "" : placeholder}
        className={cn(
          "form-input h-[40px] w-full rounded-md border border-solid border-gray-300 text-base text-black transition-colors duration-100 ease-in focus:border-primary focus:ring-0 sm:pb-[10px] sm:text-sm",
          {
            "border-green-600 focus:border-green-600": isValid,
            "border-primary focus:border-primary": emailSuggestion,
            "!text-gray-500": rest.disabled,
          },
          className
        )}
      />
      {showSkeleton && <Skeleton loading={isLoading} full className="z-30" />}
    </Base>
  );
};
