import { TicketGroup } from "./TicketGroup";
import { Title } from "../Title";
import { useI18n } from "../utils/i18n/useI18n";

export const Tickets = () => {
  const { t } = useI18n();

  return (
    <div>
      <Title>{t("activity.widget.titleTickets")}</Title>
      <TicketGroup />
    </div>
  );
};
