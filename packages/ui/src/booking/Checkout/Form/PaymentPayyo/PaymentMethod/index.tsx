import { type KeyboardEvent, type ReactNode, useEffect } from "react";
import { useShallow } from "zustand/react/shallow";
import { useCartStore } from "../../../../Cart/store";
import { useCheckoutStore } from "../../../store";
import { Checkbox } from "../../../../components/Form/Checkbox";
import { Radio } from "../../../../components/Form/Radio";
import { I } from "../../../../components/I";
import { Text } from "@swiss-activities/ui";
import type { TUser } from "../../../../types/user";
import { cn } from "../../../../utils/css/cn";
import { useI18n } from "../../../../utils/i18n/useI18n";
import { type Activities, useDataLayer } from "../../../../utils/thirdParty/dataLayerSend";
import { useUser } from "../../../../utils/user/useUser";

type PaymentMethodProps = {
  currentValue?: ReactNode;
  payment: ReactNode;
  title: string;
  value: string;
};

export const PaymentMethod = ({
  payment,
  title,
  value,
}: PaymentMethodProps) => {
  const { dataLayer } = useDataLayer();
  const { t } = useI18n();
  const { user } = useUser() as unknown as {
    user: TUser;
  };

  const { cart } = useCartStore(
    useShallow((state) => ({
      cart: state.cart,
    }))
  );

  const { data, setData } = useCheckoutStore(
    useShallow((state) => ({
      data: state.dataPayyo,
      setData: state.setDataPayyo,
    }))
  );

  const isActive = value === data.paymentMethod;
  const handleClick = () => {
    setData({ paymentMethod: value });
    dataLayer({
      obj: {
        event: "add_payment_info",
        payment_type: value,
      },
      activities: cart.customData as unknown as Activities,
    });
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  useEffect(() => {
    if (user && user.storePaymentMethods?.length > 0) {
      setData({
        paymentMethodCardId:
          user.storePaymentMethods[0].paymentGatewayReferenceId,
      });
    }
  }, [user]);

  return (
    <div
      className={cn("flex flex-col rounded border border-solid", {
        "border-green-600": isActive,
        "border-gray-300 hover:border-primary": !isActive,
      })}
    >
      <label
        tabIndex={0}
        id={`pay-${title
          .toLowerCase()
          .replaceAll(" ", "-")
          .replaceAll("&", "-")}`}
        className={cn(
          "relative flex min-h-[44px] w-full cursor-pointer flex-row items-center px-3 py-2 pe-2 transition duration-100 ease-in"
        )}
        onKeyDown={handleKeyDown}
      >
        {isActive && (
          <I
            icon="square-check-solid"
            className="me-2 shrink-0 text-green-600"
          />
        )}
        <div className="flex w-full flex-wrap items-center justify-between">
          <Text className="me-4 !text-sm">{title}</Text>
          <input
            onClick={handleClick}
            name="payment"
            type="radio"
            value={value}
            required
            className="absolute !start-0 !top-1/2 w-full !-translate-y-1/2 opacity-0"
          />
          <div className="relative flex w-max space-x-2 [&_img]:!relative">
            {payment}
          </div>
        </div>
      </label>
      {user && value === "card" && isActive && (
        <div className="mt-2 px-3 pb-2">
          {user.storePaymentMethods?.length > 0 && (
            <Radio
              required
              onChange={(e) => setData({ paymentMethodCardId: e })}
              selected={data.paymentMethodCardId as string}
              options={[
                ...user.storePaymentMethods,
                {
                  value: null,
                  label: t("PaymentMethod.card.new"),
                },
              ].map((e: any) => {
                return {
                  value: e?.paymentGatewayReferenceId || e.value,
                  label: e.cardNumber
                    ? t("PaymentMethod.card.endsIn", {
                        val: e.cardNumber.slice(-4),
                      }) +
                      (e.userInputCardName ? ` (${e.userInputCardName})` : "")
                    : e.label,
                };
              })}
            />
          )}
          {(user.storePaymentMethods?.length === 0 ||
            data.paymentMethodCardId === null) && (
            <Checkbox
              selected={data.paymentMethodSaveCard}
              onChange={(value) =>
                setData({ paymentMethodSaveCard: value as unknown as boolean })
              }
              title={t("PaymentMethod.card.store")}
              className="mt-3"
            />
          )}
        </div>
      )}
    </div>
  );
};
