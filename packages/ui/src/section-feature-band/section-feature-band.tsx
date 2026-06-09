import type { HTMLAttributes } from "react";
import { Card } from "../card";
import { Text } from "../text";
import { cn } from "../utils/cn";
import type {
  BaseSectionFeatureBandProps,
  SectionFeatureBandItem,
} from "./section-feature-band.types";

export type SectionFeatureBandProps = BaseSectionFeatureBandProps &
  Omit<HTMLAttributes<HTMLElement>, "children" | "title">;

function FeatureBandItem({ item }: { item: SectionFeatureBandItem }) {
  return (
    <div className="min-w-0">
      {item.icon ? (
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary [&_svg]:h-5 [&_svg]:w-5">
          {item.icon}
        </div>
      ) : null}
      <Text as="h3" size="sm" bold className="!text-gray-900">
        {item.title}
      </Text>
      {item.description ? (
        <Text size="xs" className="mt-1.5 max-w-sm !text-gray-600">
          {item.description}
        </Text>
      ) : null}
    </div>
  );
}

export function SectionFeatureBand({
  title,
  items,
  className,
  ...props
}: SectionFeatureBandProps) {
  return (
    <section className={cn(className)} {...props}>
      <Card
        noPadding
        className="px-5 py-6 shadow-xl shadow-gray-200/90 sm:px-6 lg:px-8"
      >
        {title ? (
          <Text as="h2" size="md2" className="mb-6 !text-gray-900">
            {title}
          </Text>
        ) : null}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {items.map((item) => (
            <FeatureBandItem item={item} key={item.id} />
          ))}
        </div>
      </Card>
    </section>
  );
}
