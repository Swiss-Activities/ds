import React, { type ReactNode } from "react";
import { Pencil } from "lucide-react";
import { I } from "../../components/I";
import { Text } from "@swiss-activities/ui";
import { cn } from "../../utils/css/cn";

export type InnerProps = {
  activeType?: boolean;
  dropdown?: boolean;
  icon: ReactNode;
  left?: string;
  open?: string;
  right?: string;
  selected?: string | null;
  selectedShort?: string;
  short?: string;
  showActive?: boolean;
};

export const Inner = ({
  activeType,
  showActive,
  dropdown,
  icon,
  left,
  right,
  selected,
  selectedShort,
  short,
  open,
}: InnerProps) => {
  return selected ? (
    dropdown ? (
      <span className="flex items-center gap-1">
        <span className="text-black [&_svg]:!flex">{icon}</span>
        {selectedShort || selected}
      </span>
    ) : (
      <>
        <div className="flex gap-2 text-left">
          <span className="relative top-1 text-black lg:top-[3px] [&_svg]:!flex">
            {icon}
          </span>
          <Text
            className={cn({
              underline: activeType && showActive,
            })}
            size="sm2"
          >
            {selected}
          </Text>
        </div>
        {(!showActive || (showActive && !activeType)) &&
          (open === "item" ? (
            <I
              icon="xmark"
              className="relative top-1 mb-auto !flex !rotate-0 text-black"
            />
          ) : (
            <Pencil className="relative top-1 mb-auto h-4 w-4 text-black" />
          ))}
      </>
    )
  ) : dropdown ? (
    <span className="flex items-center justify-center">{icon}</span>
  ) : (
    <>
      <Text size="sm2">{left}</Text>
      <Text size="sm2" black>
        {right}
      </Text>
    </>
  );
};
