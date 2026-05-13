import type { ReactNode } from "react";
import { Text } from "../text";
import { cn } from "../utils/cn";
import {
  detailDescriptionTextClassName,
  detailDescriptionWrapperClassName,
  detailTitleClassName,
  detailTitleSpacingClassName,
} from "./classes";

export type SectionDetailHeaderProps = {
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  className?: string;
};

export function SectionDetailHeader({
  title,
  description,
  children,
  className,
}: SectionDetailHeaderProps) {
  return (
    <div className={cn(detailTitleSpacingClassName, className)}>
      <div className="min-w-0">
        <Text as="h1" size="xl" className={detailTitleClassName}>
          {title}
        </Text>
        {description ? (
          <div className={detailDescriptionWrapperClassName}>
            {typeof description === "string" ? (
              <Text className={detailDescriptionTextClassName}>
                {description}
              </Text>
            ) : (
              description
            )}
          </div>
        ) : null}
        {children}
      </div>
    </div>
  );
}
