import { createElement, type HTMLAttributes } from "react";
import { cn } from "../utils/cn";
import { Hero } from "../hero";
import { Slider } from "../slider";
import { Text } from "../text";
import { Breadcrumbs } from "../breadcrumbs";
import type { BaseSectionProductProps } from "./section-product.types";

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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
        fill="currentColor"
        className="h-2 w-2 text-blue"
      >
        <path d="M15 239c-9.4 9.4-9.4 24.6 0 33.9L207 465c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L65.9 256 241 81c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L15 239z" />
      </svg>
    </span>,
    <span className="text-sm font-medium text-white">{label}</span>
  );
}

export type SectionProductProps = BaseSectionProductProps &
  Omit<HTMLAttributes<HTMLDivElement>, "children" | "title">;

function GalleryGrid({
  images,
  backLabel,
  backHref,
  onBack,
}: {
  images: import("react").ReactNode[];
  backLabel?: string;
  backHref?: string;
  onBack?: () => void;
}) {
  const thumbs = images.slice(1, 5);
  return (
    <div className="hidden h-[360px] grid-cols-4 grid-rows-2 gap-1 overflow-hidden rounded-lg md:grid">
      <div className="relative col-span-2 row-span-2 overflow-hidden rounded-s-lg">
        <Slider slides={images} loop className="absolute inset-0" />
        {backLabel && (
          <>
            <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-20 rounded-tl-lg bg-gradient-to-b from-black/40 to-transparent" />
            <div className="absolute left-3 top-3 z-30">
              <BackLink label={backLabel} href={backHref} onClick={onBack} />
            </div>
          </>
        )}
      </div>
      {thumbs.map((img, i) => (
        <div
          key={i}
          className={cn(
            "relative overflow-hidden [&_img]:absolute [&_img]:inset-0 [&_img]:h-full [&_img]:w-full [&_img]:object-cover",
            i === 1 && "rounded-tr-lg",
            i === 3 && "rounded-br-lg"
          )}
        >
          {img}
        </div>
      ))}
    </div>
  );
}

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
    <section className={cn(className)} {...props}>
      <div className="sa-container">
        <div className="-mx-2 md:hidden">
          <Hero
            images={images}
            backLabel={backLabel}
            backHref={backHref}
            onBack={onBack}
          />
        </div>
        {images && images.length > 0 && (
          <GalleryGrid
            images={images}
            backLabel={backLabel}
            backHref={backHref}
            onBack={onBack}
          />
        )}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <Breadcrumbs items={breadcrumbs} ignoreLast className="mt-3 lg:mt-4" />
        )}
        {title && (
          <Text as="h1" size="xl" className="mt-3 lg:mt-6">
            {title}
          </Text>
        )}
        {children}
      </div>
    </section>
  );
}
