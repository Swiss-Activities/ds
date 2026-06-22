import type { MouseEvent } from "react";
import { Button } from "@swiss-activities/ui";
import { cn } from "../utils/css/cn";

type CategoryTypeOption = {
  label: string;
  typeKey: "1st_class" | "2nd_class";
  price: string;
};

type CategoryTypeSelectorProps = {
  options: CategoryTypeOption[];
  className?: string;
  selectedType: "1st_class" | "2nd_class" | null;
  onSelect: (type: "1st_class" | "2nd_class") => void;
};

export const CategoryTypeSelector = ({
  options,
  className,
  selectedType,
  onSelect,
}: CategoryTypeSelectorProps) => {
  return (
    <div className={cn("flex gap-2", className)}>
      {options.map((option) => {
        const isSelected = selectedType === option.typeKey;

        return (
          <Button
            variant="outline"
            onClick={(e: MouseEvent<HTMLButtonElement>) => {
              e.stopPropagation();
              onSelect(option.typeKey);
            }}
            id={`category-type-${option.typeKey}`}
            key={option.typeKey}
            className={cn(
              "flex h-auto items-center rounded-lg border border-solid border-gray-200 px-3 py-2.5",
              {
                "border-primary": isSelected,
              }
            )}
          >
            <div className="flex items-center">
              <div className="flex flex-col items-start">
                <p className="text-base font-medium text-black">
                  {option.label}
                </p>
                <p className="text-muted mt-1 text-base">{option.price}</p>
              </div>
            </div>
          </Button>
        );
      })}
    </div>
  );
};
