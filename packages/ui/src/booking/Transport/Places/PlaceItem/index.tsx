import type { MouseEvent } from "react";
import { MapPinIcon } from "lucide-react";
import { Text } from "@swiss-activities/ui";
import { Button } from "@swiss-activities/ui";

type PlaceItemProps = {
  name: string;
  isCurrentLocation?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

export const PlaceItem = ({
  name,
  isCurrentLocation,
  disabled,
  onClick,
}: PlaceItemProps) => {
  return (
    <Button
      variant="secondary"
      className={`flex h-auto w-full items-center justify-start gap-3 rounded-none bg-transparent py-3 text-start md:px-[1.35rem] ${disabled ? "cursor-not-allowed opacity-50" : "hover:bg-gray-100"}`}
      onClick={disabled ? undefined : () => onClick?.()}
      onMouseDown={(e: MouseEvent<HTMLButtonElement>) => e.preventDefault()}
    >
      <div className="size-4 shrink-0">
        {isCurrentLocation && <MapPinIcon className="size-4 text-gray-500" />}
      </div>
      <Text className="ms-2 text-sm md:text-base">{name}</Text>
    </Button>
  );
};
