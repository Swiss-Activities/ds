import { Logo, Text } from "@swiss-activities/ui";
import { cn } from "../../utils/css/cn";
import { useI18n } from "../../utils/i18n/useI18n";

type SplashScreenProps = {
  show?: boolean;
};

export const SplashScreen = ({ show }: SplashScreenProps) => {
  const { t } = useI18n();

  return (
    <div
      id="splash-screen"
      className={cn(
        "pointer-events-none fixed start-0 top-0 z-[10000000000000000] flex h-full w-full flex-col items-center justify-center bg-white opacity-0 backdrop-blur transition duration-300",
        {
          "opacity-100": show,
        }
      )}
    >
      <div className="[&_svg]:!h-24 [&_svg]:!w-36 lg:[&_svg]:!h-32 lg:[&_svg]:!w-48">
        <div className="relative overflow-hidden">
          <Logo />
          <div className="shimmer-logo absolute inset-0" />
        </div>
      </div>
      <Text size="md" className="px-8 text-center">
        {t("pages.confirmation.stay")}
      </Text>
    </div>
  );
};
