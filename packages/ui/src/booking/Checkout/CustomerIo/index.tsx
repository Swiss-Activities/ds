import { useEffect, useRef, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useShallow } from "zustand/react/shallow";
import { useCartStore } from "../../Cart/store";
import { useHasContactDataFilledIn } from "../hooks";
import { useCheckoutStore } from "../store";
import { Content } from "../../Content";
import { useIsReadyToBook } from "../../Total/hooks";
import { useUrlObject } from "../../UrlState/hooks";
import { useBooking } from "../../hooks";
import { TReservation } from "../../types/reservation";
import { useWidget } from "../../utils/env/useWidget";
import { useI18n } from "../../utils/i18n/useI18n";
import { useUser } from "../../utils/user/useUser";

const Fallback = () => {
  return null;
};

export const CustomerIo = () => {
  const [shouldRender, setShouldRender] = useState(false);
  const cioRef = useRef<any>(null);

  const { locale } = useI18n();
  const { user, isLoading } = useUser();
  const { getHrefWithObjString } = useUrlObject();
  const isWidget = useWidget();
  const { data } = useCheckoutStore(
    useShallow((state) => ({
      data: state.data,
    }))
  );
  const { cart } = useCartStore(
    useShallow((state) => ({
      cart: state.cart,
    }))
  );
  const { isReadyToBook } = useIsReadyToBook();
  const { openBooking } = useBooking();
  const { hasContactDataFilledIn } = useHasContactDataFilledIn();
  const [hasSent, setHasSent] = useState(false);

  const ensureCioLoaded = async () => {
    if (!cioRef.current) {
      const { AnalyticsBrowser } =
        await import("@customerio/cdp-analytics-browser");
      cioRef.current = AnalyticsBrowser.load({
        cdnURL: "https://cdp-eu.customer.io",
        writeKey: "4be210da70b9586b267b",
      });
    }
  };

  const identifyFromLocalStorage = async () => {
    await ensureCioLoaded();
    const cio = cioRef.current!;
    await cio.identify(undefined, {
      email: data?.email,
      first_name: data?.fullName,
      last_name: data?.lastName,
      country_code: data?.countryCode,
      user_locale: locale,
      restore_cart_url: getHrefWithObjString(),
    });
    await cio.reset();
  };

  useEffect(() => {
    setHasSent(false);
  }, [cart?.cartId]);

  useEffect(() => {
    try {
      if (
        hasSent ||
        isLoading ||
        (user ? !user?.isCustomer : false) ||
        isWidget
      ) {
        return;
      }

      if (!hasContactDataFilledIn || cart?.customData?.length !== 1) return;

      const bookingData = cart?.customData[0];

      openBooking({
        activity: bookingData.activity,
        reservation: bookingData.reservation as unknown as TReservation,
        hide: true,
        openHidden: true,
      });
      setShouldRender(true);
      setHasSent(true);
    } catch (e) {}
  }, [cart, data, isLoading, user, isWidget, hasContactDataFilledIn, hasSent]);

  useEffect(() => {
    if (isReadyToBook) {
      identifyFromLocalStorage();
    }
  }, [isReadyToBook]);

  if (!shouldRender) return null;

  return (
    <div className="hidden">
      <ErrorBoundary FallbackComponent={Fallback}>
        <Content />
      </ErrorBoundary>
    </div>
  );
};
