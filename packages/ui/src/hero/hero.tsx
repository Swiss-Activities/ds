import type { HTMLAttributes } from "react";
import { cn } from "../utils/cn";
import { Text } from "../text";
import type { BaseHeroProps } from "./hero.types";

export type HeroProps = BaseHeroProps &
  Omit<HTMLAttributes<HTMLDivElement>, "children" | "title">;

export function Hero({
  title,
  image,
  children,
  className,
  ...props
}: HeroProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg bg-blue",
        className
      )}
      {...props}
    >
      <div className="relative aspect-[4/3] max-h-[300px] w-full overflow-hidden [&_img]:absolute [&_img]:inset-0 [&_img]:h-full [&_img]:w-full [&_img]:object-cover">
        {image}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blue to-transparent" />
        <Text
          as="h2"
          size="2xl"
          className="absolute bottom-3 left-4 !text-white sm:left-6 lg:left-8"
        >
          {title}
        </Text>
      </div>
      {children && <div className="p-4 sm:p-6 lg:p-8">{children}</div>}
    </div>
  );
}
