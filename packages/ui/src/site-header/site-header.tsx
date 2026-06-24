"use client";

import { useState, type ReactNode } from "react";
import { Menu } from "lucide-react";
import { Button } from "../button";
import { Header } from "../header";
import { Icon } from "../icon/icon";
import { Logo } from "../logo";
import { SheetFull } from "../sheet/Full";
import { sheetTallHeightClassName } from "../sheet/shared";
import { Text } from "../text";
import { cn } from "../utils/cn";
import type {
  SiteHeaderLinkItem,
  SiteHeaderMenuGroup,
  SiteHeaderProps,
} from "./site-header.types";

function HeaderActionItem({ item }: { item: SiteHeaderLinkItem }) {
  return (
    <Button
      aria-label={
        item.ariaLabel ?? (typeof item.label === "string" ? item.label : undefined)
      }
      href={item.href}
      icon={item.icon}
      className={item.className}
      onClick={item.onClick}
      onMouseEnter={item.onMouseEnter}
      showTextFrom={item.showTextFrom}
      size="sm"
      text={item.label}
      type="transparent"
    />
  );
}

function DesktopMenu({ groups }: { groups: SiteHeaderMenuGroup[] }) {
  if (groups.length === 0) return null;

  return (
    <div className="absolute left-1/2 top-[32px] hidden min-w-[500px] -translate-x-1/2 cursor-default pt-2.5 focus-within:block group-hover:block group-focus:block">
      <div className="max-h-[500px] overflow-hidden rounded-xl border border-solid border-gray-200 shadow-md">
        <div className="pointer-events-none absolute bottom-0 h-[100px] w-full rotate-180 rounded-t-xl bg-gradient-to-b from-white" />
        <div className="grid max-h-[500px] w-full auto-cols-max grid-flow-col gap-8 overflow-auto bg-white p-8 pb-16 focus-visible:outline-none">
          {groups.map((group) => (
            <div className="text-left" key={group.id}>
              {group.title ? (
                <div className="mb-2 flex items-center">
                  {group.icon ? (
                    <span className="flex text-primary">{group.icon}</span>
                  ) : null}
                  <Text size="default" className={group.icon ? "ms-2" : undefined}>
                    {group.title}
                  </Text>
                </div>
              ) : null}
              <ul className="grid">
                {group.links.map((link) => (
                  <li className="w-full" key={link.id}>
                    <a
                      href={link.href}
                      onClick={link.onClick}
                      className="inline-block w-full py-1 text-sm text-gray-700 hover:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileMenuSheet({
  children,
  label,
  onOpenChange,
  open,
}: {
  children: ReactNode;
  label: string;
  onOpenChange: (open: boolean) => void;
  open: boolean;
}) {
  return (
    <SheetFull.Root presented={open} onPresentedChange={onOpenChange}>
      <SheetFull.Portal>
        <SheetFull.View contentPlacement="bottom">
          <SheetFull.Backdrop />
          <SheetFull.CloseButton label={label} />
          <SheetFull.Content
            className={cn(
              "grid grid-rows-[min-content_1fr] rounded-t-3xl bg-white",
              sheetTallHeightClassName
            )}
          >
            <SheetFull.Header className="pb-4 pt-2">
              <SheetFull.Handle />
            </SheetFull.Header>
            <SheetFull.ScrollRoot className="h-full min-h-0">
              <SheetFull.ScrollView className="h-full min-h-0">
                <SheetFull.ScrollContent className="px-0 pb-8">
                  {children}
                </SheetFull.ScrollContent>
              </SheetFull.ScrollView>
            </SheetFull.ScrollRoot>
          </SheetFull.Content>
        </SheetFull.View>
      </SheetFull.Portal>
    </SheetFull.Root>
  );
}

export function SiteHeader({
  actionItems = [],
  appBanner = null,
  children = null,
  className,
  gatewaySearch = null,
  innerClassName,
  labels,
  languageSelector = null,
  logo = <Logo />,
  logoClassName,
  logoHref,
  menuGroups = [],
  mobileLogo = <Logo size="sm" />,
  mobileMenu = null,
  mobileMenuButton = true,
  mobileMenuOpen,
  onMobileMenuOpenChange,
  primaryItems = [],
  searchButton = null,
  sticky = true,
  userSlot = null,
}: SiteHeaderProps) {
  const [internalMobileMenuOpen, setInternalMobileMenuOpen] = useState(false);
  const isMobileMenuControlled = mobileMenuOpen !== undefined;
  const resolvedMobileMenuOpen = isMobileMenuControlled
    ? mobileMenuOpen
    : internalMobileMenuOpen;

  const setMobileMenuOpen = (open: boolean) => {
    if (!isMobileMenuControlled) {
      setInternalMobileMenuOpen(open);
    }
    onMobileMenuOpenChange?.(open);
  };

  return (
    <>
      {appBanner}
      <Header
        className={cn(
          "!relative !inset-x-auto !z-[105] !block !h-[var(--h-header)] !p-0 transition duration-200 ease-in",
          sticky && "!sticky !top-0",
          className
        )}
      >
        <div
          className={cn(
            "sa-container mx-auto flex h-full w-full items-center justify-between",
            innerClassName
          )}
        >
          <a
            href={logoHref}
            aria-label={labels.home}
            className="rounded-lg sm:me-6 lg:me-4"
          >
            <span
              className={cn(
                "relative start-[-3px] top-0.5 hidden origin-left scale-[0.9] transform lg:block rtl:origin-right",
                logoClassName
              )}
            >
              {logo}
            </span>
            <span className="relative flex origin-left transform lg:hidden rtl:origin-right">
              {mobileLogo}
            </span>
          </a>
          {gatewaySearch}
          <div className="flex w-full items-center justify-end gap-2 sm:w-auto sm:ps-4 lg:gap-0.5 [&>a:not(.user-button)]:!px-2 [&>button:not(.user-button)]:!px-2 [&_a]:whitespace-nowrap [&_button]:whitespace-nowrap">
            {children}
            {searchButton}
            {primaryItems.map((item) => {
              const desktopMenu =
                item.id === "activities" ? (
                  <DesktopMenu groups={menuGroups} />
                ) : null;

              return (
                <div
                  className={cn({
                    "group relative": Boolean(desktopMenu),
                  })}
                  key={item.id}
                >
                  <HeaderActionItem item={item} />
                  {desktopMenu}
                </div>
              );
            })}
            {actionItems.map((item) => (
              <HeaderActionItem item={item} key={item.id} />
            ))}
            {mobileMenu && mobileMenuButton ? (
              <Button
                type="transparent"
                size="sm"
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(true)}
                icon={<Icon icon={Menu} size="sm" />}
                aria-label={labels.menu}
              />
            ) : null}
            {languageSelector ? (
              <div className="!ms-2 lg:!ms-4">
                {languageSelector}
              </div>
            ) : null}
            {userSlot ? <div className="flex">{userSlot}</div> : null}
          </div>
        </div>
      </Header>
      {mobileMenu ? (
        <MobileMenuSheet
          label={labels.close}
          open={resolvedMobileMenuOpen}
          onOpenChange={setMobileMenuOpen}
        >
          {mobileMenu}
        </MobileMenuSheet>
      ) : null}
    </>
  );
}
