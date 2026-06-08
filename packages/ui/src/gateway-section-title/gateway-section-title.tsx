import { Icon } from "../icon/icon";
import { ChevronRight } from "../icons";
import type { GatewaySectionTitleProps } from "./gateway-section-title.types";

export function GatewaySectionTitle({
  title,
  href,
  pillarPath,
  ...props
}: GatewaySectionTitleProps) {
  if (!href) {
    return title;
  }

  return (
    <a
      href={href}
      className="group inline-flex cursor-pointer items-center gap-2 text-inherit no-underline [font:inherit]"
      data-pillar-path={pillarPath ?? undefined}
      {...props}
    >
      <span>{title}</span>
      <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors group-hover:bg-primary group-hover:text-white">
        <Icon icon={ChevronRight} size="sm" aria-hidden />
      </span>
    </a>
  );
}
