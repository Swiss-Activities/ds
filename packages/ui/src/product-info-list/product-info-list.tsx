import { createElement, type HTMLAttributes, type ReactNode } from "react";
import { Button } from "../button";
import { Card } from "../card";
import { Text } from "../text";
import { cn } from "../utils/cn";
import type {
  BaseProductInfoListProps,
  ProductInfoListItem,
} from "./product-info-list.types";

export type ProductInfoListProps = BaseProductInfoListProps &
  Omit<HTMLAttributes<HTMLDivElement>, "children">;

function ContentText({
  children,
  className,
  gray = false,
}: {
  children: ReactNode;
  className?: string;
  gray?: boolean;
}) {
  if (typeof children === "string" || typeof children === "number") {
    return (
      <Text
        as="span"
        size="sm"
        gray={gray}
        className={cn("block !leading-snug", className)}
      >
        {children}
      </Text>
    );
  }

  return <>{children}</>;
}

function ProductInfoListContent({
  title,
  subtitle,
  details,
}: Pick<ProductInfoListItem, "title" | "subtitle" | "details">) {
  return (
    <div className="min-w-0">
      <Text
        as="span"
        size="sm"
        black
        className="block !text-sm !font-medium !leading-tight lg:!text-xs"
      >
        {title}
      </Text>
      {subtitle ? (
        <div className="mt-0.5">
          <ContentText
            gray
            className="!text-sm !leading-tight !text-gray-500 lg:!text-xs"
          >
            {subtitle}
          </ContentText>
        </div>
      ) : null}
      {details ? (
        <div className="mt-0.5">
          <ContentText
            gray
            className="!text-sm !leading-tight !text-gray-500 lg:!text-xs"
          >
            {details}
          </ContentText>
        </div>
      ) : null}
    </div>
  );
}

function ProductInfoListItemRow({
  icon,
  title,
  subtitle,
  details,
  href,
  onClick,
}: ProductInfoListItem) {
  const tag = href ? "a" : "button";

  return createElement(
    tag,
    {
      className:
        "flex w-full appearance-none items-center gap-4 !border-b-0 !border-l-0 !border-r-0 !border-solid !border-gray-200 bg-transparent py-4 text-left text-current no-underline first:!border-t-0",
      ...(href ? { href } : { type: "button" as const, onClick }),
    },
    <>
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-solid border-gray-200 bg-white text-gray-900 shadow-sm [&_svg]:h-5 [&_svg]:w-5">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <ProductInfoListContent
          title={title}
          subtitle={subtitle}
          details={details}
        />
      </div>
    </>
  );
}

function ProductInfoListItemCard({
  icon,
  title,
  subtitle,
  details,
  href,
  onClick,
}: ProductInfoListItem) {
  return (
    <Card
      noPadding
      className="h-full rounded-2xl"
      render={({ className, children }) => {
        const buttonProps = href
          ? { as: "a" as const, href }
          : onClick
            ? { onClick }
            : { as: "div" as const };

        return (
          <Button
            variant="ghost"
            className={`${className} !h-full !justify-start !p-3 !text-left`}
            {...buttonProps}
          >
            {children}
          </Button>
        );
      }}
    >
      <div className="flex items-center gap-2">
        <div className="flex shrink-0 text-gray-700 [&_svg]:h-7 [&_svg]:w-7">
          {icon}
        </div>
        <ProductInfoListContent title={title} subtitle={details ?? subtitle} />
      </div>
    </Card>
  );
}

export function ProductInfoList({
  items,
  className,
  ...props
}: ProductInfoListProps) {
  return (
    <div className={cn("w-full", className)} {...props}>
      <div className="divide-y divide-solid divide-gray-200 border-y !border-l-0 !border-r-0 border-solid border-gray-200 lg:hidden [&>*]:!border-l-0 [&>*]:!border-r-0">
        {items.map((item, index) => (
          <ProductInfoListItemRow
            key={item.id ?? `${String(item.title)}-${index}`}
            {...item}
          />
        ))}
      </div>
      <div className="hidden grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid lg:grid-cols-4 lg:gap-7">
        {items.map((item, index) => (
          <ProductInfoListItemCard
            key={item.id ?? `${String(item.title)}-${index}`}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}
