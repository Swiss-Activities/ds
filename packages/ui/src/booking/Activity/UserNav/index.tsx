import { Button } from "@swiss-activities/ui";
import { I } from "../../components/I";
import i18n from "../../data/i18n";
import { useI18n } from "../../utils/i18n/useI18n";

export const UserNav = ({ bookingId }: { bookingId: string }) => {
  const { t, locale } = useI18n();

  return (
    <div className="mt-6 flex items-center gap-4 rounded-lg">
      <Button
        type="primary"
        target="_blank"
        href={`https://mobiletickets.swissactivities.com/b/${bookingId}`}
        className="w-max"
        text={t("pages.confirmation.download")}
        icon={<I icon="ticket" />}
      />
      <Button
        type="secondary"
        href={
          locale === "de_CH"
            ? `/account/bookings/${bookingId}/`
            : `/${i18n.formatLocaleForUrl(locale)}/account/bookings/${bookingId}/`
        }
        className="w-max"
        text={t("general.manageBookings")}
        icon={<I icon="arrow-right" />}
      />
    </div>
  );
};
