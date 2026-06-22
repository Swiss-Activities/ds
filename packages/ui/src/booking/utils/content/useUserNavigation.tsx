import { ReactNode } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { I } from "../../components/I";
import i18n from "../../data/i18n";
import { useI18n } from "../i18n/useI18n";
import { getLogoutUrl } from "../string/getLogoutUrl";
import { openChat } from "../thirdParty/openChat";

export const useUserNavigation = ({
  account = false,
}: { account?: boolean } = {}) => {
  const { locale, t } = useI18n();
  const { user } = useUser();

  return Object.entries(t.raw("user.menu"))
    .map(([key, value]) => {
      const iconMap: Record<string, ReactNode> = {
        profile: <I icon="user" />,
        activities: <I icon="person-skiing" />,
        bookings: <I icon="ticket" />,
        settings: <I icon="gear" />,
        chat: <I icon="message-question" />,
        logout: <I icon="right-from-bracket" />,
      };

      return {
        key,
        onClick: key === "chat" ? () => openChat() : undefined,
        text: value,
        icon: iconMap[key],
        href:
          key === "chat"
            ? undefined
            : `${
                !account && locale !== "de_CH" && key !== "logout"
                  ? `/${i18n.formatLocaleForUrl(locale)}`
                  : ""
              }${
                key === "logout"
                  ? getLogoutUrl(locale)
                  : key === "profile" ||
                      (key === "bookings" && user?.isCustomer)
                    ? "/account/"
                    : `/account/${key}/`
              }`,
      };
    })
    .filter((e) =>
      user?.isAdmin
        ? ["activities", "bookings", "settings", "logout"].includes(e.key)
        : user?.isReseller
          ? ["activities", "bookings", "settings", "logout"].includes(e.key)
          : user?.isCustomer
            ? ["bookings", "settings", "logout"].includes(e.key)
            : ["logout"].includes(e.key)
    ) as unknown as {
    key: string;
    onClick?: () => void;
    text: string;
    icon: ReactNode;
    href: string;
  }[];
};
