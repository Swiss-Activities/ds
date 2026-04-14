"use client";

import type { HTMLAttributes } from "react";
import { useRef } from "react";
import { cn } from "../utils/cn";
import { Text } from "../text";
import { Accordion } from "../accordion";
import type { BaseContentBlocksProps, ContentBlockItem } from "./content-blocks.types";

export type ContentBlocksProps = BaseContentBlocksProps &
  Omit<HTMLAttributes<HTMLDivElement>, "children">;

function BlockContent({ content }: { content: ContentBlockItem["content"] }) {
  if (typeof content === "string") {
    return (
      <div
        className="prose-sa max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }
  return <>{content}</>;
}

function TocNav({
  items,
  tocTitle,
}: {
  items: BaseContentBlocksProps["items"];
  tocTitle: string;
}) {
  return (
    <div className="space-y-4">
      <Text as="p" size="default" bold className="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-primary">
          <line x1="8" y1="6" x2="21" y2="6" />
          <line x1="8" y1="12" x2="21" y2="12" />
          <line x1="8" y1="18" x2="21" y2="18" />
          <line x1="3" y1="6" x2="3.01" y2="6" />
          <line x1="3" y1="12" x2="3.01" y2="12" />
          <line x1="3" y1="18" x2="3.01" y2="18" />
        </svg>
        {tocTitle}
      </Text>
      <ul className="grid gap-3">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              data-id={item.id}
              className="inline-block text-sm font-medium text-black transition duration-100 ease-in"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ContentBlocks({
  items,
  tocTitle = "Inhaltsverzeichnis",
  className,
  ...props
}: ContentBlocksProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className={cn(className)} {...props}>
      <div className="lg:hidden">
        <Accordion
          items={items.map((item) => ({
            id: item.id,
            title: item.title,
            content: <BlockContent content={item.content} />,
          }))}
        />
      </div>
      <div className="hidden grid-cols-3 gap-8 lg:grid xl:gap-16">
        <div className="col-span-2 flex flex-col gap-10">
          {items.map((item) => (
            <div key={item.id}>
              <Text id={item.id} as="h2" size="lg" className="mb-4">
                {item.title}
              </Text>
              <BlockContent content={item.content} />
            </div>
          ))}
        </div>
        <div className="sticky top-6 h-max max-h-[calc(100vh-48px)] overflow-y-auto rounded-lg border border-solid border-gray-200 p-6 shadow-sm">
          <TocNav items={items} tocTitle={tocTitle} />
        </div>
      </div>
    </div>
  );
}
