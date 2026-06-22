import isString from "lodash/isString";

export const toISO = (
  date: string | Date,
  options?: {
    time?: boolean;
    date?: boolean;
    dateString?: boolean;
  }
) => {
  if (!date) return "";
  const d = new Date(new Date(date).toISOString().slice(0, -1));

  if (options?.time) {
    // @ts-ignore
    return date.match(/\d\d:\d\d/)[0];
  }
  if (options?.date) {
    return new Date(date)
      .toLocaleDateString("en-GB", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      })
      .replaceAll("/", ".");
  }
  if (options?.dateString && isString(date)) {
    const dates = (date as string).substring(0, 10).split("-");
    return `${dates[2]}.${dates[1]}.${dates[0]}`;
  }
  return d;
};
