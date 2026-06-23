"use client";

import { useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import { Button, Icon } from "@swiss-activities/ui";
import { useCartStore } from "../Cart/store";
import { getPageUrl } from "../utils/content/loaders";
import { useI18n } from "../utils/i18n/useI18n";

type CartButtonProps = {
  className?: string;
};

export const CartButton = ({ className }: CartButtonProps) => {
  const { t, locale } = useI18n();
  const cart = useCartStore((state) => state.cart);
  const init = useCartStore((state) => state.init);
  const count = cart?.customData?.length ?? 0;

  useEffect(() => {
    init(locale, true);
  }, [init, locale]);

  return (
    <Button
      type="transparent"
      href={getPageUrl("basket", locale)}
      aria-label={t("pages.basket.title")}
      className={className}
      icon={
        <span className="relative flex">
          {count >= 1 ? (
            <span className="absolute -end-2.5 -top-2 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-white">
              {count}
            </span>
          ) : null}
          <Icon icon={ShoppingCart} size="sm" />
        </span>
      }
    />
  );
};
