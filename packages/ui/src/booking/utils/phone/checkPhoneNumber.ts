import { parsePhoneNumberFromString } from "libphonenumber-js";

export const checkPhoneNumber = (phoneNumber: string | null) => {
  if (!phoneNumber) return false;

  phoneNumber = phoneNumber.startsWith("+") ? phoneNumber : "+" + phoneNumber;
  const phone = parsePhoneNumberFromString(phoneNumber || "");

  return phone?.isPossible() || false;
};
