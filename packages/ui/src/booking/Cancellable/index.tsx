import dayjs from "dayjs";
import { useShallow } from "zustand/react/shallow";
import { useBookingStore } from "../store";
import { Toast } from "../components/Toast";
import { cn } from "../utils/css/cn";
import { toISO } from "../utils/dates/toISO";
import { useI18n } from "../utils/i18n/useI18n";

type CancellableProps = {
  className?: string;
};

export const Cancellable = ({ className }: CancellableProps) => {
  const { t } = useI18n();
  const { availability } = useBookingStore(
    useShallow((state) => ({
      availability: state.availability,
    }))
  );

  if (!availability?.cancellableUntil) return null;

  const d = availability.cancellableUntil;

  return (
    <div className={cn("space-y-2", className)}>
      {dayjs(d).toDate() > dayjs().toDate() ? (
        <Toast className="[&>div]:w-[calc(100%+1rem)] [&>div]:max-w-none">{`${t(
          "booking.cancelable"
        )} ${toISO(d, {
          dateString: true,
        })} ${toISO(d, {
          time: true,
        })}`}</Toast>
      ) : null}
    </div>
  );
};
