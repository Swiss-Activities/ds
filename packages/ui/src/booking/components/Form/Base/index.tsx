import { createElement, type JSX, type ReactNode } from "react";
import { Title } from "../Title";
import { I } from "../../I";
import { cn } from "../../../utils/css/cn";

type BaseProps = {
  as?: keyof JSX.IntrinsicElements;
  after?: ReactNode;
  children?: ReactNode;
  className?: string;
  classNameCircle?: string;
  help?: string;
  isValid?: boolean;
  isError?: boolean;
  required?: boolean;
  reverse?: boolean;
  row?: boolean;
  rowFull?: boolean;
  showHelp?: boolean;
  title?: string | ReactNode;
  type?: string;
};

export const Base = ({
  as = "label",
  after,
  children = null,
  className = "",
  classNameCircle = "",
  help = "",
  isValid = false,
  isError = false,
  required = false,
  reverse = false,
  row = false,
  rowFull = false,
  showHelp = true,
  title = "",
  type = "",
}: BaseProps) => {
  return createElement(as, {
    className: cn("relative flex", className, {
      "flex-row-reverse justify-end":
        type === "checkbox" || (type === "radio" && !reverse),
      "flex-row justify-between": type === "radio" && reverse,
      "flex-col lg:flex-row lg:items-center": row,
      "items-center justify-between": rowFull,
      "flex-col": !row && !rowFull && type !== "checkbox" && type !== "radio",
      "is-valid": isValid,
      [`sa-form-${type}`]: true,
    }),
    children: (
      <>
        <div className="flex flex-col">
          <Title {...{ title, type, row, required, help, showHelp }} />
        </div>
        <span
          className={cn("relative", {
            "w-full": !rowFull && type !== "checkbox",
            "w-max": type === "checkbox" || type === "radio",
          })}
        >
          <span className="relative flex flex-col">
            {children}
            {isError ? (
              <I
                icon="square-x-mark-solid"
                className={cn(
                  `absolute end-2 top-1/2 z-20 -translate-y-1/2 text-red-600`,
                  classNameCircle
                )}
              />
            ) : (
              isValid && (
                <I
                  icon="square-check-solid"
                  className={cn(
                    `absolute end-2 top-1/2 z-20 -translate-y-1/2 text-green-600`,
                    classNameCircle
                  )}
                />
              )
            )}
          </span>
          {after}
        </span>
      </>
    ),
  });
};
