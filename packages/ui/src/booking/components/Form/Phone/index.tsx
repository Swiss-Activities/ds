import React, { type ChangeEvent } from "react";
import { getCountryCallingCode, AsYouType } from "libphonenumber-js";
import type { CountryCallingCode, CountryCode } from "libphonenumber-js";
import { Input } from "../Input";
import { Skeleton } from "@swiss-activities/ui";
import { Select } from "../Select";
import { countryList } from "../../../data/constants/countryList";
import { cn } from "../../../utils/css/cn";
import { useI18n } from "../../../utils/i18n/useI18n";
import { checkPhoneNumber } from "../../../utils/phone/checkPhoneNumber";
import { createCompletePhoneNumber } from "../../../utils/phone/createCompletePhoneNumber";
import { Base } from "../Base";

type Value = {
  countryCode: CountryCode;
  phoneNumber: string;
};

type PhoneProps = {
  disabled?: boolean;
  index?: number | string;
  isLoading?: boolean;
  onInput?: (data: Value) => void;
  required?: boolean;
  row?: boolean;
  rowFull?: boolean;
  showSkeleton?: boolean;
  title?: string;
  value?: Value;
};

export const Phone = ({
  disabled = false,
  index,
  isLoading = false,
  onInput = () => {},
  required = false,
  row = false,
  rowFull = false,
  showSkeleton = false,
  title = "",
  value = {
    countryCode: "CH",
    phoneNumber: "",
  },
}: PhoneProps) => {
  const { locale } = useI18n();
  const isValid = checkPhoneNumber(
    createCompletePhoneNumber(
      value?.phoneNumber,
      (value?.countryCode || "").toUpperCase() as CountryCode
    )
  );
  const countryListByLocale = countryList as Record<
    string,
    { value: CountryCode; label: string }[]
  >;
  const countries = (countryListByLocale?.[locale] || countryListByLocale.en_CH)
    .map((e) => {
      let callingCode: CountryCallingCode | null;
      try {
        callingCode = getCountryCallingCode(e.value);
      } catch (e) {
        callingCode = null;
      }

      if (!callingCode) return null;

      return {
        value: e.value,
        label: `${e.label} (+${callingCode})`,
        callingCode,
      };
    })
    .filter(
      (e): e is { value: CountryCode; label: string; callingCode: CountryCallingCode } =>
        e !== null
    );

  const handleCountryCodeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const countryCode = e.target.value as CountryCode;
    onInput({
      ...value,
      countryCode,
      phoneNumber: new AsYouType(countryCode).input(value?.phoneNumber || ""),
    } as Value);
  };

  const handlePhoneInput = (e: ChangeEvent<HTMLInputElement>) => {
    let phoneNumber = e.target.value;
    phoneNumber = new AsYouType(value?.countryCode).input(phoneNumber);

    onInput({
      ...value,
      phoneNumber,
    } as Value);
  };

  return (
    <Base
      {...{ title, row, rowFull, required }}
      className={cn("[&_select]:!ps-3", {
        "[&_select]:border-green-600": isValid,
      })}
      as="div"
    >
      <Select
        {...{ required, disabled }}
        name={index ? `countryCode-${index}` : "countryCode"}
        options={countries}
        className={cn("relative w-full rounded-b-none focus:z-10", {
          "!border-green-600": isValid,
        })}
        onChange={handleCountryCodeChange}
        selected={(value?.countryCode || "CH").toUpperCase()}
        advanced="desktop"
        advancedFlush
      />
      <Input
        {...{ required, disabled }}
        name={index ? `phoneNumber-${index}` : "phoneNumber"}
        placeholder="23 456 78 99"
        className="relative -mt-px rounded-t-none focus:z-10"
        onInput={handlePhoneInput}
        value={value?.phoneNumber}
        type="tel"
        valid={isValid}
      />
      {showSkeleton && <Skeleton loading={isLoading} full className="z-30" />}
    </Base>
  );
};
