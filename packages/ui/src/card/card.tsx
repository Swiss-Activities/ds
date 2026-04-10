import type { HTMLAttributes } from "react";
import { cn } from "../utils/cn";
import type { BaseCardProps } from "./card.types";
import { cardStyles } from "./card.variants.web";

export type CardProps = BaseCardProps & HTMLAttributes<HTMLDivElement>;

export function Card({
  children = null,
  className,
  elevation = "default",
  noPadding = false,
  render,
  ...props
}: CardProps) {
  const mergedClassName = cn(
    cardStyles({ elevation, noPadding }),
    className
  );

  if (render) return render({ className: mergedClassName, children });

  return (
    <div className={mergedClassName} {...props}>
      {children}
    </div>
  );
}
