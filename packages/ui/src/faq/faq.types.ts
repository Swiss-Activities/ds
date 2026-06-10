import type { ReactNode } from "react";

export type FaqItem = {
  /** Question shown as the accordion trigger. */
  question: string;
  /** Answer — an HTML string (rendered prose-sa) or a ReactNode. */
  answer: string | ReactNode;
};

export type BaseFaqProps = {
  /** Section heading, e.g. "Fragen & Antworten (FAQ)". */
  title: string;
  items: FaqItem[];
  className?: string;
};
