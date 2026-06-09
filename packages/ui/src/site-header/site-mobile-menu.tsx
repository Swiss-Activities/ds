"use client";

import { Button } from "../button";
import { Icon } from "../icon/icon";
import { ChevronDown } from "../icons";
import { Text } from "../text";
import { cn } from "../utils/cn";
import type {
  SiteMobileMenuGroup,
  SiteMobileMenuItem,
  SiteMobileMenuProps,
} from "./site-mobile-menu.types";

function MobileMenuLink({
  className,
  item,
}: {
  className?: string;
  item: SiteMobileMenuItem;
}) {
  const content = (
    <>
      {item.icon ? (
        <span className="relative my-auto me-3 flex">{item.icon}</span>
      ) : null}
      <Text as="span" bold black>
        {item.label}
      </Text>
    </>
  );

  if (item.onClick) {
    return (
      <button
        className={cn(
          "flex w-full cursor-pointer border-0 bg-white text-left text-sm text-gray-700 transition duration-100 ease-in sm:hover:bg-gray-50",
          className
        )}
        onClick={item.onClick}
        type="button"
      >
        {content}
      </button>
    );
  }

  return (
    <a
      className={cn(
        "flex w-full cursor-pointer bg-white text-left text-sm text-gray-700 transition duration-100 ease-in sm:hover:bg-gray-50",
        className
      )}
      href={item.href || "#0"}
    >
      {content}
    </a>
  );
}

function MobileMenuItem({ item }: { item: SiteMobileMenuItem }) {
  if (!item.children?.length) {
    return (
      <li className="select-none list-none">
        <MobileMenuLink
          item={item}
          className="focus-inside rounded-lg px-6 py-3 pe-6 font-medium"
        />
      </li>
    );
  }

  return (
    <li className="select-none list-none">
      <details className="group">
        <summary className="focus-inside flex min-h-0 cursor-pointer list-none items-center rounded-lg px-6 py-3 pe-6 font-medium [&::-webkit-details-marker]:hidden">
          {item.icon ? (
            <span className="relative my-auto me-3 flex">{item.icon}</span>
          ) : null}
          <Text as="span" bold black>
            {item.label}
          </Text>
          <span className="relative ms-auto flex origin-center items-center justify-center text-base transition group-open:rotate-180">
            <Icon icon={ChevronDown} />
          </span>
        </summary>
        <ul className="mb-3">
          {item.children.map((child) => (
            <li key={child.id}>
              <MobileMenuLink
                item={child}
                className="block py-3 pe-4 ps-11 font-medium hover:bg-gray-50"
              />
            </li>
          ))}
        </ul>
      </details>
    </li>
  );
}

function MobileMenuGroup({ group }: { group: SiteMobileMenuGroup }) {
  if (group.items.length === 0) return null;

  return (
    <div>
      {group.items.map((item) => (
        <MobileMenuItem item={item} key={item.id} />
      ))}
    </div>
  );
}

export function SiteMobileMenu({ account = null, groups }: SiteMobileMenuProps) {
  return (
    <>
      {account ? (
        <div className="p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full border border-solid border-gray-200">
              {account.avatar}
            </div>
            <Button
              href={account.action.href}
              icon={account.action.icon}
              onClick={account.action.onClick}
              size="sm"
              text={account.action.label}
            />
          </div>
        </div>
      ) : null}
      <ul className="space-y-4">
        {groups.map((group) => (
          <MobileMenuGroup group={group} key={group.id} />
        ))}
      </ul>
    </>
  );
}
