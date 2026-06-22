import dayjs from "dayjs";
import { Toast } from "../../components/Toast";
import { toISO } from "../../utils/dates/toISO";
import { useI18n } from "../../utils/i18n/useI18n";

type CancellableProps = {
  date?: Date;
  inline?: boolean;
};

export const Cancellable = ({ date, inline }: CancellableProps) => {
  const { t } = useI18n();

  return (
    <div className="space-y-2">
      {date && dayjs(date).toDate() > dayjs().toDate() ? (
        <Toast inline={inline}>{`${t("booking.cancelable")} ${toISO(date, {
          dateString: true,
        })} ${
          toISO(date, {
            time: true,
          }) === "00:00"
            ? "23:59"
            : toISO(date, {
                time: true,
              })
        }`}</Toast>
      ) : null}
    </div>
  );
};
