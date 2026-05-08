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
    <div className="min-w-0 rounded-lg border border-solid border-white/10 bg-white/5 p-4 sm:p-5">
      {item.icon ? (
        <div className="mb-5 flex text-white [&_svg]:h-7 [&_svg]:w-7">
          {item.icon}
        </div>
      ) : null}
      <Text as="h3" size="md2" className="text-white">
        {item.title}
      </Text>
      {item.description ? (
        <Text size="sm" className="mt-2 max-w-sm !text-white/65">
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
    <section className={cn("bg-blue py-8", className)} {...props}>
      <div className="sa-container">
        {title ? (
          <Text as="h2" size="lg" className="mb-6 text-white">
            {title}
          </Text>
        ) : null}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {items.map((item) => (
            <FeatureBandItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
