export const niceDate = (obj: {
  date: string;
  locale: string;
  time?: string;
}) => {
  return `${new Date(obj.date).toLocaleDateString(
    obj.locale.replace("_", "-"),
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  )}${
    obj.time
      ? ` - ${new Date(obj.date).toLocaleTimeString("en-GB").slice(0, -3)}`
      : ""
  }`;
};
