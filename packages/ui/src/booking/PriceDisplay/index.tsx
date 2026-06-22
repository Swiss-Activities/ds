import { cn } from "../utils/css/cn";
import { useI18n } from "../utils/i18n/useI18n";

type PriceDisplayProps = {
  price?: number | null;
  from?: boolean;
  className?: string;
  total?: boolean;
  prefix?: boolean;
  size?: "md" | "lg";
};

export const PriceDisplay = ({
  price,
  from,
  className,
  total,
  prefix = true,
  size = "md",
}: PriceDisplayProps) => {
  const { t } = useI18n();

  if (!price) return null;

  return (
    <div className={cn(className, "price-display")}>
      <div className="flex items-center">
        <div className="ms-auto flex items-end gap-2">
          {prefix && (
            <p className="text-muted relative text-sm font-medium leading-none xs:-top-px">
              {total ? t("booking.total") : t("filter.card.person")}
            </p>
          )}
          <p
            className={cn(
              "text-lg font-semibold text-black",
              {
                "text-xl": size === "lg",
              },
              "!leading-none"
            )}
          >
            {from ? `${t("filter.card.from")} ` : ""}CHF {price.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};
