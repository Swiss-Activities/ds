import {
  createContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import i18n from "../../data/i18n";
import deCH from "../../i18n/locales/de_CH.json";

export type BookingMessages = Record<string, unknown>;

export type BookingI18nContextValue = {
  locale: string;
  messages: BookingMessages;
};

const baseMessages = deCH as BookingMessages;

export const BookingI18nContext = createContext<BookingI18nContextValue>({
  locale: i18n.defaultLocale,
  messages: baseMessages,
});

const normalizeLocale = (locale: string): string => {
  const normalized = i18n.formatLocaleForUrlReverse(locale);
  return i18n.allLocales.includes(normalized)
    ? normalized
    : i18n.defaultLocale;
};

const loadMessages = (code: string): Promise<BookingMessages> =>
  import(`../../i18n/locales/${code}.json`).then(
    (module: { default: BookingMessages }) => module.default
  );

export const BookingI18nProvider = ({
  locale,
  children,
}: {
  locale: string;
  children: ReactNode;
}) => {
  const code = normalizeLocale(locale);
  const [messages, setMessages] = useState<BookingMessages>(() =>
    code === i18n.defaultLocale ? baseMessages : { ...baseMessages }
  );

  useEffect(() => {
    if (code === i18n.defaultLocale) {
      setMessages(baseMessages);
      return;
    }

    let active = true;
    setMessages({ ...baseMessages });
    loadMessages(code).then((localeMessages) => {
      if (active) {
        setMessages({ ...baseMessages, ...localeMessages });
      }
    });

    return () => {
      active = false;
    };
  }, [code]);

  const value = useMemo<BookingI18nContextValue>(
    () => ({ locale: code, messages }),
    [code, messages]
  );

  return (
    <BookingI18nContext.Provider value={value}>
      {children}
    </BookingI18nContext.Provider>
  );
};
