import { Image as Image } from "@swiss-activities/ui";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../ui/Tooltip";
import { useI18n } from "../../utils/i18n/useI18n";

type Attribute = {
  text: string;
  code: string;
};

type LegendProps = {
  attributes?: Attribute[];
  variant?: "inline" | "expanded";
};

const EXCLUDED_CODES = ["JY"];

export const Legend = ({
  attributes = [],
  variant = "inline",
}: LegendProps) => {
  const { t } = useI18n();

  const filteredAttributes = attributes.filter(
    (attr) =>
      !EXCLUDED_CODES.includes(attr.code) && !/^\d+$/.test(attr.text.trim())
  );

  if (filteredAttributes.length === 0) return null;

  if (variant === "expanded") {
    return (
      <div className="!mt-6 space-y-2">
        <p className="text-base font-semibold text-black">
          {t("Transport.legend")}
        </p>
        <div className="space-y-2">
          {filteredAttributes.map((attr) => (
            <div key={attr.code} className="flex items-center gap-2">
              <div className="flex w-7 flex-shrink-0 justify-center">
                <Image
                  src={`/assets/sbb/icons/sa-${attr.code.toLowerCase()}.svg`}
                  alt={attr.text}
                  width={0}
                  height={0}
                  className="h-3.5 w-auto"
                />
              </div>
              <span className="text-sm text-gray-600">{attr.text}</span>
            </div>
          ))}
        </div>
        <p className="!mt-4 text-xs text-gray-600">
          {t("Transport.disclaimer")}
        </p>
      </div>
    );
  }

  return (
    <div className="mt-3 flex items-center gap-1.5">
      {filteredAttributes.map((attr) => (
        <Tooltip key={attr.code} delayDuration={0}>
          <TooltipTrigger asChild>
            <div className="cursor-help">
              <Image
                src={`/assets/sbb/icons/sa-${attr.code.toLowerCase()}.svg`}
                alt={attr.text}
                width={0}
                height={0}
                className="h-3.5 w-auto"
              />
            </div>
          </TooltipTrigger>
          <TooltipContent sideOffset={8}>
            <p>{attr.text}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
};
