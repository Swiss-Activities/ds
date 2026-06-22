import { Fragment, createElement, useContext, type ReactNode } from "react";
import {
  BookingI18nContext,
  type BookingMessages,
} from "./BookingI18nProvider";

type TranslationValues = Record<string, string | number>;

type RichTagFunction = (chunks: ReactNode) => ReactNode;

type RichTranslationValues = Record<string, ReactNode | RichTagFunction>;

type TranslateFunction = {
  (key: string, values?: TranslationValues): string;
  raw: (key: string) => string;
  rich: (key: string, values?: RichTranslationValues) => ReactNode;
};

const resolve = (messages: BookingMessages, key: string): unknown => {
  let current: unknown = messages;
  for (const segment of key.split(".")) {
    if (current === null || typeof current !== "object") return undefined;
    current = (current as Record<string, unknown>)[segment];
  }
  return current;
};

const interpolate = (template: string, values?: TranslationValues): string => {
  if (!values) return template;
  let result = template;
  for (const [token, value] of Object.entries(values)) {
    result = result.split(`{${token}}`).join(String(value));
  }
  return result;
};

const isRichTagFunction = (
  value: ReactNode | RichTagFunction
): value is RichTagFunction => typeof value === "function";

const renderRich = (
  template: string,
  values: RichTranslationValues
): ReactNode => {
  const tagPattern = /<(\w+)>([\s\S]*?)<\/\1>/g;
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;

  const pushPlain = (text: string) => {
    if (!text) return;
    let segment = text;
    for (const [token, value] of Object.entries(values)) {
      if (!isRichTagFunction(value)) {
        segment = segment.split(`{${token}}`).join(String(value));
      }
    }
    if (segment) {
      nodes.push(createElement(Fragment, { key: key++ }, segment));
    }
  };

  for (
    let match = tagPattern.exec(template);
    match !== null;
    match = tagPattern.exec(template)
  ) {
    pushPlain(template.slice(lastIndex, match.index));
    const [, tag, inner] = match;
    const render = values[tag];
    const innerNodes = renderRich(inner, values);
    nodes.push(
      createElement(
        Fragment,
        { key: key++ },
        isRichTagFunction(render) ? render(innerNodes) : innerNodes
      )
    );
    lastIndex = match.index + match[0].length;
  }

  pushPlain(template.slice(lastIndex));

  return nodes;
};

export const useI18n = () => {
  const { locale, messages } = useContext(BookingI18nContext);

  const translate = (key: string, values?: TranslationValues): string => {
    const value = resolve(messages, key);
    if (typeof value !== "string") return key;
    return interpolate(value, values);
  };

  const t = translate as TranslateFunction;

  t.raw = (key: string): string => {
    const value = resolve(messages, key);
    return value as string;
  };

  t.rich = (key: string, values?: RichTranslationValues): ReactNode => {
    const value = resolve(messages, key);
    if (typeof value !== "string") return key;
    return renderRich(value, values ?? {});
  };

  const isRtl = locale === "ar_AE";

  return { t, locale, isRtl };
};
