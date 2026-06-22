import { useShallow } from "zustand/react/shallow";
import { useCartStore } from "../../../Cart/store";
import { PaymentMethod } from "./PaymentMethod";
import { useIsFree } from "../../hooks";
import { StaticImage } from "../../../components/StaticImage";
import { Skeleton } from "@swiss-activities/ui";
import { useI18n } from "../../../utils/i18n/useI18n";

export const PaymentPayyo = () => {
  const { t } = useI18n();

  const { isFree } = useIsFree();

  const { cart, cartLoadingState } = useCartStore(
    useShallow((state) => ({
      cart: state.cart,
      cartLoadingState: state.loadingState,
    }))
  );

  if (!cart || !cart?.reservations?.length || isFree) {
    return null;
  }

  if (cartLoadingState === "loading") {
    return <Skeleton loading={true} size="lg" amount={1} className="h-32" />;
  }

  return (
    <div className="mt-4 flex flex-col space-y-2 lg:mt-5">
      <PaymentMethod
        value="twint"
        title="Twint"
        payment={
          <StaticImage
            width={40}
            height={27}
            src="/assets/booking/twint.svg"
            alt="Twint"
          />
        }
      />
      <PaymentMethod
        value="card"
        title={t("booking.creditPayments")}
        payment={
          <>
            <StaticImage
              width={40}
              height={27}
              src="/assets/booking/visa.svg"
              alt="visa"
            />
            <StaticImage
              width={40}
              height={27}
              src="/assets/booking/mastercard.svg"
              alt="mastercard"
            />
            <StaticImage
              width={40}
              height={27}
              src="/assets/booking/express.svg"
              alt="american express"
            />
            <StaticImage
              width={40}
              height={27}
              src="/assets/booking/amex.svg"
              alt="american express"
            />
            <StaticImage
              width={40}
              height={27}
              src="/assets/booking/discover.svg"
              alt="discover"
            />
          </>
        }
      />
      <PaymentMethod
        value="apple_pay"
        title="ApplePay"
        payment={
          <StaticImage
            fill
            sizes="10vw"
            src="/assets/footer/applepay.png"
            alt="ApplePay"
            className="max-w-[40px]"
          />
        }
      />
      <PaymentMethod
        value="ideal"
        title="iDEAL"
        payment={
          <StaticImage
            width={29}
            height={60}
            src="/assets/booking/ideal.svg"
            alt="iDEAL"
          />
        }
      />
      <PaymentMethod
        value="alipay"
        title="Alipay"
        payment={
          <StaticImage
            width={70}
            height={35}
            src="/assets/booking/alipay.svg"
            alt="Alipay"
            className="!object-contain"
          />
        }
      />
      <PaymentMethod
        value="postfinance"
        title="Postfinance"
        payment={
          <StaticImage
            width={96}
            height={26}
            src="/assets/booking/postfinance.png"
            alt="Postfinance"
            public
          />
        }
      />
    </div>
  );
};
