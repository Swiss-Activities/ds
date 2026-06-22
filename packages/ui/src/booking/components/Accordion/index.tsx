import { useEffect, useState, type ReactNode, type ElementType } from "react";
import { Button, Text } from "@swiss-activities/ui";
import { I } from "../I";
import { cn } from "../../utils/css/cn";

export type Item = {
  children?: Item[];
  content?: ElementType;
  href?: string;
  icon?: ReactNode;
  id?: string;
  onClick?: (e: MouseEvent) => void;
  text?: string;
};

type AccordionProps = {
  children?: ReactNode;
  className?: string;
  classNameButton?: string;
  classNameChildren?: string;
  filter?: boolean;
  item?: Item;
  large?: boolean;
  mobile?: boolean;
  mount?: boolean;
  onClick?: (e: MouseEvent) => void;
  open?: boolean;
  questionTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  type?: "default" | "desktop";
};

export const Accordion = ({
  children = null,
  className = "",
  classNameButton = "",
  classNameChildren = "",
  filter = false,
  item = null as unknown as Item,
  large = false,
  mobile = false,
  mount = true,
  onClick = () => {},
  open = false,
  questionTag = "span",
  type = "default",
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(open);
  const isDesktop = type === "desktop";

  const cls = cn(
    "text-left cursor-pointer flex text-sm bg-white border-none text-gray-700 w-full transition ease-in duration-100 sm:hover:bg-gray-50",
    {
      [className]: className,
      "!pointer-events-none !rounded-none !px-4 !pb-2 !pt-3 [&_svg]:hidden":
        filter && !mobile,
      "!px-6": filter && mobile,
    }
  );

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const onOpen = (e: MouseEvent) => {
    setIsOpen(!isOpen);
    onClick(e);
  };

  const ParentLink = ({
    ref,
    onClick,
    href,
    item,
  }: {
    onClick?: (e: MouseEvent) => void;
    href?: string;
    item: Item;
  } & {
    ref?: React.RefObject<unknown>;
  }) => {
    return (
      <Button
        tabIndex={0}
        role="button"
        as="div"
        key={item.text}
        href={href}
        onClick={item?.onClick || onClick}
        ref={ref}
        className={cn(
          cls,
          "focus-inside rounded-lg px-4 py-4 pe-6 font-medium",
          {
            "sm:hover:bg-white lg:min-h-0 lg:cursor-default lg:p-0 lg:ps-2 lg:text-lg lg:text-black":
              isDesktop,
          },
          classNameButton
        )}
      >
        {item.icon && (
          <span className="relative my-auto me-3 flex">{item.icon}</span>
        )}
        <Text
          as={questionTag}
          bold
          black
          className={cn({
            "lg:hidden": large,
          })}
        >
          {item.text}
        </Text>
        {large && (
          <Text as="h2" size="default" className="hidden lg:block lg:!text-base">
            {item.text}
          </Text>
        )}
        {(item.children || item.content || children) && (
          <span
            className={cn(
              `relative ms-auto flex origin-center transform items-center justify-center text-base`,
              {
                "rotate-180": isOpen,
                "lg:hidden": isDesktop,
              }
            )}
          >
            <I icon="chevron-down" />
          </span>
        )}
      </Button>
    );
  };

  const ChildLink = ({
    ref,
    onClick,
    href,
    item,
  }: {
    onClick?: (e: MouseEvent) => void;
    href?: string;
    item: Item;
  } & {
    ref?: React.RefObject<unknown>;
  }) => {
    return (
      <Button
        key={item.text}
        href={href}
        onClick={item?.onClick || onClick}
        ref={ref}
        className={cn(
          cls,
          "block py-3 pe-4 ps-11 transition duration-100 ease-in hover:bg-gray-50"
        )}
      >
        {item.text}
      </Button>
    );
  };

  return item?.text ? (
    <li
      className={cn(`select-none list-none`, {
        "lg:grid lg:select-text lg:grid-cols-[300px,1fr] lg:items-start":
          isDesktop,
      })}
      style={{ borderLeft: "none", borderRight: "none" }}
      key={item.text}
    >
      {item.children || children ? (
        <ParentLink item={item} onClick={onOpen} />
      ) : !item.onClick ? (
        <a href={item.href || "#0"}>
          <ParentLink item={item} />
        </a>
      ) : (
        <ParentLink item={item} />
      )}
      {item.children && isOpen && (
        <ul className="mb-3">
          {item.children.map((itemChild) => {
            return (
              <li key={itemChild.text}>
                {itemChild.onClick ? (
                  <ChildLink item={itemChild} />
                ) : (
                  <a href={itemChild.href || "#0"}>
                    <ChildLink item={itemChild} />
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      )}
      {children &&
        (!mount ? isOpen : true) &&
        (filter ? (
          <div
            className={cn(`px-4 pb-4 lg:pb-0`, {
              hidden: !isOpen,
              "lg:block": isDesktop,
              "!px-6 !pb-4": filter && mobile,
              "!px-4 !pb-3 lg:!block": filter && !mobile,
              [classNameChildren]: classNameChildren,
            })}
          >
            {children}
          </div>
        ) : (
          <div
            aria-hidden={!isOpen}
            className={cn(
              "overflow-hidden transition-[max-height,opacity] duration-300 ease-out motion-reduce:transition-none",
              isOpen ? "max-h-[1500px] opacity-100" : "max-h-0 opacity-0",
              { "lg:max-h-none lg:!overflow-visible lg:opacity-100": isDesktop }
            )}
          >
            <div
              className={cn(`px-4 pb-4 lg:pb-0`, {
                [classNameChildren]: classNameChildren,
              })}
            >
              {children}
            </div>
          </div>
        ))}
    </li>
  ) : null;
};
