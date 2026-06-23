import type { ReactNode } from "react";
import { I } from "../I";
import { cn } from "../../utils/css/cn";

type ToastProps = {
  children?: ReactNode | unknown;
  className?: string;
  icon?: ReactNode;
  inline?: boolean;
  text?: string;
  ticket?: boolean;
  warning?: boolean;
};

export const Toast = ({
  children = null,
  className = "",
  icon = null,
  inline = false,
  text = "",
  ticket = false,
  warning = false,
}: ToastProps) => {
  return (
    <div className={className}>
      <div
        className={cn(
          "relative grid max-w-max overflow-hidden rounded-md [&_a:hover]:no-underline [&_a]:font-semibold [&_a]:text-sky-950 [&_a]:underline",
          {
            "border border-solid border-sky-100 bg-sky-50": !warning && !inline,
            "items-center bg-rose-50": warning && !inline,
            "grid-cols-[40px_1fr] py-1.5 pe-3": !inline,
            "grid-cols-[20px_1fr] py-0.5": inline,
          }
        )}
      >
        <div>
          <span
            className={cn(
              `absolute start-0 top-0 flex h-full justify-center text-sky-700`,
              {
                "color-info": !warning && !inline,
                "color-warning": warning && !inline,
                "me-3 items-center px-2": !inline,
                "relative -start-0.5 top-px text-[14px]": inline,
              }
            )}
          >
            {icon ? (
              icon
            ) : ticket ? (
              <I icon="tag" />
            ) : warning ? (
              <I icon="circle-exclamation" />
            ) : (
              <I icon="circle-check" />
            )}
          </span>
        </div>
        <span
          className={cn(`text-xs font-medium leading-snug`, {
            "text-sky-900": !warning,
            "text-rose-900": warning,
          })}
        >
          {(text || children) as ReactNode}
        </span>
      </div>
    </div>
  );
};
