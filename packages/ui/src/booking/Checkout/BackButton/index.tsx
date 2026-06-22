import { useBooking } from "../../hooks";
import { Button } from "@swiss-activities/ui";
import { I } from "../../components/I";
import { secureLocalStorage } from "../../utils/data/secureLocalStorage";
import { useI18n } from "../../utils/i18n/useI18n";
import { useGetActivity } from "../../query/activity/getActivity";
import { useGetCart } from "../../query/booking/getCart";
import { useGetReservation } from "../../query/booking/getReservation";

export const BackButton = () => {
  const { t, locale } = useI18n();
  const { openBooking } = useBooking();

  const { data: cart } = useGetCart(
    secureLocalStorage.getItem("cartId") as string
  );

  const { data: activity } = useGetActivity(
    `${cart?.reservations[0].capiActivityId}`,
    locale,
    !!cart?.reservations?.length
  );

  const { data: reservation } = useGetReservation(
    `${cart?.reservations[0].reservationId}`,
    !!cart?.reservations?.length
  );

  const handleClick = () => {
    openBooking({ activity, reservation, fromCheckout: true });
  };

  return (
    <Button
      icon={<I icon="arrow-left" />}
      text={t("pages.basket.edit")}
      size="sm"
      type="pill"
      onClick={handleClick}
    />
  );
};
