import { useDate } from "../../../utils/date/useDate";
import { cn } from "../../../utils/css/cn";

type TimeProps = {
  time: string;
  className?: string;
} & React.HTMLAttributes<HTMLParagraphElement>;

export const Time = ({ time, className, ...rest }: TimeProps) => {
  const { formatTime } = useDate();

  return (
    <p {...rest} className={cn("text-sm font-bold text-black", className)}>
      {formatTime(time)}
    </p>
  );
};
