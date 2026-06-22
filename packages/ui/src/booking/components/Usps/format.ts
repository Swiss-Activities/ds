import languageListData from "../../data/constants/languageList";

type LanguageOption = { value: string; label: string };

export function formatGuideLanguages(guideLanguages: unknown, locale: string) {
  const values = Array.isArray(guideLanguages)
    ? (guideLanguages as string[]).filter(Boolean)
    : [];

  if (!values.length) {
    return "";
  }

  const languageList = languageListData.languageList as Record<
    string,
    LanguageOption[]
  >;

  return values
    .map(
      (value) =>
        (languageList?.[locale] || languageList.en_CH).find(
          (item) => item.value === value
        )?.label
    )
    .filter(Boolean)
    .join(", ");
}
