import type { ReactNode } from "react";

export type AccordionItem = {
  id?: string;
  title: string;
  content: ReactNode;
};

export type BaseAccordionProps = {
  items: AccordionItem[];
  className?: string;
};
