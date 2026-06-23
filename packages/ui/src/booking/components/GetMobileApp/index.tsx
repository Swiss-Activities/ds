import type { ComponentProps } from "react";
import { Text } from "@swiss-activities/ui";
import { StaticImage } from "../StaticImage";
import { cn } from "../../utils/css/cn";
import { useI18n } from "../../utils/i18n/useI18n";

type GetMobileAppProps = {
  addon?: boolean;
  center?: boolean;
  className?: string;
  descriptionProps?: ComponentProps<typeof Text>;
  size?: "sm" | "md";
  text?: boolean;
  textProps?: ComponentProps<typeof Text>;
};

export const GetMobileApp = ({
  addon = false,
  center = false,
  className,
  descriptionProps,
  size = "md",
  text = true,
  textProps,
}: GetMobileAppProps) => {
  const { t, locale } = useI18n();

  return (
    <div className={className}>
      {text ? <Text {...textProps}>{t("footer.mobileApp")}</Text> : null}
      {addon ? (
        <Text size="xs" {...descriptionProps}>
          {t("general.mobileAppAddon")}
        </Text>
      ) : null}
      <div
        className={cn("flex", {
          "flex-row gap-4": center,
          "flex-col gap-2": !center,
          "mt-3": text,
        })}
      >
        <a
          target="_blank"
          aria-label={`${t("footer.mobileApp")} App Store`}
          href="https://apps.apple.com/de/app/swiss-activities/id6450682217"
        >
          <StaticImage
            public
            src={`/assets/appstore/app/${locale}.svg`}
            alt="App Store"
            width={size === "md" ? 135 : 120}
            height={30}
          />
        </a>
        <a
          target="_blank"
          aria-label={`${t("footer.mobileApp")} Google Play`}
          href={`https://play.google.com/store/apps/details?id=com.swissactivities.app13776&hl=${
            locale.split("_")[0]
          }`}
        >
          <StaticImage
            public
            src={`/assets/appstore/play/${locale}.png`}
            alt="Google Play"
            width={size === "md" ? (center ? 151 : 135) : 133}
            height={30}
          />
        </a>
      </div>
    </div>
  );
};
