import React from "react";
import { Text } from "@swiss-activities/ui";
import { getPageUrl } from "../../utils/content/loaders";
import { useI18n } from "../../utils/i18n/useI18n";

type TosTextProps = {
  className?: string;
};

export const TosText = ({ className }: TosTextProps) => {
  const { t, locale } = useI18n();

  return (
    <Text size="xs" className={className}>
      {t.rich("booking.privacyMessage", {
        text: t("booking.privacyPolicy"),
        tos: (chunks) => (
          <a
            target="_blank"
            href={getPageUrl("tos_b2c", locale)}
            className="text-gray-700 underline hover:no-underline"
          >
            {chunks}
          </a>
        ),
      })}
    </Text>
  );
};
