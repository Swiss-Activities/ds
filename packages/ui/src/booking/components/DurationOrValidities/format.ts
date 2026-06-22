export function formatDurationOrValidities(
  durations: string[],
  t: (key: string, values?: Record<string, string | number>) => string
) {
  const padMinutes = (value: string) => {
    const parts = value.split(":");

    if (parts.length === 2) {
      return `${parts[0]}:${parts[1].padStart(2, "0")}`;
    }

    return value;
  };

  return durations
    .filter((value) => value && value !== "0")
    .map((value) => {
      if (value === "all-day") {
        return t("usps.allDay");
      }

      const days = Number(
        (Number(value.replace(":", ".")) / 24).toFixed(2).replace(".00", "")
      );

      if (Number(value.replace(":", ".")) < 1) {
        return t("usps.duration.durationMinutes", {
          val: value.replace("0:", ""),
        });
      }

      if (days >= 1) {
        return days === 1
          ? t("usps.duration.durationDay", { val: days })
          : t("usps.duration.durationDays", { val: days });
      }

      return Number(value) === 1
        ? t("usps.duration.duration", {
            val: padMinutes(value),
          })
        : t("usps.duration.durations", {
            val: padMinutes(value),
          });
    })
    .join(", ")
    .replace(/,(?!.*,)/gim, ` ${t("usps.or")} `);
}
