import { getCountryCallingCode } from "libphonenumber-js";
import type { CountryCode } from "libphonenumber-js";

export const createCompletePhoneNumber = (
  phoneNumber: string | undefined,
  countryCode: CountryCode | undefined
) => {
  if (!phoneNumber || !countryCode) return null;

  return `${getCountryCallingCode(
    countryCode as CountryCode
  )}${phoneNumber}`.replace(/\D/g, "");
};
