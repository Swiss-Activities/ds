import { createElement, type HTMLAttributes } from "react";
import { Icon } from "../icon/icon";
import { cn } from "../utils/cn";
import { ChevronLeft } from "../icons";
import { Text } from "../text";
import { Slider } from "../slider";
import type { BaseHeroProps } from "./hero.types";

export type HeroProps = BaseHeroProps &
  Omit<HTMLAttributes<HTMLDivElement>, "children" | "title">;

function BackLink({
  label,
  href,
  onClick,
}: {
  label: string;
  href?: string;
  onClick?: () => void;
}) {
  const tag = href ? "a" : "button";
  return createElement(
    tag,
    {
      className:
        "flex cursor-pointer items-center gap-2 bg-transparent p-0 text-white no-underline",
      ...(href ? { href } : { type: "button" as const, onClick }),
    },
    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-solid border-white bg-white/70 backdrop-blur-sm">
      <Icon icon={ChevronLeft} size="sm" className="text-blue" />
    </span>,
    <span className="text-sm font-medium text-white">{label}</span>
  );
}

export function Hero({
  title,
  image,
  images,
  children,
  backLabel,
  backHref,
  onBack,
  className,
  ...props
}: HeroProps) {
  const isGallery = images && images.length > 0;
  const hasBack = !!backLabel;

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-blue sm:rounded-lg",
        className
      )}
      {...props}
    >
      <div className="relative aspect-video w-full overflow-hidden sm:aspect-[4/3] sm:max-h-[300px] [&_img]:absolute [&_img]:inset-0 [&_img]:h-full [&_img]:w-full [&_img]:object-cover">
        {isGallery ? (
          <Slider slides={images} loop className="absolute inset-0" />
        ) : (
          image
        )}
        {hasBack && (
          <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-20 bg-gradient-to-b from-blue/50 to-transparent" />
        )}
        {title && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blue to-transparent" />
        )}
        {hasBack && (
          <div className="absolute left-3 top-3 z-30">
            <BackLink label={backLabel} href={backHref} onClick={onBack} />
          </div>
        )}
        {title && (
          <Text
            as="h2"
            size="xl"
            className="pointer-events-none absolute bottom-3 left-4 z-10 max-w-[90%] !text-white sm:left-6 lg:left-8"
          >
            {title}
          </Text>
        )}
      </div>
      {children && <div className="p-4 sm:p-6 lg:p-8">{children}</div>}
    </div>
  );
}
