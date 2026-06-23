import type { ReactNode } from "react";
import { cn } from "@swiss-activities/ui";

type BottomBarProps = {
  className?: string;
  children?: ReactNode;
};

export const BottomBar = ({
  className = "",
  children = null,
}: BottomBarProps) => {
  return (
    <div
      style={{ boxShadow: "0px -3px 6px 0 rgba(0,0,0,0.1)" }}
      className={cn(
        "fixed bottom-0 left-0 z-[20] w-full bg-white px-2 pb-[calc(env(safe-area-inset-bottom,0px)+0.5rem)] pt-2 transition duration-200 lg:left-1/2 lg:max-w-[var(--sa-container)] lg:-translate-x-1/2 lg:rounded-t-xl",
        {
          [className]: className,
        }
      )}
    >
      {children}
    </div>
  );
};
