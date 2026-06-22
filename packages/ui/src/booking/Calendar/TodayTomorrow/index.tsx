import dayjs from "dayjs";
import { Button } from "@swiss-activities/ui";
import { useSearchStore } from "../../store/search";
import { cn } from "../../utils/css/cn";
import { DateService } from "../../utils/dates/DateService";
import { useI18n } from "../../utils/i18n/useI18n";

type TodayTomorrowProps = {
  className?: string;
};

export const TodayTomorrow = ({ className }: TodayTomorrowProps) => {
  const { t } = useI18n();
  const [date, setDate] = useSearchStore((state) => [
    state.date,
    state.setDate,
  ]);

  const items = [
    {
      text: t("filter.today"),
      selected:
        date === DateService.formatDate(dayjs().startOf("day").toDate()),
      cb: () => {
        const date = DateService.formatDate(dayjs().startOf("day").toDate());
        setDate(date);
      },
      reset: () => setDate(null),
    },
    {
      text: t("filter.tomorrow"),
      selected:
        date ===
        DateService.formatDate(dayjs().add(1, "day").startOf("day").toDate()),
      cb: () => {
        const date = DateService.formatDate(
          dayjs().add(1, "day").startOf("day").toDate()
        );
        setDate(date);
      },
      reset: () => setDate(null),
    },
  ];

  return (
    <div className="flex justify-between gap-4">
      <div className={cn("grid grid-cols-2 gap-2", className)}>
        {items.map((item, index) => {
          return (
            <Button
              key={`first-${index}`}
              type="pill"
              className="whitespace-nowrap !rounded-lg"
              selected={item.selected}
              onClick={!item.selected ? item.cb : item.reset}
            >
              {item.text}
            </Button>
          );
        })}
      </div>
      {date ? (
        <Button
          type="pill"
          className="whitespace-nowrap !rounded-lg"
          text={t("general.reset")}
          onClick={() => setDate("")}
        />
      ) : null}
    </div>
  );
};
