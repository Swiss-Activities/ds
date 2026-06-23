import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import type { AxiosError } from "axios";
import { useShallow } from "zustand/react/shallow";
import { Accordion } from "../../../components/Accordion";
import { useCartStore } from "../../../Cart/store";
import { useCheckoutStore } from "../../store";
import { Button } from "@swiss-activities/ui";
import { Input } from "../../../components/Form/Input";
import { I } from "../../../components/I";
import { Toast } from "../../../components/Toast";
import { TRebateResponse } from "../../../types/rebate";
import { useI18n } from "../../../utils/i18n/useI18n";
import { emailRegex } from "../../../utils/string/emailRegex";
import { useUser } from "../../../utils/user/useUser";
import { useGetRebate } from "../../../query/booking/getRebate";
import { useUpdateCart } from "../../../query/booking/updateCart";

export const Rebate = () => {
  const { t } = useI18n();
  const { user, isLoading } = useUser();
  const [rebate, setRebate] = useState("");
  const [rebateData, setRebateData] = useState<TRebateResponse | null>(null);
  const [isDiscountError, setIsDiscountError] = useState("");
  const [showEmailWarning, setShowEmailWarning] = useState(false);

  const { cart } = useCartStore(
    useShallow((state) => ({
      cart: state.cart,
    }))
  );

  const { checkoutData } = useCheckoutStore(
    useShallow((state) => ({
      checkoutData: state.data,
    }))
  );

  const isEmailValidated =
    !!user ||
    (!!checkoutData?.email &&
      emailRegex.test(checkoutData.email) &&
      !!checkoutData?.confirmEmail &&
      checkoutData.email === checkoutData.confirmEmail);

  useEffect(() => {
    if (cart?.rebateCodes.length) {
      setRebate(cart.rebateCodes[0]);
    }
  }, [cart]);

  useEffect(() => {
    if (isEmailValidated && showEmailWarning) {
      setShowEmailWarning(false);
    }
  }, [isEmailValidated, showEmailWarning]);

  const { mutate: getRebateMutation, isPending: isPendingGet } = useGetRebate();
  const { mutate: updateCartMutate, isPending: isPendingMutate } =
    useUpdateCart();

  const isPending = isPendingGet || isPendingMutate;

  const isDiscount =
    (!!rebateData && rebateData.isRedeemable) || !!cart?.rebateCodes?.length;

  const handleRebateInput = (e: ChangeEvent<HTMLInputElement>) => {
    setRebate(e.target.value);
    if (isDiscountError) {
      setIsDiscountError("");
    }
    if (showEmailWarning) {
      setShowEmailWarning(false);
    }
  };

  const handleRebate = (e: FormEvent) => {
    if (isLoading) return;

    e.preventDefault();

    if (!rebate.trim() || !cart?.cartId) {
      setIsDiscountError("");
      return;
    }

    if (!isEmailValidated) {
      setShowEmailWarning(true);
      return;
    }

    getRebateMutation(
      {
        rebateId: rebate.trim(),
        cartId: cart.cartId,
        email: user?.email || checkoutData?.email,
      },
      {
        onSuccess: (data: TRebateResponse) => {
          if (data.isRedeemable) {
            setRebateData(data);
            setIsDiscountError("");

            updateCartMutate({
              cartId: cart.cartId,
              data: {
                rebateCodes: [data.code, ...cart.rebateCodes],
                email: user?.email || checkoutData?.email,
              },
            });
          } else {
            setIsDiscountError("");
            setRebateData(null);
          }
        },
        onError: (error: Error) => {
          setIsDiscountError(
            (
              (error as AxiosError)?.response?.data as {
                detail: string;
              }
            )?.detail
          );
          setRebateData(null);
          console.error("Failed to apply rebate:", error);
        },
      }
    );
  };

  const handleRebateRemove = async (e: FormEvent) => {
    e.preventDefault();

    updateCartMutate(
      {
        cartId: cart.cartId,
        data: {
          rebateCodes: [],
        },
      },
      {
        onSuccess: () => {
          setRebate("");
          setRebateData(null);
          setIsDiscountError("");
        },
      }
    );
  };

  return (
    <div className="-mx-2 mt-0">
      <Accordion
        className="!min-h-[40px] !px-2 hover:!bg-white"
        classNameChildren="!pb-0 !px-2 lg:!pb-4"
        item={{ text: t("booking.rebate") }}
      >
        <div>
          <form
            onSubmit={isDiscount ? handleRebateRemove : handleRebate}
            id="rebate"
            className="grid grid-cols-[1fr_auto] gap-4"
          >
            <Input
              key="rebate-code"
              name="rebateCode"
              placeholder={t("booking.rebate")}
              errors={isDiscountError}
              value={rebate}
              onInput={handleRebateInput}
              disabled={isDiscount || isPending}
            />
            <Button
              type="secondary"
              className="!min-h-[38px] w-[44px]"
              size="sm"
              submit
              form="rebate"
              disabled={isPending}
              loading={isPending}
            >
              <I
                className="flex"
                icon={isDiscount ? "trash-can" : "arrow-right"}
              />
            </Button>
          </form>
          {isDiscountError ? (
            <Toast warning className="mt-2">
              {isDiscountError || t("confirm.failed")}
            </Toast>
          ) : null}
          {showEmailWarning ? (
            <Toast warning className="mt-2">
              {t("booking.rebateEmailRequired")}
            </Toast>
          ) : null}
        </div>
      </Accordion>
    </div>
  );
};
