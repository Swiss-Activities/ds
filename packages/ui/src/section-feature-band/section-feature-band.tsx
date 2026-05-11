import type { HTMLAttributes } from "react";
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
        <div className="mb-4 flex text-white [&_svg]:h-6 [&_svg]:w-6">
          {item.icon}
        </div>
      ) : null}
      <Text as="h3" size="sm" bold className="!text-white">
        {item.title}
      </Text>
      {item.description ? (
        <Text size="xs" className="mt-1.5 max-w-sm !text-white/60">
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
      <div className="rounded-lg bg-blue px-5 py-6 sm:px-6 lg:px-8">
        {title ? (
          <Text as="h2" size="md2" className="mb-6 !text-white">
            {title}
          </Text>
        ) : null}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {items.map((item) => (
            <FeatureBandItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
