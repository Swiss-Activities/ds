import type { ReactNode } from "react";
import { Card as DSCard } from "@swiss-activities/ui";
import type { BaseCardProps } from "@swiss-activities/ui/card/card.types";
import { cn } from "../utils/css/cn";

type CardProps = {
  children: ReactNode;
  className?: string;
  elevation?: BaseCardProps["elevation"];
  paddingNormalised?: boolean;
  paddingNone?: boolean;
  size?: "base" | "lg";
  [key: string]: any;
};

export const Card = ({
  children,
  className,
  elevation = "default",
  paddingNormalised,
  paddingNone,
  size = "base",
  ...rest
}: CardProps) => {
  return (
    <DSCard
      {...rest}
      elevation={elevation}
      noPadding
      className={cn(
        "rounded-xl p-4",
        {
          "border-none p-0": paddingNone,
          "p-4": paddingNormalised,
          "p-4 lg:p-6": size === "lg",
        },
        className
      )}
    >
      {children}
    </DSCard>
  );
};
