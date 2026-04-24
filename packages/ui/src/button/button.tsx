import { Children, forwardRef, type ReactNode } from "react";
import { Loader } from "../loader";
import { cn } from "../utils/cn";
import { buttonComponentId, type ButtonShowTextFrom, type ButtonVariant } from "./button.types";

export type ButtonProps = {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  icon?: ReactNode;
  iconRight?: ReactNode;
  iconRightDivider?: boolean;
  loading?: boolean;
  reverse?: boolean;
  selected?: boolean;
  showTextFrom?: ButtonShowTextFrom;
  size?: "xs" | "sm" | "md" | "lg";
  submit?: boolean;
  text?: ReactNode | string;
  type?: ButtonVariant;
  variant?: ButtonVariant;
  as?: "button" | "a" | "div" | "submit";
  href?: string;
  [key: string]: any;
};

export const Button = forwardRef<any, ButtonProps>(function Button(props, ref) {
  const {
    children = null,
    className = null,
    disabled = false,
    href = undefined,
    icon = null,
    iconRight = null,
    iconRightDivider = false,
    loading = false,
    reverse = false,
    selected = false,
    showTextFrom,
    size = "md",
    style,
    submit = false,
    text = null,
    type,
    variant,
    as = "button",
    ...rest
  } = props;

  const resolvedType = variant ?? type ?? "secondary";
  const leadingIcon = reverse ? null : icon;
  const trailingIcon = iconRight ?? (reverse ? icon : null);
  const hasLabel = Boolean(text) || Boolean(children);
  const stretchTrailingSlot = Boolean(iconRightDivider && trailingIcon);
  const childNodes = Children.toArray(children ?? []);
  const hasComplexChildren = childNodes.some(
    (child) => typeof child !== "string" && typeof child !== "number"
  );
  const renderCustomChildren =
    text == null && !leadingIcon && !trailingIcon && hasComplexChildren;
  const mergedStyle = {
    ...(style ?? {}),
    borderStyle: "solid",
  };

  const inner = (
    renderCustomChildren ? (
      <>{children}</>
    ) : (
      <span
        className={cn("pointer-events-none flex", {
          "items-center": !stretchTrailingSlot,
          "items-stretch self-stretch": stretchTrailingSlot,
        })}
      >
        {leadingIcon && (
          <span
            className={cn("flex text-base", {
              "lg:!text-sm": size === "sm" || resolvedType === "filter",
              "me-2": hasLabel || Boolean(trailingIcon),
            })}
          >
            {leadingIcon}
          </span>
        )}
        <span className="flex items-center">
          {text ? (
            <span
              className={cn("first-letter:uppercase", {
                "hidden xs:block": showTextFrom === "xs",
                "hidden sm:block": showTextFrom === "sm",
                "hidden md:block": showTextFrom === "md",
                "hidden lg:block": showTextFrom === "lg",
                "hidden xl:block": showTextFrom === "xl",
                "hidden 2xl:block": showTextFrom === "2xl",
              })}
            >
              {text}
            </span>
          ) : (
            ""
          )}
          {children ? <span className="first-letter:uppercase">{children}</span> : ""}
        </span>
        {trailingIcon ? (
          <span
            className={cn("flex items-center text-base", {
              "lg:!text-sm": size === "sm" || resolvedType === "filter",
              "relative ms-2 self-stretch ps-3":
                iconRightDivider,
              "ms-2": !iconRightDivider && hasLabel,
            })}
          >
            {iconRightDivider ? (
              <span
                aria-hidden="true"
                className="absolute -inset-y-2 left-0 w-px bg-gray-200"
              />
            ) : null}
            {trailingIcon}
          </span>
        ) : null}
      </span>
    )
  );

  const classes = cn(
    "group inline-flex h-[max-content] max-h-max min-h-[48px] cursor-pointer appearance-none items-center justify-center rounded-lg !border-solid px-3.5 py-2.5 text-center text-sm font-medium transition duration-100 ease-in",
    {
      "!border border-gray-400 bg-white text-gray-700 sm:hover:border-gray-500 sm:hover:bg-gray-500 sm:hover:text-white":
        resolvedType === "secondary",
      "!border border-primary bg-primary text-white hover:text-white sm:hover:border-dark sm:hover:bg-dark":
        resolvedType === "primary" || resolvedType === "pill-primary",
      "!border !border-transparent text-primary sm:hover:underline":
        resolvedType === "tertiary",
      "!border !border-primary bg-transparent text-primary sm:hover:bg-primary sm:hover:text-white":
        resolvedType === "outline",
      "!border !border-gray-200 bg-transparent text-gray-700 sm:hover:bg-gray-200":
        resolvedType === "outline-gray",
      "!border !border-blue !bg-blue text-white sm:hover:brightness-[125%]":
        resolvedType === "blue",
      "!border !border-blue !bg-transparent text-blue sm:hover:!border-blue sm:hover:!bg-blue sm:hover:text-white":
        resolvedType === "blue-outline",
      "border-transparent bg-transparent text-inherit shadow-none hover:bg-transparent":
        resolvedType === "ghost",
      "border-transparent bg-transparent sm:hover:border-gray-100 sm:hover:bg-gray-100":
        resolvedType === "transparent" || resolvedType === "danger",
      "border-solid border-[#A9A2A3] bg-[#A9A2A3] text-white":
        resolvedType === "gray",
      "!border border-gray-200 bg-white text-gray-700 shadow-[0_1px_2px_0_rgba(0,0,0,0.08)]":
        resolvedType === "filter",
      "text-black": resolvedType === "transparent",
      "border-white bg-white sm:hover:bg-white": resolvedType === "white",
      "!min-h-[32px] !rounded-full !border !px-3 !py-1.5 !text-xs sm:!text-sm lg:min-h-[36px]":
        resolvedType === "pill" || resolvedType === "pill-primary",
      "!min-h-[36px] !rounded-full !px-3 !py-1.5 !text-xs sm:!text-sm":
        resolvedType === "filter",
      "border-blue bg-transparent text-blue lg:hover:bg-blue lg:hover:text-white":
        resolvedType === "pill",
      "sm:hover:border-gray-300 sm:hover:bg-gray-50": resolvedType === "filter",
      "!min-h-[auto] !w-max !border-none !bg-transparent !p-0 hover:underline":
        resolvedType === "link",
      "!min-h-[auto] !w-max !border-none !bg-transparent !p-0 !text-gray-700 !underline hover:!no-underline":
        resolvedType === "linkGray",
      "!bg-blue !text-white": resolvedType === "pill" && selected,
      "text-primary": resolvedType === "danger" || resolvedType === "instruction",
      "pointer-events-none !border-gray-300 !bg-gray-300":
        disabled && resolvedType !== "instruction",
      "!pointer-events-none !border-light !bg-light":
        resolvedType === "instruction",
      "!min-h-[36px] !px-2.5 !py-1 !text-xs lg:!text-[14px]": size === "sm",
      "!min-h-[24px] !px-2 !py-0.5 !text-xs": size === "xs",
      "!pointer-events-none": loading,
    },
    className
  );

  if (as === "submit") {
    return (
      <input
        {...rest}
        ref={ref}
        type="submit"
        style={mergedStyle}
        className={classes}
      />
    );
  }

  if (href || as === "a") {
    return (
      <a
        {...rest}
        ref={ref}
        href={href}
        style={mergedStyle}
        className={classes}
      >
        {loading ? <Loader size="sm" color="text-current" /> : inner}
      </a>
    );
  }

  if (as === "div") {
    return (
      <div
        {...rest}
        ref={ref}
        style={mergedStyle}
        className={classes}
      >
        {loading ? <Loader size="sm" color="text-current" /> : inner}
      </div>
    );
  }

  return (
      <button
        {...rest}
        ref={ref}
        type={submit ? "submit" : undefined}
        style={mergedStyle}
        className={classes}
        disabled={disabled || resolvedType === "instruction" || loading}
      >
      {loading ? <Loader size="sm" color="text-current" /> : inner}
    </button>
  );
});

(Button as { saComponent?: string }).saComponent = buttonComponentId;
