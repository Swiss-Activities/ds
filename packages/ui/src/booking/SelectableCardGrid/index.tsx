import { ReactNode } from "react";
import { cn } from "../utils/css/cn";

type SelectableCardGridProps = {
  children: ReactNode;
  className?: string;
};

export const SelectableCardGrid = ({
  children,
  className,
}: SelectableCardGridProps) => {
  return (
    <div className={cn("flex w-full flex-wrap gap-3", className)}>
      {children}
    </div>
  );
};
