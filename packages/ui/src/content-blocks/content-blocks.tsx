"use client";

import type { HTMLAttributes } from "react";
import { useEffect, useRef } from "react";
import { Icon } from "../icon/icon";
import { cn } from "../utils/cn";
import { List } from "../icons";
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
        <Icon icon={List} size="default" className="text-primary" />
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

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let ticking = false;

    const update = () => {
      const threshold = 100;
      const scrollPos = window.pageYOffset + threshold;
      let currentId = "";

      const headings = container.querySelectorAll("h2[id]");
      for (const heading of Array.from(headings)) {
        if ((heading as HTMLElement).offsetTop <= scrollPos) {
          currentId = heading.id;
        } else {
          break;
        }
      }

      container.querySelectorAll("[data-id]").forEach((el) => {
        if (el.getAttribute("data-id") === currentId) {
          (el as HTMLElement).style.color = "var(--color-primary)";
        } else {
          (el as HTMLElement).style.color = "";
        }
      });
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
