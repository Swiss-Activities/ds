import { useEffect, useState } from "react";
import { Train } from "lucide-react";
import { Button, Text } from "@swiss-activities/ui";
import { Badge } from "../../components/Badge";
import { useCheckoutStore } from "../../Checkout/store";
import { Transport } from "../../Transport";
import { Places } from "../../Transport/Places";
import { useTransportStoreLocal } from "../../Transport/store";
import { useBookingStore } from "../../store";
import { useDrawerStore } from "../../store/drawer";
import { useSearchParams } from "../../utils/i18n/navigation";
import { useI18n } from "../../utils/i18n/useI18n";

type TransportSectionProps = {
  booking: any;
};

export const TransportSection = ({ booking }: TransportSectionProps) => {
  const { t } = useI18n();
  const setOpen = useDrawerStore((state) => state.setOpen);
  const from = useTransportStoreLocal((state) => state.from);

  const service = booking?.items?.[0]?.service;

  const meetingPoint =
    service?.meetingPointLatitude && service?.meetingPointLongitude
      ? {
          latitude: parseFloat(service.meetingPointLatitude),
          longitude: parseFloat(service.meetingPointLongitude),
        }
      : undefined;

  const meetingPointInfo = service
    ? {
        name: service.meetingPointName,
        address: service.meetingPointAddress,
        activity: service.activity,
        importantInfo: service.importantInfo,
      }
    : undefined;

  useEffect(() => {
    useTransportStoreLocal.setState({
      fromValue: "",
      from: null,
      toValue: "",
      to: null,
      viaValues: [],
      vias: [],
      selectedTripId: "",
      trips: {},
    });

    useBookingStore.setState({
      isInlineCheckout: true,
    });
  }, []);

  useEffect(() => {
    if (!booking?.bookingId) return;

    if (booking?.user) {
      const user = booking.user;
      const nameParts = (user.fullName || "").split(" ");
      const firstName = nameParts[0] || user.givenName || "";
      const lastName = nameParts.slice(1).join(" ") || user.familyName || "";
      const phone = (user.phone || "").replace(/^\+/, "");

      useCheckoutStore.setState({
        data: {
          fullName: firstName,
          lastName,
          email: user.email || "",
          confirmEmail: user.email || "",
          phoneNumber: phone,
          countryCode: user.countryCode || "CH",
        },
      });
    }
  }, [booking?.bookingId]);

  const searchParams = useSearchParams();
  const autoOpen = searchParams?.get("showTransport") === "true";
  const [hasOpenedDrawer, setHasOpenedDrawer] = useState(false);
  const heroImageStyle = service?.teaserImageUrl
    ? { backgroundImage: `url(${service.teaserImageUrl})` }
    : undefined;
  const openTransportModal = () => setOpen("transport-modal");

  useEffect(() => {
    if (hasOpenedDrawer) return;
    if (autoOpen || from) {
      setHasOpenedDrawer(true);
      setOpen("transport-modal");
    }
  }, [from, autoOpen, setOpen]);

  return (
    <>
      <div className="relative overflow-hidden rounded-3xl bg-blue text-white shadow-sm">
        {heroImageStyle && (
          <div
            aria-hidden
            className="absolute inset-0 bg-cover bg-center opacity-25"
            style={heroImageStyle}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-blue/95 via-blue/90 to-blue/80" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-blue via-blue/80 to-transparent" />
        <div className="relative grid gap-0 lg:grid-cols-[minmax(0,0.8fr)_minmax(360px,1fr)]">
          <div className="flex flex-col justify-between p-5 sm:p-6 lg:p-7">
            <div>
              <Badge type="glass" size="lg">
                <Train className="h-3 w-3" strokeWidth={2.5} aria-hidden />
                {t("pages.transport.hero.badges.partner")}
              </Badge>
              <Text as="h2" size="lg" bold className="mt-4 text-white">
                {t("confirm.transport.title")}
              </Text>
              <Text size="sm" className="mt-2 max-w-md text-white/85">
                {t("confirm.transport.description")}
              </Text>
            </div>
          </div>
          <div className="p-3 pt-0 sm:p-4 lg:p-5 lg:ps-0">
            <Places
              disableTo
              toLabel={service?.activity}
              hideSettings
              className="!mx-0 !max-w-none"
              cardClassName="border-0 bg-white shadow-[0_22px_50px_rgba(0,0,0,0.24)]"
              title={t("Transport.searchTrips")}
            >
              <div className="flex flex-col gap-3 py-3 lg:flex-row lg:items-center lg:justify-end">
                <Button
                  text={t("confirm.transport.button")}
                  type="primary"
                  className="w-full lg:w-auto"
                  onClick={openTransportModal}
                />
              </div>
            </Places>
          </div>
        </div>
      </div>
      <Transport
        meetingPoint={meetingPoint}
        meetingPointInfo={meetingPointInfo}
        bookingDate={booking?.items?.[0]?.startsAt}
        activityImageUrl={service?.teaserImageUrl}
      />
    </>
  );
};
