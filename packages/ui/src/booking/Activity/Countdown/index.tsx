import { useCountdown } from "../../utils/content/useCountdown";

type CountdownProps = {
  item: any;
};

export const Countdown = ({ item }: CountdownProps) => {
  const [_, hours, minutes, seconds] = useCountdown(item.reservation.expiresAt);

  return <>{`${hours}:${minutes}:${seconds}`}</>;
};
