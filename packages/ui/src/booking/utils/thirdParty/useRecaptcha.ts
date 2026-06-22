"use client";

import { useCallback, useEffect, useRef } from "react";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (
        siteKey: string,
        options: { action: string }
      ) => Promise<string>;
    };
  }
}

const RECAPTCHA_SCRIPT_ID = "recaptcha-v3-script";
const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY as string;

function loadScript() {
  if (document.getElementById(RECAPTCHA_SCRIPT_ID)) return;
  const script = document.createElement("script");
  script.id = RECAPTCHA_SCRIPT_ID;
  script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
  script.async = true;
  document.head.appendChild(script);
}

export function useRecaptcha() {
  const loaded = useRef(false);

  useEffect(() => {
    if (!loaded.current) {
      loadScript();
      loaded.current = true;
    }
  }, []);

  const executeRecaptcha = useCallback(async (action: string) => {
    return new Promise<string>((resolve, reject) => {
      const check = () => {
        if (window.grecaptcha) {
          window.grecaptcha.ready(() => {
            window
              .grecaptcha!.execute(siteKey, { action })
              .then(resolve, reject);
          });
        } else {
          setTimeout(check, 100);
        }
      };
      check();
    });
  }, []);

  return { executeRecaptcha };
}
