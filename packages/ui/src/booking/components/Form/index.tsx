import { type ReactNode, useRef, useEffect, type FormEvent } from "react";
import type { CountryCode } from "libphonenumber-js";
import { cn } from "../../utils/css/cn";
import { useI18n } from "../../utils/i18n/useI18n";
import { checkPhoneNumber } from "../../utils/phone/checkPhoneNumber";
import { createCompletePhoneNumber } from "../../utils/phone/createCompletePhoneNumber";

const isValidIBAN = (iban: string) => {
  iban = iban.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();

  const rearranged = iban.slice(4) + iban.slice(0, 4);
  const numericalIBAN = rearranged
    .split("")
    .map((char) => {
      if (isNaN(Number(char))) {
        return char.charCodeAt(0) - "A".charCodeAt(0) + 10;
      } else {
        return char;
      }
    })
    .join("");

  let remainder = 0;
  let block = "";

  for (let i = 0; i < numericalIBAN.length; i++) {
    block = `${block}${numericalIBAN[i]}`;

    if (block.length >= 9) {
      remainder = parseInt(block, 10) % 97;
      block = remainder.toString();
    }
  }

  remainder = parseInt(block, 10) % 97;
  return remainder === 1;
};

type FormProps = {
  children: ReactNode;
  className?: string;
  onSubmit?: (e: FormEvent) => void;
  [key: string]: any;
};

export const Form = ({
  children = null,
  className = "",
  onSubmit = (_e: FormEvent) => {},
  ...rest
}: FormProps) => {
  const form = useRef<HTMLFormElement>(null);
  const { t } = useI18n();

  const getInputs = (
    selector: string
  ): NodeListOf<HTMLInputElement> | HTMLInputElement[] => {
    if (!form.current) return [];
    const phoneInputs = form.current.querySelectorAll<HTMLInputElement>(selector);
    if (!phoneInputs.length) return [];
    return phoneInputs;
  };

  const resetInputs = (selector: string) => {
    const elements = getInputs(selector);
    if (!elements) return;
    elements.forEach((phone: HTMLInputElement) => {
      phone.setCustomValidity("");
    });
  };

  const resetTelInputs = () => resetInputs('input[type="tel"]');
  const resetEmailInputs = () => resetInputs('input[type="email"]');
  const resetIbanInputs = () => resetInputs("input[data-form-iban]");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    let allInputsValid = true;

    if (form.current) {
      getInputs('input[type="tel"]').forEach((phoneInput: HTMLInputElement) => {
        const countryCode = phoneInput?.closest("div")?.querySelector("select")
          ?.value as CountryCode;
        const phoneIsValid = checkPhoneNumber(
          createCompletePhoneNumber(phoneInput.value, countryCode)
        );

        if (!phoneIsValid) {
          phoneInput.setCustomValidity(t("SettingsForm.phoneNumber"));
          phoneInput.reportValidity();
          allInputsValid = false;
        } else {
          phoneInput.setCustomValidity("");
        }
      });

      getInputs('input[type="email"]').forEach(
        (emailInput: HTMLInputElement) => {
          const emailPattern =
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

          if (emailInput.value && !emailPattern.test(emailInput.value)) {
            emailInput.setCustomValidity(t("SettingsForm.email"));
            emailInput.reportValidity();
            allInputsValid = false;
          } else {
            emailInput.setCustomValidity("");
          }
        }
      );

      getInputs("input[data-form-iban]").forEach(
        (ibanInput: HTMLInputElement) => {
          if (ibanInput.value && !isValidIBAN(ibanInput.value)) {
            ibanInput.setCustomValidity(t("SettingsForm.iban"));
            ibanInput.reportValidity();
            allInputsValid = false;
          } else {
            ibanInput.setCustomValidity("");
          }
        }
      );
    }

    if (!allInputsValid) {
      return;
    }

    onSubmit(e);
  };

  useEffect(() => {
    if (!form.current) return;

    const phoneInputs = getInputs('input[type="tel"]');
    const emailInputs = getInputs('input[type="email"]');
    const ibanInputs = getInputs("input[data-form-iban]");

    phoneInputs.forEach((phone: HTMLInputElement) => {
      phone.addEventListener("input", resetTelInputs);
    });
    emailInputs.forEach((email: HTMLInputElement) => {
      email.addEventListener("input", resetEmailInputs);
    });
    ibanInputs.forEach((iban: HTMLInputElement) => {
      iban.addEventListener("input", resetIbanInputs);
    });

    return () => {
      phoneInputs.forEach((phone: HTMLInputElement) => {
        phone.removeEventListener("input", resetTelInputs);
      });
      emailInputs.forEach((email: HTMLInputElement) => {
        email.removeEventListener("input", resetEmailInputs);
      });
      ibanInputs.forEach((iban: HTMLInputElement) => {
        iban.removeEventListener("input", resetIbanInputs);
      });
    };
  }, []);

  return (
    <form
      {...rest}
      ref={form}
      className={cn(`grid grid-cols-1 gap-4`, className)}
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  );
};
