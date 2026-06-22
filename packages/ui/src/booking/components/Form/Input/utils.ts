import { useState, useEffect } from "react";
import mailcheck from "mailcheck";

mailcheck.defaultDomains.push(
  "gmail.com",
  "hotmail.com",
  "bluewin.ch",
  "yahoo.com",
  "icloud.com",
  "outlook.com",
  "web.de",
  "me.com",
  "aol.com",
  "sunrise.ch",
  "qq.com",
  "t-online.de",
  "hispeed.ch",
  "googlemail.com",
  "163.com",
  "msn.com",
  "comcast.net",
  "orange.fr",
  "live.com",
  "naver.com",
  "wp.pl",
  "btinternet.com",
  "bigpond.com",
  "datazug.ch",
  "ymail.com",
  "swissonline.ch",
  "protonmail.com",
  "mac.com",
  "seznam.cz",
  "wanadoo.fr",
  "laposte.net",
  "windowslive.com",
  "freenet.de",
  "mail.ru",
  "mailbox.org",
  "besonet.ch",
  "mail.ch",
  "vtxmail.ch",
  "libero.it",
  "quickline.ch",
  "verizon.net",
  "att.net",
  "iu.edu",
  "netplus.ch",
  "free.fr",
  "interia.pl",
  "126.com",
  "arcor.de",
  "shinternet.ch",
  "posteo.de",
  "proton.me",
  "sbcglobal.net",
  "sensemail.ch",
  "sky.com",
  "bellsouth.net",
  "online.de",
  "umich.edu",
  "kabelmail.de",
  "sfr.fr"
);

export interface EmailSuggestion {
  address: string;
  domain: string;
  full: string;
}

export const checkEmailForSuggestions = (
  email: string
): Promise<EmailSuggestion | null> => {
  return new Promise((resolve) => {
    if (!email || typeof email !== "string" || !email.includes("@")) {
      resolve(null);
      return;
    }

    mailcheck.run({
      email: email.trim(),
      suggested: (suggestion: EmailSuggestion) => {
        resolve(suggestion);
      },
      empty: () => {
        resolve(null);
      },
    });
  });
};

export const isEmailSuggestionValid = (
  email: string,
  suggestion: EmailSuggestion | null
): boolean => {
  if (!suggestion) return false;

  return suggestion.full.toLowerCase() !== email.toLowerCase();
};

export const useEmailSuggestion = (
  email: string | number | undefined,
  type?: string
) => {
  const [emailSuggestion, setEmailSuggestion] =
    useState<EmailSuggestion | null>(null);

  useEffect(() => {
    if (type === "email" && email && typeof email === "string") {
      checkEmailForSuggestions(email).then((suggestion) => {
        if (isEmailSuggestionValid(email, suggestion)) {
          setEmailSuggestion(suggestion);
        } else {
          setEmailSuggestion(null);
        }
      });
    } else {
      setEmailSuggestion(null);
    }
  }, [email, type]);

  return emailSuggestion;
};
