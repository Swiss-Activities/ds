import { useShallow } from "zustand/react/shallow";
import { useCartStore } from "../../../Cart/store";
import { useCheckoutButtonTextOrState } from "../../hooks";
import { useCheckoutStore } from "../../store";
import { Button } from "@swiss-activities/ui";
import { Text } from "@swiss-activities/ui";
import { cn } from "../../../utils/css/cn";

type PaymentButtonProps = {
  className?: string;
  type?: "sm" | "md";
  [key: string]: any;
};

export const PaymentButton = ({
  className,
  type = "md",
  ...rest
}: PaymentButtonProps) => {
  const { isLoading } = useCheckoutStore(
    useShallow((state) => ({
      isLoading: state.isLoading,
    }))
  );

  const { cart } = useCartStore(
    useShallow((state) => ({
      cart: state.cart,
    }))
  );

  const buttonText = useCheckoutButtonTextOrState();

  return (
    <Button
      {...rest}
      form="booking"
      submit
      type="primary"
      className={cn("w-full", className)}
      loading={isLoading}
    >
      {buttonText}
      {type === "sm" && (
        <>
          {" "}
          <br />
          <Text
            size={cart?.customerServiceFee?.amount ? "xs" : "sm"}
            className="text-white/80"
          >
            {cart?.total?.amount
              ? `${
                  cart?.total?.currency +
                  " " +
                  (
                    Number(cart?.total.amount) -
                    Number(cart?.rebatesTotal?.amount || "0.00") -
                    Number(cart?.customerServiceFee?.amount || "0.00")
                  ).toFixed(2)
                }${
                  cart?.customerServiceFee?.amount
                    ? ` (+ ${cart?.customerServiceFee?.formatted} Service Fee)`
                    : ""
                }`
              : ""}
          </Text>
        </>
      )}
    </Button>
  );
};
