import { useState } from "react";
import type { CartStore } from "../../../Cart/store";
import { Button } from "@swiss-activities/ui";
import { Drawer } from "../../../components/Drawer";
import { Radio } from "../../../components/Form/Radio";
import { Textarea } from "../../../components/Form/Textarea";
import { useI18n } from "../../../utils/i18n/useI18n";
import { useDataLayer } from "../../../utils/thirdParty/dataLayerSend";
import { logError } from "../../../utils/thirdParty/logError";
import { cancelBookingItemApi } from "../../../query/booking/cancelBookingItem";

export const useCancelBookingItem = (bookingObject: any) => {
  const { dataLayer } = useDataLayer();
  const [reason, setReason] = useState("");
  const [customReason, setCustomReason] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const cancelDisabled = !reason || (isCustom && !customReason);
  const resolvedReason = reason === "custom" ? customReason : reason;

  const onCancel = async (bookingItemId: string) => {
    if (!bookingItemId || cancelDisabled) return;
    setIsLoading(true);

    const obj = await bookingObject("refund");

    return cancelBookingItemApi(bookingItemId, resolvedReason)
      .then((e: any) => {
        if (e.status === 500) {
          return logError(e.statusText);
        }
        dataLayer(obj);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((err) => {
        logError(err);
        setIsLoading(false);
      });
  };

  const onReasonChange = (e: string) => {
    setIsCustom(e === "custom");
    setReason(e);
  };

  const reset = () => {
    setReason("");
    setCustomReason("");
    setIsCustom(false);
  };

  return {
    customReason,
    isCustom,
    isLoading,
    cancelDisabled,
    setCustomReason,
    onReasonChange,
    onCancel,
    reset,
  };
};

export const CancelForm = ({
  onReasonChange,
  isCustom,
  customReason,
  setCustomReason,
}: {
  onReasonChange: (e: string) => void;
  isCustom: boolean;
  customReason: string;
  setCustomReason: (v: string) => void;
}) => {
  const { t } = useI18n();
  return (
    <>
      <Radio
        required
        onChange={onReasonChange}
        title={t("pages.confirmation.cancelWhy")}
        options={(
          t.raw("pages.confirmation.cancelReasons") as unknown as []
        ).map((e, i, arr) => ({
          value: i === arr.length - 1 ? "custom" : e,
          label: e,
        }))}
      />
      {isCustom && (
        <Textarea
          required
          value={customReason}
          onChange={(e) => setCustomReason(e.target.value)}
          className="mt-4"
        />
      )}
    </>
  );
};

type CancelDrawerProps = {
  bookingId?: string;
  bookingObject: any;
  item: CartStore["cart"]["customData"][number];
};

export const CancelDrawer = ({
  item,
  bookingId,
  bookingObject,
}: CancelDrawerProps) => {
  const { t } = useI18n();
  const cancel = useCancelBookingItem(bookingObject);

  return (
    <Drawer
      ident={`edit-activity-${bookingId}-${item?.activity?.id}`}
      title={t("pages.confirmation.cancel")}
      desktopDrawer="right"
      bottom={
        <Button
          loading={cancel.isLoading}
          type={cancel.cancelDisabled ? "gray" : "primary"}
          className="w-full"
          onClick={() => cancel.onCancel(item.reservation.bookingItemId!)}
        >
          {t("pages.confirmation.cancel")}
        </Button>
      }
    >
      <CancelForm
        onReasonChange={cancel.onReasonChange}
        isCustom={cancel.isCustom}
        customReason={cancel.customReason}
        setCustomReason={cancel.setCustomReason}
      />
    </Drawer>
  );
};
