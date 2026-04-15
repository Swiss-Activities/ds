"use client";

import type { HTMLAttributes } from "react";
import { Fragment, useEffect, useState } from "react";
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

export function ContentBlocks({
  items,
  className,
  ...props
}: ContentBlocksProps) {
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(min-width: 1024px)").matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const update = () => {
      setIsDesktop(mediaQuery.matches);
    };

    update();
    mediaQuery.addEventListener("change", update);

    return () => {
      mediaQuery.removeEventListener("change", update);
    };
  }, []);

  return (
    <div className={cn(className)} {...props}>
      {!isDesktop ? (
        <Accordion
          items={items.map((item) => ({
            id: item.id,
            title: item.title,
            content: <BlockContent content={item.content} />,
          }))}
        />
      ) : (
        <div className="flex flex-col gap-10">
          {items.map((item, index) => (
            <Fragment key={item.id}>
              <div>
                <Text as="h2" size="lg" className="mb-4">
                  {item.title}
                </Text>
                <BlockContent content={item.content} />
              </div>
              {index < items.length - 1 ? <div className="h-px bg-gray-200" /> : null}
            </Fragment>
          ))}
        </div>
      )}
    </div>
  );
}
