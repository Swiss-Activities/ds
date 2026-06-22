import { ReactNode } from "react";
import { cn } from "../utils/css/cn";

type TitleProps = {
  className?: string;
  children: ReactNode;
};

export const Title = ({ children, className }: TitleProps) => {
  return (
    <p className={cn("mb-6 text-xl font-semibold text-black", className)}>
      {children}
    </p>
  );
};
