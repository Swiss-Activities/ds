import type { HTMLAttributes } from "react";
import { cn } from "../utils/cn";
import type { BaseImageCardProps } from "./image-card.types";

export type ImageCardProps = BaseImageCardProps &
  HTMLAttributes<HTMLDivElement>;

export function ImageCard({
  image,
  button,
  children,
  className,
  ...props
}: ImageCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col justify-between overflow-hidden rounded-lg px-6 py-8",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 [&_img]:absolute [&_img]:h-full [&_img]:w-full [&_img]:object-cover">
        {image}
        <div className="absolute inset-0 bg-gradient-to-b from-blue" />
      </div>
      <div className="relative z-10 flex flex-col gap-8">
        {children}
        {button}
      </div>
    </div>
  );
}
