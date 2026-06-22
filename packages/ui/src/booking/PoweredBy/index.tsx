import { Logo } from "@swiss-activities/ui";
import { Text } from "@swiss-activities/ui";
import { useWidget } from "../utils/env/useWidget";

export const PoweredBy = () => {
  const isWidget = useWidget();

  return isWidget ? (
    <a
      target="_blank"
      href="https://swissactivities.com"
      className="relative mt-auto flex items-center justify-between"
    >
      <Text className="flex items-center font-bold uppercase" size="xs" gray>
        Powered by
        <br /> Swiss Activities
      </Text>
      <span className="origin-center-right block min-h-[44px] scale-[75%]">
        <Logo />
      </span>
    </a>
  ) : null;
};
