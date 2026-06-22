import type { ReactNode } from "react";
import { Card } from "../Card";
import { Button } from "@swiss-activities/ui";
import { cn } from "../utils/css/cn";

type SelectableCardProps = {
  id?: string;
  children?: ReactNode;
  topText?: ReactNode;
  bottomText?: ReactNode;
  isSelected?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  card?: boolean;
};

export const SelectableCard = ({
  id,
  children,
  topText,
  bottomText,
  isSelected = false,
  onClick,
  className,
  card = false,
}: SelectableCardProps) => {
  const content = (
    <>
      {topText && bottomText ? (
        <div className="flex flex-col items-start">
          <p className="whitespace-nowrap text-base font-medium text-black">
            {topText}
          </p>
          <p className="text-muted mt-1 whitespace-nowrap text-base">
            {bottomText}
          </p>
        </div>
      ) : (
        children
      )}
    </>
  );

  return (
    <Button
      id={id}
      variant="outline"
      onClick={(e: React.MouseEvent) => {
        e.stopPropagation();
        onClick?.(e);
      }}
      className={cn(
        "flex h-auto items-center rounded-lg border border-solid border-gray-200 bg-white px-3.5 py-2.5",
        {
          "border-primary": isSelected && !card,
          "outline-primary": isSelected && card,
          "border-0": card,
        },
        className
      )}
      asChild={card}
    >
      {card ? <Card>{content}</Card> : content}
    </Button>
  );
};
