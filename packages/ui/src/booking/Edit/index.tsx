import React, { ReactNode, useEffect, useState } from "react";
import { Inner } from "./Inner";
import { useSearchStore } from "../store/search";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/Accordion";
import { Button } from "@swiss-activities/ui";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/DropdownMenu";

type EditProps = {
  children: ReactNode;
  dropdown?: boolean;
  icon: ReactNode;
  left: string;
  right: string;
  selected?: string | null;
  selectedShort?: string;
  short?: string;
};

export const Edit = ({
  children,
  dropdown = false,
  icon,
  left,
  right,
  selected,
  selectedShort,
  short,
}: EditProps) => {
  const [open, setOpen] = useState("");
  const input = useSearchStore((state) => state.input);

  useEffect(() => {
    setOpen("");
  }, [input]);

  if (dropdown) {
    return (
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="w-max rounded-full border-none bg-white shadow-none"
          >
            <Inner
              {...{
                dropdown,
                icon,
                left,
                right,
                selected,
                selectedShort,
                short,
                open,
              }}
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[350px] p-4">
          {children}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <Accordion
      value={open}
      onValueChange={setOpen}
      type="single"
      collapsible
      className="w-full"
    >
      <AccordionItem value="item" className="border-gray-100 shadow">
        <AccordionTrigger className="flex items-center justify-between py-2.5 [&_svg]:hidden">
          <Inner
            {...{
              dropdown,
              icon,
              left,
              right,
              selected,
              selectedShort,
              short,
              open,
            }}
          />
        </AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
