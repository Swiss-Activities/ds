import type { HTMLAttributes } from "react";
import { Accordion } from "../accordion";
import { Text } from "../text";
import { cn } from "../utils/cn";
import type { BaseFaqProps } from "./faq.types";

export type FaqProps = BaseFaqProps &
  Omit<HTMLAttributes<HTMLElement>, "children" | "title">;

export function Faq({ title, items, className, ...props }: FaqProps) {
  if (items.length === 0) return null;
  return (
    <section className={cn("w-full", className)} {...props}>
      <Text as="h2" size="lg" className="mb-6">
        {title}
      </Text>
      <Accordion
        items={items.map((item, index) => ({
          id: `faq-${index}`,
          title: item.question,
          content:
            typeof item.answer === "string" ? (
              <div
                className="prose-sa max-w-none"
                dangerouslySetInnerHTML={{ __html: item.answer }}
              />
            ) : (
              item.answer
            ),
        }))}
      />
    </section>
  );
}
