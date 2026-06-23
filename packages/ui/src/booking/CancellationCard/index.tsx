import { CalendarCheck } from "lucide-react";
import { Card } from "../Card";
import type { TActivity } from "../types/activity";
import { cn } from "../utils/css/cn";
import { useI18n } from "../utils/i18n/useI18n";

type CancellationCardProps = {
  activity?: TActivity;
  className?: string;
  compact?: boolean;
  inline?: boolean;
  bare?: boolean;
  titleOnly?: boolean;
  hideIconBelowSm?: boolean;
  mutedTitle?: boolean;
};

export const CancellationCard = ({
  activity,
  className,
  compact = false,
  inline = false,
  bare = false,
  titleOnly = false,
  hideIconBelowSm = false,
  mutedTitle = false,
}: CancellationCardProps) => {
  const { t } = useI18n();

  if (!activity?.summary?.cancellation) return null;

  const cutOff = activity.summary.cancellationCutOff ?? 0;
  const isDays = cutOff > 24;
  const val = isDays ? (cutOff / 24).toFixed(2).replace(".00", "") : String(cutOff);
  const subtitle = t(isDays ? "usps.cancel.subtitleDays" : "usps.cancel.subtitle", { val });

  if (bare) {
    return (
      <div className={cn("flex items-center gap-3", className)}>
        <span
          aria-hidden
          className={cn(
            "flex shrink-0 items-center justify-center text-primary",
            compact ? "h-6 w-6" : "h-8 w-8"
          )}
        >
          <CalendarCheck className={compact ? "h-6 w-6" : "h-8 w-8"} />
        </span>
        <div className="flex min-w-0 flex-col">
          <span className="text-sm font-semibold leading-tight text-black">
            {t("usps.cancel.title")}
          </span>
          <span className="mt-0.5 text-xs leading-tight text-gray-600">{subtitle}</span>
        </div>
      </div>
    );
  }

  if (inline) {
    return (
      <div className={cn("inline-flex max-w-full items-center gap-2", className)}>
        <span
          aria-hidden
          className={cn(
            "h-4 w-4 shrink-0 items-center justify-center text-primary",
            hideIconBelowSm ? "hidden sm:flex" : "flex"
          )}
        >
          <CalendarCheck className="h-4 w-4" />
        </span>
        <div className="min-w-0 leading-none lg:line-clamp-1">
          <span
            className={cn(
              "text-xs font-semibold leading-tight",
              mutedTitle ? "text-gray-600" : "text-black"
            )}
          >
            {t("usps.cancel.title")}
          </span>
          {titleOnly ? null : (
            <>
              {" "}
              <span className="text-xs leading-tight text-gray-600">{subtitle}</span>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <Card className={cn("flex items-center gap-3", compact ? "p-3" : "p-4")}>
        <span
          aria-hidden
          className={cn(
            "flex shrink-0 items-center justify-center text-primary",
            compact ? "h-6 w-6" : "h-8 w-8"
          )}
        >
          <CalendarCheck className={compact ? "h-6 w-6" : "h-8 w-8"} />
        </span>
        <div className="flex min-w-0 flex-col">
          <span className="text-sm font-semibold leading-tight text-black">
            {t("usps.cancel.title")}
          </span>
          <span className="mt-0.5 text-xs leading-tight text-gray-600">{subtitle}</span>
        </div>
      </Card>
    </div>
  );
};
