import { useShallow } from "zustand/react/shallow";
import { useTransportStore } from "../Transport/store";
import { useBookingStore } from "../store";
import { Button } from "@swiss-activities/ui";
import { Text } from "@swiss-activities/ui";
import { useI18n } from "../utils/i18n/useI18n";
import { Activities, dataLayerSend } from "../utils/thirdParty/dataLayerSend";
import { useDeleteReservation } from "../query/booking/deleteReservation";

export const Trash = () => {
  const { t } = useI18n();
  const { activity, setActive, reservation } = useBookingStore(
    useShallow((state) => ({
      activity: state.activity,
      setActive: state.setActive,
      reservation: state.reservation,
    }))
  );
  const { setActiveTransport } = useTransportStore(
    useShallow((state) => ({
      setActiveTransport: state.setActive,
    }))
  );
  const {
    mutateAsync: deleteReservation,
    isSuccess,
    isPending,
  } = useDeleteReservation();

  const handleYes = async () => {
    await deleteReservation({
      reservationId: reservation?.reservationId as string,
    });

    dataLayerSend({
      obj: {
        event: "remove_from_cart",
      },
      timeout: 0,
      activities: [{ reservation, activity }] as unknown as Activities,
    });

    window.location.reload();
  };

  const handleNo = () => {
    if (reservation?.tripId) {
      setActiveTransport("trip");
    } else {
      setActive("date");
    }
  };

  return (
    <>
      <style>{`[data-drawer="bottom"] { display: none; } @media (min-width: 1024px) { [data-drawer="inner"] { max-height: none; overflow: hidden; padding-top: 1px; } [data-drawer="inner"] > div { max-height: none; overflow: hidden;  } }`}</style>
      <div className="mt-6 flex flex-col gap-6">
        <Text className="text-center" size="default">
          {t("pages.basket.warning")}
        </Text>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            type="primary"
            text={t("pages.basket.delete")}
            onClick={handleYes}
            className="min-w-[120px]"
            loading={isPending || isSuccess}
          />
          <Button
            type="transparent"
            text={t("pages.basket.cancel")}
            onClick={handleNo}
            className="min-w-[120px]"
          />
        </div>
      </div>
    </>
  );
};
