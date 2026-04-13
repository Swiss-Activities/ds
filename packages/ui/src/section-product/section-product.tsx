import type { HTMLAttributes } from "react";
import { cn } from "../utils/cn";
import { Hero } from "../hero";
import { Text } from "../text";
import { Breadcrumbs } from "../breadcrumbs";
import type { BaseSectionProductProps } from "./section-product.types";

export type SectionProductProps = BaseSectionProductProps &
  Omit<HTMLAttributes<HTMLDivElement>, "children" | "title">;

export function SectionProduct({
  title,
  images,
  breadcrumbs,
  backLabel,
  backHref,
  onBack,
  children,
  className,
  ...props
}: SectionProductProps) {
  return (
    <div className={cn("flex flex-col", className)} {...props}>
      <Hero
        images={images}
        backLabel={backLabel}
        backHref={backHref}
        onBack={onBack}
      />
      {breadcrumbs && breadcrumbs.length > 0 && (
        <Breadcrumbs items={breadcrumbs} ignoreLast className="mt-3" />
      )}
      {title && (
        <Text as="h1" size="xl" className="mt-3">
          {title}
        </Text>
      )}
      {children}
    </div>
  );
}
