import { cn } from "../../../utils/css/cn";

const parseDuration = (isoDuration: string) => {
  const match =
    /P(?:([0-9]+)D)?T?(?:([0-9]+)H)?(?:([0-9]+)M)?(?:([0-9]+)S)?/i.exec(
      isoDuration || ""
    );
  if (!match) return { hours: 0, minutes: 0 };
  const days = Number(match[1] || 0);
  const hours = Number(match[2] || 0) + days * 24;
  const minutes = Number(match[3] || 0);
  return { hours, minutes };
};

type DurationProps = {
  duration: string;
};

export const Duration = ({ duration }: DurationProps) => {
  const { hours, minutes } = parseDuration(duration);

  return (
    <span className={cn("text-sm text-gray-600")}>
      {hours > 0 && <>{hours}h </>}
      {(minutes > 0 || hours === 0) && <>{minutes}min</>}
    </span>
  );
};
