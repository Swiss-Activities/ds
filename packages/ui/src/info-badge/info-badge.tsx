import type { HTMLAttributes } from "react";
import { cn } from "../utils/cn";
import { Text } from "../text";
import type { BaseInfoBadgeProps } from "./info-badge.types";

export type InfoBadgeProps = BaseInfoBadgeProps &
  Omit<HTMLAttributes<HTMLDivElement>, "children" | "title">;

export function InfoBadge({
  icon,
  title,
  subtitle,
  className,
  ...props
}: InfoBadgeProps) {
  return (
    <div className={cn("flex items-center gap-2", className)} {...props}>
      <div className="flex shrink-0 text-gray-700 [&_svg]:h-7 [&_svg]:w-7">
        {icon}
      </div>
      <div className="flex flex-col">
        <Text as="span" size="xs" black bold className="!leading-tight">
          {title}
        </Text>
        {subtitle && (
          <Text as="span" size="xs" gray className="!leading-tight">
            {subtitle}
          </Text>
        )}
      </div>
    </div>
  );
}
