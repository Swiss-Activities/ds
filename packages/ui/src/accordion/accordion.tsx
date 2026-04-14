import type { HTMLAttributes } from "react";
import { cn } from "../utils/cn";
import { Text } from "../text";
import type { BaseAccordionProps } from "./accordion.types";

export type AccordionProps = BaseAccordionProps &
  Omit<HTMLAttributes<HTMLDivElement>, "children">;

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
      className={cn("h-3 w-3", className)}
    >
      <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
    </svg>
  );
}

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
            <Text as="span" size="default" bold>
              {item.title}
            </Text>
            <ChevronDown className="shrink-0 text-gray-400 transition group-open:rotate-180" />
          </summary>
          <div className="pb-4">
            {item.content}
          </div>
        </details>
      ))}
    </div>
  );
}
