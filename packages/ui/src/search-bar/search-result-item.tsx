import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type MouseEventHandler,
} from "react";
import { Icon } from "../icon/icon";
import { MapPin, Mountain, Store, Ticket } from "../icons";
import { Text } from "../text";
import { cn } from "../utils/cn";
import type {
  BaseSearchBarResultItemProps,
  SearchBarResultVariant,
} from "./search-bar.types";

function getFallbackIcon(variant: SearchBarResultVariant) {
  switch (variant) {
    case "location":
      return MapPin;
    case "poi":
      return Mountain;
    case "activity":
    case "activity-listing":
      return Ticket;
    case "supplier":
      return Store;
    case "discovery":
    default:
      return MapPin;
  }
}

function renderMeta(
  subtitle?: BaseSearchBarResultItemProps["subtitle"],
  detail?: BaseSearchBarResultItemProps["detail"]
) {
  if (!subtitle && !detail) {
    return null;
  }

  return (
    <div className="mt-0.5 flex min-w-0 items-center gap-1 text-[11px] font-medium text-gray-500">
      {subtitle ? <span className="truncate">{subtitle}</span> : null}
      {subtitle && detail ? <span aria-hidden="true">|</span> : null}
      {detail ? <span className="truncate">{detail}</span> : null}
    </div>
  );
}

export type SearchBarResultItemProps = BaseSearchBarResultItemProps &
  Omit<HTMLAttributes<HTMLDivElement>, "title"> & {
    href?: string;
    onClick?: MouseEventHandler<HTMLElement>;
  };

export const SearchBarResultItem = forwardRef<
  HTMLElement,
  SearchBarResultItemProps
>(function SearchBarResultItem(
  {
    className,
    classNameImage,
    detail,
    distance,
    href,
    icon,
    image,
    imageAlt = "",
    imageSrc,
    onClick,
    subtitle,
    title,
    variant,
    ...props
  },
  ref
) {
  const media = image ?? (
    imageSrc ? (
      <img
        src={imageSrc}
        alt={imageAlt}
        className="h-full w-full object-cover"
      />
    ) : null
  );
  const fallbackIcon = getFallbackIcon(variant);
  const content = (
    <>
      <div
        className={cn(
          "relative me-4 flex h-[45px] w-[45px] shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 text-gray-500",
          classNameImage
        )}
      >
        {media ? (
          media
        ) : icon ? (
          icon
        ) : (
          <Icon icon={fallbackIcon} size="sm" />
        )}
      </div>
      <div className="min-w-0 flex-1">
        <Text
          as="span"
          black
          bold
          className="block !text-sm leading-tight transition duration-100 ease-in group-hover:!text-primary"
        >
          {title}
        </Text>
        {renderMeta(subtitle, detail)}
      </div>
      {distance ? (
        <div className="ms-3 flex shrink-0 items-center gap-1 text-[11px] font-medium text-gray-500">
          <Icon icon={MapPin} size="xs" />
          <span>{distance}</span>
        </div>
      ) : null}
    </>
  );

  const sharedClassName = cn(
    "group flex items-center rounded-lg px-3.5 py-2 text-left text-black transition duration-100 ease-in hover:bg-gray-50",
    className
  );

  if (href) {
    return (
      <a
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        ref={ref as never}
        href={href}
        onClick={onClick as MouseEventHandler<HTMLAnchorElement> | undefined}
        className={sharedClassName}
      >
        {content}
      </a>
    );
  }

  if (onClick) {
    return (
      <button
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
        ref={ref as never}
        type="button"
        onClick={onClick as MouseEventHandler<HTMLButtonElement>}
        className={cn(
          "m-0 w-full cursor-pointer border-none bg-transparent",
          sharedClassName
        )}
      >
        {content}
      </button>
    );
  }

  return (
    <div
      {...props}
      ref={ref as never}
      className={sharedClassName}
    >
      {content}
    </div>
  );
});
