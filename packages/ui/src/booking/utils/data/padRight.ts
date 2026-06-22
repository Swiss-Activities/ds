export const padRight = (
  value: number | string,
  ending: string = ".00"
): string => {
  const stringValue = value.toString();

  if (stringValue.endsWith(ending)) {
    return stringValue;
  }

  return `${stringValue}${ending}`;
};
