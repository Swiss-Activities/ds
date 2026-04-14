import type { HTMLAttributes } from "react";
import { Icon } from "../icon/icon";
import { cn } from "../utils/cn";
import { ChevronDown } from "../icons";
import { Text } from "../text";
import type { BaseAccordionProps } from "./accordion.types";

export type AccordionProps = BaseAccordionProps &
  Omit<HTMLAttributes<HTMLDivElement>, "children">;

export function Accordion({
  items,
  className,
  ...props
}: AccordionProps) {
  return (
    <div className={cn("divide-y divide-gray-200 border-y border-solid border-gray-200", className)} {...props}>
      {items.map((item, i) => (
        <details key={item.id ?? i} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between py-4 [&::-webkit-details-marker]:hidden">
            <Text as="span" size="lg" className="!text-[17px]">
              {item.title}
            </Text>
            <Icon
              icon={ChevronDown}
              size="default"
              className="text-gray-400 transition group-open:rotate-180"
            />
          </summary>
          <div className="pb-4">
            {item.content}
          </div>
        </details>
      ))}
    </div>
  );
}
