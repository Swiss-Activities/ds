import { useState, type FormEvent } from "react";
import { Button } from "@swiss-activities/ui";
import { Form } from "../../components/Form";
import { Radio } from "../../components/Form/Radio";
import { Textarea } from "../../components/Form/Textarea";
import { useI18n } from "../../utils/i18n/useI18n";
import { useDataLayer } from "../../utils/thirdParty/dataLayerSend";
import { logError } from "../../utils/thirdParty/logError";
import { cancelBookingItemApi } from "../../query/booking/cancelBookingItem";

type ItemType = {
  reservation: {
    bookingItemId: string;
  };
};

type CancelProps = {
  bookingObject: any;
  item: ItemType;
};

export const Cancel = ({ bookingObject, item }: CancelProps) => {
  const { dataLayer } = useDataLayer();
  const { t } = useI18n();
  const [customReason, setCustomReason] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [reason, setReason] = useState("");

  const onCancel = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const obj = await bookingObject("refund");

    return cancelBookingItemApi(
      item.reservation.bookingItemId,
      reason === "custom" ? customReason : reason
    )
      .then((e: any) => {
        if (e.status === 500) {
          return logError(e.statusText);
        }
        dataLayer(obj);
        window.location.reload();
      })
      .catch((err) => {
        logError(err);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="flex pb-6 lg:pb-0">
      <Form onSubmit={onCancel}>
        <Radio
          required
          onChange={(e) => {
            setIsCustom(e === "custom");
            setReason(e);
          }}
          title={t("pages.confirmation.cancelWhy")}
          options={(
            t.raw("pages.confirmation.cancelReasons") as unknown as []
          ).map((e, i, arr) => {
            return {
              value: i === arr.length - 1 ? "custom" : e,
              label: e,
            };
          })}
        />
        {isCustom && (
          <Textarea
            required
            value={customReason}
            onChange={(e) => setCustomReason(e.target.value)}
          />
        )}
        <Button loading={isLoading} type="secondary" className="w-full" submit>
          {t("pages.confirmation.cancel")}
        </Button>
      </Form>
    </div>
  );
};
